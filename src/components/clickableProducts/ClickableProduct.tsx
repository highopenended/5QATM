import { useEffect, useMemo, useRef, useState } from "react";
import "./ClickableProduct.css";

type ClickableProductProps = {
  src: string;
  alt: string;
  href: string;
  className?: string;
  alphaThreshold?: number;
  width?: number;
  height?: number;

  // base scale system (maps to CSS vars used by your .pro-product rules)
  scale?: number;           // --scale
  hoverMultiplier?: number; // --hover-multiplier
};

/**
 * Typed CSS var helper (avoids "as any" and TS flags).
 */
type CSSVars = React.CSSProperties & {
  "--scale"?: number | string;
  "--hover-multiplier"?: number | string;
};

export default function ClickableProduct({
  src,
  alt,
  href,
  className,
  alphaThreshold = 10,
  width,
  height,
  scale,
  hoverMultiplier,
}: ClickableProductProps) {
  const imgRef = useRef<HTMLImageElement | null>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);

  // Debug: whether the pointer is currently over an opaque pixel
  const [isHit, setIsHit] = useState(false);

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;

    const syncCanvas = () => {
      const w = img.naturalWidth;
      const h = img.naturalHeight;
      if (!w || !h) return;

      canvas.width = w;
      canvas.height = h;
      ctx.clearRect(0, 0, w, h);
      ctx.drawImage(img, 0, 0);

      ctxRef.current = ctx;
    };

    if (img.complete) syncCanvas();
    else img.addEventListener("load", syncCanvas);

    return () => img.removeEventListener("load", syncCanvas);
  }, []);

  const alphaAtClientPoint = (clientX: number, clientY: number) => {
    const img = imgRef.current;
    const ctx = ctxRef.current;
    if (!img || !ctx) return 0;

    const rect = img.getBoundingClientRect();

    // Convert click point -> natural image pixel coords
    const rawX = ((clientX - rect.left) / rect.width) * img.naturalWidth;
    const rawY = ((clientY - rect.top) / rect.height) * img.naturalHeight;

    // Clamp to valid bounds (prevents edge errors)
    const x = Math.max(0, Math.min(img.naturalWidth - 1, Math.floor(rawX)));
    const y = Math.max(0, Math.min(img.naturalHeight - 1, Math.floor(rawY)));

    return ctx.getImageData(x, y, 1, 1).data[3];
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLAnchorElement>) => {
    const alpha = alphaAtClientPoint(e.clientX, e.clientY);
    const hit = alpha > alphaThreshold;
    // avoid extra re-renders
    setIsHit((prev) => (prev === hit ? prev : hit));
  };

  const handlePointerLeave = () => setIsHit(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const alpha = alphaAtClientPoint(e.clientX, e.clientY);

    if (alpha <= alphaThreshold) {
      e.preventDefault();
      e.stopPropagation();

      // Click-through: temporarily disable pointer events on this top element,
      // then find what's underneath at this point, then restore.
      const self = e.currentTarget as HTMLElement;
      const prev = self.style.pointerEvents;
      self.style.pointerEvents = "none";

      const elBelow = document.elementFromPoint(e.clientX, e.clientY) as HTMLElement | null;

      self.style.pointerEvents = prev;

      if (elBelow) {
        elBelow.dispatchEvent(
          new MouseEvent("click", {
            bubbles: true,
            cancelable: true,
            clientX: e.clientX,
            clientY: e.clientY,
          })
        );
      }
    }
  };

  const styleVars = useMemo<CSSVars>(() => {
    const vars: CSSVars = {};
    if (scale !== undefined) vars["--scale"] = scale;
    if (hoverMultiplier !== undefined) vars["--hover-multiplier"] = hoverMultiplier;
    return vars;
  }, [scale, hoverMultiplier]);

  return (
    <a
      href={href}
      onClick={handleClick}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      data-hit={isHit ? "1" : "0"}
      className={`clickable-product ${className ?? ""}`}
      aria-label={alt}
      style={styleVars}
    >
      <img ref={imgRef} src={src} alt={alt} draggable={false} width={width} height={height} loading="lazy" />
    </a>
  );
}

import { useEffect, useMemo, useRef } from "react";
import "./ClickableProduct.css";

type ClickableProductProps = {
  src: string;
  alt: string;
  href: string;
  className?: string;
  alphaThreshold?: number;

  // NEW:
  scale?: number;           // base scale (maps to --scale)
  hoverMultiplier?: number; // hover strength (maps to --hover-multiplier)
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
  scale,
  hoverMultiplier,
}: ClickableProductProps) {
  const imgRef = useRef<HTMLImageElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);

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

      canvasRef.current = canvas;
      ctxRef.current = ctx;
    };

    if (img.complete) syncCanvas();
    else img.addEventListener("load", syncCanvas);

    return () => img.removeEventListener("load", syncCanvas);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const img = imgRef.current;
    const ctx = ctxRef.current;
    if (!img || !ctx) return;

    const rect = img.getBoundingClientRect();

    const x = Math.floor(((e.clientX - rect.left) / rect.width) * img.naturalWidth);
    const y = Math.floor(((e.clientY - rect.top) / rect.height) * img.naturalHeight);

    const alpha = ctx.getImageData(x, y, 1, 1).data[3];

    if (alpha <= alphaThreshold) {
      e.preventDefault();
      e.stopPropagation();

      const elBelow = document.elementFromPoint(e.clientX, e.clientY);
      if (elBelow && elBelow !== e.currentTarget) {
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

  // NEW: set CSS variables (works with your existing .pro-product CSS)
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
      className={`clickable-product ${className ?? ""}`}
      aria-label={alt}
      style={styleVars}
    >
      <img ref={imgRef} src={src} alt={alt} draggable={false} />
    </a>
  );
}

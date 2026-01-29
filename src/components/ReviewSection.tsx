/**
 * ReviewSection Component
 *
 * Displays professional reviews with header text, decorative image, and three review boxes.
 * Structure: "Reviews"/"Professionals" title, staff-excite-text image, three teal boxes with staff images.
 * Staff images overlap the teal boxes for visual interest.
 */

import "./ReviewSection.css";
import reviewBackground from "../assets/review-background.png";
import staffExciteText from "../assets/staff-excite-text.png";
import staff1Image from "../assets/staff-1.png";
import staff2Image from "../assets/staff-2.png";
import staff3Image from "../assets/staff-3.png";
import reviewExciteText from "../assets/review-excite-text.png";
import reviewExciteTextWrap from "../assets/review-excite-text-wrap.png";
import reviewLady1 from "../assets/review-lady1.png";
import reviewLady2 from "../assets/review-lady2.png";

const ReviewSection = () => {
    return (
        <section 
            id="reviews"
            className="review-section"
            style={{ backgroundImage: `url(${reviewBackground})` }}
        >
            {/* Header: Title + Excite Text Image */}
            <div className="review-header">
                <div className="review-title-wrapper">
                    <h2 className="review-title-line1">Reviews</h2>
                    <h3 className="review-title-line2">Professionals</h3>
                </div>
                <img src={staffExciteText} alt="" className="staff-excite-image" />
            </div>

            {/* Review 1: Teal box left, staff-1 overlapping right */}
            <div className="review-item review-item-1">
                <div className="review-teal-box">
                    <div className="review-content">
                        <div className="review-brand">GRANMASH</div>
                        <div className="review-name">
                            <span className="review-name-last">小林</span>
                            <span className="review-name-first">忠</span>
                            <span className="review-name-honorific">様</span>
                        </div>
                        <div className="review-separator"></div>
                        <div className="review-text-line review-text-thin">ドライヤーの時間が</div>
                        <div className="review-text-line">
                            <span className="review-text-big">圧倒的</span>
                            <span className="review-text-spacer"></span>
                            <span className="review-text-thin">に</span>
                            <span className="review-text-spacer"></span>
                            <span className="review-text-big">短縮</span>
                            <span className="review-text-spacer"></span>
                            <span className="review-text-thin">できるだけでなく、</span>
                        </div>
                        <div className="review-text-line">
                            <span className="review-text-big">素晴らしい質感</span>
                            <span className="review-text-spacer"></span>
                            <span className="review-text-thin">です。</span>
                        </div>
                    </div>
                </div>
                <img src={staff1Image} alt="Professional review" className="staff-image staff-image-1" />
            </div>

            {/* Review 2: Teal box right, staff-2 overlapping left */}
            <div className="review-item review-item-2">
                <div className="review-teal-box review-teal-box-right">
                    <div className="review-content">
                        <div className="review-brand">COURAGE</div>
                        <div className="review-name">
                            <span className="review-name-last">畑中</span>
                            <span className="review-name-first">潤</span>
                            <span className="review-name-honorific">様</span>
                        </div>
                        <div className="review-separator"></div>
                        <div className="review-text-line review-text-thin">早く乾くだけじゃなく</div>
                        <div className="review-text-line">
                            <span className="review-text-big">毛先のまとまり</span>
                            <span className="review-text-spacer"></span>
                            <span className="review-text-thin">が</span>
                        </div>
                        <div className="review-text-line">
                            <span className="review-text-big">最高に良い</span>
                            <span className="review-text-spacer"></span>
                            <span className="review-text-thin">ので驚きました！</span>
                        </div>
                    </div>
                </div>
                <img src={staff2Image} alt="Professional review" className="staff-image staff-image-2" />
            </div>

            {/* Review 3: Teal box left, staff-3 overlapping right */}
            <div className="review-item review-item-3">
                <div className="review-teal-box">
                    <div className="review-content">
                        <div className="review-brand">Bellavita/松島塾</div>
                        <div className="review-name">
                            <span className="review-name-last">松島</span>
                            <span className="review-name-first">智仁</span>
                            <span className="review-name-honorific">様</span>
                        </div>
                        <div className="review-separator"></div>
                        <div className="review-text-line review-text-thin">お客様からも大人気です。</div>
                        <div className="review-text-line">
                            <span className="review-text-big">リピート率９６％以上</span>
                        </div>
                        <div className="review-text-line">
                            <span className="review-text-thin">の商品は初めてです！</span>
                        </div>
                    </div>
                </div>
                <img src={staff3Image} alt="Professional review" className="staff-image staff-image-3" />
            </div>

            {/* Review Excite Text */}
            <div className="review-white-section">
                <img src={reviewExciteText} alt="" className="review-excite-image review-excite-image-desktop" />
                <img src={reviewExciteTextWrap} alt="" className="review-excite-image review-excite-image-mobile" />

                {/* White Review Box 1: Left image overlap */}
                <div className="review-white-item review-white-item-1">
                    <div className="review-white-box">
                        <div className="review-white-content">
                            <h3 className="review-white-header">縮毛矯正のもちも良くなります！</h3>
                            <div className="review-white-separator"></div>
                            <div className="review-white-text">
                                <p className="review-white-text-wrap">シャンプーの香りも良いし、泡立ちがもの凄く良くてモコモコになります。私はシャンプーを浸透させたいので、目の細かいコームで髪をといて、少し放置でその間頭皮マッサージをするようにしています。洗い流したら、シャンプーだけでも手ぐしが通るくらいになります。タオルドライを簡単に、ドライヤーも早く乾きます。本当に髪の毛に優しいシャンプーです。</p>
                                <p className="review-white-text-line">縮毛矯正のもち、ダメージにも良い商品だと思います。</p>
                                <p className="review-white-text-line">私はもう他のシャンプーは使えないと思っています。</p>
                            </div>
                        </div>
                    </div>
                    <img src={reviewLady1} alt="Customer review" className="review-white-image review-white-image-1" />
                </div>

                {/* White Review Box 2: Right image overlap */}
                <div className="review-white-item review-white-item-2">
                    <div className="review-white-box">
                        <div className="review-white-content review-white-content-right">
                            <h3 className="review-white-header">髪がつるつるにまとまります</h3>
                            <div className="review-white-separator"></div>
                            <div className="review-white-text">
                                <p className="review-white-text-wrap">シャンプーはいかにも栄養がたっぷりはいっていそうな"こってり"としたテクスチャーです。少量でも泡立ちが良いのでコスパが良いと思います。</p>
                                <p className="review-white-text-wrap">泡を髪全体になじませてから、数分間泡パックをしてから洗い流すのですが、洗い流している段階ですでに違いを感じました！</p>
                                <p className="review-white-text-line">トリートメントを併用すると、乾かすだけで髪がつるつるにまとまります</p>
                                <p className="review-white-text-line">乾かす時間も短くて済むので、ドライヤーの熱による髪の痛みも避けられます。</p>
                                <p className="review-white-text-line">使い続ける度に髪がきれいになるのが実感でき、周りにも褒められました！</p>
                            </div>
                        </div>
                    </div>
                    <img src={reviewLady2} alt="Customer review" className="review-white-image review-white-image-2" />
                </div>
            </div>
        </section>
    );
};

export default ReviewSection;

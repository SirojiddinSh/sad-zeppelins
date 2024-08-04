import Container from "../../../utils/Container";
import Twitter from "../../../images/home-images/twitter-icon.png";
import inIcon from "../../../images/home-images/in-icon.png";
import dumaloqIcon from "../../../images/home-images/dumaloq-icon.png";
import { useTranslation } from "react-i18next";
import "./Section1.css";

const Section1 = () => {
    let { t } = useTranslation();
    return (
        <section>
            <Container>
                <div className="section1">
                    <div className="section1__wrapper">
                        <div className="section1__titles">
                            <h2 className="section1__title1">
                                {t("Blog Posts")}
                            </h2>
                            <h2 className="section1__title2">
                                {t("I think so, this is it.")}
                            </h2>
                            <p className="section1__text">
                                {t(
                                    "Design begins after I begin to think about how to present an experience most successfully, whether a button I put in can solve a problem. The only point in design is not ui design, if the user does not have a good experience at the end of the product, the design will be considered unsuccessful in my opinion."
                                )}
                            </p>
                        </div>
                        <div className="section1__btns">
                            <a target="_blank" href="https://x.com/?lang=ru">
                                <button className="section1__btn1">
                                    <img src={Twitter} alt="" />
                                    <p>TWITTER</p>
                                </button>
                            </a>
                            <a target="_blank" href="https://ru.linkedin.com/">
                                <button className="section1__btn2">
                                    <img src={inIcon} alt="" />
                                    <p>LINKEDIN</p>
                                </button>
                            </a>
                            <a target="_blank" href="https://medium.com/">
                                <button className="section1__btn3">
                                    <img src={dumaloqIcon} alt="" />
                                    <p>MEDIUM</p>
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className="section1__img">
                        <div></div>
                        <img
                            src="https://s3-alpha-sig.figma.com/img/ec11/9629/d4d72d2f2507f1d163937f6b745b1d5c?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ojFFcFQ7kTBA3kzNhnIZaXqu3n7N4su9-TLAlFcZlU6oYUX6dRm8LpVg3wTHay5VbGMcNdgEzIwS7dcfdadvJVysSa1p8cwr7IW-STrwSEQ5LeXfOXFA8gRaxDBxBmFRWvL2UnCVXrbrP61w-DSy2xLm~3nINbSeTQmnTSNYSgUP-yJhkeI1IXQ~chsUieCvf4mIBA75jnM8VuDJL0qZebRx-KE4Phr~r8XuD7E0JyoBFGS6QZUGn9kkwk~jv8iEyZ1MIyihpipLmHF7dHw-eMnShnLeBxrTta-uYyQErowoSPh7-tOLq6ONYFyknBLsjVA~hTTKcq331PPPI4~kSQ__"
                            alt=""
                        />
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Section1;

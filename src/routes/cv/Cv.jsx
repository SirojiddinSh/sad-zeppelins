import "./Cv.css";
import { useTranslation } from "react-i18next";

const Cv = () => {
    const { t } = useTranslation();
    return (
        <div className="contain">
            <h1>Shomurod Shoakbarov</h1>
            <p>{t("Tashkent, Uzbekistan")}</p>
            <p>Email: shomurod@example.com | Telefon: +998 90 123 45 67</p>

            <div className="section">
                <div className="section-title">{t("Information")}</div>
                <p>
                    {t(
                        "I am Shoukbarov Shomurod. I am 16 years old. Me I live in Tashkent. Our family consists of 7 people. Now there are 3 of us because my sisters are married they left I like programming, Taekwondo, Calisthenics and music I am interested to listen."
                    )}
                </p>
            </div>

            <div className="section">
                <div className="section-title">{t("Education")}</div>
                <p>
                    <strong>{t("School in Tashkent city")}</strong> -{" "}
                    {t("2023 yearFrom October 14 to now")}
                </p>
                <p>
                    <strong>{t("Online courses on programming")}</strong> -{" "}
                    {t("Finddifficult")}
                </p>
            </div>

            <div className="section">
                <div className="section-title">{t("Experience")}</div>
                <p>
                    {t(
                        "I am interested in programming and in various online courses I participated. My knowledge of HTML, CSS and JavaScript there is"
                    )}
                </p>
            </div>

            <div className="section">
                <div className="section-title">{t("Abilities")}</div>
                <ul>
                    <li>{t("Being able to listen")}</li>
                    <li>{t("Smile")}</li>
                </ul>
            </div>

            <div className="section">
                <div className="section-title">{t("Interests")}</div>
                <ul>
                    <li>{t("Programming")}</li>
                    <li>Taekwondo</li>
                    <li>Calisthenics</li>
                    <li>{t("Listen to music")}</li>
                </ul>
            </div>
        </div>
    );
};

export default Cv;

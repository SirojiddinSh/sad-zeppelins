import "./Nav.css";
import { NavLink } from "react-router-dom";
import Container from "../../utils/Container";
import i18n from "../../locales/i18next";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { Select } from "antd";

const provinceData = ["Zhejiang", "Jiangsu"];
const cityData = {
    Zhejiang: ["Hangzhou", "Ningbo", "Wenzhou"],
    Jiangsu: ["Nanjing", "Suzhou", "Zhenjiang"],
};

const Nav = () => {
    const { t } = useTranslation();

    const handleLanguageChange = (value) => {
        i18n.changeLanguage(value);
    };

    return (
        <nav>
            <Container>
                <div className="nav">
                    <div className="nav_title">
                        <div className="nav__title__div">
                            <h2 className="nav__title__1">sad </h2>
                            <h2 className="nav__title__2">zeppelins</h2>
                        </div>
                        <div className="nav_HireMe">
                            <p className="nav__in">in</p>
                            <p className="nav__hire">Hire Me</p>
                        </div>
                    </div>
                    <div className="nav_links">
                        <Select
                            defaultValue={i18n.language}
                            style={{
                                width: 60,
                                marginRight: 20,
                            }}
                            onChange={handleLanguageChange}
                            options={[
                                { label: "EN", value: "en" },
                                { label: "UZ", value: "uz" },
                                { label: "RU", value: "ru" },
                                { label: "ES", value: "es" },
                            ]}
                        />
                        <ul>
                            <li>
                                <NavLink to="/">{t("HOME")}</NavLink>
                            </li>
                            <li>
                                <NavLink
                                    target="_blank"
                                    to="https://6-oy-6-dars-six.vercel.app/"
                                >
                                    {t("PORTFOLIO")}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/cv">CV</NavLink>
                            </li>
                            <li>
                                <NavLink to="/about">{t("ABOUT")}</NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact">{t("CONTACT")}</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </Container>
        </nav>
    );
};

export default Nav;

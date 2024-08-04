import "./HomeLinks.css";
import { NavLink, Outlet } from "react-router-dom";
import Container from "../../utils/Container";
import { useTranslation } from "react-i18next";

const HomeLinks = () => {
    let { t } = useTranslation();
    return (
        <div>
            <Container>
                <div className="home__linkss">
                    <ul>
                        <li>
                            <NavLink to="/">{t("All")}</NavLink>
                        </li>
                        <li>
                            <NavLink to="/ui">UI Design</NavLink>
                        </li>
                        <li>
                            <NavLink to="/ux">UX Design</NavLink>
                        </li>
                        <li>
                            <NavLink to="/product">{t("Products")}</NavLink>
                        </li>
                    </ul>
                </div>
            </Container>
        </div>
    );
};

export default HomeLinks;

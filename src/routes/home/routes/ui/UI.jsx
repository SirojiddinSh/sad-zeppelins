import "./UI.css";
import { UI } from "../../../../cloneApi/Clone";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom/dist";

const UIcards = () => {
    let { t } = useTranslation();

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const singlePage = (item) => {
        dispatch({
            type: "SINGLE",
            payload: item,
        });
        navigate(`/single/${item.id}`);
    };
    return (
        <div>
            <div className="UI__cards">
                {UI.map((item) => {
                    return (
                        <div className="UI__card" key={item.id}>
                            <img
                                src={item.img}
                                alt=""
                                onClick={() => singlePage(item)}
                                style={{ cursor: "pointer" }}
                            />
                            <h3>NOV 23 2020</h3>
                            <h2>{item.title}</h2>
                            <p>
                                {t(
                                    "A quick guide to assisting users in the challenging steps from learning about your podcast on the web. A quick guide to assisting  users in the  challenging steps from learning about your podcast on the web."
                                )}
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default UIcards;

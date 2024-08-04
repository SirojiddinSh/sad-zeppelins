import { useSelector } from "react-redux";
import Container from "../../utils/Container";
import { useTranslation } from "react-i18next";

const SinglePage = () => {
    const { t } = useTranslation();
    const singleProduct = useSelector((state) => state.single);

    return (
        singleProduct && (
            <Container>
                <img
                    style={{ marginTop: "100px" }}
                    src={singleProduct.img}
                    alt=""
                    width={1200}
                    height={845}
                />
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "50px",
                        marginTop: "150px",
                        marginBottom: "400px",
                    }}
                >
                    <div>
                        <h2
                            style={{
                                color: "#3A0CA3",
                                fontSize: "42px",
                                fontWeight: "700",
                                lineHeight: "52px",
                                fontFamily: "sans-serif",
                                marginBottom: "60px",
                            }}
                        >
                            {t("BLOG DETAILS H1")}
                        </h2>
                        <div
                            style={{
                                color: "#424242",
                                display: "flex",
                                flexDirection: "column",
                                gap: "30px",
                            }}
                        >
                            <p>
                                {t(
                                    "Just like graphic design and web development, UX design trends come and go for a reason. UX is all about developing a better digital world for humanity. It’s a field that requires innovation, but that is constantly evolving. Regularly following UX design blogs can help you keep on top of changes in the industry, as well as develop your UX skills."
                                )}
                            </p>
                            <p>
                                {t(
                                    "Additionally, many UX design blogs expose you to case studies detailing an app or web’s successful development, along with how its usability was improved. Reading about these types of cases can help give you ideas. In this sense, UX design blogs can help provide an indication for the kinds of directions your future projects should take."
                                )}
                            </p>
                            <p>
                                {t(
                                    "Additionally, many UX design blogs expose you to case studies detailing an app or web’s successful development, along with how its usability was improved. Reading about these types of cases can help give you ideas. In this sense, UX design blogs can help provide an indication for the kinds of directions your future projects should take."
                                )}
                            </p>
                        </div>
                    </div>
                    <div>
                        <h3
                            style={{
                                color: "#3A0CA3",
                                fontSize: "36px",
                                fontWeight: "700",
                                lineHeight: "43px",
                                fontFamily: "sans-serif",
                                marginBottom: "45px",
                            }}
                        >
                            {t("BLOG DETAILS H2")}
                        </h3>
                        <div
                            style={{
                                color: "#424242",
                                display: "flex",
                                flexDirection: "column",
                                gap: "30px",
                            }}
                        >
                            <p>
                                {t(
                                    "Just like graphic design and web development, UX design trends come and go for a reason. UX is all about developing a better digital world for humanity. It’s a field that requires innovation, but that is constantly evolving. Regularly following UX design blogs can help you keep on top of changes in the industry, as well as develop your UX skills."
                                )}
                            </p>
                            <p>
                                {t(
                                    "Additionally, many UX design blogs expose you to case studies detailing an app or web’s successful development, along with how its usability was improved. Reading about these types of cases can help give you ideas. In this sense, UX design blogs can help provide an indication for the kinds of directions your future projects should take."
                                )}
                            </p>
                            <p>
                                {t(
                                    "Additionally, many UX design blogs expose you to case studies detailing an app or web’s successful development, along with how its usability was improved. Reading about these types of cases can help give you ideas. In this sense, UX design blogs can help provide an indication for the kinds of directions your future projects should take."
                                )}
                            </p>
                        </div>
                    </div>
                    <div>
                        <h4
                            style={{
                                color: "#3A0CA3",
                                fontSize: "24px",
                                fontWeight: "700",
                                lineHeight: "30px",
                                fontFamily: "sans-serif",
                                marginBottom: "30px",
                            }}
                        >
                            {t("BLOG DETAILS H3")}
                        </h4>
                        <div
                            style={{
                                color: "#424242",
                                display: "flex",
                                flexDirection: "column",
                                gap: "30px",
                            }}
                        >
                            <p>
                                {t(
                                    "Just like graphic design and web development, UX design trends come and go for a reason. UX is all about developing a better digital world for humanity. It’s a field that requires innovation, but that is constantly evolving. Regularly following UX design blogs can help you keep on top of changes in the industry, as well as develop your UX skills."
                                )}
                            </p>
                            <p>
                                {t(
                                    "Additionally, many UX design blogs expose you to case studies detailing an app or web’s successful development, along with how its usability was improved. Reading about these types of cases can help give you ideas. In this sense, UX design blogs can help provide an indication for the kinds of directions your future projects should take."
                                )}
                            </p>
                            <p>
                                {t(
                                    "Additionally, many UX design blogs expose you to case studies detailing an app or web’s successful development, along with how its usability was improved. Reading about these types of cases can help give you ideas. In this sense, UX design blogs can help provide an indication for the kinds of directions your future projects should take."
                                )}
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        )
    );
};

export default SinglePage;

import "./About.css";
import React from "react";
import Container from "../../utils/Container";
import men from "../../images/men.jpg";
import { useTranslation } from "react-i18next";

const About = () => {
    let { t } = useTranslation();
    return (
        <div>
            <Container>
                <div className="about">
                    <img src={men} alt="" />
                    <div className="about__text">
                        <p>
                            {t(
                                "Hello, my name is Shoukbarov Shomurod. I am 16 years old. I live in Tashkent. Our family consists of 7 people. Now there are 3 of us, because my sisters are married. I am interested in programming, taekwondo, calisthenics and listening to music. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus, sunt! Enim nam eum eligendi nobis rerum iste! Non, error perferendis architecto similique facere molestiae dolorem quidem velit soluta animi expedita numquam, laboriosam quod ullam ipsa vero quaerat natus, facilis necessitatibus cum ex? Molestiae, voluptatum! Tempore, libero! Iusto a unde reiciendis. . It was serialized in Kodansha's Shōnen manga magazine Weekly Shōnen Magazine from March 2017 to November 2022, with chapters collected in 31 tankobon volumes. The story follows Takemichi Hanagaki, a 26-year-old part-timer with a sad life, who learns that his ex-girlfriend, Hinata Tachibana, has died in a dispute involving the Tokyo Manji Gang. The next day, Takemichi is on his way home from part-time work when he is pushed off the subway platform by someone. As he is about to strike, he jumps back twelve years to the year he met Hinata. Knowing this, he decides to do everything to prevent his death."
                            )}
                        </p>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default About;

import React from "react";
import Section1 from "./section1/Section1";
import Section2 from "./section2/Section2";
import HomeLinks from "../../components/homeLinks/HomeLinks";
import All from "../home/routes/all/All";
import UI from "../home/routes/ui/UI";
import UX from "../home/routes/ux/UX";
import Product from "../home/routes/product/Product";
import { Route, Routes } from "react-router";

const Home = () => {
    return (
        <div>
            <Section1 />
            <HomeLinks />
            <Section2>
                <Routes>
                    <Route path="*" element={<All />} />
                    <Route path="ui" element={<UI />} />
                    <Route path="ux" element={<UX />} />
                    <Route path="product" element={<Product />} />
                </Routes>
            </Section2>
        </div>
    );
};

export default Home;

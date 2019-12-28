import React from "react";
import Search from "../components/search";
import Card from "../components/card";

const Home = () => {
    const cards = new Array(15)
        .fill('')
        .map((_, i) => i);
    console.log(cards);

    return (
        <>
            <div>Home Page</div>
            <Search/>
            <div className="row">
                {cards.map(card => {
                    return (
                        <div className="col-sm-4 mb-4" key={card}>
                            <Card/>
                        </div>
                    );
                })}
            </div>
        </>
    )
};

export default Home;

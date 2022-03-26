import React from "react";
import Card from "./Card";
import uuid from 'react-uuid'

let CardList = ({ data }) => {
    let allCards = data.businesses.map(card => {
        return (
            <div className="menuItem" key={uuid()}>
                <Card card={card} />
            </div>
        )
    })
    return (
        <>
            {allCards}
        </>

    )
}

export default CardList;
import React, { useState } from "react";
import Category from "./Category";

let SwipeMenu = ({ categories, getDataForCategory, activeCategory }) => {

    let [startFrom, setStartFrom] = useState();
    let [displayMenu, setDisplayMenu] = useState(categories.length > 1 ? [categories[0], categories[1]] : [categories[0]]);

    let displayedCategories = displayMenu.map((cat, index) => {
        return (
            <div key={cat} onDragStart={(ev) => startDrag(ev, index === 0? 'left': 'right')} onDrop={(ev) => droped(ev, index === 0? 'left': 'right')} 
            onDragOver={(ev) => allowDrop(ev)} id={index === 0? "swipeLeft": "swipeRight"}>
                <div className="swipeItem">
                    <Category getDataForCategory={getDataForCategory} category={cat} activeCategory={activeCategory} />
                    <small>{index > 0? '<<< ':''}swipe{index===0? ' >>>':''}</small>
                </div>
            </div>
        )
    })

    let allowDrop = (ev) => {
        ev.preventDefault();
    }

    let droped = (ev, position) => {
        ev.preventDefault();
        if (startFrom !== position) {
            console.log('droped ', position)
            moveMenu(position)
        }
    }

    let startDrag = (ev, position) => {
        setStartFrom(position);
    }

    let moveMenu = (position) => {
        if (position === 'right') {
            categories.map((cat, index) => {
                if (cat === displayMenu[0]) {
                    setDisplayMenu(index - 1 < 0 ? [categories[categories.length - 1], categories[index]] : [categories[index - 1], categories[index]])
                }
            })
        } else {
            categories.map((cat, index) => {
                if (cat === displayMenu[1]) {
                    setDisplayMenu(index + 1 > categories.length - 1 ? [categories[index], categories[0]] : [categories[index], categories[index + 1]])
                }
            })
        }
    }

    return (
        <div className="swipeMenu">
            {displayedCategories}
        </div>
    )
}

export default SwipeMenu;
import React from "react";

let Card = ({ card }) => {

    let goToSite = (url) => {
        window.open(url);
    }

    return (
        <div className="card" onClick={(e) => goToSite(card.url)}>
            <img alt='' src={card.image_url}></img>
            <div className="titleHolder">
                <p title={card.name} >{card.name.substring(0, 20)}{card.name.length > 20? '...':''}</p>
            </div>
            <div className="ratingHolder">

                {card.rating === 1 && <span><i className="fas fa-star"></i>   <i className="far fa-star"></i>   <i className="far fa-star"></i>   <i className="far fa-star"></i>   <i className="far fa-star"></i></span> }
                {card.rating === 1.5 && <span><i className="fas fa-star"></i>    <i className="fa-solid fa-star-half-stroke"></i>   <i className="far fa-star"></i>   <i className="far fa-star"></i>   <i className="far fa-star"></i></span> }
                {card.rating === 2 && <span><i className="fas fa-star"></i>    <i className="fas fa-star"></i>   <i className="far fa-star"></i>   <i className="far fa-star"></i>   <i className="far fa-star"></i></span> }
                {card.rating === 2.5 && <span><i className="fas fa-star"></i>    <i className="fas fa-star"></i>   <i className="fa-solid fa-star-half-stroke"></i>   <i className="far fa-star"></i>   <i className="far fa-star"></i></span> }
                {card.rating === 3 && <span><i className="fas fa-star"></i>    <i className="fas fa-star"></i>   <i className="fas fa-star"></i>   <i className="far fa-star"></i>   <i className="far fa-star"></i></span> }
                {card.rating === 3.5 && <span><i className="fas fa-star"></i>    <i className="fas fa-star"></i>   <i className="fas fa-star"></i>    <i className="fa-solid fa-star-half-stroke"></i>   <i className="far fa-star"></i></span> }
                {card.rating === 4 && <span><i className="fas fa-star"></i>    <i className="fas fa-star"></i>   <i className="fas fa-star"></i>    <i className="fas fa-star"></i>   <i className="far fa-star"></i></span> }
                {card.rating === 4.5 && <span><i className="fas fa-star"></i>    <i className="fas fa-star"></i>   <i className="fas fa-star"></i>    <i className="fas fa-star"></i>   <i className="fa-solid fa-star-half-stroke"></i></span> }
                {card.rating === 5 && <span><i className="fas fa-star"></i>    <i className="fas fa-star"></i>   <i className="fas fa-star"></i>    <i className="fas fa-star"></i>   <i className="fas fa-star"></i></span> }

                <span className="price">| $$$</span>
            </div>
            <div className="buttonHolder">
                <button type='button' className='cardButton'>VIEW</button>
            </div>
        </div>
    )
}

export default Card;
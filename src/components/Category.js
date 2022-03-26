import React from "react";

let Category = ({ getDataForCategory, category, activeCategory }) => {
    return (
        <div key={category} className="categoryItem">
            <button type='button' onClick={() => getDataForCategory(category)} className={`categoryButton ${activeCategory === category ? 'textUnderL' : ''}`} >{category}</button>
        </div>
    )

}


export default Category;

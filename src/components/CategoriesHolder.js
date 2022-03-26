import React from "react";
import Category from "./Category";

let CategoriesHolder = ({ categories, getDataForCategory, activeCategory }) => {
    let allCategories = categories.map(cat => {
        return (
            <Category key={cat} getDataForCategory={getDataForCategory} category={cat} activeCategory={activeCategory} />
        )
    })
    return (
        <div className="categoryHolder">
            {allCategories}
        </div>
    )
}

export default CategoriesHolder;
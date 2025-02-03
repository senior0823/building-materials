import React from "react";
import { recentlyImages, recentlyProducts, weeklyImages, weeklyProducts, interestImages, interestProducts } from "./productData";
import RecommandedProducts from "./recommandedProducts";

const productBar = () => {
    return (
        <div className="m-auto">
            <RecommandedProducts title="You Maybe Interested In" imageArray={interestImages} productData={interestProducts} />
            <RecommandedProducts title="Popular This Week" imageArray={weeklyImages} productData={weeklyProducts} />
            <RecommandedProducts title="You Recenlty Viewed" imageArray={recentlyImages} productData={recentlyProducts} />
        </div>
    )
}

export default productBar;
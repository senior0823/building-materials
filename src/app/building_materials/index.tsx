import React from "react";
import CollectionBreadcrumbs from "@/components/collection/CollectionBreadcrumbs";
import CollectionBrand from "@/components/collection/CollectionBrands";
import CollectionSummary from "@/components/collection/CollectionSummary";
import CollectionList from "@/components/collection/CollectionList";
import CollectionSort from "@/components/collection/CollectionSort";
import CollectionCategory from "@/components/collection/RelatedCategory";

const BuildingMaterials : React.FC = () =>{
    return(
        <div>
            <CollectionBreadcrumbs/>
            <CollectionBrand/>
            <CollectionSummary/>
            <CollectionList/>
            <CollectionSort/>
            <CollectionCategory/>
        </div>
    )
}

export default BuildingMaterials;
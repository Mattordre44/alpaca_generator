import React from "react";
import { Category } from "../../types/category";
import { utils } from "../../utils/utils";

type PropsType = {
    category: Category;
    property: string;
}

export default function AlpacaImage (props: PropsType) {
    return (
        <div className={`alpaca-image-container alpaca-${ props.category }`}>
            <img
                className={ "alpaca-image" }
                src={  utils[props.category][props.property] }
                alt={ `alpaca ${ props.category }-${props.property}` }
            />
        </div>
    )
}

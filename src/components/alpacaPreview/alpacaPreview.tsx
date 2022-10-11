import { Category } from "../../types/category";
import { CurrentAlpacaContext } from "../../alpacaProvider";
import AlpacaImage from "./alpacaImage";
import "./alpacaPreview.css"

export default function AlpacaPreview() {
    return (
        <CurrentAlpacaContext.Consumer>
            {
                value => (
                    <>
                        <h1 className={"title"}>Alpaca Generator</h1>
                        <div className={"alpaca-container"}>
                            {Object.values(Category).map(category => (
                                <AlpacaImage
                                    key={`${category}-${value.currentAlpaca[category]}`}
                                    category={category}
                                    property={value.currentAlpaca[category]}/>
                            ))}
                        </div>
                    </>
                )
            }
        </CurrentAlpacaContext.Consumer>
    )
}

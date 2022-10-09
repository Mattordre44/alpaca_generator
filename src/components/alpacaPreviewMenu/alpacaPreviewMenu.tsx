import React from "react";
import { CurrentAlpacaContext } from "../../alpacaProvider";
import "./alpacaPreviewMenu.css";

export default function AlpacaPreviewMenu() {
    return (
        <CurrentAlpacaContext.Consumer>
            {
                value => (
                    <div className={"alpaca-preview-menu"}>
                        <button className="alpaca-button" onClick={ value.generateRandomAlpaca }>
                            Random
                        </button>
                        <button className="alpaca-button" onClick={ value.downloadAlpacaImage }>
                            Download
                        </button>
                    </div>
                )
            }
        </CurrentAlpacaContext.Consumer>
    );
}

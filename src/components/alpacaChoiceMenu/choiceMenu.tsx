import { useCallback, useContext } from "react";
import { CurrentAlpacaContext } from "../../alpacaProvider";
import { Category } from "../../types/category";
import { utils } from "../../utils/utils";
import "./choiceMenu.css";

type PropsType = {
    selectedCategory: Category;
}

export default function ChoiceMenu(props: PropsType) {

    const context = useContext(CurrentAlpacaContext);

    /**
     * Callback method to handle on change property of the alpaca
     * -> Call the method modifyAlpacaProperty of parent component
     */
    const handleOnChangeProperty = useCallback(event => context.modifyAlpacaProperty(props.selectedCategory, event.target.value), [context, props.selectedCategory]);

    return (
        <>
            <h2 className={"menu-title"}>Choice</h2>
            <div className={"choice-button-container"}>
                {
                    Object.keys(utils[props.selectedCategory]).map((property: string) => (
                        <button key={ `${props.selectedCategory}-${property}` }
                                className={"choice-button"}
                                value={ property }
                                onClick={ handleOnChangeProperty }
                        > { property }
                        </button>
                    ))
                }
            </div>
        </>
    )
}

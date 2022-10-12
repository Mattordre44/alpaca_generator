import React, { useCallback, useState } from "react";
import mergeImages from "merge-images";
import { AlpacaType } from "./types/alpacaType";
import { Category } from "./types/category";
import { utils } from "./utils/utils";

export interface CurrentAlpacaContextType {
    currentAlpaca: AlpacaType,
    generateRandomAlpaca: () => void,
    downloadAlpacaImage: () => void,
    modifyAlpacaProperty: (category: Category, value: string) => void
}

const initialAlpaca = {
    [Category.accessories]: "glasses",
    [Category.backgrounds]: "blue50",
    [Category.ears]: "default",
    [Category.eyes]: "default",
    [Category.hair]: "default",
    [Category.leg]: "default",
    [Category.mouth]: "default",
    [Category.neck]: "default",
    [Category.nose]: "default"
}

export const CurrentAlpacaContext = React.createContext<CurrentAlpacaContextType>({
    currentAlpaca: initialAlpaca,
    generateRandomAlpaca: () => {},
    downloadAlpacaImage: () => {},
    modifyAlpacaProperty: () => {}
})

/**
 * Function which return a random number between 0 and the specified number
 * @param arrayLength the number of properties
 */
function getRandomInt(arrayLength: number) {
    return Math.floor(Math.random() * arrayLength);
}

/**
 * Function which define the provider of the current alpaca context
 * @param children
 */
export default function AlpacaProvider({ children }: { children: any }) {
    const [currentAlpaca, setCurrentAlpaca] = useState<AlpacaType>(initialAlpaca);

    /**
     * Function which set current Alpaca state with random properties
     */
    const generateRandomAlpaca = () => {
        setCurrentAlpaca({
            [Category.accessories]: Object.keys(utils[Category.accessories])[getRandomInt(Object.keys(utils[Category.accessories]).length)],
            [Category.backgrounds]: Object.keys(utils[Category.backgrounds])[getRandomInt(Object.keys(utils[Category.backgrounds]).length)],
            [Category.ears]: Object.keys(utils[Category.ears])[getRandomInt(Object.keys(utils[Category.ears]).length)],
            [Category.eyes]: Object.keys(utils[Category.eyes])[getRandomInt(Object.keys(utils[Category.eyes]).length)],
            [Category.hair]: Object.keys(utils[Category.hair])[getRandomInt(Object.keys(utils[Category.hair]).length)],
            [Category.leg]: Object.keys(utils[Category.leg])[getRandomInt(Object.keys(utils[Category.leg]).length)],
            [Category.mouth]: Object.keys(utils[Category.mouth])[getRandomInt(Object.keys(utils[Category.mouth]).length)],
            [Category.neck]: Object.keys(utils[Category.neck])[getRandomInt(Object.keys(utils[Category.neck]).length)],
            [Category.nose]: Object.keys(utils[Category.nose])[getRandomInt(Object.keys(utils[Category.nose]).length)]
        })
    };

    /**
     * Function that allows to download the image
     */
    const downloadAlpacaImage = useCallback(() => {
        mergeImages([
            utils.backgrounds[currentAlpaca.backgrounds],
            utils.neck[currentAlpaca.neck],
            utils.nose[currentAlpaca.nose],
            utils.ears[currentAlpaca.ears],
            utils.leg[currentAlpaca.leg],
            utils.mouth[currentAlpaca.mouth],
            utils.hair[currentAlpaca.hair],
            utils.eyes[currentAlpaca.eyes],
            utils.accessories[currentAlpaca.accessories]
        ]).then(b64 => {
            const link = document.createElement("a");
            link.download = "alpaca.png";
            link.href = b64;
            link.click();
            link.remove();
        });
    }, [currentAlpaca]);

    /**
     * Method update the state of the current Alpaca for the specified category
     * @param {Category} category the category to update
     * @param {string} value the new value
     */
    const modifyAlpacaProperty = (category: Category, value: string) => {
        setCurrentAlpaca((prevState: AlpacaType) => ({...prevState, [category]: value}));
    };

    const value = {
        currentAlpaca: currentAlpaca,
        generateRandomAlpaca: generateRandomAlpaca,
        downloadAlpacaImage: downloadAlpacaImage,
        modifyAlpacaProperty: modifyAlpacaProperty
    }

    return (
        <CurrentAlpacaContext.Provider value={ value }>
            { children }
        </CurrentAlpacaContext.Provider>
    )
}

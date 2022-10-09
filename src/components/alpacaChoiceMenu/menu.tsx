import { useState } from "react";
import { Category } from "../../types/category";
import CategoryMenu from "./categoryMenu";
import ChoiceMenu from "./choiceMenu";
import "./menu.css";

export default function Menu() {
    const [selectedCategory, setSelectedCategory] = useState<Category>(Object.values(Category)[0]);

    return (
        <div className={"menu-card"}>
            <CategoryMenu
                selectedCategory={ selectedCategory }
                setSelectedCategory={ setSelectedCategory }
            />
            <ChoiceMenu
                selectedCategory={ selectedCategory }
            />
        </div>
    )
}

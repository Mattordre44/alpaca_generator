import { useCallback } from "react";
import { Category } from "../../types/category";
import "./categoryMenu.css";

type PropsType = {
    selectedCategory: Category;
    setSelectedCategory: (value: Category) => void;
}

export default function CategoryMenu(props: PropsType) {

    /**
     * Callback method to handle on change category
     * -> Call the method setSelectedCategory of parent component
     */
    const handleOnClickCategory = useCallback(event => props.setSelectedCategory(event.target.value), [props]);

    return (
      <>
          <h2 className={"menu-title"}>Category</h2>
          <div className={"category-button-container"}>
              {
                  (Object.values(Category)).map(category => {
                      return (
                          <button
                              key={ category }
                              value={ category }
                              className={"category-button"}
                              disabled={ props.selectedCategory === category }
                              onClick={ handleOnClickCategory }
                          > { category }
                          </button>
                      );
                  })
              }
          </div>
      </>
    );
}

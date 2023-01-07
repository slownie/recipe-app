import { createContext, useReducer } from "react";

export const RecipeContext = createContext();

export const recipeReducer = (state,action) => {
    switch(action.type) {
        case 'setRecipe':
            return {
                recipes: action.payload
            }
        case 'createRecipe':
            return {
                recipes: [action.payload, ...state.recipes]
            }
        default:
            return state
    }
}

export const RecipeContextProvider = ({children}) => {
    const [state,dispatch] = useReducer(recipeReducer, {
        recipes: null
    });

    return (
        <RecipeContext.Provider value={{state, dispatch}}>
            {children}
        </RecipeContext.Provider>
    );
}
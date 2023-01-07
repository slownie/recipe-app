const Recipe = ({recipe}) => {
    return (
        <div className="recipe-container">
            <h4>{recipe.title}</h4>
            <p>{recipe.desc}</p>
            <p>{recipe.ingredients}</p>
            <p>{recipe.steps}</p>
        </div>
    )
}
export default Recipe
import { useState } from "react";

const RecipeForm = () => {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [steps, setSteps] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [image, setImage] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = JSON.parse(localStorage.getItem('user'))
        const userID = user.id
        const username = user.user.username;
        console.log(userID)
        console.log(username)
        const recipe = {title,desc,steps,ingredients,image,userID}

        const response = await fetch('/api/recipe/create', {
            method: 'POST',
            body: JSON.stringify(recipe),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json();
        

        if (!response.ok) {
            setError(json.error);
        }
        if (response.ok) {
            setError(null);
            console.log(JSON.stringify(json))
            setTitle('');
            setDesc('');
            setSteps('');
            setIngredients('');
            setImage('');
        }
    }

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a New Recipe</h3>

            <label>Recipe Name: </label>
            <input
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
            />

            <label>Recipe Description: </label>
            <input
                type="text"
                onChange={(e) => setDesc(e.target.value)}
                value={desc}
            />

            <label>Recipe Steps: </label>
            <input
                type="text"
                onChange={(e) => setSteps(e.target.value)}
                value={steps}
            />

            <label>Recipe Ingredients: </label>
            <input
                type="text"
                onChange={(e) => setIngredients(e.target.value)}
                value={ingredients}
            />
            <br/>
            <input className='submit-button' type='submit'/>
            {error && <div>{error}</div>}
        </form>
    )
}
export default RecipeForm;
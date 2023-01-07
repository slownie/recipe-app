import { useState } from "react";

function CreatePage() {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [steps, setSteps] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [image, setImage] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = JSON.parse(localStorage.getItem('user'));
        const userID = user.id;
        const username = user.user.username;
        const recipe = {title,desc,steps,ingredients,image,userID,username}

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
            <h1>Create</h1>

            <label>Recipe Name: </label>
            <input
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                required={true}
                max={30}
            />

            <label>Recipe Description: </label>
            <input
                type="text"
                onChange={(e) => setDesc(e.target.value)}
                value={desc}
                required={true}
                max={90}
            />

            <label>Recipe Steps: </label>
            <textarea
                type="text"
                onChange={(e) => setSteps(e.target.value)}
                value={steps}
                required={true}
                rows={10}
            />

            <label>Recipe Ingredients: </label>
            <textarea
                type="text"
                onChange={(e) => setIngredients(e.target.value)}
                value={ingredients}
                required={true}
                rows={10}
            />

            <label>Image Link: </label>
            <input
                type="text"
                onChange={(e) => setImage(e.target.value)}
                value={image}
                required={true}
                max={90}
            />
            

            <br/>
            <input className='submit-button' type='submit'/>
            {error && <div>{error}</div>}
        </form>
    )
}

export default CreatePage;
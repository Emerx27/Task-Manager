import { useState } from "react";

function Form() {
    const [input, setInput] = useState({
        name: "",
        description: ""
    }) 
    function prevDefault(e)  {
        e.preventDefault();
    }

    function fillInput(e) {
        const {name, value} = e.target;
        setInput({...input, [name]: value})
    }
    return (
        <form onSubmit={prevDefault}>
            <div>
                <label>Task name:</label>
                <input type="text" name="name" value={input.name} onChange={fillInput}/>
            </div>
            
            <div>
                <label>Task description:</label>
                <input type="text" name="description" value={input.description} onChange={fillInput}/>
            </div>

            <input type="submit" value="Create Task"/>
        </form>
    )
}

export default Form
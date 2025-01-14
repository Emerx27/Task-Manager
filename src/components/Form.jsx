import { useState } from "react";

function Form() {
    const [alert, setAlert] = useState("");
    const [input, setInput] = useState({
        name: "",
        description: ""
    }) 

    function prevDefault(e)  {
        e.preventDefault();
        validateForm();
    }

    function fillInput(e) {
        const {name, value} = e.target;
        setInput({...input, [name]: value})
    }
    
    function validateForm() {
        setTimeout(() => {
            setAlert("");
        }, 3000);
        if(Object.values(input).some(input => input === "")) {
            setAlert("All fields are required");
            return;
        }

        setAlert("Task added");
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

            <p>{alert}</p>
        </form>
    )
}

export default Form
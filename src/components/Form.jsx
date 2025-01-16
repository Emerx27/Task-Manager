import { useState, useRef } from "react";

function Form() {
    const [alert, setAlert] = useState("");
    const [input, setInput] = useState({
        name: "",
        description: ""
    });
    const [tasks, setTasks] = useState([]);

    const timeoutRef = useRef(null);

    function prevDefault(e)  {
        e.preventDefault();
        validateForm();
    }

    function fillInput(e) {
        const {name, value} = e.target;
        setInput({...input, [name]: value})
    }
    
    function validateForm() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        timeoutRef.current = setTimeout(() => {
            setAlert("");
        }, 3000);

        if(Object.values(input).some(input => input === "")) {
            setAlert("All fields are required");
            return;
        }

        setAlert("Task added");
        setTasks([...tasks, {...input}]);
        setInput({
            name: "",
            description: ""
        })
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
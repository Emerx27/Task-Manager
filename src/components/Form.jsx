function Form() {
    return (
        <form>
            <div>
                <label>Task name:</label>
                <input type="text"/>
            </div>
            
            <div>
                <label>Task description:</label>
                <input type="text"/>
            </div>

            <input type="submit" value="Create Task"/>
        </form>
    )
}

export default Form
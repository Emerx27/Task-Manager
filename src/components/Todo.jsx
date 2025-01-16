import Task from "./Task";

function Todo({tasks}) {
    return (
        <main>
            <h1>Tasks</h1>

            <div>
                {tasks.map((task, index) => (
                    <Task key={index} task={task} />
                ))}
            </div>
        </main>
    )
}

export default Todo
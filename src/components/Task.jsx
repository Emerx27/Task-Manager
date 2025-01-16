function Task({task}) {
    return (
        <article>
            <h3>{task.name}</h3>
            <p>{task.description}</p>
        </article>
    )
}

export default Task
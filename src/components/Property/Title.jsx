function Title({ title, location }) {
    return (
        <section className="title-container">
            <h1 className="h1">{title}</h1>
            <h2 className="h2">{location}</h2>
        </section>
    )
}

export default Title;
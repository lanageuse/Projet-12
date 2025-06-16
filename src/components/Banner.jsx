function Banner({ title, bckImg }) {
    return (
        <section className="banner" style={{ backgroundImage: `url(${bckImg})`, backgroundSize: 'cover' }}>
            <h1>{title}</h1>
        </section>
    )
}

export default Banner
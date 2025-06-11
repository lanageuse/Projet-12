import bgImage from '../assets/bg-banner.webp';
function Banner() {
    return (
        <section className="banner" style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover' }}>
            <h1>Chez vous, <br />partout et ailleurs</h1>
        </section>
    )
}

export default Banner
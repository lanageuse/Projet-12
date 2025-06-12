import Caroussel from "../Caroussel";

function Hero({ pictures }) {
    return (
        <Caroussel>
            {pictures.map((url, index) => (
                <img key={index} src={url} alt={`Image ${index + 1}`} />
            ))}
        </Caroussel>
    )
}

export default Hero;
import Banner from "../components/Banner"
import Listings from "../components/Listing/Listings"
import bgImage from '../assets/bg-banner.webp';


function Home() {
    return (
        <>
            <Banner title={<>Chez vous, <br />partout et ailleurs</>} bckImg={bgImage} />
            <Listings />
        </>
    )
}

export default Home
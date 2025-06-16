import useAbout from "../hook/useAbout"
import DropDown from '../components/DropDown'
import Banner from "../components/Banner"
import AboutLayout from "../layouts/AboutLayout"
import bgImage from '../assets/bg-about.webp';


function About() {
    const { aboutList, loading } = useAbout()
    return (
        <AboutLayout
            banner={<Banner title="" bckImg={bgImage} />}
            dropDownList={{ aboutList, loading }}
        />
    )
}

export default About
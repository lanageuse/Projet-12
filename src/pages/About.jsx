import useAbout from "../hook/useAbout"
import Banner from "../components/Banner"
import AboutLayout from "../layouts/AboutLayout"
import bgImage from '../assets/bg-about.webp';
import ErrorMessage from '../components/ErrorMessage'


function About() {
    const { aboutList, loading, error } = useAbout()
    return (
        <>
            <ErrorMessage error={error} />
            {!error &&
                <AboutLayout
                    banner={< Banner title="" bckImg={bgImage} />}
                    dropDownList={{ aboutList, loading }}
                />
            }
        </>
    )
}

export default About
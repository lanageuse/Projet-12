import useFetchAbout from "../hook/useFetchAbout"
import Banner from "../components/Banner"
import DropDownList from "../components/About/DropDownList";
import AboutLayout from "../layouts/AboutLayout"
import bgImage from '../assets/bg-about.webp';
import ErrorMessage from '../components/ErrorMessage'


function About() {
    const { data, status, error } = useFetchAbout()
    return (
        <>
            <ErrorMessage error={error} />
            {!error &&
                <AboutLayout
                    banner={< Banner title="" bckImg={bgImage} />}
                    dropDownList={{ data, status, error }}
                />
            }
        </>
    )
}

export default About
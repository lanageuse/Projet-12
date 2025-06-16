import { useEffect, useState } from "react";

function useAbout() {
    const [aboutList, setAboutList] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch("../data/about.json")
            .then(res => res.json())
            .then(res => {
                setAboutList(res.aboutList)
                setLoading(false)
            })
            .catch(error => {
                console.log("Erreur lors de la récupération des données", error);
                setAboutList([])
            })
    }, [])

    return { aboutList, loading }
}

export default useAbout
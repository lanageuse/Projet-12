import { useEffect, useState } from "react";

function useFetchAbout() {
    const [aboutList, setAboutList] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")

    useEffect(() => {
        let isMounted = true
        const fetchData = async () => {
            try {
                const res = await fetch("./data/about.json")
                if (!res.ok) throw new error("Erreur lors du fetch API")
                const data = await res.json()
                if (isMounted) {
                    setAboutList(data.aboutList)
                    setLoading(false)
                }
            } catch (error) {
                setError(error.message)
                setLoading(false)
            }
        }
        fetchData()
        return () => {
            isMounted = false
        }
    })

    return { aboutList, loading }
}

export default useFetchAbout
import { useParams } from "react-router";
import useListings from '../hook/useListings'
import { useEffect, useState } from "react"
import Details from "../components/Property/Details"
import Host from "../components/Property/Host"
import Rate from "../components/Property/Rate"
import Tags from "../components/Property/Tags"
import Title from "../components/Property/Title"
import PropertyLayout from "../layouts/PropertyLayout"
import Hero from "../components/Property/Hero";

function Property() {
    const [property, setProperty] = useState(null)
    const { id: paramId } = useParams()
    const listings = useListings()

    useEffect(() => {
        if (Array.isArray(listings) && listings.length > 0 && paramId) {
            const found = listings.find((prop) => prop?.id === paramId)
            setProperty(found || null)
        }
    }, [listings, paramId])

    if (!property) return (<p>Chargement ...</p>)

    return (
        <PropertyLayout
            hero={<Hero pictures={property.pictures} />}
            title={<Title title={property.title} location={property.location} />}
            tags={<Tags tags={property.tags} />}
            host={<Host title={property.host} />}
            rate={<Rate title={property.rate} />}
            details={<Details description={property.description} equipments={property.equipments} />}
        />
    )
}

export default Property;
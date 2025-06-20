import { useParams, useNavigate } from "react-router";
import useProperty from '../hook/useProperty'
import { useEffect } from "react"
import Details from "../components/Property/Details"
import Host from "../components/Property/Host"
import Rate from "../components/Property/Rate"
import Tags from "../components/Property/Tags"
import Title from "../components/Property/Title"
import PropertyLayout from "../layouts/PropertyLayout"
import Hero from "../components/Property/Hero";

function Property() {
    const { id: paramId } = useParams()
    const navigate = useNavigate();
    const { property, status } = useProperty(paramId)

    useEffect(() => {
        if (!status === "done" && property === null) {
            navigate("/404", { replace: true })
        }
    }, [navigate, property, status])

    if (!property) return (<p>Chargement ...</p>)

    return (
        <PropertyLayout
            Hero={<Hero pictures={property.pictures} />}
            Title={<Title title={property.title} location={property.location} />}
            Tags={<Tags tags={property.tags} />}
            Host={<Host host={property.host} />}
            Rate={<Rate rate={property.rating} />}
            Details={<Details description={property.description} equipments={property.equipments} />}
        />
    )
}

export default Property;
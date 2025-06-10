import { useParams } from "react-router";
function Property(){
    let property = useParams();
    return(
        <div>
        {property.id}
        </div>
    )
}

export default Property;
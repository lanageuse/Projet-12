import DropDown from "../Dropdown";

function Details({ description, equipments }) {
    return (
        <div className="details-container">
            <DropDown title="Description" content={description} />
            <DropDown title="Équipements" content={equipments} />
        </div>
    )
}

export default Details;
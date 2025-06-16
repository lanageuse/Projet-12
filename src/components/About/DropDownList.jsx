import DropDown from "../DropDown"

function DropDownList({ dropDownList }) {
    const { aboutList, loading } = dropDownList
    if (!aboutList && loading) return 'Chargement...'
    return (
        <>
            {
                aboutList.map((drop, index) => (
                    <DropDown key={index} title={drop.title} content={drop.content} />
                )
                )
            }
        </>
    );
}

export default DropDownList;
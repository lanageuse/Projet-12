import DropDownList from "../components/About/DropDownList"

function AboutLayout({ banner, dropDownList }) {
    return (
        <div className="about-container">
            {banner}
            <div className="dropDownList-container">
                <DropDownList dropDownList={dropDownList} />
            </div>
        </div>
    )
}
export default AboutLayout
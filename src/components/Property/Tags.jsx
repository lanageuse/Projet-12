
function Tags({ tags }) {

    return (
        <div className="tag-container">
            {tags.map((tag, index) => (
                <div key={index} className="tag">{tag}</div>
            ))}
        </div>
    )
}

export default Tags;
function Host({ host }) {
    const { picture, name } = host
    const words = name.split(" ")
    const firstName = words[0]
    const lastName = words.slice(1).join(" ")

    return (
        <div className="host">
            <div className="name">
                <div>{firstName} </div>
                <div>{lastName}</div>
            </div>
            <div className="picture">
                <img src={picture} alt={name} />
            </div>
        </div>
    )
}

export default Host;
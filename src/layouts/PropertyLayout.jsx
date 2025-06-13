function PropertyLayout({ Hero, Title, Tags, Host, Rate, Details }) {
    return (
        <>
            {Hero}
            <div className="infos-container">
                <div className="title-tags">
                    {Title}
                    {Tags}
                </div>
                <div className="host-rate">
                    {Host}
                    {Rate}
                </div>
            </div>
            <div className="details">
                {Details}
            </div>
        </>
    )
}

export default PropertyLayout;
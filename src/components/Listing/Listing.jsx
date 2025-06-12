import { Link } from "react-router";

function Listing({ listing }) {
    return (
        <div className="card">
            <img src={listing?.cover} alt={listing?.title} />
            <h2>{listing?.title}</h2>
            <Link to={'/property/' + listing?.id} className="link"></Link>
        </div>
    )
}
export default Listing
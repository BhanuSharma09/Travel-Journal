import Location from "../images/Location.png"
export default function Seprate(props){
    return(
        <div>
            <div className="mount--section">
                <img className="mount" src={props.imgUrl} alt="Mount Fuji" />
                <div>
                    <span>
                        <img className="location--icon" src={Location} alt="Location Icon" />
                        <span className="country">{props.location}</span>
                        <a className="g--map" href={props.googleMapsUrl}>View on Google Maps</a>
                    </span>
                    <p className="mount--text">{props.title}</p>
                    <p className="date--text">{props.startDate} - {props.endDate}</p>
                    <p className="description-text">{props.description}</p>
                </div>
            </div>
        </div>
    )
}
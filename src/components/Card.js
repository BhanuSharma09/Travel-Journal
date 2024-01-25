// import image from "../../images/image.png"
import star from "../images/Star.png"
export default function Card(props){
    let badgeText
    if(props.openSpots === 0){
        badgeText = "SOLD OUT"
    } else if(props.location === "Online"){
        badgeText="ONLINE"
    }
    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={props.coverImg} alt="NewImage" className="card-image" />
            <div className="card--stats">
                <img src={star} alt="star" className="card--star" />
                <span>{props.stats.rating}</span>
                <span className="gray">({props.stats.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--price"><span className="bold">From ${props.price}</span> / person</p>

            {/* <p><img className="star" src={star} alt="Star" /> 5.0 <span className="text-gray">(6) <img className="elipse" src={elipse} alt="elipse" /> USA</span></p>
            <p>Life lessons with Katie Zaferes</p>
            <p><strong>From $136</strong> / person</p> */}
        </div>
    )
}
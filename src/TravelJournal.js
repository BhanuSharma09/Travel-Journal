import Seprate from "./components/Seprate";
import "./TravelJournal.css"
import TravelData from "./TravelJournalData.js"
import Navbar from "./components/Navbar.js";
export default function TravelJournal(){
    const data= TravelData.map(Travel =>{
        return(<Seprate
            {...Travel}
        />)
    })
    return(
        <div>
            <Navbar/>
            {data}
        </div>
    )
}
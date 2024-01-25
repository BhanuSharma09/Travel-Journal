import Navbar from "./components/Navbar";
import './Airbnb.css'
import Hero from "./components/Hero";
import Card from "./components/Card";
import airdata from "../src/AirbnbData"
export default function Airbnb(){
    const newdata=airdata.map(air => {
        return (<Card 
            key={air.id} 
            {...air}
            />
        )
    })
    return (
        <div>
            <Navbar/>
            <Hero/>
            <section className="cards-list">
                {newdata}
            </section>
        </div>
    )
}
            // rating={air.stats.rating} 
            // reviewCount={air.stats.reviewCount}
            // country={air.location} 
            // title={air.title} 
            // price={air.price}
            // openspots={air.openSpots}
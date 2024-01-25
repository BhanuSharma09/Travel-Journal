import './BusinessCard.css'
import About from './components/About.js'
import Footer from './components/Footer.js'
import Info from './components/Info.js'
import Interests from './components/Interests.js'
export default function BusinessCard(){
    return(
        <div className='back-color-card'>
            <Info/>
            <About/>
            <Interests/>
            <Footer/>
        </div>
    )
}
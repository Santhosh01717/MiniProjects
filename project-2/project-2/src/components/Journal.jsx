import './../CssFiles/journal.css'
import marker from './../../public/marker.png'
// import { Link } from "react-router-dom";
const Journal = ({data}) => {
    
    return (
        <>
           <div className="j-container">
                 <div style={{margin : "20px"}}>
                     <img className="j-img" src={data?.img?.src} alt={data?.img?.alt}/>
                 </div>
                 <div className="j-subcontainer">
                      <div className="location-container">
                           <img src={marker} alt="marker image"/>
                           <p >{data?.country}</p>
                           
                           <a href={data.googleMapsLink}>View on Google Maps</a>
                      </div>
                      <div>
                            <h1>{data?.title}</h1>
                            <p style={{fontSize : "25px" , fontWeight : "bold"}}>{data?.dates}</p>
                            <p style={{fontSize : "25px"}}>
                            {data?.text}
                            </p>
                      </div>
                 </div>
           </div>
        </>
    )
}
export default Journal;
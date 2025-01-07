import './../CssFiles/header.css'
import world from './../../public/globe.png'
const Header = () =>{
    return (
        <>
            <div className='h-container'>
              <img className="h-img" src={world} alt=""/>
               <div>my travel journal.</div>
            </div>
        </>
    )
}
export default Header;
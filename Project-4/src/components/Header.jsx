import trollFace from "../images/troll-face.png"
import '../CssFiles/header.css'
const Header = () =>{
    return (
        <header className="header">
            <img 
                src={trollFace} 
            />
            <h1>Meme Generator</h1>
        </header>
    )
}
export default Header;
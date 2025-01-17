import { useState } from "react";

const Die = (props) =>{
    // const [die, setDie] = useState(props.data);
    
    const handleClick = () => {
        props.hold(props.id);
    }
    
    // const [btnStyle, SetBtnStyle] = useState({});
    const styles = props.dieStatus ?   {
              backgroundColor: "rgb(51, 106, 246)",
              color: "white",
              border: "none",
              borderRadius: "5px"
    } : {};
    return (
        <>
            <button style={styles} onClick={handleClick}>
                {props.data}
            </button>
            
        </>
    )
}
export default Die;
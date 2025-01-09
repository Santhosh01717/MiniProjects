import { useState } from "react";

const Die = (props) =>{
    const [die, setDie] = useState(props.data);
    const [btnStyle, SetBtnStyle] = useState({});
    const handleChange = () =>{
        setDie((prev) => (
            { 
                ...prev,
                dieState: true
            }
        ))
        SetBtnStyle({color : "white" , backgroundColor: "green"})
    }
    
    return (
        <>
            <button style={btnStyle } onClick={handleChange}>
                {die.value}
            </button>
            
        </>
    )
}
export default Die;
import {useState} from "react";

export const Counter = () => {
    let [numb, setNumb] = useState(0)
    let num = () => {
        if (numb >= 20) {
            return setNumb(0)
        } else {
            setNumb(numb + 1)
        }
    }
    const buttonStyle = {
        width: '50px',
        height: '20px',
        border: "1px solid black",
        display: 'inline-block',
        cursor: 'pointer'
    };
    const numberStyle = {
        marginTop: '20px',
        width: '20px',
        height: '20px',
        border: "1px solid black",
        display: 'inline-block'
    };
    return <div>
        <div style={buttonStyle} onClick={() => {
            num()
        }}>click
        </div>
        <div style={numberStyle}>{numb}</div>
    </div>

}
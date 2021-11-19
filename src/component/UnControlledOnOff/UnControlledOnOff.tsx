import {useState} from "react";

type propsType={

}

export const UnControlledOnOff=(props:propsType)=>{
    let [on,setOn]=useState(true)
    const onStyle={
        width:'30px',
        height:'20px',
        border:'1px solid black',
        display:'inline-block',
        backgroundColor: on?'green':'white',
        cursor:'pointer',
        marginTop:'20px'
    }

    const offStyle={
        width:'30px',
        height:'20px',
        border:'1px solid black',
        display:'inline-block',
        backgroundColor: on?'white':'red',
        cursor:'pointer'
    }

    const indicatorStyle={
        width:'10px',
        height:'10px',
        border:'1px solid black',
        borderRadius:'5px',
        display:'inline-block',
        backgroundColor: on?'green':'red'
    }

    return <div>
        <div onClick={()=>{setOn(true)}} style={onStyle}>on</div>
        <div onClick={()=>{setOn(false)}} style={offStyle}>off</div>
        <div style={indicatorStyle}></div>
    </div>
}
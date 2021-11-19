import {useState} from "react";


export type OnOffPropsType={
on:boolean
setOn:(on:boolean)=>void
}

export const OnOff=(props:OnOffPropsType)=>{

    const onStyle={
        width:'30px',
        height:'20px',
        border:'1px solid black',
        display:'inline-block',
        backgroundColor: props.on?'green':'white',
        cursor:'pointer',
        marginTop:'20px'
    }

    const offStyle={
        width:'30px',
        height:'20px',
        border:'1px solid black',
        display:'inline-block',
        backgroundColor: props.on?'white':'red',
        cursor:'pointer'
    }

    const indicatorStyle={
        width:'10px',
        height:'10px',
        border:'1px solid black',
        borderRadius:'5px',
        display:'inline-block',
        backgroundColor: props.on?'green':'red'
    }

    return <div>
        <div onClick={()=>{props.setOn(true)}} style={onStyle}>on</div>
        <div onClick={()=>{props.setOn(false)}} style={offStyle}>off</div>
        <div style={indicatorStyle}></div>
    </div>
}
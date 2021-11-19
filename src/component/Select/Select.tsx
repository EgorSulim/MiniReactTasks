import { useState} from "react";

export type propsSelectType={
    setItem:(title:string)=>void
    collapsed:boolean
    titleValue:string
    onClick:(accordionCollapsed:boolean)=>void
}

export type propsAccordionTitleType={
    title:string
    onClick:(accordionCollapsed:boolean)=>void
    collapsed:boolean
}
export const Select=(props:propsSelectType)=>{

    return <div>
        <AccordionTitle title={props.titleValue} onClick={props.onClick}  collapsed={props.collapsed}/>
        {!props.collapsed && < AccordionBody setItem={props.setItem}  />}
    </div>
}

function AccordionTitle(props:propsAccordionTitleType){
    return <h3 /*onChange={(e)=>{setTitleSelect(e.currentTarget.title)}}*/ onClick={()=>{props.onClick(!props.collapsed)}}>{props.title}</h3>
}

type propsBodyType={
    setItem:(title:string)=>void
}
function AccordionBody(props:propsBodyType){
    let Body=[
        {id:1,title:'1'},
        {id:2,title:'2'},
        {id:3,title:'3'},
    ]

    return <div>{Body.map(m=>{
        const onClickHandler=()=>{
            props.setItem(m.title)
        }
        return <div onClick={onClickHandler}><b>{m.title}</b></div>})}</div>
}
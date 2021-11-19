import {useState} from "react";
import {Simulate} from "react-dom/test-utils";


type propsType={
  titleValue:string
}

type propsAccordionTitleType={
  title:string
  openMenu:()=>void
}


export const UncontrolledAccordion=(props:propsType)=>{
  let[collapsed,setCollapsed]=useState(true)
  const openMenu=()=>{
    setCollapsed(!collapsed)
  }
  return <div>
      <AccordionTitle title={props.titleValue} openMenu={openMenu}/>
      {!collapsed && < AccordionBody/>}
    </div>
}


function AccordionTitle(props:propsAccordionTitleType){
  return <h3  onClick={()=>{props.openMenu()}} >{props.title}</h3>
}

function AccordionBody(){
  return<div>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  </div>
}
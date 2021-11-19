type propsType={
  collapsed:boolean
  titleValue:string
  onClick:(accordionCollapsed:boolean)=>void
}

type propsAccordionTitleType={
  title:string
  onClick:(accordionCollapsed:boolean)=>void
  collapsed:boolean
}

export const Accordion=(props:propsType)=>{
  return <div>
   <AccordionTitle title={props.titleValue} onClick={props.onClick} collapsed={props.collapsed}/>
    {!props.collapsed && < AccordionBody/>}
  </div>
}

function AccordionTitle(props:propsAccordionTitleType){
  return <h3 onClick={()=>{props.onClick(!props.collapsed)}}>{props.title}</h3>
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
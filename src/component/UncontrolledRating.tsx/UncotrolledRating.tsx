import {useState} from "react";

type propsType= {
    selected: boolean
    setSelected: (value:0|1|2|3|4|5) => void
    value:1|2|3|4|5
}


type propsRatingType={

}

export const UncontrolledRating = (props:propsRatingType) => {

    let[value,setValue]=useState<0|1|2|3|4|5>(0)

    return <div>
        <Star selected={value>0} setSelected={setValue} value={1}/>
        <Star selected={value>1} setSelected={setValue} value={2}/>
        <Star selected={value>2} setSelected={setValue} value={3}/>
        <Star selected={value>3} setSelected={setValue} value={4}/>
        <Star selected={value>4} setSelected={setValue} value={5}/>
    </div>

}

function Star(props: propsType) {
   return <span onClick={()=>{props.setSelected(props.value)}}>{props.selected? <b>star </b>:"star "}</span>
}

import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./component/Accordion/Accordion";
import {Rating, RatingValueType} from "./component/Rating/Rating";
import {OnOff} from "./component/OnOff/OnOff";
import {Counter} from "./component/Counter";
import {Select} from "./component/Select/Select";


type propsType={
    title:string
}

function App() {

    let[ratingValue,setRatingValue]=useState<RatingValueType>(0)
    let[accordionCollapsed,setAccordionCollapsed]=useState<boolean>(true)
    let[selectCollapsed,setSelectCollapsed]=useState(true)
    let [on,setOn]=useState(true)
    let [item,setItem]=useState('sss')
    const itemChange=(title:string)=>{
        setItem(title)
    }
    return (
        <div className="App">
            <AppTitle title={'This is App component'}/>
          {/*  <UncontrolledRating/>
            <UncontrolledAccordion titleValue={'Menu'}/>*/}
          {/*  < UncontrolledAccordion titleValue={'Users'} />*/}
            {/*<Accordion titleValue={'Menu'} collapsed={true}/>*/}
            <Accordion titleValue={'Users'} collapsed={accordionCollapsed} onClick={setAccordionCollapsed}/>
            <OnOff on={on}  setOn={setOn} />
            <Counter/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <Select collapsed={selectCollapsed} titleValue={item} onClick={setSelectCollapsed} setItem={itemChange}/>
        </div>
    );
}

function AppTitle(props:propsType) {
    return <h3>{props.title}</h3>
}

export default App;

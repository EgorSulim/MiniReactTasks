import {propsAccordionTitleType, propsSelectType, Select} from "../component/Select/Select";
import {Meta, Story} from "@storybook/react";
import React from "react";

export default {
    title: 'Select ',
    component: Select
} as Meta

const Template: Story<propsSelectType> = (args: propsSelectType) => <Select {...args}/>

export const SelectStory = (props: propsSelectType) => {

    return <div>
        <AccordionTitle title={props.titleValue} onClick={props.onClick} collapsed={props.collapsed}/>
        {!props.collapsed && < AccordionBody setItem={props.setItem}/>}
    </div>
}

function AccordionTitle(props: propsAccordionTitleType) {
    return <h3 /*onChange={(e)=>{setTitleSelect(e.currentTarget.title)}}*/ onClick={() => {
        props.onClick(!props.collapsed)
    }}>{props.title}</h3>
}

type propsBodyType = {
    setItem: (title: string) => void
}

function AccordionBody(props: propsBodyType) {
    let Body = [
        {id: 1, title: '1'},
        {id: 2, title: '2'},
        {id: 3, title: '3'},
    ]

    return <div>{Body.map(m => {
        const onClickHandler = () => {
            props.setItem(m.title)
        }
        return <div onClick={onClickHandler}><b>{m.title}</b></div>
    })}</div>
}
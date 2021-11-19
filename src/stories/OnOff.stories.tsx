// OnOff.stories.ts | OnOff.stories.tsx

import React from "react";
import {OnOff, OnOffPropsType} from "../component/OnOff/OnOff";
import {Meta, Story} from "@storybook/react";

export default {
    title: 'OnOff ',
    component: OnOff
} as Meta

const Template: Story<OnOffPropsType> = (args: OnOffPropsType) => <OnOff {...args}/>

export const Primary = (props: OnOffPropsType) => {
    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        backgroundColor: props.on ? 'green' : 'white',
        cursor: 'pointer',
        marginTop: '20px'
    }

    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        backgroundColor: props.on ? 'white' : 'red',
        cursor: 'pointer'
    }

    const indicatorStyle = {
        width: '10px',
        height: '10px',
        border: '1px solid black',
        borderRadius: '5px',
        display: 'inline-block',
        backgroundColor: props.on ? 'green' : 'red'
    }

    return <div>
        <div onClick={() => {
            props.setOn(true)
        }} style={onStyle}>on g
        </div>
        <div onClick={() => {
            props.setOn(false)
        }} style={offStyle}>off
        </div>
        <div style={indicatorStyle}></div>
    </div>
}
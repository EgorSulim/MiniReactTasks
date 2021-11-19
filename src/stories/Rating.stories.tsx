// Rating.stories.ts | Rating.stories.tsx

import React, {useState} from "react";
import {Rating, RatingPropsType, RatingValueType, Star} from "../component/Rating/Rating";
import {Meta, Story} from "@storybook/react";

export default {
    title:'Rating stories',
    component:Rating
}as Meta;

const Template:Story<RatingPropsType>=(args:RatingPropsType)=><Rating {...args}/>


export const Primary = (props:RatingPropsType) => {
    return <div>
        <Star selected={props.value>0} onClick={props.onClick} value={1}/>
        <Star selected={props.value>1} onClick={props.onClick} value={2}/>
        <Star selected={props.value>2} onClick={props.onClick} value={3}/>
        <Star selected={props.value>3} onClick={props.onClick} value={4}/>
        <Star selected={props.value>4} onClick={props.onClick} value={5}/>
    </div>

}
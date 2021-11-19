// Button.stories.js | Button.stories.jsx

import React from 'react';
import {Rating} from "../component/Rating/Rating";

;

export default {
    component: Rating,
    title: 'Components/Button',
}

export const Primary = () =><Rating value={2} onClick={alert}/> ;

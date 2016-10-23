import React from 'react';
import { Button } from 'react-bootstrap';
import {addStyle} from 'react-bootstrap/lib/utils/bootstrapUtils';

addStyle(Button, 'navigation');

const NavigationButton = ({windowWidth, onClick, className}) => {
    if(windowWidth > 1199) {
        return (<Button bsStyle="navigation" onClick={onClick} className={className}/>);
    } else {
        return (<div></div>);
    }
}

export default NavigationButton;
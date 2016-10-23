import React from 'react';
import { Image, Button } from 'react-bootstrap';
import {addStyle} from 'react-bootstrap/lib/utils/bootstrapUtils';
import ProductDescription from './home_row_item_description';

addStyle(Button, 'update');
addStyle(Button, 'track');
addStyle(Button, 'updates');

const HomeRowItem = ({image, alt, productName, productCompany, track})=>{
    return(<div className="home-row-item">
            <Button bsStyle="update" className="glyphicon glyphicon-pencil" />
            <Button bsStyle="track">{track}</Button>
            <Button bsStyle="updates" className="glyphicon glyphicon-pencil" />
            <ProductDescription productName={productName} productCompany={productCompany} />
            <Image className="product-image" src={image} alt={alt} responsive/>
        </div>
    );
}

export default HomeRowItem;
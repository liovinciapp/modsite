import React from 'react';
import { Image, Button } from 'react-bootstrap';
import {addStyle, Col} from 'react-bootstrap/lib/utils/bootstrapUtils';
import ProductDescription from './home_row_item_description';
import {Link} from 'react-router';

addStyle(Button, 'update');
addStyle(Button, 'track');
addStyle(Button, 'updates');

const HomeRowItem = ({image, alt, productName, productCompany, itemNumber, noOfUpdates, sourceURL})=>{
    console.log("HomeRowItem");
    return(
        <div className="home-row-item" onDoubleClick = {() => {window.open('http://google.com/', '_blank')}}>
            <Link to={"addUpdate/" + itemNumber} className="btn btn-update"><span>Update</span></Link>
            <Button bsStyle="track">T</Button>
            <Button bsStyle="updates">{noOfUpdates}</Button>
            <ProductDescription productName={productName} productCompany={productCompany} />
            <Image className="product-image" src={image} alt={alt} responsive/>
        </div>
    );
}

export default HomeRowItem;

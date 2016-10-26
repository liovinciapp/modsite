import React, {Component} from 'react';
import HomeRow from './home_row';

export default class HomeContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            homecontainer: [{
                'Recently Added': [
                    {
                        id: "0001",
                        img: "../img/item1.jpg",
                        alt: "image",
                        productName: "Arafsgsfgdfgdfgdfgsdfgsdfgsdfgsdfgsdfgsdfgd",
                        productCompany: "Google",
                        track: "T"
                    }, {
                        id: "0002",
                        img: "../img/item2.jpg",
                        alt: "image",
                        productName: "Ara",
                        productCompany: "Google",
                        track: "T"
                    }, {
                        id: "0003",
                        img: "../img/item3.jpg",
                        alt: "image",
                        productName: "Ara",
                        productCompany: "Google",
                        track: "T"
                    },
                    {
                        id: "0004",
                        img: "../img/item4.jpg",
                        alt: "image",
                        productName: "Ara",
                        productCompany: "Google",
                        track: "T"
                    },

                    {
                        id: "0005",
                        img: "../img/item1.jpg",
                        alt: "image",
                        productName: "Arafsgsfgdfgdfgdfgsdfgsdfgsdfgsdfgsdfgsdfgd",
                        productCompany: "Google",
                        track: "T"
                    }, {
                        id: "0006",
                        img: "../img/item2.jpg",
                        alt: "image",
                        productName: "Ara",
                        productCompany: "Google",
                        track: "T"
                    }, {
                        id: "0007",
                        img: "../img/item3.jpg",
                        alt: "image",
                        productName: "Ara",
                        productCompany: "Google",
                        track: "T"
                    },
                    {
                        id: "0008",
                        img: "../img/item4.jpg",
                        alt: "image",
                        productName: "Ara",
                        productCompany: "Google",
                        track: "T"
                    }
                ]
            },
                {
                    'Last Visited': [
                        {
                            id: "0009",
                            img: "../img/item1.jpg",
                            alt: "image",
                            productName: "Arafsgsfgdfgdfgdfgsdfgsdfgsdfgsdfgsdfgsdfgd",
                            productCompany: "Google",
                            track: "T"
                        }, {
                            id: "0010",
                            img: "../img/item2.jpg",
                            alt: "image",
                            productName: "Ara",
                            productCompany: "Google",
                            track: "T"
                        }, {
                            id: "0011",
                            img: "../img/item3.jpg",
                            alt: "image",
                            productName: "Ara",
                            productCompany: "Google",
                            track: "T"
                        },
                        {
                            id: "0012",
                            img: "../img/item4.jpg",
                            alt: "image",
                            productName: "Ara",
                            productCompany: "Google",
                            track: "T"
                        }
                    ]
                },
                {
                    'Sports': [
                        {
                            id: "0013",
                            img: "../img/item1.jpg",
                            alt: "image",
                            productName: "Arafsgsfgdfgdfgdfgsdfgsdfgsdfgsdfgsdfgsdfgd",
                            productCompany: "Google",
                            track: "T"
                        }, {
                            id: "0014",
                            img: "../img/item2.jpg",
                            alt: "image",
                            productName: "Ara",
                            productCompany: "Google",
                            track: "T"
                        }, {
                            id: "0015",
                            img: "../img/item3.jpg",
                            alt: "image",
                            productName: "Ara",
                            productCompany: "Google",
                            track: "T"
                        },
                        {
                            id: "0016",
                            img: "../img/item4.jpg",
                            alt: "image",
                            productName: "Ara",
                            productCompany: "Google",
                            track: "T"
                        }
                    ]
                }
            ]
        }
    }

    render() {
        return (<div>
                {this.state.homecontainer.map((homerow)=> {
                    return (<HomeRow homerow={homerow} key={Math.random()}/>);
                })}
            </div>
        );
    }
}
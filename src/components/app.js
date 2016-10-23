import React, { Component } from 'react';
import HomeContainer from './home_container';

import Menu from './menu';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      homecontainer: [{
        'Recently Added': [
          {
            img: "../img/item1.jpg",
            alt: "image",
            productName: "Arafsgsfgdfgdfgdfgsdfgsdfgsdfgsdfgsdfgsdfgd",
            productCompany: "Google",
            track: "T"
          }, {
            img: "../img/item2.jpg",
            alt: "image",
            productName: "Ara",
            productCompany: "Google",
            track: "T"
          }, {
            img: "../img/item3.jpg",
            alt: "image",
            productName: "Ara",
            productCompany: "Google",
            track: "T"
          },
          {
            img: "../img/item4.jpg",
            alt: "image",
            productName: "Ara",
            productCompany: "Google",
            track: "T"
          },

          {
            img: "../img/item1.jpg",
            alt: "image",
            productName: "Arafsgsfgdfgdfgdfgsdfgsdfgsdfgsdfgsdfgsdfgd",
            productCompany: "Google",
            track: "T"
          }, {
            img: "../img/item2.jpg",
            alt: "image",
            productName: "Ara",
            productCompany: "Google",
            track: "T"
          }, {
            img: "../img/item3.jpg",
            alt: "image",
            productName: "Ara",
            productCompany: "Google",
            track: "T"
          },
          {
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
              img: "../img/item1.jpg",
              alt: "image",
              productName: "Arafsgsfgdfgdfgdfgsdfgsdfgsdfgsdfgsdfgsdfgd",
              productCompany: "Google",
              track: "T"
            }, {
              img: "../img/item2.jpg",
              alt: "image",
              productName: "Ara",
              productCompany: "Google",
              track: "T"
            }, {
              img: "../img/item3.jpg",
              alt: "image",
              productName: "Ara",
              productCompany: "Google",
              track: "T"
            },
            {
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
              img: "../img/item1.jpg",
              alt: "image",
              productName: "Arafsgsfgdfgdfgdfgsdfgsdfgsdfgsdfgsdfgsdfgd",
              productCompany: "Google",
              track: "T"
            }, {
              img: "../img/item2.jpg",
              alt: "image",
              productName: "Ara",
              productCompany: "Google",
              track: "T"
            }, {
              img: "../img/item3.jpg",
              alt: "image",
              productName: "Ara",
              productCompany: "Google",
              track: "T"
            },
            {
              img: "../img/item4.jpg",
              alt: "image",
              productName: "Ara",
              productCompany: "Google",
              track: "T"
            }
          ]
        },
        {
          'Tech': [
            {
              img: "../img/item1.jpg",
              alt: "image",
              productName: "Arafsgsfgdfgdfgdfgsdfgsdfgsdfgsdfgsdfgsdfgd",
              productCompany: "Google",
              track: "T"
            }, {
              img: "../img/item2.jpg",
              alt: "image",
              productName: "Ara",
              productCompany: "Google",
              track: "T"
            }, {
              img: "../img/item3.jpg",
              alt: "image",
              productName: "Ara",
              productCompany: "Google",
              track: "T"
            },
            {
              img: "../img/item4.jpg",
              alt: "image",
              productName: "Ara",
              productCompany: "Google",
              track: "T"
            }
          ]
        },
        {
          'Art': [
            {
              img: "../img/item1.jpg",
              alt: "image",
              productName: "Arafsgsfgdfgdfgdfgsdfgsdfgsdfgsdfgsdfgsdfgd",
              productCompany: "Google",
              track: "T"
            }, {
              img: "../img/item2.jpg",
              alt: "image",
              productName: "Ara",
              productCompany: "Google",
              track: "T"
            }, {
              img: "../img/item3.jpg",
              alt: "image",
              productName: "Ara",
              productCompany: "Google",
              track: "T"
            },
            {
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
    return (
      <div>
      	<Menu />
        <HomeContainer homecontainer={this.state.homecontainer} />
      </div>
    );
  }
}

export default App;
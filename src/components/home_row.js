import React, {Component} from 'react';
import HomeRowItem from './home_row_item';
import OwlCarousel from 'react-owl-carousel';
import NavigationButton from './navigation_button';
import RowTitle from './row_title';


export default class HomeRow extends Component {
    constructor(props) {
        super(props);
        this.state = {windowWidth: window.innerWidth};
    }

    componentWillMount() {
        window.addEventListener('resize', this.setWindowWidth.bind(this));
    }

    setWindowWidth(){
        this.setState({windowWidth: window.innerWidth});
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.setWindowWidth);
    }

    render(){
        const settings = {
            itemsCustom: [[0, 3], [767, 3], [991, 5], [1199, 7]],
            responsive: true,
            scrollPerPage: true,
            navigation: false
        };

        const title = Object.keys(this.props.homerow);
        const homerow = this.props.homerow[title];

        return (<div className="home-row-container">
                <RowTitle title={title} />
                <NavigationButton windowWidth={this.state.windowWidth} onClick={()=>this.refs.carousel.prev()} className="prev"/>
                <NavigationButton windowWidth={this.state.windowWidth} onClick={()=>this.refs.carousel.prev()} className="next"/>
                <OwlCarousel {...settings} ref="carousel">
                    {homerow.map((item)=>{return(<HomeRowItem image={item.img} alt={item.alt} productName={item.productName} productCompany={item.productCompany} track={item.track} key={item.id} itemNumber={item.id}/>);})}
                </OwlCarousel>
            </div>
        );
    }
}
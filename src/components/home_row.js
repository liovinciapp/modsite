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
            navigation: false,
            lazyLoad: true
        };

        const title = this.props.homerow[0].category;

        return (<div>
                <RowTitle title={title}/>
                <div className="home-row-container">
                    <NavigationButton windowWidth={this.state.windowWidth} onClick={()=>this.refs.carousel.prev()}
                                      className="prev"/>
                    <NavigationButton windowWidth={this.state.windowWidth} onClick={()=>this.refs.carousel.prev()}
                                      className="next"/>
                    <OwlCarousel {...settings} ref="carousel">
                        {this.props.homerow.map((item)=> {
                            return (<HomeRowItem image={item.imageURL} alt={item.title} productName={item.title}
                                                 productCompany={item.company} key={item.projectId}
                                                 itemNumber={item.projectId} noOfUpdates={item.noOfUpdates}/>);
                        })}
                    </OwlCarousel>
                </div>
            </div>
        );
    }
}
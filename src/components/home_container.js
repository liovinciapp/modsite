import React, {Component} from 'react';
import HomeRow from './home_row';

export default class HomeContainer extends Component {
    constructor(props) {
        super(props);
        console.log(this.props.projects);
    }

    getCategories() {
        var distinctCategories = new Set();
        for(var i=0; i < this.props.projects.length; i++) {
            distinctCategories.add(this.props.projects[i].category);
        }
        console.log(distinctCategories);
        return distinctCategories;
    }

    getRowsForCategory(category) {
        var rows = [];
        for(var i=0; i < this.props.projects.length; i++) {
            if(this.props.projects[i].category == category) {
                rows.push(this.props.projects[i]);
            }
        }
        return rows;
    }

    getHomeContainerData(){
        var categories = Array.from(this.getCategories());
        var homeContainer = [];
        for (var index = 0; index < categories.length; index++) {
            homeContainer.push(this.getRowsForCategory(categories[index]));
        }
        return homeContainer;
    }

    render() {
        console.time("getHomeContainerData");
        const homecontainer = this.getHomeContainerData();
        console.log(homecontainer);
        console.timeEnd("getHomeContainerData");
        return (<div>
                {homecontainer.map((homerow)=> {
                    return (<HomeRow homerow={homerow} key={homerow[0].categoryId}/>);
                })}
            </div>
        );
    }
}
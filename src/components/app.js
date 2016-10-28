import React, { Component } from 'react';
import Menu from './menu';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.projects = [{
            title: "last",
            company: "Pizza",
            projectId: "pizzzzz",
            categoryId: "0000",
            category: "a",
            imageURL: "http://blog.avmarket.rs/wp-content/uploads/2016/06/google-ara-4-3.jpg",
            noOfUpdates: "2"
        },
            {
                title: "first",
                company: "Pizza",
                projectId: "pizzzzzaa",
                imageURL: "http://blog.avmarket.rs/wp-content/uploads/2016/06/google-ara-4-3.jpg",
                categoryId: "0001",
                category: "b",
                noOfUpdates: "23"

            }
        ];

        this.state = {
            projects: this.projects,
        };
    }

    getProjectTitleAndCompanyFromProjectId(projectId){
        for(var i=0; i < this.state.projects.length; i++) {
            if(this.state.projects[i].projectId == projectId) {
                return({title: this.state.projects[i].title, company: this.state.projects[i].company});
            }
        }
        console.log("Error coming from getProjectTitleFromProjectId: Project Id does not exist");
        return "Nan";
    }

    getSearchResult(searchText) {
        var result = [];
        for(var i=0; i < this.state.projects.length; i++) {
            if(this.state.projects[i].title.includes(searchText) || this.state.projects[i].company.includes(searchText)) {
                result.push(this.state.projects[i]);
            }
        }
        return result;
    }

    getSearchText(searchText){
        console.log(searchText);
        if(searchText == '') {
            this.setState({projects: this.projects});
        } else {
            const searchResult = this.getSearchResult(searchText);
            if(searchResult.length == 0) {
                this.setState({projects: [{
                    category: "No Results Found"
                }]});
            }else {
                this.setState({projects: searchResult});
                console.log(searchResult, this.state.projects);
            }
        }

    }
    render() {
        return (<div>
                <Menu getSearchText={this.getSearchText.bind(this)}/>
                {React.cloneElement(
                    this.props.children,
                    {projects: this.state.projects, getcompanyandprojectname: this.getProjectTitleAndCompanyFromProjectId.bind(this)}
                )}
            </div>
        )
    }
}
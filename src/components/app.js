import React, {Component} from 'react';
import Menu from './menu';
import {Image} from 'react-bootstrap';
import axios from 'axios';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.projects = [];
        this.state = {
            projects: []
        };

    }

    componentDidMount() {
        // console.time('axios');
        // const data = axios.get("http://192.168.1.5:3000/");
        // this.projects = data;
        // this.setState({projects: data});
        // console.time('axios');

        console.time('ajax');
        $.ajax({
            url: "../../res/MOCK_DATA.json",/*"http://192.168.1.5:3000/projects",*/
            dataType: 'json',
            cache: true,
            success: function (data) {
                console.timeEnd('ajax');
                this.projects = data;
                this.setState({projects: data});
            }.bind(this),
            error: function (xhr, status, err) {
                console.error("../../res/MOCK_DATA.json", status, err.toString());
            }.bind(this)
        });
    }

    getProjectTitleAndCompanyFromProjectId(projectId) {
        for (var i = 0; i < this.projects.length; i++) {
            if (this.projects[i].projectId == projectId) {
                return ({title: this.projects[i].title, company: this.projects[i].company});
            }
        }
        console.log("Error coming from getProjectTitleFromProjectId: Project Id does not exist");
        return "Nan";
    }

    getSearchResult(searchText) {
        var result = [];
        console.log(searchText.toLowerCase());
        for (var i = 0; i < this.state.projects.length && this.state.projects[0].categoryId != "ERR"; i++) {
            if (this.state.projects[i].title.toLowerCase().includes(searchText.toLowerCase()) || this.state.projects[i].company.toLowerCase().includes(searchText.toLowerCase())) {
                result.push(this.state.projects[i]);
            }
        }
        return result;
    }

    getSearchResultForBackspace(searchText) {
        var result = [];
        for (var i = 0; i < this.projects.length; i++) {
            if (this.projects[i].title.toLowerCase().includes(searchText.toLowerCase()) || this.projects[i].company.toLowerCase().includes(searchText.toLowerCase())) {
                result.push(this.projects[i]);
            }
        }
        return result;
    }

    getSearchText(searchText, key) {
        console.time('search');
        console.log(this.projects);
        if (key === 'Backspace' && searchText === '') {
            this.setState({projects: this.projects});
            console.timeEnd('search');
        } else if (key === 'Backspace' && searchText != '') {
            const searchResult = this.getSearchResultForBackspace(searchText);
            if (searchResult.length == 0) {
                this.setState({
                    projects: [{
                        category: "No Results Found",
                        categoryId: "ERR",
                        projectId: "ERR"
                    }]
                });
                console.timeEnd('search');
            } else {
                this.setState({projects: searchResult});
                console.timeEnd('search');
            }
        } else {
            const searchResult = this.getSearchResult(searchText);
            if (searchResult.length == 0) {
                this.setState({
                    projects: [{
                        category: "No Results Found",
                        categoryId: "ERR",
                        projectId: "ERR"
                    }]
                });
                console.timeEnd('search');
            } else {
                this.setState({projects: searchResult});
                console.timeEnd('search');
            }
        }

    }

    render() {
        console.log(this.state.projects);
        if (this.state.projects.length === 0) {
            console.log("hiiii");
            return (<div className="pageloading-image-container">
                    <Image className="pageloading-image" src ="../../img/liovinci-loading-web-big.gif" />
                </div>
            )
        } else {
            return (<div>
                    <Menu getSearchText={this.getSearchText.bind(this)}/>
                    {React.cloneElement(
                        this.props.children,
                        {
                            projects: this.state.projects,
                            getcompanyandprojectname: this.getProjectTitleAndCompanyFromProjectId.bind(this)
                        }
                    )}
                </div>
            )
        }
    }
}

import React, {Component} from 'react';


//NEED to import react because since using JSX it converts the html to a React.createElement
class MenuSearch extends Component {
	constructor(props) {
		super(props);

	}

	render() {
		return (

			<form className="navbar-form navbar-left">
	            <input type="text" className="form-control" id="searchbar" placeholder="Search..."/>
	        </form>
		);
	}

}



export default MenuSearch;


import React, {Component} from 'react';


import MenuSearch from './menu_search';
import MenuItem from './menu_item';
//NEED to import react because since using JSX it converts the html to a React.createElement
class Menu extends Component {
	constructor(props) {
		super(props);

	}

	render() {
		return (

			<nav className="navbar navbar-default navbar-fixed-top">
				<div className="container">
					<div className="navbar-header">
			            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar">
			                <span className="sr-only">Toggle navigation</span>
			                <img alt="Liovinci" src="../img/liovinci-logo-icon.png" width="30" height="30"/>
			            </button>
        			</div>
       				<div id="navbar" className="navbar-collapse collapse">
       					<MenuSearch />
	            		
	            		<ul className="nav navbar-nav navbar-right">

	            			<MenuItem />
			               
			            </ul>
		        	</div>
				</div>
			</nav>

			
		);
	}

}



export default Menu;
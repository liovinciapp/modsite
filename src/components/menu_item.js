import React, {Component} from 'react';
import { NavDropdown } from 'react-bootstrap';

//NEED to import react because since using JSX it converts the html to a React.createElement
class MenuItem extends Component {
	constructor(props) {
		super(props);

	}

	render() {
		return (

			<ul className="nav navbar-nav navbar-right">
			 	<li>
			 		<a href="#">Home</a>
			 	</li>
		    	<li>
		            <NavDropdown title="Categories"> 
						<li role="button" href="#" className="collapse-menu-item">Last Visited</li>
		                <li role="button" href="#" className="collapse-menu-item">Recently Added</li>
		                <li role="button" href="#" className="collapse-menu-item">Tracked</li>
		            
		            </NavDropdown>
		            
		        </li>
		        <li><a href="#">Add Projects</a></li>
		        <li>
	                <a className="dropdown-toggle" data-toggle="dropdown" role="button">
		            	<img alt="Liovinci" src="../img/liovinci-logo-icon.png" width="20" height="20"/>
		            </a>
	                <NavDropdown src="../img/liovinci-logo-icon.png">
	                    <li role="button" href="#" className="collapse-menu-item">Username</li>
	                    <li role="button" href="#" className="collapse-menu-item">1,000 Points</li>
	                    <br/>
	                    <li role="button" href="#" className="collapse-menu-item">Logout</li>
	                </NavDropdown>

                </li>
            </ul>
		);
	}

}



export default MenuItem;
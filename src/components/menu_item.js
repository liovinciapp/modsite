import React, {Component} from 'react';


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
		    		<a className="dropdown-toggle" data-toggle="dropdown" role="button"> 
		    			Categories
		            	<span className="caret"></span>
		            </a>
		            <ul className="dropdown-menu dropdown" >
		                <li role="button" href="#" className="collapse-menu-item">Last Visited</li>
		                <li role="button" href="#" className="collapse-menu-item">Recently Added</li>
		                <li role="button" href="#" className="collapse-menu-item">Tracked</li>
		            </ul>
		        </li>
		        <li><a href="#">Add Projects</a></li>
		        <li>
	                <a className="dropdown-toggle" data-toggle="dropdown" role="button">
	                   	<img alt="Liovinci" src="../img/liovinci-logo-icon.png" width="20" height="20"/>
	                </a>
	                <ul className="dropdown-menu dropdown">
	                    <li role="button" href="#" className="collapse-menu-item">Username</li>
	                    <li role="button" href="#" className="collapse-menu-item">1,000 Points</li>
	                    <br/>
	                    <li role="button" href="#" className="collapse-menu-item">Logout</li>
	                </ul>
                </li>
               	<li><a href="#">Logout</a></li>
            </ul>
		);
	}

}



export default MenuItem;
import React from 'react';
import HomeRow from './home_row';

const HomeContainer = ({homecontainer})=> {
    return (<div>
            {homecontainer.map((homerow)=>{return(<HomeRow homerow={homerow} />)})}
        </div>
    );
}

export default HomeContainer;
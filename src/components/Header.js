import React, {Component} from 'react';

class Header extends Component {
    shouldComponentUpdate(nextProps, nextState){
        return false;
    }

    render() {
       console.log('header');
       return <h1 className='f2'>RoboFriends</h1>
    }
}

export default Header;
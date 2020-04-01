import React, {Component, Fragment} from 'react';
import './Header.css'

class Header extends Component {

    constructor(){
        super()

        this.state={
            title:'The React App state',
            details:'details state variable'

        }

    }

    render(){
        const mydata = this.state;
        return(
            <Fragment>
            <p className="logo">{this.state.title}</p>
            <p>{mydata.details}</p>
            <h1>Thiru love Manisha</h1>
            <h4 id="idtag">Laxman</h4>
            <input/>
            </Fragment>
        )
    }
}

export default Header;
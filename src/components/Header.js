import React from "react"
import { Link } from "react-router-dom"


class Header extends React.Component {
    state = {
        title: ""
    }
    
    
handleClick=(e)=>{
    
    console.log(e.target.innerText);
    this.setState({
        title: e.target.innerText
    })


}
    

    render() {
        {console.log(this.state.title)}
        return (
            <div className="headerWrapper">
                <ul className="menu">
                    <Link to="/yoga" dupa={"dupa"}>
                    <li 
                    onClick={this.handleClick}
                    
                    >yoga</li>
                    </Link>
                    <Link to="/programming">
                    <li style={{color: "#ffbe0b"}} onClick={this.handleClick}>programming</li>
                    </Link>
                    <Link to="/writing">
                    <li style={{color: "#fb5607"}} onClick={this.handleClick}>writing</li>
                    </Link>
                    
                </ul>
                <div 
                className="headerTitle">{this.state.title}</div>
            </div>
        );
    }
}

export default Header;
import React, { Component } from 'react';

class Yoga extends Component {
    render() {
        return (
            <div>
                {this.props.joga.map(el=>{
                    <div className="box">{el.day}</div>
                })}
            </div>
        );
    }
}

export default Yoga;
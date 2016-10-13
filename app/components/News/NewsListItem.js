
import React, { Component } from 'react'
import './NewsListItem.scss'

class NewsListItem extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="cellC">
                <img src={this.props.imgsrc} alt=""/>
                <div className="txtC">
                    <p className="title">{this.props.title}</p>
                    <p className="digest">{this.props.digest}...</p>
                </div>
            </div>
        )
    }
}

export default NewsListItem
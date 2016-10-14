
import React, { Component } from 'react'
import './NewsListItem.scss'

class NewsListItem extends Component{
    constructor(props){
        super(props);
    }
    render(){
        let item = this.props.item;
        return(
            <div className="cellC">
                <img src={item.imgsrc} alt=""/>
                <div className="txtC">
                    <p className="title">{item.title}</p>
                    <p className="digest">{item.digest}...</p>
                </div>
            </div>
        )
    }
}

export default NewsListItem
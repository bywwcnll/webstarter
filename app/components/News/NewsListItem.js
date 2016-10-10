
import React, { Component } from 'react'
import s from './NewsListItem.scss'

class NewsListItem extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className={s.cellC}>
                <img src={this.props.imgsrc} alt=""/>
                <div className={s.txtC}>
                    <p className={s.title}>{this.props.title}</p>
                    <p className={s.digest}>{this.props.digest}</p>
                </div>
            </div>
        )
    }
}

export default NewsListItem
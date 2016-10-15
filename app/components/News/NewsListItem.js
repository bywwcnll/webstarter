
import React, { Component } from 'react'
import './NewsListItem.scss'
import { browserHistory  } from 'react-router'
import { store } from '../../store/store'
import * as actions from '../../actions/actions';

class NewsListItem extends Component{
    constructor(props){
        super(props);
    }
    onClick = ()=>{
        store.dispatch(actions.setstate(this.props.item.url));
        console.log(this.props.item.url);
        browserHistory.push('/detail');
    };
    render(){
        let item = this.props.item;
        return(
            <div className="cellC" onClick={this.onClick}>
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

import React, { Component } from 'react'
import { ListView, ActivityIndicator } from 'antd-mobile'
import './NewsDetail.scss'
import fetchJsonp from 'fetch-jsonp'
import { store } from '../../store/store'

class NewsDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            ptime: '',
            source: '',
            content: ''
        };
    }
    componentWillMount(){
        console.log(store.getState());
        fetchJsonp('http://3g.163.com/touch/article/C3BIV65200097U7R/full.html', {
            jsonpCallbackFunction: 'artiContent'
        }).then(response => {
            return response.json();
        }).then(j => {
            j = j.C3BIV65200097U7R;
            j.img.forEach(function(item) {
                j.body = j.body.replace(item.ref, "<img src='"+item.src+"' >");
            });
            this.setState({
                title: j.title,
                ptime: j.ptime,
                source: j.source,
                content: j.body
            });
        });
    }
    render(){
        return(
            <div className="container">
                <div className="header">
                    <p className="title">{ this.state.title }</p>
                    <p>
                        <span className="ptime">{ this.state.ptime }</span>
                        <span className="source">{ this.state.source }</span>
                    </p>
                </div>
                <div className="content" dangerouslySetInnerHTML={{ __html: this.state.content }} ></div>
            </div>
        );
    }
}

export default NewsDetail
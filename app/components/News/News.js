
import React, { Component } from 'react'
import { Button, List } from 'antd-mobile'
import NewsListItem from './NewsListItem'
import fetchJsonp from 'fetch-jsonp'

class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            news: []
        };
        fetchJsonp('http://3g.163.com/touch/reconstruct/article/list/BA8D4A3Rwangning/0-10.html',{
            jsonpCallbackFunction: 'artiList'
        }).then(response => {
            return response.json();
        }).then(json => {
            this.setState({
                news: json.BA8D4A3Rwangning
            });
        }).catch(e => {
            console.log(e.message)
        });
    }
    render(){
        return(
            <List>
                {
                    this.state.news.map(function (item) {
                        return  <List.Item key={item.docid} ><NewsListItem title={item.title} digest={item.digest} imgsrc={item.imgsrc}></NewsListItem></List.Item>
                    })
                }
            </List>
        );
    }
}

export default News
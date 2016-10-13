
import React, { Component } from 'react'
import NewsListItem from './NewsListItem'
import fetchJsonp from 'fetch-jsonp'
import { ListView, ActivityIndicator } from 'antd-mobile'

class News extends Component {
    constructor(props) {
        super(props);
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            pageNum: 0,
            animating: false,
            firstLoaded: false,
            news: ds.cloneWithRows([])
        };
    }
    componentWillMount(){
        this.fetchNews();
    }
    componentDidUpdate(){
        // console.log('componentDidUpdate')
    }
    getUrl(){
        return 'http://3g.163.com/touch/reconstruct/article/list/BA8D4A3Rwangning/'+(this.state.pageNum*10+1)+'-'+(this.state.pageNum+1)*10+'.html';
    }
    fetchNews(){
        console.log(this.getUrl());
        this.setState({ animating: true });
        fetchJsonp(this.getUrl(),{
            jsonpCallbackFunction: 'artiList'
        }).then(response => {
            return response.json();
        }).then(json => {
            setTimeout(() => {
                this.setState({
                    pageNum: ++this.state.pageNum,
                    animating: false,
                    news: this.state.news.cloneWithRows(json.BA8D4A3Rwangning)
                });
            }, 1000);
        }).catch(e => {
            console.log(e.message)
        });
    }
    onEndReached(event){
        console.log(this.state.pageNum);
        this.fetchNews();
    }
    render(){
        const separator = (sectionID, rowID) => (
            <div key={`${sectionID}-${rowID}`} style={{
                backgroundColor: '#F5F5F9',
                height: 8,
                borderTop: '1px solid #ECECED',
                borderBottom: '1px solid #ECECED',
            }}
            />
        );
        return(
            <div>
                <ListView
                    dataSource={this.state.news}
                    renderRow={(item)=>
                        <NewsListItem key={item.docid} title={item.title} digest={item.digest} imgsrc={item.imgsrc}></NewsListItem>
                    }
                    useBodyScroll
                    renderSeparator={separator}
                    pageSize={10}
                    onEndReachedThreshold={100}
                    onEndReached={this.onEndReached.bind(this)}
                ></ListView>
                <ActivityIndicator
                    toast
                    text="正在加载"
                    animating={this.state.animating}
                />
            </div>
        );
    }
}

export default News
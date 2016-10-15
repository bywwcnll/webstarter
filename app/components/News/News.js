
import React, { Component } from 'react'
import NewsListItem from './NewsListItem'
import fetchJsonp from 'fetch-jsonp'
import { ListView, ActivityIndicator } from 'antd-mobile'
import './News.scss'

class News extends Component {
    rData = [];
    constructor(props) {
        super(props);
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            pageNum: 0,
            animating: false,
            firstLoaded: false,
            news: ds.cloneWithRows(this.rData)
        };
    }
    getUrl(){
        return 'http://3g.163.com/touch/reconstruct/article/list/BA8D4A3Rwangning/'+(this.state.pageNum*10+1)+'-10.html';
    }
    fetchNews(){
        this.setState({ animating: true });
        fetchJsonp(this.getUrl(),{
            jsonpCallbackFunction: 'artiList'
        }).then(response => {
            return response.json();
        }).then(json => {
            setTimeout(() => {
                this.rData = this.rData.concat(json.BA8D4A3Rwangning);
                this.setState({
                    pageNum: ++this.state.pageNum,
                    animating: false,
                    news: this.state.news.cloneWithRows(this.rData)
                });
            }, 1000);
        }).catch(e => {
            console.log(e.message)
        });
    }
    componentWillMount(){
        // console.log('componentWillMount');
        this.fetchNews();
    }
    // componentWillReceiveProps(){
    //     console.log('componentWillReceiveProps')
    // }
    // componentWillUpdate(){
    //     console.log('componentWillUpdate')
    // }
    // componentDidUpdate(){
    //     console.log('componentDidUpdate')
    // }
    onEndReached(event){
        if(this.state.firstLoaded && !this.state.animating){
            this.fetchNews();
        }else if(!this.state.firstLoaded){
            this.setState({
                firstLoaded: true
            });
        }
    }
    render(){
        const separator = (sectionID, rowID) => (
            <div key={`${sectionID}-${rowID}`} className="newsSeparator"/>
        );
        return(
            <div>
                <ListView
                    dataSource={this.state.news}
                    renderRow={(rowData, sectionID, rowID)=>
                        <NewsListItem key={rowID} item={rowData}></NewsListItem>
                    }
                    useBodyScroll
                    renderSeparator={separator}
                    pageSize={5} //渲染的频率
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
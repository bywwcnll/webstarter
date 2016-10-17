
import React, { Component } from 'react'
import NewsListItem from './NewsListItem'
import { ListView, ActivityIndicator } from 'antd-mobile'
import { store } from '../../store/store'
import * as actions from '../../actions/actions';
import './News.scss'

class News extends Component {
    constructor(props) {
        super(props);
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            animating: false,
            firstLoaded: false, //防止第一次加载页面后就触发的onEndReached事件
            news: ds.cloneWithRows(store.getState().news.rData)
        };
    }
    fetchNews(){
        this.setState({ animating: true });
        store.dispatch(actions.fetchfun()).then(()=>{
            this.setState({
                animating: false,
                news: this.state.news.cloneWithRows(store.getState().news.rData)
            });
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
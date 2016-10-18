
import React, { Component } from 'react'
import { connect } from 'react-redux'
import NewsListItem from './NewsListItem'
import Loading from '../Loading/Loading'
import { ListView, ActivityIndicator } from 'antd-mobile'
import { store } from '../../store/store'
import * as actions from '../../actions/actions';
import './News.scss'

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
let firstLoaded = false;    //防止第一次加载页面后就触发的onEndReached事件
class News extends Component {
    constructor(props) {
        super(props);
    }
    // componentWillMount(){
    //     console.log('componentWillMount');
    // }
    componentDidMount(){
        this.props.fetchNews();
        // console.log('componentDidMount');
    }
    // componentWillReceiveProps(nextProps){
    //     console.log('componentWillReceiveProps')
    //     console.log(nextProps.loadingState);
    // }
    // componentWillUpdate(nextProps){
    //     console.log('componentWillUpdate')
    //     console.log(nextProps.loadingState);
    // }
    // componentDidUpdate(nextProps){
    //     console.log('componentDidUpdate')
    // }
    onEndReached(event){
        if(!this.props.loadingState){
            if(firstLoaded){
                this.props.fetchNews();
            }else{
                firstLoaded = true;
            }
        }
    }
    render(){
        const separator = (sectionID, rowID) => (
            <div key={`${sectionID}-${rowID}`} className="newsSeparator"/>
        );
        return(
            <div>
                <ListView
                    dataSource={this.props.dataSource}
                    renderRow={(rowData, sectionID, rowID)=>
                        <NewsListItem key={rowID} item={rowData}></NewsListItem>
                    }
                    useBodyScroll
                    renderSeparator={separator}
                    onEndReachedThreshold={100}
                    onEndReached={this.onEndReached.bind(this)}
                ></ListView>
                <Loading />
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps)=>{
    return {
        dataSource: ds.cloneWithRows(state.news.rData),
        loadingState: state.loading.isShow
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchNews: ()=>{
            dispatch(actions.getNews())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(News)
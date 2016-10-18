/**
 * Created by Gaven on 2016/10/17.
 */
import React, { Component } from 'react'
import { ActivityIndicator } from 'antd-mobile'
import { connect } from 'react-redux'

class Loading extends Component{
    render(){
        return(
            <div>
                <ActivityIndicator
                    toast
                    text="正在加载"
                    animating={this.props.isShow}
                />
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps)=>{
    return {
        isShow: state.loading.isShow
    }
};

export default connect(mapStateToProps)(Loading)
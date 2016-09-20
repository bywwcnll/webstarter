/**
 * Created by Gaven on 2016/9/20.
 */
import React, {Component, PropTypes} from 'react';
import { WhiteSpace, WingBlank, Button, InputItem, List } from 'antd-mobile';

class Login extends Component{
    render(){
        const { setInfo } = this.props;
        return (
            <div>
                <List title="表单输入项">
                    <InputItem
                        clear
                        placeholder="请输入帐号"
                    >帐号</InputItem>
                    <InputItem
                        clear
                        placeholder="请输入密码"
                        type="password"
                    >密码</InputItem>
                    <WhiteSpace />
                    <WingBlank size="lg">
                        <Button type="primary" onClick={ setInfo }>确定</Button>
                    </WingBlank>
                    <WhiteSpace />
                </List>
            </div>
        );
    }
}

Login.propTypes = {
    setInfo: PropTypes.func.isRequired
};

export default Login
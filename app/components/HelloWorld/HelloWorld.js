/**
 * Created by Gaven on 2016/9/12.
 */
import style from './HelloWorld.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { WhiteSpace, WingBlank, Button, InputItem, List } from 'antd-mobile';

export const FlexExample = React.createClass({
	render() {
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
						<Button type="primary">确定</Button>
					</WingBlank>
					<WhiteSpace />
				</List>
			</div>
		);
	},
});


// ReactDOM.render(<FlexExample />, document.getElementById('app'));
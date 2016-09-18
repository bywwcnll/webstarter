/**
 * Created by Gaven on 2016/9/12.
 */
import style from './HelloWorld.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { InputItem, List } from 'antd-mobile';

const FlexExample = React.createClass({
	render() {
		return (
			<div>
				<List title="表单输入项">
					<InputItem
						clear
					>帐号</InputItem>
					<InputItem
						clear
						placeholder="请输入密码"
						type="password"
					>密码</InputItem>
					<InputItem
						clear
						error
						placeholder="校验样式"
						type="password"
					>密码</InputItem>
				</List>
			</div>
		);
	},
});
ReactDOM.render(<FlexExample />, document.getElementById('app'));
/**
 * Created by Gaven on 2016/9/12.
 */
import style from './HelloWorld.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Button, List } from 'antd-mobile';
const ButtonExample = React.createClass({
	render() {
		return (
			<div style={{ margin: '0 8px' }}>

				<div style={{ margin: '32px 0' }}>
					<Button>default 按钮</Button>
					<div style={{ height: 8 }} />
					<Button disabled>default disabled 按钮</Button>
				</div>

				<div style={{ margin: '32px 0' }}>
					<Button type="primary" onClick={e => console.log(e)}>primary 按钮</Button>
					<div style={{ height: 8 }} />
					<Button type="primary" disabled>primary disabled 按钮</Button>
				</div>

				<div style={{ margin: '32px 0' }}>
					<Button type="ghost" onClick={e => console.log(e)}>ghost 按钮</Button>
					<div style={{ height: 8 }} />
					<Button type="ghost" disabled>ghost disabled 按钮</Button>
				</div>

				<div style={{ margin: '32px 0' }}>
					<Button type="warning">warning 按钮</Button>
				</div>

				<div style={{ margin: '32px 0' }}>
					<Button loading>loading 按钮</Button>
				</div>

				<div style={{ margin: '32px 0' }}>
					<p className="demo-p">inline / small</p>
					<div style={{ height: 8 }} />
					<Button inline>default inline</Button>&nbsp;
					<Button inline size="small">default inline small</Button>
					<div style={{ height: 8 }} />
					<Button type="primary" inline>primary inline</Button>&nbsp;
					<Button type="primary" inline size="small">primary inline small</Button>
				</div>
			</div>
		);
	},
});

ReactDOM.render(<ButtonExample />, document.getElementById('app'));
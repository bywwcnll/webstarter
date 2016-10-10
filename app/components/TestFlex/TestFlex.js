import React from 'react'
import './TestFlex.scss'

export const TestFlex = React.createClass({
	render() {
		return (
			<div className="container">
				<h1>哈哈1</h1>
				<h1>哈哈2</h1>
				<h1>哈哈3</h1>
			</div>
		);
	},
});

// class TestFlex extends React.Component{
// 	render(){
// 		return(
// 			<div>
// 				<h1>哈哈</h1>
// 			</div>
// 		)
// 	}
// }

// module.exports = TestFlex;
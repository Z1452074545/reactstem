import React from 'react';
import ReactDOM from 'react-dom';
import BodyLeft from './BodyLeft';
import BodyRight from './BodyRight';
export default class ComBody extends React.Component {
	constructor() {
		super();
		this.state = {
			num: 1
		};
	}
	// 生命周期
	componentDidMount() {
		setInterval(()=>this.cloak(), 1000);
	}
	componentWillUnmount() {
		// clearInterval(this.timer)
	}
	cloak() {
		this.setState({
			num: ++this.state.num
		});
	}
	render() {
		return (
			<div>
				<h3>网页主体内容</h3>
				<BodyLeft />
				<BodyRight />
				{this.state.num}
			</div>
		);
	}
}

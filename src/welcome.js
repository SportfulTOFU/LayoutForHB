import React, {
	Component,
} from 'react';

import './welcome.css'
import {
	Link
} from 'react-router'
// import App from './App'

class Welcome extends Component {

	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.state = {
			height: "100%",
			width: "100%"
		};
		// console.log();
	}

	handleChange(event) {

		if (this.state.height === "auto") {
			this.setState({
				height: "100%",
				width: "100%"
			});
		} else {
			this.setState({
				height: "auto",
				width: "100%"
			});
		}
	}

	render() {
		return (
			<div id="main" className="carousel hw100" >
				<img id="belt" className="w100" src={require('./datas/分解图/1/02.png')} alt="" ></img>
				<img id="text" className="w100" src={require('./datas/分解图/1/1.png')} alt="" ></img>
				<Link to={{pathname:"/main",
				}} ><input id="btn-in"  className="btn btn-primary changetoblock" type="button" value="点 击 进 入" onClick={this.handleChange}></input></Link>
				<img id="copright" className="w50" src={require('./datas/分解图/1/05.png')} alt=""></img>
			</div>
		)
	}
};

export default Welcome;
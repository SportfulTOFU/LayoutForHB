import React, {
	Component
} from 'react';
import './Picboard.css';
import emitter from 'events';
import image from './datas/页面1.jpg';
var str = 0;
class Picboard extends Component {



	constructor(props) {
		super(props);
		this.preimage = this.preimage.bind(this);
		this.nextimage = this.nextimage.bind(this);
		this.newnextimage = this.newnextimage.bind(this);
		this.state = {
			index: 0,
			check: this.props.index1,
		};

	}

	preimage() {
		if (this.state.index > 0) {
			this.setState({
				index: this.state.index - 1,


			});
		}
		if (this.state.index <= 0) {
			console.log("别点了，疼")
		}

		str = str + 1;

	}
	nextimage() {

		if (this.state.index < this.props.data[this.props.index].length - 1) {
			this.setState({
				index: this.state.index + 1,


			});
		}
		if (this.state.index >= this.props.data[this.props.index].length - 1) {
			console.log("到尽头了")
		}
		str = str + 1;
	}
	newnextimage() {

		if (this.state.index < this.props.data[this.props.index1 - 1][this.props.index].detail.length - 1) {
			this.setState({
				index: this.state.index + 1,


			});
		}
		if (this.state.index >= this.props.data[this.props.index1 - 1][this.props.index].detail.length - 1) {
			console.log("到尽头了")
		}
		str = str + 1;
	}
	// change() { //组件销毁前移除事件监听  

	// 	this.setState({
	// 		index: 0,
	// 	});

	// 	console.log(this.props.index1)

	// }
	componentWillReceiveProps() {
		this.setState({
			index: 0,
		});
	}

	render() {
		var style1 = {

		}



		var mainbody = [];
		if (this.props.apptype === 'area') {
			style1 = {
				height: "67%"
			}
			mainbody.push(<img key={1} className="panel-area-image" src={image}  alt=""></img>);
		} else if (this.props.apptype === 'appdetail') {
			style1 = {
				height: "67%",
			}

			mainbody.push(
				<img key={1} className="panel-area-image" src={this.props.data[this.props.index][this.state.index].image}  alt=""></img>

			);
			mainbody.push(
				<a key={2} className="left carousel-control"  role="button" onClick={this.preimage}>
			<span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
			    <span className="sr-only">Previous</span>
			</a>);
			mainbody.push(
				<a key={3} className="right carousel-control"  role="button" onClick={this.nextimage}>
				<span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
				<span className="sr-only">Next</span>
			</a>
			);

		} else if (this.props.apptype === 'areadetails') {
			style1 = {
				height: "67%",

				paddingLeft: "5%",
			}

			mainbody.push(
				<img key={1} className="panel-area-image" src={this.props.data[this.props.index1-1][this.props.index].detail[this.state.index].image}  alt=""></img>

			);
			mainbody.push(
				<a key={2} className="left carousel-control"  role="button" onClick={this.preimage}>
			<span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
			    <span className="sr-only">Previous</span>
			</a>);
			mainbody.push(
				<a key={3} className="right carousel-control"  role="button" onClick={this.newnextimage}>
				<span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
				<span className="sr-only">Next</span>
			</a>
			);

		}

		return (
			<div className="col-md-8 area-mian" style={style1} >
			<div className="panel panel-area" >
	        <div className="panel-body panel-area-body" >
	     	{mainbody}
	     	
	        </div>
	        </div>
	        </div>
		);
	}
};

export default Picboard;
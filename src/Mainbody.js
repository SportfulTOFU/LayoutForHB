import React, {
	Component
} from 'react';
import Views from './Views'
import Pagebtn from './Pagebtn'
import Picboard from './Picboard'
import Textboard from './Textboard'
import AreaList from './AreaList'
var c = 0;
class MainBody extends Component { //主页面组件

	constructor(props) {
		super(props);
		this.state = {
			index: 0,
			areaindex: 1,
			check: 0,
		};
		this.ChildChanged = this.ChildChanged.bind(this);

	}
	handleChange(event) {
		this.setState({
			index: parseInt(event.target.innerHTML, 10) * 8 - 8,
		});
		event.target.className = 'active'
		// console.log(event.target.innerHTML);
	}
	handleadd(event) {
		if (this.state.index < this.props.photosCollects - 8) {
			this.setState({
				index: this.state.index + 8
			});
		}

		// console.log(event.target.innerHTML);
	}
	handlefall(event) {
		if (this.state.index >= 8) {
			this.setState({
				index: this.state.index - 8
			});
		}

		// console.log(event.target.innerHTML);
	}
	areahandleChange(event) {
		this.setState({
			areaindex: parseInt(event.target.id, 10),
		});
		console.log(event.target.id);
	}
	ChildChanged(check) {

		c = check;

	}
	render() {
			// console.log(c);
			var mainbody = [];
			if (this.props.apptype === 'app') {
				mainbody.push(<Views key={1} className="" photosCollect={this.props.photosCollect} index={this.state.index}/>);
				mainbody.push( < Pagebtn key = {
							2
						}
						className = ""
						photosCollects = {
							this.props.photosCollects
						}
						handleChange = {
							this.handleChange.bind(this)
						}
						handleadd = {
							this.handleadd.bind(this)
						}
						handlefall = {
							this.handlefall.bind(this)
						}
						index = {
							this.state.index
						}
						/ >)
						mainbody.push(<p key={3} className = "copright-p " > ©湖北省测绘地理信息局 版权所有 2017 < /p>);
					}else if(this.props.apptype ==='area'){
						mainbody.push(<Picboard key={1} apptype={this.props.apptype}/>)
						mainbody.push(<Textboard key={2} apptype={this.props.apptype}/>)
					}else if(this.props.apptype === 'appdetail'){
						mainbody.push(<Picboard key={1} apptype={this.props.apptype} index1={c}  index={this.props.index} details={this.props.details} data={this.props.data}/>);
						mainbody.push(<Textboard key={2} apptype={this.props.apptype} index={this.props.index} details={this.props.details} data={this.props.data} callbackParent={this.ChildChanged}  />);
					}else if(this.props.apptype === 'areadetails'){
						mainbody.push(<AreaList key={1} data={this.props.data} index={this.props.index} photosCollect={this.props.photosCollect} areahandleChange = {
							this.areahandleChange.bind(this)
						}/> );
			mainbody.push(<Picboard key={2} apptype={this.props.apptype} data={this.props.data} index1={this.props.index} index={this.state.areaindex} details={this.props.details} photosCollect={this.props.photosCollect}/>);
					}
			


			return (
				<div className="mainbody  hw100">
				{mainbody}
				</div>
			);
		}
	};
	export default MainBody;
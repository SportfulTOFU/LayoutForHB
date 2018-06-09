import React, {
	Component
} from 'react';
import Btnlist from './Btnlist'
import {
	Link
} from 'react-router'
class Textboard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			check: 0,
		};
		this.ChildChanged = this.ChildChanged.bind(this);
	}
	ChildChanged(check) {
		// console.log(check);
		this.props.callbackParent(check);
	};
	render() {
		let style1 = {

		}

		var mainbody = [];
		if (this.props.apptype === 'area') {
			mainbody.push(<div><p className="text-left">
					湖北省是水资源大省，水系发达、河流纵横、湖泊众多，素来以“千湖之省”闻名。湖北主要城市
					<Link to={"area/"+"1"}>武汉</Link>、
					<Link to={"area/"+"2"}>黄石</Link>、
					<Link to={"area/"+"3"}>襄阳</Link>、
					<Link to={"area/"+"4"}>荆州</Link>、
					<Link to={"area/"+"5"}>宜昌</Link>、
					<Link to={"area/"+"6"}>十堰</Link>、
					<Link to={"area/"+"7"}>孝感</Link>、
					<Link to={"area/"+"8"}>荆门</Link>、
					<Link to={"area/"+"9"}>鄂州</Link>、
					<Link to={"area/"+"10"}>黄冈</Link>、
					<Link to={"area/"+"11"}>咸宁</Link>、
					<Link to={"area/"+"12"}>恩施</Link>、
					<Link to={"area/"+"13"}>仙桃</Link>、
					<Link to={"area/"+"14"}>天门</Link>、
					<Link to={"area/"+"15"}>潜江</Link>
					
					、随州则有长江最大支流汉江经过，江河的流经为沿江城市带来了充沛的水资源，同时也带来了兴修水利以抗洪防汛、便民利民的需求。长江由西向东贯穿全省，汉江全长的3/4流经省境，与源出边境山地的众多河流共同汇注长江，过境容水量较大，有丰富的径流量可供调蓄利用。水资源总量空间分布特征与地表水资源地区分布特征基本一致，其趋势是由南向北，由东、西向江汉平原腹地、由山区向平原逐渐减少。
					</p>
					<p>
					历史上的湖北依水而盛，沿江兴起了许多历史城市，各古城镇在防洪抗汛、河流水利方面留下了大量的历史地图，为研究湖北各区域的水资源情况留下了大量珍贵的历史资料。
					</p>
					<p>
					本模块以地级市域为划分依据，展示了各历史城镇的防汛、堤坝、山水等历史地图百余幅，未尽详实之处，欢迎提供相关资料。
				</p></div>);
			style1 = {
				height: "93.5%"
			};

		} else if (this.props.apptype === 'appdetail') {

			mainbody.push(<p key={1} className="text-left">{this.props.data[this.props.index].context}</p>);
			style1 = {
				height: "85%"
			};
		}
		var btnlist = [];
		if (this.props.apptype === 'appdetail') {
			btnlist.push(<Btnlist key={1} index={this.props.index} details={this.props.details} data={this.props.data}  callbackParent={this.ChildChanged} />);

		}


		return (
			<div className="col-md-4 area-text" >
			<div className="panel area-text-panel">
			{btnlist}
			<div className="panel-body area-text-panel-body" style={style1}>
				{mainbody}
			</div>
			</div>
		</div>


		);
	}
};

export default Textboard;
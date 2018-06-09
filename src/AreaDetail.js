import React, {
	Component
} from 'react';
//import logo from './logo.svg';
import $ from 'jquery';
import './App.css';
import './welcome.css'
import Navigator from './Navigator'
import MainBody from './Mainbody'
import imgUrlin from './datas/分解图/2/04.png';
import imgUrlout from './datas/分解图/2/05.png';

const requireContext = require.context("D:/eclipse/layoutForHB/WebContent/电子地图/长江图/0003岷江图说", true, /^\.\/.*\.jpg$/);
const projectImgs = requireContext.keys().map(requireContext);

let photosCollect = {
	index: 1,
	name: "湖北省",
	object: [{
		name: "长江图说",
		index: 1,
		details: [{
			name: "name1",
			image: projectImgs[0],
		}, {
			name: "name2",
			image: projectImgs[1],
		}, {
			name: "name3",
			image: projectImgs[2],
		}, {
			name: "name4",
			image: projectImgs[0],
		}, {
			name: "name5",
			image: projectImgs[1],
		}, {
			name: "name6",
			image: projectImgs[2],
		}, {
			name: "name7",
			image: projectImgs[0],
		}, {
			name: "name8",
			image: projectImgs[1],
		}, {
			name: "name9",
			image: projectImgs[2],
		}, {
			name: "name10",
			image: projectImgs[0],

		}],
		context: "经常帐的内容大致包括五大项： 1 商品，为一国货物的进口及出口。 2 劳务，包括商品进出口有关的运输及保险费、旅客运费及港口费用及本国居民在国外旅行、观光及外国人到本国旅行、观光等的收支。 3 投资所得，指国民购买外国的股票、债券及其它资产所赚取的股利或利息，加上本国对外借款或外国人来本国投资，所产生的利息支出与红利支出等。 4 其它商品、劳务及所得，指前面没有被列入的各项居民与非居民有关劳务与所得的交易，使领馆的支出，以及居民在外国工作获得的报酬，外国政府或国际组织设在本国各种机构的费用等。一般所谓的贸易余额是指前面所提四项的总和。 5 片面转移，指现金或实物的捐赠、救济、一国的对外援助及对国际机构经费的分摊。"
	}, {
		name: "漕运图",
		index: 2,
		details: [{
			name: "name11",
			image: projectImgs[1],
		}, {
			name: "name12",
			image: projectImgs[2],
		}, {
			name: "name13",
			image: projectImgs[3],
		}, {
			name: "name14",
			image: projectImgs[0],
		}, {
			name: "name15",
			image: projectImgs[1],
		}, {
			name: "name16",
			image: projectImgs[0],
		}, {
			name: "name17",
			image: projectImgs[1],
		}],
		context: "贸易战，指一些国家通过高筑关税壁垒和非关税壁垒，限制别国商品进入本国市场，同时又通过倾销和外汇贬值等措施争夺国外市场，由此引起的一系列报复和反报复，称为贸易战。如果贸易战的武器仅限于相互提高关税税率，对此则称为“关税战”。"
	}, {
		name: "金水图",
		index: 3,
		details: [{
			name: "name11",
			image: projectImgs[1],
		}, {
			name: "name12",
			image: projectImgs[2],
		}, {
			name: "name13",
			image: projectImgs[3],
		}, {
			name: "name14",
			image: projectImgs[0],
		}, {
			name: "name15",
			image: projectImgs[1],
		}, {
			name: "name16",
			image: projectImgs[0],
		}, {
			name: "name17",
			image: projectImgs[1],
		}],
		context: "贸易战，指一些国家通过高筑关税壁垒和非关税壁垒，限制别国商品进入本国市场，同时又通过倾销和外汇贬值等措施争夺国外市场，由此引起的一系列报复和反报复，称为贸易战。如果贸易战的武器仅限于相互提高关税税率，对此则称为“关税战”。"
	}]
};
var details = photosCollect['object'];


class AreaDetail extends Component {
	constructor(props) {
		super(props);
		var object = {};
		var newobject = {};
		var photosCollect = "";
		var data = {};
		var datas = {};
		const requireContext = require.context("D:/eclipse/layoutForHB/WebContent/电子地图/区域概览", true, /^\.\/.*\.jpg$/);
		const projectImg = requireContext.keys().map(requireContext);

		$.ajax({
			type: "GET", //请求的方式  
			url: "http://127.0.0.1:8081/abcd", //请求url
			data: {}, //前端向后端传送的数据  
			dataType: "json", //数据格式json
			async: false, //同步请求
			error: function(xhr) //请求错误的回调函数  
			{
				alert("失败了" + xhr.statusText + xhr.readyState)
			},
			success: function(data) //请求成功的回调函数  
			{
				object = JSON.parse(data)
				// alert("成功了" + data);
			}

			// }
		});
		for (let i = 0; i < object.length; i++) {
			if (i == object.length - 1) {
				photosCollect = photosCollect + 'SELECT * FROM ' + object[i].childname
			} else {
				photosCollect = photosCollect + 'SELECT * FROM ' + object[i].childname + ' UNION '
			}



		}
		// console.log(photosCollect);
		$.ajax({
			type: "GET", //请求的方式  
			url: "http://127.0.0.1:8081/list_user", //请求url  
			data: {
				name: photosCollect
			}, //前端向后端传送的数据
			dataType: "json", //数据格式json
			async: false, //同步请求
			error: function(xhr) //请求错误的回调函数  
			{
				alert("失败了" + xhr.statusText + xhr.readyState)
			},
			success: function(data) //请求成功的回调函数  
			{
				newobject = JSON.parse(data)
				// alert("成功了");
				// console.log(newobject)
			}


		});
		var photosCollect1 = "";
		for (let i = 0; i < newobject.length; i++) {
			if (i == newobject.length - 1) {
				photosCollect1 = photosCollect1 + 'SELECT * FROM ' + newobject[i].childname
			} else {
				photosCollect1 = photosCollect1 + 'SELECT * FROM ' + newobject[i].childname + ' UNION '
			}



		}
		var newobject1 = {};
		$.ajax({
			type: "GET", //请求的方式  
			url: "http://127.0.0.1:8081/list_user", //请求url  
			data: {
				name: photosCollect1
			}, //前端向后端传送的数据
			dataType: "json", //数据格式json
			async: false, //同步请求
			error: function(xhr) //请求错误的回调函数  
			{
				alert("失败了" + xhr.statusText + xhr.readyState)
			},
			success: function(data) //请求成功的回调函数  
			{
				newobject1 = JSON.parse(data)
				// alert("成功了");
				// console.log(newobject)
			}


		});

		// for (let i = 0, j = -1; i < newobject1.length; i++) {

		// 	newobject1[i].image = projectImg[i];

		// 	if (newobject1[i].id == 1) {
		// 		j++;
		// 		data[newobject[j].id - 1] = [];
		// 		data[newobject[j].id - 1].push(newobject1[i]);
		// 		data[newobject[j].id - 1].name = newobject[j].name;
		// 		data[newobject[j].id - 1].id = newobject[j].id;
		// 		data[newobject[j].id - 1].context = newobject[j].detail;
		// 		console.log(newobject[j].id - 1)
		// 	} else {
		// 		data[newobject[j].id - 1].push(newobject1[i])
		// 	}

		// }
		for (let i = 0, j = -1; i < newobject.length; i++) {
			newobject[i].image = projectImg[i];
			if (newobject[i].id == 1) {
				j++;
				data[object[j].id - 1] = [];
				data[object[j].id - 1].push(newobject[i]);
				data[object[j].id - 1].name = object[j].name;

				data[object[j].id - 1].context = object[j].detail;
			} else {
				data[object[j].id - 1].push(newobject[i])
			}


		}
		for (let i = 0, j = -1; i < newobject1.length; i++) {
			newobject1[i].image = projectImg[i];

			if (newobject1[i].id == 1) {
				j++;

				datas[j] = [];
				datas[j].push(newobject1[i]);
				datas[j].name = newobject[j].name;
				datas[j].id = newobject[j].id;
				datas[j].context = newobject[j].detail;
				// console.log(newobject[j].id - 1)
			} else {
				datas[j].push(newobject1[i])
			}

		}
		for (let i = 0, k = 0; i < Object.keys(data).length; i++) {
			for (let j = 0; j < Object.keys(data[i]).length; j++) {

				if (data[i][j] != null) {

					data[i][j].detail = datas[k];
					// console.log(data[i][j].detail);
					k++;
				}
			}
			console.log(data[i][0].detail);
		}



		this.state = {
			data: data
		};
		// console.log(data[i][j].detail)
	}


	render() {

		return (
			<div className="hw100">
      <Navigator  className="" imgUrlin={imgUrlout} imgUrlout={imgUrlin}/>
      <MainBody className="mainbody row " apptype='areadetails' index={this.props.params.index_id} details={details} photosCollect={photosCollect} data={this.state.data}/>
      </div >
		);
	}
};

export default AreaDetail;
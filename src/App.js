import React, {
  Component
} from 'react';

//import logo from './logo.svg';
import $ from 'jquery';
import './App.css';
import './welcome.css';

import Navigator from './Navigator'
import MainBody from './Mainbody'
import imgUrlin from './datas/分解图/2/04.png';
import imgUrlout from './datas/分解图/2/05.png';



class App extends Component {
  constructor(props) {
    super(props);
    const requireContext = require.context("./datas/mainpage", true, /^\.\/.*\.jpg$/);
    const projectImgs = requireContext.keys().map(requireContext);
    for (var j = 0; j < projectImgs.length; j++) {
      // console.log(projectImgs[j])
      // if(projectImgs[j].indexOf(_this.dataSource[i].img) > 0){  
      //     imgURL = projectImgs[j];  
      // }  
    }
    var object = {};
    var photosCollect = [];
    $.ajax({
      type: "GET", //请求的方式  
      url: "http://127.0.0.1:8081/del_user", //请求url  
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
        // alert("成功了" + object[0].name);
      }

      // }
    });

    for (let i = 0; i < object.length; i++) {

      photosCollect.push({
        name: object[i].name,
        image: projectImgs[i]
      });

    }
    this.state = {
      photosCollect: photosCollect
    };


  }


  render() {
    return (
      <div className="hw100">
      <Navigator  className="" imgUrlin={imgUrlin} imgUrlout={imgUrlout}/>
      <MainBody className="mainbody row " apptype='app' photosCollects={this.state.photosCollect.length}  photosCollect={this.state.photosCollect}/>
      </div >
    );
  }

};

export default App;
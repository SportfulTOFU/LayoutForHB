import React, {
  Component
} from 'react';

import {
  Link
} from 'react-router'

class Navigator extends Component {

  constructor(props) {

    super(props);
    this.btnbgchange = this.btnbgchange.bind(this);
    this.state = {
      index: 0,
      value1: this.props.imgUrlin,
      value2: this.props.imgUrlout,
    };
    // console.log();
  }

  btnbgchange(event) { //改变tab导航条栏事件状态
    if (event.target.id === "nav-btn-area") {
      this.setState({
        index: 1,
        value1: this.props.imgUrlout,
        value2: this.props.imgUrlin,
      });
      console.log()
    } else if (event.target.id === "nav-btn-topic") {
      this.setState({
        index: 0,
        value1: this.props.imgUrlin,
        value2: this.props.imgUrlout,
      });
    } else { //暂时不做任何操作
    }
  }

  render() {
    //导航条事件改变状态变量定义处
    var style1 = {
      backgroundImage: 'url(' + this.state.value1 + ')',
    }
    var style2 = {
      backgroundImage: `url(${this.state.value2})`
      // backgroundImage: `url(${require("./datas/分解图/2/04.png")})` "图片直接引用路径做法"
      //'url(' + this.state.value2 + ')',
    }

    return (
      <div id="navigator">
    <Link to="main"><input id="nav-btn-topic" className="nav-btn" type="button" value="专 题 展 示" style={style1} ></input></Link>
      <Link to="area"><input id="nav-btn-area" className="nav-btn" type="button" value="区 域 概 览" style={style2}></input></Link>  
      </div>
    );
  }
}
export default Navigator;
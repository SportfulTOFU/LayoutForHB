import React, {
	Component
} from 'react';
//import logo from './logo.svg';
import './App.css';
import './welcome.css'
import Navigator from './Navigator'
import MainBody from './Mainbody'
import imgUrlin from './datas/分解图/2/04.png';
import imgUrlout from './datas/分解图/2/05.png';



class Area extends Component {
	render() {
		return (
			<div className="hw100">
      <Navigator  className="" imgUrlin={imgUrlout} imgUrlout={imgUrlin}/>
      <MainBody className="mainbody row " apptype='area'/>
      </div >
		);
	}
};

export default Area;
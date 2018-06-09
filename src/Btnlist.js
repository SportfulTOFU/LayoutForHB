import React, {
  Component
} from 'react';
import Dropdown from 'bootstrap';
import {
  Link,
  browserHistory
} from 'react-router';

class Btnlist extends Component { //主页面组件
  constructor(props) {

    super(props);
    this.preimageset = this.preimageset.bind(this);
    this.nextimageset = this.nextimageset.bind(this);
    this.state = {
      index: this.props.index,
    };

  }
  preimageset() {
    var check = 1;
    if (this.state.index > 0) {
      this.setState({
        index: parseInt(this.state.index, 10) - 1,

      }, () => {
        console.log(this.state.index);
        const path = `/main/${this.state.index}`;
        browserHistory.push(path);
      });

    }
    if (this.state.index <= 0) {
      console.log("别点了，疼")
    }
    this.props.callbackParent(check);


  }
  nextimageset() {
    var check = 1;
    if (this.state.index < Object.keys(this.props.data).length - 1) {
      this.setState({
        index: parseInt(this.state.index, 10) + 1,

      }, () => {
        // console.log(this.state.index);
        const path = `/main/${this.state.index}`;
        browserHistory.push(path);
      });
    }
    if (this.state.index >= Object.keys(this.props.data).length - 1) {
      console.log("到尽头了")
    }
    this.props.callbackParent(check);
  }

  render() {

    var btnlist = [];
    // console.log(Object.keys(this.props.data).length);
    for (let i = 0; i < Object.keys(this.props.data).length; i++) {
      btnlist.push(
        <Link key={i} to={'/main/'+i}><li onClick={()=>{this.setState({index: i})}}>{this.props.data[i].name}</li></Link>
      );
    }


    return (
      <div className="btnlist-box"  style={{width:"100%"}}>
    <input  className="btn btn-primary prev-btn" type="button" value="上一组"  style={{width:"20%"}} onClick={this.preimageset}></input>
    <div className="btn-group list-btn"  style={ {width: '60%',}}>
    <button type="button" className="btn btn-danger" style={ {width: '80%',}}>{this.props.data[this.props.index].name}</button>
    <button type="button" style={ {width: '20%',}} className="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      <span className="caret"></span>
      <span className="sr-only">Toggle Dropdown</span>
    </button>
    <ul className="dropdown-menu">
    {btnlist}
    </ul>
    </div>
     <input style={{width:"20%"}}  className="btn btn-primary next-btn" type="button" value="下一组" onClick={this.nextimageset}></input>
      </div>
    );
  }
};
export default Btnlist;
import React, {
  Component
} from 'react';

class View extends Component { //主页面组件

  render() {

    var message = this.props.message
    var image = this.props.image
    // console.log(image)
    return (
      <div className="col-xs-6 col-md-3 panel panel-panel ">
        <div className="panel-b" >
        <img className="img-responsive panel-img" src={image} alt="" ></img>
        </div>
        <div className="panel-heading panel-h">
          <h3 className="panel-title text-center" >{message}
          </h3>
        </div>
      </div>

    );
  }
};
export default View;
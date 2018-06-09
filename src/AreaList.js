import React, {
  Component
} from 'react';

import './AreaList.css'
class AreaList extends Component {
  render() {

    let topicname = this.props.data[this.props.index - 1].name;
    let listname = [];
    for (let i = 0; i < this.props.data[this.props.index - 1].length; i++) {
      listname.push(<li key={i} id={i} className="list-group-item btn btn-default"  autoComplete="off" onClick={this.props.areahandleChange}>{this.props.data[this.props.index-1][i].name}</li>);

    }
    let style1 = {
      height: "100%",
      padding: 0
    }
    return (
      <div className="panel-group col-md-3 area-detail-panel" style={style1} role="tablist" aria-multiselectable="true">
  <div className="panel panel-primary " style={style1}>
    <div className="panel-heading" role="tab tab-primary" id="headingOne" >
      <h4 className="panel-title ">
        <a className="" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
         {topicname}
        </a>
      </h4>
    </div>
    <div id="collapseOne" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="collapseListGroupHeading1" aria-expanded="true" >
        <ul className="list-group ">
         {listname}
        </ul>
        <div className="panel-footer">Footer</div>
      </div>
    
  </div>
</div>


    );
  }
};

export default AreaList;
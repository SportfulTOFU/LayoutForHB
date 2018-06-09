import React, {
  Component
} from 'react';
import View from './View'
import {
  Link
} from 'react-router'

class Views extends Component { //视图组件
  render() {
    var items = [];
    for (let i = this.props.index; i < this.props.index + 8; i++) {
      if (this.props.photosCollect[i] != null) {
        items.push(<Link key={i} to={'/main/'+i}><View  message={this.props.photosCollect[i].name} image={this.props.photosCollect[i].image}/></Link>)
      } else {
        items.push(<div></div>)
      }
    }
    return (
      <div className="hw100 ">
         {items}
      </div>
    )
  }
};
export default Views;
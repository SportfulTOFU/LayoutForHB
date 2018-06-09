import React, {
  Component
} from 'react';


class Pagebtn extends Component { //生成页面按钮
  constructor(props) {
    super(props);
    // this.handleChange = this.handleChange.bind(this);
    this.state = {
      windowNum: this.divide(this.props.photosCollects),
      padding: this.length(this.props.photosCollects),

    };
  }

  divide(photosCollects) { //获取页面窗口数量

    if ((photosCollects / 8) % 1 === 0) {

      return photosCollects / 8;

    } else {
      return photosCollects / 8 + 1;
    }

  }

  length(photosCollects) { //获取页面窗口下标的偏移量
    var length = (46.25 - parseInt(this.props.photosCollects / 8 + 1, 10) * 1.25) + '%';
    return length;
  }



  render() {
    //页面按钮变量定义处
    var NavPageBtns = [];
    for (var i = 1; i <= this.state.windowNum; i++) {

      NavPageBtns.push(<li key={i}  value={i} onClick={this.props.handleChange} className={(this.props.index===(i-1)*8)?"active":""}><a >{i}</a></li>);
      // console.log(this.props.index)
    }


    return (
      <div className="page-btn w100" >
      <nav aria-label="Page navigation" className="page-nav-btn">
          <ul className="pagination">
            <li className="page-btn" key={0} onClick={this.props.handlefall}>
              <a  aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>       
            {NavPageBtns}
            <li key={this.state.windowNum+1} onClick={this.props.handleadd}>
              <a  aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
      </div >
    );
  }
};
export default Pagebtn;
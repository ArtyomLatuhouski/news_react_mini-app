import React from "react";
import { Component } from "react";
import {connect} from "react-redux";
import {newsCreat} from "../../redux/actionCreators/newNewsAction";


class ItemNews extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
    this.body = React.createRef();
    this.inviz=this.inviz.bind(this)
  }
  inviz(event){
    event.preventDefault()
    event.target.classList.toggle('collapsed')
    event.target['aria-expanded']=!event.target['aria-expanded']
    this.body.current.classList.toggle('show')
  }
  componentDidMount() {}

  render() {
    return (
      <div className="accordion-item" >
        <h2 className="accordion-header"  >
          <button onClick={this.inviz}  className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                  aria-expanded="false" >
            {this.props.news.title}
          </button>
        </h2>
        <div ref={this.body} id="collapseOne" className="accordion-collapse collapse"
             data-bs-parent="#accordionExample"  >
          <div  className="accordion-body" >
            {this.props.news.text}
          </div>
        </div>
      </div>
    );
  }
}



export default ItemNews;

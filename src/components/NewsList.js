import React from "react";

import {Component} from "react";
import ItemNews from "./ItemNews/ItemNews";
import {newsCreat} from "../redux/actionCreators/newNewsAction";
import {connect} from "react-redux";


class NewsList_default extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className="accordion" id="accordionExample" style={{'width': '600px',marginTop: '50px'}}>
        <h3 style={{textAlign: "center"}}>News</h3>
        {this.props.news.map((item)=><ItemNews key={item.date} news={item}/>)}
      </div>
    );
  }
}

const mapStateToProps=(state)=>({
  news:state.news
})




const NewsList =connect(mapStateToProps,null)(NewsList_default)


export default NewsList;

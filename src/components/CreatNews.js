import React from "react";
import {Component} from "react";
import {createRef} from "react/cjs/react.production.min";
import {connect} from "react-redux";
//local
import {newsCreat} from "../redux/actionCreators/newNewsAction";
import ErrorLine from "./ErrorLine";

const initialStateCreat={
  title:'',
  text:''
}

class CreatNews_default extends Component {
  constructor(props) {
    super(props);
    this.state = initialStateCreat;
    this.errorBlock=createRef()
    this.setPathNews=this.setPathNews.bind(this)
    this.creatNews=this.creatNews.bind(this)
  }
  setPathNews(e){
    this.setState({
    [e.target.name]:e.target.value})
  }
  creatNews(event){
    event.preventDefault()
    const state=this.state
    //проверка наличия title
    if (!state.title.trim()){
      this.setState({error:'Title should not be empty'})
      setTimeout(()=>{
        let state=this.state
        delete state.error
        this.setState(state)
      },4000)
      return
    }
    //проверка наличия text
    if (!state.text.trim()){
      this.setState({error:'Text should not be empty'})
      setTimeout(()=>{
        let state=this.state
        delete state.error
        this.setState(state)
      },4000)
      return
    }

    state.date=Date.now()
    this.props.newsCreat(state)
    this.setState(initialStateCreat)
  }

  componentDidMount() {
  }

  render() {
    const errorRender=()=>{
      if (this.state.error)
      {
        return <ErrorLine errorText={this.state.error} />
      }
    }
    return (
      <div className='container' style={{marginTop: '50px', width: '600px'}}>
        <h3 style={{textAlign: "center"}}>Creat new news</h3>
        <form action="">
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Titel</span>
            <input onChange={this.setPathNews} name='title' type="text" className="form-control" maxLength='50'
                   aria-describedby="basic-addon1" value={this.state.title}/>
          </div>
          <div className="input-group">
            <span className="input-group-text" id="basic-addon1">Text</span>
            <textarea  onChange={this.setPathNews} name='text' className="form-control" aria-label="With textarea"
                      style={{height: '150px', resize: "none"}} value={this.state.text}/>
          </div>
          <div ref={this.errorBlock} style={{width:'100%',height:'40px',margin:'1px 0'}}>
            {errorRender()}
          </div>
          <div style={{display:'flex',alignItems:"center",justifyContent:"flex-end"}}>
            <button onClick={this.creatNews} type="button" className="btn btn-outline-success">Creat</button>
          </div>

        </form>
      </div>
    );
  }
}

const mapStateToProps=(state)=>({
  news:state.news
})
const mapDispatchToProp={
  newsCreat
}

const CreatNews=connect(mapStateToProps,mapDispatchToProp)(CreatNews_default)


export default CreatNews;

import './App.css';
import {Route} from 'react-router-dom'
import {Switch} from "react-router-dom";
import Header from "./components/Header";
import NewsList from "./components/NewsList";
import CreatNews from "./components/CreatNews";


function App() {
  return (
    <div>
      <Header/>
      <div>
        <Switch>
          <Route exact path='/news_list' render={() => <NewsList/>}/>
          <Route exact path='/creat_news' render={() => <CreatNews/>}/>
        </Switch>
      </div>

    </div>

  );
}

export default App;

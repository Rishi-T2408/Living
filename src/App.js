

import Navbar from './Navbar'
import Home from './Home'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Create from './Create';
import blogDetail from './blogDetail';
function App() {  //Making router functionality avaliable to all the compoent
  //So for making an variable path which will be blog id to be open it will look like
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
          <Route exact path="/"> 
              <Home />
          </Route>
          <Route exact path="/Create">
              <Create />
          </Route>
          <Route exact path="/blogs/:id"> 
            <blogDetail />
          </Route>
          
          </Switch>
            
        </div>
      </div>
    </Router>
  );
}

export default App;

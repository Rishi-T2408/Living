
import Navbar from './components/Navbar'
import Home from './components/Home'
import Dashboard from './components/Dashboard'
import ProjectDetails from './components/ProjectDetails'
import CreateProject from './components/CreateProject'
import { BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import Notfound from './components/Notfound';
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./components/themes.js";
import { useState } from 'react';
import { FaMoon, FaPinterest, FaTwitter } from "react-icons/fa";
import { CgInstagram } from "react-icons/cg";
import Cards from './components/Cards';
import Footer from './components/Footer';
import Fruit from './components/Fruit'
import ScrollToTop from './components/ScrollToTop'

const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;
function App() {  
  const [theme, setTheme] = useState("light")      

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <StyledApp>    
    <Router>
    
      <div className="App">
       
        <Navbar />
        <div className="socialicons">
        <button className="themeb" onClick={() => themeToggler()}><Link to='/'><FaMoon size="1.3em" color="black"/></Link></button>
        <button className="themeb"><Link to='/'><CgInstagram size="1.3em" color="black"/></Link></button>
        <button className="themeb"><Link to='/'><FaTwitter size="1.3em" color="black"/></Link></button>
        <button className="themeb"><Link to='/'><FaPinterest size="1.3em" color="black"/></Link></button>
       
   
        </div>
        <div className="content">
          <ScrollToTop />
          <Switch>
          <Route exact path="/"> 
              <Home />
          </Route>
          <Route exact path="/Category"> 
                <Cards />
          </Route>
          
          <Route exact path="/fruit"> 
                <Fruit />
          </Route>
          <Route exact path='/dashboard'component={Dashboard} />
          <Route path='/project/:id' component={ProjectDetails} />
          
          <Route path='/create' component={CreateProject} />
          <Route path="*"> 
            <Notfound />
          </Route>   
          </Switch>

          <Footer />
        </div>
      </div>
    </Router>
    </StyledApp>
    </ThemeProvider>
  );
}

export default App;

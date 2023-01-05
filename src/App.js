import profile from './resources/profile23.jpg';
import './App.css';
import { useState } from 'react'
import { render } from '@testing-library/react';
import { ReactDOM } from 'globalthis/implementation';
// import NavBar from './components/nav';

function App() {
  // const root = ReactDOM.createRoot(document.getElementById('root')); 

  return (
    <div className="App">
      <header className="App-header">
        <img src={profile} className="App-logo" alt="logo" />
        <h1>Michael Kuhn</h1>
        <p>
          Web intro. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac massa neque. Suspendisse tempor commodo massa. Curabitur viverra nulla ornare justo congue, vel ornare sem mattis. Vestibulum ac mi tincidunt, pellentesque lectus vitae, interdum nisl.
        </p>
      </header>
      <NavBar></NavBar>
    </div>
  );
}

export default App;

function NavBar(){
  // Active page is saved in state, home is default
  const [active, setActive] = useState("Home");

  // Define nav buttons
  const NavItem = (props) => {
      let itemClass = "nav-item"; // default class
      if (props.page === active){
          itemClass += " nav-item-active" // additional class if active
      }

      // onclick, set active page to clicked page
      const handleClick = () => {
          setActive(props.page);
          let root = ReactDOM.createRoot(document.getElementById('root'))
          root.render(props.fn())
      }

      return (
          <li className={itemClass} onClick={handleClick}>
              {props.page}
          </li>
      )
  }

  return (
      <nav>
          <ul className="nav-menu background">
              <NavItem page="About" fn={AboutPage} />
              <NavItem page="Contact"/>
          </ul>
      </nav>
  )
}

function AboutPage(){
  console.log("Test")
  return(
    <div id="About">
      <p>Hello</p>
    </div>
  )
}
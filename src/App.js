import profile from './resources/profile23.jpg';
import './App.css';
import { useState } from 'react'
import { render } from '@testing-library/react';
import { ReactDOM } from 'globalthis/implementation';
import {send} from 'emailjs-com';
// import NavBar from './components/nav';

function App() {
  // const root = ReactDOM.createRoot(document.getElementById('root')); 

  return (
    
    <div className="App">
      <header className="App-header">
        <div className='Container'>
          <img src={profile} className="App-logo" alt="logo" />
          <h1>Michael Kuhn</h1>
          <p>
            As a graduate student in Civic Analytics and Manager of eCampaigns at United Way of Metro Chicago, my unique perspective and diverse experience make me a valuable asset to any organization seeking to create positive change in our community. I am passionate about using data-driven decision-making and creativity to provide exceptional customer experiences that drive engagement and support our mission. My commitment to social impact and community service drives me to continuously seek innovative ways to achieve our goals.
          </p>
        </div>
      </header>
      <NavBar></NavBar>
    </div>
  );
}

export default App;

function NavBar() {
  // Active page is saved in state, home is default
  const [showOverlayAbout, setShowOverlayAbout] = useState(false);
  const [showOverlayContact, setShowOverlayContact] = useState(false);

  function handleAboutClick() {
    setShowOverlayAbout(true);
  }

  function handleContactClick() {
    setShowOverlayContact(true)
  }

  return (
    <nav>
      <ul className="nav-menu background">
        <button onClick={handleAboutClick}>About</button>
        <button onClick={handleContactClick}>Contact</button>
      </ul>
      {showOverlayAbout && <AboutPage onClose={() => setShowOverlayAbout(false)} />}
      {showOverlayContact && <ContactPage onClose={() => setShowOverlayContact(false)} />}
    </nav>
  )
}


function AboutPage(props) {
  function handleOverlayClick(e) {
    //console.log(e)
    if (e.target.className === "Overlay") {
      props.onClose()
    }
  }
  return (
    <div className="Overlay" id="About" onClick={handleOverlayClick}>
      <div className="Page">
        <div>
          <p>I am the eCampaigns Manager at United Way of Metro Chicago, responsible for leading successful online fundraising campaigns. My wealth of experience in project management, problem-solving, and communication helps me achieve our goals and improve campaigns.</p>
          <p>Previously, I worked as a Group Quarters Census Field Manager, overseeing 1,500 employees and creating shared Excel spreadsheets with formulas to combine valuable information. My technical aptitude allowed me to quickly learn specialized systems and aid colleagues.</p>
          <p>Completing Northwestern University's Data Science Bootcamp expanded my familiarity with statistical techniques, HTML, and large data sets. My certificate attests to my proficiency in applying research and technical analysis to any problem.</p>
          <p>Through my academic pursuits and professional experiences, I developed a profound comprehension of the power of data to drive positive transformations in communities. I am excited to use my skills and knowledge to make a genuine impact on society and solve intricate issues through data-driven decision-making.</p>
          <p>My expertise in data analysis and experience in managing online campaigns have provided me with the tools to thrive in this field. My dedication to enhancing my skills and leveraging data to create positive societal changes drives me. The satisfaction that comes from solving complex problems through data analysis is what motivates me to continue refining my abilities in this dynamic field.</p>
        </div>
        <button className="close" onClick={props.onClose}>Close</button>
      </div>
    </div>
  )
}

function ContactPage(props) {

  function handleOverlayClick(e) {
    //console.log(e)
    if (e.target.className === "Overlay") {
      props.onClose()
    }
  }

  const [toSend, setToSend] = useState({
    from_name: '',
    to_name: '',
    message: '',
    reply_to: '',
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send(
      'service_fl8fukb',
      'template_ce5fdx9',
      toSend,
      [..."_LsOCWVgKC-gwUZQm"].reverse().join('')
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
    // TODO: indicate to user that email sent 
    props.onClose();
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };


  return (
    <div className="Overlay" id="Contact" onClick={handleOverlayClick}>
      <div className="Page">
        <h2>Let's Connect!</h2>
        <form onSubmit={onSubmit}>
          <div>
            <label htmlFor='from_name'>Name</label>
            <input
              type='text'
              id='from_name'
              name='from_name'
              placeholder='from name'
              value={toSend.from_name}
              onChange={handleChange}
            />
          </div>
          <input
            type='hidden'
            id = 'to_name'
            name='to_name'
            placeholder='to name'
            value='Website Inquiry'
            onChange={handleChange}
          />
          <div>
            <label htmlFor='message'>Message</label>
            <input
              type='text'
              id = "message"
              name='message'
              placeholder='Your message'
              value={toSend.message}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor='reply_to'>Email</label>
            <input
              type='text'
              id = 'reply_to'
              name='reply_to'
              placeholder='Your email'
              value={toSend.reply_to}
              onChange={handleChange}
            />
          </div>
          <button type='submit'>Submit</button>

        </form>
        <button className="close" onClick={props.onClose}>Close</button>
      </div>
    </div>
  )
}
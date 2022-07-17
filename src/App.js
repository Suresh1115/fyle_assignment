import logo from './logo.svg';
import './App.css';
import { MdLink } from 'react-icons/md';
import { MdLocationOn} from 'react-icons/md';
import Hero from './components/hero.js';
import Heroes from './components/heroes.js';
import Pagination from './components/pagination.js'



function App() {

  return (
    <div className="App">
      <div className="header">
        <div className="profile">
         <div className="outlook">
           <div className="image-section">
             <p className="img">Image</p>
           </div>
          </div>
          <div className="link">
            <p> <MdLink className="icon" /> </p>
            <p> https://github.com/john_doe</p>
          </div>
        </div>
        <div className="name-section">
          <h1>John Doe</h1>
          <p>Bio goes here</p>
          <div className="link">
           <p> <MdLocationOn className="icon" /> </p>
           <p> Orlando</p>
          </div>
          <p>Twitter:https://twitter.com/john_doe</p>
        </div>
      </div>
       

      <div className="hero-container">
        <Hero title="Heroes" description="Heroes description goes here" />
        <Heroes title="Heroes" description="Heroes description goes here" />
      </div>
      
      <div className="hero-container">
        <Heroes title="Heroes" description="Heroes description goes here" />
        <Hero title="Heroes" description="Heroes description goes here" />
      </div>

      <div className="hero-container">
        <Hero title="Heroes" description="Heroes description goes here" />
        <Heroes title="Heroes" description="Heroes description goes here" />
      </div>

      <div className="pagination">
        <Pagination />
      </div>

    </div>
  );
}

export default App;

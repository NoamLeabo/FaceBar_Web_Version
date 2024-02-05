import './App.css';
import InfoBox from './InfoBox';
import HLineTextBlock from './HLineTextBlock';
import SLineTextBlock from './SLineTextBlock';

function App() {
  return (
    <div>
    <div className="container">
      {/* Creating a row in which we will be inserting Col's */}
      <div className="row">
        {/* Creating a first Col' in which we will write our logo and some description */}
        
        {/* Logo */}
        <HLineTextBlock />

        {/* Creating a second Col' in which we will have the login-Box */}
        <InfoBox />

      </div>

      {/* Adding a visual divider */}
      <hr style={{ margin: '100px 0' }} />
      
    </div>
  </div>
  );
}

export default App;

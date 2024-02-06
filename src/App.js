import './App.css';
import LoginBox from './loginPage/LoginBox';
import MainTextBlock from './loginPage/MainTextBlock';
import SLineTextBlock from './loginPage/SubTextBlock';

function App() {
  return (
    <div>
    <div className="container">
      {/* Creating a row in which we will be inserting Col's */}
      <div className="row">
        {/* Creating a first Col' -Main_Text_Section- in which we will write our logo and some description */}
        
        <MainTextBlock />

        {/* Creating a second Col' in which we will have the login-Box */}
        <LoginBox />

      </div>

      {/* Adding a visual divider */}
      <hr style={{ margin: '100px 0' }} />
      
    </div>
  </div>
  );
}

export default App;


import CopyrightSharpIcon from '@mui/icons-material/CopyrightSharp';
import './App.css';
import SignUpForm from './components/SignUp/signupform';

function App() {
  return (
    <div className="App">
       <header className="App-header">
      <div className="head-left">
          <div className="head-logo">
            <img src={ process.env.PUBLIC_URL + 'static/images/blue_apples_logo.png'}
                  alt="Render Logo" width="200px" />
          </div>
          <div className="App-title">
            
          </div>
        </div>
        <div className="head-right">
          React Project - 10<br />
          React Sign Up Form Processing
        </div>
      </header>
      
      <main className="container">
        <SignUpForm />        
      </main>
      <div className="App-footer">
        <div className="footer-info">
          <CopyrightSharpIcon fontSize='small' style={{marginRight: 6}} />  Powered By React!
        </div>
      </div>
    </div>
  );
}

export default App;

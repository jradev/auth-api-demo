import logo from './logo.svg';
import './App.css';
import Navigation from './navigation';
import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {
  return (
    <GoogleOAuthProvider
    redirect_uri='http://localhost:3000/redirect'
    clientId="15215379422-3v7tol5m71mmehkj7toc4pt120e61apv.apps.googleusercontent.com"
    onSuccess={credentialResponse => {
        console.log(credentialResponse);
      }}
      onError={() => {
        console.log('Login Failed');
      }}
    >
    <div className="App">
      <Navigation/>
    </div>
    </GoogleOAuthProvider>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import Analytics from '@aws-amplify/analytics';
import Auth from '@aws-amplify/auth';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const amplifyConfig = {
  Auth: {
    identityPoolId: 'us-east-1:f1266f96-0352-4237-91d4-3347c480d527',
    region: 'us-east-1'
  }
}
//Initialize Amplify
Auth.configure(amplifyConfig);

const analyticsConfig = {
  AWSPinpoint: {
        // Amazon Pinpoint App Client ID
        appId: 'f38158f81d05445daa3b37ad0b6a9257',
        // Amazon service region
        region: 'us-west-2',
        mandatorySignIn: false,
  }
}

Analytics.configure(analyticsConfig)

Analytics.record('index');

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

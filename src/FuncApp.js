import React from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import {showNotification,hideNotification,flashNotification} from './redux/notifications';


function FuncApp(props) {

  
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Notification :
          </p>

          <button onClick={() => props.showNotification("Hi there from func!")}> show it</button>
          <button onClick={() => props.hideNotification()}> hide it </button>
          <button onClick={() => props.flashNotification("Hi flash",10000)}> flash notification </button>

          {props.notifications.active && <p>{props.notifications.text}</p>}
        </header>
      </div>
    );
  }


function mapStateToProps(state){
  return{
    notifications: state.notifications
  }
}
const mapDispatchToProps={showNotification,hideNotification,flashNotification}

export default connect(mapStateToProps,mapDispatchToProps)(FuncApp);

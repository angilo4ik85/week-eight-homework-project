import { useEffect, useState } from 'react';
import './App.css';
import { DeviceFrameset } from 'react-device-frameset';
import 'react-device-frameset/styles/marvel-devices.min.css';
import icon from './monster.png';
import battery from './battery.gif';
import connection from './connection.gif';
import wifi from './wifi.gif';
import cloud from './cloud.gif';
import button from './button.gif';
import Clock from './Clock';

function App() {

  const [activities, setActivities] = useState("");

  useEffect(() => {
    getActivity();
  }, [])
    
    const getActivity = async() => {
      const response = await fetch(`https://www.boredapi.com/api/activity/`);
      const data = await response.json();
      setActivities(data.activity);
    }
    

 

  return (
    <DeviceFrameset device='iPad Mini' color="silver" landscape>
    <div className='frame'>
      <div className='topPhone'>
        <Clock/>
        <img className='monster' src={icon} alt='monster' width='100px'/>

        <div>
          <img src={cloud} className='icon' alt='cloud' height='50px'/>
          <img src={connection} className='icon' alt='connection' height='50px'/>
          <img src={wifi} className='icon' alt='wifi' height='50px'/>
          <img src={battery} className='icon' alt='battery' height='50px'/>
        </div>
      </div>

      <div className="phone-frame">
        <h1>Find activity for you</h1>
        <p className='activity'>{activities}</p>
        <button onClick={getActivity}>
          <img src={button} className='icon' alt='button'/>
        </button>
      </div>
    </div>
    </DeviceFrameset>
  );
}

export default App;

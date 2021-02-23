import React, { useState } from 'react';
import DispayComponent from './Components/DispayComponent'
import BtnComponent from './Components/BtnComponent'
import './App.css';

function App() {
  const [time, setTime] = useState({ s: 0, m: 0, h: 0 });
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);

  const start = () => {
    run();
    setStatus(1);
    setInterv(setInterval(run, 1000))
  }

  let updatedS = time.s, updatedM = time.m, updatedH = time.h;

  const run = () => {
    if (updatedM === 59) {
      updatedH++;
      updatedM = 0;
    }
    if (updatedS === 59) {
      updatedM++;
      updatedS = 0;
    }
    updatedS++;
    return setTime({ s: updatedS, m: updatedM, h: updatedH })
  }

  const stop = () => {
    clearInterval(interv);
    setStatus(2)
  }
  const reset = () => {
    clearInterval(interv);
    setStatus(0);
    setTime({ s: 0, m: 0, h: 0 });
  }

  const resume = () => start();
  return (
    <div className="main-section">
      <div className='clock-holder'>
        <div className='secundomer'>
          <DispayComponent time={time} />
          <BtnComponent start={start} stop={stop} reset={reset} resume={resume} status={status} />
        </div>
      </div>
    </div>
  );
}

export default App;

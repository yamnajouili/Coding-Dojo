import React, { useState } from 'react';
import Tabs from './components/Tabs';
import'./App.css';

function App() {
  const tabs = ["good code", "very good code", "bad code"];
  const [list, setTabs] = useState("");
 
  const display = (onetab) => {
  
    setTabs(onetab);
  };

  return (
    <div className="App ">
      <Tabs tabs={tabs} display={display} />
      <textarea onChange={(e)=>{setTabs(e.target.value)}} value={list} ></textarea>
    </div>
  );
}

export default App;
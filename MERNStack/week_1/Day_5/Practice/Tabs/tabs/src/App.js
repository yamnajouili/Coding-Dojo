import React, { useState } from 'react';
import Tabs from './components/Tabs';
import'./App.css';

function App() {
  const tabs = ["good", "very good", "bad code"];
  const [list, setTabs] = useState(tabs);
 
  const display = (index) => {
    const updatedTabs = tabs.filter((onetab, i) => i === index);
    setTabs(updatedTabs);
  };

  return (
    <div className="App">
      <Tabs listtab={list} display={display} />
    </div>
  );
}

export default App;
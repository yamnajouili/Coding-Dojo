import React from 'react';

const Tabs = ({tabs, display }) => {
  return (
    <div className='flex'>
      {tabs.map((onetab, index) => (
        <div key={index}>
          <div >
            <button className='btn' onClick={() => display(onetab)}>
              Tab {index + 1}
            </button>
            
      
          </div>
         
        </div>
      ))}
    </div>
  );
};

export default Tabs;

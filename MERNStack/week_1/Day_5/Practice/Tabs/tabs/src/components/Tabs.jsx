import React from 'react';

const Tabs = ({ listtab, display }) => {
  return (
    <div>
      {listtab.map((onetab, index) => (
        <div key={index}>
          <div className='flex'>
            <button className='btn' onClick={() => display(index)}>
              Tab {index + 1}
            </button>
            <div className='card'>{onetab}</div>
      
          </div>
         
        </div>
      ))}
    </div>
  );
};

export default Tabs;

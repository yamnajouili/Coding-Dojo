import React from 'react'

const Display = ({box}) => {
    
  return (
    <div className=' flex gap-4 justify-center  m-auto '>
          {box.map((oneBox, idx) => {
        return (
          <div key={idx}>
            {oneBox}
          </div>
        );
      })}
    </div>
  )
}

export default Display
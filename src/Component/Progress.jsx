import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

function ContextualExample({color, percent}) {
  return (
    <div>
      <ProgressBar striped variant={color} now={percent} className='bg-gray-300 w-[80%]'/>
    </div>
  );
}

export default ContextualExample;

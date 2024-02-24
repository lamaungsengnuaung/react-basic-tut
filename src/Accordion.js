// import { useState } from 'react';
 
import './Accordion.css';

export default function Accordion({id,open,onClick, labelText, children }) {
//   const [open, setOpen] = useState(false);

  const handleClick = () => {
    onClick(id);
    // setOpen((preValue) => {
    //   return !preValue;
    // });
  };
  return (
    <div className='accordion'>
      <div className='label-text' onClick={handleClick}>
        {labelText}
      </div>
      {open && <div>{children}</div>}
    </div>
  );
}

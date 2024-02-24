import Accordion from './Accordion';
import { useState } from 'react';
import './Accordion.css';
import Profile from './Profile'
function App() {
  const [openAccordionId, setopenAccordionId] = useState(null);

  const handleAccordionClick = (accordionId) => {
    setopenAccordionId((preValue) => {
      return preValue === accordionId ?  null : accordionId
    });
  };

  return (
    <div>
      <Accordion
        id='my-profile'
        labelText='my profile'
        open={openAccordionId === 'my-profile'}
        onClick={handleAccordionClick}
      >
      <Profile/>
      </Accordion>

      <Accordion
        id='my-hobbies'
        labelText='my hobbies'
        open={openAccordionId === 'my-hobbies'}
        onClick={handleAccordionClick}
      >
        second accordion
      </Accordion>
    </div>
  );
}

export default App;

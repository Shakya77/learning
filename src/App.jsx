import React, { useState } from 'react';
import Title from './components/Title';
import Modal from './components/Modal';

const App = () => {

  const [showEvents, setShowEvents] = useState(true);


  const [events, setEvents] = useState([
    { title: "mario ko xoro ko brth day", id: 1 },
    { title: "ramey ko brth day", id: 2 },
    { title: "hari ko xoro ko brth day", id: 3 },
    { title: "hari ko xori ko xoro ko brth day", id: 4 },
  ]);

  const handleClick = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
        return id !== event.id;
      })
    });
  };

  const subtitle = "this is the subtitle";

  return (
    <div>
      <Title title="this is the title" subtitle={subtitle} />
      <Title title="this is the second title" subtitle="another subtitle" />
      {showEvents && (
        <div>
          <button onClick={() => setShowEvents(false)}>hide events</button>
        </div>
      )}

      {!showEvents && (
        <div>
          <button onClick={() => setShowEvents(true)}>show events</button>
        </div>
      )}

      {showEvents &&
        events.map((event, index) => (
          <React.Fragment key={event.id}>
            <h2>{index} - {event.title}</h2>
            <button onClick={() => { handleClick(event.id) }}>Delete Event</button>
          </React.Fragment>
        ))
      }
      {/* <Modal>
        <h2>Modal title</h2>
        <p>modal content with something in text</p>
      </Modal> */}
      <Modal>
        <p>The movie is live right now</p>
        <a href='#'>Click here to see the trailer</a>
      </Modal>
    </div>
  )
}

export default App;
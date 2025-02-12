import React, { useState } from 'react';
import Title from './components/Title';
import Modal from './components/Modal';
import EventList from './components/EventList';

const App = () => {

  const [showModal, setShowModal] = useState(false);
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

  const handleClose = () => {
    setShowModal(false);
  }

  return (
    <div>
      <div className="">
        <button onClick={() => { setShowModal(true) }}>Open Modal</button>
      </div>

      <Title>
        <h1 className="title">this is the title</h1>
        <br />
        <h2 className="subtitle">{subtitle}</h2>
      </Title>

      <Title >
        <h1 className="title">this is not the title</h1>
        <br />
        <h2 className="subtitle">Another Subtitle</h2>
      </Title>

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

      {showEvents && <EventList events={events} handleClick={handleClick} />}

      {/* <Modal>
        <h2>Modal title</h2>
        <p>modal content with something in text</p>
      </Modal> */}
      {showModal && <Modal handleClose={handleClose}>
        <p>The movie is live right now</p>
        <a href='#'>Click here to see the trailer</a>
      </Modal>}
    </div>
  )
}

export default App;
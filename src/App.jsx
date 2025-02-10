import { useState } from 'react';
import Title from './components/Title';

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
          <div key={event.id}>
            <h2>{index} - {event.title}</h2>
            <button onClick={() => { handleClick(event.id) }}>Delete Event</button>
          </div>
        ))
      }
    </div>
  )
}

export default App;
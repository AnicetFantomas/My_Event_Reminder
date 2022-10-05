import { useState } from 'react';
import EventForm from './components/EventForm';
import MainPage from './MainPage/mainPage';

function App() {
  const [events, setEvents] = useState([]);

  const addEvent = (event) => {
    setEvents([event, ...events]);
  };
  return (
    <div className="App">
      <MainPage />
      <EventForm addEvent={addEvent} />
    </div>
  );
}

export default App;

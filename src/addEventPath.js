import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addEvent } from './features/Event';

export default const CreateEvent = () => {
  const eventList = useSelector((state) => state.events.value);
  const dispatch = useDispatch();
  const [eventname, setEventName] = useState('');
  const [eventlocation, setEventLocation] = useState('');
  return (
    <div>
      <h1>Schedule your Event</h1>
      <div>
        <label>Event name :</label>
        <input
          type="text"
          placeholder="event name"
          onChange={(event) => setEventName(event.target.value)}
        />
      </div>
      <div>
        <label>Location :</label>
        <input
          type="text"
          placeholder="event location"
          onChange={(event) => setEventLocation(event.target.value)}
        />
      </div>
      <div>
        <button
          type="submit"
          onClick={() => dispatch(addEvent({
            id: eventList[eventList.length - 1].id + 1,
            eventname,
            eventlocation,
          }))}
        >
          Add Event
        </button>
      </div>
    </div>
  );
};

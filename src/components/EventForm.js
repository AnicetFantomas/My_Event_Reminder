import React, { useState } from 'react';
import { uuid } from 'uuid';
/* eslint-disable react/prop-types */
// disabled react/destructuring-assignment

export default function EventForm({ addEvent }) {
  const [event, setEvent] = useState({
    id: '',
    host: '',
    startTime: '',
    endTIme: '',
    location: '',
  });

  const handleEventInputs = (e) => {
    setEvent({
      ...event,
      host: e.target.value,
      startTime: e.target.value,
      endTIme: e.target.value,
      location: e.target.value,
    });
  };

  const handleSubmitEvent = (e) => {
    e.preventDefault();
    if (event.host.trim() || event.startTime.trim()
    || event.endTIme.trim() || event.location.trim()) {
      addEvent({ ...event, id: uuid.v4() });
      setEvent({
        ...event, host: '', startTime: '', endTIme: '', location: '',
      });
    }
  };

  return (
    <form onSubmit={handleSubmitEvent}>
      <input
        name="host"
        type="text"
        value={event.host}
        onChange={handleEventInputs}
      />
      <input
        name="startTime"
        type="time"
        value={event.startTime}
        onChange={handleEventInputs}
      />
      <input
        name="endTime"
        type="time"
        value={event.endTIme}
        onChange={handleEventInputs}
      />
      <input
        name="location"
        type="text"
        value={event.location}
        onChange={handleEventInputs}
      />
      <button type="submit">Add Event</button>
    </form>
  );
}

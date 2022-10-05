import EventItem from '../components/EventItem';
import './mainPage.css';

export default function MainPage({ events }) {
  return (
    <>
      <div className="main-container">
        <div className="headerCardreverse">
          <div className="header">
            <h1>
              My
              {' '}
              <br />
              {' '}
              <span className="headerSpan">Event</span>
              {' '}
              <br />
              {' '}
              Reminder
            </h1>
            <div className="description">
              Easily host and share events with your friends across any social
              media.
            </div>
          </div>
          <section>
            <EventItem />
            {events.map((event) => (
              <EventItem key={event.id} event={event} />
            ))}
          </section>
        </div>
        <button type="button" className="createButton">Create my event</button>
      </div>
    </>
  );
}

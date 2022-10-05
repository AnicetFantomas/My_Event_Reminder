import React, { useState } from 'react';
import './mainPage.css';

export default function MainPage() {
  const [like, setLikes] = useState(0);

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

          <div className="eventCard">
            <div className="evemtImg">
              <img
                src="https://i.pinimg.com/236x/f4/64/19/f464193aada43dc0f7ebc334dc6570c2.jpg"
                alt="movie event img"
                className="evemtImg"
              />
            </div>
            <div className="eventCardContenr">
              <h2 className="eventName">Night Movie</h2>
              <div className="hostName">
                <ion-icon name="person" />
                {' '}
                Hosted by:
                {' '}
                <span>Evans</span>
              </div>
              <div className="eventDetails">
                <div className="startTime">
                  <ion-icon name="alarm" />
                  start time:
                  {' '}
                </div>
                <div className="endTime">
                  <ion-icon name="stopwatch" />
                  end time:
                  {' '}
                </div>
                <div className="eventLocation">
                  <ion-icon name="pin" />
                  {' '}
                  Location:
                  {' '}
                </div>
              </div>
              <div className="likesContainer">
                <button type="button" className="likes" onClick={() => setLikes(like + 1)}>
                  {' '}
                  <ion-icon name="happy" />
                  {' '}
                </button>
                <div>{like}</div>
              </div>
            </div>
          </div>
        </div>
        <button type="button" className="createButton">Create my event</button>
      </div>
    </>
  );
}

import React, { useState } from 'react';
import '../MainPage/mainPage.css';

export default function EventItem() {
  const [like, setLikes] = useState(0);
  return (
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
  );
}

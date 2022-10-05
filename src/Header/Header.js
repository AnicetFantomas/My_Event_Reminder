import React from "react";
import "./header.css";

export default function Header() {
  return (
    <div className="main-container">
      <div className="header">
        <h1>
          My <br /> <span className="headerSpan">Event</span> <br /> Reminder
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
            <ion-icon name="person"></ion-icon> Hosted by: <span>Evans</span>
          </div>
          <div className="eventDetails">
            <div className="startTime">
              <ion-icon name="alarm"></ion-icon>start time:{" "}
            </div>
            <div className="endTime">
              <ion-icon name="stopwatch"></ion-icon>end time:{" "}
            </div>
            <div className="eventLocation">
              <ion-icon name="pin"></ion-icon> Location:{" "}
            </div>
          </div>
        </div>
      </div>
      <div>
        <button className="createButton">Create my event</button>
      </div>
    </div>
  );
}

import React from 'react';

export default function ShowDayTime(props){
  let week = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  function displayHours(){
    let hours=props.date.getHours();
    if(hours < 10) return `0${hours}`;
    return hours;
  }

  function displayMinutes() {
    let minutes=props.date.getMinutes();
    if (minutes < 10) return `0${minutes}`;
    return minutes;
  }

  return (
    <span className="showDateTime">
      {week[props.date.getDay()]}, {displayHours()}:{displayMinutes()}
    </span>
  );
}
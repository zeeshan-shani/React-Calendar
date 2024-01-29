import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import Button from '@mui/material/Button';
import "./App.css";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import CalenderWrapper from "./calender.style";
const localizer = momentLocalizer(moment);
const DnDCalendar = withDragAndDrop(Calendar);

const App = () => {
  const [events, setEvents] = useState([
    {
      start: moment().toDate(),
      end: moment().add(1, "days").toDate(),
      title: "Some title",
    },
  ]);

  const onEventResize = (data) => {
    const { start, end } = data;

    setEvents((prevEvents) => {
      const updatedEvent = { ...prevEvents[0], start, end };
      return [updatedEvent];
    });
  };

  const onEventDrop = (data) => {
    console.log(data);
  };

  return (
    <div className="App">
     <Button variant="contained">Contained</Button>
        <CalenderWrapper className="">
      <DnDCalendar
        defaultDate={moment().toDate()}
        defaultView="month"
        views={["day", "week", "month"]}
        events={events}
        localizer={localizer}
        onEventDrop={onEventDrop}
        onEventResize={onEventResize}
        resizable
        style={{ height: "100vh" }}
      />
      </CalenderWrapper>
    </div>
  );
};

export default App;

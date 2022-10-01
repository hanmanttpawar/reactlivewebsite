import React, { useState } from "react";
import "./Home.css";
import data from "../../data.json";
import EventCard from "../EventCard/EventCard";

const Home = () => {
  const [selectedCountry, setSelectedCountry] = useState("USA");
  return (
    <div className="home"> 

      {/* Sidebar */}

      <div className="sidebar_container">
        <div className="sidebar">
          {Object.keys(data).map((line) => (
            <p
              className="country"
              key={line}
              id={line}
              style={
                line === selectedCountry ? { backgroundColor: "#F16621" } : {}
              }
              onClick={(event) => {
                setSelectedCountry(line);
              }}
            >
              {line}({data[line].length})
            </p>
          ))}
        </div>
      </div>

      {/* Events to be displayed */}

      <div className="event">
        {data[selectedCountry].map((item, index) => (
          <EventCard
            key={index}
            image={item.image}
            title={item.title}
            date={item.date}
            venue={item.venue}
          />
        ))}
      </div>

    </div>
  );
};

export default Home;

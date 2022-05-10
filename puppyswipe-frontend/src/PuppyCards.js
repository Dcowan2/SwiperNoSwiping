import React, { useState,useEffect } from "react";
import TinderCard from "react-tinder-card";
import "./PuppyCards.css";
import axios from "./axios";

function PuppyCards() {
  const [dog, setDog] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get("/puppy/cards");
      setDog(req.data);
    }
    fetchData();
  }, []);
  console.log(dog)
  const swiped = (direction, nameToDelete) => {
  };
  const outOfFrame = (name) => {
  };

  return (
    <div className="puppyCards">
      <div className="puppyCards">
        {dog.map((puppy) => (
          <TinderCard
            className="swipe"
            key={puppy.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, puppy.name)}
            onCardLeftScreen={() => outOfFrame(puppy.name)}
          >
            <div
              className="card"
              style={{ backgroundImage: `url(${puppy.imgUrl})` }}
            >
              <h3>{puppy.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default PuppyCards;

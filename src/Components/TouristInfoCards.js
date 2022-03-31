import React from "react";
import bootstrap from "bootstrap";
const TouristInfo = () => {
  return (
    <>
      <div className="card">
        <img src="../images/Glasgow.jpg" className="card-img-top" />
        <p>
          From independent stores to high street retailers, Glasgow is the best
          shopping city. Glasgow's city centre is home to flagship stores,
          impressive shopping centres and designer favourites all within an
          easily walkable area. The city is also rich in artists and creators
          which makes for a thriving and exciting independent shopping scene.
        </p>
        <div className="card-body">
          <a href="http://peoplemakeglasgow.com" className="btn btn-primary">
            Go Glasgow
          </a>
        </div>
      </div>
      <div className="card">
        <p>
          Manchester city centre is jam-packed with unique and eclectic
          restaurants, bars, shops, museums, galleries, hotels and places to
          stay whilst the surrounding Greater Manchester boroughs offer a
          patch-work of visitor experiences including quaint market towns,
          traditional pubs and beautiful green spaces and waterways to be
          explored on foot or bike. The city region is easily navigated, with
          great transport links both in and around Greater Manchester.
        </p>
        <img src="../images/manchester.jpg" className="card-img-top" />
        <div className="card-body">
          <a href="http://visitmanchester.com" className="btn btn-primary">
            Go Manchester
          </a>
        </div>
      </div>
      <div className="card">
        <img src="../images/london.jpg" className="card-img-top" />
        <p>
          See world-famous London attractions, iconic landmarks and lesser-known
          sights. Most attractions require advanced booking for a timeslot, even
          if they’re free to enter.
        </p>
        <div className="card-body">
          <a href="http://visitlondon.com" className="btn btn-primary">
            Go London
          </a>
        </div>
      </div>
    </>
  );
};

export default TouristInfo;

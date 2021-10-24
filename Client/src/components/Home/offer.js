import React from "react";

function Offer() {
  return (
    <div className="space">
      <div className="container">
        <div>
          <img src="./hire.svg" alt="hire" className="nav-img-offer" />
          <p>you are looking for a talent, find and hire freelancers easily</p>
        </div>
        <div>
          <img src="./find.svg" alt="find" className="nav-img-offer" />
          <p>you want to work, find more clients that are ready to hire you</p>
        </div>
        <div>
          <img
            src="./work from home.svg"
            alt="work from home"
            className="nav-img-offer"
          />
          <p>
            do not like to go to an offices, congrats now you are able to work
            from anywhere
          </p>
        </div>
      </div>
    </div>
  );
}

export default Offer;

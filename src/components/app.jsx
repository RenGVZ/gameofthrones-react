import React, { useState } from 'react';
// import ReactDOM from 'react';
// import { render } from 'node-sass';

function App() {
  return (
    <div>
      <div className="landing">
        <button className="fetch-btn">Get Books</button>
      </div>


      <div className="container">
        <div className="book-box">
          <h2 className="name">
            <span role="img" aria-label="book">📖</span>
            Book name
          </h2>
          <p className="pages">
            <span role="img" aria-label="pages">🔖</span>
            Pages
          </p>
          <p className="released">
            <span role="img" aria-label="released">📅</span>
            Released
          </p>
        </div>
      </div>


    </div>
  );
}

export default App;

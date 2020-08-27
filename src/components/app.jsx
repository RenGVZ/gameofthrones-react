import React, { useState } from 'react';
// import ReactDOM from 'react-dom';
// import { render } from 'node-sass';

function App() {
  const [chars, setChars] = useState(null);
  const apiURL = 'https://www.anapioficeandfire.com/api/characters?page=3';
  function getChar() {
    fetch(apiURL)
      .then(res => res.json())
      .then((data) => {
        console.log(data);
        setChars(data);
      });
  }
  return (
    <div>
      <div className="landing">
        <button onClick={getChar} className="fetch-btn">Fetch Data</button>
      </div>
      <div className="container">
        {chars && chars.map((char, index) => {
          const titles = (char.titles).join(', ');
          return (
          <div className="book-box" key={index}>
            <h2>
              📖{char.name}
            </h2>
            <p>
              🔖{char.gender}
            </p>
            <p>
              📅{titles}
            </p>
          </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;

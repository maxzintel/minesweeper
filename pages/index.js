import React, { useState } from 'react';
import bg from '/assets/sample-background.jpg'

const values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99]

const Home = () => {
  const [selectedValue, setSelectedValue] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [transparentCells, setTransparentCells] = useState([]);

  const handleClick = (value) => {
    setSelectedValue(value);
    setShowPopup(true);
  };

  const handleStake = () => {
    setTransparentCells([...transparentCells, selectedValue]);
    setSelectedValue(null);
    setShowPopup(false);
  }

  const closePopup = () => {
    setSelectedValue(null);
    setShowPopup(false);
  };

  return (
    <div style={{
      backgroundImage: `url(${bg.src})`,
      backgroundSize: 'cover',
      height: '100vh',
      width: '100vw'
    }}>
      <div className="grid">
        {values.map((value, index) => (
          <div 
            key={index} 
            className="cell" 
            onClick={() => handleClick(value)}
            style={{
              backgroundColor: transparentCells.includes(value) ? "transparent" : "#dcdcdc",
            }}
          >{value}
          </div>
        ))}
      </div>
      {showPopup && (
        <div className="popup">
          <p>You clicked on value: {selectedValue}</p>
          <button onClick={closePopup}>Close</button>
          <button onClick={handleStake}>Stake</button>
        </div>
      )}
    </div>
  );
};

export default Home;
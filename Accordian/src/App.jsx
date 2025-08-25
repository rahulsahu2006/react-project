import React, { useState } from 'react'
import Data from './data/data'
import './style.css'

function App() {
  const [mid, setId] = useState(null);
  const [multi, setMulty] = useState(false);
  const [multyarr, setMultyarr] = useState([]);

  function handlebtn(id) {
    if (multi) {
      if (!multyarr.includes(id)) {
        setMultyarr([...multyarr, id]);
      } else {
        setMultyarr(multyarr.filter(item => item !== id));
      }
    } else {
      if (id === mid) {
        setId(null);
      } else {
        setId(id);
      }
    }
  }

  function handleMulti() {
    setMulty(!multi);
    setId(null);
    setMultyarr([]);
  }

  function isOpen(id) {
    return multi ? multyarr.includes(id) : id === mid;
  }

  return (
    <div id="wrapper">
      <div className="container">
        <button className="mode-btn" onClick={handleMulti}>
          {multi ? 'Multi-selection On' : 'Multi-selection Off'}
        </button>
        <div className="accordion">
          {
            Data && Data.length ? Data.map((aData) => {
              return (
                <div key={aData.id} className="accordion-item">
                  <div className="accordion-header">
                    <span className="title">{aData.title}</span>
                    <button 
                      className="toggle-btn" 
                      onClick={() => handlebtn(aData.id)}
                    >
                      {isOpen(aData.id) ? '-' : '+'}
                    </button>
                  </div>
                  {isOpen(aData.id) && (
                    <div className="accordion-content">
                      {aData.content}
                    </div>
                  )}
                </div>
              )
            }) : null
          }
        </div>
      </div>
    </div>
  )
}

export default App

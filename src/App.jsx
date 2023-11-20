import React, { useRef, useEffect, useState } from 'react';
import './App.css'
import { TierItem } from './TierItem';
import { TableRow } from './TableRow';

function App() {
  const startingRows = [
    { name: 'S', color: '#FF7F7F' },
    { name: 'A', color: '#FFBF7F' },
    { name: 'B', color: '#FFDF7F' },
    { name: 'C', color: '#C0F77F' },
    { name: 'D', color: '#7FF77F' },
    { name: 'E', color: '#7FFDFF' },
    { name: 'F', color: '#7FBFFF' },
  ]

const [draggedItem, setDraggedItem] = useState(null);
const [tierListItems, setTierListItems] = useState([]);
const [tableRows, setTableRows] = useState(startingRows);

function dragOverHandler(e) {
  e.preventDefault();
  // todo: put a placeholder element with less alpha in here, check tiermaker for this
}

function dropHandler(e) {
  e.preventDefault();
  if (e.target.classList.contains('tier-data')) {
    e.target.appendChild(draggedItem);
  }
}

function dragStartHandler(e) {
  setDraggedItem(e.target);
}

function readFile(e) {
  const file = e.target.files[0];

  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const fileContent = e.target.result;
      // split into lines
      var lines = fileContent.split('\n');
      // remove trailing whitespace
      lines = lines.map(line => line.trim())
      // remove empty lines
      lines = lines.filter(line => line.length > 0)
      setTierListItems(lines);
    };
    reader.readAsText(file);
  }
}

return (
  <>
    <h1>Tier List From Text File</h1>
    <div style={{ textAlign: 'left', marginBottom: '1rem' }}>
      <input type="file" id="fileInput" onChange={readFile}>
      </input>
    </div>

    <div className="table-body">
      {tableRows.map((row, index) => {
        return <TableRow key={index} name={row.name} color={row.color} dropHandler={dropHandler} dragOverHandler={dragOverHandler} />
      })}

      {/* this is where the unranked items start */}
      <div className="tier-data" onDrop={dropHandler} onDragOver={dragOverHandler}>
        {tierListItems.map((item, index) => {
          return <TierItem key={index} name={item} onDragStart={dragStartHandler} />
        })}
      </div>

    </div>

  </>
)
}

export default App

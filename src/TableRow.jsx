import React, { useRef, useEffect, useState } from 'react';

export function TableRow(props) {
    return (
      <div className="table-row">
        <div className="tier-title-wrapper" style={{ backgroundColor: props.color }}>
          <span className="tier-title-text" >{props.name}</span>
        </div>
        <div className="tier-data" onDrop={props.dropHandler} onDragOver={props.dragOverHandler}>
        </div>
      </div>
    )
  }
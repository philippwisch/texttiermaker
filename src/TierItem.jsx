import React, { useRef, useEffect, useState } from 'react';

export function TierItem(props) {
    const containerRef = useRef(null);
    const textRef = useRef(null);
    const [fontSize, setFontSize] = useState(100);
  
    useEffect(() => {
      const adjustFontSize = () => {
        const container = containerRef.current;
        const text = textRef.current;
  
        const containerWidth = container.offsetWidth;
        const textWidth = text.offsetWidth;
  
        if (textWidth > containerWidth) {
          const newFontSize = (containerWidth / textWidth) * 100;
          setFontSize(newFontSize);
        } else {
          setFontSize(100);
        }
      };
  
      adjustFontSize();
    }, []);
  
    return (
      <div ref={containerRef} className='tier-item' draggable="true" onDragStart={props.onDragStart}>
        <span ref={textRef} style={{ fontSize: `${fontSize}%`, padding: '10px' }}>
          {props.name}
        </span>
      </div>
    );
  }
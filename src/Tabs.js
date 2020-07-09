import React, { useState } from 'react';
import Tab from './Tab';
import './css/Tabs.css';
import Metronome from './Metronome';
import Tuner from './Tuner';
import Visualization from './Visualization';

/**
 * Wraps the Tab component and keeps track of the state 
 */
function Tabs() {
  // remember current active tab, default 0
  const [activeTabId, setActiveTabId] = useState(0);

  const tabItems = [
    {
      title: 'Metronome',
      content: <Metronome />,
    },
    {
      title: 'Tuner',
      content: <Tuner />,
    },
    {
      title: 'Visualization',
      content: <Visualization />,
    },
  ];

  return (
    <div className="wrapper">
      <div className="tabs">
        {tabItems.map(({ title }, index) =>
          <Tab
            title={title}
            onItemClicked={() => setActiveTabId(index)}
            isActive={activeTabId === index}
            key={index}
          />
        )}
      </div>
      <div className="content">
        {tabItems.map(({ content }, index) => {
          return activeTabId === index ? content : ''
        })}
      </div>
    </div>
  )
}

export default Tabs;

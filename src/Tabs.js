import React, { useState } from 'react';
import Tab from './Tab';
import './Tabs.css';
import Metronome from './Metronome';
import Tuner from './Tuner';
import Visualization from './Visualization';



/**
 * Wraps the Tab component and keeps track of the state 
 */
function Tabs() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const tabItems = [
    {
      title: 'Metronome',
      icon: 'tabitem__icon fas metronome',
      content: <Metronome />,
    },
    {
      title: 'Tuner',
      icon: 'tabitem__icon fas fa-users',
      content: <Tuner />,
    },
    {
      title: 'Visualization',
      icon: 'tabitem__icon fas fa-network-wired',
      content: <Visualization />,
    },
  ];


  return (
    <div className="wrapper">
      <div className="tabs">
        {tabItems.map(({ icon, title }, index) =>
          <Tab
            key={title}
            icon={icon}
            title={title}
            onItemClicked={() => setActiveTabIndex(index)}
            isActive={activeTabIndex === index}
          />
        )}
      </div>
      <div className="content">
        {tabItems.map(({ content }, index) => {
          return activeTabIndex === index ? content : ''
        })}
      </div>
    </div>
  )
}
export default Tabs;

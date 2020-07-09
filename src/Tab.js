import React from 'react';

function Tab(props) {
  const {title, onItemClicked, isActive} = props

  return (
    <div className={isActive ? 'tab' : 'tab tabitem--inactive'} onClick={onItemClicked}>
      <p className="tabitem__title">{title}</p>
    </div>
  )
};

export default Tab;

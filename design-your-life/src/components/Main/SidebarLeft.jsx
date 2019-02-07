import React from 'react';
import moment from 'moment';

const SidebarLeft = props => {
  return (
    <div className="sidebar-fixed">
      <div className="sidebar">
        <div className="box recent-reflections">
          <div className="title-date">
            <h5 className="recent-reflection">Recent Reflection</h5>
            <h5 className="date">{props.timestamp}</h5>
          </div>
          <p>{props.recentReflection}</p>
        </div>
        <div className="box">
          <div className="title-date">
            <h5 className="recent-reflection">Weekly Overview</h5>
          </div>
          <p>activity / reflection data here</p>
        </div>
        <hr />
        <div className="box calendar">
          <div className="title-date">
            <h5 className="recent-reflection">Calendar Goes Here</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarLeft;

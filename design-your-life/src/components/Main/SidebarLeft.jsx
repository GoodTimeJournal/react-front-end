import React from "react";

const SidebarLeft = props => {
  return (
    <div className="sidebar-fixed">
      <div className="sidebar">
        <div className="box">
          <h2>Recent Reflection</h2>
          {/* <p>{props.reflectionLog[0].journalEntry}</p> */}
          {/* <p>{props..insights}</p>
          <p>{latestLog.surprises}</p>
          <p>{latestLog.trends}</p>
          <p>`Created on: ${latestLog.timestamp}`</p> */}
        </div>
        <div className="box">
          <h5>overview</h5>
        </div>
        <hr />
        <div className="box calendar">
          <h5>calendar</h5>
        </div>
      </div>
    </div>
  );
};

export default SidebarLeft;

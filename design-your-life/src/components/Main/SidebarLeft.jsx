import React from "react";
import Calendar from "react-calendar";
import ReactChartkick, { LineChart, PieChart } from "react-chartkick";
import Chart from "chart.js";
ReactChartkick.addAdapter(Chart);

const SidebarLeft = props => {
  let data = [
    { name: "Workout", data: { "2017-01-01": 3, "2017-01-02": 4 } },
    { name: "Call parents", data: { "2017-01-01": 5, "2017-01-02": 3 } }
  ];

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
        <div className="box chart">
          <LineChart data={data} />
        </div>
        <hr />
        <div className="box calendar">
          <Calendar />
        </div>
      </div>
    </div>
  );
};

export default SidebarLeft;

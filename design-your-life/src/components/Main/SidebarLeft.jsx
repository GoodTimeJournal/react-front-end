import React from 'react';
import Calendar from 'react-calendar';
import ReactChartkick, { LineChart } from 'react-chartkick';
import Chart from 'chart.js';
import styles from 'styled-components';
ReactChartkick.addAdapter(Chart);

const SidebarLeft = props => {
  let data = [
    {
      name: 'Workout',
      data: {
        '01': 3,
        '02': 4,
        '03': 3,
        '04': 4,
        '05': 4,
        '06': 4,
        '07': 3
      }
    },
    {
      name: 'Journal',
      data: {
        '01': 2,
        '02': 4,
        '03': 2,
        '04': 4,
        '05': 5,
        '06': 4,
        '07': 5
      }
    }
  ];

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
        <div className="box chart">
          <div className="title-date">
            <h5 className="recent-reflection">Recent Activities</h5>
          </div>
          <LineChart data={data} height={170} />
        </div>
        <hr />
        <div className="box calendar">
          <Calendar />
        </div>
        <SmallText>About Us • Support • Privacy • Press</SmallText>
        <SmallText>© 2019 Good Time Journal</SmallText>
      </div>
    </div>
  );
};

export default SidebarLeft;

const SmallText = styles.p`
  color: #8F8F8F;
  font-size: 13px;
  // padding: 0 5px 5px 5px;
`;

import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
ChartJS.register(ArcElement, Tooltip, Legend);

const Piechart = (props) =>{
  
    const data = {
        labels: ['Front End Development', 'Back End Development', 'Full Stack Development'],
        datasets: [
          {
            label: '# of Votes',
            data: {...props.arrayProp},
            backgroundColor: [
              '#bfe6ff',
              '#8cd3ff',
              '#59bfff',
              '#26abff',
              '#0da2ff',
              '#009dff',
              
            ],
            borderColor: [
              '#bfe6ff',
              '#8cd3ff',
              '#59bfff',
              '#26abff',
              '#0da2ff',
              '#009dff',
              
            ],
            borderWidth: 1,
            
          },
        ],
      };
      return (
          <div className="pie_chart">
          {/* <div id='piechart_container'><Pie data={data} /></div>  */}
            <div className='right_piechart'>
            <h2>You are more interested in {props.arrayProp}</h2>
            <div className='right_down_piechart'>
            <Link to="/"  style={{ textDecoration: 'none' }} className='guide_btn2'>Retake the quiz</Link> 
            <Link to="/Guidance"  style={{ textDecoration: 'none' }} className='guide_btn'>Let us guide you further</Link> 
           
            </div>
            </div>
           
          </div>
      )
}
export default Piechart;
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  
  datasets: [
    {
      label: '# of Votes',
      data: [18, 47, 35 ],
      backgroundColor: [
        'rgb(255, 26, 140)',
        'rgb(117, 26, 255)',
        'rgb(179, 204, 204)',
        
      ],
      borderColor:[
        'rgb(255, 26, 140)',
        'rgb(117, 26, 255)',
        'rgb(179, 204, 204)',
        
      ],
     
    },
    
  ],
};
const options = {
  responsive: true,
  maintainAspectRatio: false,
 
  
  animation: {
    animateRotate: true,
    animateScale: true,
  },
  
};



function DonutChart() {
  return( 
  <div className='donut'>
    <label className='title'>Customers</label><br></br>
            <label className='subtitle'>Customers that buy product</label>
    <div className='donut-canvas'><Doughnut data={data} options={options} 
    
     height={'200px'}
     width={'200px'}
    
     />
    </div>
  </div>
  );
}

export default DonutChart;

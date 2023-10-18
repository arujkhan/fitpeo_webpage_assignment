import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
  } from 'chart.js';
  import {Bar} from 'react-chartjs-2';
  ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
  )
  
  
  function BarGraph() {
    const data = {
      labels: [
        'Jan', 'Feb', 'Mar', 'Apr',
        'May', 'Jun', 'Jul', 'Aug',
        'Sep', 'Oct', 'Nov', 'Dec'
      ],
      datasets: [
        {
          label : 'Earnings',
          data: [1,2,3,4,6,2,3,1,4,5,1,3],
          //backgroundColor: '	rgb(220,220,220)',
          backgroundColor: [
            '	rgb(220,220,220)',
            '	rgb(220,220,220)',
            '	rgb(220,220,220)',
            '	rgb(220,220,220)',
            '	rgb(220,220,220)',
            '	rgb(220,220,220)',
            '	rgb(220,220,220)',
            '	rgb(220,220,220)',
             'rgb(51, 102, 255)',
             '	rgb(220,220,220)',
             '	rgb(220,220,220)',],
            borderRadius: 10,
        }
      ]
    };
  
    const options = {
      responsive : true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: false, // Set display to false to hide the chart title
        },
      },
      scales: {
        x: {
          type: 'category', // Specify the scale type as 'category'
          ticks: {
            stepSize: 1, // Customize the step size if needed
            font: {
              size: 15, // Adjust the font size of Y-axis labels
            },
          },
          grid: {
            display: false, // Hide X-axis grid lines
          },
        },
        y: {
          beginAtZero: true,
          display: false,
          grid: {
            display: false, // Hide Y-axis grid lines
          },
        },
      },
      elements:{
        center:{
          text: "65% Total new customers",
          color: '#FF6384',
        }
      }
    };
    return (
      
          <div className='graph'>
            <label className='title'>Overview</label><br></br>
            <label className='subtitle'>Monthly Earning</label>
            <div className='graph-canvas'>
          <Bar
          data = {data}
          options = {options}
          ></Bar>
        </div>
        </div>
    );
  }
  
  export default BarGraph;
  
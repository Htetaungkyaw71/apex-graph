import React from 'react'
import { Line } from 'react-chartjs-2';
import { Chart, registerables} from 'chart.js';

Chart.register(...registerables,
  {
    id: 'uniqueid5',
    afterDraw: function (chart, easing) {
      if (chart.tooltip._active && chart.tooltip._active.length) {
        const activePoint = chart.tooltip._active[0];
        const ctx = chart.ctx;
        const x = activePoint.element.x;
        const topY = chart.scales.y.top;
        const bottomY = chart.scales.y.bottom;
        ctx.save();
        ctx.beginPath();
        ctx.setLineDash([5,7]);
        ctx.moveTo(x, topY);
        ctx.lineTo(x, bottomY);
        ctx.lineWidth = 1;
        ctx.strokeStyle = '#C1C1C1';
        ctx.stroke();
        ctx.restore();
      }
    }
  }
  );



const data = {
  labels: ['', '', '', '', '','','','','','',''],
  datasets: [
    {
    
      data: [400, 1000, 4000, 800, 1500,300,100,1000,4000,5900,2200],
      fill: false, 
      backgroundColor:"#1C75BB",
      borderColor:"#1C75BB",
      borderWidth:2,
      pointRadius:0,
      tension: 0.1,




    },
  ],
};





const options = {
  interaction: {
    intersect: false,
    mode: 'index',
},


  responsive:true,
  maintainAspectRatio : false,
  plugins:
    {
      legend:{display:false},
      tooltip: {
        displayColors:false,
        
        yAlign: 'top',
    
        callbacks: {
            labelTextColor: function(context) {
              return 'black'
          },
        },
    
        borderColor:'#E0DFDF',
        backgroundColor: '#ffffff',
        borderWidth:1
    
    
    }
    },
  
    
  




  scales: {
    y:{
      ticks:{
        display:false,
      },
      grid:{
        display:false,
        drawBorder:false,
     
      }
    },
    x:{
      grid:{
        display:false,
        drawBorder:false
      },
      ticks:{
        display:false,
      }
    }
  },
};



function Graph() {
    return (
      <div className='col-md-6 col-lg-6 col-xl-3'>
            <div className='card p-3 mb-2'>
            <p className='text-muted text-head'>
                    Total Banner Ad Income
                </p>
                  <div className='row' >
                            
                            <div className='col-6'>                   
                                <p className='dollars pt-3'>
                                  $4.25
                                </p>
                               
                            </div>
                            <div className='col-6' style={{height:"80px"}}>
                              <Line data={data} options={options} />
                            </div>
                       
                  </div>
                  <div>
                         <span className="badge rounded-pill bg-info text-dark">
                                            +$1.25
                                        </span>
                          <span className='text-muted text-bottom  ml-5' style={{marginLeft:"10px"}}>Since last week</span>
                    </div>
               
            </div>     
      </div>
         


     
       
    )
       
}

export default Graph
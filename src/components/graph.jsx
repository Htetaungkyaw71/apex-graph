import React, { Component } from "react";
import Chart from "react-apexcharts";

class Graph extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        responsive: [{
          breakpoint: 780,
          options: {
            grid:{
              width:'400px'
            }
          },
      }],

        grid: {
          show: true,
          borderColor: '#90A4AE',
          strokeDashArray: 0,
          position: 'back',
          xaxis: {
              lines: {
                  show: false
              },
          },   
          yaxis: {
              lines: {
                  show: false,
              }
          },  
          row: {
              colors: undefined,
              opacity: 0.5
          },  
          column: {
              colors: undefined,
              opacity: 0.5
          },  
          padding: {
              top: 0,
              right: 0,
              bottom: 0,
              left: 0
          },  
        },
      
        chart: {
          offsetY: -38,
          offsetX: -15,
          id: "basic-bar",
          toolbar: {
            show: false
          },
        },

        xaxis: {
          axisBorder: {
            show: false,
          },
          tooltip: {
            enabled: false
          },
          axisTicks: {
            show: false,        
          },
          categories: [1999,1991, 1998, 1999,1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
          labels: {
            show: false,
          }       
      },
        yaxis: {          
          labels: {
            show: false,
          }
      },
      stroke: {
        show: true,
        curve: 'smooth',
        lineCap: 'butt',
        colors: undefined,
        width: 1.5,
        dashArray: 0,      
      },
      tooltip: {
        enabled: true,
        enabledOnSeries: undefined,
        shared: false,
        followCursor: false,
        intersect: false,
        inverseOrder: false,
        custom: undefined,
        fillSeriesColor: false,
        theme: false,
        style: {
          fontSize: '12px',
          fontFamily: undefined
        },
        onDatasetHover: {
            highlightDataSeries: false,
        },
        x: {
            show: false, 
        },
        y: {
          formatter: undefined,
          title: {
              formatter: (seriesName) => " ",
          },    
        },
        marker: {
            show: false,
        },     
        fixed: {
            enabled: false,
            position: 'topRight',
            offsetX: 0,
            offsetY: 0,
        },
      }
      },
     
    
      series: [
        {
          name: "series-1",
          data: [30, 50, 41, 30, 40, 45, 20, 60, 30, 50, 41]
        }
      ]
    };

  }
  

  render() {
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
                            <Chart
                               options={this.state.options}
                               series={this.state.series}
                               type="line"
                                height="150"
                         
                  />
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
   
    );
  }
}

export default Graph;





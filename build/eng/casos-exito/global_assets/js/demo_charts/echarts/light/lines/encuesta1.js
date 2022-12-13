/* ------------------------------------------------------------------------------
 *
 *  # Echarts - Basic line example
 *
 *  Demo JS code for basic line chart [light theme]
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var EchartsLinesBasicLight = function() {


    //
    // Setup module components
    //

    // Basic line chart
    var _linesBasicLightExample = function() {
        if (typeof echarts == 'undefined') {
            console.warn('Warning - echarts.min.js is not loaded.');
            return;
        }

        // Define element
        var line_basic_element = document.getElementById('encuesta1');


        //
        // Charts configuration
        //

        if (line_basic_element) {

            // Initialize chart
            var line_basic = echarts.init(line_basic_element);


            //
            // Chart config
            //

            // Options
            line_basic.setOption({

                // Define colors
                color: ['#EF5350', '#66BB6A'],

                // Global text styles
                textStyle: {
                    fontFamily: 'Roboto, Arial, Verdana, sans-serif',
                    fontSize: 13
                },

                // Chart animation duration
                animationDuration: 750,

                // Setup grid
                grid: {
                    left: 0,
                    right: 40,
                    top: 35,
                    bottom: 0,
                    containLabel: true
                },

                // Add legend
                legend: {
                    data: ['2019', '2020'],
                    itemHeight: 8,
                    itemGap: 20
                },

                // Add tooltip
                tooltip: {
                    trigger: 'axis',
                    backgroundColor: 'rgba(0,0,0,0.75)',
                    padding: [0, 0],
									
					
							 	
                    textStyle: {
                        fontSize: 12,
                        fontFamily: 'Roboto, sans-serif'
                    }
                },

                // Horizontal axis
                xAxis: [{
                    type: 'category',
                    boundaryGap: false,
					margin:[0, 0],
                    data: [ '.','Calif \n Gral', 'Est \n del Auto', 'Rel  \n Cal/Pre', 'At \n Pers', 'Limp', 'Tiempo \n (E y D)'],
                    axisLabel: {
                        color: '#333',
						 fontSize: 10,
						 	
						
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#999'	
                        }
                    },
                    splitLine: {
                        lineStyle: {
                            color: ['#eee']
                        }
                    }
                }],

                // Vertical axis
                yAxis: [{
                    type: 'value',
					 data: [ '2', '4', '6', '8', '10' ],
                    axisLabel: {
                        
                        color: '#333'
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#999'
                        }
                    },
                    splitLine: {
                        lineStyle: {
                            color: ['#eee']
                        }
                    },
                    splitArea: {
                        show: true,
                        areaStyle: {
                            color: ['rgba(250,250,250,0.1)', 'rgba(0,0,0,0.01)']
                        }
                    }
                }],

                // Add series
                series: [
                    {
                        name: '2019',
                        type: 'line',
                        data: [10, 2, 10, 2, 4, 10,8],
                        smooth: true,
                        symbolSize: 7,
                        markLine: {
                            data: [{
                                type: 'average',
                                name: 'Average'
                            }]
                        },
                        itemStyle: {
                            normal: {
                                borderWidth: 2
                            }
                        }
                    },
                    {
                        name: '2020',
                        type: 'line',
                        data: [6, 4, 4, 8, 10, 8,6],
                        smooth: true,
                        symbolSize: 7,
                        markLine: {
                            data: [{
                                type: 'average',
                                name: 'Average'
                            }]
                        },
                        itemStyle: {
                            normal: {
                                borderWidth: 2
                            }
                        }
                    }
                ]
            });
        }


        //
        // Resize charts
        //

        // Resize function
        var triggerChartResize = function() {
            line_basic_element && line_basic.resize();
        };

        // On sidebar width change
        var sidebarToggle = document.querySelector('.sidebar-control');
        sidebarToggle && sidebarToggle.addEventListener('click', triggerChartResize);

        // On window resize
        var resizeCharts;
        window.addEventListener('resize', function() {
            clearTimeout(resizeCharts);
            resizeCharts = setTimeout(function () {
                triggerChartResize();
            }, 200);
        });
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _linesBasicLightExample();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    EchartsLinesBasicLight.init();
});

/* ------------------------------------------------------------------------------
 *
 *  # Echarts - Stacked line example
 *
 *  Demo JS code for stacked line chart [light theme]
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var EchartsLinesStackedLight = function() {


    //
    // Setup module components
    //

    // Stacked line chart
    var _linesStackedLightExample = function() {
        if (typeof echarts == 'undefined') {
            console.warn('Warning - echarts.min.js is not loaded.');
            return;
        }

        // Define element
        var line_stacked_element = document.getElementById('encuesta2');


        //
        // Charts configuration
        //

        if (line_stacked_element) {

            // Initialize chart
            var line_stacked = echarts.init(line_stacked_element);


            //
            // Chart config
            //

            // Options
            line_stacked.setOption({

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
                    right: 20,
                    top: 35,
                    bottom: 0,
                    containLabel: true
                },

                // Add legend
                legend: {
                    data: ['RAC', 'Media del Mercado'],
                    itemHeight: 8,
                    itemGap: 20
                },

                // Add tooltip
                tooltip: {
                    trigger: 'axis',
                    backgroundColor: 'rgba(0,0,0,0.75)',
                    padding: [10, 15],
                    textStyle: {
                        fontSize: 13,
                        fontFamily: 'Roboto, sans-serif'
                    }
                },

                // Horizontal axis
                xAxis: [{
                    type: 'category',
                    boundaryGap: false,
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
                        name: 'RAC',
                        type: 'line',
                        stack: 'Total',
                        smooth: true,
                        symbolSize: 7,
                        data: [2, 4, 6, 10, 8, 2, 4],
                        itemStyle: {
                            normal: {
                                borderWidth: 2
                            }
                        }
                    },
                    {
                        name: 'Media del Mercado',
                        type: 'line',
                        stack: 'Total',
                        smooth: true,
                        symbolSize: 7,
                        data: [2, 4, 6, 10, 8, 2, 4],
                        itemStyle: {
                            normal: {
                                borderWidth: 2
                            }
                        }
                    },
                    
                   
                   
                ]
            });
        }


        //
        // Resize charts
        //

        // Resize function
        var triggerChartResize = function() {
            line_stacked_element && line_stacked.resize();
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
            _linesStackedLightExample();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    EchartsLinesStackedLight.init();
});

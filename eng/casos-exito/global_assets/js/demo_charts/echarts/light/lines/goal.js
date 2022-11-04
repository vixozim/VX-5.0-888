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
        var line_basic_element = document.getElementById('goal');


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
                    fontSize: 9
                },

                // Chart animation duration
                animationDuration: 750,

                // Setup grid
                grid: {
                    left: 0,
                    right: 40,
                    top: 10,
                    bottom: 0,
                    containLabel: true
                },

                // Add legend
                // legend: {
                    // data: ['2019', '2020'],
                    // itemHeight: 8,
                    // itemGap: 20
                // },

                // Add tooltip
                tooltip: {
                    trigger: 'axis',
                    backgroundColor: 'rgba(0,0,0,0.75)',
                    padding: [5, 15],
                    textStyle: {
                        fontSize: 9,
                        fontFamily: 'Roboto, sans-serif'
                    }
                },

                // Horizontal axis
                xAxis: [{
                    type: 'category',
                    boundaryGap: false,
                    data: ['Jun', 'Jul', 'Ago', 'Sep', 'Oct' ],
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
                    }
                }],

                // Vertical axis
                yAxis: [{
                    type: 'value',
                    axisLabel: {
                        formatter: '{value} %',
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
                        data: [0.06, 0.07, 0.06, 0.05, 0.08],
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

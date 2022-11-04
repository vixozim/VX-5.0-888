/* ------------------------------------------------------------------------------
 *
 *  # Echarts - Infographic pie example
 *
 *  Demo JS code for infographic pie chart [light theme]
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var EchartsPieInfographicedLight = function() {


    //
    // Setup module components
    //

    // Infographic pie chart
    var _scatterPieInfographicLightExample = function() {
        if (typeof echarts == 'undefined') {
            console.warn('Warning - echarts.min.js is not loaded.');
            return;
        }

        // Define element
        var pie_infographic_element = document.getElementById('pie_infographic-mrp');


        //
        // Charts configuration
        //

        if (pie_infographic_element) {

            // Initialize chart
            var pie_infographic = echarts.init(pie_infographic_element);


            //
            // Chart config
            //

            // Common styles
            var dataStyle = {
                normal: {
                    borderWidth: 1,
                    borderColor: '#fff',
                    label: {show: false},
                    labelLine: {show: false}
                }
            };
            var placeHolderStyle = {
                normal: {
                    color: 'transparent',
                    borderWidth: 0
                }
            };

            // Options
            pie_infographic.setOption({

                // Colors
                color: [
                    '#006838','#8dc63f','#b3b3b3',
                ],

                // Global text styles
                textStyle: {
                    fontFamily: 'Roboto, Arial, Verdana, sans-serif',
                    fontSize: 13
                },

                // Add title
                title: {
                    text: 'Ocupación Total',
                    subtext: 'por Categorías',
                    left: 'center',
                    top: '45%',
                    textStyle: {
                        color: '#333',
                        fontSize: 19,
                        fontWeight: 500
                    },
                    subtextStyle: {
                        fontSize: 12
                    }
                },

                // Add tooltip
                tooltip: {
                    trigger: 'item',
                    backgroundColor: 'rgba(0,0,0,0.75)',
                    padding: [10, 15],
                    textStyle: {
                        fontSize: 13,
                        fontFamily: 'Roboto, sans-serif'
                    },
                    formatter: function (params) {
                        if(params.color == "transparent")return;
                        return params.percent + '%' + ' - ' + params.seriesName;
                    }
                },

                // Add legend
                legend: {
                    orient: 'vertical',
                    top: '5%',
                    left: (pie_infographic_element.offsetWidth / 2) + 20,
                    data: ['60% Compacto','30% Sedan','10% SUV'],
                    itemHeight: 8,
                    itemWidth: 8,
                    itemGap: 15
                },

                // Add series
                series: [
                    {
                        name: 'Compacto',
                        type: 'pie',
                        cursor: 'default',
                        clockWise: false,
                        radius: ['75%', '90%'],
                        hoverOffset: 0,
                        itemStyle: dataStyle,
                        data: [
                            {
                                value: 60,
                                name: '60% Compacto'
                            },
                            {
                                value: 40,
                                name: '',
                                itemStyle: placeHolderStyle
                            }
                        ]
                    },

                    {
                        name: 'Sedan',
                        type:'pie',
                        cursor: 'default',
                        clockWise: false,
                        radius: ['60%', '75%'],
                        hoverOffset: 0,
                        itemStyle: dataStyle,
                        data: [
                            {
                                value: 30, 
                                name: '30% Sedan'
                            },
                            {
                                value: 70,
                                name: 'invisible',
                                silent: false,
                                itemStyle: placeHolderStyle
                            }
                        ]
                    },

                    {
                        name: 'SUV',
                        type: 'pie',
                        cursor: 'default',
                        clockWise: false,
                        radius: ['45%', '60%'],
                        hoverOffset: 0,
                        itemStyle: dataStyle,
                        data: [
                            {
                                value: 10, 
                                name: '10% SUV'
                            },
                            {
                                value: 90,
                                name: 'invisible',
                                itemStyle: placeHolderStyle
                            }
                        ]
                    }
                ]
            });
        }


        //
        // Resize charts
        //

        // Resize function
        var triggerChartResize = function() {
            pie_infographic_element && pie_infographic.resize();
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
            _scatterPieInfographicLightExample();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    EchartsPieInfographicedLight.init();
});

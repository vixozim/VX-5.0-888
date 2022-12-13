/* ------------------------------------------------------------------------------
 *
 *  # Echarts - Pie multiple example
 *
 *  Demo JS code for multiple pie charts [light theme]
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var EchartsPieMultipleLight = function() {


    //
    // Setup module components
    //

    // Multiple pie charts
    var _pieMultipleLightExample = function() {
        if (typeof echarts == 'undefined') {
            console.warn('Warning - echarts.min.js is not loaded.');
            return;
        }

        // Define element
        var pie_multiples_element = document.getElementById('pie_multiples');


        //
        // Charts configuration
        //

        if (pie_multiples_element) {

            // Initialize chart
            var pie_multiples = echarts.init(pie_multiples_element);


            //
            // Chart config
            //

            // Top text label
            var labelTop = {
                show: true,
				color: '#333',
				fontWeight: 700,
                position: 'center',
                formatter: '{b}\n',
                fontSize: 15,
                lineHeight: 50,
                rich: {
                    a: {}
                }
            };

            // Background item style
            var backStyle = {
                color: '#eee',
                emphasis: {
                    color: '#eee'
                }
            };

            // Bottom text label
            var labelBottom = {
                color: '#333',
                show: true,
                position: 'center',
                formatter: function (params) {
                    return '\n\n' + (100 - params.value) + '%'
                },
                fontWeight: 500,
                lineHeight: 35,
                rich: {
                    a: {}
                },
                emphasis: {
                    color: '#333'
                }
            };

            // Set inner and outer radius
            var radius = [52, 65];

            // Options
            pie_multiples.setOption({

                // Colors
                color: [
                    '#ef5350','#006838','#8dc63f','#b3b3b3',
                ],

                // Global text styles
                textStyle: {
                    fontFamily: 'Roboto, Arial, Verdana, sans-serif',
                    fontSize: 13,
					
                },

                // Add title
                /* title: {
                    text: 'The Application World',
                    subtext: 'from global web index',
                    left: 'center',
                    textStyle: {
                        fontSize: 17,
                        fontWeight: 500
                    },
                    subtextStyle: {
                        fontSize: 12
                    }
                }, */

                // Add legend
                legend: {
                    bottom: 0,
                    left: 'center',
                    data: ['Total', 'Compacto', 'Sedan', 'SUV'],
                    itemHeight: 8,
                    itemWidth: 8,
                    selectedMode: false
                },

                // Add series
                series: [
                    {
						type: 'pie',
						left: 'center',
                        center: ['50%', '25%'],
                        radius: '50%',
						hoverAnimation: false,
                        data: [
                            {name: 'other', value: 46, label: labelBottom, itemStyle: backStyle},
                            {name: 'Total', value: 54, label: labelTop}
                        ]
						
                    },
                    {
                        type: 'pie',
						left: 'center',
                        center: ['30%', '70%'],
                        radius: radius,
                        hoverAnimation: false,
                        data: [
                            {name: 'other', value: 56, label: labelBottom, itemStyle: backStyle},
                            {name: 'Compacto', value: 44, label: labelTop}
                        ]
                    },
                    {
                        type: 'pie',
						left: 'center',
                        center: ['50%', '70%'],
                        radius: radius,
                        hoverAnimation: false,
                        data: [
                            {name: 'other', value: 65, label: labelBottom, itemStyle: backStyle},
                            {name: 'Sedan', value: 35, label: labelTop}
                        ]
                    },
                    {
                        type: 'pie',
						left: 'center',
                        center: ['70%', '70%'],
                        radius: radius,
                        hoverAnimation: false,
                        data: [
                            {name: 'other', value: 70, label: labelBottom, itemStyle: backStyle},
                            {name: 'SUV', value: 30, label: labelTop}
                        ]
                    },
                    
                   
                ]
            });
        }


        //
        // Resize charts
        //

        // Resize function
        var triggerChartResize = function() {
            pie_multiples_element && pie_multiples.resize();
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
            _pieMultipleLightExample();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    EchartsPieMultipleLight.init();
});

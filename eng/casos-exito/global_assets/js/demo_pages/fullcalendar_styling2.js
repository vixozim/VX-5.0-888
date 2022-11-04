/* ------------------------------------------------------------------------------
 *
 *  # Fullcalendar basic options
 *
 *  Demo JS code for extra_fullcalendar_styling.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var FullCalendarStyling = function() {


    //
    // Setup module components
    //

    // External events
    var _componentFullCalendarStyling = function() {
        if (typeof FullCalendar == 'undefined') {
            console.warn('Warning - Fullcalendar files are not loaded.');
            return;
        }


        // Add events
        // ------------------------------

        // Event colors
        var eventColors = [
            {
                title: 'ALTA',
                start: '2020-07-15',
				end: '2020-08-15',
                color: '#FF1111'
            },
            {
                title: 'BAJA',
                start: '2020-03-07',
                end: '2020-07-14',
                color: '#3611ff'
            },
            
            
            {
                title: 'Verano',
                start: '2020-12-15',
                end: '2021-03-15',
                color: '#ffe211'
            },
            
        ];

       


        // Initialization
        // ------------------------------

        //
        // Event colors
        //

        // Define element
        var calendarEventColorsElement = document.querySelector('.fullcalendar-event-colors');

        // Initialize
        if(calendarEventColorsElement) {
            var calendarEventColorsInit = new FullCalendar.Calendar(calendarEventColorsElement, {
                plugins: [ 'dayGrid', 'interaction' ],
                header: {
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth,dayGridWeek,dayGridDay'
                },
                defaultDate: '2020-07-12',
                editable: true,
                events: eventColors
            }).render();
        }


        //
        // Event background colors
        //

        // Define element
        var calendarEventBgColorsElement = document.querySelector('.fullcalendar-background-colors');

        // Initialize
        if(calendarEventBgColorsElement) {
            var calendarEventBgColorsInit = new FullCalendar.Calendar(calendarEventBgColorsElement, {
                plugins: [ 'dayGrid', 'interaction' ],
                header: {
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth,dayGridWeek,dayGridDay'
                },
                defaultDate: '2014-11-12',
                editable: true,
                events: eventBackgroundColors
            }).render();
        }
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _componentFullCalendarStyling();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    FullCalendarStyling.init();
});

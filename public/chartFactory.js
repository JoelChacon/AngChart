app.factory("chart", function() {
	var chartConfig = {
        options: {
            chart: {
                type: 'column'
            }
        },
        series: [{
            data: [10, 15, 12, 8, 7]
        }],
        xAxis: [{
            categories: ['old bar title', 'old bar title 2 ']
        }],
        title: {
            text: 'Hello'
        },

        loading: false
    }
    return chartConfig;
})
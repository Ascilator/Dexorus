function chart() {
    const DATA_COUNT = 5;
    const NUMBER_CFG = { count: DATA_COUNT, min: 0, max: 100 };

    const data = {
        labels: ['1', '2', '3', '4', '5', '6', '7'],
        datasets: [
            {
                label: null,
                data: ['30', '20', '40', '25', '135', '20', '30',],
                backgroundColor: ['#189974', '#0B8ED2', '#14A9DC', '#76CCAE', '#C8E927', '#9CCF25', '#75BE2A',]
            }
        ]
    };
    const config = {
        type: 'pie',
        data: data,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: null
                },
                title: {
                    display: false,
                }
            }
        },
    };

    const myChart = new Chart(
        document.getElementById('myChart'),
        config
    );
}
chart();
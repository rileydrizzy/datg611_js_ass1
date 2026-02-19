document.addEventListener('DOMContentLoaded', () => {
    const plotButton = document.getElementById('plotButton');

    plotButton.addEventListener('click', async () => {
        try {
            // 1. Fetch the data
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const users = await response.json();


            // Line charts
            const lineChartData = {
                values: [
                    users.map(user => ({
                        x: user.username,
                        y: parseFloat(user.address.geo.lat) // Convert string to decimal
                    }))
                ],
                series: ['Latitude']
            };

            const lineSurface = {
                name: 'User vs Latitude',
                tab: 'Data Visualization'
            };

            const lineOptions = {
                xLabel: 'User (Username)',
                yLabel: 'Latitude Coordinate',
                xType: 'nominal', // Crucial for using strings on the X-axis
                zoomToFit: true   // Tightly bounds the high/low latitude values
            };

            tfvis.render.linechart(lineSurface, lineChartData, lineOptions);

            // Bar charts require a flat array of {index, value} objects
            const barChartData = users.map(user => ({
                index: user.company.name,
                value: user.company.catchPhrase.length
            }));

            const barSurface = {
                name: 'Company vs Catchphrase Length',
                tab: 'Data Visualization'
            };

            const barOptions = {
                xLabel: 'Company Name',
                yLabel: 'Catchphrase Length (Characters)',
                xType: 'nominal'
            };

            tfvis.render.barchart(barSurface, barChartData, barOptions);

        } catch (error) {
            console.error("Error fetching or plotting the data:", error);
        }
    });
});
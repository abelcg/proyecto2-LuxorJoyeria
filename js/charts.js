var ctx = document.getElementById('myChart').getContext('2d');
/* var myChart = new Chart(ctx, {
    type: 'polarArea',
    data: {
        labels: ['Facebook', 'Youtube', 'Amazon'],
        datasets: [{
            label: '# of Votes',
            data: [1200, 1900, 3000],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)'
            ],
        }]
    },
    options: {
       responsive: true,
    }
});
 */
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [
            "Enero",
            "Febrero",
            "Marzo",
            "Abril",
            "Mayo",
            "Junio",
            "Agosto",
            "Septiembre",
            "Octubre",
            "Noviembre",
            "Diciembre",
          ],
        datasets: [{
            label: "Ventas x millón: año 2021",
            data: [90, 50, 40, 61, 45, 35, 45, 75, 55, 77, 95, 85],
            min: 30,
            max: 95,
            fill: true,
            backgroundColor: [  
                'rgba(54, 162, 235, 0.8)',
            ],
            tension: 0.2,
        },
        {
        
            label: "Ventas x millón: año 2020",
            data: [85, 45, 50, 40, 55, 40, 60, 65, 75, 70, 85, 90],
            min: 30,
            max: 95,
            fill: true,
            backgroundColor: [
                'rgba(255, 99, 132, 0.7)',
             ],
             tension: 0.3,
        }],
    },
    interaction: {
        intersect: true,
      },
    options: {
       responsive: true,  
    }
});

/* const data = {
    color: "blue",
    ticksColor: "blue",
    grid: true,
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
    ],
    label: "Data Set One",
    label2: "Data Set Two",
    values: [30, 50, 40, 61, 42, 35, 40],
    values2: [50, 40, 50, 40, 45, 40, 30],
    min: 30,
    max: 65,
  } */
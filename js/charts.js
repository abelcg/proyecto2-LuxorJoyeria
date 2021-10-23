let ctx = document.getElementById("myChart").getContext("2d"); 
let ctx2 = document.getElementById("donutChart").getContext("2d");
let ctx3 = document.getElementById("donutChart2").getContext("2d");
let ctx4 = document.getElementById("donutChart3").getContext("2d");
let ctx5 = document.getElementById("bar-chart").getContext("2d");
let ctx6 = document.getElementById("radar-chart").getContext("2d");


 let myChart2 = new Chart(ctx2, {
  type: "doughnut",
  data: {
    labels: ["First", "Second"],
    datasets: [
      {
        label: "# of Votes",
        data: [86, 14],
        backgroundColor: ["rgb(53, 182, 83, 1)", "rgb(233, 236, 239,0.5)"],
        hoverOffset: 4,
       
      },
    ],
  },
  options: {
    responsive: true,
    radius: '50%',
    cutout: '80%',
    plugins: {
      legend: false,
    },
  },
}); 

 let myChart3 = new Chart(ctx3, {
  type: "doughnut",
  data: {
    labels: ["First", "Second"],
    datasets: [
      {
        label: "# of Votes",
        data: [116.25, 39],
        backgroundColor: ["rgba(102, 16, 242, 1)",  "rgb(233, 236, 239,0.5)"],
        hoverOffset: 4,
       
      },
    ],
  },
  options: {
    responsive: true,
    radius: '50%',
    cutout: '80%',
    plugins: {
      legend: false,
    },
  },
}); 

 let myChart4 = new Chart(ctx4, {
  type: "doughnut",
  data: {
    labels: ["Adwords", "Facebook", "Directo", "Instagram", "Otros"],
    datasets: [
      {
        label: "# of Votes",
        data: [654, 568, 337, 475, 415],
        backgroundColor: ["rgba(102, 16, 242, 1)", "rgb(53, 182, 83, 1)", "rgba(102, 16, 242, 1)", "rgb(220, 53, 69, 1)","rgb(220, 209, 53, 1)"],
        hoverOffset: 4,
       
      },
    ],
  },
  options: {
    responsive: true,
    radius: '50%',
    cutout: '80%',
    plugins: {
      legend: false,
    },
  },
}); 
 
let gradient = ctx.createLinearGradient(298, 200, 302, 0);
gradient.addColorStop(0, 'rgba(203, 16, 16, 0.64)');
gradient.addColorStop(0.69, 'rgba(104, 55, 203, 0.69)');
gradient.addColorStop(0.8, 'rgba(34, 6, 90, 0.69)');
ctx.fillStyle = gradient;
ctx.fillRect(10, 10, 200, 100);

let gradiente = ctx.createLinearGradient(298, 200, 302, 0);
  
gradiente.addColorStop(0, 'rgba(16, 16, 203, 0.64)');
gradiente.addColorStop(0.99, 'rgba(238, 130, 238, 0.69)');

ctx.fillStyle = gradiente;
ctx.fillRect(0, 0, 600, 200);

 let myChart = new Chart(ctx, {
  type: "line",
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
    datasets: [
      {
        label: "Ventas x millón: año 2021",
        data: [90, 50, 40, 61, 45, 35, 45, 75, 55, 77, 95, 85],
        min: 30,
        max: 95,
        fill: true,
        //backgroundColor: ["rgba(54, 162, 235, 0.8)"],
        backgroundColor: gradiente,
        tension: 0.2,
      },
      {
        label: "Ventas x millón: año 2020",
        data: [85, 45, 50, 40, 55, 40, 60, 65, 75, 70, 85, 90],
        min: 30,
        max: 95,
        fill: true,
        backgroundColor: gradient,
        tension: 0.3,
      },
    ],
  },
  interaction: {
    intersect: true,
  },
  options: {
    responsive: true,
    plugins: {
      legend: false,
    },
    scales: {
        y: {
            grid: {
                display: false,
                color: 'blue',
                tickColor: 'blue',
            }
        },
        x: {
            grid: {display: false,}
        }

    }
  },
}); 
 
let myChart5 = new Chart(ctx5, {
    type: "bar",
    data: {
      labels: ["Adwords", "Facebook", "Directo", "Instagram", "Otros"],
      datasets: [
        {
          label: "cantidad de usuarios",
          data: [654, 568, 337, 475, 415],
          backgroundColor: [gradiente, gradient, gradiente, gradient,gradiente],
          barPercentage: 1.5,
          barThickness: 36,
          maxBarThickness: 38,
          minBarLength: 4,
         
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: false,
      },
      scales: {
          y: {
              grid: {
                  display: false,
                  color: 'blue',
                  tickColor: 'blue',
              }
          },
          x: {
              grid: {display: false,}
          }
  
      }
    },
  }); 

  const data = {
    labels: [
      'Collares',
      'Anillos',
      'Pulseras',
      'Aros',
      'Cadenas',
      'Dijes',
      'Relojes'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [65, 59, 90, 81, 56, 55, 40],
      fill: true,
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgb(255, 99, 132)',
      pointBackgroundColor: 'rgb(255, 99, 132)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(255, 99, 132)'
    }, {
      label: 'My Second Dataset',
      data: [28, 48, 40, 19, 96, 27, 100],
      fill: true,
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgb(54, 162, 235)',
      pointBackgroundColor: 'rgb(54, 162, 235)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(54, 162, 235)'
    }]
  };

  let myChart6 = new Chart(ctx6, {
    type: 'radar',
    data: data,
    options: {
      responsive: true,
      plugins: {
        legend: false,
      },
      elements: {
        line: {
          borderWidth: 3
        }
      }
    },
  });
new Chart(document.getElementById("countries"), {
    type: 'pie',
    data: {
      labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
      datasets: [
        {
          label: "Population (millions)",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
          data: [2478,5267,734,784,433]
        }
      ]
    },
    options: {
      title: {
        display: false,
        text: 'Predicted world population (millions) in 2050'
      },
      legend: {
        display: false
      },
    }
});

            // // pie chart data
            // var pieData = [
            //     {
            //         value: 20,
            //         color:"#878BB6"
            //     },
            //     {
            //         value : 40,
            //         color : "#4ACAB4"
            //     },
            //     {
            //         value : 10,
            //         color : "#FF8153"
            //     },
            //     {
            //         value : 30,
            //         color : "#FFEA88"
            //     }
            // ];
            // // pie chart options
            // var pieOptions = {
            //      segmentShowStroke : false,
            //      animateScale : true
            // }
            // // get pie chart canvas
            // var countries= document.getElementById("countries").getContext("2d");
            // // draw pie chart
            // new Chart(countries).Pie(pieData, pieOptions);

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawDonutChart3);

 function drawDonutChart3() {

        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Site');
        data.addColumn('number', 'Time (hours)');
        data.addRows([
          ['www.espn.com', 3],
          ['www.netflix.com', 1],
          ['www.piazza.com', .5],
          ['www.stackoverflow.com', 5],
        ]);

        // Set chart options
        var options = {'title':'Time Spent on Sites (Percentage)',
                       'width':700,
                       'height':400,
                      pieHole: 0.4,
                      backgroundColor: '#EEEEEE'

                    };

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.PieChart(document.getElementById('pie3'));
        chart.draw(data, options);
      }
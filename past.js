google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawDonutChart2);
 function drawDonutChart2() {

        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Site');
        data.addColumn('number', 'Time (hours)');
        data.addRows([
          ['www.webassign.com', 2],
          ['www.facebook.com', 1],
          ['www.instagram.com', 2],
          ['www.youtube.com', 9],
        ]);

        // Set chart options
        var options = {'title':'Time Spent on Sites (Percentage)',
                       'width':700,
                       'height':400,
                   		pieHole: 0.4,
                   		backgroundColor: '#EEEEEE'

                   	};

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.PieChart(document.getElementById('pie2'));
        chart.draw(data, options);
      }
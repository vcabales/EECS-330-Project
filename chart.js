//google api calls

      // Load the Visualization API and the corechart package.
      google.charts.load('current', {'packages':['corechart']});

      // Set a callback to run when the Google Visualization API is loaded.
      google.charts.setOnLoadCallback(drawDonutChart);
      //google.charts.setOnLoadCallback(drawBarChart);
      //google.charts.setOnLoadCallback(drawHistogramChart);


      // Callback that creates and populates a data table,
      // instantiates the pie chart, passes in the data and
      // draws it.
      function drawDonutChart() {

        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Site');
        data.addColumn('number', 'Time (hours)');
        data.addRows([
          ['www.webassign.com', 2],
          ['www.facebook.com', 2],
          ['www.reddit.com', 4],
          ['www.gmail.com', 1],
          ['www.instagram.com', 2],
          ['www.youtube.com', 1],
        ]);

        // Set chart options
        var options = {'title':'Time Spent on Sites (Percentage)',
                       'width':700,
                       'height':400,
                   		pieHole: 0.4,
                   		backgroundColor: '#EEEEEE'

                   	};

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.PieChart(document.getElementById('pie'));
        chart.draw(data, options);
      }

/*

      function drawBarChart() {
      	var data = google.visualization.arrayToDataTable([
          ['Site', { role: 'annotation' } ,'Time Spent (Percent)'],
          ['www.webassign.com', "Webassign" ,16.67 ],
          ['www.facebook.com', 'Facebook' ,16.67 ],
          ['www.reddit.com', 'Reddit' ,33.33 ],
          ['www.gmail.com', 'Gmail' ,8.33],
          ['www.instagram.com', 'Instagram' ,16.67],
          ['www.youtube.com', 'Youtube' ,8.33]
          ]);

      	var options = {
          title: 'Percentage Time Spent on Input Sites',
          bar: {groupWidth: "95%"},
          legend: { position: 'none' },
          'width':700,
          'height':400,
          hAxis:{
			  title: 'Time Spent (Percentage)',
			  titleTextStyle: {
			    color: 'black'
			  }
			},
		  backgroundColor: '#EEEEEE',

		  vAxis:{
			  title: 'Site',
			  titleTextStyle: {
			    color: 'black'
			  }
			}
        };

        var chart = new google.visualization.BarChart(document.getElementById('bar'));
        chart.draw(data, options);
      }
      */

      /*
      function drawHistogramChart() {
      	var data = google.visualization.arrayToDataTable([
          ['Site', 'Time Spent (Percent)'],
          ['www.webassign.com', 16.67],
          ['www.facebook.com', 16.67],
          ['www.reddit.com', 33.33],
          ['www.gmail.com', 8.33],
          ['www.instagram.com', 16.67],
          ['www.youtube.com', 8.33]
          ]);
      	var options = {
          title: 'Percentage Time Spent on Input Sites',
          legend: { position: 'none' },
          'width':700,
          'height':400,
          backgroundColor: '#EEEEEE',
          hAxis:{
			  title: 'Percentage Time Spent',
			  titleTextStyle: {
			    color: 'black'
			  }
			},
		  vAxis:{
			  title: 'Frequency',
			  titleTextStyle: {
			    color: 'black'
			  }
			},
	    histogram: {
	      minValue: 0,
	      maxValue: 40
    }
        };

        var chart = new google.visualization.Histogram(document.getElementById('histogram'));
        chart.draw(data, options);
      }
      */
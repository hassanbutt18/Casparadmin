google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawLineChart);
// google.charts.setOnLoadCallback(drawColumnChart);

function drawLineChart() {
  var data = google.visualization.arrayToDataTable([
    ["Year", "Total Users", "Active Users"],
    ["2004", 1000, 400],
    ["2005", 1170, 460],
    ["2006", 660, 1120],
    ["2007", 1030, 540],
  ]);

  var options = {
    colors: ["#83BA42", "#05ACBC"],
    hAxis: {
      gridlines: { color: "#ECF0F4" },
    },
    vAxis: {
      gridlines: { color: "#ECF0F4" },
    },
    width: "100%",
    height: "100%",
    chartArea: {
      width: "80%",
      height: "80%",
    },
    curveType: "function",
    // legend: { position: "top" },
    legend: "none",
    series: {
      0: { pointShape: "circle", pointSize: 10 },
      1: { pointShape: "circle", pointSize: 10 },
    },
  };

  var chart = new google.visualization.LineChart(
    document.getElementById("chart1")
  );

  chart.draw(data, options);

  var points = data.getNumberOfRows();
  var max = 0;
  var min = Number.MAX_VALUE;
  var maxIndex, minIndex;

  for (var i = 0; i < points; i++) {
    var value = data.getValue(i, 1);
    if (value > max) {
      max = value;
      maxIndex = i;
    }
    if (value < min) {
      min = value;
      minIndex = i;
    }
  }

  console.log(max, maxIndex);
  console.log(min, minIndex);
}


// function drawColumnChart() {
//   var data = google.visualization.arrayToDataTable([
//     ["Months", "Total Users", "Active Users", "Active Capsules"],
//     ["January", 1000, 400, 200],
//     ["February", 1170, 460, 250],
//     ["March", 660, 1120, 300],
//     ["April", 1030, 540, 350],
// 	["May", 330, 1540, 450],
// 	["June", 1130, 840, 750],
//   ]);

//   var options = {
//     // chart: {
//     //   title: "Company Performance",
//     //   subtitle: "Sales, Expenses, and Profit: 2014-2017",
//     // },
// 	width: "100%",
//     height: "100%",
// 	legend: 'none',
//     chartArea: {
//       width: "80%",
//       height: "80%",
//     },
//     bars: "vertical",
//     hAxis: {
// 		gridlines: { color: "#ECF0F4" },
// 	},
// 	vAxis: {
// 		gridlines: { color: "#ECF0F4" },
// 	},
//     height: 400,
//     colors: ["#05ACBC", "#83BA42", "#8A8CA9"],
//   };

//   var chart = new google.visualization.ColumnChart(document.getElementById("chart2"));

//   chart.draw(data, options);

//   var btns = document.getElementById("btn-group");

// //   btns.onclick = function (e) {
// //     if (e.target.tagName === "BUTTON") {
// //       options.vAxis.format = e.target.id === "none" ? "" : e.target.id;
// //       chart.draw(data, google.charts.Bar.convertOptions(options));
// //     }
// //   };
// }

// var chart1 = new CanvasJS.Chart("chart1", {
// 	animationEnabled: true,
// 	// title:{
// 	// 	text: "Music Album Sales by Year"
// 	// },
// 	axisY: {
// 		// title: "Units Sold",
// 		valueFormatString: "#0,,.",
// 		suffix: "mn",
// 		stripLines: [{
// 			value: 3366500,
// 			label: "Average"
// 		}]
// 	},
// 	data: [{
// 		yValueFormatString: "#,### Units",
// 		xValueFormatString: "YYYY",
// 		type: "spline",
// 		dataPoints: [
// 			{x: new Date(2002, 0), y: 2506000},
// 			{x: new Date(2003, 0), y: 2798000},
// 			{x: new Date(2004, 0), y: 3386000},
// 			{x: new Date(2005, 0), y: 6944000},
// 			{x: new Date(2006, 0), y: 6026000},
// 			{x: new Date(2007, 0), y: 2394000},
// 			{x: new Date(2008, 0), y: 1872000},
// 			{x: new Date(2009, 0), y: 2140000},
// 			{x: new Date(2010, 0), y: 7289000},
// 			{x: new Date(2011, 0), y: 4830000},
// 			{x: new Date(2012, 0), y: 2009000},
// 			{x: new Date(2013, 0), y: 2840000},
// 			{x: new Date(2014, 0), y: 2396000},
// 			{x: new Date(2015, 0), y: 1613000},
// 			{x: new Date(2016, 0), y: 2821000},
// 			{x: new Date(2017, 0), y: 2000000}
// 		]
// 	}]
// });
// chart1.render();

var chart2 = new CanvasJS.Chart("chart2", {
  animationEnabled: true,
  // title:{
  // 	text: "Olympic Medals of all Times (till 2016 Olympics)"
  // },
  // axisX: {
  // 	title: "Medals",
  // 	includeZero: true
  // },
  data: [
    {
      type: "column",
      // showInLegend: true,
      // name: "Gold",
      color: "#05ACBC",
      dataPoints: [
        { label: "January", y: 236 },
        { label: "February", y: 243 },
        { label: "March", y: 273 },
        { label: "April", y: 269 },
        { label: "May", y: 196 },
        { label: "June", y: 1118 },
      ],
    },
    {
      type: "column",
      // showInLegend: true,
      // name: "Silver",
      color: "#83BA42",
      dataPoints: [
        { label: "January", y: 186 },
        { label: "February", y: 272 },
        { label: "March", y: 299 },
        { label: "April", y: 270 },
        { label: "May", y: 165 },
        { label: "June", y: 896 },
      ],
    },
    {
      type: "column",
      // showInLegend: true,
      // name: "Bronze",
      color: "#8A8CA9",
      dataPoints: [
        { label: "January", y: 172 },
        { label: "February", y: 309 },
        { label: "March", y: 302 },
        { label: "April", y: 285 },
        { label: "May", y: 188 },
        { label: "June", y: 788 },
      ],
    },
  ],
});
chart2.render();

// function toolTipFormatter(e) {
// 	var str = "";
// 	var total = 0 ;
// 	var str3;
// 	var str2 ;
// 	for (var i = 0; i < e.entries.length; i++){
// 		var str1 = "<span style= \"color:"+e.entries[i].dataSeries.color + "\">" + e.entries[i].dataSeries.name + "</span>: <strong>"+  e.entries[i].dataPoint.y + "</strong> <br/>" ;
// 		total = e.entries[i].dataPoint.y + total;
// 		str = str.concat(str1);
// 	}
// 	str2 = "<strong>" + e.entries[0].dataPoint.label + "</strong> <br/>";
// 	str3 = "<span style = \"color:Tomato\">Total: </span><strong>" + total + "</strong><br/>";
// 	return (str2.concat(str)).concat(str3);
// }

// function toggleDataSeries(e) {
// 	if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
// 		e.dataSeries.visible = false;
// 	}
// 	else {
// 		e.dataSeries.visible = true;
// 	}
// 	chart2.render();
// }

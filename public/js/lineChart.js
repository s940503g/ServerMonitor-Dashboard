var url = 'http://52.68.171.13:8000/api/52-32-63-252/2016-10-06'; 
var url2 = 'http://52.68.171.13:8000/api/54-240-16-0/2016-10-06';

var margin = {top: 20, right: 20, bottom: 30, left: 50},
    width = 1000 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

var formatDate = d3.time.format("%H:%M:%S");
var line = d3.svg.line()
	.x(function(d) { 
		return x(formatDate.parse(d.time)); 
	})
	.y(function(d) { 
		return y(d.ping); 
	});
var x = d3.time.scale()
    .range([0, width]);

var y = d3.scale.linear()
    .range([height, 0]);

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left");

var area = d3.svg.area()
	.x(function(d) { return x(formatDate.parse(d.time)); })
	.y0(height)
    	.y1(function(d) { return y(d.ping); });

var svg = d3.select("body").append("svg")
	.attr("width", width + margin.left + margin.right)
	.attr("height", height + margin.top + margin.bottom)
  	.append("g")
    	.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

y.domain([0,400]);
x.domain([formatDate.parse("19:00:00"), formatDate.parse("21:00:00")]);

svg.append("g")
	.attr("class", "x axis")
	.attr("transform", "translate(0," + height + ")")
	.call(xAxis);

svg.append("g")
	.attr("class", "y axis")
	.call(yAxis)
	.append("text")
	.attr("transform", "rotate(-90)")
	.attr("y", 6)
	.attr("dy", ".71em")
	.style("text-anchor", "end")
	.text("ping (ms)");

addServer(url, "cyan");
addServer(url2, "red");

function addServer(url, color) {
	d3.json(url, function(data) {

		svg.append("path")
			.datum(data)
			.attr("class", "area")
			.attr("d", area)
			.attr("fill", color);

		svg.append("path")
			.datum(data)
			.attr("class", "line")
			.attr("d", line)
			.attr("stroke", color)
			.attr("fill", "none");
	});
}

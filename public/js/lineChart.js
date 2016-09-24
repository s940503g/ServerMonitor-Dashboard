
n = {top: 20, right: 20, bottom: 30, left: 50},
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

d3.json(url, function(data) {

        x.domain(d3.extent(data, function(d) { return formatDate.parse(d.time); }));
        y.domain(d3.extent(data, function(d) { return d.ping; }));


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

        svg.append("path")
                .datum(data)
                .attr("class", "area")
                .attr("d", area);

        svg.append("path")
                .datum(data)
                .attr("class", "line")
                .attr("d", line);


});
gar url = 'http://52.68.171.13:8000/api/52-32-63-252/2016-09-24';

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

d3.json(url, function(data) {

	x.domain(d3.extent(data, function(d) { return formatDate.parse(d.time); }));
	y.domain(d3.extent(data, function(d) { return d.ping; }));


	svg.append("g")
		.attr("class", "x axis")
		.attr("transform", "translate(0," + height + ")")
		.call(xAxis);

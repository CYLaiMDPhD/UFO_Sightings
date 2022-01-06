// Module 11 Exercises - js data
// The index.html file will call and display the data in this js file

// import data from data.js file in same folder
const tableData = data;

// Reference HTML table using d3
// d3.select tells js to look for "tbody" tags in the html file
var tbody = d3.select("tbody");

// Make function to build table from data.js file
function buildTable(data){
	tbody.html("");
	data.forEach((dataRow) => {
		let row = tbody.append("tr");
		Object.values(dataRow).forEach((val) => {
			let cell = row.append("td");
			cell.text(val);
		});
	});

};


// Make function to respond to user clicks (for filtering data)
function handleClick(){
	let date = d3.select("#datetime").property("value");
	let filteredData = tableData;
	if (date){
		filteredData = filteredData.filter(row => row.datetime === date);
	};
	buildTable(filteredData);
};


// Listen for clicks
d3.selectAll("#filter-btn").on("click",handleClick);


// Build final table
buildTable(tableData);


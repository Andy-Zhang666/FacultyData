var getImg = function(employee)
{return employee.photo;}

d3.select("body")
.selectAll("img")
.data(employees)
.enter()
.append("img")
.attr("src",getImg);
var getFirstName = function(employee)
{return employee.firstName;}

var getLastName = function(employee)
{return employee.lastName;}

var getFullName = function(employee)
{return getFirstName(employee)+" "+getLastName(employee);}

d3.select("body")
.append("ol")
.selectAll("li")
.data(employees)
.enter()
.append("li")
.text(getFullName);
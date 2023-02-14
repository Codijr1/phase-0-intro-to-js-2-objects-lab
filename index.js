const employee = {
    name:"Sam",
    streetAddress:"11 Broadway",
};

function updateEmployeeWithKeyAndValue(employee, name, streetAddress){
    return {...employee, streetAddress}
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee,name,streetAddress){
    employee.streetAddress = "12 Broadway";
    return employee;
}

function deleteFromEmployeeByKey(newEmployee, employee){
    return {...employee, newEmployee};
}

function destructivelyDeleteFromEmployeeByKey(employee,newEmployee,name){
    delete employee.name
    return newEmployee;
} 
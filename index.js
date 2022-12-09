/* Your Code Here */
function  createEmployeeRecord(row){
    return {
        firstName: row[0],
        familyName: row[1],
        title: row[2],
        payPerHour: row[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}
function createEmployeeRecords (array){
    let twoRows = array.map((record)=>{
        return createEmployeeRecord(record)
    })
    return twoRows
    }
   
 function createTimeInEvent(employee,dateStamp ){
    let hour = parseInt(dateStamp.slice(-4))
    let date = dateStamp.slice(0, 10)
    let type= "TimeIn"
    employee.timeInEvents.push({
        date:date,
        type:type,
        hour:hour
    })
    //YYYY-MM-DD HHMM
   return employee  
 }
 

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}


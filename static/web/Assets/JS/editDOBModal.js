// let currDate = document.getElementById('current-date');
// let currMonth = document.getElementById('current-month');
// let currYear = document.getElementById('current-year');
// let dateofbirth = document.querySelector('#editUser #dob');
// var mycalendar = jsCalendar.new("#custom-calendar", dateofbirth.value, {
//   monthFormat : "month YYYY",
// });


function editDOBForm(event) {
    event.preventDefault();
    let currDate = document.querySelector("#edit-dob #current-date");
    let currMonth = document.querySelector("#edit-dob #current-month");
    let currYear = document.querySelector("#edit-dob #current-year");
    let dob = document.querySelector("#editUser #dob");
    
    dob.value = `${currDate.innerText}-${currMonth.innerText}-${currYear.innerText}`;
    document.querySelector('#closeEditDOBModal').click();
}
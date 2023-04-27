let interestCheckboxes = document.querySelectorAll(".interest-checkbox-group");
let modalInterestField = document.querySelector('#edit-interest .current-interest');
let maxActiveInterestCheckboxes = 3;
let interestCheckboxCount = 0;

// interestCheckboxes.forEach((checkbox) => {
//   checkbox.addEventListener("click", () => {
//     if (checkbox.checked) {
//         interestCheckboxCount++;
//     } else {
//         interestCheckboxCount--;
//     }

//     if (interestCheckboxCount > maxActiveInterestCheckboxes) {
//       checkbox.checked = false;
//       interestCheckboxCount--;
//     }
//   });
// });

interestCheckboxes.forEach((checkbox) => {
  checkbox.addEventListener('change', () => {
    let selectedValues = [];
    let checkedCount = 0;

    interestCheckboxes.forEach((checkbox) => {
      if (checkbox.checked) {
        selectedValues.push(checkbox.name);
        interestList = selectedValues;
        checkedCount++;
      }
    });

    if (checkedCount > maxActiveInterestCheckboxes) {
      selectedValues = selectedValues.filter(e => e != checkbox.name);
      interestList = selectedValues;
      checkbox.checked = false;
      return;
    }
    
    modalInterestField.innerText = selectedValues.join(', ');
  });
});


function editInterestForm(event) {
  event.preventDefault();
  let form = event.currentTarget;
  let formData = new FormData(form);
  let data = formDataToObject(formData);
  document.querySelector('#editUser #interest').value = modalInterestField.innerText;
  document.querySelector('#closeEditInterestModal').click();
}
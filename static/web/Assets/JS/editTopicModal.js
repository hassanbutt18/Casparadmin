let topicCheckboxes = document.querySelectorAll(".topic-checkbox-group");
let modalTopicField = document.querySelector('#edit-topic .current-topic');
let maxActiveTopicCheckboxes = 3;
let topicCheckboxCount = 0;


topicCheckboxes.forEach((checkbox) => {
  checkbox.addEventListener('change', () => {
    let selectedTopic = [];
    let checkedCount = 0;
    
    topicCheckboxes.forEach((checkbox) => {
      if (checkbox.checked) {
        selectedTopic.push(checkbox.name);
        topicList = selectedTopic;
        checkedCount++;
      }
    });
    
    if (checkedCount > maxActiveTopicCheckboxes) {
      selectedTopic = selectedTopic.filter(e => e != checkbox.name);
      topicList = selectedTopic;
      checkbox.checked = false;
      return;
    }
    
    modalTopicField.innerText = selectedTopic.join(', ');
  });
});


function editTopicForm(event) {
  event.preventDefault();
  let form = event.currentTarget;
  let formData = new FormData(form);
  let data = formDataToObject(formData);
  document.querySelector('#editUser #topic').value = modalTopicField.innerText;
  document.querySelector('#closeEditTopicModal').click();
}
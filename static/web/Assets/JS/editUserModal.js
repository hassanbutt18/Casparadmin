// Handling Modals


// Handling Name Modal

function openNameModal(event) {
  let name = document.querySelector("#editUser #name");
  let modalNameField = document.querySelector('#edit-name input[name="name"]');
  modalNameField.value = name.value;
  document.querySelector(".edit-name").click();
}



// Handling Username Modal

function openUsernameModal(event) {
  let username = document.querySelector("#editUser #username");
  let modalUsernameField = document.querySelector(
    '#edit-username input[name="username"]'
  );
  modalUsernameField.value = username.value;
  document.querySelector(".edit-username").click();
}


// Handling Email Modal

function openEmailModal(event) {
  let email = document.querySelector("#editUser #email");
  let modalEmailField = document.querySelector(
    '#edit-email input[name="email"]'
  );
  modalEmailField.value = email.value;
  document.querySelector(".edit-email").click();
}



// Handling Gender Modal

function openGenderModal(event) {
  let gender = document.querySelector("#editUser #gender");
  let modalGenderField = document.querySelector(
    "#edit-gender .show-selected-gender"
  );
  let radioBtn = document.querySelector(
    `#edit-gender input[name="select_gender"][value="${gender.value}"]`
  );
  radioBtn.checked = true;
  modalGenderField.innerText = gender.value;
  document.querySelector(".edit-gender").click();
}



// Handling DOB Modal

let currDate = document.querySelector("#edit-dob #current-date");
let currMonth = document.querySelector("#edit-dob #current-month");
let currYear = document.querySelector("#edit-dob #current-year");

function openDOBModal(event) {
  let dob = document.querySelector("#editUser #dob");
  let [date, month, year] = dob.value.split("-");
  let currDate = document.querySelector("#edit-dob #current-date");
  let currMonth = document.querySelector("#edit-dob #current-month");
  let currYear = document.querySelector("#edit-dob #current-year");

  currDate.innerText = date;
  currMonth.innerText = month;
  currYear.innerText = year;
  var mycalendar = jsCalendar.new("#custom-calendar", dob.value, {
    monthFormat: "month YYYY",
  });
  let lastSelectedDate = null;

  mycalendar.onDateClick(function (event, date) {
    mycalendar.clearselect();
    let currentHighlightedDate =
      document.getElementsByClassName("jsCalendar-current");
    if (currentHighlightedDate) {
      for (var i = 0; i < currentHighlightedDate.length; i++) {
        currentHighlightedDate[i].classList.remove("jsCalendar-current");
      }
    }
    mycalendar.select(date);
    selectNewDate(date);
  });

  mycalendar.onMonthChange(function(event, date) {
    mycalendar.clearselect();
    let currentHighlightedDate = document.getElementsByClassName("jsCalendar-current");
    if(currentHighlightedDate) {
      for (var i = 0; i < currentHighlightedDate.length; i++) {
            currentHighlightedDate[i].classList.remove("jsCalendar-current");
      }
    }
    if(lastSelectedDate) {
      mycalendar.select(lastSelectedDate);
      let currentSelectedDate = document.querySelector(".jsCalendar-selected");
      if(currentSelectedDate) {
        selectNewDate(lastSelectedDate);
      }
    }
    else {
      let currentHighlightedDate = document.getElementsByClassName("jsCalendar-current");
      if(currentHighlightedDate) {
        for (var i = 0; i < currentHighlightedDate.length; i++) {
              currentHighlightedDate[i].classList.remove("jsCalendar-current");
        }
      }
    }
  });

  document.querySelector(".edit-dob").click();
}

function selectNewDate(date) {
  let currentHighlightedDate = document.getElementsByClassName("jsCalendar-current");
  if(currentHighlightedDate) {
    for (var i = 0; i < currentHighlightedDate.length; i++) {
          currentHighlightedDate[i].classList.remove("jsCalendar-current");
    }
  }
  let currentSelectedDate = document.querySelector(".jsCalendar-selected");
  currentSelectedDate.classList.remove("jsCalendar-selected");
  currentSelectedDate.classList.add("jsCalendar-current");
  lastSelectedDate = date;
  currDate.innerText = date.getDate();
  currMonth.innerText = date.getMonth() + 1;
  currYear.innerText = date.getFullYear();
}



// Handling Country Modal

function openCountryModal(event) {
  let country = document.querySelector("#editUser #country");
  let modalCountryField = document.querySelector(
    '#edit-country select[name="country"]'
  );
  let selectedIndex = -1;
  for (let i = 0; i < modalCountryField.options.length; i++) {
    if (modalCountryField.options[i].value == country.value) {
      selectedIndex = i;
      break;
    }
  }
  // select the option with the found index
  if (selectedIndex !== -1) {
    modalCountryField.selectedIndex = selectedIndex;
  }
  document.querySelector(".edit-country").click();
}



// Handling Interest Modal

let interestList = ["Books", "Sports", "Music"];

function openInterestModal(event) {
  let modalInterestField = document.querySelector(
    "#edit-interest .current-interest"
  );

  interestList.forEach((interest) => {
    let interestCheckbox = document.querySelector(
      `#edit-interest input[name="${interest}"]`
    );
    if (interestCheckbox) {
      interestCheckbox.checked = true;
    }
  });
  modalInterestField.innerText = interestList.join(", ");
  document.querySelector(".edit-interest").click();
}



// Handling Topic Modal

let topicList = ["Economics", "IT", "Art"];

function openTopicModal(event) {
  let modalTopicField = document.querySelector("#edit-topic .current-topic");
  topicList.forEach((topic) => {
    let topicCheckbox = document.querySelector(
      `#edit-topic input[name="${topic}"]`
    );
    if (topicCheckbox) {
      topicCheckbox.checked = true;
    }
  });
  modalTopicField.innerText = topicList.join(", ");
  document.querySelector(".edit-topic").click();
}



// Handling Language Modal

function openLanguageModal(event) {
  let language = document.querySelector("#editUser #language");
  let modalLanguageField = document.querySelector(
    '#edit-language select[name="language"]'
  );
  let selectedIndex = -1;
  for (let i = 0; i < modalLanguageField.options.length; i++) {
    if (modalLanguageField.options[i].value == language.value) {
      selectedIndex = i;
      break;
    }
  }
  // select the option with the found index
  if (selectedIndex !== -1) {
    modalLanguageField.selectedIndex = selectedIndex;
  }
  document.querySelector(".edit-language").click();
}



// Handling App Language Modal

function openAppLanguageModal(event) {
  let appLanguage = document.querySelector("#editUser #app-language");
  let modalAppLanguageField = document.querySelector(
    '#edit-app-language select[name="app_language"]'
  );
  let selectedIndex = -1;
  for (let i = 0; i < modalAppLanguageField.options.length; i++) {
    if (modalAppLanguageField.options[i].value == appLanguage.value) {
      selectedIndex = i;
      break;
    }
  }
  // select the option with the found index
  if (selectedIndex !== -1) {
    modalAppLanguageField.selectedIndex = selectedIndex;
  }
  document.querySelector(".edit-app-language").click();
}



// Handling Edit User Form

function editUserForm(event) {
  event.preventDefault();
  console.log('here');
}
let interestCardContainer = document.querySelector(
  ".add-interest-card-container"
);

let topicCardContainer = document.querySelector(".add-topic-card-container");

interestCardContainer.innerHTML = "";
topicCardContainer.innerHTML = "";

let interestList = [
  {
    id: 1,
    title: "Sports",
  },
  {
    id: 2,
    title: "Music",
  },
  {
    id: 3,
    title: "Reading",
  },
  {
    id: 4,
    title: "Study",
  },
  {
    id: 5,
    title: "Travel",
  },
  {
    id: 6,
    title: "Sleeping",
  },
  {
    id: 7,
    title: "Books",
  },
];

let topicList = [
  {
    id: 1,
    title: "Economic",
  },
  {
    id: 2,
    title: "Science",
  },
  {
    id: 3,
    title: "Art",
  },
  {
    id: 4,
    title: "History",
  },
  {
    id: 5,
    title: "Math",
  },
  {
    id: 6,
    title: "Bio",
  },
  {
    id: 7,
    title: "Physics",
  },
];

var card = null;

function populateInterest() {
  interestCardContainer.innerHTML = "";
  for (let i = 0; i < interestList.length; i++) {
    card = `<div class="interest-card" id='${interestList[i].id}'>
            <span></span>
            <div class="interest">
                <svg class="del-interest" id='${interestList[i].id}' width="16" height="16" viewBox="0 0 16 16" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M8 0.5C3.8525 0.5 0.5 3.8525 0.5 8C0.5 12.1475 3.8525 15.5 8 15.5C12.1475 15.5 15.5 12.1475 15.5 8C15.5 3.8525 12.1475 0.5 8 0.5ZM11.75 10.6925L10.6925 11.75L8 9.0575L5.3075 11.75L4.25 10.6925L6.9425 8L4.25 5.3075L5.3075 4.25L8 6.9425L10.6925 4.25L11.75 5.3075L9.0575 8L11.75 10.6925Z"
                        fill="#FC0909" />
                </svg>
                <span>${interestList[i].title}</span>
            </div>
        </div>`;

    interestCardContainer.insertAdjacentHTML("beforeend", card);
  }

  document.querySelectorAll(".del-interest").forEach((interest) => {
    interest.addEventListener("click", function () {
      const card = this.closest(".interest-card");
      const index = interestList.findIndex((x) => x.id == card.id);
      interestList.splice(index, 1);
      card.remove();
      populateInterest();
    });
  });
}

function populateTopic() {
  topicCardContainer.innerHTML = "";
  for (let i = 0; i < topicList.length; i++) {
    card = `<div class="interest-card topic-card" id='${topicList[i].id}'>
              <span></span>
              <div class="interest">
                  <svg class="del-topic" id='${topicList[i].id}' width="16" height="16" viewBox="0 0 16 16" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                          d="M8 0.5C3.8525 0.5 0.5 3.8525 0.5 8C0.5 12.1475 3.8525 15.5 8 15.5C12.1475 15.5 15.5 12.1475 15.5 8C15.5 3.8525 12.1475 0.5 8 0.5ZM11.75 10.6925L10.6925 11.75L8 9.0575L5.3075 11.75L4.25 10.6925L6.9425 8L4.25 5.3075L5.3075 4.25L8 6.9425L10.6925 4.25L11.75 5.3075L9.0575 8L11.75 10.6925Z"
                          fill="#FC0909" />
                  </svg>
                  <span>${topicList[i].title}</span>
              </div>
          </div>`;

    topicCardContainer.insertAdjacentHTML("beforeend", card);
  }

  document.querySelectorAll(".del-topic").forEach((topic) => {
    topic.addEventListener("click", function () {
      const card = this.closest(".topic-card");
      const index = topicList.findIndex((x) => x.id == card.id);
      topicList.splice(index, 1);
      card.remove();
      populateTopic();
    });
  });
}

populateInterest();
populateTopic();

function addInterestForm(event) {
  event.preventDefault();
  let form = event.currentTarget;
  let interestField = form.querySelector('input[name="interest"]');
  let newId = Math.random();
  let newInterest = `<div class="interest-card" id='${newId}'>
                        <span></span>
                        <div class="interest">
                            <svg class="del-interest" id='${newId}' width="16" height="16" viewBox="0 0 16 16" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M8 0.5C3.8525 0.5 0.5 3.8525 0.5 8C0.5 12.1475 3.8525 15.5 8 15.5C12.1475 15.5 15.5 12.1475 15.5 8C15.5 3.8525 12.1475 0.5 8 0.5ZM11.75 10.6925L10.6925 11.75L8 9.0575L5.3075 11.75L4.25 10.6925L6.9425 8L4.25 5.3075L5.3075 4.25L8 6.9425L10.6925 4.25L11.75 5.3075L9.0575 8L11.75 10.6925Z"
                                    fill="#FC0909" />
                            </svg>
                            <span>${interestField.value}</span>
                        </div>
                      </div>`;
  interestList.push({id: newId, title: interestField.value});
  populateInterest();
  form.querySelector('#closeInterestModal').click();
}


function addTopicForm(event) {
  event.preventDefault();
  let form = event.currentTarget;
  let topicField = form.querySelector('input[name="topic"]');
  let newId = Math.random();
  let newTopic = `<div class="interest-card topic-card" id='${newId}'>
                      <span></span>
                      <div class="interest">
                          <svg class="del-topic" id='${newId}' width="16" height="16" viewBox="0 0 16 16" fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                  d="M8 0.5C3.8525 0.5 0.5 3.8525 0.5 8C0.5 12.1475 3.8525 15.5 8 15.5C12.1475 15.5 15.5 12.1475 15.5 8C15.5 3.8525 12.1475 0.5 8 0.5ZM11.75 10.6925L10.6925 11.75L8 9.0575L5.3075 11.75L4.25 10.6925L6.9425 8L4.25 5.3075L5.3075 4.25L8 6.9425L10.6925 4.25L11.75 5.3075L9.0575 8L11.75 10.6925Z"
                                  fill="#FC0909" />
                          </svg>
                          <span>${topicField.value}</span>
                      </div>
                    </div>`;
  topicList.push({id: newId, title: topicField.value});
  populateTopic();
  form.querySelector('#closeTopicModal').click();
}

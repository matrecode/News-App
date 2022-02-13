console.log('news api website')

const key = '2973c6fff9d540578f2cb038c2f5dd2c';

let newsAccordion = document.getElementById('newsAccordion');

// create a get request
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=in&apiKey=${key}`, true);

xhr.onload = function () {
  if (this.status === 200) {
    let json = JSON.parse(this.responseText);
    let articles = json.articles;
    let newsHtml  = '';

    articles.forEach((element, index) => {
     console.log(element)
      let news = `<div class="accordion-item">
      <h2 class="accordion-header" id="heading${index}">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
          ${element["title"]}
        </button>
      </h2>
      <div id="collapse${index}" class="accordion-collapse collapse show" aria-labelledby="heading${index}" data-bs-parent="#newsAccordion${index}xample">
        <div class="accordion-body">
          ${element["content"]}
        </div>
      </div>
      </div>`;
      newsHtml += news;
    });

    newsAccordion.innerHTML = newsHtml;

  } else {
    console.log('some error ocurred');
  }
}

xhr.send();


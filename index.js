console.log("This is my index js file");

// Initialize the news api parameters
let source = 'us';
let apiKey = '2aca8f43c5e548b8b22196855492cefc'

// Grab the news container
let newsAccordion = document.getElementById('newsAccordion');

// Create an ajax get request
const xhr = new XMLHttpRequest();
xhr.open('GET', `http://newsapi.org/v2/top-headlines?country=${source}&apiKey=${apiKey}`, true);

// What to do when response is ready
xhr.onload = function() {
    if (this.readyState == 4 && this.status == 200) {
        let json = JSON.parse(this.responseText);

        let articles = json.articles;

        let newsHtml = "";
        articles.forEach(function(element, index) {
            let news = `<div class="card">
            <div class="card-header" id="heading${index} ">
                <h2 class="mb-0">
                    <button class=" raushan btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}" aria-expanded="false" aria-controls="collapse${index}">
                    <span>
                    <b>Breaking News ${index+1}:</b> ${ element.title}</span>
                </button>
                </h2>
            </div>

            <div id="collapse${index}" class=" collapse " aria-labelledby="heading${index}" data-parent="#newsAccordion">
                <div class="card-body">
                    ${element.content} . <a href=" ${element.url}" target="_blank" >Read more here</a>
                </div>
            </div>
        </div>`

            // let new = `<div class="card">
            //                 <div class="card-header" id="heading${index}">
            //                     <h2 class="mb-0">
            //                     <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
            //                         aria-expanded="false" aria-controls="collapse${index}">
            //                        <b>Breaking News ${index+1}:</b> ${element["title"]}
            //                     </button>
            //                     </h2>
            //                 </div>

            //                 <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
            //                     <div class="card-body"> ${element["content"]}. <a href="${element['url']}" target="_blank" >Read more here</a>  </div>
            //                 </div>
            //             </div>`;
            newsHtml += news;
        });
        newsAccordion.innerHTML = newsHtml;
    } else {
        console.log("Some error occured")
    }

}
xhr.send();

function myfunction() {
    let inputText = document.getElementById('inputText');
    console.log(inputText.value.toUpperCase());


    let total = document.getElementsByClassName('raushan').length;
    for (let index = 0; index < total; index++) {
        let title = document.getElementsByClassName('raushan')[index].getElementsByTagName('span')[0].innerHTML.toUpperCase();
        console.log(title);
        if (title.indexOf(inputText.value.toUpperCase()) > -1) {
            document.getElementsByClassName('raushan')[index].getElementsByTagName('span')[0].style.display = "block";
        } else {
            document.getElementsByClassName('raushan')[index].getElementsByTagName('span')[0].style.display = "none"
        }

    }

}
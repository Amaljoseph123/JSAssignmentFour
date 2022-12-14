
// STEP 1: Get your own API key and paste it below…
const key = '6IsSbvgq4kqUuKGpgCBjN9ws0vzUXDv5';

const searchTerm = document.querySelector('input');
const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');
const section = document.querySelector('section');

searchForm.addEventListener('submit',fetchResults);

function fetchResults(event) {
    // Use preventDefault() to stop the form submitting
    event.preventDefault();
    
    url = `https://api.nytimes.com/svc/books/v3/lists/${searchTerm.value}.json?api-key=${key}`;
    
    fetch(url).then(function (results){
        return results.json();
    })
    .then(function(json){
        displayResults(json);
    });


};
function displayResults(json) {
    
    console.log(json);
    // Clearing out the old results…
    while (section.firstChild) {
            section.removeChild(section.firstChild);
    };
    let reviewer = json.results;	

    if(reviewer.length === 0) {
        const para = document.createElement('p');
        para.textContent = 'No results'
        section.appendChild(para);
    } else {
        for(let i = 0; i < reviewer.length; i++) {
            const reviewers = document.createElement('article');
            const heading = document.createElement('h2');
            const para1 = document.createElement('p');
            const para2 = document.createElement('p');
            const current = reviewer[i];
            console.log(current);
            heading.textContent = current.book_name;
            para1.textContent = current.status;
            para2.textContent = current.sort_AuthorName;

            reviewers.appendChild(heading);
            reviewers.appendChild(para2);
            reviewers.appendChild(para1);
            section.append(reviewers);
        };
    };
};

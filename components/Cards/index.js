// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
const entryPoint = document.querySelector('.cards-container')

axios
 .get("https://lambda-times-backend.herokuapp.com/articles") 
 .then(response => {
    console.log(response);


    response.data.articles.javascript.forEach (data => {
        const newcard = card(data);
        entryPoint.append(newcard);
      });
      response.data.articles.bootstrap.forEach (data => {
        const newcard = card(data);
        entryPoint.append(newcard);
      });
      response.data.articles.technology.forEach (data => {
        const newcard = card(data);
        entryPoint.append(newcard);
      });
      response.data.articles.jquery.forEach (data => {
        const newcard = card(data);
        entryPoint.append(newcard);
      });
      response.data.articles.node.forEach (data => {
        const newcard = card(data);
        entryPoint.append(newcard);
      });


});
// javascript: (4) [{…}, {…}, {…}, {…}]
// bootstrap: (3) [{…}, {…}, {…}]
// technology: (3) [{…}, {…}, {…}]
// jquery: (3) [{…}, {…}, {…}]
// node: (2) [{…}, {…}]
// __prot

const card = (data) =>{
    const card = document.createElement('div');
    const headline1 = document.createElement('div');
    const author = document.createElement('div');
    const imgcont = document.createElement('div');
    const authimg = document.createElement('img');
    const authorname = document.createElement('span');

    
  card.appendChild(headline1);
  card.appendChild(author);
  author.appendChild(imgcont);
  author.appendChild(authorname);
  imgcont.appendChild(authimg);

    
  card.classList.add('card');
  headline1.classList.add('headline');
  author.classList.add('author'); 
  imgcont.classList.add('img-container');

  headline1.textContent = data.headline;
  authimg.src = data.authorPhoto;
   authorname.textContent = `By ${data.authorName}`;

  return card;

}
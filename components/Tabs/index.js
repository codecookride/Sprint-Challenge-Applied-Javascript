// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>
 //

const entryPointInHTML = document.querySelector('.topics');

const tab = (array1) => {
    const tab1 = document.createElement('div');
    
    tab.classList.add ('tab');

    tab.textContent = array1;
    return tab1;

};

// axios
// .get('https://lambda-times-backend.herokuapp.com/topics')
// .then(response => {
//     console.log(response.data.topics)

//     let topics = response.data
//     topics.forEach(x => {
//         entryPointInHTML.append(tab(x))
//     })
    
// })

 axios
 .get("https://lambda-times-backend.herokuapp.com/topics") 
 .then(response => {
    console.log(response);

//      let newData = response.data.topics;
//      newData.forEach (item => { 
//         const newtab = tab(item);
//         entryPointInHTML.append(newtab);
//      });


    response.data.topics.forEach (item => {
        const newtab = tab(item);
        entryPointInHTML.append(newtab);
      });

     });

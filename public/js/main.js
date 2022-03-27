
(() => {
    const   theFavor = document.querySelector("#favour-things"),
            theTemplate = document.querySelector("#fav-template").content;
  
    // let buttons = document.querySelectorAll("button");
          

    function getData() {
        fetch("./data.json")
        .then(res => res.json()) //unpach the API
        .then(data => {
            console.table(data);
        
            buildFavor(data);
        })
        .catch(error => console.error(error));
    }

//     function showData() {
        
//         let key = this.dataset.key;

//         let headline = document.querySelector("h2");

//         headline.textContent = data[key].name;
// }



    function buildFavor(info) {
       let favor = Object.keys(info);

       favor.forEach(hobby => {
           let panel = theTemplate.cloneNode(true),
                thingInfo = panel.firstElementChild.children;

                thingInfo[0].querySelector('img').src = `images/${info[hobby].pic}`;
                thingInfo[1].textContent = info[hobby].name;
                thingInfo[2].textContent = info[hobby].mediaType;
                thingInfo[3].textContent = info[hobby].des;

            theFavor.appendChild(panel);
       })
    }

    getData();

    // buttons.forEach(button => button.addEventListener("click", showData));
    

})();
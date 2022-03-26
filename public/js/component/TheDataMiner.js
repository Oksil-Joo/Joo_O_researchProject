
function getData(params, cb) {
    
    let baseURL = "./includes/index.php";

    if (params) {
        let keys = Object.keys(params); 

        let newQStringParams = keys.map(key => `${key}=${params[key]}`).join("&&");

        baseURL += `?${newQStringParams}`;
    }    
    
    fetch(baseURL)
    .then(res => res.json()) 
    .then(data => {
        
        cb(data[0]);
    })
    .catch(error => console.error(error)); 
}


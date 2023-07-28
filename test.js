var imageApiKey = "NrMY_gBRFnULYvfIryKp7UXZZ_NG9iy1f9df0UTtnco"; 
let image={
    getBackgroundImage: function(city){
       // debugger;
        fetch("https://api.unsplash.com/search/photos/?client_id="+imageApiKey+"&query="+city,{
            method:"GET",   
            headers:{
                'Authorization':imageApiKey
            }
        }).then((response) => response.json()).then((data)=>this.displayBackgroundImage(data)).catch((error)=> console.log(error));
    },
    displayBackgroundImage(data){
        console.log(data);
        console.log(data.total);
        console.log(data.results);
        console.log(data.results[0]);
        console.log(data.results[0].urls);
        console.log(data.results[0].urls.regular);
        //const jsonData = JSON.parse(data);
        //console.log("Parsing");
        //console.log(jsonData)
        //ar randInt =Math.floor(Math.random()*data.total)+1; 
        //console.log(randInt);
        //console.log(data.results[Math.floor(Math.random()*data.total)+1]);
        let imgUrl = data.results[0].urls.regular
        //const imgAlt = data.alt_description;
        document.body.style.backgroundImage = `url(${imgUrl})`;
        
    }
}


// Assuming you have an array of elements
const myArray = ['apple', 'banana', 'orange', 'grape', 'watermelon'];

// Generate a random number between 0 and the length of the array (exclusive)
const randint = Math.floor(Math.random() * myArray.length);

// Access the element at the random index
const randomElement = myArray[randint];

console.log(randomElement); // Output: A random element from the array

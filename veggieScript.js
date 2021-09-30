(function(){
  const addItemButt = document.querySelector(".storeItem") //grab button to add item to list for user GUI
  const grocery = document.querySelector("#grocList"); //grab the actual unordered list to be created
  let listItem = document.createElement("li");
  const userInput = document.querySelector(".userInput")
  const pullRecipButt = document.querySelector(".getRecip");
  const popListName = document.querySelector("#recipeName");
  const popListImage = document.querySelector("#recipeImage");
  let urlString = null;
  let i;
  let grocListJS = []; //grocery list array
  const alertTest = () =>{
    grocListJS.push(userInput.value);
    listItem.textContent = userInput.value;
    grocery.appendChild(listItem.cloneNode(true));
    console.log(grocListJS);
    
  }
  //populate first five recipes
  const popFiveRecip = (fiveRecip)=>{
    const i1n = document.querySelector("#recipeName1"); //item1name
    const i1i = document.querySelector("#recipeImage1"); //item1image
    const i1l = document.querySelector("#link1"); //item1Link
    const i2n = document.querySelector("#recipeName2"); 
    const i2i = document.querySelector("#recipeImage2"); 
    const i2l = document.querySelector("#link2");
    const i3n = document.querySelector("#recipeName3"); 
    const i3i = document.querySelector("#recipeImage3"); 
    const i3l = document.querySelector("#link3");
    const i4n = document.querySelector("#recipeName4"); 
    const i4i = document.querySelector("#recipeImage4");
    const i4l = document.querySelector("#link4"); 
    const i5n = document.querySelector("#recipeName5"); 
    const i5i = document.querySelector("#recipeImage5");
    const i5l = document.querySelector("#link5");
    i1n.textContent=fiveRecip.hits[0].recipe.label;
    i1i.src= fiveRecip.hits[0].recipe.image;
    i1l.href = fiveRecip.hits[0].recipe.url;
    i2n.textContent=fiveRecip.hits[1].recipe.label;
    i2i.src= fiveRecip.hits[1].recipe.image;
    i2l.href = fiveRecip.hits[1].recipe.url;
    i3n.textContent=fiveRecip.hits[2].recipe.label;
    i3i.src= fiveRecip.hits[2].recipe.image;
    i3l.href = fiveRecip.hits[2].recipe.url;
    i4n.textContent=fiveRecip.hits[3].recipe.label;
    i4i.src= fiveRecip.hits[3].recipe.image;
    i4l.href = fiveRecip.hits[3].recipe.url;
    i5n.textContent=fiveRecip.hits[4].recipe.label;
    i5i.src= fiveRecip.hits[4].recipe.image;
    i5l.href = fiveRecip.hits[4].recipe.url;
  }
  
  const getRecipFromString = async () =>{
    urlString =grocListJS.join("%20");

    try{
      const {data} = await axios({
        method: "GET",
        url:"https://api.edamam.com/search?q="+urlString+"&app_id=8eb08065&app_key=9a41dd97ff7b25c362ee38b73ef9a678"
      });
      console.log("https://api.edamam.com/search?q="+urlString+"&app_id=8eb08065&app_key=9a41dd97ff7b25c362ee38b73ef9a678");
      console.log(data);
      popFiveRecip(data);
    }
    catch(err){
      alert("Something went wrong, returned message of: " + err);
    }
  }
  addItemButt.addEventListener("click", event => {
    event.preventDefault();
    alertTest();
  });
  pullRecipButt.addEventListener("click", event =>{
    event.preventDefault();
    getRecipFromString()
  });

})();
// Add the coffee to local storage with key "coffee"

let coffeeTypes = document.getElementById("menu");
let coffee =JSON.parse(localStorage.getItem("coffee")) || [];
let coffee_count= document.getElementById("coffee_count");
coffee_count.innerText=coffee.length;
  const url= "https://masai-mock-api.herokuapp.com/coffee/menu";
  fetch(url)
  .then(function(res){
      return res.json();
  })
  .then(function(res){
      append(res.menu.data)
  })
  .catch(function(err){
      console.log(err);
  })



function append(data){
    coffeeTypes.innerHTML = null;

    data.forEach((e) => {
        let container = document.createElement("div");
        
       let title=document.createElement("p");
       title.innerText=e.title;

       let price=document.createElement("p");
       price.innerText = e.price;

       let image=document.createElement("img");
       image.src=e.image;

       let bucketButton = document.createElement("button");
       bucketButton.setAttribute("id","add_to_bucket");
       bucketButton.innerText="Add to Bucket";
       bucketButton.onclick=function(){
           addToBucket(e);
       };

       container.append(image,title,price,bucketButton);
       coffeeTypes.append(container);
    });

}
function addToBucket(e){
    coffee =JSON.parse(localStorage.getItem("coffee")) || [];
    coffee.push(e);
    localStorage.setItem("coffee",JSON.stringify(coffee));
    coffee_count.innerText=coffee.length;

}
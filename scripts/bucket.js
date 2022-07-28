// On clicking remove button the item should be removed from DOM as well as localstorage.
let bucket = document.getElementById("bucket");
let data =JSON.parse(localStorage.getItem("coffee"));
let total_amount= document.getElementById("total_amount");

  


function append(data){
    bucket.innerHTML = null;
    let total=0;

    data.forEach((e,index) => {
        let container = document.createElement("div");
        
       let title=document.createElement("p");
       title.innerText=e.title;

       let price=document.createElement("p");
       price.innerText = e.price;

       let image=document.createElement("img");
       image.src=e.image;

       total += Number(e.price);

       let bucketButton = document.createElement("button");
       bucketButton.setAttribute("id","remove_coffee");
       bucketButton.innerText="Remove";
       bucketButton.onclick=function(){
           removeFromBucket(index);
       };

       container.append(image,title,price,bucketButton);
       bucket.append(container);
    });
   total_amount.innerText = total;
}
append(data);

function removeFromBucket(index){
    data=JSON.parse(localStorage.getItem("coffee"));
    data.splice(index,1);
    localStorage.setItem("coffee",JSON.stringify(data));
    append(data);

}
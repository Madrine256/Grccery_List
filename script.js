const getElements = (elementsId)=>{
    return document.querySelector(elementsId);
  }
  const pencil = getElements("#pencil"),
        userInput = getElements("#userInput"),
        itemContainer = getElements("#itemContainer"),
        allTotals = getElements("#allTotal");
  let tt = null;
   let groups =[];
  
  userInput.addEventListener("keyup", (event)=>{
  //   if the user clicks enter key
    if(event.key == "Enter"){
      
       addItems();
      userInput.value = "";
    }
  });
  let prices =[];
  
  function addItems(){
    let userValue = userInput.value;
    if(userValue === ""){
      alert("input filed is empty");
    }else{
      itemContainer.innerHTML+= `<div class="item-box" >
      <div class="box-wrap">
            <div class="check-box"></div>
             <label for=${userValue}>${userValue}</label>
      </div>
       
       <input type="text" class="price" placeholder="$price">   
      </div>`;
      strikeItem();
    }
  //   price functions
    const priceInput = document.querySelectorAll('.price');
  priceInput.forEach(addPrice=>{
    addPrice.addEventListener('keyup', (e)=>{
      if(e.key == "Enter"){
        // turn the value entered into anumber and push into array;
    prices.push(parseFloat(addPrice.value));
        //console.log(prices);
  //       add the prices all together
      tt =   prices.reduce((a,b)=> a+b,0);
       // console.log(tt);
   allTotals.innerHTML = `$${tt}`;
     let secondChild =  e.currentTarget.parentElement.lastElementChild;
        secondChild.style.display = "none";
        
       // console.log(e.currentTarget.value);
        e.currentTarget.parentElement.innerHTML += `<p class="priceEntered">$${e.currentTarget.value}</p>`;   
  
          strikeItem(tt, e.currentTarget.value);
      }
       
    })
   
  });
   
  }
  
  function strikeItem(myTotal , UnitPrice){
    const liLists = document.querySelectorAll(".check-box");
    liLists.forEach(lis=>{
      lis.addEventListener('click', (e)=>{
        
        e.currentTarget.innerHTML = '<i class="fa-solid fa-check"></i>';
        //change background of the div
           e.currentTarget.style.background = 'green';
        e.currentTarget.parentElement.parentElement.style.textDecoration = 'line-through';
        
        //subtract the complted price of the list from the total;
          UnitPrice = document.querySelector('.priceEntered');
     
      
      })
    });
  }
  
  //       when penicl is cliked, it clears all the lists;
        pencil.addEventListener('click', ()=>{
    itemContainer.innerHTML = "";
    allTotals.innerHTML  = '$0';
          window.location.reload();
  })
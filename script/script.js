  
  function add(e){
    e.preventDefault();
    let newItemText = document.querySelector('.add_item_box input').value;
    if(newItemText){
      let newLi = document.createElement("li");
      newLi.className = "items";
      let newSpan = document.createElement("span");
      newSpan.innerText = newItemText;
      newLi.appendChild(newSpan);
      let newDiv = document.createElement("div")
      newDiv.className = "items_icons";
      let newIconOne = document.createElement("i");
      newIconOne.className = "fa-solid fa-pen";
      newIconOne.addEventListener("click", editItem);
      let newIconTwo = document.createElement("i");
      newIconTwo.className = "fa-solid fa-trash";
      newIconTwo.addEventListener("click", deleteItem);
      newDiv.appendChild(newIconOne);
      newDiv.appendChild(newIconTwo);
      newLi.appendChild(newDiv);
      document.querySelector(".list_items").appendChild(newLi);
      document.querySelector(".add_item_box input").value = "";

    }else{
      alert("!Please write a title for the task!");
    }
  }
 


  function editItem(e){
    let selectedItemLi = e.target.parentElement.parentElement;
    let selectedItemActionDiv = e.target.parentElement;
    let newIcon = document.createElement("i")
    newIcon.className = "fa-solid fa-check";
    newIcon.addEventListener("click", submitEditedItem);
    let newInput = document.createElement("input");
    newInput.type ="text";
    newInput.value = selectedItemLi.querySelector("span").innerText;
    selectedItemLi.querySelector("span").style.display = "none";
    selectedItemActionDiv.querySelector(".fa-pen").style.display = "none";
    selectedItemActionDiv.querySelector(".fa-trash").style.display = "none";
    selectedItemActionDiv.appendChild(newIcon);
    selectedItemLi.appendChild(newInput);
  };

  function submitEditedItem(e){
   let selectedItemLi = e.target.parentElement.parentElement;
   let selectedItemActionDiv = e.target.parentElement;
   let editedItemText = selectedItemLi.querySelector("input").value;
   if(editedItemText){
      selectedItemActionDiv.querySelector(".fa-check").remove();
      selectedItemActionDiv.querySelector(".fa-pen").style.display = "inline-block";
      selectedItemActionDiv.querySelector(".fa-trash").style.display = "inline-block";
      selectedItemLi.querySelector("span").innerText = editedItemText;
      selectedItemLi.querySelector("span").style.display = "inline-block";
      selectedItemLi.querySelector("input").remove();
   }
  };

// delete task
  function deleteItem(e){
    let res = confirm(`Are you sure you want to delete"${e.target.parentElement.parentElement.querySelector("span").innerText}"?`);
    if(res){
      e.target.parentElement.parentElement.remove();
    }
  };

// search
function search(e){ 
  e.preventDefault();
  let searchQuery = document.querySelector(".search_box input").value;
  let items = document.querySelectorAll(".list_items li");
  if(items.length){
    items.forEach(items => {
      if(items.innerText.includes(searchQuery)){
        items.style.display = "flex";
      }else{
        items.style.display = "none";
      }
    })
  }
}


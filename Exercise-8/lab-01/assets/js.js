let array_one = [
    "a house of wood",
    "a house of brick",
    "a house of broken dishes",
    "a house of discarded clothing",
    "a house of dust"
  ];
  
  let array_two = [
    "I will arise and go now, and go to Inisfree",
    "And a small cabin build there",
    "of clay and wattles made",
    "Nine bean-rows will I have there",
    "a hive for the honey bee"
  ];
  
  let element_from_array_one =
    array_one[Math.floor(Math.random() * array_one.length)];
  
  let element_from_array_two =
    array_two[Math.floor(Math.random() * array_two.length)];
  
  function renderPoem() {
    let poem = document.querySelector(".poem");
    poem.textContent = element_from_array_one + " " + element_from_array_two;
    let paragraph = document.createElement("p");
    paragraph.textContent = element_from_array_one + " " + element_from_array_two;
    //create a new element (paragraph) method: .appendChild//
    poem.appendChild(paragraph);
  
    console.log(`${element_from_array_one} \n ${element_from_array_two}`);
  }
  
  let btn = document.querySelector("button");
  btn.addEventListener("click", renderPoem); //two parameters//
  
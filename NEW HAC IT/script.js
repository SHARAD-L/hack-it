// getting all required elements
const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");
const icon = searchWrapper.querySelector(".icon");
let linkTag = searchWrapper.querySelector("a");
let webLink;

// if user press any key and release
inputBox.onkeyup = (e)=>{
    let userData = e.target.value; //user enetered data
    let emptyArray = [];
    if(userData){
        icon.onclick = ()=>{
            webLink = `https://www.google.com/search?q=${userData}`;
            linkTag.setAttribute("href", webLink);
            linkTag.click();
        }
        emptyArray = suggestions.filter((data)=>{
            //filtering array value and user characters to lowercase and return only those words which are start with user enetered chars
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        });
        emptyArray = emptyArray.map((data)=>{
            // passing return data inside li tag
            return data = `<li>${data}</li>`;
        });
        searchWrapper.classList.add("active"); //show autocomplete box
        showSuggestions(emptyArray);
        let allList = suggBox.querySelectorAll("li");
        for (let i = 0; i < allList.length; i++) {
            //adding onclick attribute in all li tag
            allList[i].setAttribute("onclick", "select(this)");
        }
    }else{
        searchWrapper.classList.remove("active"); //hide autocomplete box
    }
}

function select(element){
    let selectData = element.textContent;
    inputBox.value = selectData;
    icon.onclick = ()=>{
        webLink = `https://www.google.com/search?q=${selectData}`;
        linkTag.setAttribute("href", webLink);
        linkTag.click();
    }
    searchWrapper.classList.remove("active");
}

function showSuggestions(list){
    let listData;
    if(!list.length){
        userValue = inputBox.value;
        listData = `<li>${userValue}</li>`;
    }else{
      listData = list.join('');
    }
    suggBox.innerHTML = listData;
}




let popup1 = document.getElementById("popup1");

function openPopup1(){
    popup1.classList.add("open-popup1");
}
function closePopup1(){
    popup1.classList.remove("open-popup1");
}

let popup2 = document.getElementById("popup2");

function openPopup2(){
    popup2.classList.add("open-popup2");
}
function closePopup2(){
    popup2.classList.remove("open-popup2");
}

let popup3 = document.getElementById("popup3");

function openPopup3(){
    popup3.classList.add("open-popup3");
}
function closePopup3(){
    popup3.classList.remove("open-popup3");
}

let popup4 = document.getElementById("popup4");

function openPopup4(){
    popup4.classList.add("open-popup4");
}
function closePopup4(){
    popup4.classList.remove("open-popup4");
}

let popup5 = document.getElementById("popup5");

function openPopup5(){
    popup5.classList.add("open-popup5");
}
function closePopup5(){
    popup5.classList.remove("open-popup5");
}

let popup6 = document.getElementById("popup6");

function openPopup6(){
    popup6.classList.add("open-popup6");
}
function closePopup6(){
    popup6.classList.remove("open-popup6");
}

let popup7 = document.getElementById("popup7");

function openPopup7(){
    popup7.classList.add("open-popup7");
}
function closePopup7(){
    popup7.classList.remove("open-popup7");
}

function showPopup() {
    // Show the password popup
    document.getElementById("password-popup").style.display = "flex";
  }

  function submitPassword() {
    // Check if the password is correct
    var password = document.getElementById("password-input").value;
    if (password === "myPassword") {
      // Show the protected value
      alert("CVV: 537");
    } else {
      // Show an error message
      alert("Incorrect password!");
    }

    // Hide the password popup
    document.getElementById("password-popup").style.display = "none";
  }

  const themeToggler = document.querySelector(".theme-toggler");
  themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');

    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
  })

  function showPopupa() {
    // Show the password popup
    document.getElementById("passworda-popup").style.display = "flex";
  }

  function submitaPassword() {
    // Check if the password is correct
    var password = document.getElementById("passworda-input").value;
    if (password === "myPassword") {
      // Show the protected value
      alert("CVV: 537");
    } else {
      // Show an error message
      alert("Incorrect password!");
    }

    // Hide the password popup
    document.getElementById("passworda-popup").style.display = "none";
  }


  


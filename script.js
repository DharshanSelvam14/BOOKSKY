// popup operation

var popupoverlay = document.querySelector(".popup-overlay")
var popupbox = document.querySelector(".popupbox")
var addpopup = document.getElementById("add-popup")
addpopup.addEventListener("click",function()
{
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})

//cancel operation

var cancel=document.getElementById("cancelbook")
cancel.addEventListener("click",function(event)
{
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"

})

//Add Book Operation

var container=document.querySelector(".container")
var addbook=document.getElementById("addbook")
var title=document.getElementById("book-title")
var author=document.getElementById("book-author")
var description = document.getElementById("description")

addbook.addEventListener("click",function(event)
{
    event.preventDefault()
    var divi=document.createElement("div")
    divi.setAttribute("class","book-container")
    divi.innerHTML=`<h2>${title.value}</h2>
    <h3>${author.value}</h3>
    <p>${description.value}</p>
    <button onclick="deleteit(event)" id="deletebutton">Delete</button>`
    container.append(divi)
    popupoverlay.style.display="none"
    popupbox.style.display="none"

})

//Delete Operation

function deleteit(event)
{
    event.target.parentElement.remove()
}



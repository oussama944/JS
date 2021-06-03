let addList=document.getElementById("addList");

document.getElementById("add").addEventListener("click",function(){
let title=document.getElementById('title').value;
let link=document.getElementById('link').value;

addList.insertAdjacentHTML("afterbegin",`<li>${title} </li>`);
})
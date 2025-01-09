var listofdata=[];
//creating array to store the list 
var input=document.getElementById("input");
//dom should collab with html forms
var todo=document.getElementById("todo")
//creating ul  list using dom variable
document.getElementById("button").onclick=click;
//inserting a data
function click(){
    if(input.value.trim()==""){
    alert("please enter a valid task.");
    return;
    }
    listofdata.push(input.value);
    input.value="";
    showlist();
    
}
function showlist(){
    todo.innerHtml="";
    listofdata.forEach(function(item,i){
        var li=document.createElement("li");
        li.innerHTML=`${item}<a  onclick ="edit(${i})" style="margin-left:10px;color:blue;cursor:pointer;">edit</a>
<a  onclick ="deleteLst(${i})" style="margin-left:10px;color:red;cursor:pointer;">Delete</a>`
todo.appendChild(li);   
});
}

function edit(i){
    var newval=prompt("please insert new value",listofdata[i]);
    if(newval!==null&& newval.trim()!==""){
    listofdata.splice(i,1,newval);
    showlist();
    }
}
function deleteLst(i){
    listofdata.splice(i,1);
    showlist;
}
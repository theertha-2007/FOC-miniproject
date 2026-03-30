let a = document.getElementById("id") ;
a.classList.add("change");
a.addEventListener("mouseover",function()
{
    a.innerHTML="TOM"
});
a.addEventListener("mousedown",function()
{
    a.innerHTML="CAT"
});
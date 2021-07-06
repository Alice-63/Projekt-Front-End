var bild1=document.getElementById("bild1");
var bild2=document.getElementById("bild2");
var bild3=document.getElementById("bild3");
var h1=document.getElementById("h1");
var h2=document.getElementById("h2")
var h3=document.getElementById("h3")

var slide=1;


function next()
{
   slide++;
   
   if(slide==2)
   {
       bild1.style.opacity="0";
       bild2.style.opacity="100";
   }
   else if(slide==3)
   {
    bild2.style.opacity="0";
    bild3.style.opacity="100";
   }
   else
   {
    bild3.style.opacity="0";
    bild1.style.opacity="100";
    slide=1;
   }
}

function prev()
{
 slide--;
 if(slide==0)
 {
    bild1.style.opacity="0";
    bild3.style.opacity="100";
    slide=3;
 }

 else if(slide==1)
 {
    bild2.style.opacity="0";
    bild1.style.opacity="100";
 }
 else if(slide==2)
 {
    bild3.style.opacity="0";
    bild2.style.opacity="100";
   
 }
}
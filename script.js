var bild=document.getElementById("bild");
var h1=document.getElementById("h1");
var number=1;


setInterval(function(){ next()}, 2000);
function next()
{
    number++;

    if(number==1)
    {
        bild.style.backgroundImage="url(img/"+number+".png)";
        h1.innerHTML="Herzlichen Wilkommen"
    }
    else if(number==2)
    {
        bild.style.backgroundImage="url(img/"+number+".png)";
        h1.innerHTML="Wir machen Musik!"

    }
    else if(number==3)
    {
        bild.style.backgroundImage="url(img/"+number+".png)";
        h1.innerHTML="Musik ist das Leben!"
        number=0;
    }


    
}



// navbar




function show()
{
    var logo=document.getElementById("logo");
    var nav = document.getElementById("nav");
    var header=document.getElementById("header");

   
    if (nav.style.display === "flex") 
    {
      nav.style.display = "none";
      logo.style.display="flex";
      header.style.flexDirection="row"
    } 
    else 
    {
      nav.style.display = "flex";
      logo.style.display="none";
      header.style.flexDirection="column"
      
      
    }

    window.location.reload(false);
}



    
           
           
    


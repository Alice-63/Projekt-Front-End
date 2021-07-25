var bild=document.getElementById("bild");
var h1=document.getElementById("h1");
var number=1;

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
        number=1;
    }
   

}

// navbar

var allA=document.getElementsByTagName("a");
var nav=document.getElementById("nav");
var a=false;

function show()
{
    
    if(a)
    {
        nav.style.height="54px"

    }
    else
    {
        nav.style.height="340px"
    }
   
    
    a=!a;
}
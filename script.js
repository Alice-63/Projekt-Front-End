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
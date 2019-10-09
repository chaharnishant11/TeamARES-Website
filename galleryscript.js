function shift0()
{	
	var temp = this.src[this.src.length-5];
	var bigsrc =  document.getElementsByClassName('big-image')[0].src[document.getElementsByClassName('big-image')[0].src.length - 5];
	document.getElementsByClassName('big-image')[0].src[document.getElementsByClassName('big-image')[0].src.length - 5] = temp;
	this.src = this.src.slice(0,-5) + bigsrc + '.jpg';
	document.getElementsByClassName('big-image')[0].src = document.getElementsByClassName('big-image')[0].src.slice(0,-5) + temp + '.jpg';
}

function shift3()
{	
	var temp = this.src[this.src.length-5];
	var bigsrc =  document.getElementsByClassName('big-image')[3].src[document.getElementsByClassName('big-image')[3].src.length - 5];
	document.getElementsByClassName('big-image')[3].src[document.getElementsByClassName('big-image')[3].src.length - 5] = temp;
	this.src = this.src.slice(0,-5) + bigsrc + '.jpg';
	document.getElementsByClassName('big-image')[3].src = document.getElementsByClassName('big-image')[3].src.slice(0,-5) + temp + '.jpg';
}
function shift1()
{	
	var temp = this.src[this.src.length-5];
	var bigsrc =  document.getElementsByClassName('big-image')[1].src[document.getElementsByClassName('big-image')[1].src.length - 5];
	document.getElementsByClassName('big-image')[1].src[document.getElementsByClassName('big-image')[1].src.length - 5] = temp;
	this.src = this.src.slice(0,-5) + bigsrc + '.jpg';
	document.getElementsByClassName('big-image')[1].src = document.getElementsByClassName('big-image')[1].src.slice(0,-5) + temp + '.jpg';
}
function shift2()
{	
	var temp = this.src[this.src.length-5];
	var bigsrc =  document.getElementsByClassName('big-image')[2].src[document.getElementsByClassName('big-image')[2].src.length - 5];
	document.getElementsByClassName('big-image')[2].src[document.getElementsByClassName('big-image')[2].src.length - 5] = temp;
	this.src = this.src.slice(0,-5) + bigsrc + '.jpg';
	document.getElementsByClassName('big-image')[2].src = document.getElementsByClassName('big-image')[2].src.slice(0,-5) + temp + '.jpg';
}



function facebookplugin()
{
  width = window.innerWidth;
	if(width<=900)
	{

  document.getElementById("fbplugin").src = "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Faresmarsrover%2F&tabs=timeline&width=" + 280 + "&height=200&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false&appId";

}

if(width<=769)
{
 document.getElementById("fbplugin").src = "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Faresmarsrover%2F&tabs=timeline&width=" + 340 + "&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false&appId";

}

if(width<=420)
{
 document.getElementById("fbplugin").src = "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Faresmarsrover%2F&tabs=timeline&width=" + 300 + "&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false&appId";

}}

document.addEventListener("DOMContentLoaded", function(event) { 
var i = 0;
var j = 0;
document.getElementById("urclink").addEventListener("click",openlink1);
document.getElementById("sponsorshiplink").addEventListener("click",openlink2);
function openlink1()
{var elem = document.getElementById("hovertwo");
if(i==0)
{i = 1;
elem.style.display = "block";}
else
{i = 0;
elem.style.display = "none";}
}
function openlink2()
{var elem = document.getElementById("hoverone");
if(j==0)
{j = 1;
elem.style.display = "block";}
else
{j = 0;
elem.style.display = "none";}}
document.getElementById("menubutton").addEventListener("click",slidein);
document.getElementById("close").addEventListener("click",slideout);

function slidein()
{
  document.getElementById("menu").className = "menuslidein";
}

function slideout()
{
  document.getElementById("menu").className = "menuslideout";
}
facebookplugin();

facebookplugin();

var imagelist0 = document.querySelectorAll('.small-image0');
var imagelist1 = document.querySelectorAll('.small-image1');
var imagelist2 = document.querySelectorAll('.small-image2');
var imagelist3 = document.querySelectorAll('.small-image3');


for(i=0;i<4;i++)
imagelist0[i].addEventListener("click",shift0);



for(i=0;i<4;i++)
imagelist1[i].addEventListener("click",shift1);


for(i=0;i<4;i++)
imagelist2[i].addEventListener("click",shift2);

for(i=0;i<4;i++)
	imagelist3[i].addEventListener("click",shift3);





});

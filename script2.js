var next2=0; var next = 0;

function hidetoggle()
{
	console.log("yes");
console.log(this);
this.className = 'sponsortext';
}

function showtoggle()
{
    console.log(this);
		console.log(this.className);
if(this.className == 'sponsortextshow')
{
this.nextElementSibling.nextElementSibling.className = 'sponsortext';
console.log("not showing");
}else
{	console.log("showing");
this.nextElementSibling.nextElementSibling.className = 'sponsortextshow';
}
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

}

}
/*

function arrowjump()
{
var elem = document.getElementById("arrowtext");
var bottomvalue = elem.style.bottom;
var bottom = 0;

console.log('here');
  
}
*/


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

//var x = document.getElementsByName("textsponsor");
var x = document.getElementsByName("sponsortext");
console.log(x);
for(i=0;i<x.length;i++)
{	
	x[i].getElementsByTagName('img')[0].addEventListener("click",showtoggle);
	if(x[i].getElementsByTagName('div')[0])
	x[i].getElementsByTagName('div')[0].addEventListener("click",hidetoggle);
console.log(x[i].getElementsByTagName('img')[0]);
//	x[i].addEventListener("mouseout",hidetoggle);
}

function slidein()
{
  document.getElementById("menu").className = "menuslidein";
}

function slideout()
{
  document.getElementById("menu").className = "menuslideout";
}
/*function slidein()
{var elem = document.getElementById("menu");
var id = setInterval(frame, 0.0005);
var right = -340;
function frame()
{
if(right == 0)  
clearInterval(id);
else
{elem.style.right = right + "px";
right++;}
}} 
function slideout()
{var elem = document.getElementById("menu");
var id = setInterval(frame, 0.0005);
var right = 0;
elem.style.color = '#fff';
function frame()
{if(right == -340)  
clearInterval(id);  
else
{elem.style.right = right + "px";
right--;}}} 
*/
facebookplugin();
});


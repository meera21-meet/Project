var x=localStorage.getItem("choice");
var y=localStorage.getItem("option");
var meals=3; //Meera, If you want to make only 2 meals or you want to make more than 3 meals, just change the 3 to the number of meals
var random=Math.floor(Math.random() * meals) + 1; //This will generate a number between 1 and the-number-of-meals (in this case 3) (random between 1-3)
var before=random;
document.getElementById("choice").innerHTML=x;
document.getElementById("option").innerHTML=y;
document.getElementById("meal").innerHTML=random;

switch(x)
{
case "breakfast":
switch(y)
{
case "american":
switch(random)
{
case 1:
document.getElementById("meal_name").innerHTML=x+", "+y+", "+random+""; //Replace this with the name of the meal
document.getElementById("meal_picture").src="MEAL_PICTURE.jpg/png...." //Replace this with the picture of the meal
break;

case 2:
document.getElementById("meal_name").innerHTML=x+", "+y+", "+random+""; //Replace this with the name of the meal
document.getElementById("meal_picture").src="MEAL_PICTURE.jpg/png...." //Replace this with the picture of the meal
break;

case 3:
document.getElementById("meal_name").innerHTML=x+", "+y+", "+random+""; //Replace this with the name of the meal
document.getElementById("meal_picture").src="MEAL_PICTURE.jpg/png...." //Replace this with the picture of the meal
break;

default:
alert("It shouldn't print this message");
}
break;

case "greek":
switch(random)
{
case 1:
document.getElementById("meal_name").innerHTML=x+", "+y+", "+random+""; //Replace this with the name of the meal
document.getElementById("meal_picture").src="MEAL_PICTURE.jpg/png...." //Replace this with the picture of the meal
break;

case 2:
document.getElementById("meal_name").innerHTML=x+", "+y+", "+random+""; //Replace this with the name of the meal
document.getElementById("meal_picture").src="MEAL_PICTURE.jpg/png...." //Replace this with the picture of the meal
break;

case 3:
document.getElementById("meal_name").innerHTML=x+", "+y+", "+random+""; //Replace this with the name of the meal
document.getElementById("meal_picture").src="MEAL_PICTURE.jpg/png...." //Replace this with the picture of the meal
break;

default:
alert("It shouldn't print this message");
}
break;

case "italian":
switch(random)
{
case 1:
document.getElementById("meal_name").innerHTML=x+", "+y+", "+random+""; //Replace this with the name of the meal
document.getElementById("meal_picture").src="MEAL_PICTURE.jpg/png...." //Replace this with the picture of the meal
break;

case 2:
document.getElementById("meal_name").innerHTML=x+", "+y+", "+random+""; //Replace this with the name of the meal
document.getElementById("meal_picture").src="MEAL_PICTURE.jpg/png...." //Replace this with the picture of the meal
break;

case 3:
document.getElementById("meal_name").innerHTML=x+", "+y+", "+random+""; //Replace this with the name of the meal
document.getElementById("meal_picture").src="MEAL_PICTURE.jpg/png...." //Replace this with the picture of the meal
break;

default:
alert("It shouldn't print this message");
}
break;

default:
alert("It shouldn't print this message");
}
break;

case "lunch":
switch(y)
{
case "american":
switch(random)
{
case 1:
document.getElementById("meal_name").innerHTML=x+", "+y+", "+random+""; //Replace this with the name of the meal
document.getElementById("meal_picture").src="MEAL_PICTURE.jpg/png...." //Replace this with the picture of the meal
break;

case 2:
document.getElementById("meal_name").innerHTML=x+", "+y+", "+random+""; //Replace this with the name of the meal
document.getElementById("meal_picture").src="MEAL_PICTURE.jpg/png...." //Replace this with the picture of the meal
break;

case 3:
document.getElementById("meal_name").innerHTML=x+", "+y+", "+random+""; //Replace this with the name of the meal
document.getElementById("meal_picture").src="MEAL_PICTURE.jpg/png...." //Replace this with the picture of the meal
break;

default:
alert("It shouldn't print this message");
}
break;

case "greek":
switch(random)
{
case 1:
document.getElementById("meal_name").innerHTML=x+", "+y+", "+random+""; //Replace this with the name of the meal
document.getElementById("meal_picture").src="MEAL_PICTURE.jpg/png...." //Replace this with the picture of the meal
break;

case 2:
document.getElementById("meal_name").innerHTML=x+", "+y+", "+random+""; //Replace this with the name of the meal
document.getElementById("meal_picture").src="MEAL_PICTURE.jpg/png...." //Replace this with the picture of the meal
break;

case 3:
document.getElementById("meal_name").innerHTML=x+", "+y+", "+random+""; //Replace this with the name of the meal
document.getElementById("meal_picture").src="MEAL_PICTURE.jpg/png...." //Replace this with the picture of the meal
break;

default:
alert("It shouldn't print this message");
}
break;

case "italian":
switch(random)
{
case 1:
document.getElementById("meal_name").innerHTML=x+", "+y+", "+random+""; //Replace this with the name of the meal
document.getElementById("meal_picture").src="MEAL_PICTURE.jpg/png...." //Replace this with the picture of the meal
break;

case 2:
document.getElementById("meal_name").innerHTML=x+", "+y+", "+random+""; //Replace this with the name of the meal
document.getElementById("meal_picture").src="MEAL_PICTURE.jpg/png...." //Replace this with the picture of the meal
break;

case 3:
document.getElementById("meal_name").innerHTML=x+", "+y+", "+random+""; //Replace this with the name of the meal
document.getElementById("meal_picture").src="MEAL_PICTURE.jpg/png...." //Replace this with the picture of the meal
break;

default:
alert("It shouldn't print this message");
}
break;

default:
alert("It shouldn't print this message");
}
break;

case "dinner":
switch(y)
{
case "american":
switch(random)
{
case 1:
document.getElementById("meal_name").innerHTML=x+", "+y+", "+random+""; //Replace this with the name of the meal
document.getElementById("meal_picture").src="MEAL_PICTURE.jpg/png...." //Replace this with the picture of the meal
break;

case 2:
document.getElementById("meal_name").innerHTML=x+", "+y+", "+random+""; //Replace this with the name of the meal
document.getElementById("meal_picture").src="MEAL_PICTURE.jpg/png...." //Replace this with the picture of the meal
break;

case 3:
document.getElementById("meal_name").innerHTML=x+", "+y+", "+random+""; //Replace this with the name of the meal
document.getElementById("meal_picture").src="MEAL_PICTURE.jpg/png...." //Replace this with the picture of the meal
break;

default:
alert("It shouldn't print this message");
}
break;

case "greek":
switch(random)
{
case 1:
document.getElementById("meal_name").innerHTML=x+", "+y+", "+random+""; //Replace this with the name of the meal
document.getElementById("meal_picture").src="MEAL_PICTURE.jpg/png...." //Replace this with the picture of the meal
break;

case 2:
document.getElementById("meal_name").innerHTML=x+", "+y+", "+random+""; //Replace this with the name of the meal
document.getElementById("meal_picture").src="MEAL_PICTURE.jpg/png...." //Replace this with the picture of the meal
break;

case 3:
document.getElementById("meal_name").innerHTML=x+", "+y+", "+random+""; //Replace this with the name of the meal
document.getElementById("meal_picture").src="MEAL_PICTURE.jpg/png...." //Replace this with the picture of the meal
break;

default:
alert("It shouldn't print this message");
}
break;

case "italian":
switch(random)
{
case 1:
document.getElementById("meal_name").innerHTML=x+", "+y+", "+random+""; //Replace this with the name of the meal
document.getElementById("meal_picture").src="MEAL_PICTURE.jpg/png...." //Replace this with the picture of the meal
break;

case 2:
document.getElementById("meal_name").innerHTML=x+", "+y+", "+random+""; //Replace this with the name of the meal
document.getElementById("meal_picture").src="MEAL_PICTURE.jpg/png...." //Replace this with the picture of the meal
break;

case 3:
document.getElementById("meal_name").innerHTML=x+", "+y+", "+random+""; //Replace this with the name of the meal
document.getElementById("meal_picture").src="MEAL_PICTURE.jpg/png...." //Replace this with the picture of the meal
break;

default:
alert("It shouldn't print this message");
}
break;

default:
alert("It shouldn't print this message");
}
break;

case "msnack":
switch(y)
{
case "sweet":
switch(random)
{
case 1:
document.getElementById("meal_name").innerHTML=x+", "+y+", "+random+""; //Replace this with the name of the meal
document.getElementById("meal_picture").src="MEAL_PICTURE.jpg/png...." //Replace this with the picture of the meal
break;

case 2:
document.getElementById("meal_name").innerHTML=x+", "+y+", "+random+""; //Replace this with the name of the meal
document.getElementById("meal_picture").src="MEAL_PICTURE.jpg/png...." //Replace this with the picture of the meal
break;

case 3:
document.getElementById("meal_name").innerHTML=x+", "+y+", "+random+""; //Replace this with the name of the meal
document.getElementById("meal_picture").src="MEAL_PICTURE.jpg/png...." //Replace this with the picture of the meal
break;

default:
alert("It shouldn't print this message");
}
break;

case "salty":
switch(random)
{
case 1:
document.getElementById("meal_name").innerHTML=x+", "+y+", "+random+""; //Replace this with the name of the meal
document.getElementById("meal_picture").src="MEAL_PICTURE.jpg/png...." //Replace this with the picture of the meal
break;

case 2:
document.getElementById("meal_name").innerHTML=x+", "+y+", "+random+""; //Replace this with the name of the meal
document.getElementById("meal_picture").src="MEAL_PICTURE.jpg/png...." //Replace this with the picture of the meal
break;

case 3:
document.getElementById("meal_name").innerHTML=x+", "+y+", "+random+""; //Replace this with the name of the meal
document.getElementById("meal_picture").src="MEAL_PICTURE.jpg/png...." //Replace this with the picture of the meal
break;

default:
alert("It shouldn't print this message");
}
break;

default:
alert("It shouldn't print this message");
}
break;

case "snack":
switch(y)
{
case "sweet":
switch(random)
{
case 1:
document.getElementById("meal_name").innerHTML=x+", "+y+", "+random+""; //Replace this with the name of the meal
document.getElementById("meal_picture").src="MEAL_PICTURE.jpg/png...." //Replace this with the picture of the meal
break;

case 2:
document.getElementById("meal_name").innerHTML=x+", "+y+", "+random+""; //Replace this with the name of the meal
document.getElementById("meal_picture").src="MEAL_PICTURE.jpg/png...." //Replace this with the picture of the meal
break;

case 3:
document.getElementById("meal_name").innerHTML=x+", "+y+", "+random+""; //Replace this with the name of the meal
document.getElementById("meal_picture").src="MEAL_PICTURE.jpg/png...." //Replace this with the picture of the meal
break;

default:
alert("It shouldn't print this message");
}
break;

case "salty":
switch(random)
{
case 1:
document.getElementById("meal_name").innerHTML=x+", "+y+", "+random+""; //Replace this with the name of the meal
document.getElementById("meal_picture").src="MEAL_PICTURE.jpg/png...." //Replace this with the picture of the meal
break;

case 2:
document.getElementById("meal_name").innerHTML=x+", "+y+", "+random+""; //Replace this with the name of the meal
document.getElementById("meal_picture").src="MEAL_PICTURE.jpg/png...." //Replace this with the picture of the meal
break;

case 3:
document.getElementById("meal_name").innerHTML=x+", "+y+", "+random+""; //Replace this with the name of the meal
document.getElementById("meal_picture").src="MEAL_PICTURE.jpg/png...." //Replace this with the picture of the meal
break;

default:
alert("It shouldn't print this message");
}
break;

default:
alert("It shouldn't print this message");
}
break;

default:
alert("This message should never show");

}

function change()
{
do
{
var random=Math.floor(Math.random() * meals) + 1;
}
while(random==before);
before=random;
document.getElementById("meal").innerHTML=random;

switch(x)
{
case "breakfast":
switch(y)
{
case "american":
switch(random)
{
case 1:
document.getElementById("meal_name").innerHTML=x+", "+y+", "+random+""; //Replace this with the name of the meal
document.getElementById("meal_picture").src="MEAL_PICTURE.jpg/png...." //Replace this with the picture of the meal
break;

case 2:
document.getElementById("meal_name").innerHTML=x+", "+y+", "+random+""; //Replace this with the name of the meal
document.getElementById("meal_picture").src="MEAL_PICTURE.jpg/png...." //Replace this with the picture of the meal
break;

case 3:
document.getElementById("meal_name").innerHTML=x+", "+y+", "+random+""; //Replace this with the name of the meal
document.getElementById("meal_picture").src="MEAL_PICTURE.jpg/png...." //Replace this with the picture of the meal
break;

default:
alert("It shouldn't print this message");
}
break;

case "greek":
switch(random)
{
case 1:
document.getElementById("meal_name").innerHTML=x+", "+y+", "+random+""; //Replace this with the name of the meal
document.getElementById("meal_picture").src="MEAL_PICTURE.jpg/png...." //Replace this with the picture of the meal
break;

case 2:
document.getElementById("meal_name").innerHTML=x+", "+y+", "+random+""; //Replace this with the name of the meal
document.getElementById("meal_picture").src="MEAL_PICTURE.jpg/png...." //Replace this with the picture of the meal
break;

case 3:
document.getElementById("meal_name").innerHTML=x+", "+y+", "+random+""; //Replace this with the name of the meal
document.getElementById("meal_picture").src="MEAL_PICTURE.jpg/png...." //Replace this with the picture of the meal
break;

default:
alert("It shouldn't print this message");
}
break;

case "italian":
switch(random)
{
case 1:
document.getElementById("meal_name").innerHTML=x+", "+y+", "+random+""; //Replace this with the name of the meal
document.getElementById("meal_picture").src="MEAL_PICTURE.jpg/png...." //Replace this with the picture of the meal
break;

case 2:
document.getElementById("meal_name").innerHTML=x+", "+y+", "+random+""; //Replace this with the name of the meal
document.getElementById("meal_picture").src="MEAL_PICTURE.jpg/png...." //Replace this with the picture of the meal
break;

case 3:
document.getElementById("meal_name").innerHTML=x+", "+y+", "+random+""; //Replace this with the name of the meal
document.getElementById("meal_picture").src="MEAL_PICTURE.jpg/png...." //Replace this with the picture of the meal
break;

default:
alert("It shouldn't print this message");
}
break;

default:
alert("It shouldn't print this message");
}
break;

case "lunch":
switch(y)
{
case "american":
switch(random)
{
case 1:
document.getElementById("meal_name").innerHTML=x+", "+y+", "+random+""; //Replace this with the name of the meal
document.getElementById("meal_picture").src="MEAL_PICTURE.jpg/png...." //Replace this with the picture of the meal
break;

case 2:
document.getElementById("meal_name").innerHTML=x+", "+y+", "+random+""; //Replace this with the name of the meal
document.getElementById("meal_picture").src="MEAL_PICTURE.jpg/png...." //Replace this with the picture of the meal
break;

case 3:
document.getElementById("meal_name").innerHTML=x+", "+y+", "+random+""; //Replace this with the name of the meal
document.getElementById("meal_picture").src="MEAL_PICTURE.jpg/png...." //Replace this with the picture of the meal
break;

default:
alert("It shouldn't print this message");
}
break;

case "greek":
switch(random)
{
case 1:
document.getElementById("meal_name").innerHTML=x+", "+y+", "+random+""; //Replace this with the name of the meal
document.getElementById("meal_picture").src="MEAL_PICTURE.jpg/png...." //Replace this with the picture of the meal
break;

case 2:
document.getElementById("meal_name").innerHTML=x+", "+y+", "+random+""; //Replace this with the name of the meal
document.getElementById("meal_picture").src="MEAL_PICTURE.jpg/png...." //Replace this with the picture of the meal
break;

case 3:
document.getElementById("meal_name").innerHTML=x+", "+y+", "+random+""; //Replace this with the name of the meal
document.getElementById("meal_picture").src="MEAL_PICTURE.jpg/png...." //Replace this with the picture of the meal
break;

default:
alert("It shouldn't print this message");
}
break;

case "italian":
switch(random)
{
case 1:
document.getElementById("meal_name").innerHTML=x+", "+y+", "+random+""; //Replace this with the name of the meal
document.getElementById("meal_picture").src="MEAL_PICTURE.jpg/png...." //Replace this with the picture of the meal
break;

case 2:
document.getElementById("meal_name").innerHTML=x+", "+y+", "+random+""; //Replace this with the name of the meal
document.getElementById("meal_picture").src="MEAL_PICTURE.jpg/png...." //Replace this with the picture of the meal
break;

case 3:
document.getElementById("meal_name").innerHTML=x+", "+y+", "+random+""; //Replace this with the name of the meal
document.getElementById("meal_picture").src="MEAL_PICTURE.jpg/png...." //Replace this with the picture of the meal
break;

default:
alert("It shouldn't print this message");
}
break;

default:
alert("It shouldn't print this message");
}
break;

case "dinner":
switch(y)
{
case "american":
switch(random)
{
case 1:
document.getElementById("meal_name").innerHTML=x+", "+y+", "+random+""; //Replace this with the name of the meal
document.getElementById("meal_picture").src="MEAL_PICTURE.jpg/png...." //Replace this with the picture of the meal
break;

case 2:
document.getElementById("meal_name").innerHTML=x+", "+y+", "+random+""; //Replace this with the name of the meal
document.getElementById("meal_picture").src="MEAL_PICTURE.jpg/png...." //Replace this with the picture of the meal
break;

case 3:
document.getElementById("meal_name").innerHTML=x+", "+y+", "+random+""; //Replace this with the name of the meal
document.getElementById("meal_picture").src="MEAL_PICTURE.jpg/png...." //Replace this with the picture of the meal
break;

default:
alert("It shouldn't print this message");
}
break;

case "greek":
switch(random)
{
case 1:
document.getElementById("meal_name").innerHTML=x+", "+y+", "+random+""; //Replace this with the name of the meal
document.getElementById("meal_picture").src="MEAL_PICTURE.jpg/png...." //Replace this with the picture of the meal
break;

case 2:
document.getElementById("meal_name").innerHTML=x+", "+y+", "+random+""; //Replace this with the name of the meal
document.getElementById("meal_picture").src="MEAL_PICTURE.jpg/png...." //Replace this with the picture of the meal
break;

case 3:
document.getElementById("meal_name").innerHTML=x+", "+y+", "+random+""; //Replace this with the name of the meal
document.getElementById("meal_picture").src="MEAL_PICTURE.jpg/png...." //Replace this with the picture of the meal
break;

default:
alert("It shouldn't print this message");
}
break;

case "italian":
switch(random)
{
case 1:
document.getElementById("meal_name").innerHTML=x+", "+y+", "+random+""; //Replace this with the name of the meal
document.getElementById("meal_picture").src="MEAL_PICTURE.jpg/png...." //Replace this with the picture of the meal
break;

case 2:
document.getElementById("meal_name").innerHTML=x+", "+y+", "+random+""; //Replace this with the name of the meal
document.getElementById("meal_picture").src="MEAL_PICTURE.jpg/png...." //Replace this with the picture of the meal
break;

case 3:
document.getElementById("meal_name").innerHTML=x+", "+y+", "+random+""; //Replace this with the name of the meal
document.getElementById("meal_picture").src="MEAL_PICTURE.jpg/png...." //Replace this with the picture of the meal
break;

default:
alert("It shouldn't print this message");
}
break;

default:
alert("It shouldn't print this message");
}
break;

case "msnack":
switch(y)
{
case "sweet":
switch(random)
{
case 1:
document.getElementById("meal_name").innerHTML=x+", "+y+", "+random+""; //Replace this with the name of the meal
document.getElementById("meal_picture").src="MEAL_PICTURE.jpg/png...." //Replace this with the picture of the meal
break;

case 2:
document.getElementById("meal_name").innerHTML=x+", "+y+", "+random+""; //Replace this with the name of the meal
document.getElementById("meal_picture").src="MEAL_PICTURE.jpg/png...." //Replace this with the picture of the meal
break;

case 3:
document.getElementById("meal_name").innerHTML=x+", "+y+", "+random+""; //Replace this with the name of the meal
document.getElementById("meal_picture").src="MEAL_PICTURE.jpg/png...." //Replace this with the picture of the meal
break;

default:
alert("It shouldn't print this message");
}
break;

case "salty":
switch(random)
{
case 1:
document.getElementById("meal_name").innerHTML=x+", "+y+", "+random+""; //Replace this with the name of the meal
document.getElementById("meal_picture").src="MEAL_PICTURE.jpg/png...." //Replace this with the picture of the meal
break;

case 2:
document.getElementById("meal_name").innerHTML=x+", "+y+", "+random+""; //Replace this with the name of the meal
document.getElementById("meal_picture").src="MEAL_PICTURE.jpg/png...." //Replace this with the picture of the meal
break;

case 3:
document.getElementById("meal_name").innerHTML=x+", "+y+", "+random+""; //Replace this with the name of the meal
document.getElementById("meal_picture").src="MEAL_PICTURE.jpg/png...." //Replace this with the picture of the meal
break;

default:
alert("It shouldn't print this message");
}
break;

default:
alert("It shouldn't print this message");
}
break;

case "snack":
switch(y)
{
case "sweet":
switch(random)
{
case 1:
document.getElementById("meal_name").innerHTML=x+", "+y+", "+random+""; //Replace this with the name of the meal
document.getElementById("meal_picture").src="MEAL_PICTURE.jpg/png...." //Replace this with the picture of the meal
break;

case 2:
document.getElementById("meal_name").innerHTML=x+", "+y+", "+random+""; //Replace this with the name of the meal
document.getElementById("meal_picture").src="MEAL_PICTURE.jpg/png...." //Replace this with the picture of the meal
break;

case 3:
document.getElementById("meal_name").innerHTML=x+", "+y+", "+random+""; //Replace this with the name of the meal
document.getElementById("meal_picture").src="MEAL_PICTURE.jpg/png...." //Replace this with the picture of the meal
break;

default:
alert("It shouldn't print this message");
}
break;

case "salty":
switch(random)
{
case 1:
document.getElementById("meal_name").innerHTML=x+", "+y+", "+random+""; //Replace this with the name of the meal
document.getElementById("meal_picture").src="MEAL_PICTURE.jpg/png...." //Replace this with the picture of the meal
break;

case 2:
document.getElementById("meal_name").innerHTML=x+", "+y+", "+random+""; //Replace this with the name of the meal
document.getElementById("meal_picture").src="MEAL_PICTURE.jpg/png...." //Replace this with the picture of the meal
break;

case 3:
document.getElementById("meal_name").innerHTML=x+", "+y+", "+random+""; //Replace this with the name of the meal
document.getElementById("meal_picture").src="MEAL_PICTURE.jpg/png...." //Replace this with the picture of the meal
break;

default:
alert("It shouldn't print this message");
}
break;

default:
alert("It shouldn't print this message");
}
break;

default:
alert("This message should never show");

}
}
var x=localStorage.getItem("choice");
switch(x)
{
	case "lunch":
		window.document.location="./Barak_food3.html";
		break;
	case "dinner":
		window.document.location="./Barak_food4.html";
		break;
	case "msnack":
	case "snack":
		window.document.location="./Barak_food5.html";
		break;
	default:
		break;
}
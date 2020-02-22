function navigate()
{
	var x=document.forms.food_form.elements.Food.value;
	localStorage.setItem("choice",x);
}

function save()
{
	var x=document.forms.food_form2.elements.food.value;
	localStorage.setItem("option",x);
}
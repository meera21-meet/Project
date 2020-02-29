function first()
{
	var time1=document.getElementById("time1").value;
	var time2=document.getElementById("time2").value;
	var time3=document.getElementById("time3").value;
	var time4=document.getElementById("time4").value;
	var time5=document.getElementById("time5").value;
	var time6=document.getElementById("time6").value;
	var time7=document.getElementById("time7").value;
	var want=document.getElementById("want").value;
	//saving data from first page using localStorage
	localStorage.setItem("time1",time1);
	localStorage.setItem("time2",time2);
	localStorage.setItem("time3",time3);
	localStorage.setItem("time4",time4);
	localStorage.setItem("time5",time5);
	localStorage.setItem("time6",time6);
	localStorage.setItem("time7",time7);
	localStorage.setItem("want",want);
	var extra=0;
	
	var time_sum=Number(time1)+Number(time2)+Number(time3)+Number(time4)+Number(time5)+Number(time6);
	localStorage.setItem("time_sum",time_sum);

	if(time_sum<24)
		extra=24-time_sum;
	localStorage.setItem("extra",extra);
	if (time_sum>24)
	{
		window.document.location="./pre_final_time_choose_celine.html";
		alert("The amount of time you chose is greater than the amount of minutes in a day. You will be sent back to filling this page, this time make sure that the amount of time is real");
	}
	if (time_sum<=0 || want==="")
		window.document.location="./pre_final_time_choose_celine.html";
}

//In order for the elements in the second page to change according to this code you need to append the lines down below in the page below to HTML code
/*
	//these lines will apply to the second page. make sure to use the right ID names.
	<script>
		document.getElementById("second_time1").innerHTML=localStorage.getItem("time1");
		document.getElementById("second_time2").innerHTML=localStorage.getItem("time2");
		document.getElementById("second_time3").innerHTML=localStorage.getItem("time3");
		document.getElementById("second_time4").innerHTML=localStorage.getItem("time4");
		document.getElementById("second_time5").innerHTML=localStorage.getItem("time5");
		document.getElementById("second_time6").innerHTML=localStorage.getItem("time6");
		document.getElementById("second_time7").innerHTML=localStorage.getItem("time7");
		document.getElementById("second_want").innerHTML=localStorage.getItem("want");
	</script>
*/

/* EXAMPLE:
<html>
<head>
<title>my_title</title>
</head>
<body>
...
...
<p id=second_time1>Example that will get the value in "time1"</p>
...
...
<script>
	localStorage.setItem("time1",document.getElementById("time1").value);
	localStorage.setItem("time2",document.getElementById("time2").value);
	localStorage.setItem("time3",document.getElementById("time3").value);
	localStorage.setItem("time4",document.getElementById("time4").value);
	localStorage.setItem("time5",document.getElementById("time5").value);
	localStorage.setItem("time6",document.getElementById("time6").value);
	localStorage.setItem("time7",document.getElementById("time7").value);
	localStorage.setItem("want",document.getElementById("want").value);
</script>
</body>
</html>
*/
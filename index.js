$(document).ready(function(){
  $("#search").click(function(){
    $("#data").slideDown("fast");
  });
});
    document.getElementById('search').addEventListener('click',loaddata);
    function loaddata(){

      var d= new Date();
      var format='';
     var hour=d.getHours();
     var minutes=d.getMinutes();

    if(hour<12){
      format="AM";
    }
    else{
      format="PM";
    }
    if(hour==0){
      hour=12;
    }
    if(hour>12){
      hour=hour-12;
    }
      document.getElementById('date').innerHTML=(d.toDateString()+","+hour+":"+minutes+""+format);
    var cities=document.getElementById('city').value;
      var xhr=new XMLHttpRequest();
    xhr.open("GET", "https://api.openweathermap.org/data/2.5/weather?q="+cities+"&appid=4ca26e3d900150300ea2391922d9349d" ,true);
    xhr.send();

     xhr.onload=function(){
    if(this.status==200&&this.readyState==4){
    var x=JSON.parse(this.responseText);
    var a=x.main.temp;
    var b=x.main.temp_min;
    var c=x.main.temp_max;
    var d=x.weather[0].description;
    document.getElementById('weather').innerHTML=x.weather[0].description;
    document.getElementById('cityname').innerHTML=x.name+","+x.sys.country;
     var d=a-273.15;
    document.getElementById('temp').innerHTML=d.toFixed(2)+'&#176;C';
    var e=b-273;
    document.getElementById('tempmin').innerHTML="Min"+"&nbsp;"+e.toFixed(2)+'&#176;C'+"&nbsp;"+'&#8739'+"&nbsp;";
    var f=c-273.15;
    document.getElementById('tempmax').innerHTML="&nbsp;"+"Max"+"&nbsp;"+f.toFixed(2)+'&#176;C';

   }
    }
  }

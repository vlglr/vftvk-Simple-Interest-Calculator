function gebi(x) {
  return document.getElementById(x);
}

function compute() {
    p = document.getElementById("principal").value;
    
    if(p<=0) {
      alert("Enter a positive number");
      gebi('myrez').style.display='none';
      document.getElementById("principal").focus();
      
      return
    }
    var result1 = document.getElementById("result1");
    result1.innerHTML = p;
    var result2 = document.getElementById("result2");
    result2.innerHTML = document.getElementById("rateval").innerHTML;
    var result4 = document.getElementById("result4");
    var years2 = document.getElementById("years2");
    result4.innerHTML = new Date().getFullYear() + Number(years2.value);
    var result3 = document.getElementById("result3");
    result3.innerHTML = Number(p) * Number(document.getElementById("myRange").value) * Number(years2.value) * 0.01;

}

function myrate() {
  var slider = document.getElementById("myRange");
  var rateval = document.getElementById("rateval");
  rateval.innerHTML = slider.value + "%";
}

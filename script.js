function compute()
{
    p = document.getElementById("principal").value;
    
}

var slider = document.getElementById("myRange");
var rangeval = document.getElementById("rangeval");

rangeval.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
} 

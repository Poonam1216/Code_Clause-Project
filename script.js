
let i, tabcontent, tablinks;
tabcontent = document.getElementsByClassName("tabcontent");
tablinks = document.getElementsByClassName("tablinks");
function openPage(evt, pageName){
    
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
      }
     
      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
      }
      document.getElementById(pageName).style.display = "block";
      evt.currentTarget.className += " active";
}

window.onload = function() {
    tabcontent[0].style.display = "block";
  };
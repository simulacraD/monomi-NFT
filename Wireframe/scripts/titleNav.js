/* bottom scroll away nav */  
/* When the user scrolls down, hide the nav button. When the user scrolls up, show the nav button */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("bottomNavGrid").style.bottom = "60px";
  } else {
    document.getElementById("bottomNavGrid").style.bottom = "-121px"; /* =-1(element height +1) */
  }
  prevScrollpos = currentScrollPos;
}

/* Set the height of the nav overlay to open*/
function openNav() {
  document.getElementById("navOverlay").style.height = "100%";
}
  
/* Set the height of the nav overlay to close */
function closeNav() {
  document.getElementById("navOverlay").style.height = "0";
}
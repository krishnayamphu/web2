function hideNav() {
  const nav = document.getElementById("sideNav");
  nav.style.display = "none";
  document.getElementById("btnopen").style.display = "block";
  document.getElementById("btnclose").style.display = "none";
}

function showNav() {
  document.getElementById("btnopen").style.display = "none";
  document.getElementById("btnclose").style.display = "block";
  const nav = document.getElementById("sideNav");
  nav.style.display = "block";
}
document.getElementById("btnclose").style.display = "none";

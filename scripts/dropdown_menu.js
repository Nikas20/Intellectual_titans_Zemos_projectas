"use strict";

function showDropdown() {
  document.getElementById("dropdown");
  if (dropdown.style.display === "none") {
    dropdown.style.display = "flex";
  } else {
    dropdown.style.display = "none";
  }
}

function hideDropdown() {
  document.getElementById("dropdown");
 dropdown.style.display = "none";
}

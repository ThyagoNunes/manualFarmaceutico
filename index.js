const targetDiv = document.getElementById("divSection");
const targetDiv2 = document.getElementById("divSection2");
const targetDiv3 = document.getElementById("divSection3");
const btn = document.getElementById("toggle");
const btn2 = document.getElementById("toggle2");
const btn3 = document.getElementById("toggle3");

btn.onclick = function () {
  if (targetDiv.style.display !== "none") {
    targetDiv.style.display = "none";
  } else {
    targetDiv.style.display = "block";
  }
};

btn2.onclick = function () {
  if (targetDiv2.style.display !== "none") {
    targetDiv2.style.display = "none";
  } else {
    targetDiv2.style.display = "block";
  }
};

btn3.onclick = function () {
  if (targetDiv3.style.display !== "none") {
    targetDiv3.style.display = "none";
  } else {
    targetDiv3.style.display = "block";
  }
};

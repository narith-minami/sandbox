document.getElementById("app").innerHTML = `
<h1>Hello Parcel!</h1>
<div>
  Look
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>
  for more info about Parcel.
</div>
`;

var $button = document.getElementById("go-button");
$button.addEventListener("click", click, false);

function click() {
  alert("ボタンを押しましたね！");
}

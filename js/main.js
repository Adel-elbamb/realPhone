
let cricle = document.querySelector("#cricle");
let up = document.querySelector("#up");
let down = document.querySelector("#down");
console.log(cricle);
  let rotate = cricle.style.transform="rotate(-90deg)";
  let rotateSum ;
// up click 
up.onclick = function () {
  rotateSum = rotate + "rotate(-90deg)";
  cricle.style.transform=rotateSum;
  rotate = rotateSum;
}

// down click

down.onclick = function () {
    rotateSum = rotate + "rotate(90deg)";
    cricle.style.transform=rotateSum;
    rotate = rotateSum;
  }


// Your code here
const dodger = document.getElementById("dodger")

function moveDodgerLeft() {
    // console.log(dodger.style.left.replace("px", ""))
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
        console.log(dodger.style.left)
      dodger.style.left = `${left - 1}px`;
      console.log(dodger.style.left)
    }
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  });

//   moveDodgerLeft()

  function moveDodgerRight() {
      const rightNumbers = dodger.style.left.replace("px", "");
      const right = parseInt(rightNumbers, 10);

      if (right < 360) {
          dodger.style.left = `${right + 1}px`;
      }
  }

  document.addEventListener("keydown", function (e) {
      console.log(e.key)
      if (e.key === "ArrowRight") {
          moveDodgerRight();
      }
  });

//   moveDodgerRight()
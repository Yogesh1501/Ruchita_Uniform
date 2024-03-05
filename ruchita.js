function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  
  
  // document.getElementById("see-more-btn").addEventListener("click", function() {
  //   var images = document.querySelectorAll(".image");
  //   for (var i = 0; i < images.length; i++) {
  //     images[i].style.display = "block";
  //   }
  //   this.parentNode.removeChild(this);
  // });




  
  document.addEventListener("DOMContentLoaded", function() {
    const boxes = document.querySelectorAll('.box-hd');
    let index = 0;

    function showBox() {
      if (index >= boxes.length) {
        index = 0; // Reset index when it reaches the end
      }

      // Fade out all boxes
      boxes.forEach(box => {
        box.style.opacity = 0;
      });

      // Fade in current box
      boxes[index].style.opacity = 1;
      index++;

      setTimeout(showBox, 2000); // Adjust the delay between each box here
    }

    setTimeout(function() {
      document.querySelector('.content-hd').style.opacity = 1; // Fade in content
      showBox();
    }, 500); // Delay for content to appear
  });
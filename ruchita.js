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





  var images = ['./img/Ruchita.png', './img/School_Bag.jpeg', './img/home_boy1.jpg', './img/home_girl2.jpg'];
  var currentIndex = 0;

  // Function to change the background image
  function changeBackground() {
    // Set the background image
    document.getElementById('bgContainer').style.backgroundImage = "url('" + images[currentIndex] + "')";
    
    // Increment the index for the next image
    currentIndex = (currentIndex + 1) % images.length;
    
    // Schedule the next change after 2 seconds
    setTimeout(changeBackground, 2000);
  }

  // Call the function to start the background image change cycle
  setTimeout(changeBackground, 2000);









  // Find the button by its ID
  const exploreButton = document.getElementById('exploreButton');

  // Add a click event listener to the button
  exploreButton.addEventListener('click', function() {
    // Redirect to another page when the button is clicked
    window.location.href = './Services.html'; // Replace 'services-page.html' with the actual URL of the services page
  });
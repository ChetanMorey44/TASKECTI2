setInterval(() => {
    const now = new Date();
    document.getElementById("timeDisplay").textContent = "Current Time: " + now.toLocaleTimeString();
  }, 1000); // Updates every 1 second

  $(document).ready(function(){
    $(".btn11").click(function(){
      $("#No1").slideToggle(1000);
    })
  })
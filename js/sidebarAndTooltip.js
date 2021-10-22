let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let searchBtn = document.querySelector(".bx-search");
//inicio tooltips
let tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
let tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return (
    new bootstrap.Tooltip(tooltipTriggerEl),{

        trigger: "hover",
    }
  );
});

/* 
  console.log(tooltipTriggerList);
  console.log(tooltipList);

  tooltipTriggerList.addEventListener('hidden.bs.tooltip', menuBtnChange);

  tooltipList.hide(); */

/* tooltipList.forEach(tolltip => {
      tolltip.addEventListener('hidden.bs.tooltip', menuBtnChange);
      tooltipList.hide();
  }); */

/* var myTooltipEl = document.getElementById('myTooltip')
  var tooltip = new bootstrap.Tooltip(myTooltipEl)
  
  myTooltipEl.addEventListener('hidden.bs.tooltip', function () {
    // do something...
  })
  
  tooltip.hide()
 */
/* Enable Tooltips */
/*  $(function () {
      $('[data-toggle="tooltip"]').tooltip({
        trigger: "hover",
      });
    
      $('[data-toggle="tooltip"]').on("click", function () {
        $(this).tooltip("hide");
      });
    });   */
    
   

closeBtn.addEventListener("click", () => {
  sidebar.classList.toggle("show");
  sidebar.classList.toggle("shrink");
  menuBtnChange(); //calling the function(optional)
   hideTooltip();  
});

// following are the code to change sidebar button(optional)
function menuBtnChange() {
  if (sidebar.classList.contains("show")) {
    closeBtn.classList.replace("bx-menu", "bx-menu-alt-right"); //replacing the iocns class
  } else {
    closeBtn.classList.replace("bx-menu-alt-right", "bx-menu"); //replacing the iocns class
  }
}




 function hideTooltip() {
    console.log(tooltipTriggerList);
    console.log(tooltipList);
    tooltipTriggerList.forEach(tolltip => {
         let instance = bootstrap.Tooltip.getOrCreateInstance(tolltip);
        console.log(instance);
        instance.hide(); 
      });
}  
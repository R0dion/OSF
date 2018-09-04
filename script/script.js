var list = $('.line');
var grid = $('.grid');
var flexContainer = $('.flex-containerall');
var star = $('.staricon');
var cart = $('.carticon');
var clickStar = $('#clickstar');
var clickCart = $('#clickcart');
var countStar = 0;
var countCart = 0;
var menu = $('#menu');
var leftMenu = $('#leftmenu');


function searchFunction() {
    if (document.getElementById("searchbar").style.display == "none")
    {document.getElementById("searchbar").style.display = "inline-block"}
    else {document.getElementById("searchbar").style.display = "none"}
};

menu.click(function () {
  if (leftMenu.css("display") === "none")
  {leftMenu.css("display", "inline-block")}
  else {leftMenu.css("display", "none")}
  
});



function faderBlog() {
    $(".col3 p").fadeOut(5000, function() {
      $(this).html("NANDO PAPPALARDO Vivamus metus turpis, bibendum vitae euismod vel, vulput").fadeIn(5000);
    });
  }
setInterval(faderBlog, 5000);

function faderTwitter() {
    $(".wid2 p").fadeOut(5000, function() {
      $(this).html("<span>@roymarvelous</span> You can seek a refund through TF if it is not as advertised - but it is :)<br>21 days ago").fadeIn(5000);
    });
  }
setInterval(faderTwitter, 5000);


star.click(function () {
    countStar += 1;
clickStar.text(countStar);
  
})

cart.click(function () {
  countCart += 1;
  clickCart.text(countCart);

})



list.click(function () {
  flexContainer.css("flex-direction", "column");
  
})

grid.click(function () {
  flexContainer.css("flex-direction", "row");
  
})
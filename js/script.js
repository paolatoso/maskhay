$(function () { 
  $("#navbarToggle").blur(function (event) {
    var screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      $("#navegacion").collapse('hide');
    }
  });

  
  $("#navbarToggle").click(function (event) {
    $(event.target).focus();
  });
});



(function (global) {

var mw = {};

var homeHtml = "snippets/home-snippet.html";
    
var insertHtml = function (selector, html) {
  var targetElem = document.querySelector(selector);
  targetElem.innerHTML = html;
};


var showLoading = function (selector) {
  var html = "<div class='text-center'>";
  html += "<img src='imagenes/ajax-loader.gif'></div>";
  insertHtml(selector, html);
};


var insertProperty = function (string, propName, propValue) {
  var propToReplace = "{{" + propName + "}}";
  string = string
    .replace(new RegExp(propToReplace, "g"), propValue);
  return string;
}


document.addEventListener("DOMContentLoaded", function (event) {


showLoading("#main-content");
$ajaxUtils.sendGetRequest(
  homeHtml,
  function (responseText) {
    document.querySelector("#main-content")
      .innerHTML = responseText;
  },
  false);
});
    
    
    
})(window);
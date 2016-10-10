$("#results").hide();

$("#searchInput").keyup(function(event) {
  if (event.keyCode == 13) {
    $("#search").click();
  }
});

$(document).ready(function(){
  $('#search').click(function(){
    var searchInput = $("#searchInput").val();
    var URL = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+searchInput+"&format=json&callback=?";
    
    $.ajax({
      type: 'GET',
      url: URL,
      dataType: 'json',
      success: function(data){
        $("#search").click(function(){
          $.scrollTo($('#results'),500);
        });
        $("#results").fadeIn();
        $("#results").html("");
      
        for(var i = 0; i < data[1].length; i++){
          $("#results").append("<li><a href="+data[3][i]+">"+data[1][i]+"</a><p>"+data[2][i]+"</p></li>");
        }
      },
      error: function(errorMessage){
        alert('Error');
      }
    });
  });
});
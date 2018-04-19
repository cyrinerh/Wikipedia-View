$(function() {
  $("#searchTerm").keypress(function(e){
    if(e.key !== "Enter")
      return
    getData();
  });
// click ajax call
$("#search").on("click", getData);
});
function getData() {
  var searchTerm = $("#searchTerm").val();
  var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+ searchTerm +"&format=json&callback=?"; 
  $.ajax({
    url: url,
    type: 'GET',
    contentType: "application/json; charset=utf-8",
    async: false,
    dataType: "json",
    success: function(data) {
      console.log(data)
      $("#output").html();
      for(var i=0;i<data[1].length;i++){
        let title = data[1][i]
        let snippet = data[2][i]
        let link = data[3][i]
        $("#output").prepend("<div><div class='well'><a href="+ link +"><h2>" + title+ "</h2>" + "<p>" + snippet + "</p></a></div></div>");
      }
    }
  })

}
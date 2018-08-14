$("#count").text($("h6").length);

$("i").on("click",
  function() {
      $(this).parent().remove();
      $("#count").text($("h6").length);
    }
)

$("#btn-add").on("click",
  function(){
    $(".asset-list").append('<div class="asset"><img class="avatar" src="asset/avatar-1.jpg" alt="avatar"><div><h6>Noel</h6><p>'+$("#add-message").val()+'</p></div><i class="fa fa-trash"></i></div>');

    $("i").on("click",
      function() {
          $(this).parent().remove();
          $("#count").text($("h6").length);
        }
    )
    $('#add-message').val("");
    $("#count").text($("h6").length);
  }
)


$("#btn-search").click(
  function(){
    $("h6").each(
      function(){

        if($("#search-message").val().length>0 && $(this).text() != $("#search-message").val()) {
           $(this).parent().parent().fadeOut();
        }
      }
    )
  }
)

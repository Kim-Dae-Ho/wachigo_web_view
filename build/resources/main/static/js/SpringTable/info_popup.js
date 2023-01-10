//$(function(){
  $("#confirm").click(function(){
      modalClose();
      //컨펌 이벤트 처리
  });
  $("#modal-open").click(function(){
    $("h1").text("실험용");
    $("p").text("실험용2");
    $("#popup").css('display','flex').hide().fadeIn();
  });

  function modal(title, address_name, mini_menu){
      if(mini_menu == "0"){
          $("h1").text(title);
          $("p").text(address_name);
          $("#popup").css('display','flex').hide().fadeIn();
      }


  }

  $("#close").click(function(){
      modalClose();
  });
  function modalClose(){
    $("#popup").fadeOut();
  }
//});
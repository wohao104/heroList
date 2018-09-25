$(function(){
  function getAllHero(){
    $.ajax({
      type: "get",
      url: "http://127.0.0.1:5001/getAllHero",
      dataType: "json",
      success: function (response) {
        console.log(response);
        
        var html = template('heroList', response)
        $('#roll').html(html)
      }
    });
  }
  getAllHero();

  $('#addhero').on('click', function(){
    $('.ui.modal').modal('show');
  })
  $('.ui.dropdown').dropdown()
  $('#confirm').on('click', function(){
    var data = $('form').serialize();
    $.ajax({
      type: "post",
      url: "http://127.0.0.1:5001/addHero",
      data: data,
      dataType: "json",
      success: function (response) {
        if (response.status === 200) {
          getAllHero()
        }
      }
    });
    
  })

})
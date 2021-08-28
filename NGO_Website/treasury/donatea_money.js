$('#card-number').on('keypress change blur', function () {
    $(this).val(function (index, value) {
      return value.replace(/[^a-z0-9]+/gi, '').replace(/(.{4})/g, '$1 ');
    });
  });
  
  $('#card-number').on('copy cut paste', function () {
    setTimeout(function () {
      $('#card-number').trigger("change");
    });
  });
  
  $('#card-exp').on('input',function(){
      var curLength = $(this).val().length;
      if(curLength === 2){
         var newInput = $(this).val();
          newInput += '/';
          $(this).val(newInput);
      }
  });
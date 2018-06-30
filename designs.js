// Select color input
// Select size input

let height,width,color;

// When size is submitted by the user, call makeGrid()

    $('#sizePicker').submit(function(event){
        event.preventDefault();
        // gridheight and gridwidth generated for selected height and width
        let height = $('#inputHeight').val();
        let width = $('#inputWeight').val();
        //call make grid()
        makeGrid(height,width)
    })

    function makeGrid(x,y){
        $('tr').remove();
        for (var i = 1; i <= x; i++) {

    $("#pixelCanvas").append('<tr id=table' + i + '></tr>');

    for (var j = 1; j <= y; j++) {
      $("#table" + i).append('<td></td>');
    }
  }
        $('td').click(function addColor(){
            //select color value
            color = $('#colorPicker').val();
            if($(this).attr('style')){
                $(this).removeAttr('style');
            }else{
                $(this).attr('style','background-color:' + color);
            }
        })
    }




jQuery(document).ready(function() {
	// Avatar Upload
    var readURL = function(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('.profile-pic').attr('src', e.target.result);
            }
    
            reader.readAsDataURL(input.files[0]);
        }
    }
   
    $(".file-upload").on('change', function(){
        readURL(this);
    });
    
    $(".upload-button").on('click', function() {
       $(".file-upload").click();
    });

    // Btn back
    $('.btn#back').on('click', function(e){
        e.preventDefault();
        window.history.back();
    });

    // Btn Tipzz
    $('#tipzz-option-1, #tipzz-option-2, #tipzz-option-3, #tipzz-option-4').on('click', function(e) {
        e.preventDefault();
        $('#tipzz-summ-val').val($(this).text());
    });

    $('#tipzz-summ-val-clear').on('click', function(e){
        e.preventDefault();
        $('#tipzz-summ-val').val('');
    });
});
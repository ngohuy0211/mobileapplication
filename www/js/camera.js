$(document).ready(function(){
    function accessCamera() {
        navigator.camera.getPicture(
            function(result) {
                document.getElementById('image').src = result
            }, function(error) {
                alert(error)
            }, {  
            sourceType: Camera.PictureSourceType.CAMERA,
            saveToPhotoAlbum: true,
            allowEdit: true 
         });
    }
    $(document).on('click', "#btnCamera", accessCamera)
})
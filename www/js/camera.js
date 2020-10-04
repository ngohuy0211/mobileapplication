$(document).ready(function(){
    function accessCamera() {
        navigator.camera.getPicture(
            function(result) {
                alert(result)
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
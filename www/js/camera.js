$(document).ready(function(){
    function camSuccess(imgData) {
        $('#myImage').attr('src', "data:image/jpeg;base64," + imgData)
    }
    function camError (err) {
        alert(err)
    }
    function accessCamera() {
        navigator.camera.getPicture(camSuccess, camError, {  
            quality: 50, 
            destinationType: Camera.DestinationType.DATA_URL 
         });
    }
    $(document).on('click', "#btnCamera", accessCamera)
})
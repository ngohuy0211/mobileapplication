$(document).ready(function(){
    function camSuccess(imgData) {
        var image = document.getElementById('myImage'); 
        image.src = "data:image/jpeg;base64," + imageData;
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
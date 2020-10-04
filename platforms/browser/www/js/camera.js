$(document).ready(function(){
    function camSuccess(imgData) {
        $('#image_camera').attr("src", imgData)
        $('#srcImg').setText(imgData)
    }
    function camError (err) {
        alert(err)
    }
    function accessCamera() {
        let options = {
            descriptionType: Camera.DestinationType.FILE_URI,
            sourceType: Camera.PictureSourceType.Camera
        }
        navigator.camera.getPicture(camSuccess, camError, options)
    }
    document.getElementById("btnCamera").addEventListener('click', accessCamera)
})
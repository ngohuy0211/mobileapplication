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
            quality: 50,
            descriptionType: Camera.DestinationType.FILE_URI,
            sourceType: Camera.PictureSourceType.PHOTOLIBRARY
        }
        navigator.camera.getPicture(camSuccess, camError, options)
    }
    $(document).on('click', "#btnCamera", () => {
        accessCamera()
    })
})
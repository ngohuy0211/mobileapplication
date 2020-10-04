$(document).ready(function(){
    function camSuccess(imgData) {
        $('#image_camera').attr("src", imgData)
        $('#srcImg').setText(imgData)
    }
    function camError (err) {
        alert(err)
    }
    function accessCamera() {
        navigator.camera.getPicture(onSuccess, onFail, {  
            quality: 50, 
            destinationType: Camera.DestinationType.DATA_URL 
         });
    }
    $(document).on('click', "#btnCamera", () => {
        accessCamera()
    })
})
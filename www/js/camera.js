$(document).ready(function(){
    function camSuccess(imgData) {
       $("#imageCamera").append(`<img id="#image_camera" src="data:image/jpeg;base64 +${imgData}" alt="Generic placeholder image" width="200" class="ml-lg-5 order-1 order-lg-2">
       <p id="srcImg">${imgData}</p>`);
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
    $(document).on('click', "#btnCamera", () => {
        accessCamera()
    })
})
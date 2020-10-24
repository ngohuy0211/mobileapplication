function playMedia(url) {
    const media = new Media(url)
    media.play()
    media.setVolume('6.0')
}
function LoadHome(){
    const resType = getAllData("Irate")
    const newContent = ` <div class="row" data-role="listview" id="pageContent">
    <div class="container py-5">
        <div class="row text-center mb-5">
            <div class="col-lg-7 mx-auto">
                <h5 class="display-4">Restaurant List</h5>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-8 mx-auto">
                <!-- List group-->
                <ul class="list-group shadow" id="list_rest">
                    <!-- list group item-->        
                </ul> <!-- End -->
            </div>
        </div>
    </div>`
    $('#content').empty().append(newContent)
    resType.onsuccess = (event) => {
        const results = event.target.result
        for(var i in results) {
            let html =`<li class="list-group-item m-2 rounded">
        <!-- Custom content-->
        <div class="media align-items-lg-center flex-column flex-lg-row p-3" >
            <div class="media-body order-2 order-lg-1">
                <h5 class="mt-0 font-weight-bold mb-2">${results[i].res_name}</h5>
                <p class="font-italic text-muted mb-0 small">${results[i].res_type}</p>
                <div class="d-flex align-items-center justify-content-between mt-1">
                    <h6 class="font-weight-bold my-2">${results[i].owner}</h6>
                    <div></div>
                    <table class="ml-6">
                        <tr>
                            <th style="background-color:#33cc33">Service<th>
                            <td>
                                ${results[i].service_rate}
                            <td>
                        </tr>
                        <tr>
                            <th style="background-color:#9933ff">Clean<th>
                            <td>    
                            ${results[i].clean_rate}
                            <th>
                        </tr>
                        <tr>
                            <th style="background-color:#ffcc00">Food<th>
                            <td>
                            ${results[i].food_rate}
                            <th>
                        </tr>
                    </table>
                </div>
                <button class="btn btn-danger" rateId="${results[i].id}" id="delete_rate"><i class="fa fa-trash-o" aria-hidden="true"></i></button>
            </div>
            <img src="" alt="Generic placeholder image" width="200" class="ml-lg-5 order-1 order-lg-2">
        </div> <!-- End -->
            </li> <!-- End -->`
            $('#list_rest').append(html);
        }
    }
 }
function LoadAdd(){
    playMedia('../media/beyond-doubt-2-581.mp3')
    let content = $('#content')
    const newContent = `
    <h2>Rated</h2>
    <form id="rate">
        <div >
            <div class="form-group">
                <label>Your name</label>
                <input type="text" class="form-control"  placeholder="Enter your name" id="owner_name" required pattern="^(?=[a-zA-Z]{3,20}$)(?!.*[_.]{2})[^_.].*[^_.]$" title="Please only enter text">
            </div>
            <div class="form-group">
                <label>Your phone</label>
                <input type="text" class="form-control" placeholder="Enter your phone" id="owner_phone"  required>
            </div>
            <div class="form-group">
                <label>Restaurant name</label>
                <input type="text" class="form-control"  placeholder="Enter restaurant name" id="restaurant_name">
            </div>
            <div class="form-group">
                <label>Restaurant type</label>
                <input  id="res-types"  list= "res-type" type="text" required/>
                <datalist id="res-type">
                    <option value="Grill">
                    <option value="Fast food">
                    <option value="Cake">
                    <option value="Seafood">
                </datalist>
            </div>
            <div class="form-group">
                <label>Restaurant address</label>
                <input type="text" class="form-control"  placeholder="Enter restaurant address" id="res_address" required>
            </div>
            <div class="form-group" id="image_upload">
                <label>Image</label>
                <input type="file" id="files" name="files" multiple capture>
            </div>
            <div class="form-group">
                <label>Service</label>
                <input list="services"  id="service_rate"  type= "text" required>
                    <datalist id="services">
                        <option value="Bad">
                        <option value="Normal">
                        <option value="Rather">
                        <option value="Good">
                        <option value="Excellent">
                    </datalist>
            </div>
            <div class="form-group">
                <label>Cleanliness</label>
                <input list="cleans"  id="clean_rate" type = "text"required>
                <datalist id="cleans">
                        <option value="Bad">
                        <option value="Normal">
                        <option value="Rather">
                        <option value="Good">
                        <option value="Excellent">
                </datalist>
            </div>
            <div class="form-group">
                <label>Food quality</label>
                <input list="foods"  id="food_rate" type = "text"required>
                    <datalist id="foods">
                        <option value="Bad">
                        <option value="Normal">
                        <option value="Rather">
                        <option value="Good">
                        <option value="Excellent">
                    </datalist>
            </div>
            <div class="form-group">
                <label>Day and time of visit</label>
                <input type="date" class="form-control" id="date" required>
                <input type="time" class="form-control"  id="time" required>
            </div>
            <div class="form-group">
            <label >Notes</label>
            <textarea class="form-control" id="notes" rows="3"></textarea>
        </div>
        <button type ="submit" class="btn btn-success">Post</button>
        </div>
    </form>`
    content.empty().append(newContent)
}
function LoadSearch(){
    let content = $('#content')
    const newContent= ` <form class="form-inline d-flex justify-content-center md-form form-sm active-cyan-2 mt-2" id="searchForm">
        <input class="form-control form-control-sm mr-3 w-75" type="text" placeholder="Search"
          aria-label="Search" id="keySearch">
          <button type="button" class="btn btn-primary" id="searchBtn"><i class="fa fa-search" aria-hidden="true"></i></button>
      </form>
      <div class="row" data-role="listview" id="pageContent">
       <div class="container py-5">
           <div class="row text-center mb-5">
               <div class="col-lg-7 mx-auto">
                   <h5 class="display-4">Result</h5>
               </div>
           </div>
           <div class="row">
               <div class="col-lg-8 mx-auto">
                   <!-- List group-->
                   <ul class="list-group shadow">
                   </ul>
               </div>
           </div>
       </div>`
       content.empty().append(newContent)

}
$( window ).on( "load", function () {
   LoadHome()
});
$(document).ready(function (){
    let content = $('#content')
    $(document).on('click', "#home", ()=>{
        playMedia('../media/beyond-doubt-2-581.mp3')
        LoadHome()
    })
    $(document).on('click', "#search", ()=>{
        playMedia('../media/beyond-doubt-2-581.mp3')
        LoadSearch()
    })
    $(document).on('click', '#add', ()=>{
        LoadAdd()
        $('#files').on('change', function(event){
            console.log(event.target.files)
        })
        $('#rate').on('submit', ()=>{
            const rate = {
                owner: $('#owner_name').val().trim(),
                owner_phone: $('#owner_phone').val().trim(),
                res_name: $('#restaurant_name').val().trim(),
                res_type: $('#res-types').val().trim(),
                res_address: $('#res_address').val().trim(),
                service_rate: $('#service_rate').val().trim(),
                clean_rate: $('#clean_rate').val().trim(),
                food_rate: $('#food_rate').val().trim(),
                date_visited: $('#date').val() + " " + $('#time').val(),
                notes: $('#notes').val(),
            }
            addData("Irate", rate)

        })
    })
      
    $(document).on('click', '#delete_rate', function () {
        const rateid =  $(this).attr("rateId")
       DeleteData(rateid)
    })
    $(document).on('click', '#searchBtn', ()=>{
        const keySearch = $('#keySearch').val().toString()
        const result = Search(keySearch)
        result.onsuccess = (event) =>{
            // const searchResult = event.target.result
            console.log(event.target.result)
        }
    })
})
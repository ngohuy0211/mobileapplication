$( window ).on( "load", function () {
    const resType = getAllData("Irate")
    const newContent = ` <div class="row" data-role="listview" id="pageContent">
    <div class="container py-5">
        <div class="row text-center mb-5">
            <div class="col-lg-7 mx-auto">
                <h5 class="display-4">Product List</h5>
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
    $('#content').append(newContent)
    resType.onsuccess = (event) => {
        const results = event.target.result
        for(var i = 0; i < results.length; i++) {
            let html =`<li class="list-group-item m-2 rounded">
        <!-- Custom content-->
        <div class="media align-items-lg-center flex-column flex-lg-row p-3">
            <div class="media-body order-2 order-lg-1">
                <h5 class="mt-0 font-weight-bold mb-2">${results[i].res_name}</h5>
                <p class="font-italic text-muted mb-0 small">${results[i].res_type}</p>
                <div class="d-flex align-items-center justify-content-between mt-1">
                    <h6 class="font-weight-bold my-2">${results[i].owner}</h6>
                    <table>
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
                    <ul class="list-inline small">
                    
                    </ul>
                </div>
                <button class="btn btn-danger"><i class="fa fa-trash-o" aria-hidden="true"></i></button>
            </div>
            <img src="${results[i].image[0]}" alt="Generic placeholder image" width="200" class="ml-lg-5 order-1 order-lg-2">
        </div> <!-- End -->
            </li> <!-- End -->`
            $('#list_rest').append(html);
        }
    }
});
$(document).ready(function (){
    let content = $('#content')
    $(document).on('click', "#home", ()=>{
        const resType = getAllData("Irate")
        const newContent = ` <div class="row" data-role="listview" id="pageContent">
        <div class="container py-5">
            <div class="row text-center mb-5">
                <div class="col-lg-7 mx-auto">
                    <h5 class="display-4">Product List</h5>
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
        $('#content').append(newContent)
        resType.onsuccess = (event) => {
            const results = event.target.result
            for(var i = 0; i < results.length; i++) {
                let html =`<li class="list-group-item m-2 rounded">
            <!-- Custom content-->
            <div class="media align-items-lg-center flex-column flex-lg-row p-3">
                <div class="media-body order-2 order-lg-1">
                    <h5 class="mt-0 font-weight-bold mb-2">${results[i].res_name}</h5>
                    <p class="font-italic text-muted mb-0 small">${results[i].res_type}</p>
                    <div class="d-flex align-items-center justify-content-between mt-1">
                        <h6 class="font-weight-bold my-2">${results[i].owner}</h6>
                        <table>
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
                        <ul class="list-inline small">
                        
                        </ul>
                    </div>
                    <button class="btn btn-danger"><i class="fa fa-trash-o" aria-hidden="true"></i></button>
                </div>
                <img src="${results[i].image[0]}" alt="Generic placeholder image" width="200" class="ml-lg-5 order-1 order-lg-2">
            </div> <!-- End -->
                </li> <!-- End -->`
                $('#list_rest').append(html);
            }
        }
        content.empty().append(newContent)
    })
    $(document).on('click', "#search", ()=>{
        const newContent= ` <form class="form-inline d-flex justify-content-center md-form form-sm active-cyan-2 mt-2" id="searchForm">
        <input class="form-control form-control-sm mr-3 w-75" type="text" placeholder="Search"
          aria-label="Search">
          <button type="button" class="btn btn-primary"><i class="fa fa-search" aria-hidden="true"></i></button>
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
                       <!-- list group item-->
                       <li class="list-group-item m-2 rounded">
                           <!-- Custom content-->
                           <div class="media align-items-lg-center flex-column flex-lg-row p-3">
                               <div class="media-body order-2 order-lg-1">
                                   <h5 class="mt-0 font-weight-bold mb-2">Apple iPhone XR (Red, 128 GB)</h5>
                                   <p class="font-italic text-muted mb-0 small">128 GB ROM | 15.49 cm (6.1 inch) Display 12MP Rear Camera | 7MP Front Camera A12 Bionic Chip Processor</p>
                                   <div class="d-flex align-items-center justify-content-between mt-1">
                                       <h6 class="font-weight-bold my-2">₹64,999</h6>
                                       <ul class="list-inline small">
                                           <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
                                           <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
                                           <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
                                           <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
                                           <li class="list-inline-item m-0"><i class="fa fa-star-o text-gray"></i></li>
                                       </ul>
                                   </div>
                               </div><img src="https://i.imgur.com/KFojDGa.jpg" alt="Generic placeholder image" width="200" class="ml-lg-5 order-1 order-lg-2">
                           </div> <!-- End -->
                       </li> <!-- End -->
                       <!-- list group item-->
                       <li class="list-group-item m-2 rounded">
                           <!-- Custom content-->
                           <div class="media align-items-lg-center flex-column flex-lg-row p-3">
                               <div class="media-body order-2 order-lg-1">
                                   <h5 class="mt-0 font-weight-bold mb-2">Apple iPhone XS (Silver, 64 GB)</h5>
                                   <p class="font-italic text-muted mb-0 small">64 GB ROM | 14.73 cm (5.8 inch) Super Retina HD Display 12MP + 12MP | 7MP Front Camera A12 Bionic Chip Processor</p>
                                   <div class="d-flex align-items-center justify-content-between mt-1">
                                       <h6 class="font-weight-bold my-2">₹99,900</h6>
                                       <ul class="list-inline small">
                                           <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
                                           <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
                                           <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
                                           <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
                                           <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
                                       </ul>
                                   </div>
                               </div><img src="https://i.imgur.com/KFojDGa.jpg" alt="Generic placeholder image" width="200" class="ml-lg-5 order-1 order-lg-2">
                           </div> <!-- End -->
                       </li> <!-- End -->
                       <!-- list group item -->
                       <li class="list-group-item m-2 rounded">
                           <!-- Custom content-->
                           <div class="media align-items-lg-center flex-column flex-lg-row p-3">
                               <div class="media-body order-2 order-lg-1">
                                   <h5 class="mt-0 font-weight-bold mb-2">OnePlus 7 Pro (Almond, 256 GB)</h5>
                                   <p class="font-italic text-muted mb-0 small">Rear Camera|48MP (Primary)+ 8MP (Tele-photo)+16MP (ultrawide)| Front Camera|16 MP POP-UP Camera|8GB RAM|Android pie</p>
                                   <div class="d-flex align-items-center justify-content-between mt-1">
                                       <h6 class="font-weight-bold my-2">₹ 52,999</h6>
                                       <ul class="list-inline small">
                                           <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
                                           <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
                                           <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
                                           <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
                                           <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
                                       </ul>
                                   </div>
                               </div><img src="https://i.imgur.com/6IUbEME.jpg" alt="Generic placeholder image" width="200" class="ml-lg-5 order-1 order-lg-2">
                           </div> <!-- End -->
                       </li> <!-- End -->
                   </ul> <!-- End -->
               </div>
           </div>
       </div>`
       content.empty().append(newContent)
    })
    $(document).on('click', '#add', ()=>{
        const newContent = `
            <h2>Rated</h2>
            <form method="post" action="demoform.asp" >
                <div >
                    <div class="form-group">
                        <label>Your name</label>
                        <input type="text" class="form-control"  placeholder="Enter your name" name="owner_name">
                    </div>
                    <div class="form-group">
                        <label>Restaurant name</label>
                        <input type="text" class="form-control"  placeholder="Enter restaurant name" name="restaurant_name">
                    </div>
                    <div class="form-group">
                        <label>Restaurant type</label>
                        <input list="ice-cream-flavors" id="ice-cream-choice" name="res-type" />
                        <datalist id="ice-cream-flavors">
                            <option value="Chocolate">
                            <option value="Coconut">
                            <option value="Mint">
                            <option value="Strawberry">
                            <option value="Vanilla">
                        </datalist>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                    </div>
                    <div class="form-group">
                        <label>Image</label>
                        <input type="file" id="files" name="files" multiple><br><br>
                    </div>
                    <div class="form-group">
                        <label>Service</label>
                        <input list="browsers" name="service" id="browser">
                            <datalist id="browsers">
                                <option value="Bad">
                                <option value="Normal">
                                <option value="Rather">
                                <option value="Good">
                                <option value="Excellent">
                            </datalist>
                    </div>
                    <div class="form-group">
                        <label>Cleanliness</label>
                        <input list="browsers" name="clean" id="browser">
                            <datalist id="browsers">
                            <option value="Bad">
                            <option value="Normal">
                            <option value="Rather">
                            <option value="Good">
                            <option value="Excellent">
                            </datalist>
                    </div>
                    <div class="form-group">
                        <label>Food quality</label>
                        <input list="browsers" name="food" id="browser">
                            <datalist id="browsers">
                            <option value="Bad">
                            <option value="Normal">
                            <option value="Rather">
                            <option value="Good">
                            <option value="Excellent">
                            </datalist>
                    </div>
                    <div class="form-group">
                    <label >Notes</label>
                    <textarea class="form-control" name="notes" rows="3"></textarea>
                </div>
                <button type="button" class="btn btn-success">Post</button>
                </div>
            </form>`
        content.empty().append(newContent)
    })
})
$( window ).on( "load", function() {
    const newContent = ` <div class="row" data-role="listview" id="pageContent">
    <div class="container py-5">
        <div class="row text-center mb-5">
            <div class="col-lg-7 mx-auto">
                <h5 class="display-4">Product List</h5>
            </div>
            <form>
               <select id="typeRes">
                    
               </select>
                <input type="submit" class="btn btn-primary" value="Filter">
            </form>
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
                    <li class="list-group-item m-2">
                        <!-- Custom content-->
                        <div class="media align-items-lg-center flex-column flex-lg-row p-3">
                            <div class="media-body order-2 order-lg-1">
                                <h5 class="mt-0 font-weight-bold mb-2">Apple iPhone XS Max (Gold, 64 GB)</h5>
                                <p class="font-italic text-muted mb-0 small">64 GB ROM | 16.51 cm (6.5 inch) Super Retina HD Display 12MP + 12MP | 7MP Front Camera A12 Bionic Chip Processor</p>
                                <div class="d-flex align-items-center justify-content-between mt-1">
                                    <h6 class="font-weight-bold my-2">₹1,09,900</h6>
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
    $('#content').append(newContent)
    const resType = getAllData("resType")
    resType.onsuccess = (event) => {
        const results = event.target.result
        results.map((item)=>{
            let htmlRestType =  `<option value="${item.id}">${item.resType}</option>`
            $("#typeRes").append(htmlRestType)
        })
      
    }
});
$(document).ready(function (){
    let content = $('#content')
    $(document).on('click', "#home", ()=>{
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
        const newContent = `<form>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputEmail4">Email</label>
            <input type="email" class="form-control" id="inputEmail4" placeholder="Email">
          </div>
          <div class="form-group col-md-6">
            <label for="inputPassword4">Password</label>
            <input type="password" class="form-control" id="inputPassword4" placeholder="Password">
          </div>
        </div>
        <div class="form-group">
          <label for="inputAddress">Address</label>
          <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
        </div>
        <div class="form-group">
          <label for="inputAddress2">Address 2</label>
          <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor">
        </div>
        <div class="form-row">
          <div class="form-group col-md-6" id="imageCamera">
            <label for="inputCity">camera</label>
            <button class="btn btn-primary" id="btnCamera">Camera</button>
            </div>
          <div class="form-group col-md-4">
            <label for="inputState">State</label>
            <select id="inputState" class="form-control">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
        <button type="submit" class="btn btn-primary">Sign in</button>
      </form>`
        content.empty().append(newContent)
    })
})
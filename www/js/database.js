const listResFeedback = [
   {
      restaurant_name: 'Restaurant 1',
      restaurant_type: 'fast food',
      date_time: "Owner test 1",
      image: ['https://media-cdn.tripadvisor.com/media/photo-s/0e/cc/0a/dc/restaurant-chocolat.jpg'],
      ave_meal_price: "300000",
      service_rating: "Good",
      cleanliness_rating: "Good",
      food_quality_rating: "Good",
      notes: "",
      reporter_name: "Huy"
   },
   {
       restaurant_name: 'Restaurant 1',
       restaurant_type: 'fast food',
       date_time: "Owner test 1",
       image: ['https://media-cdn.tripadvisor.com/media/photo-s/0e/cc/0a/dc/restaurant-chocolat.jpg'],
       ave_meal_price: "300000",
       service_rating: "Good",
       cleanliness_rating: "Good",
       food_quality_rating: "Good",
       notes: "",
       reporter_name: "Huy"
    },
    {
       restaurant_name: 'Restaurant 1',
       restaurant_type: 'fast food',
       date_time: "Owner test 1",
       image: ['https://media-cdn.tripadvisor.com/media/photo-s/0e/cc/0a/dc/restaurant-chocolat.jpg'],
       ave_meal_price: "300000",
       service_rating: "Good",
       cleanliness_rating: "Good",
       food_quality_rating: "Good",
       notes: "",
       reporter_name: "Huy"
    },
    {
      restaurant_name: 'Restaurant 1',
      restaurant_type: 'fast food',
      date_time: "Owner test 1",
      image: ['https://media-cdn.tripadvisor.com/media/photo-s/0e/cc/0a/dc/restaurant-chocolat.jpg'],
      ave_meal_price: "300000",
      service_rating: "Good",
      cleanliness_rating: "Good",
      food_quality_rating: "Good",
      notes: "",
      reporter_name: "Huy"
   }

]
var database;
var request = window.indexedDB.open("Restaurant-Feedback", 2);
request.onupgradeneeded = function(event) {
   var database = event.target.result;
   var objectRes = database.createObjectStore("Restaurant-Feedback", {keyPath: "id", autoIncrement: true});
   for(var i in listResFeedback){
       objectRes.add(listResFeedback[i])
   }
}
request.onsuccess = function(event) {
   database = request.result;
};
function getAllData(collectionName) {
   return database.transaction([collectionName], "readonly").objectStore(collectionName).getAll()
}

$(window).on('load', function() {
   let resultLoad = getAllData("Restaurant-Feedback")
   resultLoad.onsuccess = function(event) {
       let result = event.target.result;
       console.log(result)
       for(let i in result) {
           let newIndex =
                        `<div class="col-md-3 col-sm-6">
                        <div class="products" style="margin: 10px">
                        <div class="thumbnail"><a href="details.html"><img src="${result[i].image}" alt="Product Name" width="350" height="350"></a></div>
                        <div class="productname" style="margin-top: 10px">${result[i].restaurant_name}</div>
                        <div class="button_group"><button class="button add-cart" type="button">Feedback Detail</button></div>
                        <div class="button_group"><button class="button add-cart" type="button"><a href="#" onClick='reloadFeedback()'>Add New Feedback</a></button></div>
                        <div class="button_group"><button class="button add-cart" type="button" onClick='deleteData(${result[i].id})'>Delete</button></div>
                        </div>
                        </div>`
           $('#myGrid').append(newIndex);
       }
   } 
});

function reloadFeedback() {
   window.location= 'feedback.html'
}

function reloadHome() {
   window.location = 'index.html'
}

function reloadSearch() {
   window.location = 'Search.html'
}

function deleteData(id) {
   var request = database.transaction(["Restaurant-Feedback"], "readwrite")
   .objectStore("Restaurant-Feedback")
   .delete(parseInt(id));

   request.onsuccess = function(event) {
      alert("prasad entry has been removed from your database.");
      window.location = "index.html"
   };
}

function addData(collectionName, data){
   const request = database.transaction([collectionName], "readwrite").objectStore(collectionName).add(data)
   request.onsuccess = function(event) {
      $('#create-feedback').each(function () {
         this.reset()
      })

      alert(`You rated successfully!`);
      window.location = "index.html"
   };
   
   request.onerror = function(event) {
      alert(`Error` );
   }
}

// search
// function search() {
//    var keyword =  $('#txtSearch').val();
//    var transaction = database.transaction("Restaurant-Feedback", "readwrite");
//    var objectStore = transaction.objectStore("Restaurant-Feedback");
//    var request = objectStore.openCursor();
//    request.onsuccess = function(event) {
//        var cursor = event.target.result;
//        if (cursor) {
//            if (cursor.value.column.indexOf(keyword) !== -1) {                
//                console.log(cursor.value);
//            }  

//            cursor.continue();          
//        }
//    };
// }


$('#create-feedback').on('submit', function(){
   // console.log($('#restaurant-name').val())
   // console.log($('#restaurant-type').val())
   // console.log($('#date-and-time').val())
   // console.log($('#average-price').val())
   // console.log($('#service-rating').val())
   // console.log($('#clean-rate').val())
   // console.log($('#food-rate').val())
   // console.log($('#notes').val())
   // console.log($('#reporter').val())
   
   const feedback = {
      restaurant_name: $('#restaurant-name').val(),
      restaurant_type: $('#restaurant-type').val(),
      date_time: $('#date-and-time').val(),
      ave_meal_price: $('#average-price').val(),
      service_rating: $('#service-rating').val(),
      cleanliness_rating: $('#clean-rate').val(),
      food_quality_rating: $('#food-rate').val(),
      notes: $('#notes').val(),
      reporter_name: $('#reporter').val(),
   }
   addData("Restaurant-Feedback", feedback)
   return false

})



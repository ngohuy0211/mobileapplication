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
    console.log("Successfull!: "+ database);
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

            let newIndex = `<div class="col-md-3 col-sm-6">
                <div class="products">
                <div class="thumbnail"><a href="details.html"><img src="${result[i].image[0]}" alt="Product Name"></a></div>
                <div class="productname">${result[i].restaurant_name}</div>
                <div class="button_group"><button class="button add-cart" type="button">Feedback Detail</button></div>
                <div class="button_group"><button class="button add-cart" type="button">Feedback</button></div>
                </div>
                </div>`
            $('#data').append(newIndex);
        }
    }
})

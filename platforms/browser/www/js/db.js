const resType = [{resType: "Grill"}, {resType: "Fast Food"}, {resType: "Ethnic"}]
 var db;
 var request = window.indexedDB.open("I-rate", 2);
 request.onupgradeneeded = function(event) {
    var db = event.target.result;
    var objectStore = db.createObjectStore("resType", {keyPath: "id", autoIncrement: true});
    
    for (var i in resType) {
       objectStore.add(resType[i]);
    }
 }
request.onsuccess = function(event) {
    db = request.result;
    console.log("success: "+ db);
 };
 function getAllData(collectionName) {
    const transaction = db.transaction([collectionName], "readonly")
    const objectStore = transaction.objectStore(collectionName)
    const request = objectStore.getAll()
    return request
 }
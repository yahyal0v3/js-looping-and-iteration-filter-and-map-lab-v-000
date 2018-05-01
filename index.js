// Code your solution here:
function driversWithRevenueOver(collection, revenue) {
  return collection.filter(object => object.revenue > revenue)
}

function driverNamesWithRevenueOver(collection, revenue) {
  let objects = collection.filter(object => object.revenue > revenue)
  return objects.map(object => object.name )
}

function exactMatch(collection, attribute) {
  collection.filter(function (object) {
    let key = Object.keys(object)
  }  
    object['attribute'] === attribute
}
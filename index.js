// Code your solution here:
function driversWithRevenueOver(collection, revenue) {
  return collection.filter(object => object.revenue > revenue)
}

function driverNamesWithRevenueOver(collection, revenue) {
  let objects = collection.filter(object => object.revenue > revenue)
  return objects.map(object => object.name )
}

function exactMatch(collection, attribute) {
  return collection.filter(function (object) {
    let key = Object.keys(attribute)
    return object[key] === attribute[key]
  })
}

function exactMatchToList(collection, attribute) {
  let matchedObjects = exactMatch(collection, attribute)
  let key = Object.keys(attribute)
  return matchedObjects.map(object => object[key])
}
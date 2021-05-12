const fs = require("fs")
const fetch = require("node-fetch");
const _ = require("lodash")
const uuid = require("uuid")
const dogNames = require('dog-names');

function encodeBase64ToUrl(str) {
  return str.replaceAll("/", "_").replaceAll("+", "-");
}

function getRandomId() {

  const hexString = uuid.v4().replace("-", "");
  const base64String = Buffer.from(hexString, 'hex').toString('base64')
  const urlString = encodeBase64ToUrl(base64String)
  return urlString;
}

const filterDog = dogObj => {
  const age = _.random(dogObj.breeds[0].life_span.match(/\d+/g)[1])
  const weightBound = dogObj.breeds[0].weight.metric.match(/\d+/g)
  const weight = _.random(weightBound[0], weightBound[1])
  const sex = _.random(1) > 0 ? "male": "female"
  return {
    id: getRandomId(),
    url: dogObj.url,
    name: sex === "male" ? dogNames.maleRandom() : dogNames.femaleRandom(),
    breed: dogObj.breeds[0].name,
    age,
    weight,
    sex
  }
}

(async function() {

  const res = await fetch("https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=50")
  const json = await res.json()
  let dogs = json.map(dog => filterDog(dog))
  dogs = {
    dogs
  }
  
  const data = JSON.stringify(dogs, null, 2)
  fs.writeFileSync("db.json", data)

})()

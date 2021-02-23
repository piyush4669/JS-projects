const axios = require("axios");

const uri2 = "https://api.edamam.com/api/nutrition-data?app_id=";
const appId2 = "24a2f2d0";
const appKey2 = "b633e0b55d58097079afe7a5c8c7ac36";

const uri1 = "https://api.edamam.com/api/food-database/parser?nutrition-type=logging&app_id="
const appId1 = "d6adae4b"
const appKey1 = "0f0b0094fceaf4cd1a086a82954d065f"

const finalUrl1 = uri1 + appId1 + "&app_key=" + appKey1 + "&ingr=";
const finalUrl2 = uri2 + appId2 + "&app_key=" + appKey2 + "&ingr=";

let abortController = new AbortController();
window.onbeforeunload = function(e) { abortController.abort(); };

const getApiCall = (data,uri) => {
  var finalApi = "";
  finalApi = uri + encodeURIComponent(data);
  return new Promise((resolve, reject) => {
    resolve(
      axios
        .get(finalApi,{"signal" : abortController.signal })
        .then(response => {
          return response;
        })
        .catch(error => {
          return error
        })
    );
  });
};

const getSearchResults = data => {
  return new Promise(async (resolve,reject)=>{
    await getApiCall(data,finalUrl1).then(async res => {      
      if (res.data.hints.length !== 0) {
        resolve({ "foodList": res.data.hints})
      } else {
        resolve("fail")
      }
    });
  })
};

const getParsedObject = data => {
  return new Promise(async (resolve,reject) => {
    await getSearchResults(data).then((res)=>{
      if(res !== "fail"){
        let arr = []
        let prevfood = '';
        res.foodList.slice(0,res.foodList.length - 8).forEach(element => {
          if(prevfood !== element.food.label){
            prevfood = element.food.label
            let obj = {}
            obj.label = element.food.label
            obj.value = element.measures
            arr.push(obj)
          }
        });
        resolve(arr)
      }else{
        resolve("fail")
      }
    }).catch((err)=>{
      return "Item is not present in our database"
    })
  })
}

const getCalories = data => {
  return new Promise(async (resolve,reject)=>{
    await getApiCall(data,finalUrl2).then(async res => {      
      if (res.data.calories) {
        resolve({ "calories": res.data.calories})
      } else {
        resolve("fail")
      }
    }).catch((err)=>{
      return "Please enter a valid amount"
    })
  })
}

module.exports = {
  getParsedObject: getParsedObject,
  getCalories:getCalories,
};

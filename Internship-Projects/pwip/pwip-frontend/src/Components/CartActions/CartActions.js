import AsyncStorage from "@react-native-community/async-storage";

export const AddToCart = product =>
  new Promise(async function(resolve, reject) {
    try {
      var store = getCart();
      store
        .then(async cart => {
          let temp = JSON.parse(cart);
          if (!temp) temp = [];
          temp.push(product);
          await AsyncStorage.setItem("cart", JSON.stringify(temp));
          resolve();
        })
        .catch(e => alert(JSON.stringify(e)));
    } catch (e) {
      reject(e);
    }
  });

export const RemoveFromCart = product =>
  new Promise(async function(resolve, reject) {
    try {
      var store = getCart();
      store
        .then(async cart => {
          let temp = JSON.parse(cart);
          var index = temp.indexOf(product);
          if (index !== -1) temp.splice(index, 1);
          await AsyncStorage.setItem("cart", JSON.stringify(temp));
          resolve();
        })
        .catch(e => alert(JSON.stringify(e)));
    } catch (e) {
      reject(e);
    }
  });

export const getCart = () =>
  new Promise(async function(resolve, reject) {
    try {
      const value = await AsyncStorage.getItem("cart");
      resolve(value);
    } catch (e) {
      reject(e);
    }
  });

export const ClearCart = () =>
  new Promise(async function(resolve, reject) {
    try {
      await AsyncStorage.setItem("cart", JSON.stringify([]));
      resolve();
    } catch (e) {
      reject(e);
    }
  });

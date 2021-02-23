var express = require("express");
var firebase = require("../initFirebase");
let db = firebase.firestore();
var router = express.Router();
const SendOtp = require("sendotp");
const sendOtp = new SendOtp(
  "301810A5rXXvhG5dbc8426",
  "OTP for your verification is {{otp}} please do not share it with anybody."
);

router.post("/regiser", (req, res, next) => {
  let data = {
    userName: req.body.userName,
    phone: req.body.phone,
    email: req.body.email,
    password: req.body.password
  };

  if (!data.userName) {
    return res.status(500).send({
      success: "false",
      message: "userName is required"
    });
  } else if (!data.email) {
    return res.status(500).send({
      success: "false",
      message: "email is required"
    });
  } else if (!data.phone) {
    return res.status(500).send({
      success: "false",
      message: "phone is required"
    });
  } else if (!data.password) {
    return res.status(500).send({
      success: "false",
      message: "password is required"
    });
  } else {
    let registerUserRef = db.collection("users").doc(data.phone);
    registerUserRef
      .get()
      .then(snap => {
        if (snap.exists) {
          return res.status(500).send({
            status: 500,
            message: "User Already exists"
          });
        } else {
          registerUserRef
            .set(data)
            .then(snap => {
              return res.status(200).send({
                status: 200,
                message: "User Successfully created",
                data: data
              });
            })
            .catch(err => {
              return res.status(500).send({
                status: 500,
                message: "Error in creating user"
              });
            });
        }
      })
      .catch(err => {
        return res.status(500).send({
          status: 500,
          message: "Something wrong happened"
        });
      });
  }
});


router.post("send-otp",(req,res)=>{
    // if (!users) {
    //     res.send(
    //       await response.response(
    //         401,
    //         null,
    //         "Phone number not registered. Please Sign-up."
    //       )
    //     );
    //   } else {
    //     var sendPhone = "91" + req.body.phone.toString();
    //     sendOtp.send(sendPhone, "PRIIND", async function(error, data) {
    //       if (data.type == "success") {
    //         res.send(await response.response(200, null, "Successfully sent OTP"));
    //       } else {
    //         res.send(
    //           await response.response(
    //             500,
    //             null,
    //             "Something went wrong. Please try again later."
    //           )
    //         );
    //       }
    //     });
    //   }
});







module.exports = router;

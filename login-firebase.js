// Initialize Firebase (ADD YOUR OWN DATA)
 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyAZeQ59fwocpnM-ClmGi5CrrdcKrUrqlmY",
    authDomain: "fir-contact-beee6.firebaseapp.com",
    projectId: "fir-contact-beee6",
    storageBucket: "fir-contact-beee6.appspot.com",
    messagingSenderId: "757677973130",
    appId: "1:757677973130:web:64411482ad40b3de515773",
    measurementId: "G-JEWB4XP7FY"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.auth.Auth.Persistence.LOCAL;

  firebase.analytics();


  $("#btn-login").click(function(){
    var email = $("#login__email").val();
    var password = $("#login__password").val();

    if(email != "" && password != "")
    {
        var result = firebase.auth().signInWithEmailAndPassword(email, password);

        result.catch(function(error){
            var errorCode = error.code;
            var errorMessage = error.message;

            console.log(errorCode);
            console.log(errorMessage);

            //window.alert("Message:" + errorMessage);
            window.alert("Message: Sai thong tin tai khoan mat khau");
        });
    }else{
        window.alert("Chua nhap du lieu dang nhap!");
    }
  });

  $("#btn-logout-firebase").click(function(){
    firebase.auth().signOut().then(() => {
        //window.alert("Ban da dang xuat!");
        document.location.href="login-firebase.html";
    }).catch((error) => {
        window.alert("Co loi xay ra!");
    });
  });
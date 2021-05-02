// Initialize Firebase (ADD YOUR OWN DATA)
 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  //Project Setting > General > Your App > Firebase SDK snippet > Config
  var firebaseConfig = {
    apiKey: "xxx",
    authDomain: "xxx",
    projectId: "xxx",
    storageBucket: "xxx",
    messagingSenderId: "xxx",
    appId: "xxx",
    measurementId: "xxx"
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
let isLogggedIn = true;
let userRole = "editor";
//app.vwo.com ---> viewer, editor or admin
//viewer ---> limited view
//editor ---> can edit and view
//admin ---> can do all things

if (isLogggedIn) {
    if (userRole === "admin") {
      console.log("Admin can do all the things");
    } else if (userRole === "editor") {
        console.log("Welcome editor - edit access granted");
    } else if (userRole === "viewer") {
        console.log("Welcome viewer - read only access granted");
} else{
    console.log("No idea which role you have");
}
} else {
    console.log("You are not logged in!");
}


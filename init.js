const auth = new Auth();

document.querySelector('.logout').addEventListener("click",(e)=>{
    console.log(e)
    auth.logOut();
})
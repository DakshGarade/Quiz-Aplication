
function submit() {
    let inpName = document.getElementById("inpBar").value;
    if (inpName == "") {  
        alert("Please Enter Your Name!!! ")
    } else {
        window.location.href = "../Main-Page/mainPage.html";
        sessionStorage.setItem("name",inpName)
    }
}


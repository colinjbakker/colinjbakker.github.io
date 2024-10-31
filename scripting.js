
function handleButtonClick(event) {
    const buttonId = event.target.id;
    console.log("button")
    switch(buttonId){
        case "aboutme":
            document.getElementById("aboutme").classList.add('clicked');
            window.location.href = "aboutme.html";
            break;
        case "projects":
            document.getElementById("projects").classList.add('clicked');
            window.location.href = "index.html";
            break;
    }
}

document.getElementById("aboutme").addEventListener("click", handleButtonClick);
document.getElementById("projects").addEventListener("click", handleButtonClick);


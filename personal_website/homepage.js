var i = 0;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function test() {
    console.log("Hello World");
    var welcomeText = document.getElementById("homepage-welcome-text");
    document.body.style.background = "white";
    welcomeText.textContent = "the button worked. page will reset in 3 seconds."
    welcomeText.style.color = "black";

    for (let i = 0; i < 3; i++) {
        await sleep(i * 1000);
    }

    window.location.reload();
}
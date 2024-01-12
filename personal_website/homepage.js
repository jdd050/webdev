// add sleep function (because it's not built-in)
// time is in miliseconds
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function transition_to_second() {
    // wait for animations to finish
    await sleep(3000);
    // transition
    var welcomeText = document.getElementById("homepage-welcome-text");
    var opacityPercent=30;
    welcomeText.style.cssText="opacity:0."+ toString(opacityPercent);
}

transition_to_second();
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// homepage text fades in
// then change body background along with fade out

async function changeBodyBackground() {
    await sleep(2250); // wait for welcome animations to finish
    var brightness = 0;

    for (let i = 0; i < 9; i++) {
            document.body.style.filter = "contrast(" + toString(brightness * 100) + "%)";
            brightness += 1;
        await sleep(40);
    }
}

changeBodyBackground();
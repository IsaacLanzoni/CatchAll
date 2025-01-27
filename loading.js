function showLoading() {
    const div = document.createElement("div");
    div.classList.add("loading");
    div.id = "loading-overlay";
    document.body.appendChild(div);

    const divTwo = document.createElement("div");
    divTwo.classList.add("little-balls");
    const divThree = document.createElement("div");
    divThree.classList.add("little-balls");
    const divFour = document.createElement("div");
    divFour.classList.add("little-balls");
    const divFive = document.createElement("div");
    divFive.classList.add("little-balls");
    const divSix = document.createElement("div");
    divSix.classList.add("little-balls");

    div.appendChild(divTwo);
    div.appendChild(divThree);
    div.appendChild(divFour);
    div.appendChild(divFive);
    div.appendChild(divSix);

    const loadingOverlay = document.getElementById('loading-overlay');
    loadingOverlay.style.display = 'flex';

}

function hideLoading() {
    const loadingOverlay = document.getElementById('loading-overlay');
    loadingOverlay.style.display = 'none';
}
function showPopupInfo() {
    // var popup = document.querySelector('.popup-info');
    // popup.style.display = 'flex';

    var divPopup = document.getElementById("popup");
    divPopup.classList.add("popup-info-set");
    divPopup.style.display = 'flex';

    var divPopupClose = document.getElementById("popup-close");
    divPopupClose.classList.add("popup-close");
}

function closePopupInfo() {
    // var popup = document.getElementById("popup");
    // popup.style.display = 'none';

    var divPopup = document.getElementById("popup");
    divPopup.classList.remove("popup-info-set");
}



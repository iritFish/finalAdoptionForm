// הצגת תמונת הכלב שנבחר והסתרת השאר
function showDogImage(selectedImgId) {
    document.getElementById("imgDog1").classList.replace("visible-img", "hidden-img");
    document.getElementById("imgDog2").classList.replace("visible-img", "hidden-img");
    document.getElementById("imgDog3").classList.replace("visible-img", "hidden-img");
    document.getElementById("imgDog4").classList.replace("visible-img", "hidden-img");

    document.getElementById(selectedImgId).classList.replace("hidden-img", "visible-img");

    checkFormValidity();
}

// שינוי שקיפות האקססוריז
function toggleAccImage(checkboxId, imageId) {
    const isChecked = document.getElementById(checkboxId).checked;
    const imgElement = document.getElementById(imageId);

    if (isChecked) {
        imgElement.classList.replace("faded-img", "highlighted-img");
    } else {
        imgElement.classList.replace("highlighted-img", "faded-img");
    }
}

// בדיקה האם הטופס מלא כדי להפעיל את כפתור האישור
function checkFormValidity() {
    const nameValue = document.getElementById("adopterName").value;

    const isDogSelected = document.getElementById("dog1").checked ||
        document.getElementById("dog2").checked ||
        document.getElementById("dog3").checked ||
        document.getElementById("dog4").checked;

    const submitBtn = document.getElementById("submitBtn");

    if (nameValue.length > 0 && isDogSelected) {
        submitBtn.disabled = false;
        submitBtn.classList.replace("disabled-btn", "enabled-btn");
    } else {
        submitBtn.disabled = true;
        submitBtn.classList.replace("enabled-btn", "disabled-btn");
    }
}

// פעולת הסיכום בעת לחיצה על אישור
function submitForm() {
    const nameValue = document.getElementById("adopterName").value;
    let selectedDogName = "";

    if (document.getElementById("dog1").checked) { selectedDogName = document.getElementById("dog1").value; }
    if (document.getElementById("dog2").checked) { selectedDogName = document.getElementById("dog2").value; }
    if (document.getElementById("dog3").checked) { selectedDogName = document.getElementById("dog3").value; }
    if (document.getElementById("dog4").checked) { selectedDogName = document.getElementById("dog4").value; }

    let chosenAcc = [];
    if (document.getElementById("acc1").checked) { chosenAcc.push(document.getElementById("acc1").value); }
    if (document.getElementById("acc2").checked) { chosenAcc.push(document.getElementById("acc2").value); }
    if (document.getElementById("acc3").checked) { chosenAcc.push(document.getElementById("acc3").value); }
    if (document.getElementById("acc4").checked) { chosenAcc.push(document.getElementById("acc4").value); }

    let accText = "";
    if (chosenAcc.length > 0) {
        accText = chosenAcc.join(", ");
    } else {
        accText = "לא נבחרו אקססוריז";
    }

    const summaryText = "תודה רבה " + nameValue + "!<br>" +
        "בחרת לאמץ את הכלב: " + selectedDogName + "<br>" +
        "האקססוריז שבחרת: " + accText;

    document.getElementById("resultMessage").innerHTML = summaryText;
}
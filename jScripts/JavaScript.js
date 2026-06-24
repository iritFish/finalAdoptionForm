
// פונקציה להצגת הכלב הנבחר תוך הסתרת השאר בעזרת שינוי מחלקות
function showDogImage(selectedImgId) {
    document.getElementById("imgDog1").classList.replace("visible-img", "hidden-img");
    document.getElementById("imgDog2").classList.replace("visible-img", "hidden-img");
    document.getElementById("imgDog3").classList.replace("visible-img", "hidden-img");
    document.getElementById("imgDog4").classList.replace("visible-img", "hidden-img");

    document.getElementById(selectedImgId).classList.replace("hidden-img", "visible-img");

    // קריאה לפונקציה שבודקת האם להדליק את כפתור האישור
    checkFormValidity();
}

// פונקציה המראה/מסתירה את תמונת האביזר לפי סימון
function toggleAccImage(checkboxId, imageId) {
    const isChecked = document.getElementById(checkboxId).checked;
    const imgElement = document.getElementById(imageId);

    // תנאי  הקובע את מחלקת הCSS 
    if (isChecked) {
        imgElement.classList.replace("faded-img", "highlighted-img");
    } else {
        imgElement.classList.replace("highlighted-img", "faded-img");
    }
}

// פונקציה המאמתת את הטופס
function checkFormValidity() {
    const nameValue = document.getElementById("adopterName").value; // קליטת משתנה מתיבת הטקסט 

    // בדיקה האם לפחות בחירה  אחת נבחרה
    const isDogSelected = document.getElementById("dog1").checked ||
        document.getElementById("dog2").checked ||
        document.getElementById("dog3").checked ||
        document.getElementById("dog4").checked;

    const submitBtn = document.getElementById("submitBtn");

    // שימוש באופרטור &&  להדלקת הכפתור
    if (nameValue.length > 0 && isDogSelected) {
        submitBtn.disabled = false;
        submitBtn.classList.replace("disabled-btn", "enabled-btn");
    } else {
        submitBtn.disabled = true;
        submitBtn.classList.replace("enabled-btn", "disabled-btn");
    }
}

// פונקציה מסכמת  
function submitForm() {
    const nameValue = document.getElementById("adopterName").value;
    let selectedDogName = "";

    // מעבר על כל כפתורי הרדיו של הכלבים
    const dogs = document.getElementsByName("dog");
    for (let i = 0; i < dogs.length; i++) {
        if (dogs[i].checked) {
            selectedDogName = dogs[i].value;
        }
    }

    // הגדרת מערך לאיסוף האקססוריז
    let chosenAcc = [];

    // לולאה העוברת על 4 הצק בוקסים ובודקת מי מהם מסומן
    for (let i = 1; i <= 4; i++) {
        let currentAcc = document.getElementById("acc" + i);
        if (currentAcc.checked) {
            chosenAcc.push(currentAcc.value); // הוספה למערך
        }
    }

    let accText = "";
    if (chosenAcc.length > 0) {
        accText = chosenAcc.join(", "); // המרת המערך למחרוזת טקסט רציפה
    } else {
        accText = "לא נבחרו אקססוריז";
    }

    // שרשור מחרוזות להדפסת התוצאה
    const summaryText = "תודה רבה " + nameValue + "!<br>" +
        "בחרת לאמץ את הכלב: " + selectedDogName + "<br>" +
        "האקססוריז שבחרת: " + accText;

    document.getElementById("resultMessage").innerHTML = summaryText;
}
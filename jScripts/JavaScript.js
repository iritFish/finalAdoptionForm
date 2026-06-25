// פונקציה להצגת הכלב הנבחר והסתרת השאר
function showDogImage(selectedImgId) {
    // הסתרת כל התמונות (החלפת מחלקה מנראה ללא נראה עבור כל הכלבים)
    document.getElementById("imgDog1").classList.replace("visible-img", "hidden-img");
    document.getElementById("imgDog2").classList.replace("visible-img", "hidden-img");
    document.getElementById("imgDog3").classList.replace("visible-img", "hidden-img");
    document.getElementById("imgDog4").classList.replace("visible-img", "hidden-img");


    //  הצגת התמונה הספציפית שנבחרה (החלפת מחלקה מלא נראה לנראה רק לכלב שנבחר)
    document.getElementById(selectedImgId).classList.replace("hidden-img", "visible-img");


    // קריאה לפונקציית עזר כדי לבדוק אם לעדכן את מצב כפתור האישור לאחר בחירת תמונה
    checkFormValidity();
}




// פונקציה המראה ומסתירה את תמונת האביזר לפי סימון
function toggleAccImage(checkboxId, imageId) {
    // קליטת המצב הנוכחי של תיבת הסימון (סומן / לא סומן) למשתנה
    const isChecked = document.getElementById(checkboxId).checked;
    // תפיסת אלמנט התמונה הספציפי שאנחנו רוצים לשנות
    const imgElement = document.getElementById(imageId);


    // בדיקה - אם סומן (True) תהיה הדגשת תמונה, אם לא (False) יהיה ביטול הדגשה
    if (isChecked) {
        imgElement.classList.replace("faded-img", "highlighted-img");
    } else {
        imgElement.classList.replace("highlighted-img", "faded-img");
    }
}




// פונקציה המאמתת את הטופס
function checkFormValidity() {
    // קליטת הערך שהוזן בתיבת הטקסט של שם המאמץ
    const nameValue = document.getElementById("adopterName").value;


    // בדיקת תנאי - האם לפחות כפתור אחד ברשימת הכלבים מסומן?
    const isDogSelected = document.getElementById("dog1").checked ||
        document.getElementById("dog2").checked ||
        document.getElementById("dog3").checked ||
        document.getElementById("dog4").checked;


    // תפיסת אלמנט הכפתור מהדף לשימוש בקוד
    const submitBtn = document.getElementById("submitBtn");


    // בדיקה - אם יש שם (אורך גדול מ-0) וגם נבחר כלב, שינוי את מאפיין הכפתור לזמין
    if (nameValue.length > 0 && isDogSelected) {
        submitBtn.disabled = false; // ביטול הנעילה
        submitBtn.classList.replace("disabled-btn", "enabled-btn"); // עדכון מראה הכפתור
    } else {
        // אם התנאי לא מתקיים, השארת את הכפתור נעול
        submitBtn.disabled = true;
        submitBtn.classList.replace("enabled-btn", "disabled-btn");
    }
}




// פונקציה מסכמת
function submitForm() {
    // שמירת שם המאמץ למשתנה
    const nameValue = document.getElementById("adopterName").value;
    let selectedDogName = "";


    // לולאת העוברת על כל הכפתורים כדי למצוא את הערך של הכלב שנבחר
    const dogs = document.getElementsByName("dog");
    for (let i = 0; i < dogs.length; i++) {
        if (dogs[i].checked) {
            selectedDogName = dogs[i].value;
        }
    }


    // הגדרת מערך ריק לאיסוף ערכי האביזרים
    let chosenAcc = [];


    // לולאה שעוברת על 4 תיבות הסימון של האביזרים
    for (let i = 1; i <= 4; i++) {
        let currentAcc = document.getElementById("acc" + i);
        // בדיקה אם תיבת הסימון הנוכחית מסומנת, אם כן - דחיפת הערך הנבחר לתא הפנוי במערך
        if (currentAcc.checked) {
            chosenAcc.push(currentAcc.value);
        }
    }


    // בדיקת אורך המערך - אם נבחרו אביזרים אם כן, איחוד המערך למחרוזת טקסט
    let accText = "";
    if (chosenAcc.length > 0) {
        accText = chosenAcc.join(", "); // איחוד איברי המערך עם פסיק ביניהם
    } else {
        accText = "לא נבחרו אקססוריז";
    }


    // יצירת משתנה הדפסה המשרשר את המשתנים לטקסט אחד
    const summaryText = "תודה רבה " + nameValue + "!<br>" +
        "בחרת לאמץ את הכלב: " + selectedDogName + "<br>" +
        "האקססוריז שבחרת: " + accText;


    // הדפסת התשובה הסופית
    document.getElementById("resultMessage").innerHTML = summaryText;
}


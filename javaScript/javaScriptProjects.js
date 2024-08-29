
const javaScriptProjects = [
    {
        id: 1,
        title: "Calculator",
        url: "./pages/calculator.html",
        img: "./img/JsImgs/calculator.png",
        description: "הפרויקט הוא מחשבון עם פונקציות בסיסיות וטריגונומטריות, כולל סינוס וקוסינוס, עם ממשק משתמש פשוט וקל לשימוש.",
        alt: "Calculator"

    },
    {
        id: 2,
        title: "Fetch To Card",
        url: "./pages/fetchToCard.html",
        img: "./img/JsImgs/fetchtoCard.png",
        description: "הפרויקט מציג מוצרים מכרטיסיות Bootstrap באמצעות API, כולל קטגוריה, כותרת, תמונה ותיאור לכל מוצר. ממשק משתמש ידידותי.",
        alt: "fetch to Card"

    },
    {
        id: 3,
        title: "Flappy Bird",
        url: "./pages/flappyBird.html",
        img: "./img/JsImgs/FlappyBird.png",
        description: "הפרויקט הוא משחק שבו דמות נמנעת ממכשולים נעים, עם קפיצות, ניקוד משתנה ומהירות גוברת ככל שהמשחק מתקדם.",
        alt: "Flappy Bird"

    },
    {
        id: 4,
        title: "Guess The Number",
        url: "./pages/guessTheNumber.html",
        img: "./img/JsImgs/guessTheNum.png",
        description: "הפרויקט הוא משחק ניחוש מספרים שבו יש לך 5 ניסיונות לנחש מספר בין 1 ל-10 עם משוב על כל ניחוש.",
        alt: "Guess The Number"

    },
    {
        id: 5,
        title: "Manage U",
        url: "./pages/manageU.html",
        img: "./img/JsImgs/manageUproJect.png",
        description: "הפרויקט מנהל משימות עם אפשרויות להוספה, מחיקה, עדכון והשלמה, תוך שמירה ב-`localStorage` והצגה בממשק משתמש ידידותי.",
        alt: "Manage U"

    },
    {
        id: 6,
        title: "My Account",
        url: "./pages/myAccount.html",
        img: "./img/JsImgs/myAccount.png",
        description: "הפרויקט הוא מערכת לניהול פעולות פיננסיות, כולל הוספה, עריכה ומחיקה של פעולות, חישוב יתרה והצגת חיסכון כולל.",
        alt: "My Account"

    },
    {
        id: 7,
        title: "Products Shop",
        url: "./pages/productsShop.html",
        img: "./img/JsImgs/productsShop.png",
        description: "הפרויקט הוא מערכת לניהול מוצרים, כולל הוספה, עריכה ומחיקה של פריטים, עם תצוגת טבלה המציגה את כל המוצרים והזמינות שלהם.",
        alt: "Products Shop"

    },
    {
        id: 8,
        title: "Weather API",
        url: "./pages/weatherAPI.html",
        img: "./img/JsImgs/weatherApi.png",
        description: "הפרויקט הוא אפליקציית מזג אוויר שמציגה טמפרטורה, תיאור ואייקון מזג אוויר לעיר נבחרת באמצעות API של OpenWeatherMap.",
        alt: "Weather API"

    },
]
for (let project of javaScriptProjects) {
    document.querySelector("#row").innerHTML += `
    <div class="col-sm-12 col-md-6 m-auto col-lg-4 my-4">
                           <div class="card box-shadow text-center m-auto p-3" style="width: 20rem;">
                    <div class="content-box">
                        <span class="card-title text-primary h1">${project.title}</span>
                        <hr>
                        <div class="card-img my-2">
                            <img src="${project.img}" class="card-img-top"
                                alt="${project.alt}">
                        </div>
                        <button type="button" class="btn btn-outline-primary my-5 p-3" data-bs-toggle="modal"
                            data-bs-target="#exampleModal${project.id}">
                            פרטים נוספים
                        </button>
                    </div>
                 
               
            </div>





            <!-- Modal -->
            <div class="modal fade"  id="exampleModal${project.id}" tabindex="-1" aria-labelledby="exampleModalLabel${project.id}"
                aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header" dir="ltr">
                            <h1 class="modal-title fs-5" id="exampleModalLabel${project.id}">${project.title}</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <p class="lead pb-4">
                                ${project.description}
                            </p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-outline-danger" data-bs-dismiss="modal">סגירה</button>
                            <a href="${project.url}" target="_blank">
                                <button type="button" class="btn btn-outline-primary">לעמוד הפרויקט</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    `
}
console.log("Скрипт завантажено.");
let n = 5;
const targetElementIndex = (n % 10) + 1;

const allElements = document.querySelectorAll('body *');

allElements.forEach((element, index) => {
    element.addEventListener('click', function (event) {
        event.stopPropagation(); 

        // Визначення класу, який потрібно додати або видалити
        if (index === targetElementIndex) {
            console.log("Клік на першому елементі з індексом:", targetElementIndex);
            const firstElement = allElements[targetElementIndex]; 
            if (firstElement) {
                // Додавання або видалення класу highlight
                firstElement.classList.toggle('highlight');
                // Видалення класу highlight-green, якщо він присутній
                firstElement.classList.remove('highlight-green');
            }
        } else if (index === targetElementIndex + 1) {
            console.log("Клік на наступному елементі з індексом:", targetElementIndex + 1);
            const secondElement = allElements[targetElementIndex + 1]; 
            if (secondElement) {
                // Додавання або видалення класу highlight-green
                secondElement.classList.toggle('highlight-green');
                // Видалення класу highlight, якщо він присутній
                secondElement.classList.remove('highlight');
            }
        }
    });
});

// Завдання 2: Робота з зображенням
const img = document.getElementById('lviv-img');

document.getElementById('add-img').addEventListener('click', function () {
    img.style.display = 'block'; 
});

document.getElementById('increase-img').addEventListener('click', function () {
    img.width += 50; 
});

document.getElementById('decrease-img').addEventListener('click', function () {
    if (img.width > 50) {
        img.width -= 50; 
    }
});

document.getElementById('remove-img').addEventListener('click', function () {
    img.style.display = 'none'; 
});


function validateForm() {
    var name = document.getElementById("name").value;
    var group = document.getElementById("group").value;
    var variant = document.getElementById("variant").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var errorMessages = document.getElementById("errorMessages");
    errorMessages.innerHTML = ""; 

    var nameRegex = /^[А-Яа-яЁёA-Za-z]{2,}\s[А-Яа-яЁёA-Za-z]\.[А-Яа-яЁёA-Za-z]\.$/;
    var groupRegex = /^[А-Яа-яЄєЇїІіҐґ]{2}-\d{2}$/;
    var phoneRegex = /^\(\d{3}\)-\d{3}-\d{2}-\d{2}$/;
    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    var isValid = true;

    if (!nameRegex.test(name)) {
        errorMessages.innerHTML += "<p>Неправильний формат ПІБ. Приклад: ТТТТТТ Т.Т.</p>";
        isValid = false;
    }

    if (!groupRegex.test(group)) {
        errorMessages.innerHTML += "<p>Неправильний формат групи. Приклад: ТТ-ЧЧ</p>";
        isValid = false;
    }

    if (!phoneRegex.test(phone)) {
        errorMessages.innerHTML += "<p>Неправильний формат телефону. Приклад: (ЧЧЧ)-ЧЧЧ-ЧЧ-ЧЧ</p>";
        isValid = false;
    }

    if (!emailRegex.test(email)) {
        errorMessages.innerHTML += "<p>Неправильний формат електронної пошти. Приклад: тттттт@ттттт.com</p>";
        isValid = false;
    }

    if (isValid) {
    
        document.getElementById("outputName").textContent = name;
        document.getElementById("outputGroup").textContent = group;
        document.getElementById("outputVariant").textContent = variant;
        document.getElementById("outputPhone").textContent = phone;
        document.getElementById("outputEmail").textContent = email;

        
        var outputWindow = window.open("", "Output Window", "width=400,height=300");
        outputWindow.document.write("<h1>Введені дані</h1>");
        outputWindow.document.write("<p><strong>ПІБ:</strong> " + name + "</p>");
        outputWindow.document.write("<p><strong>Група:</strong> " + group + "</p>");
        outputWindow.document.write("<p><strong>Варіант:</strong> " + variant + "</p>");
        outputWindow.document.write("<p><strong>Телефон:</strong> " + phone + "</p>");
        outputWindow.document.write("<p><strong>Електронна пошта:</strong> " + email + "</p>");
        outputWindow.document.close(); 
    }
}

const variant = 5;
const table = document.getElementById('myTable');
const colorPicker = document.getElementById('colorPicker');
let cells = [];

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

let number = 1;
for (let i = 0; i < 6; i++) {
    const row = document.createElement('tr');
    for (let j = 0; j < 6; j++) {
        const cell = document.createElement('td');
        cell.textContent = number;
        cell.dataset.number = number;

        cell.addEventListener('mouseover', function () {
            if (parseInt(cell.dataset.number) === variant) {
                cell.style.backgroundColor = getRandomColor();
            }
        });

        cell.addEventListener('click', function () {
            if (parseInt(cell.dataset.number) === variant) {
                cell.style.backgroundColor = colorPicker.value;
            }
        });

        cell.addEventListener('dblclick', function () {
            if (parseInt(cell.dataset.number) === variant) {
                alert(`Мій варік: ${variant}`);
                cells.forEach(c => {
                    if (c !== cell) {
                        c.style.backgroundColor = getRandomColor();
                    }
                });
            }
        });

        row.appendChild(cell);
        cells.push(cell);
        number++;
    }
    table.appendChild(row);
}

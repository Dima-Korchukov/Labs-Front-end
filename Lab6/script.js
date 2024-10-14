let usersData = []; 


function displayUsers(users) {

    const usersContainer = document.getElementById('usersContainer');
    usersContainer.innerHTML = '';

    // Вивід користувача
    users.forEach(user => {
        const userCard = document.createElement('div');
        userCard.className = 'user-card';

       
        userCard.innerHTML = `
        <img src="${user.picture?.large || ''}?${new Date().getTime()}" alt="User Picture" />
        <p><strong>Ім'я:</strong> ${user.name?.first || ''} ${user.name?.last || ''}</p>
        <p><strong>Вік:</strong> ${user.dob?.age || ''}</p>
        <p><strong>Телефон:</strong> ${user.cell || ''}</p>
        <p><strong>Країна:</strong> ${user.location?.country || ''}</p>
        <p><strong>Поштовий індекс:</strong> ${user.location?.postcode || ''}</p>
        <p><strong>Email:</strong> ${user.email || ''}</p>
    `;
    

        usersContainer.appendChild(userCard);
    });
}

// Функція для отримання даних з API
function loadUsers() {
    fetch('https://randomuser.me/api/?results=5')
        .then(response => {
            if (!response.ok) {
                throw new Error('Помилка при завантаженні даних');
            }
            return response.json();
        })
        .then(data => {
            usersData = data.results;  
            displayUsers(usersData);  
        })
        .catch(error => {
            console.error('Сталася помилка:', error);
        });
}


function downloadUsersData() {
    const dataStr = JSON.stringify(usersData, null, 2);  
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

   
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Дані Користувачів.json';  
    a.click();

    URL.revokeObjectURL(url);  
}

// Функція для завантаження користувачів з файлу
function uploadUsersFromFile(event) {
    const file = event.target.files[0];  
    const reader = new FileReader();

    reader.onload = function(e) {
        try {
            const data = JSON.parse(e.target.result);  
            usersData = data;  
            displayUsers(usersData);  
        } catch (error) {
            console.error('Помилка при читанні файлу:', error);
        }
    };

    reader.readAsText(file); 
}


document.getElementById('downloadBtn').addEventListener('click', downloadUsersData);

document.getElementById('loadUsersBtn').addEventListener('click', loadUsers);

document.getElementById('uploadFile').addEventListener('change', uploadUsersFromFile);

loadUsers();

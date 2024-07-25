function submitName() {
    const nameInput = document.getElementById('name-input').value;
    if (nameInput.trim() !== "") {
        document.getElementById('input-container').style.display = 'none';
        document.getElementById('welcome-container').style.display = 'block';
        document.getElementById('welcome-message').innerText = `Hoş geldin, ${nameInput}!`;

        // Tarih ve saat güncelleme
        updateDateTime();
        setInterval(updateDateTime, 1000);
    }
}

function updateDateTime() {
    const date = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = date.toLocaleDateString('tr-TR', options);
    const formattedTime = date.toLocaleTimeString('tr-TR');
    document.getElementById('date-time').innerText = `${formattedDate} ${formattedTime}`;
}
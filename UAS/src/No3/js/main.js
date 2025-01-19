document.getElementById('ubahTeks').addEventListener('click', function() {
    const judul = document.getElementById('judul');
    judul.innerText = 'Teks Judul Telah Diubah!';
    judul.style.color = 'blue';
});

document.getElementById('tambahParagraf').addEventListener('click', function() {
    const paragrafBaru = document.createElement('p');
    paragrafBaru.innerText = 'Ini paragraf tambahan.';
    document.body.appendChild(paragrafBaru);
});
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah form submit default

    let isValid = true;

    // Validasi Nama
    const name = document.getElementById('name').value;
    if (name.trim() === '') {
        isValid = false;
        alert('Nama harus diisi.');
    }

    // Validasi Email
    const email = document.getElementById('email').value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        isValid = false;
        alert('Format email tidak valid.');
    }

    // Validasi Telepon
    const phone = document.getElementById('phone').value;
    if (!/^\d+$/.test(phone)) {
        isValid = false;
        alert('Nomor telepon hanya boleh mengandung angka.');
    }

    // Validasi Usia
    const age = document.getElementById('age').value;
    if (age < 10 || age > 100) {
        isValid = false;
        alert('Usia harus antara 10 dan 100 tahun.');
    }

    // Validasi Jenis Kelamin
    const gender = document.getElementById('gender').value;
    if (gender === '') {
        isValid = false;
        alert('Jenis kelamin harus dipilih.');
    }

    if (isValid) {
        document.getElementById('successMessage').hidden = false;
    }
});


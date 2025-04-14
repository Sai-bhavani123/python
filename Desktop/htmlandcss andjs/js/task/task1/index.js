function getStudents() {
    return JSON.parse(localStorage.getItem('students') || '[]');
}

function setStudents(students) {
    localStorage.setItem('students', JSON.stringify(students));
}

function signup() {
    const name = document.getElementById('signup-name').value.trim();
    const email = document.getElementById('signup-email').value.trim();
    const password = document.getElementById('signup-password').value;

    const students = getStudents();

    if (students.some(s => s.email === email)) {
        showMessage("User already exists", "red");
        return;
    }

    students.push({ name, email, password });
    setStudents(students);

    showMessage("Signup successful!", "green");
}

function login() {
    const email = document.getElementById('login-email').value.trim();
    const password = document.getElementById('login-password').value;

    const students = getStudents();

    const student = students.find(s => s.email === email && s.password === password);

    if (student) {
        showMessage("Login successful!", "green");
    } else {
        showMessage("Invalid credentials!", "red");
    }
}

function getUsers() {
    const students = getStudents();

    if (students.length === 0) {
        document.getElementById('user-table').innerHTML = "<p>No students found.</p>";
        return;
    }

    let html = "<table><tr><th>Name</th><th>Email</th></tr>";
    students.forEach(s => {
        html += `<tr><td>${s.name}</td><td>${s.email}</td></tr>`;
    });
    html += "</table>";

    document.getElementById('user-table').innerHTML = html;
}

function showMessage(msg, color) {
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = msg;
    messageDiv.style.color = color;
}

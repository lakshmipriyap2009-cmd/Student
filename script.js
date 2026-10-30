
const form = document.getElementById("studentForm");
const result = document.getElementById("result");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const course = document.getElementById("course").value;
    const phone = document.getElementById("phone").value;

    result.innerHTML = `
        <h3>Registration Successful!</h3>
        <p><strong>Name:</strong> ${escapeHTML(name)}</p>
        <p><strong>Email:</strong> ${escapeHTML(email)}</p>
        <p><strong>Course:</strong> ${escapeHTML(course)}</p>
        <p><strong>Phone:</strong> ${escapeHTML(phone)}</p>
    `;
});

function escapeHTML(value) {
    return value.replace(/[&<>"']/g, function(char) {
        const entities = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        };
        return entities[char];
    });
}

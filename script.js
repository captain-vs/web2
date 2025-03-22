function showSection(section) {
    document.querySelectorAll("section").forEach(sec => sec.classList.remove("active"));
    document.getElementById(section).classList.add("active");
}


document.getElementById("enrollbtn").addEventListener("click", function() {
    alert("Thank you for your interest! Enrollment will open soon.");
});

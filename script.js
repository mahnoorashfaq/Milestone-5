var form = document.getElementById("resumeform");
var resumeDisplay = document.getElementById("resumedisplay");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    //input collection
    var Name = document.getElementById("name").value;
    var Email = document.getElementById("email").value;
    var Number = document.getElementById("number").value;
    var education = document.getElementById("Education").value;
    var experience = document.getElementById("Experience").value;
    var Skills = document.getElementById("skills").value;
    // generated input
    var resumeHtml = "\n<h1>Generate Resume</h1>\n<h3><b>Persoanal Information</b></h3>\n<p><b>Name:</b><span contenteditable=\"true\">".concat(Name, "</span><p>\n<p><b>Email:</b><span contenteditable=\"true\">").concat(Email, "</span><p>\n<p><b>Number:</b> <span contenteditable=\"true\">").concat(Number, "</span><p>\n<h3>Education</h3>\n<p contenteditable=\"true\">").concat(education, "</p>\n<h3 >Experience</h3>\n<p contenteditable=\"true\">").concat(experience, "</p>\n<h3>Skills</h3>\n<p contenteditable=\"true\">").concat(Skills, "</p>");
    if (resumeDisplay) {
        resumeDisplay.innerHTML = resumeHtml;
    }
    else {
        console.error("This resume display is missing");
    }
});
var shareableLink = document.getElementById("shareable-link");
shareableLink === null || shareableLink === void 0 ? void 0 : shareableLink.addEventListener("click", function () {
});
var pdfbutton = document.getElementById("pdf");
pdfbutton === null || pdfbutton === void 0 ? void 0 : pdfbutton.addEventListener("click", function () {
    window.print();
});

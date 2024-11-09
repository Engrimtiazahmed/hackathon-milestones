//Get refences to the form and display area
var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
//Handle Form Submission
form.addEventListener('submit', function (event) {
    event === null || event === void 0 ? void 0 : event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var mobile = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    var resumeHTML = "\n<h2><b>Editable Resume</b></h2>\n<h3>Personal Information</h3>\n<p><b>Name:</b><span contenteditable=\"true\">".concat(name, "</span></p>\n<p><b>Email:</b><span contenteditable=\"true\">").concat(email, "</span></p>\n<p><b>Mobile:</b><span contenteditable=\"true\">").concat(mobile, "</span></p>\n\n<h3>Education</h3>\n<p contenteditable=\"true\"><b>Education:</b>").concat(education, "</p>\n\n<h3>Experience</h3>\n<p contenteditable=\"true\"><b>Experience:</b>").concat(experience, "</p>\n\n<h3>Skills</h3>\n<p contenteditable=\"true\"><b>Skills:</b>").concat(skills, "</p>");
    //DIsplay the generated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('The resume display element is missing');
    }
});

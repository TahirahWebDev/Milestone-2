var form = document.getElementById('resumeForm');
var resumeHeader = document.getElementById('resumeHeader');
var educationSection = document.getElementById('educationSection');
var skillsSection = document.getElementById('skillsSection');
var experienceSection = document.getElementById('experienceSection');
var displayName = document.getElementById('displayName');
var displayEmail = document.getElementById('displayEmail');
var displayEducation = document.getElementById('displayEducation');
var displaySkills = document.getElementById('displaySkills');
var displayExperience = document.getElementById('displayExperience');
var profilePic = document.getElementById('profilePic');
var profilePicInput = document.getElementById('profilePicInput');
form.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var skills = document.getElementById('skills').value.split(',');
    var experience = document.getElementById('experience').value;
    var description = document.getElementById('description').value;
    // Populate resume with form values
    displayName.textContent = name;
    displayEmail.textContent = "".concat(email, " | ").concat(phone);
    displayEducation.textContent = education;
    // Clear previous skills and add new ones
    displaySkills.innerHTML = '';
    skills.forEach(function (skill) {
        var li = document.createElement('li');
        li.textContent = skill.trim();
        displaySkills.appendChild(li);
    });
    displayExperience.innerHTML = "<h3>".concat(experience, "</h3><p>").concat(description, "</p>");
    // Handle profile picture upload
    var file = (_a = profilePicInput.files) === null || _a === void 0 ? void 0 : _a[0];
    if (file) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var _a;
            profilePic.src = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
        };
        reader.readAsDataURL(file);
    }
    // Hide form and show resume sections
    form.style.display = 'none';
    resumeHeader.style.display = 'flex';
    educationSection.style.display = 'block';
    skillsSection.style.display = 'block';
    experienceSection.style.display = 'block';
});

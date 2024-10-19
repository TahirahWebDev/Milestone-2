const form = document.getElementById('resumeForm') as HTMLFormElement;
const resumeHeader = document.getElementById('resumeHeader') as HTMLElement;
const educationSection = document.getElementById('educationSection') as HTMLElement;
const skillsSection = document.getElementById('skillsSection') as HTMLElement;
const experienceSection = document.getElementById('experienceSection') as HTMLElement;

const displayName = document.getElementById('displayName') as HTMLElement;
const displayEmail = document.getElementById('displayEmail') as HTMLElement;
const displayEducation = document.getElementById('displayEducation') as HTMLElement;
const displaySkills = document.getElementById('displaySkills') as HTMLElement;
const displayExperience = document.getElementById('displayExperience') as HTMLElement;
const profilePic = document.getElementById('profilePic') as HTMLImageElement;
const profilePicInput = document.getElementById('profilePicInput') as HTMLInputElement;

form.addEventListener('submit', (event: Event) => {
    event.preventDefault();

    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLInputElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value.split(',');
    const experience = (document.getElementById('experience') as HTMLInputElement).value;
    const description = (document.getElementById('description') as HTMLTextAreaElement).value;

    displayName.textContent = name;
    displayEmail.textContent = `${email} | ${phone}`;
    displayEducation.textContent = education;

    displaySkills.innerHTML = '';
    skills.forEach(skill => {
        const li = document.createElement('li');
        li.textContent = skill.trim();
        displaySkills.appendChild(li);
    });

    displayExperience.innerHTML = `<h3>${experience}</h3><p>${description}</p>`;

    const file = profilePicInput.files?.[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            profilePic.src = e.target?.result as string;
        };
        reader.readAsDataURL(file);
    }

    form.style.display = 'none';
    resumeHeader.style.display = 'flex';
    educationSection.style.display = 'block';
    skillsSection.style.display = 'block';
    experienceSection.style.display = 'block';
});

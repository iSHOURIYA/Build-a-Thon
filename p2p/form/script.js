const userTypeSelect = document.getElementById('userType');
const teacherOptions = document.getElementById('teacherOptions');
const studentOptions = document.getElementById('studentOptions');
const timeSlotSelect = document.getElementById('timeSlot'); // Assumes for teacher
const timeSlotSelectStudent = document.getElementById('timeSlotStudent');

// Populate Time Slots (for both teacher and student)
for (let i = 9; i <= 21; i++) {
    let option = document.createElement('option');
    option.value = i.toString().padStart(2, '0') + ":00";
    option.text = (i > 12 ? i - 12 : i) + ":00 " + (i >= 12 ? 'PM' : 'AM');

    timeSlotSelect.appendChild(option.cloneNode(true)); // Clone for teacher
    timeSlotSelectStudent.appendChild(option); // For student
}

// Show/Hide Option Sections based on user selection
userTypeSelect.addEventListener('change', () => {
    if (userTypeSelect.value === 'teacher') {
        teacherOptions.style.display = 'block';
        studentOptions.style.display = 'none';
    } else if (userTypeSelect.value === 'student') {
        studentOptions.style.display = 'block';
        teacherOptions.style.display = 'none';
    } else {
        teacherOptions.style.display = 'none';
        studentOptions.style.display = 'none';
    }
}); 

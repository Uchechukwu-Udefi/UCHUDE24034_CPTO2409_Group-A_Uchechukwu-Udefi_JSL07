document.addEventListener('DOMContentLoaded', function () {
    const cardForm = document.getElementById('cardForm');
    const modal = document.getElementById('modal');
    const certificateContent = document.getElementById('certificateContent');
    const closeModal = document.querySelector('.close');
  
    // Hide the modal initially
    modal.style.display = 'none';
  
    cardForm.addEventListener('submit', function (e) {
      e.preventDefault();
  
      // 🚨 Get input values
      const studentNameInput = document.getElementById('studentName');
      const personalMessageInput = document.getElementById('personalMessage');
      const courseNameInput = document.getElementById('courseName');
  
      const studentName = studentNameInput.value;
      const personalMessage = personalMessageInput.value;
      const courseName = courseNameInput ? courseNameInput.value : "a course"; // Fallback to "a course" if no input
  
      if (studentName.trim() === '' || personalMessage.trim() === '') {
        alert('Please fill in all fields');
        return;
      }
  
      // 🚨 Generate certificate content dynamically
      certificateContent.innerHTML = `
      <div style="display: block; justify-content: center; align-items: center; margin-top: 20px;">

        <h1>Certificate of Achievement</h1>
        <p>This is to certify that</p>
        <h2>${studentName}</h2>
        <p>has almost completed the</p>
        <h2>${courseName}</h2>
        
        <p>with legendary perseverance and world-class bad-assery for never giving up 🏆</p>
        <img src="logo.png" alt="Code Space logo" style="width: 50%;" />
       
        <p>${personalMessage}</p>
      </div>
      `;
      
      //  Display the modal
      modal.style.display = 'block';
  
      // Clear the form inputs
      studentNameInput.value = '';
      personalMessageInput.value = '';
      if(courseNameInput) courseNameInput.value = '';
    });
  
    //  🚨 Close the modal when the close button is clicked
    closeModal.addEventListener('click', function (e) {
      modal.style.display = 'none';
    });

    // close modal cursor style
    closeModal.style.cursor = 'pointer';
  });
  
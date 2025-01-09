const profilePicture = document.getElementById("profilePicture");
const profileImageInput = document.getElementById("profileImageInput");

// Open file picker when profile picture is clicked
profilePicture.addEventListener("click", () => {
  profileImageInput.click();
});

// Change profile picture when a file is selected
profileImageInput.addEventListener("change", (event) => {
  const file = event.target.files[0];
  if (file && file.type.startsWith("image/")) {
    const reader = new FileReader();
    reader.onload = (e) => {
      profilePicture.src = e.target.result;
    };
    reader.readAsDataURL(file);
  } else {
    alert("Please select a valid image file.");
  }
});





document.getElementById('downloadResumeBtn').addEventListener('click', function() {
    const resumeElement = document.getElementById('resume-container'); // Ensure this ID is correct
    
    // Check if the element exists
    if (resumeElement) {
        const options = {
            margin: [0.25, 0.25, 0.25, 0.25], // Reduced margins to fit content (top, right, bottom, left)
            filename: 'resume.pdf',
            image: { type: 'jpeg', quality: 1 }, // Highest quality for images
            html2canvas: { scale: 10 }, // Increase the scale for higher image resolution
            jsPDF: { 
                unit: 'in', 
                format: 'letter', 
                orientation: 'portrait',
                compressPdf: true, // Compress the PDF for better quality and file size
                hotfixes: ['px_scaling'] // Fixes for pixel scaling issues
            }
        };
        
        // Trigger PDF generation and download
        html2pdf().from(resumeElement).set(options).save();
    } else {
        console.error('Resume container not found!');
    }
});




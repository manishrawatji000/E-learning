document.addEventListener("DOMContentLoaded", () => {
    // Get all elements to be hidden except the splash screen
    const mainContent = document.querySelector("main");
    const header = document.querySelector("header");
    const footer = document.querySelector("footer");

    // Hide all elements except the splash screen
    mainContent.style.display = "none";
    header.style.display = "none";
    footer.style.display = "none";

    const splashScreen = document.getElementById("splashScreen");
    
    // Hide splash screen after 3 seconds
    setTimeout(() => {
        splashScreen.style.display = "none";
        
        // Revert the display settings of other elements
        mainContent.style.display = "block";
        header.style.display = "block";
        footer.style.display = "block";
    }, 1200);
});

// Function to switch between course tabs
function switchTab(courseId) {
    // Hide all course tabs
    const courseTabs = document.querySelectorAll('.course-tab');
    courseTabs.forEach(tab => {
        tab.style.display = 'none';
    });

    // Show the selected course tab
    const selectedCourseTab = document.getElementById(courseId);
    if (selectedCourseTab) {
        selectedCourseTab.style.display = 'block';
    }
}
//for video hovering
document.addEventListener('DOMContentLoaded', () => {
    const videos = document.querySelectorAll('.hover-video');

    videos.forEach(video => {
        video.addEventListener('mouseover', () => {
            video.play();
        });

        video.addEventListener('mouseout', () => {
            video.pause();
            video.currentTime = 0;
        });
    });
});
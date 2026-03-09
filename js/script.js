// Theme toggle functionality - dark mode default
    const toggleSwitch = document.querySelector('#checkbox');
    
    // Set dark mode as default on page load
    document.documentElement.setAttribute('data-theme', 'dark');
    
    // Check for saved theme preference
    const currentTheme = localStorage.getItem('theme');
    
    if (currentTheme) {
      document.documentElement.setAttribute('data-theme', currentTheme);
      
      if (currentTheme === 'light') {
        toggleSwitch.checked = true;
      }
    } else {
      // If no saved preference, ensure dark mode and checkbox unchecked
      document.documentElement.setAttribute('data-theme', 'dark');
      toggleSwitch.checked = false;
    }

    // Function to switch theme
    function switchTheme(e) {
      if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
      } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
      }    
    }

    toggleSwitch.addEventListener('change', switchTheme, false);
  
//  add typewriter effect
const subtitle = document.querySelector('.subtitle');
const text = subtitle.textContent;
subtitle.textContent = '';
let index = 0;

function typeWriter() {
    if (index < text.length) {
        subtitle.textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, 100); 
    }
}

typeWriter();

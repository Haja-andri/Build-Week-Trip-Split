/*
This script intend to read the number of steps that exist in the "How it works section"
and dynamically display the right illustration (picture) based on where is the mouse overing
*/

// fetch the list of steps from 
let steps = document.querySelectorAll('.step');

// loop over the nodelist return

steps.forEach(step => {
    // get the current step identifier (based span value)
    let currentStep = step.querySelector('span').textContent;
    // Add an eventlistner for mouse over
    step.addEventListener('mouseover', ()=> {
        // Updated the photo illustration 
        updateIllus(currentStep);
    });

})

function updateIllus(currentStep) {
    // get the list of images
    let images = document.querySelectorAll('.illustration.steps img') 
    images.forEach(img => {
        // reset all image display
        img.classList.remove('show');
    })
    // pull in the current element being hovered
    let illusStep = document.querySelector(`[data-step="${currentStep}"]`);   
    illusStep.classList.add('show');
}
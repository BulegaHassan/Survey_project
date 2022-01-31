"use strict";
const scrollToTop = () => {
  scroll({
    top: 0,
    behavior: "smooth"
  });
};

const goToStep2Trigger = document.querySelector('#go-to-step-2');
goToStep2Trigger.addEventListener('click', () => {
  scrollToTop();
  setTimeout(() => {
    const step2TabElement = document.querySelector('#step-2-tab');
    const step2Tab = new bootstrap.Tab(step2TabElement);
    step2Tab.show();
  }, 1000)
});

const goToStep3Trigger = document.querySelector('#go-to-step-3');
goToStep3Trigger.addEventListener('click', () => {
  scrollToTop();
  setTimeout(() => {
    const step3TabElement = document.querySelector('#step-3-tab');
    const step3Tab = new bootstrap.Tab(step3TabElement);
    step3Tab.show();
  }, 1000)
});

const submitButton = document.querySelector('#submitButton');
submitButton.addEventListener('click', () => {
  submitButton.disabled = true;
  submitButton.querySelector('.spinner-border').classList.remove('d-none');
  setTimeout(() => {
    window.location.href = 'results.html';
  }, 2000)
});

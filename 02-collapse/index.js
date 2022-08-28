const button = document.querySelector('.collapsible__button');
const textBtnVisible = document.querySelector('.collapsible__action--visible');
const textBtnHidden = document.querySelector('.collapsible__action--hidden');
const content = document.querySelector('.collapsible__content');

let isShowContent;

function showContent() {
    textBtnVisible.style.display = 'block';
    textBtnHidden.style.display = 'none';
    isShowContent = true;
}

function hideContent() {
    textBtnVisible.style.display = 'none';
    textBtnHidden.style.display = 'block';
    isShowContent = false;
}

hideContent();

const animateContent = content.animate([
    {transform: 'translateX(-100%)'}, 
    {transform: 'translateX(0%)'}
], {
    duration: 500,
    fill: 'backwards'
});

animateContent.pause();

button.addEventListener('click', () => {
    if (isShowContent) {
        hideContent();
        animateContent.reverse();
    } else {
        showContent();
        animateContent.play();
    }
});
const button = document.querySelector('.collapsible__button');
const textBtnVisible = document.querySelector('.collapsible__action--visible');
const textBtnHidden = document.querySelector('.collapsible__action--hidden');
const content = document.querySelector('.collapsible__content');

let isShowContent;

function showContent() {
    content.style.transform = 'translateX(0%)';
    textBtnVisible.style.display = 'block';
    textBtnHidden.style.display = 'none';
    isShowContent = true;
}

function hideContent() {
    content.style.transform = 'translateX(-100%)';
    textBtnVisible.style.display = 'none';
    textBtnHidden.style.display = 'block';
    isShowContent = false;
}

hideContent();

const animateContentShow = content.animate([
    {transform: 'translateX(-100%)'}, 
    {transform: 'translateX(0%)'}
], 300);

const animateContentHide = content.animate([
    {transform: 'translateX(0%)'}, 
    {transform: 'translateX(-100%)'}
], 300);

button.addEventListener('click', () => {
    if (isShowContent) {
        animateContentHide.play();
        hideContent();
    } else {
        animateContentShow.play();
        showContent();
    }
});
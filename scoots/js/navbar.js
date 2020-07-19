// html elements
const $hamMenuIcon = document.querySelector('.fa-bars');
const $closeMenuIcon = document.querySelector('.fa-times');
const $hamburgerBtn = document.querySelector('.hamburger-btn');
const $navMenuContainer = document.querySelector('.nav-menu-container');
const $collapsedNavContainer = document.querySelector('.collapsed-nav-container');
const $navMenuItems = $navMenuContainer.innerHTML;
const $navbar = document.querySelector('nav');

// classes
const hamShowAnimationClass = 'hamburger-toggle-show';
const hamIconHideClass = 'hamburger-hide';
const hamburgerIconShowClass = 'hamburger-icon-show';
const showCollapsedNavContainerClass = 'show-collapsed-nav-container';
const slideNavItemsClass = 'slideNavItems';


$navbar.addEventListener('click',(e)=>{
    var style = window.getComputedStyle ? getComputedStyle($hamburgerBtn, null) : $hamburgerBtn.currentStyle;
    if(!$hamMenuIcon.classList.contains('hamburger-hide')&&style.display=="block"){
        handleHamIconClick(e);
    }else{
        handleCloseNavIconClick(e);
    }
});

function handleHamIconClick(event) {
    showCollapsedNav();
    // remove show animation class on hamburger menu icon
    $hamMenuIcon.classList.remove(hamShowAnimationClass);
    // add hide animation class on hamburger menu icon
    $hamMenuIcon.classList.add(hamIconHideClass);

    setTimeout(() => {
        // show close menu icon
        $closeMenuIcon.classList.add(hamburgerIconShowClass);
        // remove hide animation class on close menu icon
        $closeMenuIcon.classList.remove(hamIconHideClass);
        // add show animation on close menu icon
        $closeMenuIcon.classList.add(hamShowAnimationClass);
    }, 100);
}

function handleCloseNavIconClick(event) {
    hideCollapsedNav();
    // remove show animation class on close menu icon
    $closeMenuIcon.classList.remove(hamShowAnimationClass);
    // add hide animation on close menu icon
    $closeMenuIcon.classList.add(hamIconHideClass);
    // hide close menu icon
    setTimeout(() => {
        $closeMenuIcon.classList.remove(hamburgerIconShowClass);

        // remove hide animation class on hamburger menu icon
        $hamMenuIcon.classList.remove(hamIconHideClass);
        // add show animation class on hamburger menu icon
        $hamMenuIcon.classList.add(hamShowAnimationClass);
    }, 100);
}

function showCollapsedNav() {
    $collapsedNavContainer.insertAdjacentHTML('afterbegin', $navMenuItems);
    $collapsedNavContainer.classList.add(showCollapsedNavContainerClass);
}

function hideCollapsedNav() {
    $collapsedNavContainer.classList.remove(showCollapsedNavContainerClass);
    $collapsedNavContainer.innerHTML = '';
}
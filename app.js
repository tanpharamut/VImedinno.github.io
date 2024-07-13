let insidecard = document.querySelectorAll('.div-content');
let sidebarLinks = document.querySelectorAll('.pd---content-inside-card.template-pages---sidebar ul li a');

console.log("insidecard:", insidecard);
console.log("sidebarLinks:", sidebarLinks);

window.onscroll = () => {
    // Check if window width is greater than 767 pixels
    if (window.innerWidth > 767) {
        insidecard.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop + 250;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            console.log("Top:", top);
            console.log("Offset:", offset);
            console.log("height:", height);
            console.log("id:", id);

            if (top >= offset && top < offset + height) {
                sidebarLinks.forEach(links => {
                    links.classList.remove('w--current');
                    document.querySelector('a[href*=' + id + ']').classList.add('w--current');
                });
            };
        });
    } else {
        // Remove 'w--current' class from sidebarLinks when window width is less than 767 pixels
        sidebarLinks.forEach(links => {
            links.classList.remove('w--current');
        });
    }
};

/*--------------------------- SHOW MENU ------------------------------*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    toggle.addEventListener('click', () => {
        nav.classList.toggle('show-menu')
        toggle.classList.toggle('show-icon')
    })
}

showMenu('nav-toggle', 'nav-menu')

function slideSlider() {
    const sliderScroller = $("#slider-scroller");
    const currentLeft = parseInt(sliderScroller.css("left"));
    const itemWidth = $(".slider-item").outerWidth(true); // true includes margin
    const newLeft = currentLeft - itemWidth;

    sliderScroller.css({ "left": currentLeft + "px", "transition": "all 0s linear" });
    setTimeout(() => {
        sliderScroller.css({ "left": newLeft + "px", "transition": "all 5s linear" });

        setTimeout(() => {
            moveSliderItem();
        }, 5000); // Match this with the transition duration
    }, 50); // A small delay to ensure transition reset
}

function moveSliderItem() {
    const sliderScroller = $("#slider-scroller");
    const itemWidth = $(".slider-item").outerWidth(true); // true includes margin
    const currentLeft = parseInt(sliderScroller.css("left"));

    if (currentLeft <= -itemWidth * ($(".slider-item").length - 1)) {
        sliderScroller.children("div").first().detach().appendTo(sliderScroller);
        sliderScroller.css({ "left": "0px", "transition": "none" });
    }

    slideSlider();
}

$(document).ready(function() {
    slideSlider();
});

let insidecard = document.querySelectorAll('.div-content');
let sidebarLinks = document.querySelectorAll('.pd---content-inside-card.template-pages---sidebar ul li a');

console.log("insidecard:", insidecard);
console.log("sidebarLinks:", sidebarLinks);

window.onscroll = () => {
    // Check if window width is greater than 767 pixels
    if (window.innerWidth > 767) {
        insidecard.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop + 1500;
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
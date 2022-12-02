const tabImgs = document.querySelectorAll(".js-nav li");
const tabDesc = document.querySelectorAll(".js-navDescription div");

const links = document.querySelectorAll('.js-menu a[href^="#"]');
if (tabImgs.length && tabDesc.length) {
    tabDesc[0].classList.add("active");

    function activeTab(index) {
        tabDesc.forEach((div) => {
            div.classList.remove("active");
        });
        tabDesc[index].classList.add("active");
    }

    tabImgs.forEach((item, index) => {
        item.addEventListener("click", () => {
            activeTab(index);
        });
    });
}

function scrollToDiv(e) {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");
    const div = document.querySelector(href);

    div.scrollIntoView({
        behavior: "smooth",
        block: "start",
    });
}

links.forEach((link) => {
    link.addEventListener("click", scrollToDiv);
});

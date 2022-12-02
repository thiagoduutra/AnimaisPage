const tabImgs = document.querySelectorAll(".js-nav li");
const tabDesc = document.querySelectorAll(".js-navDescription div");

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

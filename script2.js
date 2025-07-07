document.addEventListener("DOMContentLoaded", () => {
    // Word animation setup
    const words = document.querySelectorAll(".word");
    let currentWordIndex = 0;
    const maxWordIndex = words.length - 1;

    words.forEach((word) => {
        const letters = word.textContent.split("");
        word.textContent = "";
        letters.forEach((letter) => {
            const span = document.createElement("span");
            span.textContent = letter;
            span.className = "letter";
            word.appendChild(span);
        });
    });

    function changeText() {
        const currentWord = words[currentWordIndex];
        const nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

        Array.from(currentWord.children).forEach((letter, i) => {
            setTimeout(() => (letter.className = "letter out"), i * 80);
        });

        setTimeout(() => {
            nextWord.style.opacity = "1";
            Array.from(nextWord.children).forEach((letter, i) => {
                letter.className = "letter behind";
                setTimeout(() => (letter.className = "letter in"), 340 + i * 80);
            });
            currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
        }, currentWord.children.length * 80 + 300);
    }
    changeText();
    setInterval(changeText, 3000);

    // Sticky header on scroll
    const header = document.querySelector("header");
    window.addEventListener("scroll", () => {
        header.classList.toggle("sticky", window.scrollY > 50);
        activeMenu();
    });

    // Active menu highlighting
    const menuLinks = document.querySelectorAll("header ul li a");
    const sections = document.querySelectorAll("section");

    function activeMenu() {
        let len = sections.length;
        while (--len && window.scrollY + 97 < sections[len].offsetTop) {}
        menuLinks.forEach((link) => link.classList.remove("active"));
        menuLinks[len].classList.add("active");
    }
    activeMenu();

    // Portfolio filtering
    const filterButtons = document.querySelectorAll(".filter-buttons .btn");
    const portfolioItems = document.querySelectorAll(".port-box");

    filterButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const filter = button.getAttribute("data-filter");
            portfolioItems.forEach((item) => {
                item.style.display = filter === "all" || item.classList.contains(filter) ? "block" : "none";
            });
        });
    });

    // Circle progress animation
    const circles = document.querySelectorAll(".circle");
    circles.forEach((circle) => {
        const dots = parseInt(circle.getAttribute("data-dots"), 10);
        const percent = parseInt(circle.getAttribute("data-percent"), 10);
        const rotate = 360 / dots;
        const markedDots = Math.floor((dots * percent) / 100);

        let pointsHTML = "";
        for (let i = 0; i < dots; i++) {
            pointsHTML += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
        }
        circle.innerHTML = pointsHTML;

        const points = circle.querySelectorAll(".points");
        for (let i = 0; i < markedDots; i++) {
            points[i].classList.add("marked");
        }
    });

    // Intersection observer animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            entry.target.classList.toggle("show-items", entry.isIntersecting);
        });
    });

    const scrollElements = document.querySelectorAll(".scroll-scale, .scroll-bottom, .scroll-top");
    scrollElements.forEach((el) => observer.observe(el));
});
let words = document.querySelectorAll(".word");
words.forEach((word) => {
    let letters = word.textContent.split("");
    word.textContent = "";
    letters.forEach((letter) => {
        let span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.append(span);
    });
});

let currentWordIndex = 0;
let maxWordIndex = words.length - 1;
words[currentWordIndex].style.opacity = "1";

document.addEventListener('DOMContentLoaded', function() {
    // --- Word animation ---
    const words = document.querySelectorAll(".word");
    words.forEach((word) => {
        let letters = word.textContent.split("");
        word.textContent = "";
        letters.forEach((letter) => {
            let span = document.createElement("span");
            span.textContent = letter;
            span.className = "letter";
            word.append(span);
        });
    });

    
    let currentWordIndex = 0;
    const maxWordIndex = words.length - 1;

    function changeText() {
        let currentWord = words[currentWordIndex];
        let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

        // Animate current word letters out
        Array.from(currentWord.children).forEach((letter, i) => {
            setTimeout(() => {
                letter.className = "letter out";
            }, i * 80);
        });

        // Animate next word letters in
        setTimeout(() => {
            nextWord.style.opacity = "1";
            Array.from(nextWord.children).forEach((letter, i) => {
                letter.className = "letter behind";
                setTimeout(() => {
                    letter.className = "letter in";
                }, 340 + i * 80);
            });
            currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
        }, currentWord.children.length * 80 + 300);
    }

    changeText();
    setInterval(changeText, 3000);

    // --- Circle progress animation --- ///
    const circles = document.querySelectorAll('.circle');
    circles.forEach(elem => {
        var dots = elem.getAttribute("data-dots");
        var marked = elem.getAttribute("data-percent");
        var percent = Math.floor(dots * marked / 100);
        var points = "";
        var rotate = 360 / dots;

        for (let i = 0; i < dots; i++) {
            points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
        }
        elem.innerHTML = points;

        const pointsMarked = elem.querySelectorAll('.points');
        for (let i = 0; i < percent; i++) {
            pointsMarked[i].classList.add('marked');
        }
    });

    // --- Portfolio filter functionality ---
    const filterButtons = document.querySelectorAll('.filter-buttons .btn');
    const portfolioItems = document.querySelectorAll('.port-box');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Show or hide portfolio items based on filter
            portfolioItems.forEach(item => {
                if (filter === 'all' || item.classList.contains(filter)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // --- Scroll-based menu highlighting ---
    const menuli = document.querySelectorAll('header ul li a');
    const sections = document.querySelectorAll('section');

    function activeMenu() {
        let len = sections.length;
        for (let i = 0; i < len; i++) {
            if (window.scrollY + 97 < sections[i].offsetTop) {
                len = i;
                break;
            }
        }
        menuli.forEach(sec => sec.classList.remove("active"));
        menuli[len].classList.add("active");
    }

    // --- Video autoplay ---
    const video = document.getElementById("myVideo");
    if (video) {
        video.autoplay = true;
    }

    // Initial menu highlighting
    activeMenu();
    window.addEventListener('scroll', activeMenu);

    // --- Mixitup Portfolio Gallery ---
    const mixer = mixitup('.portfolio-gallery');
});


function togglePopup(popupId) {
    var popup = document.getElementById(popupId);
    var overlay = document.getElementById("overlay");
    
    // Close any open popups first
    var allPopups = document.getElementsByClassName("popup-box");
    for (var i = 0; i < allPopups.length; i++) {
        if (allPopups[i] !== popup) {
            allPopups[i].classList.remove("show");
        }
    }
    
    // Toggle the selected popup
    popup.classList.toggle("show");
    overlay.classList.toggle("show");
}

function closePopup() {
    var allPopups = document.getElementsByClassName("popup-box");
    var overlay = document.getElementById("overlay");
    for (var i = 0; i < allPopups.length; i++) {
        allPopups[i].classList.remove("show");
    }
    overlay.classList.remove("show");
}

function toggleDetails(element) {
    let details = element.querySelector(".details");
    if (details.classList.contains("show")) {
        details.classList.remove("show");
    } else {
        details.classList.add("show");
    }
}

//active menu///
let menuli = document.querySelectorAll('header ul li a');
let section = document.querySelectorAll('section');

function activeMenu(){
    let len = section.length;
    while(--len && window.scrollY + 97 < section[len].offsetTop){}
    menuli.forEach(sec => sec.classList.remove("active"));
    menuli[len].classList.add("active");
}

activeMenu();
window.addEventListener("scroll",activeMenu); 

/////

 function toggleInfo(id) {
      const infoBoxes = document.querySelectorAll('.info');
      infoBoxes.forEach((box) => {
        if (box.id === id) {
          if (box.classList.contains('show')) {
            box.classList.remove('show');
            setTimeout(() => (box.style.display = 'none'), 600);
          } else {
            infoBoxes.forEach(b => {
              b.classList.remove('show');
              b.style.display = 'none';
            });
            box.style.display = 'block';
            setTimeout(() => box.classList.add('show'), 10);
          }
        } else {
          box.classList.remove('show');
          setTimeout(() => (box.style.display = 'none'), 600);
        }
      });
    }

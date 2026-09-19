
AOS.init();

const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = document.getElementById('menu-icon');

menuBtn.addEventListener('click', () => {

    mobileMenu.classList.toggle('opacity-0');
    mobileMenu.classList.toggle('invisible');
    mobileMenu.classList.toggle('-translate-y-3');


    if (mobileMenu.classList.contains('opacity-0')) {
        menuIcon.classList.remove('fa-xmark', 'rotate-90');
        menuIcon.classList.add('fa-bars');
    } else {
        menuIcon.classList.remove('fa-bars');
        menuIcon.classList.add('fa-xmark', 'rotate-90');
    }
});

// هدا لقسم 5



// 



document.addEventListener("DOMContentLoaded", () => {
    const section = document.getElementById("why-choose-us");
    const counters = document.querySelectorAll(".counter");
    const circles = document.querySelectorAll(".circle-progress");
    let animated = false;

    const startAnimation = () => {

        counters.forEach(counter => {
            const target = +counter.getAttribute("data-target");
            const isComma = counter.getAttribute("data-comma") === "true";
            let count = 0;
            const speed = target / 50;

            const updateCount = () => {
                count += speed;
                if (count < target) {
                    counter.innerText = isComma ? Math.floor(count).toLocaleString() : Math.floor(count);
                    setTimeout(updateCount, 30);
                } else {
                    counter.innerText = isComma ? target.toLocaleString() : target;
                }
            };
            updateCount();
        });


        circles.forEach(circle => {
            const percentage = circle.getAttribute("data-percentage");
            const offset = 100 - percentage;
            circle.style.transition = "stroke-dashoffset 1.5s ease-in-out";
            circle.style.strokeDashoffset = offset;
        });
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !animated) {
                startAnimation();
                animated = true;
                observer.disconnect();
            }
        });
    }, { threshold: 0.3 });

    observer.observe(section);
});


// section 8
document.addEventListener("DOMContentLoaded", () => {
    const section = document.getElementById("how-we-work-section");
    const counter = document.getElementById("project-counter");
    const circle = document.getElementById("circle-progress");
    let animated = false;

    const runAnimations = () => {
        // 1. حركة عداد الأرقام
        const target = +counter.getAttribute("data-target");
        let count = 0;
        const speed = target / 40;

        const updateCount = () => {
            count += speed;
            if (count < target) {
                counter.innerText = Math.floor(count);
                setTimeout(updateCount, 30);
            } else {
                counter.innerText = target;
            }
        };
        updateCount();


        if (circle) {
            const percentage = circle.getAttribute("data-percentage");
            const offset = 100 - percentage;
            circle.style.transition = "stroke-dashoffset 1.5s ease-in-out";
            circle.style.strokeDashoffset = offset;
        }
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !animated) {
                runAnimations();
                animated = true;
                observer.disconnect();
            }
        });
    }, { threshold: 0.3 });

    if (section) {
        observer.observe(section);
    }


    const form = document.getElementById("appointment-form");
    const successMsg = document.getElementById("success-msg");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        successMsg.classList.remove("hidden");
        form.reset();
        setTimeout(() => {
            successMsg.classList.add("hidden");
        }, 4000);
    });
});

//   هدا لصفحة  services 
document.addEventListener("DOMContentLoaded", function () {
    const observerOptions = {
        root: null,
        threshold: 0.3
    };

    const observer = new IntersectionObserver((entries, observerInstance) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {

                const rings = entry.target.querySelectorAll('.progress-ring');
                rings.forEach(ring => {
                    const percentage = ring.getAttribute('data-percentage');

                    ring.style.strokeDasharray = `${percentage}, 100`;
                });

                observerInstance.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const targetSection = document.getElementById('why-choose-us');
    if (targetSection) {
        observer.observe(targetSection);
    }
});



// لصفحة  services 2
document.addEventListener("DOMContentLoaded", function () {
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {
        const btn = item.querySelector(".faq-btn");
        const content = item.querySelector(".faq-content");
        const icon = item.querySelector(".faq-icon");

        btn.addEventListener("click", () => {
            const isOpen = item.classList.contains("active");


            faqItems.forEach(otherItem => {
                otherItem.classList.remove("active");
                otherItem.querySelector(".faq-content").style.maxHeight = null;
                otherItem.querySelector(".faq-icon").textContent = "+";
            });


            if (!isOpen) {
                item.classList.add("active");
                content.style.maxHeight = content.scrollHeight + "px";
                icon.textContent = "-";
            }
        });
    });
});

// هدا  الكود لصفحة  pages 101010


document.addEventListener("DOMContentLoaded", () => {
    const circle = document.getElementById("progress-circle");
    const counter = document.getElementById("counter-number");

    const targetPercent = 75;
    const radius = 44;
    const circumference = 2 * Math.PI * radius;


    const targetOffset = 0;


    circle.style.strokeDasharray = circumference;
    circle.style.strokeDashoffset = circumference;


    setTimeout(() => {
        let currentPercent = 0;
        const duration = 1500;
        const stepTime = 20;
        const steps = duration / stepTime;
        const percentIncrement = targetPercent / steps;
        const offsetIncrement = circumference / steps;

        let currentOffset = circumference;

        const timer = setInterval(() => {
            currentPercent += percentIncrement;
            currentOffset -= offsetIncrement;

            if (currentPercent >= targetPercent) {
                currentPercent = targetPercent;
                currentOffset = targetOffset;
                clearInterval(timer);
            }


            counter.textContent = Math.round(currentPercent) + "%";
            circle.style.strokeDashoffset = currentOffset;
        }, stepTime);
    }, 300);
});



// 



// هدا للقسم التاني لصفحة  faq

const faqData = {
    main: [
        { question: "How does our pricing works ?", answer: "Objectively innovated empowered manufactured products where as parallel holistically predominat extensible testing procedures reliable supply chains dramatically engage top-line web services vis-a-vis cutting-edge deliverables.", isOpen: true },
        { question: "How does our pricing works ?", answer: "Objectively innovated empowered manufactured products where as parallel holistically predominat extensible testing procedures reliable supply chains dramatically engage top-line web services vis-a-vis cutting-edge deliverables.", isOpen: false },
        { question: "Do You Offer Volume Or Loyalty Discounts?", answer: "Objectively innovated empowered manufactured products where as parallel holistically predominat extensible testing procedures reliable supply chains dramatically engage top-line web services vis-a-vis cutting-edge deliverables.", isOpen: false },
        { question: "What Types Of Companies Do You Work With?", answer: "Objectively innovated empowered manufactured products where as parallel holistically predominat extensible testing procedures reliable supply chains dramatically engage top-line web services vis-a-vis cutting-edge deliverables.", isOpen: false }
    ],
    common: [
        { question: "How can I contact customer support?", answer: "You can reach our support team 24/7 through the live chat feature on our website or by sending an email to support@example.com.", isOpen: true },
        { question: "What is the average response time?", answer: "Our average response time for support tickets is under 2 hours during standard business days.", isOpen: false }
    ],
    general: [
        { question: "Where are you located?", answer: "We operate as a fully remote team distributed across multiple time zones worldwide to serve our clients seamlessly.", isOpen: true }
    ],
    legal: [
        { question: "What is your privacy policy?", answer: "We strictly protect your data and adhere to global privacy standards including GDPR and CCPA regulations.", isOpen: true }
    ]
};

let currentCategory = 'main';

function renderFaqs() {
    const container = document.getElementById('faq-container');
    container.innerHTML = '';

    faqData[currentCategory].forEach((item, index) => {
        const faqCard = document.createElement('div');
        faqCard.className = `border border-[#e5e7eb] rounded-lg bg-white overflow-hidden transition-all`;

        faqCard.innerHTML = `
        <button onclick="toggleFaq(${index}, this)" class="w-full flex items-center justify-between p-5 text-left focus:outline-none cursor-pointer group">
          <span class="font-semibold text-[#1f2937] text-base group-hover:text-[#6366f1] transition-colors">${item.question}</span>
          <!-- تم جعل دوران الأيقونة يستغرق 700 ملي ثانية لتصبح أبطأ وأنعى -->
          <i class="fa-solid fa-chevron-down text-sm text-[#4b5563] transition-transform duration-700 ${item.isOpen ? 'rotate-180' : ''}"></i>
        </button>
        
        <!-- تم تغيير المدة إلى duration-700 لتصبح الحركة بطيئة وناعمة -->
        <div class="faq-content overflow-hidden transition-all duration-700 ease-in-out" style="max-height: 0px;">
          <div class="px-5 pb-5 text-[#6b7280] text-sm leading-relaxed border-t border-[#f1f3f5] pt-4">
            ${item.answer}
          </div>
        </div>
      `;
        container.appendChild(faqCard);

        const contentDiv = faqCard.querySelector('.faq-content');
        if (item.isOpen) {
            contentDiv.style.maxHeight = contentDiv.scrollHeight + "px";
        }
    });
}

function toggleFaq(index, buttonElement) {
    const faqCard = buttonElement.parentElement;
    const contentDiv = faqCard.querySelector('.faq-content');
    const icon = buttonElement.querySelector('i');

    faqData[currentCategory][index].isOpen = !faqData[currentCategory][index].isOpen;

    if (contentDiv.style.maxHeight && contentDiv.style.maxHeight !== "0px") {
        contentDiv.style.maxHeight = "0px";
        icon.classList.remove('rotate-180');
    } else {
        contentDiv.style.maxHeight = contentDiv.scrollHeight + "px";
        icon.classList.add('rotate-180');
    }
}

function switchCategory(category, buttonElement) {
    currentCategory = category;

    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.className = "category-btn w-full text-left px-4 py-3 rounded-md font-medium text-sm transition-all text-[#4b5563] hover:bg-[#edf2f7] hover:text-[#1a1a1a]";
    });
    buttonElement.className = "category-btn w-full text-left px-4 py-3 rounded-md font-medium text-sm transition-all bg-[#6366f1] text-white shadow-sm";

    renderFaqs();
}

renderFaqs();



// لصفحة  pasworde

function handleProtectedSubmit(e) {
    e.preventDefault();
}

function validatePassword(e) {
    const passwordInput = document.getElementById('protected-password').value;


    if (passwordInput.trim() === "") {
        e.preventDefault();
        alert("Please enter your password first!");
    } else {

    }
}
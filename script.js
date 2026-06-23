/*
=======================================================================
EDIT YOUR PROJECT PHOTOS AND LINKS HERE
=======================================================================

1. Keep photographs inside the folders used below:
       assets/Writings/
       assets/Events/
       assets/Achievements/

2. Put optional local PDFs or documents inside:
       documents/

3. Add or remove image and link objects as needed.

For an online writing link:
    { label: "Read my essay", type: "Google Doc", url: "https://..." }

For a local PDF:
    { label: "Read my essay PDF", type: "PDF", url: "documents/essay.pdf" }

Leave url as an empty string while you are still preparing the link.
=======================================================================
*/

const projectData = {
    home: {
        seal: "文",
        category: "Published Chinese Writing",
        title: "Published Chinese Articles",
        summary:
            "Six published Chinese pieces showing my growth in reflection, storytelling and audience awareness.",
        description:
            "This collection shows how I use Chinese writing to explore people, culture, emotions and social experiences. Publishing for a real audience has taught me to identify a clear theme, organise ideas, select an appropriate tone and revise carefully. Together, the pieces demonstrate both my interest in Chinese language and my potential in Chinese media storytelling.",
        skills: [
            "Chinese writing",
            "Story development",
            "Editing and revision",
            "Audience awareness"
        ],
        images: [
            {
                src: "assets/Writings/w1.png",
                alt: "Screenshot of a published Chinese article on ZB Schools",
                caption: "Published on ZB Schools — a selected article showing my ability to develop a clear theme and write for a public audience.",
                links: [
                    {
                        label: "Read《没有被记住的第一名》",
                        type: "ZB Schools article",
                        url: "https://www.zbschools.sg/article/detail/2026000277"
                    }
                ]
            },
            {
                src: "assets/Writings/w2.png",
                alt: "Published article titled 人权日，在沉默与喧哗间寻找温柔",
                caption: "《人权日，在沉默与喧哗间寻找温柔》— a reflective article about dignity, fairness and the small acts of empathy that help others feel heard.",
                links: [
                    {
                        label: "Read《人权日，在沉默与喧哗间寻找温柔》",
                        type: "Lianhe Zaobao article",
                        url: "https://www.zaobao.com.sg/lifestyle/gen/story20251226-8010024"
                    }
                ]
            },
            {
                src: "assets/Writings/w3.png",
                alt: "Published article titled 哈芝节 · 他们没有把我当外人",
                caption: "《哈芝节 · 他们没有把我当外人》— a personal account of belonging, kindness and intercultural understanding during Hari Raya Haji.",
                links: [
                    {
                        label: "Read《哈芝节 · 他们没有把我当外人》",
                        type: "Lianhe Zaobao article",
                        url: "https://www.zaobao.com.sg/lifestyle/gen/story20250620-6860888?ref=article-extended-read"
                    }
                ]
            },
            {
                src: "assets/Writings/w4.png",
                alt: "Published article titled 失眠的夜，不只是失眠",
                caption: "《失眠的夜，不只是失眠》— a reflective piece that looks beyond sleeplessness to the fears, emotions and vulnerability people may carry in silence.",
                links: [
                    {
                        label: "Read《失眠的夜，不只是失眠》",
                        type: "Lianhe Zaobao article",
                        url: "https://www.zaobao.com.sg/lifestyle/gen/story20250808-7272704?ref=article-extended-read"
                    }
                ]
            },
            {
                src: "assets/Writings/w5.png",
                alt: "Published article titled 在这个季节，好好说声谢谢",
                caption: "《在这个季节，好好说声谢谢》— a warm reflection on gratitude, everyday kindness and recognising the people who help us continue moving forward.",
                links: [
                    {
                        label: "Read《在这个季节，好好说声谢谢》",
                        type: "Lianhe Zaobao article",
                        url: "https://www.zaobao.com.sg/lifestyle/gen/story20251128-7874700?ref=article-extended-read"
                    }
                ]
            },
            {
                src: "assets/Writings/w6.png",
                alt: "Screenshot of a published Chinese article on ZB Schools",
                caption: "Published on ZB Schools — another example of my Chinese writing, revision and ability to communicate an idea to readers.",
                links: [
                    {
                        label: "Read《那盏灯》",
                        type: "ZB Schools article",
                        url: "https://www.zbschools.sg/article/detail/2025001117"
                    }
                ]
            }
        ]
    },

    festivals: {
        seal: "文",
        category: "Culture & Community",
        title: "Cultural Learning and Events",
        summary:
            "Three selected photographs showing how I learn about culture through participation, observation and reflection.",
        description:
            "These activities helped me move beyond reading about culture and learn through direct participation. They encouraged me to observe how traditions are presented, adapted and understood by different people in Singapore, while strengthening my confidence in communication and reflection.",
        skills: [
            "Cultural awareness",
            "Observation",
            "Participation",
            "Reflection"
        ],
        images: [
            {
                src: "assets/Events/E1.jpeg",
                alt: "Photograph from a ZB Schools exhibition",
                caption: "早报校园展览 — This experience showed me how Chinese-language content can be presented in an engaging and accessible way for students and the wider community."
            },
            {
                src: "assets/Events/E2.jpeg",
                alt: "Photograph from an NTU cultural camp",
                caption: "NTU 文化营 — The camp gave me opportunities to learn through activities, exchange perspectives and deepen my appreciation of Chinese culture."
            },
            {
                src: "assets/Events/E3.jpeg",
                alt: "Photograph from an annual student correspondent orientation",
                caption: "年度通讯员迎新会 — The orientation introduced me to the responsibilities of a student correspondent and the importance of observation, accuracy and clear communication."
            }
        ]
    },

    achievements: {
        seal: "奖",
        category: "CCA Achievement Record",
        title: "Co-Curriculum Participation & Achievement Records",
        summary:
            "A focused record of leadership, achievement, participation, service and enrichment activities from my secondary school CCA certificate.",
        description:
            "These records show consistent participation in choir, school leadership, competitions, performances, service learning and enrichment activities. The focus is on the learning experiences and achievement types that support this portfolio; private identification details are not included.",
        skills: [
            "Leadership",
            "Achievement",
            "Participation",
            "Service",
            "Enrichment",
            "Responsibility"
        ],
        images: [
            {
                src: "assets/Achievements/cca-page-1.jpeg",
                alt: "Co-Curriculum Certificate page 1 showing attainment, leadership and enrichment records",
                caption: "CCA overview — Co-curricular attainment: Excellent. Level of Attainment: Leadership 4, Achievement 4, Participation 5, Service 5, Bonus Points 2. Leadership roles include Environment Advocate, Upper Sec CCA Executive Committee and Upper Sec Section/Group Leader."
            },
            {
                src: "assets/Achievements/cca-page-2.jpeg",
                alt: "Co-Curriculum Certificate page 2 showing achievement events from 2023 to 2026",
                caption: "Achievement records — Events include Choir SYF 2025, 24th Speech Day, Hari Raya Concert, Speech Day performances, National Day Concerts, inter-class games, badminton carnivals, Chinese Mini Fiction Creative Writing Competition and National Mandarin Oratorial Competition."
            },
            {
                src: "assets/Achievements/cca-page-3.jpeg",
                alt: "Co-Curriculum Certificate page 3 showing achievement continuation, participation and VIA service records",
                caption: "Participation and service records — Choir participation from 2022–2026 reached Level 5. VIA service totalled 49 hours, including SG60 engagement activities, Community Service @ Sparkletots, In-House Choir Concert Crescendo, Befriending @ Renci, Green@Hillgrove and Dengue Prevention."
            }
        ]
    }
};

document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector(".site-header");
    const navToggle = document.querySelector(".nav-toggle");
    const navMenu = document.querySelector(".nav-menu");
    const navLinks = [...document.querySelectorAll(".nav-menu a")];
    const sections = [...document.querySelectorAll("main section[id]")];
    const revealElements = document.querySelectorAll(".reveal");
    const filterButtons = document.querySelectorAll(".filter-button");
    const portfolioCards = [...document.querySelectorAll(".portfolio-card")];
    const galleryOpenButtons = document.querySelectorAll(".gallery-open-button");
    const contactForm = document.querySelector("#contact-form");
    const formStatus = document.querySelector("#form-status");
    const yearElement = document.querySelector("#current-year");

    const galleryModal = document.querySelector("#portfolio-gallery-modal");
    const galleryClose = document.querySelector(".gallery-modal-close");
    const galleryPrevious = document.querySelector(".gallery-previous");
    const galleryNext = document.querySelector(".gallery-next");
    const galleryMainImage = document.querySelector("#gallery-main-image");
    const galleryCaption = document.querySelector("#gallery-caption");
    const galleryCounter = document.querySelector("#gallery-counter");
    const galleryThumbnails = document.querySelector("#gallery-thumbnails");
    const galleryImageLinks = document.querySelector("#gallery-image-links");
    const gallerySkills = document.querySelector("#gallery-skills");

    let currentProject = null;
    let currentImageIndex = 0;
    let lastGalleryTrigger = null;
    let imageSwapTimer = null;

    if (yearElement) yearElement.textContent = new Date().getFullYear();

    // Scroll-linked tea pouring animation.
    const teaStory = document.querySelector("#tea-scroll-story");

    const updateTeaProgress = () => {
        if (!teaStory) return;

        const scrollableHeight =
            document.documentElement.scrollHeight - window.innerHeight;
        const rawProgress =
            scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0;
        const progress = Math.min(1, Math.max(0, rawProgress));

        // The vertical tea stream follows the entire page journey.
        teaStory.style.setProperty("--tea-progress", progress.toFixed(4));
        teaStory.style.setProperty(
            "--tea-progress-height",
            `${(progress * 100).toFixed(2)}%`
        );
        teaStory.style.setProperty(
            "--tea-tilt",
            `${(-7 + progress * 7).toFixed(2)}deg`
        );

        // The cup begins filling during the final 22% of the page.
        const cupFill = Math.min(1, Math.max(0, (progress - 0.78) / 0.22));
        teaStory.style.setProperty("--cup-fill", cupFill.toFixed(4));
        teaStory.style.setProperty(
            "--cup-fill-height",
            `${(cupFill * 25).toFixed(2)}px`
        );

        teaStory.classList.toggle("journey-complete", progress > 0.985);
    };

    updateTeaProgress();
    window.addEventListener("scroll", updateTeaProgress, { passive: true });
    window.addEventListener("resize", updateTeaProgress);

    // Header styling after scrolling.
    const updateHeader = () => {
        header.classList.toggle("scrolled", window.scrollY > 20);
    };

    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });

    // Mobile navigation.
    const closeMenu = () => {
        navToggle.classList.remove("open");
        navMenu.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
        navToggle.setAttribute("aria-label", "Open navigation menu");
    };

    navToggle.addEventListener("click", () => {
        const isOpen = navMenu.classList.toggle("open");

        navToggle.classList.toggle("open", isOpen);
        navToggle.setAttribute("aria-expanded", String(isOpen));
        navToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );
    });

    navLinks.forEach((link) => link.addEventListener("click", closeMenu));

    document.addEventListener("click", (event) => {
        const clickedInsideNav =
            navMenu.contains(event.target) || navToggle.contains(event.target);

        if (!clickedInsideNav && navMenu.classList.contains("open")) {
            closeMenu();
        }
    });

    // Scroll reveal animation with a fallback for older browsers.
    if ("IntersectionObserver" in window) {
        const revealObserver = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return;

                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                });
            },
            {
                threshold: 0.12,
                rootMargin: "0px 0px -40px 0px"
            }
        );

        revealElements.forEach((element) => revealObserver.observe(element));
    } else {
        revealElements.forEach((element) => element.classList.add("visible"));
    }

    // Navbar highlighting. One nav link may represent several sections.
    if (navLinks[0]) navLinks[0].classList.add("active");

    if ("IntersectionObserver" in window) {
        const sectionObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return;

                    navLinks.forEach((link) => {
                        const representedSections =
                            (link.dataset.sections || "").split(" ");

                        link.classList.toggle(
                            "active",
                            representedSections.includes(entry.target.id)
                        );
                    });
                });
            },
            {
                rootMargin: "-35% 0px -55% 0px",
                threshold: 0
            }
        );

        sections.forEach((section) => sectionObserver.observe(section));
    }

    // Chinese window cards.
    const closeCard = (card) => {
        card.classList.remove("open");
        card.setAttribute("aria-expanded", "false");
    };

    const openCard = (card) => {
        portfolioCards.forEach((otherCard) => {
            if (otherCard !== card) closeCard(otherCard);
        });

        card.classList.add("open");
        card.setAttribute("aria-expanded", "true");

        // On small screens, keep the opened card comfortably in view.
        if (window.matchMedia("(max-width: 760px)").matches) {
            window.setTimeout(() => {
                card.scrollIntoView({ behavior: "smooth", block: "nearest" });
            }, 80);
        }
    };

    const toggleCard = (card) => {
        if (card.classList.contains("open")) {
            closeCard(card);
        } else {
            openCard(card);
        }
    };

    portfolioCards.forEach((card) => {
        card.addEventListener("click", (event) => {
            // Keep links/buttons/details inside the card from triggering card open/close.
            if (event.target.closest("a, button, input, textarea, select, summary")) return;

            // Mobile fix: once the card is open, tapping the revealed text should not
            // close it by accident. Use the Close button to close it.
            if (card.classList.contains("open")) return;

            openCard(card);
        });

        card.addEventListener("keydown", (event) => {
            if (event.target.closest("button")) return;
            if (event.key !== "Enter" && event.key !== " ") return;

            event.preventDefault();
            toggleCard(card);
        });

        const closeButton = card.querySelector(".close-window");
        if (closeButton) {
            closeButton.addEventListener("click", (event) => {
                event.stopPropagation();
                closeCard(card);
            });
        }
    });

    // Portfolio filters.
    filterButtons.forEach((button) => {
        button.setAttribute("aria-pressed", String(button.classList.contains("active")));
        button.addEventListener("click", () => {
            const selectedFilter = button.dataset.filter;

            filterButtons.forEach((item) => {
                item.classList.remove("active");
                item.setAttribute("aria-pressed", "false");
            });
            button.classList.add("active");
            button.setAttribute("aria-pressed", "true");

            portfolioCards.forEach((card) => {
                const matches =
                    selectedFilter === "all" ||
                    card.dataset.category === selectedFilter;

                if (!matches) closeCard(card);
                card.classList.toggle("hidden", !matches);
            });
        });
    });

    // ---------- Full photo gallery ----------

    const missingImageDataUrl = (label = "Image unavailable") => {
        const safeLabel = String(label).replace(/[<>&"']/g, "");
        const svg = `
            <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800">
                <rect width="1200" height="800" fill="#f1e6cf"/>
                <rect x="42" y="42" width="1116" height="716" rx="28" fill="none" stroke="#8f1723" stroke-width="8"/>
                <text x="600" y="360" text-anchor="middle" font-family="Arial, sans-serif" font-size="52" fill="#5f0b12">${safeLabel}</text>
                <text x="600" y="430" text-anchor="middle" font-family="Arial, sans-serif" font-size="28" fill="#746b60">Check the image file name and folder.</text>
            </svg>`;
        return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
    };

    const resourceIcon = (type = "") => {
        const lowerType = type.toLowerCase();

        if (lowerType.includes("video") || lowerType.includes("youtube")) return "影";
        if (lowerType.includes("pdf") || lowerType.includes("document")) return "档";
        if (lowerType.includes("slide")) return "示";
        if (lowerType.includes("research") || lowerType.includes("folder")) return "研";
        if (lowerType.includes("verification") || lowerType.includes("certificate")) return "证";
        return "文";
    };

    const renderImageLinks = (links = []) => {
        galleryImageLinks.innerHTML = "";

        if (links.length === 0) {
            galleryImageLinks.hidden = true;
            return;
        }

        galleryImageLinks.hidden = false;

        const heading = document.createElement("p");
        heading.className = "gallery-inline-title";
        heading.textContent = "Open the published article";

        const linkList = document.createElement("div");
        linkList.className = "gallery-link-list";

        links.forEach((link) => {
            if (link.url && link.url.trim()) {
                const anchor = document.createElement("a");
                anchor.className = "gallery-resource-link";
                anchor.href = link.url;
                anchor.target = "_blank";
                anchor.rel = "noopener noreferrer";
                anchor.innerHTML = `
                    <span class="resource-icon">${resourceIcon(link.type)}</span>
                    <span class="resource-text">
                        <strong>${link.label}</strong>
                        <small>${link.type}</small>
                    </span>
                    <span class="resource-arrow">↗</span>
                `;
                linkList.appendChild(anchor);
                return;
            }

            const placeholder = document.createElement("div");
            placeholder.className = "gallery-resource-placeholder";
            placeholder.innerHTML = `
                <span class="resource-icon">${resourceIcon(link.type)}</span>
                <span class="resource-text">
                    <strong>${link.label}</strong>
                    <small>${link.type}</small>
                </span>
                <span class="resource-arrow">Add URL</span>
            `;
            linkList.appendChild(placeholder);
        });

        galleryImageLinks.append(heading, linkList);
    };

    const renderGallerySkills = (skills) => {
        gallerySkills.innerHTML = "";

        skills.forEach((skill) => {
            const tag = document.createElement("span");
            tag.textContent = skill;
            gallerySkills.appendChild(tag);
        });
    };

    const displayImage = (index) => {
        if (!currentProject || currentProject.images.length === 0) return;

        const imageCount = currentProject.images.length;
        currentImageIndex = (index + imageCount) % imageCount;
        const image = currentProject.images[currentImageIndex];

        galleryMainImage.classList.add("changing");
        window.clearTimeout(imageSwapTimer);

        imageSwapTimer = window.setTimeout(() => {
            galleryMainImage.onerror = () => {
                galleryMainImage.onerror = null;
                galleryMainImage.src = missingImageDataUrl("Image unavailable");
            };
            galleryMainImage.src = image.src;
            galleryMainImage.alt = image.alt;
            galleryCaption.textContent = image.caption;
            galleryCounter.textContent =
                `${currentImageIndex + 1} / ${imageCount}`;
            renderImageLinks(image.links || []);

            [...galleryThumbnails.children].forEach((thumbnail, thumbnailIndex) => {
                const isActive = thumbnailIndex === currentImageIndex;
                thumbnail.classList.toggle("active", isActive);
                thumbnail.setAttribute("aria-pressed", String(isActive));

                if (isActive) {
                    thumbnail.scrollIntoView({
                        behavior: "smooth",
                        block: "nearest",
                        inline: "nearest"
                    });
                }
            });

            galleryMainImage.classList.remove("changing");
        }, 150);
    };

    const renderThumbnails = (images) => {
        galleryThumbnails.innerHTML = "";

        images.forEach((image, index) => {
            const button = document.createElement("button");
            button.className = "gallery-thumbnail";
            button.type = "button";
            button.setAttribute("aria-label", `Show photograph ${index + 1}`);
            button.setAttribute("aria-pressed", String(index === 0));
            const thumbnailImage = document.createElement("img");
            thumbnailImage.src = image.src;
            thumbnailImage.alt = "";
            thumbnailImage.loading = "lazy";
            thumbnailImage.decoding = "async";
            thumbnailImage.addEventListener("error", () => {
                thumbnailImage.src = missingImageDataUrl(`Image ${index + 1}`);
            }, { once: true });
            button.appendChild(thumbnailImage);
            button.addEventListener("click", () => displayImage(index));
            galleryThumbnails.appendChild(button);
        });
    };

    const openProjectGallery = (projectId, trigger) => {
        const project = projectData[projectId];
        if (!project) return;

        currentProject = project;
        currentImageIndex = 0;
        lastGalleryTrigger = trigger;

        document.querySelector("#gallery-seal").textContent = project.seal;
        document.querySelector("#gallery-category").textContent = project.category;
        document.querySelector("#gallery-title").textContent = project.title;
        document.querySelector("#gallery-summary").textContent = project.summary;
        document.querySelector("#gallery-description").textContent =
            project.description;

        renderThumbnails(project.images);
        renderGallerySkills(project.skills);
        displayImage(0);

        if (typeof galleryModal.showModal === "function") {
            galleryModal.showModal();
        } else {
            galleryModal.setAttribute("open", "");
        }
    };

    const closeProjectGallery = () => {
        if (typeof galleryModal.close === "function") {
            galleryModal.close();
        } else {
            galleryModal.removeAttribute("open");
        }
    };

    galleryOpenButtons.forEach((button) => {
        button.addEventListener("click", (event) => {
            event.stopPropagation();
            openProjectGallery(button.dataset.project, button);
        });
    });

    galleryClose.addEventListener("click", closeProjectGallery);
    galleryPrevious.addEventListener("click", () => {
        displayImage(currentImageIndex - 1);
    });
    galleryNext.addEventListener("click", () => {
        displayImage(currentImageIndex + 1);
    });

    galleryModal.addEventListener("click", (event) => {
        if (event.target === galleryModal) closeProjectGallery();
    });

    galleryModal.addEventListener("close", () => {
        if (lastGalleryTrigger) lastGalleryTrigger.focus();
    });

    document.addEventListener("keydown", (event) => {
        if (!galleryModal.open) return;

        if (event.key === "ArrowLeft") displayImage(currentImageIndex - 1);
        if (event.key === "ArrowRight") displayImage(currentImageIndex + 1);
    });


    // Optional contact form support. The edited EAE version uses a static summary panel.
    if (contactForm && formStatus) {
        contactForm.addEventListener("submit", (event) => {
            event.preventDefault();

            const formData = new FormData(contactForm);
            const name = String(formData.get("name") || "").trim();

            formStatus.textContent =
                `Thank you${name ? `, ${name}` : ""}. This demo form is not connected ` +
                "to an email service yet.";
            contactForm.reset();
        });
    }
});

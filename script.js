// Data for Our February Story
const START_DATE = new Date("2025-01-31"); // Start from Jan 31
const DAYS_DATA = [
    { date: "31 Jan", title: "The Beginning of Us", icon: "✨" },
    { date: "1 Feb", title: "Dance With Me Day", icon: "💃" },
    { date: "2 Feb", title: "All Your Favorites Day", icon: "🍫" },
    { date: "3 Feb", title: "Words From My Heart Day", icon: "💌" },
    { date: "4 Feb", title: "Your Song Day", icon: "🎵" },
    { date: "5 Feb", title: "The Interview of Love", icon: "🎤" },
    { date: "6 Feb", title: "My Voice, My Feelings Day", icon: "🗣️" },
    { date: "7 Feb", title: "Petals for You Day", icon: "🌹" },
    { date: "8 Feb", title: "I Choose You Day", icon: "💍" },
    { date: "9 Feb", title: "Sweet Like You Day", icon: "🍰" },
    { date: "10 Feb", title: "Hold This for Me Day", icon: "🤝" },
    { date: "11 Feb", title: "Promises I Keep Day", icon: "🤞" },
    { date: "12 Feb", title: "Arms Around You Day", icon: "🤗" },
    { date: "13 Feb", title: "Close to You Day", icon: "💞" },
    { date: "14 Feb", title: "Our Kind of Love Day", icon: "💘" },
    { date: "15 Feb", title: "Painted With Love Day", icon: "🎨" },
    { date: "16 Feb", title: "Ink From My Soul Day", icon: "✒️" },
    { date: "17 Feb", title: "Laugh With Me Day", icon: "😂" },
    { date: "18 Feb", title: "Our Story, My Voice Day", icon: "🎙️" },
    { date: "19 Feb", title: "A Little Magic Day", icon: "🎩" },
    { date: "20 Feb", title: "How Well Do You Know Us Day", icon: "🤔" },
    { date: "21 Feb", title: "Our Music, Our Vibe Day", icon: "🎧" },
    { date: "22 Feb", title: "Melodies & Memories Night", icon: "🎹" },
    { date: "23 Feb", title: "Open When You Need Me Day", icon: "✉️" },
    { date: "24 Feb", title: "Pages of Our Story Day", icon: "📖" },
    { date: "25 Feb", title: "Songs That Sound Like Us Day", icon: "🎶" },
    { date: "26 Feb", title: "Made With My Own Hands Day", icon: "🧶" },
    { date: "27 Feb", title: "Drawn From My Heart Day", icon: "🖼️" },
    { date: "28 Feb", title: "The Movie of Us", icon: "🎬" }
];

const LOCAL_IMAGES = [
    "images/photo_6226728214789295241_y.jpg",
    "images/photo_6226728214789295242_y (1).jpg",
    "images/photo_6226728214789295242_y.jpg",
    "images/photo_6226728214789295243_y (1).jpg",
    "images/photo_6226728214789295243_y.jpg",
    "images/photo_6226728214789295259_y.jpg",
    "images/photo_6226728214789295260_y.jpg",
    "images/photo_6226728214789295261_y.jpg",
    "images/photo_6226728214789295262_y (1).jpg",
    "images/photo_6226728214789295262_y.jpg",
    "images/photo_6226728214789295263_y.jpg",
    "images/photo_6226728214789295264_y.jpg",
    "images/photo_6226728214789295265_y.jpg",
    "images/photo_6226728214789295266_y.jpg",
    "images/photo_6226728214789295267_y.jpg",
    "images/photo_6226728214789295268_y.jpg",
    "images/photo_6226728214789295300_y.jpg",
    "images/photo_6226728214789295301_y.jpg",
    "images/photo_6226728214789295302_y.jpg",
    "images/photo_6226728214789295303_y.jpg",
    "images/photo_6226728214789295304_y.jpg",
    "images/photo_6226728214789295305_y.jpg",
    "images/photo_6226728214789295306_y.jpg",
    "images/photo_6226728214789295307_y.jpg",
    "images/photo_6226728214789295308_y.jpg",
    "images/photo_6226728214789295309_y.jpg",
    "images/photo_6226728214789295351_y.jpg",
    "images/photo_6226728214789295414_y (1).jpg",
    "images/photo_6226728214789295414_y.jpg",
    "images/photo_6226728214789295428_y.jpg",
    "images/photo_6226728214789295429_y (1).jpg",
    "images/photo_6226728214789295429_y.jpg",
    "images/photo_6226728214789295430_y.jpg",
    "images/photo_6325509992987346197_y.jpg",
    "images/photo_6325509992987346198_y.jpg",
    "images/photo_6325509992987346199_y.jpg",
    "images/photo_6325509992987346200_y.jpg",
    "images/photo_6325509992987346201_y.jpg",
    "images/photo_6325509992987346208_y.jpg",
    "images/photo_6325509992987346209_y.jpg",
    "images/photo_6325509992987346213_y.jpg",
    "images/photo_6325509992987346216_y.jpg",
    "images/photo_6325509992987346228_y.jpg",
    "images/photo_6325509992987346235_y.jpg",
    "images/photo_6325509992987346237_y.jpg",
    "images/photo_6325509992987346242_y.jpg",
    "images/photo_6325509992987346260_y.jpg",
    "images/photo_6325509992987346262_y.jpg",
    "images/photo_6325509992987346265_y.jpg",
    "images/photo_6325509992987346266_y.jpg",
    "images/photo_6325509992987346267_y.jpg",
    "images/photo_6325509992987346307_y.jpg",
    "images/photo_6325509992987346308_y (1).jpg",
    "images/photo_6325509992987346308_y.jpg",
    "images/photo_6325509992987346309_y.jpg",
    "images/photo_6327761758441297097_y.jpg",
    "images/photo_6327761758441297098_y (1).jpg",
    "images/photo_6327761758441297098_y.jpg",
    "images/photo_6327761758441297099_y.jpg",
    "images/photo_6327761758441297100_y.jpg",
    "images/photo_6327761758441297101_y.jpg",
    "images/photo_6327761758441297102_y.jpg",
    "images/photo_6327761758441297103_y.jpg",
    "images/photo_6327761758441297104_y.jpg",
    "images/photo_6327761758441297105_y.jpg",
    "images/photo_6327761758441297106_y.jpg",
    "images/photo_6327761758441297107_y.jpg",
    "images/photo_6327761758441297108_y.jpg",
    "images/photo_6327761758441297109_y.jpg",
    "images/photo_6327761758441297110_y.jpg",
    "images/photo_6327761758441297111_y.jpg",
    "images/photo_6327761758441297113_y.jpg",
    "images/photo_6327761758441297114_y.jpg",
    "images/photo_6327761758441297115_y.jpg",
    "images/photo_6327761758441297116_y.jpg",
    "images/photo_6327761758441297117_y.jpg",
    "images/photo_6327761758441297118_y.jpg",
    "images/photo_6327761758441297119_y.jpg",
    "images/photo_6327761758441297120_y.jpg",
    "images/photo_6327761758441297121_y.jpg",
    "images/photo_6327761758441297122_y.jpg",
    "images/photo_6327761758441297123_y.jpg",
    "images/photo_6327761758441297124_y.jpg",
    "images/photo_6327761758441297125_y.jpg",
    "images/photo_6327761758441297126_y.jpg",
    "images/photo_6327761758441297127_y.jpg",
    "images/photo_6327761758441297139_y.jpg"
];

const WEB_IMAGES = [
    // Cute, high-quality royalty free touches
    "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=400&q=80", // Cute cat
    "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=400&q=80", // Love heart
    "https://images.unsplash.com/photo-1474552226712-ac0f0961a954?auto=format&fit=crop&w=400&q=80", // Flowers
    "https://images.unsplash.com/photo-1590626448626-d24297127b7f?auto=format&fit=crop&w=400&q=80", // Pink aesthetic
    "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=400&q=80"  // Pastel gradient
];

const ALL_IMAGES = [...LOCAL_IMAGES, ...WEB_IMAGES];

// Configuration for Cloudinary - USER MUST UPDATE THESE
// See SETUP_GUIDE.md for instructions
const CLOUDINARY_CLOUD_NAME = "dwzdi4g6c";
const CLOUDINARY_UPLOAD_PRESET = "february_story_uploads";

document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const audio = document.getElementById('bg-music');
    const musicBtn = document.getElementById('music-control');
    const passwordInput = document.getElementById('password-input');
    const passwordGate = document.getElementById('password-gate');
    const mainContent = document.getElementById('main-content');
    const errorMsg = document.getElementById('error-msg');
    const startBtn = document.getElementById('start-journey-btn');
    const timelineContainer = document.querySelector('#timeline');
    const heroImg = document.querySelector('.hero-img');

    // Personalized Hero Image (Rotating)
    if (heroImg && ALL_IMAGES.length > 0) {
        // Pick random start image
        heroImg.src = ALL_IMAGES[Math.floor(Math.random() * ALL_IMAGES.length)];

        // Rotate images every 4 seconds
        setInterval(() => {
            const randomImg = ALL_IMAGES[Math.floor(Math.random() * ALL_IMAGES.length)];
            heroImg.style.opacity = 0;
            setTimeout(() => {
                heroImg.src = randomImg;
                heroImg.style.opacity = 1;
            }, 600); // Transitions match CSS
        }, 4000);
    }

    // Add Sticker Decorations (Global Distribution)
    // Invoked after timeline render below

    // Render Timeline first to ensure height is calculated
    renderTimeline();

    // Add Sticker Decorations (Global Distribution)
    setTimeout(addStickers, 500);

    function addStickers() {
        // We want stickers everywhere!
        const totalHeight = Math.max(
            document.body.scrollHeight,
            document.body.offsetHeight,
            document.documentElement.clientHeight,
            document.documentElement.scrollHeight,
            document.documentElement.offsetHeight
        );

        // Increase count for full page coverage
        const stickerCount = 50;

        for (let i = 0; i < stickerCount; i++) {
            const imgPath = ALL_IMAGES[Math.floor(Math.random() * ALL_IMAGES.length)];
            const sticker = document.createElement('img');
            sticker.src = imgPath;
            sticker.className = 'sticker floating';

            // Random positioning
            // We want some left, some right, avoiding the center column where text is
            let randomLeft;
            if (Math.random() > 0.5) {
                randomLeft = Math.random() * 25; // 0-25% (Left side)
            } else {
                randomLeft = 75 + Math.random() * 25; // 75-100% (Right side)
            }

            // Allow some to overlap hero center
            if (i < 10) randomLeft = Math.random() * 90;

            const randomTop = Math.random() * totalHeight;

            const randomRotate = (Math.random() - 0.5) * 40; // -20 to 20 deg
            const randomSize = Math.random() * 100 + 60; // 60-160px

            sticker.style.left = `${randomLeft}%`;
            sticker.style.top = `${randomTop}px`;
            sticker.style.transform = `rotate(${randomRotate}deg)`;
            sticker.style.width = `${randomSize}px`;
            sticker.style.opacity = '0.6';
            // Random animation delay for floaty effect
            sticker.style.animationDelay = `${Math.random() * 5}s`;

            document.body.appendChild(sticker);
        }

        // Scroll Indicator
        const heroSection = document.querySelector('.hero');
        if (!document.querySelector('.scroll-indicator')) {
            const scrollInd = document.createElement('div');
            scrollInd.className = 'scroll-indicator';
            scrollInd.innerHTML = '⬇';
            scrollInd.onclick = () => document.getElementById('timeline').scrollIntoView({ behavior: 'smooth' });
            heroSection.appendChild(scrollInd);
        }
    }

    // Password Gate Logic
    const unlockBtn = document.getElementById('unlock-btn');

    // Allow clicking the heart button
    if (unlockBtn) {
        unlockBtn.addEventListener('click', () => checkPassword(passwordInput.value));
    }

    passwordInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            checkPassword(passwordInput.value);
        }
    });

    function checkPassword(input) {
        // Strict password check
        // The powerhouse of the cell!
        const cleanInput = input.trim().toLowerCase();
        if (cleanInput === "mitochondria") {
            unlockSite();
        } else {
            errorMsg.classList.remove('hidden');
            // Shake effect
            passwordInput.classList.add('shake');
            setTimeout(() => passwordInput.classList.remove('shake'), 500);

            errorMsg.textContent = "Try again, my love.";
        }
    }

    function unlockSite() {
        passwordGate.style.opacity = '0';
        setTimeout(() => {
            passwordGate.classList.add('hidden');
            mainContent.classList.remove('hidden');
            playMusic();
            musicBtn.classList.remove('hidden');
        }, 1000);
    }

    // Music Logic
    function playMusic() {
        audio.volume = 0.3; // Gentle volume
        audio.play().catch(e => console.log("Auto-play prevented by browser policy"));
        musicBtn.textContent = '⏸️';
    }

    musicBtn.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            musicBtn.textContent = '⏸️';
        } else {
            audio.pause();
            musicBtn.textContent = '▶️';
        }
    });

    // Scroll to Timeline
    startBtn.addEventListener('click', () => {
        document.getElementById('timeline').scrollIntoView({ behavior: 'smooth' });
    });

    // Timeline rendered above in addStickers flow

    function renderTimeline() {
        DAYS_DATA.forEach((day, index) => {
            const card = document.createElement('div');
            card.className = 'day-card fade-in';
            card.style.animationDelay = `${index * 0.1}s`; // Staggered animation

            // Generate safe tag for Cloudinary (no spaces, special chars)
            // Example: story_feb_31_jan_the_beginning
            const cleanDate = day.date.replace(/[^a-zA-Z0-9]/g, '_').toLowerCase();
            const cleanTitle = day.title.replace(/[^a-zA-Z0-9]/g, '_').toLowerCase().substring(0, 20);
            const dayTag = `story_${cleanDate}`; // simplified tag
            const folderName = `our-february-story/${dayTag}`;

            card.innerHTML = `
                <div class="day-header" data-index="${index}">
                    <span class="day-date">${day.date}</span>
                    <span class="day-title">${day.title}</span>
                    <span class="day-icon">${day.icon}</span>
                </div>
                <div class="day-content" id="content-${index}">
                    <p class="memory-placeholder">"A memory will bloom here…" 🌸</p>
                    <button class="upload-btn" onclick="openUploadWidget('${folderName}', '${dayTag}', 'gallery-${index}')">
                        📸 Upload Memory
                    </button>
                    <div class="media-gallery" id="gallery-${index}"></div>
                    ${day.title === "The Movie of Us" ? getFinaleContent() : ''}
                </div>
            `;

            // Expand/Collapse Logic
            card.querySelector('.day-header').addEventListener('click', () => {
                card.classList.toggle('expanded');
                if (day.title === "The Movie of Us" && card.classList.contains('expanded')) {
                    // Special behavior for finale
                    triggerFinaleEffect();
                }
            });

            timelineContainer.appendChild(card);

            // Fetch existing memories for this day
            fetchDayMemories(dayTag, `gallery-${index}`);
        });
    }

    // Fetch existing memories using Cloudinary Client-Side List (JSON)
    function fetchDayMemories(tag, galleryId) {
        // Fetch images
        const imageUrl = `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/list/${tag}.json`;

        // This requires "Resource List" to be enabled in Cloudinary Security Settings
        fetch(imageUrl)
            .then(response => {
                if (!response.ok) throw new Error('Network response was not ok');
                return response.json();
            })
            .then(data => {
                if (data.resources && data.resources.length > 0) {
                    // Hide placeholder
                    const gallery = document.getElementById(galleryId);
                    const placeholder = gallery.parentElement.querySelector('.memory-placeholder');
                    if (placeholder) placeholder.style.display = 'none';

                    data.resources.forEach(res => {
                        // Construct direct URL (since list only gives public_id)
                        // defaults: v<version>/<public_id>.<format>
                        const fullUrl = `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/v${res.version}/${res.public_id}.${res.format}`;
                        displayMediaItem(fullUrl, 'image', galleryId);
                    });
                }
            })
            .catch(error => {
                // Silently fail if no resources found or list disabled (404 is common for no resources)
            });

        // Fetch videos (separate call needed for video vs image in list api)
        const videoUrl = `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/video/list/${tag}.json`;
        fetch(videoUrl)
            .then(response => response.json())
            .then(data => {
                if (data.resources) {
                    const gallery = document.getElementById(galleryId);
                    const placeholder = gallery.parentElement.querySelector('.memory-placeholder');
                    if (placeholder) placeholder.style.display = 'none';

                    data.resources.forEach(res => {
                        const fullUrl = `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/video/upload/v${res.version}/${res.public_id}.${res.format}`;
                        displayMediaItem(fullUrl, 'video', galleryId);
                    });
                }
            })
            .catch(e => { }); // ignore
    }

    function getFinaleContent() {
        return `
            <div id="finale-overlay" class="hidden">
                <div class="finale-msg">
                    <h2>"This was just one month…<br>I choose you for every month after this."</h2>
                </div>
            </div>
        `;
    }

    function triggerFinaleEffect() {
        // Show the cinematic overlay
        const overlay = document.getElementById('finale-overlay');
        if (overlay) {
            overlay.classList.remove('hidden');
            // Optional: Smooth scroll to centered view or special effect
            document.body.style.overflow = 'hidden'; // Stop scrolling to focus on moment

            // Allow closing by clicking
            overlay.addEventListener('click', () => {
                overlay.classList.add('hidden');
                document.body.style.overflow = 'auto';
            });
        }
    }

});

// Cloudinary Widget Function (Global scope to be accessible from HTML)
function openUploadWidget(folderName, tag, galleryId) {
    const widget = cloudinary.createUploadWidget({
        cloudName: CLOUDINARY_CLOUD_NAME,
        uploadPreset: CLOUDINARY_UPLOAD_PRESET,
        folder: folderName,
        tags: [tag], // Add the specific day tag
        context: { alt: "Our Story Memory" },
        sources: ['local', 'camera', 'instagram'],
        styles: {
            palette: {
                window: "#FFF0F5",
                windowBorder: "#FFB7B2",
                tabIcon: "#C71585",
                menuIcons: "#FF9CEE",
                textDark: "#4a4a4a",
                textLight: "#FFFFFF",
                link: "#C71585",
                action: "#FFB7B2",
                inactiveTabIcon: "#E0E0E0",
                error: "#F44235",
                inProgress: "#0078FF",
                complete: "#20B832",
                sourceBg: "#FAE1DD"
            }
        }
    }, (error, result) => {
        if (!error && result && result.event === "success") {
            console.log('Upload success:', result.info);
            // We can just add it directly to view instantly
            const isVideo = result.info.resource_type === 'video';
            displayMediaItem(result.info.secure_url, isVideo ? 'video' : 'image', galleryId);

            // Hide placeholder
            const gallery = document.getElementById(galleryId);
            const placeholder = gallery.parentElement.querySelector('.memory-placeholder');
            if (placeholder) placeholder.style.display = 'none';
        }
    });

    widget.open();
}

function displayMediaItem(url, type, galleryId) {
    const gallery = document.getElementById(galleryId);
    if (!gallery) return;

    // Check if this item is already there to avoid duplicates from list fetching vs new upload
    // using simple src check
    const existing = gallery.querySelector(`[src="${url}"]`);
    if (existing) return;

    const container = document.createElement('div');

    let mediaHtml = '';
    if (type === 'video') {
        mediaHtml = `<video src="${url}" class="media-item" controls></video>`;
    } else {
        mediaHtml = `<img src="${url}" class="media-item" alt="Memory">`;
    }

    container.innerHTML = `
        ${mediaHtml}
        <a href="${url}" download target="_blank" style="font-size: 0.8rem; text-decoration: none; color: #888;">⬇ Save</a>
    `;

    gallery.appendChild(container);
}

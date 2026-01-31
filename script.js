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

// Configuration for Cloudinary
const CLOUDINARY_CLOUD_NAME = "dwzdi4g6c"; // Replace with your cloud name
const CLOUDINARY_UPLOAD_PRESET = "february_story_uploads"; // Replace with your unsigned preset

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

    // Password Gate Logic
    passwordInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            checkPassword(passwordInput.value);
        }
    });

    function checkPassword(input) {
        // Simple password check (case-insensitive)
        const validPasswords = ["love", "us", "forever", "february", "heart"];

        // Allow any non-empty password for easier user experience if they forget, 
        // or strictly enforce the list above. Let's be lenient but "romantic".
        if (input.trim().length > 0) {
            unlockSite();
        } else {
            errorMsg.classList.remove('hidden');
            passwordInput.classList.add('shake');
            setTimeout(() => passwordInput.classList.remove('shake'), 500);
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

    // Render Timeline
    renderTimeline();

    function renderTimeline() {
        DAYS_DATA.forEach((day, index) => {
            const card = document.createElement('div');
            card.className = 'day-card fade-in';
            card.style.animationDelay = `${index * 0.1}s`; // Staggered animation

            // Generate safe folder name for Cloudinary
            const folderName = `our-february-story/${day.date.replace(' ', '-').toLowerCase()}-${day.title.replace(/ /g, '-').toLowerCase()}`;
            // We use the folder name as the tag/identifier for upload too (kept for legacy/consistency)
            const dayTag = folderName;

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

            // Load existing memories via Netlify Function
            loadMemories(folderName, document.getElementById(`gallery-${index}`));
        });
    }

    // Fetch existing memories using Netlify Serverless Function
    // This allows searching validation without exposing API secrets
    async function loadMemories(dayFolder, galleryElement) {
        try {
            // Call our local serverless function (works in prod and netlify dev)
            // Encode the folder name to be safe in URL
            const response = await fetch(`/.netlify/functions/list-memories?folder=${encodeURIComponent(dayFolder)}`);

            if (!response.ok) {
                // If 404 or 500, just silently fail or log
                return;
            }

            const files = await response.json();

            if (files && files.length > 0) {
                // Hide placeholder
                const placeholder = galleryElement.parentElement.querySelector('.memory-placeholder');
                if (placeholder) placeholder.style.display = 'none';

                // Clear to prevent duplicates if called multiple times
                galleryElement.innerHTML = "";

                files.forEach(file => {
                    displayMediaItem(file.url, file.type, galleryElement);
                });
            }
        } catch (err) {
            // console.error("Error loading memories", err);
        }
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

function displayMediaItem(url, type, galleryIdOrElement) {
    let gallery;
    if (typeof galleryIdOrElement === 'string') {
        gallery = document.getElementById(galleryIdOrElement);
    } else {
        gallery = galleryIdOrElement;
    }

    if (!gallery) return;

    // Check if this item is already there to avoid duplicates
    const existing = gallery.querySelector(`[src="${url}"]`);
    if (existing) return;

    const container = document.createElement('div');

    let mediaHtml = '';
    // Cloudinary resource_type can be 'video' or 'image'
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

    // Ensure placeholder is hidden if we added something manually
    const placeholder = gallery.parentElement.querySelector('.memory-placeholder');
    if (placeholder) placeholder.style.display = 'none';
}

# 🌹 Setup Guide for "Our February Story"

Before sharing this love story, you need to set up the memory vault (Cloudinary) so photos and videos can be saved forever.

## 1️⃣ Create Cloudinary Account

1.  Go to [cloudinary.com](https://cloudinary.com) and sign up for a free account.
2.  Once logged in, look at your **Dashboard**.

## 2️⃣ Get Your Cloud Name

1.  On the Dashboard, find the **Product Environment Credentials** section.
2.  Copy your **Cloud Name** (e.g., `dxyzv...`).

## 3️⃣ Create Upload Preset (Important!)

This allows uploading without a backend server.

1.  Go to **Settings** (Gear icon) → **Upload**.
2.  Scroll down to **Upload presets** and click **Add Upload Preset**.
3.  **Name**: You can leave the generated name or change it.
4.  **Signing Mode**: Select **Unsigned**.
5.  **Folder**: Type `our-february-story`.
    *   This ensures all files go into one main folder.
6.  **Tags**: You can enable "Auto-tagging" if you like, but not required.
7.  Click **Save**.
8.  Copy the **Name** of the preset you just created (e.g., `my_preset_unsigned`).

## 4️⃣ Deploy to Netlify

To ensure your memories are safe and load automatically, you need to host this site on Netlify.

1.  **Push to GitHub**: Upload your project code to a GitHub repository.
2.  **Connect to Netlify**:
    *   Log in to Netlify.
    *   Click "Add new site" → "Import from existing project".
    *   Select your GitHub repository.
3.  **Environment Variables (CRITICAL!)**:
    *   In the Netlify dashboard for your site, go to **Site Settings**.
    *   Click **Environment variables**.
    *   Add the following variables (values found in your Cloudinary Dashboard):
        *   `CLOUDINARY_CLOUD_NAME`: Your cloud name.
        *   `CLOUDINARY_API_KEY`: Your API Key.
        *   `CLOUDINARY_API_SECRET`: Your API Secret.

## 5️⃣ Add to Code

1.  Open the file `script.js` in this folder.
2.  Look for lines ~30-34:

```javascript
const CLOUDINARY_CLOUD_NAME = "demo"; // ⬅️ REPLACE THIS with your Cloud Name
const CLOUDINARY_UPLOAD_PRESET = "docs_upload_example_us_preset"; // ⬅️ REPLACE THIS with your Preset Name
```

3.  Save the file.

## 5️⃣ How It Works

*   Open `index.html`.
*   Enter the password (default is "love", "us", etc.).
*   Click "Begin Our Journey".
*   Click on a Day Card (e.g., Feb 1).
*   Click **Upload Memory**.
*   Select photos/videos.
*   They will instantly appear in the gallery for that day!
*   **Note**: Because this is a private diary without a database, the images show up immediately for you after upload. If you reload the page, you'd need a backend to fetch them. **However**, all memories are safely stored in your Cloudinary account under the `our-february-story` folder, organized by date!

## 💾 How to Download Later

*   You can download any image/video from the site immediately after upload using the "Save" link.
*   Or log into Cloudinary Media Library to see everything organized purely by folders.

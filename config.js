/* ============================================================
   Guardian Dashboard Config — Render URL সেট করা আছে ✅
   Dashboard host করো বা না করো — এই ফাইল + UI দুটোতেই চলবে
   ============================================================ */
window.GUARDIAN_CONFIG = {
  // Render Backend (live) ✅
  BACKEND_URL: "https://dcbot-w5ky.onrender.com",

  // Discord OAuth — Developer Portal > OAuth2 থেকে Client ID বসাও
  // না বসালে Login বাটনে "setup needed" দেখাবে, বাকি dashboard চলবে
  DISCORD_CLIENT_ID: "",

  // Firebase Console > Project Settings > Your apps > Web
  firebaseConfig: {
    apiKey: "PASTE_WEB_API_KEY",
    authDomain: "yt-auto-upload5.firebaseapp.com",
    projectId: "yt-auto-upload5",
    storageBucket: "yt-auto-upload5.firebasestorage.app"
  }
};

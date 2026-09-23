/* ============================================================
   Guardian Dashboard Config
   - Netlify-তে /api proxy চলে (netlify.toml), পেজে URL দেখা যায় না
   - BACKEND_URL শুধু লোকাল ফলব্যাক (file:// বা localhost-এ খুললে)
   ============================================================ */
window.GUARDIAN_CONFIG = {
  BACKEND_URL: "https://dcbot-w5ky.onrender.com",

  DISCORD_CLIENT_ID: "1552232862898720838",

  // Firebase Web (yt-auto-upload5)
  firebaseConfig: {
    apiKey: "AIzaSyAsHOutQjVuXlNX86yCLYnj7uK80LpepXw",
    authDomain: "yt-auto-upload5.firebaseapp.com",
    databaseURL: "https://yt-auto-upload5-default-rtdb.firebaseio.com",
    projectId: "yt-auto-upload5",
    storageBucket: "yt-auto-upload5.firebasestorage.app",
    messagingSenderId: "956345854783",
    appId: "1:956345854783:web:baa564948633b7ac2c818a"
  }
};

// Firebase Configuration and Initialization (Compat version for Vanilla JS)
const firebaseConfig = {
  apiKey: "AIzaSyCwAOOdocVeUoa7BYeCbpIMxqI_SZ7AL00",
  authDomain: "mint-coffee-77bb6.web.app",
  projectId: "mint-coffee-77bb6",
  storageBucket: "mint-coffee-77bb6.firebasestorage.app",
  messagingSenderId: "142384020485",
  appId: "1:142384020485:web:8d5f080adb0de31acf706c",
  measurementId: "G-E1M03YTJMH"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// Global Auth State
let currentUser = null;

document.addEventListener('DOMContentLoaded', () => {
    const authModal = document.getElementById('authModal');
    const authOverlay = document.getElementById('authOverlay');
    const closeAuthBtn = document.getElementById('closeAuthBtn');
    
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const showRegisterBtn = document.getElementById('showRegisterBtn');
    const showLoginBtn = document.getElementById('showLoginBtn');

    // UI Toggles
    window.handleAuthClick = () => {
        if (currentUser) {
            window.location.href = 'perfil.html';
        } else {
            openAuthModal();
        }
    };

    window.openAuthModal = () => {
        authModal.classList.remove('translate-y-full', 'opacity-0');
        authOverlay.classList.remove('opacity-0', 'pointer-events-none');
        // Close mobile menu if open
        const mobileMenu = document.getElementById('mobileMenu');
        if(mobileMenu && mobileMenu.classList.contains('translate-y-0')) {
            document.getElementById('mobileMenuBtn').click();
        }
    };

    window.closeAuthModal = () => {
        authModal.classList.add('translate-y-full', 'opacity-0');
        authOverlay.classList.add('opacity-0', 'pointer-events-none');
    };

    if(closeAuthBtn) closeAuthBtn.addEventListener('click', closeAuthModal);
    if(authOverlay) authOverlay.addEventListener('click', closeAuthModal);

    if(showRegisterBtn) showRegisterBtn.addEventListener('click', (e) => {
        e.preventDefault();
        loginForm.classList.add('hidden');
        registerForm.classList.remove('hidden');
    });

    if(showLoginBtn) showLoginBtn.addEventListener('click', (e) => {
        e.preventDefault();
        registerForm.classList.add('hidden');
        loginForm.classList.remove('hidden');
    });

    // Auth Actions
    if(loginForm) loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const pass = document.getElementById('loginPass').value;
        auth.signInWithEmailAndPassword(email, pass)
            .then(() => closeAuthModal())
            .catch(error => alert('Error: ' + error.message));
    });

    if(registerForm) registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('regEmail').value;
        const pass = document.getElementById('regPass').value;
        auth.createUserWithEmailAndPassword(email, pass)
            .then(() => closeAuthModal())
            .catch(error => alert('Error: ' + error.message));
    });

    // Google Auth Logic
    const googleLoginBtns = document.querySelectorAll('.google-auth-btn');
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    
    googleLoginBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            auth.signInWithPopup(googleProvider)
                .then(() => closeAuthModal())
                .catch(error => alert('Error: ' + error.message));
        });
    });

    window.logoutUser = () => {
        auth.signOut().then(() => {
            window.location.href = 'index.html';
        });
    };

    // Auth State Observer
    auth.onAuthStateChanged(user => {
        currentUser = user;
        updateAuthUI(user);
        
        // Let cart.js know auth state changed so it can sync
        if(typeof syncCartWithAuth === 'function') {
            syncCartWithAuth(user);
        }
    });
});

function updateAuthUI(user) {
    const authBtnText = document.getElementById('authBtnText');
    const authBtnIcon = document.getElementById('authBtnIcon');

    if (user) {
        // Logged In
        const shortEmail = user.email.split('@')[0];
        if(authBtnText) authBtnText.innerText = `Perfil (${shortEmail})`;
        if(authBtnIcon) {
            // Update icon to look "filled" or active
            authBtnIcon.innerHTML = `<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4" fill="currentColor"/>`;
        }
    } else {
        // Logged Out
        if(authBtnText) authBtnText.innerText = "Acceder";
        if(authBtnIcon) {
            authBtnIcon.innerHTML = `<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>`;
        }
    }
}

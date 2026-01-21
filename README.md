AOG Church App (Expo + React Native + Firebase)

This is a minimal scaffold for a modern, mobile-first church application built with Expo, React Native and Firebase. It contains an app entry, basic navigation, placeholder screens and a Firebase initialization module.

What I added
- `App.js` - app entry wiring navigator and Firebase provider
- `src/navigation/AppNavigator.js` - stack navigator with placeholder screens
- `src/screens/*` - basic screens (Home, Sermons, Bible, Hymns, Events)
- `src/firebase/firebaseConfig.js` - Firebase initialization (fill with your keys)
- `src/firebase/FirebaseProvider.js` - small React context to provide firebase services
- `package.json`, `app.json`, `babel.config.js` - minimal Expo config
- `.gitignore`

Next steps (Windows PowerShell)
1. Install dependencies:

   npm install

   # Then also install peer/native deps recommended by React Navigation and Expo
   expo install react-native-gesture-handler react-native-safe-area-context react-native-screens

2. Start the dev server:

   npm start

3. On your phone: open Expo Go and scan the QR code, or run on emulator:

   npm run android
   npm run ios

Firebase setup
- Open `src/firebase/firebaseConfig.js` and replace the placeholder config with your Firebase project's config object.
- Enable Authentication providers in the Firebase Console (Email/Password, Google).
- Configure Firestore rules and Storage as needed.

Notes
- This scaffold intentionally keeps UI minimal; it's focused on architecture and wiring. Expand each screen and add components as you iterate.

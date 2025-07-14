


# Zizzi E2E Tests

End-to-End testing suite for the Zizzi Loyalty App using **Detox** (for iOS and Android) and **Playwright** (for WebViews).

---

##  Prerequisites

- Node.js (v18+ recommended)
- Xcode & iOS Simulator (for iOS tests), Android Studio & Emulator (for Android tests)
- Expo CLI (`npm install -g expo-cli`)
- EAS CLI (`npm install -g eas-cli`)
- Detox CLI (`npm install -g detox-cli`)
- Playwright (`npx playwright install`)
- An Expo Dev Build of the app (with `expo-dev-client`)

---

## Folder Structure

```
src/
├── e2e/
│   ├── tests/                 # Detox tests
│   ├── support/               # Custom Detox setup + global types
│   
├── playwright/
│   ├── tests/                 # Playwright specs
│   └── utils/                 # Auth helpers, etc.
```

---

## 🚀 Getting Started

### 1. Install dependencies

```sh
npm install
npx playwright install
```

---

### 2. Build the Expo app for testing (iOS or Android)

```sh
cd ../zizzi-loyalty-app
# For iOS
npx expo run:ios --no-install
# For Android
npx expo run:android --no-install
```

> Make sure you're using a dev client with `expo-dev-client` configured.

---

### 3. Run Detox tests

```sh
# For iOS
npx detox test --configuration ios.sim.debug

# For Android (if configured)
npx detox test --configuration android.emu.debug
```

---

### 4. Run Playwright tests

```sh
npx playwright test
```

---

## 🧪 Writing Tests

- Detox test files: `src/e2e/tests/*.e2e.ts`
- Playwright test files: `src/playwright/tests/*.spec.ts`
- Detox global types: Add shared globals in `global.d.ts`
- Detox setup: Extend logic in `support/setup.js` if needed

---

## ⚙️ TypeScript & Jest

Ensure the following `tsconfig.json` config is in place:

```json
{
  "compilerOptions": {
    "module": "Node16",
    "target": "ES2021",
    "moduleResolution": "Node16",
    "types": ["jest"],
    "typeRoots": ["./node_modules/@types", "./src/e2e/support"],
    ...
  },
  "include": ["src", "src/e2e/support/global.d.ts"]
}
```

---

## 🧹 Cleaning

If Detox or the build is acting up:

```sh
# From root
watchman watch-del-all
rm -rf node_modules ios android .expo .expo-shared
npm cache clean --force
npm install

cd ../zizzi-loyalty-app
npx expo prebuild --clean

# For Android
cd android
./gradlew clean
cd ..
```

---

## ✅ VSCode Tips

- Add `"jest"` to the `types` in `tsconfig.json` to remove `describe/it` errors.
- Detox types are automatically inferred via `global.d.ts`.
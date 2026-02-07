# Baby Name Tinder - Next Steps Guide

## Current Project Status

✅ **Completed:**
- Planning documentation created (TODO.md, TODO_NEXT_ROUND.md)
- Repository initialized with Git
- Design assets prepared (iOS icons, design documents)
- Development roadmap defined

⚠️ **Current State:**
- The `BabyNameTinderCode/BabyNameTinder` directory is empty
- No Xcode project has been created yet
- Git repository is functional and synced

## Immediate Next Steps

### Step 1: Create the Xcode Project

You need to create an iOS app project using Xcode. Here's how:

1. **Open Xcode** on your Mac
2. **Create a New Project:**
   - File → New → Project
   - Select "iOS" → "App"
   - Click "Next"
3. **Configure the Project:**
   - Product Name: `BabyNameTinder`
   - Team: Select your Apple Developer account
   - Organization Identifier: `com.yourname` (or your preferred identifier)
   - Interface: **SwiftUI**
   - Language: **Swift**
   - Storage: **None** (we'll add Firebase later)
   - Click "Next"
4. **Save Location:**
   - Navigate to: `/Users/shizf/xcodeprojects/BABY_NAME_TINDER/BabyNameTinderCode/`
   - **IMPORTANT:** Uncheck "Create Git repository" (we already have one)
   - Click "Create"

### Step 2: Set Up Git Ignore

Before making any commits, add a proper `.gitignore` file for iOS development:

```bash
cd /Users/shizf/xcodeprojects/BABY_NAME_TINDER
```

Create a `.gitignore` file with the following content (or use the one I'll provide in this commit):

```
# Xcode
.DS_Store
*.xcuserstate
xcuserdata/
*.moved-aside
DerivedData/
*.hmap
*.ipa
*.dSYM.zip
*.dSYM

# CocoaPods
Pods/

# Carthage
Carthage/Build/

# Swift Package Manager
.swiftpm/
.build/

# Fastlane
fastlane/report.xml
fastlane/Preview.html
fastlane/screenshots
fastlane/test_output
```

### Step 3: Begin Phase 1 Implementation

According to TODO.md, Phase 1 is already marked complete, but since the code directory is empty, you need to implement it. Start with:

1. **Create the folder structure:**
   ```
   BabyNameTinder/
   ├── Models/
   ├── Views/
   │   ├── Onboarding/
   │   └── Main/
   ├── ViewModels/
   ├── Services/
   └── Theme/
   ```

2. **Implement the Theme System:**
   - Create `Theme/AppColors.swift`
   - Create `Theme/AppTypography.swift`
   - Create `Theme/AppTheme.swift`
   - Define colors in Assets.xcassets (Oatmeal, Sage, Terracotta, Mustard, Deep Ocean)

3. **Set Up Basic Architecture:**
   - Create `ViewModels/AppCoordinator.swift`
   - Create `Views/RootView.swift`
   - Create `Views/Onboarding/OnboardingContainerView.swift`
   - Update `BabyNameTinderApp.swift` to use AppCoordinator

### Step 4: Add Dependencies

Once the basic structure is in place, add Firebase:

1. **Add Firebase SDK:**
   - In Xcode: File → Add Package Dependencies
   - Enter: `https://github.com/firebase/firebase-ios-sdk`
   - Select version 10.0.0 or later
   - Add packages: FirebaseAuth, FirebaseFirestore, FirebaseAnalytics

2. **Configure Firebase:**
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Create a new project or use existing
   - Add iOS app with bundle identifier
   - Download `GoogleService-Info.plist`
   - Add it to your Xcode project

### Step 5: Implement Core Features

Follow the TODO.md phases in order:
- ✅ Phase 1: Foundation & Architecture (in progress)
- Phase 2: Data Models & Services
- Phase 3: UI Implementation - Core Swiping
- Phase 4: UI Implementation - Matching & Family
- Phase 5: Monetization & Store Readiness

## Git Workflow Guide

### Making Commits

After making changes:

```bash
# Check what files changed
git status

# Add all changes
git add .

# Or add specific files
git add BabyNameTinderCode/BabyNameTinder/Theme/AppColors.swift

# Commit with a message
git commit -m "Implement AppColors theme system"

# Push to GitHub
git push origin main
```

### Troubleshooting Git Push Issues

If you encounter **HTTP 400 errors** when pushing:

1. **Check your GitHub authentication:**
   ```bash
   # Use Personal Access Token instead of password
   git remote set-url origin https://YOUR_USERNAME:YOUR_TOKEN@github.com/shizhangfan/BABY_NAME_TINDER.git
   ```

2. **Or use SSH instead of HTTPS:**
   ```bash
   # First set up SSH key on GitHub
   git remote set-url origin git@github.com:shizhangfan/BABY_NAME_TINDER.git
   ```

3. **Verify remote URL:**
   ```bash
   git remote -v
   ```

### Setting Repository to Public

To make your GitHub repository public:

1. Go to: https://github.com/shizhangfan/BABY_NAME_TINDER
2. Click **Settings** (at the top of the repository page)
3. Scroll down to the **Danger Zone** section
4. Click **Change visibility**
5. Select **Make public**
6. Confirm by typing the repository name

**Note:** Make sure you don't have any sensitive information (API keys, passwords) in your code before making it public!

## Development Workflow

### Recommended Iteration Cycle

1. **Pick a feature** from TODO.md or TODO_NEXT_ROUND.md
2. **Create a branch** for the feature:
   ```bash
   git checkout -b feature/theme-system
   ```
3. **Implement the feature** in small increments
4. **Test in Xcode simulator** frequently
5. **Commit changes** with clear messages
6. **Push to GitHub**:
   ```bash
   git push origin feature/theme-system
   ```
7. **Create a Pull Request** on GitHub to merge into main
8. **Review and merge**

### Testing as You Go

- Use Xcode's live preview for SwiftUI views (`⌥⌘↵` or `Option+Command+Return`)
- Run the app in simulator frequently (`⌘R` or `Command+R`)
- Test on a real device when possible
- Add unit tests as you build core logic (ViewModels, Services)

## Priority Tasks (Next 2 Weeks)

Based on TODO_NEXT_ROUND.md, here are the highest priority items:

### Week 1: Fix Critical Issues
1. ✅ Create Xcode project structure
2. Fix swipe limit inconsistency (alert says 50, constant is 5)
3. Add missing privacy strings to Info.plist
4. Remove unused ContentView.swift template file
5. Implement loading state in SwipeViewModel

### Week 2: Polish Core Experience
1. Add haptic feedback on swipe actions
2. Implement card entrance animations
3. Add celebration animation for matches
4. Improve swipe gesture feel (spring curves, scale effects)
5. Test end-to-end user flow

## Resources

- **SwiftUI Documentation:** https://developer.apple.com/documentation/swiftui
- **Firebase iOS Guide:** https://firebase.google.com/docs/ios/setup
- **Design Reference:** See `Baby Name Tinder iOS App Design and Features/` directory
- **App Icons:** See `baby_name_tinder_ios_icons/` directory

## Questions or Stuck?

If you run into issues:

1. **Xcode Build Errors:** Check that all file references are correct and Firebase is properly configured
2. **Git Issues:** Refer to the Git Workflow section above
3. **Firebase Issues:** Verify GoogleService-Info.plist is included and Firebase is initialized in AppDelegate
4. **Design Questions:** Refer to the design documentation in the repository

## Summary

**Your next immediate action:** Create the Xcode project in the `BabyNameTinderCode/` directory, then start implementing Phase 1 from TODO.md. The planning is done—now it's time to build! 🚀

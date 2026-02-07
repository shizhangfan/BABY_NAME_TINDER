# 🍼 Baby Name Tinder

A modern iOS app that gamifies the baby naming process with a Tinder-style swipe interface. Perfect for couples and families to collaboratively find the perfect name for their little one!

## 📱 Features

### Core Experience
- **Swipe Interface**: Intuitive Tinder-style card swiping for browsing baby names
- **Name Details**: View name meanings, origins, and pronunciations
- **Audio Pronunciation**: Hear how each name is pronounced
- **Gender Filtering**: Browse names by gender preference

### Collaboration
- **Family Circles**: Create or join a family circle to share preferences
- **Match Detection**: Automatically identify names both partners like
- **Real-time Sync**: Changes sync instantly across family members

### Premium Features
- **Unlimited Swipes**: Free users get 50 names per day, Premium removes limits
- **Advanced Filters**: Filter by origin, culture, and popularity
- **Undo Swipes**: Changed your mind? Undo your last swipe
- **Ad-Free Experience**: Premium users enjoy an ad-free interface

## 🎨 Design

The app features a warm, modern aesthetic with:
- **Color Palette**: Oatmeal, Sage, Terracotta, Mustard, and Deep Ocean
- **Glassmorphism Effects**: Modern, translucent card designs
- **Smooth Animations**: Delightful interactions and transitions
- **Accessibility**: Full VoiceOver support and dynamic type

## 🏗️ Tech Stack

- **Platform**: iOS 16+
- **Language**: Swift 5.9+
- **UI Framework**: SwiftUI
- **Architecture**: MVVM (Model-View-ViewModel)
- **Backend**: Firebase (Authentication, Firestore, Analytics)
- **Monetization**: StoreKit 2 (In-App Purchases)

## 📂 Project Structure

```
BabyNameTinder/
├── Models/              # Data models (BabyName, UserProfile, FamilyCircle)
├── Views/              # SwiftUI views
│   ├── Onboarding/    # Onboarding flow
│   ├── Main/          # Main app interface
│   ├── Swiping/       # Card stack and swipe UI
│   └── Matches/       # Matched names view
├── ViewModels/         # Business logic and state management
├── Services/          # Firebase, Audio, Subscription services
├── Theme/             # Colors, typography, constants
└── Resources/         # Assets, localization, data files
```

## 🚀 Getting Started

### Prerequisites
- macOS 13.0 or later
- Xcode 15.0 or later
- CocoaPods or Swift Package Manager
- Firebase account (for backend services)

### Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/shizhangfan/BABY_NAME_TINDER.git
   cd BABY_NAME_TINDER
   ```

2. **Open the project:**
   - The Xcode project is in `BabyNameTinderCode/BabyNameTinder/`
   - See [NEXT_STEPS.md](NEXT_STEPS.md) for detailed setup if the project doesn't exist yet

3. **Install dependencies:**
   - Firebase SDK is managed via Swift Package Manager
   - Xcode will automatically fetch dependencies on first build

4. **Configure Firebase:**
   - Create a Firebase project at [console.firebase.google.com](https://console.firebase.google.com)
   - Add an iOS app with your bundle identifier
   - Download `GoogleService-Info.plist`
   - Add it to the Xcode project root

5. **Build and run:**
   - Select a simulator or device
   - Press `⌘R` to build and run

## 📋 Development Status

Current development phase: **Phase 1 - Foundation & Architecture**

For detailed task tracking, see:
- [TODO.md](TODO.md) - Main development roadmap
- [TODO_NEXT_ROUND.md](TODO_NEXT_ROUND.md) - Upcoming features and improvements
- [NEXT_STEPS.md](NEXT_STEPS.md) - Immediate action items

## 🛠️ Development

### Running the App
```bash
# Open in Xcode
open BabyNameTinderCode/BabyNameTinder.xcodeproj

# Or from command line (if project is set up)
xcodebuild -project BabyNameTinderCode/BabyNameTinder.xcodeproj -scheme BabyNameTinder -destination 'platform=iOS Simulator,name=iPhone 15'
```

### Code Style
- Follow Swift API Design Guidelines
- One view/viewmodel per file
- Use meaningful variable names
- Document public interfaces
- See [copilot-instructions.md](copilot-instructions.md) for detailed conventions

### Testing
```bash
# Run tests from Xcode
⌘U

# Or from command line
xcodebuild test -project BabyNameTinderCode/BabyNameTinder.xcodeproj -scheme BabyNameTinder -destination 'platform=iOS Simulator,name=iPhone 15'
```

## 📱 App Store

**Status**: In Development

Planned release timeline:
- Beta Testing (TestFlight): TBD
- App Store Submission: TBD
- Public Launch: TBD

## 🤝 Contributing

This is currently a personal project, but suggestions and feedback are welcome! Feel free to:
- Open issues for bugs or feature requests
- Submit pull requests for improvements
- Share your experience and ideas

## 📄 License

Copyright © 2024. All rights reserved.

## 🙋 Support

For questions or issues:
- Create an issue in this repository
- Check existing documentation in TODO files
- Review the NEXT_STEPS guide

## 🎯 Roadmap

### Q1 2024
- ✅ Planning and design completed
- 🔄 Core architecture implementation
- 📅 Basic swiping functionality
- 📅 Firebase integration

### Q2 2024
- 📅 Family circle features
- 📅 Match detection
- 📅 Premium subscriptions
- 📅 Beta testing

### Q3 2024
- 📅 Polish and optimization
- 📅 App Store submission
- 📅 Marketing materials
- 📅 Public launch

## 🌟 Acknowledgments

- Design inspiration from modern dating apps
- Name database compiled from public sources
- Icons and assets created specifically for this project

---

**Made with ❤️ for expecting parents everywhere**

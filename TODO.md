# Baby Name Tinder - Development Plan

## PHASE 1: Foundation & Architecture Setup

- [x] Create MVVM folder structure (Models, Views, ViewModels, Services, Theme)
- [x] Define AppColors in Assets.xcassets (Oatmeal, Sage, Terracotta, Mustard, Deep Ocean)
- [x] Create `Theme/AppColors.swift`: Extensions for type-safe color access
- [x] Create `Theme/AppTypography.swift`: Semantic font styles (Headers, Body)
- [x] Create `Theme/AppTheme.swift`: Centralize spacing, radius, and shadow constants
- [x] Verify Theme: Apply background color in `BabyNameTinderApp.swift`
- [x] Create `ViewModels/AppCoordinator.swift`: Manage app flow state (Onboarding vs Main)
- [x] Create `Views/Onboarding/OnboardingContainerView.swift`: Placeholder for onboarding
- [x] Create `Views/RootView.swift`: Switcher between Onboarding and Main App
- [x] Integrate AppCoordinator: Inject into `BabyNameTinderApp.swift`

## PHASE 2: Data Models & Services

- [x] Create Core Models:
    - [x] `BabyName`: Static content (id, name, meaning, gender)
    - [x] `UserProfile`: Tracks `likedNameIDs` (Set) and subscription
    - [x] `FamilyCircle`: Tracks shared `matches` and member IDs
- [x] Configure Firebase: Add SDK to project and initialize
- [x] Implement NameRepository: Load seed data (JSON) with multi-language support
- [x] Implement AudioService: AVSpeechSynthesizer for name pronunciation
- [x] Implement AuthService: Anonymous Sign In for guest usage
- [x] Implement SubscriptionService: Track daily swipes and Premium status (Firestore)

## PHASE 3: UI Implementation - Core Swiping

- [x] Create NameCardView: The visual card with Glassmorphism and data binding
- [x] Create CardStackView: Handle drag gestures, rotation, and recycled views
- [x] Implement SwipeViewModel: Logic for Liking/Passing and enforcing 50-swipe limit

## PHASE 4: UI Implementation - Matching & Family

- [x] Create MatchesListView: Tab to show mutual likes and shared favorites
- [x] Create FamilySetupView: Onboarding screen to Create/Join a circle
- [x] Implement Firebase Service: Sync matches and family data (replaces CloudKit)

## PHASE 5: Monetization & Store Readiness

- [x] Create PaywallView: UI to upgrade to Premium
- [x] Integrate StoreKit: Fetch products and process purchases (Mock)
- [x] Add App Icons and Launch Screen to Assets.xcassets
- [ ] Final Polish: Haptics, Animations, and privacy strings (Info.plist)

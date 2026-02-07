# Baby Name Tinder - Next Round TODO

## PHASE 5 COMPLETION: Polish & Store Readiness

- [ ] Add haptic feedback on swipe actions (like/pass) using `UIImpactFeedbackGenerator`
- [ ] Add haptic feedback on match detection (notification-style haptic)
- [ ] Polish card swipe animations (smoother spring curves, scale-on-drag effect)
- [ ] Add card entrance animation when new card appears on stack
- [ ] Add celebration animation when a match is detected
- [ ] Add privacy usage strings to Info.plist (Speech Recognition, if needed)
- [ ] Remove unused `ContentView.swift` (dead code from template)

## BUG FIXES

- [ ] Fix swipe limit message inconsistency: alert says "50 name limit" but `maxDailySwipes` constant is 5
- [ ] Fix PaywallView "Restore Purchases" button (currently empty implementation)
- [ ] Connect real StoreKit product fetching (currently mock-only via `purchaseMock()`)
- [ ] Add loading state to `SwipeViewModel.loadNames()` so CardStackView doesn't render empty
- [ ] Review `MatchesViewModel` Firestore listener for potential rapid-update race condition (add debouncing)
- [ ] Review `FamilyService` local recovery logic to prevent data loss on uid/circleID mismatch

## FEATURE: User Preferences & Filtering

- [ ] Add gender filter toggle (Boys / Girls / All) on Discover tab
- [ ] Add origin/culture filter (e.g., Hebrew, Latin, Celtic, etc.)
- [ ] Persist filter preferences in UserDefaults
- [ ] Update `SwipeViewModel` to apply filters when loading names

## FEATURE: Improved Onboarding

- [ ] Redesign onboarding with multi-step walkthrough (swipe tutorial, family circle intro)
- [ ] Add illustration assets for onboarding screens
- [ ] Show gender/origin preference selection during onboarding

## FEATURE: Notifications & Real-Time Feedback

- [ ] Add push notification support (Firebase Cloud Messaging)
- [ ] Notify when partner joins family circle
- [ ] Notify when a new match is detected
- [ ] Add in-app toast/banner for real-time match events

## FEATURE: Match Management

- [ ] Add ability to remove/unlike a matched name
- [ ] Add sorting options for matches list (alphabetical, most recent, by origin)
- [ ] Add match count badge on Matches tab icon
- [ ] Add "share matched names" export (text list or image card)

## FEATURE: Expanded Name Database

- [ ] Expand `names_seed.json` beyond current ~137 entries
- [ ] Add pagination / lazy loading for large name sets
- [ ] Add "undo last swipe" feature (single undo, premium feature)
- [ ] Track already-swiped names to avoid showing duplicates across sessions

## CODE QUALITY & ARCHITECTURE

- [ ] Break down `CardStackView` into smaller sub-components
- [ ] Add user-facing error feedback (replace silent logging with alerts/toasts)
- [ ] Add unit tests for `SubscriptionService` (date/timezone edge cases)
- [ ] Add unit tests for `MatchService` (match detection logic)
- [ ] Add unit tests for `SwipeViewModel` (swipe limit enforcement)
- [ ] Add `AudioService` voice mapping for any new `NameOrigin` values

## APP STORE PREPARATION

- [ ] Configure real StoreKit product IDs in App Store Connect
- [ ] Set up App Store screenshots and preview assets
- [ ] Write App Store description and metadata
- [ ] Set up TestFlight for beta distribution
- [ ] Review App Store Review Guidelines compliance (subscription rules, data privacy)
- [ ] Create App Privacy nutrition labels (data collection disclosure)

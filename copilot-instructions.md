# Tiptrace Frontend – Copilot Instructions

## Primary Rule (MUST)

-   **One View / one ViewModel per file.**
    -   Each `struct SomeView: View` must live in its own file named `SomeView.swift`.
    -   Each `final class SomeViewModel: ObservableObject` must live in its own file named `SomeViewModel.swift`.
    -   Do not define multiple SwiftUI views or view models in a single file, except for **small private helpers** (e.g., `private enum`, `private struct Row`, `private extension`) that are tightly coupled to that file.

## Folder Conventions

-   Views go under `Tiptrace/Tiptrace/Views/<Area>/`.
    -   Example: `Tiptrace/Tiptrace/Views/Employee/EmployeeHomeView.swift`.
-   ViewModels go under `Tiptrace/Tiptrace/ViewModels/`.
    -   If desired later: `Tiptrace/Tiptrace/ViewModels/<Area>/` (but keep it consistent).
-   Shared non-UI helpers go under `Tiptrace/Tiptrace/Utils/`.

## RootView Rule

-   `RootView` should only contain routing/switching logic.
-   Do **not** embed feature views or feature view models inside `RootView.swift`.

## SwiftUI + MVVM Style

-   Views should be lightweight and delegate data fetching/mutations to their ViewModel.
-   ViewModels should own Firebase/Firestore access and expose `@Published` state for the View.
-   Prefer `Task { await ... }` from the View to call async ViewModel methods.

## Firebase/Firestore Notes

-   Prefer strongly typed models (`Codable`) and `try? doc.data(as: Type.self)`.
-   Keep collection names consistent with existing code (`users`, `restaurants`, `payouts`, `shifts`, `tipEntries`, `tipReports`).

## Safety

-   Avoid large refactors not requested.
-   Keep changes minimal and scoped to the requested feature.

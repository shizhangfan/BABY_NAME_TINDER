# Next Development Steps / 下一步开发步骤

## English Version

### Current Status
Your Baby Name Tinder iOS app has completed **Phases 1-4** and most of **Phase 5**. The core functionality is implemented including:
- ✅ MVVM Architecture with Theme System
- ✅ Firebase Integration (Authentication & Firestore)
- ✅ Card Swiping Interface
- ✅ Match Detection System
- ✅ Family Circle Feature
- ✅ Basic Monetization (PaywallView + Mock StoreKit)

### Immediate Next Steps (High Priority)

Based on your `TODO_NEXT_ROUND.md`, here are the most critical tasks to tackle:

#### 1. Bug Fixes (URGENT - Do These First)
```
Priority: CRITICAL
These bugs affect user experience and app functionality.
```

- [ ] **Fix swipe limit inconsistency**
  - Location: `SwipeViewModel.swift` 
  - Issue: Alert message says "50 name limit" but `maxDailySwipes` constant is 5
  - Fix: Change the alert message to match the actual limit OR update the constant to 50

- [ ] **Fix PaywallView "Restore Purchases" button**
  - Location: `PaywallView.swift`
  - Issue: Empty implementation
  - Fix: Implement actual StoreKit restore purchase logic

- [ ] **Connect real StoreKit product fetching**
  - Location: `SubscriptionService.swift`
  - Issue: Currently using `purchaseMock()` instead of real products
  - Fix: Implement actual StoreKit product fetching and purchase flow

#### 2. Polish & User Experience (HIGH PRIORITY)
```
Priority: HIGH
These improvements make the app feel professional and ready for the App Store.
```

- [ ] **Add haptic feedback**
  - Use `UIImpactFeedbackGenerator` for swipe actions
  - Use notification-style haptic for match detection
  - Enhances tactile feedback

- [ ] **Polish animations**
  - Improve card swipe animations with smoother spring curves
  - Add scale-on-drag effect
  - Add card entrance animation
  - Add celebration animation for matches

- [ ] **Clean up dead code**
  - Remove unused `ContentView.swift` from template

#### 3. Required for App Store Submission
```
Priority: HIGH
Required before you can submit to the App Store.
```

- [ ] **Add privacy usage strings to Info.plist**
  - Add speech recognition description if using voice features
  - Add any other required privacy strings

- [ ] **Configure real StoreKit products**
  - Set up products in App Store Connect
  - Update product IDs in the app

- [ ] **Create App Store assets**
  - Screenshots (required for all device sizes)
  - Preview video (optional but recommended)
  - App description and metadata

### Medium Priority Tasks

#### 4. User Preferences & Filtering
- Add gender filter toggle (Boys/Girls/All)
- Add origin/culture filter
- Persist preferences in UserDefaults

#### 5. Enhanced Onboarding
- Multi-step walkthrough
- Swipe tutorial
- Family circle introduction

### How to Get Started

1. **First, fix the repository issues** (see `REPOSITORY_SETUP_GUIDE.md`)
   - Set repository to public
   - Fix the HTTP 400 push error
   - Create a `.gitignore` file

2. **Then, tackle the bug fixes** (Day 1-2)
   - Start with the swipe limit fix (easiest)
   - Then work on StoreKit integration (most complex)

3. **Add polish** (Day 3-5)
   - Haptic feedback
   - Animations
   - Privacy strings

4. **Prepare for App Store** (Day 6-10)
   - Set up App Store Connect
   - Create screenshots
   - Write app description
   - Submit for review

### Development Commands

```bash
# Open the project in Xcode
cd BabyNameTinderCode
open BabyNameTinder.xcodeproj

# Before making changes, create a feature branch
git checkout -b feature/fix-swipe-limit

# After making changes
git add .
git commit -m "Fix swipe limit message inconsistency"
git push origin feature/fix-swipe-limit
```

---

## 中文版本

### 当前状态
您的 Baby Name Tinder iOS 应用已完成**第 1-4 阶段**和**第 5 阶段**的大部分功能，核心功能包括：
- ✅ MVVM 架构与主题系统
- ✅ Firebase 集成（身份验证和 Firestore）
- ✅ 卡片滑动界面
- ✅ 匹配检测系统
- ✅ 家庭圈功能
- ✅ 基础货币化（PaywallView + 模拟 StoreKit）

### 即将进行的步骤（高优先级）

根据您的 `TODO_NEXT_ROUND.md`，以下是最关键的任务：

#### 1. Bug 修复（紧急 - 首先处理这些）
```
优先级：关键
这些 bug 影响用户体验和应用功能。
```

- [ ] **修复滑动限制不一致**
  - 位置：`SwipeViewModel.swift`
  - 问题：提示消息显示"50 个名字限制"，但 `maxDailySwipes` 常量为 5
  - 修复：更改提示消息以匹配实际限制，或将常量更新为 50

- [ ] **修复 PaywallView "恢复购买" 按钮**
  - 位置：`PaywallView.swift`
  - 问题：实现为空
  - 修复：实现实际的 StoreKit 恢复购买逻辑

- [ ] **连接真实的 StoreKit 产品获取**
  - 位置：`SubscriptionService.swift`
  - 问题：当前使用 `purchaseMock()` 而非真实产品
  - 修复：实现实际的 StoreKit 产品获取和购买流程

#### 2. 优化与用户体验（高优先级）
```
优先级：高
这些改进使应用感觉专业且准备好提交到 App Store。
```

- [ ] **添加触觉反馈**
  - 为滑动操作使用 `UIImpactFeedbackGenerator`
  - 为匹配检测使用通知样式的触觉反馈
  - 增强触觉体验

- [ ] **优化动画**
  - 使用更平滑的弹簧曲线改进卡片滑动动画
  - 添加拖动时的缩放效果
  - 添加卡片入场动画
  - 为匹配添加庆祝动画

- [ ] **清理死代码**
  - 删除模板中未使用的 `ContentView.swift`

#### 3. App Store 提交所需
```
优先级：高
提交到 App Store 之前必需。
```

- [ ] **在 Info.plist 中添加隐私使用说明**
  - 如果使用语音功能，添加语音识别描述
  - 添加任何其他必需的隐私说明

- [ ] **配置真实的 StoreKit 产品**
  - 在 App Store Connect 中设置产品
  - 更新应用中的产品 ID

- [ ] **创建 App Store 资源**
  - 截图（所有设备尺寸都需要）
  - 预览视频（可选但建议）
  - 应用描述和元数据

### 中优先级任务

#### 4. 用户偏好与过滤
- 添加性别过滤器切换（男孩/女孩/全部）
- 添加来源/文化过滤器
- 在 UserDefaults 中持久化偏好设置

#### 5. 增强的引导流程
- 多步骤演练
- 滑动教程
- 家庭圈介绍

### 如何开始

1. **首先，修复仓库问题**（参见 `REPOSITORY_SETUP_GUIDE.md`）
   - 将仓库设为公开
   - 修复 HTTP 400 推送错误
   - 创建 `.gitignore` 文件

2. **然后，解决 bug 修复**（第 1-2 天）
   - 从滑动限制修复开始（最简单）
   - 然后处理 StoreKit 集成（最复杂）

3. **添加优化**（第 3-5 天）
   - 触觉反馈
   - 动画
   - 隐私说明

4. **准备 App Store**（第 6-10 天）
   - 设置 App Store Connect
   - 创建截图
   - 编写应用描述
   - 提交审核

### 开发命令

```bash
# 在 Xcode 中打开项目
cd BabyNameTinderCode
open BabyNameTinder.xcodeproj

# 在进行更改之前，创建功能分支
git checkout -b feature/fix-swipe-limit

# 进行更改后
git add .
git commit -m "修复滑动限制消息不一致"
git push origin feature/fix-swipe-limit
```

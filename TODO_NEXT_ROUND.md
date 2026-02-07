# Baby Name Tinder - Master Development Plan

## 🚨 PHASE 1: Immediate Fixes (修复与稳定)

_目标：确保现有功能逻辑闭环，无崩溃风险，为后续功能打基础。_

- [ ] **Fix StoreKit Implementation**: 接入真实内购。
    - 现状：目前使用 `purchaseMock()`。
    - 目标：连接真实的 StoreKit API 获取产品，实现“恢复购买 (Restore Purchases)”按钮逻辑。
- [ ] **Fix Loading State**: 优化数据加载体验。
    - 目标：为 `SwipeViewModel.loadNames()` 添加 `isLoading` 状态，避免 `CardStackView` 在数据加载前显示空白。
- [ ] **Fix Firestore Race Condition**: 优化匹配监听。
    - 目标：检查 `MatchesViewModel` 的监听器，添加防抖 (debouncing) 处理，防止频繁更新导致 UI 跳动。
- [ ] **Fix Family Data Safety**: 增强数据健壮性。
    - 目标：审查 `FamilyService` 的本地恢复逻辑，防止因 `uid` 或 `circleID` 不匹配导致的数据丢失。

## ✨ PHASE 2: Polish & "Juice" (体验打磨)

_目标：提升 App 的手感，增加 Tinder 式的爽快感。_

- [ ] **Haptic Feedback**: 添加触觉反馈。
    - 目标：在滑动 (Like/Pass) 和匹配成功 (Match) 时调用 `UIImpactFeedbackGenerator`。
- [ ] **Card Animations**: 优化卡片动画。
    - 目标：调整弹簧动画曲线 (Spring curves)，实现拖拽时的缩放效果 (Scale-on-drag)。
- [ ] **Match Celebration**: 添加匹配庆祝动画。
    - 目标：当检测到 Match 时，展示全屏庆祝动画或特效。
- [ ] **Cleanup**: 移除死代码。
    - 目标：删除未使用的 `ContentView.swift` (模板残留文件)。

## 🧠 PHASE 3: AI Data Pipeline & Cloud Database (AI 数据工厂与云端) [核心升级]

_目标：利用 AI 批量生成高质量、多维度的名字数据，并建立云端数据库。_

- [ ] **Define Extended Data Model**: 扩展数据结构。
    - 目标：更新 `BabyName` 模型（或创建 Firestore 对应的 Document 结构），增加以下字段：
        - `religion` (宗教: Christian, Muslim, Hindu, Buddhist, etc.)
        - `region` (地区: North America, East Asia, Europe, Middle East, etc.)
        - `cultural_background` (文化背景: Celtic, Hebrew, Latin, Sanskrit, Arabic, etc.)
        - `pronunciation` (读音指南: e.g., "Ah-lee-ah")
        - `popularity_score` (流行度分数)
- [ ] **AI Generation Script**: 开发 AI 生成脚本 (Python/Node.js)。
    - 目标：编写脚本调用 LLM (OpenAI/Gemini/Claude) API，批量生成符合上述多维度要求的 JSON 数据。
    - 策略：支持按“批次”生成（例如：生成 100 个“具有中东背景的穆斯林女孩名字”）。
- [ ] **Firebase Migration**: 迁移至 Firestore。
    - 目标：编写脚本将 AI 生成并清洗后的 JSON 数据批量上传至 Firestore 的 `names` 集合。
    - 任务：修改 App 的 `NameRepository`，使其优先从 Firestore 拉取数据（支持分页/游标查询），并保留本地 JSON 作为离线兜底。
- [ ] **Data Caching**: 优化读取成本。
    - 目标：实现本地缓存机制（如 `SwiftData` 或 `Realm`），避免每次滑动都消耗 Firestore 读取额度。

## 🛠 PHASE 4: Core Features Expansion (核心功能补全)

_目标：基于新的数据维度，完善筛选功能。_

- [ ] **Advanced Filters**: 高级筛选功能。
    - 目标：在发现页增加筛选器 UI，支持根据 **性别**、**来源**、**宗教** 和 **首字母** 组合筛选。
    - 任务：更新 `SwipeViewModel` 构建符合 Firestore 索引的复合查询 (Compound Queries)。
- [ ] **Undo Feature**: 撤销功能 (Premium)。
    - 目标：允许用户撤销上一次的滑动操作。

## 🚀 PHASE 5: Advanced Features (进阶功能 - V1.1)

_目标：增强用户粘性和社交属性。_

- [ ] **Onboarding Redesign**: 重构引导页。
    - 目标：实现多步引导（滑动教学 -> 设置文化/宗教偏好 -> 邀请伴侣）。
- [ ] **Notifications**: 推送通知。
    - 目标：集成 Firebase Cloud Messaging，在配对成功或伴侣加入时发送推送。
- [ ] **Match Management**: 匹配管理。
    - 目标：允许删除/取消喜欢 (Unlike) 已匹配的名字，添加排序功能。

## 📦 PHASE 6: App Store Readiness (上架准备)

_目标：符合 Apple 审核标准并发布。_

- [ ] **Production Configuration**: 生产环境配置。
    - [ ] **Update Swipe Limit**: 将 `maxDailySwipes` 从测试值 (5/10) 修改为生产值 (50)。
    - [ ] **Security**: 确保 API Keys (Firebase, RevenueCat, etc.) 已正确混淆或配置限制。
- [ ] **Privacy Compliance**: 更新隐私设置。
    - 任务：在 `Info.plist` 中添加必要的权限描述字符串 (Privacy Strings)。
    - 任务：准备 App Privacy 隐私标签内容 (Data Collection Disclosure)。
- [ ] **Metadata Assets**: 商店素材。
    - 任务：制作 App Store 预览截图 (Screenshots) 和描述文案。
- [ ] **TestFlight**: 内部测试。
    - 任务：上传构建版本至 TestFlight 进行 Beta 测试。

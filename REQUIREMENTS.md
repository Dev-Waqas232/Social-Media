# Functional Requirements — Social Media Platform

**Document Type:** Functional Requirements Specification  
**Version:** 1.0  
**Project Type:** Personal Portfolio

---

## Table of Contents

1. [System Overview](#1-system-overview)
2. [Module 1 — Authentication & Identity](#2-module-1--authentication--identity)
3. [Module 2 — User Profiles](#3-module-2--user-profiles)
4. [Module 3 — Content Creation & Feed](#4-module-3--content-creation--feed)
5. [Module 4 — Social Graph](#5-module-4--social-graph)
6. [Module 5 — Interactions & Reactions](#6-module-5--interactions--reactions)
7. [Module 6 — Messaging & Real-Time Communication](#7-module-6--messaging--real-time-communication)
8. [Module 7 — Notifications](#8-module-7--notifications)
9. [Module 8 — Stories & Ephemeral Content](#9-module-8--stories--ephemeral-content)
10. [Module 9 — Search & Discovery](#10-module-9--search--discovery)
11. [Module 10 — Media Processing Pipeline](#11-module-10--media-processing-pipeline)
12. [Module 11 — Live Streaming](#12-module-11--live-streaming)
13. [Module 12 — Groups & Communities](#13-module-12--groups--communities)
14. [Module 13 — Events](#14-module-13--events)
15. [Module 14 — Polls & Interactive Content](#15-module-14--polls--interactive-content)
16. [Module 15 — Bookmarks & Collections](#16-module-15--bookmarks--collections)
17. [Module 16 — Analytics Dashboard (User-Facing)](#17-module-16--analytics-dashboard-user-facing)
18. [Module 17 — Monetization & Creator Economy](#18-module-17--monetization--creator-economy)
19. [Module 18 — Moderation & Trust & Safety](#19-module-18--moderation--trust--safety)
20. [Module 19 — Admin Panel](#20-module-19--admin-panel)
21. [Module 20 — Accessibility & Internationalization](#21-module-20--accessibility--internationalization)
22. [Non-Functional Considerations](#22-non-functional-considerations)

---

## 1. System Overview

The platform is a full-featured social media web application allowing users to create content, build communities, communicate in real time, and grow an audience. The system is designed as a portfolio-grade project demonstrating scalability patterns, real-time capabilities, media handling, and modern UX.

**Core Personas:**

- **Casual User** — browses, reacts, messages
- **Creator** — publishes content, tracks analytics, monetizes
- **Community Manager** — administers groups and events
- **Platform Admin** — oversees moderation and platform health

---

## 2. Module 1 — Authentication & Identity

### 1.1 Registration

- FR-1.1.1: Users shall register via email + password.
- FR-1.1.2: Users shall register via OAuth 2.0 providers — Google, GitHub, Apple.
- FR-1.1.3: On registration, the system shall send an email verification link with a 24-hour expiry.
- FR-1.1.4: Unverified accounts shall have read-only access until email is confirmed.
- FR-1.1.5: Users shall accept Terms of Service and Privacy Policy during registration; acceptance shall be timestamped and stored.

### 1.2 Login

- FR-1.2.1: Users shall log in via email/password or OAuth provider.
- FR-1.2.2: The system shall issue a short-lived JWT access token (15 min) and a long-lived HTTP-only refresh token (30 days).
- FR-1.2.3: Login attempts exceeding 5 failures within 10 minutes shall trigger a CAPTCHA challenge.
- FR-1.2.4: Login attempts exceeding 10 failures shall lock the account and notify the registered email.

### 1.3 Multi-Factor Authentication (MFA)

- FR-1.3.1: Users shall be able to enable TOTP-based MFA (Google Authenticator, Authy).
- FR-1.3.2: Users shall be able to use SMS OTP as a secondary MFA option.
- FR-1.3.3: Users shall be issued 8 single-use backup codes on MFA setup.
- FR-1.3.4: MFA shall be enforced for admin and moderator accounts.

### 1.4 Session Management

- FR-1.4.1: Users shall view all active sessions with device, browser, location (IP-based), and last-active timestamp.
- FR-1.4.2: Users shall be able to revoke individual sessions or all sessions except current.
- FR-1.4.3: The system shall detect and flag logins from a new device or geography, prompting re-authentication.

### 1.5 Account Recovery

- FR-1.5.1: Users shall initiate password reset via a time-limited (1 hour) reset link sent to their email.
- FR-1.5.2: The system shall invalidate all existing sessions upon successful password reset.
- FR-1.5.3: Users who lose MFA access shall recover via backup codes or a manual identity verification flow.

### 1.6 Account Deletion & Data Portability

- FR-1.6.1: Users shall be able to request account deletion, which triggers a 14-day grace period before permanent erasure.
- FR-1.6.2: Users shall be able to export all their data (posts, messages, media, profile info) as a ZIP archive in JSON + media format.
- FR-1.6.3: After deletion, the username shall be reserved for 90 days and not reassignable.

---

## 3. Module 2 — User Profiles

### 2.1 Profile Information

- FR-2.1.1: Each user shall have a unique username (3–30 chars, alphanumeric + underscores).
- FR-2.1.2: Users shall set a display name, bio (max 300 chars), website URL, and location.
- FR-2.1.3: Users shall upload a profile picture (max 5 MB; formats: JPEG, PNG, WebP); the system shall auto-generate an avatar if none is uploaded.
- FR-2.1.4: Users shall upload a profile banner/cover image (max 10 MB).
- FR-2.1.5: Users shall add a pronouns field from a predefined list or a custom freetext option.
- FR-2.1.6: Users shall link up to 5 external social profiles (Twitter/X, LinkedIn, GitHub, etc.), displayed with verified icons where applicable.

### 2.2 Profile Badges & Verification

- FR-2.2.1: The platform shall support a "Verified Creator" badge awarded after reaching configurable follower thresholds.
- FR-2.2.2: Admins shall manually grant or revoke verification badges.
- FR-2.2.3: Accounts shall display profile completion percentage and a prompt to fill missing fields.

### 2.3 Profile Customization

- FR-2.3.1: Users shall choose a profile theme (light/dark/custom accent color) visible to visitors.
- FR-2.3.2: Creators shall be able to pin up to 3 posts to the top of their profile.
- FR-2.3.3: Users shall control which sections are visible on their public profile: posts, replies, media, likes, following list, follower list.

### 2.4 Profile Privacy

- FR-2.4.1: Users shall set their profile to Public, Followers-Only, or Private.
- FR-2.4.2: Private profiles shall hide all content from non-approved followers.
- FR-2.4.3: Users shall maintain a block list and a mute list, manageable from profile settings.

### 2.5 Activity Status

- FR-2.5.1: Users shall toggle online/offline status visibility.
- FR-2.5.2: "Last seen" timestamps shall be configurable (everyone / followers only / nobody).

---

## 4. Module 3 — Content Creation & Feed

### 3.1 Post Types

- FR-3.1.1: Users shall create **Text Posts** (max 5,000 characters with rich text formatting: bold, italic, code blocks, links).
- FR-3.1.2: Users shall create **Photo Posts** (up to 10 images per post; each max 20 MB).
- FR-3.1.3: Users shall create **Video Posts** (max 500 MB, up to 60 minutes; auto-transcoded to HLS).
- FR-3.1.4: Users shall create **Link Preview Posts** — pasting a URL auto-fetches Open Graph metadata for a rich preview card.
- FR-3.1.5: Users shall create **Thread Posts** — a chain of sequential posts published atomically.
- FR-3.1.6: Users shall create **Quote Posts** — embed an existing post with added commentary.
- FR-3.1.7: Users shall create **Carousel Posts** — swipeable multi-image/video slides.

### 3.2 Post Composition

- FR-3.2.1: The composer shall support @mention autocomplete resolving to user profiles.
- FR-3.2.2: The composer shall support #hashtag detection and inline linking.
- FR-3.2.3: Users shall add an alt-text description to every media item for accessibility.
- FR-3.2.4: Users shall tag up to 10 other users in a post.
- FR-3.2.5: Users shall add a content warning / sensitive content label before publishing.
- FR-3.2.6: Users shall set post-level audience: Public, Followers Only, Mentioned Only, or Custom List.
- FR-3.2.7: Users shall schedule posts for a future date/time (up to 90 days in advance).
- FR-3.2.8: Drafts shall be auto-saved every 30 seconds and persisted server-side.

### 3.3 Feed Algorithm

- FR-3.3.1: The home feed shall offer two modes switchable by the user: **Algorithmic** (ranked by relevance, recency, and engagement) and **Chronological** (pure reverse-chronological).
- FR-3.3.2: The algorithmic feed shall factor in: mutual connections, hashtag affinity, past interaction history, and content freshness.
- FR-3.3.3: The system shall inject "Suggested Accounts to Follow" cards into the feed at configurable intervals.
- FR-3.3.4: The system shall support a **For You / Explore Feed** surfacing trending content outside the user's social graph.
- FR-3.3.5: Users shall be able to snooze a specific user's posts for 24 hours, 7 days, or 30 days without unfollowing.
- FR-3.3.6: The system shall de-duplicate and suppress posts the user has already seen in the same session.

### 3.4 Post Actions

- FR-3.4.1: Users shall edit a post within 30 minutes of publishing; an "Edited" label with edit history shall be visible to viewers.
- FR-3.4.2: Users shall delete their own posts; deletion shall cascade to remove all associated reactions, reposts, and media.
- FR-3.4.3: Post authors shall control who can reply to their post: Everyone, Followers, Mentioned Users Only, Nobody.

---

## 5. Module 4 — Social Graph

### 4.1 Follow System

- FR-4.1.1: Users shall follow other users; following is unidirectional by default.
- FR-4.1.2: Following a private account shall create a pending request visible to both parties.
- FR-4.1.3: Account owners shall approve or decline follow requests individually or in bulk.
- FR-4.1.4: Users shall view paginated lists of their followers and following, sorted by most recent.
- FR-4.1.5: Users shall see mutual followers ("followed by X and Y you follow") on any profile.

### 4.2 Close Friends / Lists

- FR-4.2.1: Users shall create named lists of accounts (max 25 lists, 500 accounts per list).
- FR-4.2.2: Users shall view a filtered feed showing only content from a specific list.
- FR-4.2.3: A special **Close Friends** list shall allow posting content visible only to members of that list.

### 4.3 Blocking & Muting

- FR-4.3.1: Blocking a user shall: remove the follow relationship in both directions, hide all content from each party, and prevent any interactions.
- FR-4.3.2: Muting a user shall hide their posts from the feed without notifying the muted user.
- FR-4.3.3: Users shall bulk-manage block/mute lists with search and pagination.

### 4.4 Suggested Connections

- FR-4.4.1: The system shall recommend accounts based on mutual follows, shared interests (hashtags), and activity overlap.
- FR-4.4.2: "People in your contacts" discovery shall be opt-in only, requiring explicit permission.

---

## 6. Module 5 — Interactions & Reactions

### 5.1 Reactions

- FR-5.1.1: Users shall react to a post using an emoji reaction picker (minimum: ❤️ 😂 😮 😢 😡 👏 🔥).
- FR-5.1.2: Each user may place at most one reaction per post; changing reaction replaces the previous.
- FR-5.1.3: Posts shall display a reaction summary: total count and top 3 most-used reactions.
- FR-5.1.4: Tapping the reaction count shall open a paginated list of reactors, filterable by reaction type.

### 5.2 Comments

- FR-5.2.1: Comments shall support nested replies up to 3 levels deep.
- FR-5.2.2: Comments shall support @mentions, #hashtags, and media attachments (1 image per comment).
- FR-5.2.3: Post authors shall be able to pin one comment to the top of the comment section.
- FR-5.2.4: Post authors shall be able to hide individual comments without deleting them.
- FR-5.2.5: Comments shall support a "More" collapse for threads exceeding 5 replies.

### 5.3 Reposts / Shares

- FR-5.3.1: Users shall repost (boost) a post to their own feed with one click.
- FR-5.3.2: Users shall undo a repost.
- FR-5.3.3: Post detail views shall show a "Reposted by" tab listing accounts that reposted.

### 5.4 Saves & Reactions Analytics

- FR-5.4.1: Post authors shall see an aggregate count of how many users saved their post (without revealing who saved it).

---

## 7. Module 6 — Messaging & Real-Time Communication

### 6.1 Direct Messages (DMs)

- FR-6.1.1: Users shall send direct messages to any user who has not blocked them.
- FR-6.1.2: Users shall configure who can DM them: Everyone, Followers, Nobody.
- FR-6.1.3: Message requests from non-followers shall land in a separate **Message Requests** inbox requiring acceptance before the conversation is visible.
- FR-6.1.4: Messages shall support: plain text, emoji, images, videos, GIFs (via Giphy/Tenor integration), voice notes (max 5 min), file attachments (max 25 MB), and post shares.
- FR-6.1.5: The system shall deliver real-time messages via WebSocket; falling back to polling when WebSocket is unavailable.
- FR-6.1.6: The system shall display per-message delivery indicators: Sent, Delivered, Read (with timestamp).
- FR-6.1.7: Typing indicators shall be visible to the other party in real time.

### 6.2 Group Chats

- FR-6.2.1: Users shall create group chats with up to 250 members.
- FR-6.2.2: Group chats shall have a name, avatar, and description.
- FR-6.2.3: Group chats shall support Admin and Member roles; admins can add/remove members and change group info.
- FR-6.2.4: Users shall be able to leave a group chat; admins shall be able to remove members.

### 6.3 Message Features

- FR-6.3.1: Users shall react to individual messages with emoji.
- FR-6.3.2: Users shall reply to a specific message (threaded reply preview).
- FR-6.3.3: Users shall forward a message to another conversation.
- FR-6.3.4: Users shall delete a sent message for themselves or for everyone (within 5 minutes of sending).
- FR-6.3.5: Users shall pin up to 3 messages in a conversation.
- FR-6.3.6: Users shall search within a conversation by keyword.

### 6.4 Disappearing Messages

- FR-6.4.1: Users shall enable disappearing messages per conversation with timers: 24 hours, 7 days, or 30 days.
- FR-6.4.2: The system shall auto-delete expired messages and associated media from storage.

### 6.5 End-to-End Encryption (E2EE)

- FR-6.5.1: DMs shall support optional E2EE using a Signal-like protocol (X3DH + Double Ratchet).
- FR-6.5.2: When E2EE is active, the system shall display a visible lock indicator.
- FR-6.5.3: E2EE messages shall not be stored in plaintext on the server.

---

## 8. Module 7 — Notifications

### 7.1 Notification Types

The system shall generate notifications for:

- FR-7.1.1: New follower / follow request received / follow request accepted
- FR-7.1.2: Reaction on post or comment
- FR-7.1.3: Comment or reply on post
- FR-7.1.4: Mention in post, comment, or story
- FR-7.1.5: Repost of the user's content
- FR-7.1.6: New direct message
- FR-7.1.7: Group chat activity
- FR-7.1.8: Live stream started by a followed user
- FR-7.1.9: Event reminders
- FR-7.1.10: Milestone notifications ("You reached 500 followers!")

### 7.2 Notification Delivery

- FR-7.2.1: In-app notifications shall be delivered in real time via WebSocket.
- FR-7.2.2: The system shall support push notifications (Web Push API / FCM for mobile).
- FR-7.2.3: The system shall support email notification digests (immediate / daily / weekly), configurable per notification type.

### 7.3 Notification Management

- FR-7.3.1: Users shall mark individual or all notifications as read.
- FR-7.3.2: Users shall configure per-type notification preferences (in-app, push, email) from a single settings panel.
- FR-7.3.3: Users shall set a **Do Not Disturb** window (e.g., 22:00–08:00) during which only critical notifications are delivered.
- FR-7.3.4: Notification bell shall display an unread badge count, capping display at 99+.

---

## 9. Module 8 — Stories & Ephemeral Content

### 8.1 Story Creation

- FR-8.1.1: Users shall create stories consisting of images, short videos (max 60 sec per segment), or text slides.
- FR-8.1.2: Stories shall expire after 24 hours automatically.
- FR-8.1.3: The story composer shall offer: text overlays with font/color/size controls, stickers (emoji, GIF), drawing/doodle tool, and location tags.
- FR-8.1.4: Users shall add interactive stickers to stories: Poll, Q&A, Countdown, Quiz, Slider reaction.
- FR-8.1.5: Users shall set story audience: Public, Close Friends Only, or Custom List.

### 8.2 Story Viewing

- FR-8.2.1: Stories shall auto-advance between segments (default: 5 sec for images, full duration for video).
- FR-8.2.2: Viewers shall tap/click to skip forward or swipe to jump to the next user's story.
- FR-8.2.3: Story authors shall view a per-story viewer list showing who viewed each segment.
- FR-8.2.4: Viewers shall react to a story (sends a DM reaction to the author).
- FR-8.2.5: Viewers shall reply to a story via a quick-text message.

### 8.3 Story Highlights

- FR-8.3.1: Users shall save stories to named **Highlight** albums visible on their profile permanently.
- FR-8.3.2: Highlights shall have a custom cover image and name.
- FR-8.3.3: Users shall add or remove stories from highlights at any time.

---

## 10. Module 9 — Search & Discovery

### 9.1 Global Search

- FR-9.1.1: The search bar shall support full-text search across: users (username, display name), hashtags, posts (by keyword), groups, and events.
- FR-9.1.2: Search results shall be ranked by relevance with filters to scope by content type.
- FR-9.1.3: Search shall support fuzzy matching and auto-correct for common typos.
- FR-9.1.4: The system shall maintain a per-user recent search history, clearable by the user.
- FR-9.1.5: As-you-type autocomplete suggestions shall appear after 2+ characters with a debounce of 300 ms.

### 9.2 Trending

- FR-9.2.1: The system shall compute trending hashtags updated every 5 minutes based on velocity (recent mentions weighted over older ones).
- FR-9.2.2: Trending topics shall be localizable by country/region.
- FR-9.2.3: Users shall dismiss a specific trending topic to hide it from their Trending panel.

### 9.3 Explore / Discovery Feed

- FR-9.3.1: The Explore page shall surface curated content in categories: For You, Videos, News, Sports, Entertainment, Technology.
- FR-9.3.2: Category preferences shall be editable by the user.
- FR-9.3.3: The Explore page shall feature a dedicated **Trending Videos** carousel.

### 9.4 Hashtags

- FR-9.4.1: Clicking a hashtag shall navigate to a hashtag feed showing all public posts using it.
- FR-9.4.2: Users shall follow hashtags; followed hashtag content shall surface in the home feed.
- FR-9.4.3: Hashtag pages shall display a usage count and trend graph (7-day volume).

---

## 11. Module 10 — Media Processing Pipeline

### 10.1 Image Processing

- FR-10.1.1: The system shall auto-compress uploaded images, targeting web-optimal file sizes while preserving quality.
- FR-10.1.2: The system shall generate multiple responsive image sizes: thumbnail (150px), medium (600px), large (1200px).
- FR-10.1.3: The system shall convert images to WebP format for serving, retaining originals for download.
- FR-10.1.4: The system shall strip EXIF metadata (GPS, device info) by default; users may opt in to preserve it.
- FR-10.1.5: The system shall run automated NSFW/explicit content detection on uploaded images.

### 10.2 Video Processing

- FR-10.2.1: The system shall transcode uploaded video to HLS (HTTP Live Streaming) format with multiple quality tiers: 1080p, 720p, 480p, 360p.
- FR-10.2.2: The system shall generate an animated GIF or WebP preview thumbnail (first 3 seconds).
- FR-10.2.3: The system shall extract and store auto-generated subtitles/captions using speech-to-text, displayed by default.
- FR-10.2.4: The system shall blur video thumbnails pending manual review if flagged by automated content detection.

### 10.3 Media Storage

- FR-10.3.1: All media shall be stored in object storage (S3-compatible) with CDN distribution.
- FR-10.3.2: Media uploads shall use pre-signed URLs for direct client-to-storage uploads, bypassing the API server for performance.
- FR-10.3.3: Media belonging to deleted accounts shall be purged from storage within 30 days of account deletion.

---

## 12. Module 11 — Live Streaming

### 11.1 Stream Creation

- FR-11.1.1: Verified users (configurable threshold) shall be able to start a live stream from the web (via WebRTC or RTMP ingest).
- FR-11.1.2: Streamers shall set a stream title, category/topic, and audience (Public or Followers Only).
- FR-11.1.3: The system shall notify all followers when a stream goes live (push + in-app notification).

### 11.2 Viewer Experience

- FR-11.2.1: Viewers shall see a real-time viewer count updated every 5 seconds.
- FR-11.2.2: Viewers shall send live chat messages visible to all viewers; chat shall replay at 50 messages/view with auto-scroll.
- FR-11.2.3: Viewers shall send emoji reactions that animate on screen (floating upward effect).
- FR-11.2.4: Viewers shall subscribe to the streamer during the live stream.

### 11.3 Stream Management

- FR-11.3.1: Streamers shall be able to mute/ban specific users from live chat in real time.
- FR-11.3.2: Streamers shall enable slow mode (configurable cooldown between 1–300 seconds per user).
- FR-11.3.3: Streamers shall enable subscriber-only mode restricting chat to followers only.
- FR-11.3.4: Live streams shall be automatically recorded and available as a VOD (video on demand) replay within 30 minutes of stream end, for 30 days.

---

## 13. Module 12 — Groups & Communities

### 12.1 Group Creation

- FR-12.1.1: Users shall create groups with a name, description, cover image, and category.
- FR-12.1.2: Groups shall have two visibility modes: **Public** (anyone can see and join) and **Private** (invite or admin-approval required).
- FR-12.1.3: Group creators become admins automatically; admins may promote members to Moderator role.

### 12.2 Group Feed & Content

- FR-12.2.1: Groups shall have a dedicated feed showing posts made within the group.
- FR-12.2.2: Group members shall create posts in the group feed subject to the group's posting rules.
- FR-12.2.3: Admins shall configure whether posts require moderator approval before appearing.
- FR-12.2.4: Groups shall support pinned announcements prominently displayed at the top of the feed.

### 12.3 Group Management

- FR-12.3.1: Admins shall invite users, remove members, and ban users from the group.
- FR-12.3.2: Admins shall set group rules (freetext, max 10 rules) visible to all members.
- FR-12.3.3: Members shall report posts within a group; moderators shall see a dedicated report queue.
- FR-12.3.4: Admins shall view member growth and engagement analytics (post volume, active members).

---

## 14. Module 13 — Events

### 13.1 Event Creation

- FR-13.1.1: Users and groups shall create events with: title, description, cover image, start/end datetime, timezone, and location (physical address or virtual/online).
- FR-13.1.2: Events shall be set as Public, Friends Only, or Invite Only.
- FR-13.1.3: Event creators shall send batch invitations to followers or group members.

### 13.2 Event Engagement

- FR-13.2.1: Users shall RSVP to events with: Going, Interested, or Not Going.
- FR-13.2.2: Events shall display attendee counts broken down by RSVP status.
- FR-13.2.3: Events shall have a discussion/comment wall for attendees.
- FR-13.2.4: The system shall send reminder notifications 24 hours and 1 hour before the event start time.
- FR-13.2.5: Users shall add the event to their external calendar (Google Calendar / iCal export).

---

## 15. Module 14 — Polls & Interactive Content

### 14.1 Polls

- FR-14.1.1: Users shall attach a poll to any post with 2–4 options (max 80 chars each).
- FR-14.1.2: Poll creators shall set a duration: 1 hour, 6 hours, 1 day, 3 days, or 7 days.
- FR-14.1.3: Users shall vote once per poll; vote counts and percentages shall be revealed after voting.
- FR-14.1.4: Poll creators shall see real-time vote counts and can close the poll early.
- FR-14.1.5: The system shall post an automatic summary update when a poll closes.

### 14.2 Q&A Sessions

- FR-14.2.1: Users shall open a timed Q&A session attached to their profile or a post.
- FR-14.2.2: Followers shall submit questions; the creator answers them publicly.
- FR-14.2.3: Answered Q&As shall be shareable as posts automatically.

---

## 16. Module 15 — Bookmarks & Collections

### 15.1 Bookmarks

- FR-15.1.1: Users shall bookmark any post with a single action; bookmarks shall be private by default.
- FR-15.1.2: Users shall view their complete bookmarks list in reverse-chronological order.
- FR-15.1.3: Users shall search bookmarks by keyword.

### 15.2 Collections

- FR-15.2.1: Users shall organize bookmarks into named Collections (max 50 collections).
- FR-15.2.2: Collections shall be Private, Shared with followers, or Public.
- FR-15.2.3: Shared collections shall be viewable and followable by other users.

---

## 17. Module 16 — Analytics Dashboard (User-Facing)

### 16.1 Overview Metrics

- FR-16.1.1: All users shall have access to a personal analytics dashboard showing: profile views, post impressions, follower growth (net change over time), and link click-through rate.
- FR-16.1.2: Data shall be available in date ranges: 7 days, 28 days, 90 days, custom.

### 16.2 Post-Level Analytics

- FR-16.2.1: Per-post analytics shall show: impressions, reach, reactions breakdown, comments, reposts, saves, and shares.
- FR-16.2.2: Video posts shall additionally show: total play time, average watch duration, drop-off curve per 10-second segment.

### 16.3 Audience Insights (Creator Tier)

- FR-16.3.1: Creator-tier users shall see follower demographics: age range distribution, top countries, top cities, gender distribution.
- FR-16.3.2: Audience insights shall show peak activity hours — when followers are most active.
- FR-16.3.3: Analytics data shall be exportable as CSV.

---

## 18. Module 17 — Monetization & Creator Economy

### 17.1 Subscriptions

- FR-17.1.1: Verified creators shall offer a paid subscription tier with a monthly price set by the creator.
- FR-17.1.2: Subscribers shall unlock exclusive content (posts tagged "Subscribers Only").
- FR-17.1.3: The platform shall take a configurable revenue share (default: 20%).
- FR-17.1.4: Creators shall view a payout dashboard with earnings, subscriber count, and transaction history.

### 17.2 Tips / Super Reactions

- FR-17.2.1: Users shall send one-time monetary tips to a creator on any post.
- FR-17.2.2: Tips shall be accompanied by a highlighted "Super Reaction" that stands out visually in the reactions list.
- FR-17.2.3: Creators shall configure whether to accept tips (on/off toggle).

### 17.3 Creator Badges

- FR-17.3.1: Live stream viewers shall purchase "badges" (micro-transactions) displayed next to their username in live chat.
- FR-17.3.2: Badge levels (Bronze, Silver, Gold, Diamond) shall unlock increasingly prominent visual treatment.

### 17.4 Payouts

- FR-17.4.1: Creators shall connect a payout method (Stripe Connect or PayPal).
- FR-17.4.2: Payouts shall be available when the creator's balance exceeds a minimum threshold (configurable; default $50).
- FR-17.4.3: The system shall generate monthly earnings statements downloadable as PDF.

---

## 19. Module 18 — Moderation & Trust & Safety

### 18.1 Content Reporting

- FR-18.1.1: Users shall report any post, comment, story, or profile with a reason from a predefined list: Spam, Harassment, Hate Speech, Misinformation, Self-harm, NSFW, Other.
- FR-18.1.2: Reports shall be queued in the moderation panel; the reporting user shall receive a confirmation and follow-up notification on outcome.
- FR-18.1.3: If a piece of content receives more than N reports (configurable threshold), it shall be auto-hidden pending review.

### 18.2 Automated Detection

- FR-18.2.1: All media uploads shall be scanned by automated CSAM detection (PhotoDNA or equivalent) and immediately removed if flagged.
- FR-18.2.2: The system shall run spam detection heuristics on post frequency, link patterns, and duplicate content.
- FR-18.2.3: A toxicity scoring model shall flag comments exceeding a configurable threshold for human review.

### 18.3 Moderator Actions

- FR-18.3.1: Moderators shall: warn a user (sends notification), remove content, temporarily restrict posting (duration: 1h / 24h / 7d), suspend account, or permanently ban.
- FR-18.3.2: All moderator actions shall be logged with actor, timestamp, reason, and affected content/account ID.
- FR-18.3.3: Banned users shall receive a notification stating the reason and whether the action is appealable.

### 18.4 Appeal System

- FR-18.4.1: Users shall submit an appeal for content removal or account suspension within 30 days of the action.
- FR-18.4.2: Appeals shall be reviewed by a different moderator than the one who took the original action.
- FR-18.4.3: Appeal outcomes (upheld / overturned) shall notify the user with a brief explanation.

---

## 20. Module 19 — Admin Panel

### 19.1 Dashboard

- FR-19.1.1: Admins shall see a real-time platform health dashboard: DAU, MAU, new registrations, post volume, active streams, error rate.
- FR-19.1.2: The dashboard shall surface anomalies (e.g., spike in reports, unusual login failure rate) as alerts.

### 19.2 User Management

- FR-19.2.1: Admins shall search users by username, email, or user ID.
- FR-19.2.2: Admins shall view full user profiles including: registration date, last login, IP history, content history, and moderation history.
- FR-19.2.3: Admins shall force-reset a user's password, force-enable MFA, or force-revoke all sessions.

### 19.3 Content Management

- FR-19.3.1: Admins shall search and view any public or reported piece of content.
- FR-19.3.2: Admins shall remove content globally, overriding any prior moderation decision.
- FR-19.3.3: Admins shall configure platform-wide banned keywords that auto-reject posts on submission.

### 19.4 Configuration

- FR-19.4.1: Admins shall configure feature flags (enable/disable modules per user tier or globally) without code deployment.
- FR-19.4.2: Admins shall manage verification criteria, monetization revenue split %, and rate limits.
- FR-19.4.3: Admins shall send platform-wide announcements displayed as a banner to all users.

---

## 21. Module 20 — Accessibility & Internationalization

### 20.1 Accessibility (WCAG 2.1 AA)

- FR-20.1.1: All interactive elements shall be keyboard-navigable with visible focus indicators.
- FR-20.1.2: All images and media shall support alt-text; the platform shall prompt users to add alt-text on upload.
- FR-20.1.3: Color contrast ratios shall meet WCAG 2.1 AA minimums (4.5:1 for normal text, 3:1 for large text).
- FR-20.1.4: All video content shall display auto-generated captions; users shall be able to toggle them.
- FR-20.1.5: The platform shall be compatible with major screen readers (NVDA, JAWS, VoiceOver).
- FR-20.1.6: Reduced-motion mode shall disable auto-play videos and decorative animations.

### 20.2 Internationalization (i18n)

- FR-20.2.1: The UI shall support a minimum of 5 languages at launch: English, Arabic, French, Spanish, Urdu.
- FR-20.2.2: The platform shall detect the user's browser locale and set the language accordingly; users may override in settings.
- FR-20.2.3: RTL (Right-to-Left) layouts shall be fully supported for Arabic and Urdu.
- FR-20.2.4: Date, time, and number formats shall be locale-aware.
- FR-20.2.5: All user-facing strings shall be stored in externalized translation files (i18n keys), not hardcoded.

---

## 22. Non-Functional Considerations

> Included for completeness — these are out of scope for functional requirements but worth noting for architecture planning.

| Concern                 | Target                                                  |
| ----------------------- | ------------------------------------------------------- |
| API Response Time (p95) | < 200ms for read endpoints                              |
| Feed Generation         | < 500ms for home feed load                              |
| Media Upload            | Progress indicator; resumable uploads for files > 10 MB |
| Real-Time Latency       | < 100ms for messages/notifications via WebSocket        |
| Availability            | 99.9% uptime SLA                                        |
| Horizontal Scalability  | Stateless API servers; session state in Redis           |
| Rate Limiting           | Per-user and per-IP rate limits on all write endpoints  |
| Audit Logs              | All admin/moderator actions immutably logged            |
| GDPR / Privacy          | Data export, right to erasure, consent management       |
| Test Coverage           | 80%+ unit coverage on core domain logic                 |

---

_End of Functional Requirements Specification — v1.0_

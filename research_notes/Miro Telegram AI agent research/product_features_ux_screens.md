# Product Features, UX Flows and Screen Designs: "Miro", which is Mira (@mira), the Telegram AI agent by The Open Platform

> **IDENTIFIED PRODUCT (confidence: high, about 90%).** "Miro" in the brief is almost certainly **Mira**, a consumer AI agent that runs natively inside Telegram. It is built by **The Open Platform (TOP, top.co)**.
> - **Website:** mira.tg. Related subdomains: wiki.mira.tg (docs), skills.mira.tg (skill catalog), mira.tg/report (usage report).
> - **Telegram:** bot **@mira**. It also resolves as **@mira_ibot**. Its Mini App opens at t.me/mira/home.
> - **Other accounts:** X/Twitter **@trymira**; Telegram channel @miramedia_en; support account @mira_support_team.
> - **Not miro.com:** Miro the whiteboard company has no Telegram agent. Search finds only third-party automation connectors (n8n, Pipedream, Latenode).
>
> **Research date:** 2026-11-05.
>
> **Method and limits (read first):**
> - The session's network policy blocked direct reads of every likely screenshot source: mira.tg, t.me (including t.me/s/ channel previews), telegram.org, x.com, youtube.com/i.ytimg.com, apps.apple.com, play.google.com, producthunt.com, web.archive.org, pbs.twimg.com, the cdn4.telesco.pe Telegram CDN, top.co, itbrief, dataconomy, medium and dev.to.
> - Firecrawl had no credits.
> - **GitHub was reachable.** The richest primary material therefore came from three repositories:
>   1. **The official docs source repo**, [Mira-Agent/mira-wiki](https://github.com/Mira-Agent/mira-wiki). This Mintlify repo publishes to wiki.mira.tg and was last updated 2026-05-08. A fork exists at [DariaYakovleva/mira-wiki](https://github.com/DariaYakovleva/mira-wiki).
>   2. **The official GitHub org profile**, [Mira-Agent/.github profile README](https://github.com/Mira-Agent/.github/blob/main/profile/README.md).
>   3. **A third-party hackathon repo**, [Masashi-Ono0611/mira-harness](https://github.com/Masashi-Ono0611/mira-harness). It won 1st place in the STON.fi Hackathon's Mira AI Track. It contains a **raw 101-message export of a real @mira chat**, captured 2026-06-07/08, with **inline buttons, links and media recorded**, plus a structured UX feedback log. This is the closest thing available to "screenshots" of real bot screens, in text form.
> - Everything else comes from WebSearch result titles, snippets and the search tool's summaries. These are marked **[search summary]**. Treat them as paraphrase, not verbatim, and check them against live pages.
> - **Only 4 real image files could be downloaded.** All 4 are official brand assets from GitHub. No UI screenshot could be downloaded. See the screenshot section for the list of known screenshot sources to fetch once the hosts are allowed.
> - To get real screenshots, the session's network settings must allow mira.tg, t.me, x.com, youtube.com/i.ytimg.com, cdn*.telesco.pe, pbs.twimg.com and apps.apple.com.

## 1. Which product is "Miro"? (entity, domain, handle, confidence)

### Takeaway
The brief's "Miro" is **Mira**: website mira.tg, bot @mira (alias @mira_ibot), X @trymira, built by The Open Platform (TOP). It launched in Telegram in February 2026. The current product is a Telegram bot with a Mini App, used in DMs and groups, with tool integrations and a TON wallet.

### Cited Findings
- **Self-description.** The official org README says: "**Mira AI** (`@mira`) is an AI assistant built for Telegram". It lists "chat and reasoning; image, voice, and video workflows; app integrations; memory across conversations; TON wallet actions". — [Mira-Agent GitHub profile README](https://github.com/Mira-Agent/.github/blob/main/profile/README.md)
- **Docs positioning.** The docs home describes Mira as "the first consumer AI agent inside Telegram that turns messaging into an **execution layer**". The site description reads "The AI agent that turns your conversations into actions — built inside Telegram". — [wiki.mira.tg index](https://wiki.mira.tg) (source: [index.mdx](https://github.com/Mira-Agent/mira-wiki/blob/main/index.mdx))
- **Parent company and models.** The docs say "Mira is built on The Open Platform and runs on GPT (normal mode) or Qwen3-32B via the Cocoon confidential compute network (private mode)". — [llms.txt in mira-wiki](https://github.com/Mira-Agent/mira-wiki/blob/main/llms.txt)
- **Launch announcement.** TOP's X post: "Mira is now live in Telegram — the first personal AI assistant built by a TOP portfolio team… In private mode, requests run via Cocoon's…". The post is dated 2026-02-09 (decoded from the status ID). — [The Open Platform on X](https://x.com/topdotco/status/2020836050742981033)
- **Telegram listings.** Search results show "Telegram: Launch @mira" at t.me/mira and "Telegram: Launch @mira_ibot" at t.me/mira_ibot. — [t.me/mira](https://t.me/mira); [t.me/mira_ibot](https://t.me/mira_ibot)
- **Listing details [search summary].** The @mira_ibot listing describes "a personal AI agent that turns conversations into actions", with roughly 549K monthly users. It names the channel @miramedia_en and support @mira_support_team. — [t.me/mira_ibot](https://t.me/mira_ibot); [tgfind.app listing](https://tgfind.app/bots/mira_ibot)
- **X handle.** STON.fi calls it "Mira @trymira, the personal AI agent that lives inside Telegram" (2026-10-01). — [STON.fi on X](https://x.com/ston_fi/status/2105629422665572766)
- **Portfolio page [search summary].** TOP's portfolio page lists Mira as a multifunctional AI assistant deeply integrated into Telegram. — [top.co/portfolio/mira](https://top.co/portfolio/mira)
- **Name collisions.** Several unrelated "Mira" products exist and are easy to confuse:
  - a channel-post drafting bot at usemira.pro / @usemirabot — [usemira.pro](https://usemira.pro/); [DEV post](https://dev.to/niteflex/show-dev-mira-a-telegram-bot-mini-app-that-finds-and-drafts-posts-for-your-channel-b3)
  - an iMessage/email assistant at mymira.io — [mymira.io blog](https://mymira.io/blog/imessage-ai-assistants)
  - "Mira by Pirros", a Revit agent — [YouTube](https://www.youtube.com/watch?v=hdtBnukGtB8)
  - the MIRA crypto token
- **Domain of uncertain ownership.** mira-pro.com presents itself as "Mira Pro — AI assistant in Telegram with premium models". Its ownership is unverified. — [mira-pro.com](https://mira-pro.com/)

### Inferences
- **Why two handles.** Telegram bot usernames must end in "bot". "@mira" is most likely a collectible (Fragment-purchased) username attached to the bot whose base username is @mira_ibot. That would explain both handles resolving. This is an inference and was not confirmed.
- **Why "Miro".** "Miro" is likely a mis-transcription of "Mira" or of "trymira". A sibling note in this folder (company_identity_team_funding.md) independently reached the same conclusion. It also notes that TOP is hiring a "Senior Product Designer (Mira)".

### Gaps
- I could not open t.me/mira directly. Whether @mira and @mira_ibot are the same bot account is inferred from search titles and directory listings only.

## 2. How it works inside Telegram: bot, Mini App, Business bot or userbot? What access does it ask for?

### Takeaway
Mira is a **standard Telegram bot** (Bot API). It works in DMs and as a group member, with optional admin rights. A **Mini App** (t.me/mira/home), reached through a "Discover" entry point, holds settings, Private Mode and subscriptions. Docs also mention **Telegram Business** connection for replying on a user's behalf, and **inline-style "@mira in any message field"** invocation. It is **not a userbot**: it only sees chats it has been added to. External access uses OAuth links (Composio) sent in chat. Group access uses Telegram's admin-rights deep link.

### Cited Findings
- **No install step.** "Mira lives in Telegram — no installation required." The quickstart steps are: open t.me/mira, say hello, connect apps. — [wiki Quickstart](https://wiki.mira.tg/quickstart)
- **Group add link and default rights.** Groups: "Add Mira to your group — [add to group](https://t.me/mira?startgroup=1&admin=invite_users+manage_topics) or search @mira in group members. Give admin rights — invite users + manage topics (recommended). Start talking — Mira will introduce herself". — [wiki Group Chats](https://wiki.mira.tg/group-chats/overview)
- **Same rights in the live /help button.** Observed live in /help (2026-06-08), the inline button "Add Mira to a group" links to `https://t.me/mira?startgroup=agent_suggestion&admin=invite_users+manage_topics`. The pre-requested admin rights match the docs. — [mira-harness chat export](https://github.com/Masashi-Ono0611/mira-harness/blob/main/docs/mira-chat-history.txt)
- **Getting attention in groups.** "Mention @mira or reply to her messages to get her attention in busy groups." — [wiki Group Chats](https://wiki.mira.tg/group-chats/overview)
- **Moderation needs admin rights.** "When Mira has admin permissions, she can: Delete spam… Warn users… Delete messages… Mute users". — [wiki Moderation](https://wiki.mira.tg/group-chats/moderation)
- **Inline-style invocation.** "Users simply type **`@mira`** in any Telegram message field to activate the agent instantly — in personal chats, group chats, or channels." — [wiki Features](https://wiki.mira.tg/product/features)
- **Tagging without membership [search summary].** The Team Agent page says you can add Mira like any member, "or simply hand off a task by tagging @mira in the chat, even if it isn't a member". It also says "each teammate connects their own account before Mira acts through that account". — [mira.tg Team Agent](https://mira.tg/products/team-agent)
- **Telegram Business.** "Professionals can connect their **Telegram Business account** to Mira and delegate: Inbound/outbound conversations — Mira handles messages on your behalf; Lead qualification; Meeting booking; Follow-ups; Team coordination". — [wiki Features](https://wiki.mira.tg/product/features)
- **Mini App and Private Mode.** The Mini App exists and hosts Private Mode: "Open the Mira mini-app → tap *Discover* → enable Private Mode". A card links to `https://t.me/mira/home` with copy "Tap *Discover* at the bottom of the chat to switch to Private Mode." — [wiki Private Mode](https://wiki.mira.tg/core/private-mode)
- **Mini App and communication style.** "You can also set your communication style in the Mira mini-app" (older page, March 2026). — [mira-wiki features/memory.mdx](https://github.com/Mira-Agent/mira-wiki/blob/main/features/memory.mdx)
- **Mira is a bot, not a userbot.** The hackathon author writes: "@mira is **chat-native** — it lives in Telegram chat, with no public API. And Telegram has a hard rule: **a bot cannot read another bot's messages**." He had to drive Mira from a userbot (MTProto/GramJS), which confirms that Mira itself is a bot. — [mira-harness README](https://github.com/Masashi-Ono0611/mira-harness/blob/main/README.md)
- **OAuth for external tools.** "Mira can connect to external services through OAuth links sent in chat." — [Mira-Agent profile README](https://github.com/Mira-Agent/.github/blob/main/profile/README.md)
- **OAuth reassurance copy.** "All connections use OAuth 2.0… Mira never sees or stores your passwords. You can revoke access at any time from the app settings." — [wiki Tools Overview](https://wiki.mira.tg/tools/overview)
- **Live OAuth flow (observed).** Mira sends a text link "Connect github" pointing to `https://connect.composio.dev/link/lk_…`, followed by numbered steps and "The link expires in 10 minutes." — [mira-harness chat export](https://github.com/Masashi-Ono0611/mira-harness/blob/main/docs/mira-chat-history.txt)
- **What group memory covers [search summary].** Removing Mira from a group stops new messages reaching it. Deleting stored context "does not delete the original messages in Telegram". — [mira.tg Team Agent](https://mira.tg/products/team-agent)

### Inferences
- **Inline mode is likely.** Typing "@mira in any message field" is the standard pattern for Telegram **inline bots**. Tagging @mira "even if it isn't a member" is probably implemented with inline mode or a newer Bot API feature, not true group membership. A designer should verify this on a device.
- **"Discover" is probably the menu button.** "Tap Discover at the bottom of the chat" suggests the bot's **chat menu button** (left of the input field) is labeled "Discover" and opens the Mini App.
- **Access explanation is spread thin.** Copy that explains access is scattered across docs pages: OAuth reassurance, privacy-boundary tables, and the warning that "Mira never shares your private conversations". The in-chat permission moment I observed is only the Telegram admin-rights sheet (from the startgroup link) and a bare OAuth link.

### Gaps
- No public source shows what the Telegram Business connection screen or permission scope looks like for Mira. Telegram's generic Business flow is Settings → Business → Chatbots, with a separate "reply" permission ([chatplace help](https://help.chatplace.io/en/articles/13593887-how-to-connect-the-ai-agent-to-a-telegram-business-account)). That source is not Mira-specific.
- I could not confirm whether inline mode returns results in a popup or posts directly.

## 3. Onboarding flow, step by step

### Takeaway
Officially, onboarding is "under 60 seconds" and three steps: open @mira, say anything (voice works), and ask "Connect my Gmail" to get an OAuth link. There is no paywall up front. Text chat is free, and payment is asked only at the first paid generation, through a cost-confirm card. Mira's own H1 2026 report says onboarding into integrations is the main gap: only about 1 in 250 active users connects a tool.

### Cited Findings
- **Official steps.** "Step 1: Open Mira in Telegram… Step 2: Say hello — Just type anything… `Hey Mira, what can you do?` (Tip: You can also send a voice message…) Step 3: Connect your apps — Ask Mira: *'Connect my Gmail'*… Mira will send you an auth link — click it and you're done." — [wiki Quickstart](https://wiki.mira.tg/quickstart)
- **Returning-user /start (observed).** Sending `/start STON_USDT_10` got: "Hey Masa! 👋 / Welcome back! / How can I help you today? Whether it's coding, crypto, or anything else — I'm here. 💎". A later `/start tribemind_test_payload` got "Welcome back, Masa! 💎 How can I help you today?". — [mira-harness chat export](https://github.com/Masashi-Ono0611/mira-harness/blob/main/docs/mira-chat-history.txt)
- **Deep-link payloads ignored.** "`/start` payload is ignored. `t.me/mira?start=<payload>` can't hand context to Mira (existing users get no START button), so an **app → Mira** handoff is effectively dead." — [mira-harness feedback](https://github.com/Masashi-Ono0611/mira-harness/blob/main/docs/mira-feedback.md)
- **Daily-briefing setup in the Mini App [search summary of an X post, 2026-08-11].** A user opened the Mira Mini App, set up his details, and asked for a daily briefing. Mira asked for the preferred time, his top priorities, and whether to connect Google Calendar and Gmail, then delivered meetings and urgent emails in chat. — [Greg on X](https://x.com/gregwrites_yy/status/2087312579701997722)
- **Mira Daily setup by chat.** "Set up daily push at 8:30am with weather, horoscope, and tech news". "Mira will ask you to confirm your timezone and topics, then start delivering." — [wiki Mira Daily](https://wiki.mira.tg/features/mira-daily)
- **Integration adoption gap [search summary].** Mira's H1 2026 report says "Most users never connect a single tool, and that's the biggest gap between what Mira can do and what people actually use". Another summary of the same page puts it at about 1 in 250 active users, and quotes the company saying "the bottleneck is onboarding, not demand". — [mira.tg/report](https://mira.tg/report)
- **Group onboarding.** After being added, Mira "will introduce herself and join the conversation". — [wiki Group Chats](https://wiki.mira.tg/group-chats/overview)
- **Discovery through groups [search summary].** Per TOP, more than a third of new users discover Mira by seeing it work in shared chats. — [crypto-reporter press release](https://www.crypto-reporter.com/press-releases/top-launches-telegrams-first-native-ai-agent-for-group-chats-across-a-1b-user-ecosystem-126814/); [itbrief](https://itbrief.co.uk/story/mira-ai-agent-launches-inside-telegram-group-chats)
- **Promo codes.** A `/promo` command exists. The hackathon README says "(Optional) Mira Pro credits: DM `/promo MIRAFAM26` to @mira." — [mira-harness README](https://github.com/Masashi-Ono0611/mira-harness/blob/main/README.md)
- **Group-to-DM bridge.** The /help reply ends with "Want me to add you to a group? Add to group or just add @mira manually. 💎", plus an inline "Add Mira to a group" button. — [mira-harness chat export](https://github.com/Masashi-Ono0611/mira-harness/blob/main/docs/mira-chat-history.txt)

### Inferences
- **No forced setup.** There is no forced sign-up, profile form or paywall. Personalization (name, timezone, style) is gathered conversationally ("Remember that…") or in the Mini App. Connecting tools needs the user to ask in natural language, which is a likely cause of the 1-in-250 connect rate.
- **Monetization appears at first paid action.** The first moment of spend is the generation confirm card (see section 5), not onboarding.

### Gaps
- **First-time welcome not captured.** No source captured the **first-time** /start welcome message, any intro buttons, language picker or Terms acceptance. The hackathon tester was already a returning user.
- **Mini App first-run not documented.** The Mini App's first-run screens (profile setup, "Discover") are undocumented in public material.

## 4. Core features, use cases and how users invoke them

### Takeaway
Mira bundles six areas:
- a general LLM chat with web search
- a "creator studio" (images, video, music, voice/TTS, shorts, sticker/video-note conversion)
- a productivity layer (natural-language reminders, Mira Daily morning digest, Skills = user-defined, scheduled, shareable automations with their own /slash commands)
- integrations (Composio OAuth; 200 to 1,000+ apps depending on the page)
- group-chat features (summaries, decision/action-item tracking, topic management, moderation, anonymous questions)
- a TON wallet (testnet), plus a Walt perps-trading tie-in

Most invocation is natural language in text or voice. Slash commands are minimal: /start, /help, /wallet, /skill_creator, /promo and per-skill /slug.

### Cited Findings
**Chat, search and voice**
- **Capability list (observed /help, 2026-06-08).** "• Text & voice messages — chat, transcribe voice, text-to-speech • Images & video — generate, edit, analyze, convert to video notes • Music — generate songs from text • Web search — current news, prices, schedules, weather • Reminders — one-time or recurring reminders • Daily push — personalized morning digest • Skills — custom commands like /swaphelp… • TON wallet — balance, transfers, swaps (testnet) • Integrations — Gmail, Slack, GitHub, Notion, Trello, Jira, and 200+ more • Anonymous questions — send/receive anonymous questions • Group chats — manage topics, track activity, add me to groups". — [mira-harness chat export](https://github.com/Masashi-Ono0611/mira-harness/blob/main/docs/mira-chat-history.txt)
- **Voice is the headline feature.** "**Voice is the most loved feature by our users**… press and hold to record… Mira responds in text by default. Ask *'reply with voice'* to hear her answer aloud." There are 9 named voices (nova default, alloy, ash, coral, echo, onyx, sage, shimmer, fable). — [wiki Chat & Voice](https://wiki.mira.tg/features/chat-and-voice)
- **Models, as documented and as observed.**
  - Docs table: Claude Opus/Sonnet, GPT-4o, Qwen3-32B via Cocoon, Gemini. — [wiki Agentic Infrastructure](https://wiki.mira.tg/core/agentic-infrastructure)
  - Live, the bot self-reported "GPT 5 Mini" (2026-06-08). — [mira-harness chat export](https://github.com/Masashi-Ono0611/mira-harness/blob/main/docs/mira-chat-history.txt)
  - TOP's launch said standard mode routes to OpenAI, Anthropic, Minimax, ByteDance and ElevenLabs [search summary]. — [top.co insights](https://top.co/insights/mira-ai-assistant-telegram)

**Creator studio**
- **Images.** 30 🪙 per image. Models and costs:

  | Model | Positioning | Cost |
  |---|---|---|
  | GPT Image 2 | "images with text… posters, slides" | 30 |
  | Nano Banana | quick sketches and illustrations | 30 |
  | Nano Banana Pro | "hero visuals… highest quality" | 60 |
  | Seedream 4.5 | portraits and faces | 30 |
  | Qwen Image Edit | "low moderation, creative freedom" | 30 |

  Aspect ratios are 9:16 (default), 16:9, 1:1, 4:5 and 3:2. Batch generation and editing are supported, and image analysis is free. — [wiki Images](https://wiki.mira.tg/features/images)
- **Video.** Text-to-video and image-to-video cost 100 🪙, in 9:16 (default) or 16:9. Other video tools are free: Instagram Reel download, conversion to Telegram "video note (circles)", and "Create Shorts" from a YouTube URL ("viral-ready clips with subtitles and headlines. Processing takes 5–15 minutes"). — [wiki Video](https://wiki.mira.tg/features/video)
- **Music.** Songs with lyrics or instrumentals, 5–30 seconds, described as "free of charge". — [wiki Music](https://wiki.mira.tg/features/music). This conflicts with the live bot, which showed a 60 🪙 cost card for a 15 s jingle. — [mira-harness experiments log](https://github.com/Masashi-Ono0611/mira-harness/blob/main/docs/experiments-log.md)
- **Stickers.** Tokens are "used only for paid generation: images, video, music and stickers" [search summary]. — [mira-pro.com](https://mira-pro.com/)

**Productivity**
- **Reminders.** Natural language only, e.g. "Remind me every Friday at 9am to review the sprint backlog". Users manage them by chat ("Show my reminders", "Move the 3pm reminder to 4pm"). Reminders are timezone-aware, arrive "as Telegram messages", and are "free and unlimited". — [wiki Reminders](https://wiki.mira.tg/features/reminders)
- **Mira Daily.** A personalized morning push with weather, horoscope, news, productivity tips, motivation and custom topics. It has 6 styles (Professional, Brief, Deep, Warm, Magical "with tarot and symbolism", Sharp), and users can set "favorite emojis" (e.g. ✨🌸). It is free. — [wiki Mira Daily](https://wiki.mira.tg/features/mira-daily)
- **Skills.**
  - Definition: "programmable shortcuts", created by describing them ("Create a skill called 'Morning Briefing' that…") or with `/skill_creator`.
  - Anatomy: Slug (also the `/slug` command), Name, Description (max 250 chars), Instructions, Category (dev, design, product, marketing, content, communication, productivity, ai_tools), Required integrations.
  - Sharing: a `t.me` link opens a preview with an **Install** button. Owners choose between "Publish to community catalog" and "Keep link-only". Installers do not see the instructions.

  — [wiki Skills](https://wiki.mira.tg/skills/overview); [Creating Skills](https://wiki.mira.tg/skills/creating-skills); [Sharing Skills](https://wiki.mira.tg/skills/sharing-skills)
- **Skill catalog [search summary].** skills.mira.tg describes itself as a "skill catalog for your personal AI agent… Browse skills built by the Mira team and the community — activate any of them right inside Telegram". It reported 47 live skills, e.g. daily English lesson and GitHub PR alerts. — [skills.mira.tg](https://skills.mira.tg/)

**Integrations**
- **Docs.** Gmail, Google Calendar, Notion, GitHub, Linear, Figma, Canva, Sheets, Slides, Docs, LinkedIn, Slack, Vercel, Google Photos, Instagram, "And 200+ more". Users connect and disconnect by natural language. — [wiki Tools Overview](https://wiki.mira.tg/tools/overview)
- **Composio counts differ.** The profile README says "800+ apps via Composio". — [Mira-Agent profile README](https://github.com/Mira-Agent/.github/blob/main/profile/README.md)
- **"Mira Connect" launch.** Dated 3 April 2026, with 800+ services including Calendar, Gmail, Notion, Drive, GitHub, Strava and Canva [search summary]. — [top.co insights](https://top.co/insights/mira-connects-800-integrations)
- **Marketing pages.** mira.tg says "1000+ tools" [search summary]. The finance solution page names Stripe, NetSuite, Brex and Xero. The developer page names GitHub, GitLab, Linear, Jira and Sentry. — [mira.tg finance](https://mira.tg/solutions/ai-for-finance); [mira.tg developers](https://mira.tg/solutions/ai-for-developers)
- **Linear "life hack".** Send a screenshot, then "Create a Linear task… attach this screenshot". Mira embeds it as `![image](URL)`. — [wiki Linear](https://github.com/Mira-Agent/mira-wiki/blob/main/tools/linear.mdx)

**Group chats**
- **Use cases.** Summaries ("Missed a 200-message discussion?"), decision tracking, task delegation, code review, PDF analysis, customer support, onboarding of new members, polls, moderation, event planning, travel and restaurant picks, game night, memes, and shared reminders ("Remind everyone on Friday at 6pm"). — [wiki Group Chats](https://wiki.mira.tg/group-chats/overview)
- **Forum topics.** Mira can create, rename, list and summarize topics, each with isolated context ("Mira, create a topic called 'Ideas' with emoji 💡"). — [wiki Topics](https://wiki.mira.tg/group-chats/topics)
- **Example group prompts.** "@mira summarize the last 2 hours of this chat", "@mira what are the open action items?", "@mira draft a reply to what Alex just said". — [wiki Features](https://wiki.mira.tg/product/features)
- **Anonymous questions.** A personal link `t.me/mira?start=ask_...`. The recipient gets the question "with an AI-generated pre-answer" and can Answer, Clarify, Decline, or "Reveal — pay tokens to discover who asked". — [wiki Anonymous Questions](https://wiki.mira.tg/features/anonymous-questions)

**Memory**
- **Three levels.** Personal (private), Group (shared, scoped), and "Amortized" (older chats compressed into summaries). Strict boundaries, quoted: "Private → Group: **Never**… Group → Group: **Never**". — [wiki Memory](https://wiki.mira.tg/core/memory)
- **Communication styles (older page, March 2026).** Friendly, Listener, Robot, Nerd, Cynic. — [mira-wiki features/memory.mdx](https://github.com/Mira-Agent/mira-wiki/blob/main/features/memory.mdx)

**Wallet, crypto and trading**
- **Wallet scope.**
  - The README says "Every Mira user gets a personal TON wallet created automatically… currently running on **testnet**". Examples: "Send 5 USDT to @username", "Swap 2 TON to USDT". — [Mira-Agent profile README](https://github.com/Mira-Agent/.github/blob/main/profile/README.md)
  - The newer "Agentic Wallet" page is badged "Coming Soon". It describes connecting an existing TON wallet, an agent sub-wallet, and "agent-to-agent transactions". — [wiki Agentic Wallet](https://wiki.mira.tg/wallet/overview)
- **Walt perps trading [search summary].** Walt (formerly Wallet in Telegram) lets users connect Mira, ChatGPT or Claude to trade perpetual futures from a dedicated, user-funded account. Agents cannot withdraw, and execution stays off until the user enables it. Mira's X says "Mira prepares the trade, and the user approves it". — [Unchained](https://unchainedcrypto.com/telegrams-walt-app-now-lets-ai-agents-open-and-close-perp-trades-for-users/); [Yahoo Finance](https://finance.yahoo.com/markets/crypto/articles/telegram-walt-app-now-lets-110000484.html); [Crypto Briefing](https://cryptobriefing.com/walt-ai-agents-perpetuals-trading-chatgpt-claude/); [X @trymira](https://x.com/trymira)
- **Other channels.** "Coming to iMessage soon" wording appears in @trymira posts [search summary; the search tool flagged inconsistent post metadata]. — [X @trymira](https://x.com/trymira)

**Developer and API**
- **What the docs promise.** A "Generation API" and a "Skills API", with access by request to info@mira.tg. — [wiki API Reference](https://wiki.mira.tg/api-reference/overview)
- **What a builder found (June 2026).** "@mira is chat-native… with no public API", and the author had "zero API keys to work with". — [mira-harness feedback](https://github.com/Masashi-Ono0611/mira-harness/blob/main/docs/mira-feedback.md)

**Scale (company-reported)**
- **Users, MAU and groups.** 2M+ users, 500K+ MAU and 50K+ groups (May 2026). — [itbrief](https://itbrief.co.uk/story/mira-ai-agent-launches-inside-telegram-group-chats)
- **Monthly users counter.** "1,167,762 users per month" on the Telegram profile counter (blog dated 2026-06-09) [search summary]. — [mira.tg blog](https://mira.tg/blog/mira-1-million-monthly-users)
- **Groups and tokens (H1 2026).** 175,000 group chats; 460B tokens processed on OpenRouter [search summary]. — [mira.tg/report](https://mira.tg/report)

### Inferences
- **Breadth over depth.** The feature set is very broad and consumer/creator-leaning (horoscope, anonymous questions, memes, game night). Marketing has shifted toward "team agent" and business execution (finance, developers, Team Agent). This tension is a natural design-proposal theme: progressive disclosure, and different home surfaces for "personal" and "team" modes.
- **Natural language is the main UI.** Most features have no dedicated UI and are reached only by phrasing. Discoverability therefore depends on /help, the Mini App's Discover, and example prompts.

### Gaps
- **Features of uncertain status.** I could not verify whether "Agent-to-Agent", the "Skills marketplace" and Telegram Business delegation are live or roadmap. The README roadmap marks Skills marketplace and Agent-to-Agent marketplace as unchecked. — [Mira-Agent profile README](https://github.com/Mira-Agent/.github/blob/main/profile/README.md)
- **No current-month snapshot.** No source dated October or November 2026 describes the current feature set. The latest primary docs are from 2026-05-08, and the live bot transcript is from 2026-06-08.

## 5. UI patterns: keyboards, formatting, streaming, menus, Mini App, notifications, memory controls

### Takeaway
Mira's UI is mostly **plain chat messages**. They use bullet lists (•), short bold-free headers, emoji status markers (✅ ❌ ⚠️) and a **signature 💎 sign-off**. Three interactive primitives appear:
1. **Inline callback buttons** on a cost-confirm card for paid generations: ✅ Confirm / ✅ Always yes / ❌ Cancel.
2. **Inline URL buttons** and text links for group add and OAuth.
3. A **Mini App** behind a "Discover" entry for settings such as Private Mode, communication style and subscription.

Replies arrive as **final messages, not streamed edits**, after a "typing…" indicator, with latency of 5–60 s. Proactive messages include reminders, Mira Daily, scheduled Skills, and timeout/failure follow-ups.

### Cited Findings
- **Generation confirm card (observed).** "Model: **GPT Image 2** · Cost **30 🪙** · Balance **2130 🪙** · Confirm?" with **[✅ Confirm][✅ Always yes][❌ Cancel]** callback buttons. The music card shows "Model: music · Duration 15s · Cost **60 🪙** · Balance 2130 🪙 · Confirm?" with the same three buttons. — [mira-harness experiments log](https://github.com/Masashi-Ono0611/mira-harness/blob/main/docs/experiments-log.md)
- **Generation result format.** The photo is sent with caption "Friendly teal robot mascot holding a glowing TON diamond, flat vector style. 💎 / GPT Image 2 · 30 🪙". A separate text follows: "Done! Your TON TribeMind mascot is ready. 💎". Time from confirm to image was about 58 s, and the balance went from 2130 to 2100. — [mira-harness experiments log](https://github.com/Masashi-Ono0611/mira-harness/blob/main/docs/experiments-log.md); [chat export](https://github.com/Masashi-Ono0611/mira-harness/blob/main/docs/mira-chat-history.txt)
- **Timeout states.** "The image generation was cancelled due to timeout. Let me know when you're ready to try again! 💎". "The jingle request timed out — you didn't confirm within 5 minutes." About 50 minutes later, an unsolicited long message arrived: "…each time the system requires your confirmation before starting the paid generation. The confirmation popup didn't appear or you didn't respond within the 5-minute window… Make sure you're not blocking popups in your browser…". — [mira-harness chat export](https://github.com/Masashi-Ono0611/mira-harness/blob/main/docs/mira-chat-history.txt)
- **No streaming.** "No streamed edits observed this run (`editCount` 0 everywhere) — Mira sends final messages, not progressive edits". "Latency is high and variable: first-reply 4.8s–**61.6s**", and a "typing…" indicator shows while working. — [mira-harness experiments log](https://github.com/Masashi-Ono0611/mira-harness/blob/main/docs/experiments-log.md)
- **Skill-creation draft card.** It is a plain-text structured preview: "Draft: / Name: Swap Helper / Command: /swaphelp / Activation hint: … / Schedule: — / Category: productivity / Required services: none / Instructions: …". Numbered "Questions:" follow, then "Does this look right? I can adjust any part before saving." The confirmation reads "Done! ✅ / Skill created: • Name… • Command… • Slug…" and ends with "Want me to share this skill with someone?". — [mira-harness chat export](https://github.com/Masashi-Ono0611/mira-harness/blob/main/docs/mira-chat-history.txt)
- **Skill preview fields in docs.** Name, Description, Instructions, Category. — [wiki Creating Skills](https://wiki.mira.tg/skills/creating-skills)
- **Skill listing.** "You have 2 skills set up: / System skills: • Skill Creator — … / Your custom skills: • Swap Helper — …". — [mira-harness chat export](https://github.com/Masashi-Ono0611/mira-harness/blob/main/docs/mira-chat-history.txt)
- **OAuth message.** "I've started the GitHub connection. Please click the link below… / Connect github / What happens next: 1. Open the link in your browser 2. Authorize the connection 3. Once confirmed… / The link expires in 10 minutes." The link is a text_url to connect.composio.dev. — [mira-harness chat export](https://github.com/Masashi-Ono0611/mira-harness/blob/main/docs/mira-chat-history.txt)
- **Wallet message.**
  - Header: "⚠️ Testnet — funds have no real value."
  - Error state: "TON balance: ❌ unavailable (service error) — I can retry if you want."
  - History is a bullet list of "✅ Jetton 1000000000 APR16 → EQB-re93…(2026-06-07 14:32 UTC)" rows, with ❌ for failures, ending with "Would you like me to retry fetching the TON balance now?". A natural-language query returned "TON balance: 1.8913 TON / Want to send, swap, or do anything else with your wallet?".

  — [mira-harness chat export](https://github.com/Masashi-Ono0611/mira-harness/blob/main/docs/mira-chat-history.txt)
- **/help formatting.** A bullet list of capabilities plus an inline URL **button** "Add Mira to a group". — [mira-harness experiments log](https://github.com/Masashi-Ono0611/mira-harness/blob/main/docs/experiments-log.md)
- **Skill link outputs.** Skills emit "a **plain `app.ston.fi` URL** (webpage preview), not a Telegram `startapp` 'Launch' card". In later runs Mira formatted the link as a named text link, "Swap on Ston.fi", under a header line "STON → USDT". — [mira-harness feedback](https://github.com/Masashi-Ono0611/mira-harness/blob/main/docs/mira-feedback.md); [chat export](https://github.com/Masashi-Ono0611/mira-harness/blob/main/docs/mira-chat-history.txt)
- **Structured output and language handling.** Mira "honors **strict-JSON-only** prompts exactly", and gave a fluent Japanese reply to a Japanese prompt. — [mira-harness experiments log](https://github.com/Masashi-Ono0611/mira-harness/blob/main/docs/experiments-log.md)
- **Mini App surfaces documented.** "Discover" holds the Private Mode toggle. The communication style setting lives in the Mini App. Subscription: "You can subscribe directly inside the Mira mini-app" [search summary of a mira.tg blog page]. — [wiki Private Mode](https://wiki.mira.tg/core/private-mode); [features/memory.mdx](https://github.com/Mira-Agent/mira-wiki/blob/main/features/memory.mdx); [search result referencing mira.tg blog](https://mira.tg/blog/mira-1-million-monthly-users)
- **Proactive messages.** Reminders "arrive as Telegram messages, not push notifications from another app". — [wiki Reminders](https://wiki.mira.tg/features/reminders). Mira Daily arrives "every day at the time you choose". — [wiki Mira Daily](https://wiki.mira.tg/features/mira-daily). Skills are "proactively run… on a schedule". — [wiki Agentic Infrastructure](https://wiki.mira.tg/core/agentic-infrastructure)
- **Memory controls.** Memory is managed by natural language ("Remember that I prefer short answers"). Confirmation copy: "Got it! 💎" and "Already saved — TRIBEMIND is your favorite TON token. 💎". — [wiki Memory (older)](https://github.com/Mira-Agent/mira-wiki/blob/main/features/memory.mdx); [chat export](https://github.com/Masashi-Ono0611/mira-harness/blob/main/docs/mira-chat-history.txt). Deleting context is supported per the Team Agent page [search summary]. — [mira.tg Team Agent](https://mira.tg/products/team-agent)
- **Topic deletion.** "Deleting a topic removes all messages in it. Always confirm before deleting." — [wiki Topics](https://wiki.mira.tg/group-chats/topics)

### Inferences
- **Few buttons outside paid flows.** Apart from the cost gate, I saw no reply keyboards, persistent menus or quick-reply suggestion chips. Follow-ups are offered as text questions ("Want to test it? 💎"). Suggested-action buttons are an obvious design opportunity: "Retry", "Connect Gmail", "Share skill", "Reply with voice".
- **"Always yes" trade-off.** This button is a friction-reducing auto-approve for spend. It needs a visible way back (where is it toggled off?). The docs say nothing about it.
- **Content cards would help.** Cost and balance are shown as plain text with 🪙. A richer card (model choice, aspect ratio, cost and balance in a Mini App sheet) could replace multi-turn negotiation.

### Gaps
- **No Mini App visuals.** No visual of the Mini App (layout, tabs, Discover, settings, paywall) was retrievable. Its structure and visual style are unknown beyond the "Discover" label and the Private Mode, style and subscription functions.
- **No group-chat visuals.** No capture of group-chat behavior, such as the self-introduction message, summary formatting or moderation warnings, was found.

## 6. Pricing and plans

### Takeaway
Freemium. Chat, voice, search, analysis, reminders and Mira Daily are free, subject to usage limits. Generation uses an in-app currency, **tokens (🪙)**, bought with **Telegram Stars**. **Mira Pro** costs **1,500 Stars per month**, by the most specific source. It includes 2,000 tokens per month, premium models, higher limits and 50% off token packs. Several of Mira's own pages give conflicting USD prices.

### Cited Findings
- **Free text, paid media.** "Text prompts are free, while photo and video prompts use tokens that can be bought with Telegram Stars" [search summary of TOP's launch article, February 2026]. — [top.co insights](https://top.co/insights/mira-ai-assistant-telegram)
- **Mira Pro details [search summary].** Free tier at 0 Stars. Pro at "1500 Stars per month… 2000 tokens a month, premium models, significantly higher limits, and a 50% discount on additional tokens… renews every 30 days and can be cancelled anytime". Free tier includes "basic AI model access, the option to buy tokens separately, and token earning through referrals". Also: "Chat, voice, search and analysis don't spend tokens but still count toward usage limits." — [mira-pro.com](https://mira-pro.com/) (ownership unverified)
- **Pro in the docs.** "Chat and image analysis are always free. Top up your balance or subscribe to **Mira Pro** for unlimited generations." This conflicts with "2000 tokens a month". — [wiki Images](https://wiki.mira.tg/features/images)
- **Per-action costs.**
  - Image 30 🪙 (Nano Banana Pro 60). — [wiki Images](https://wiki.mira.tg/features/images)
  - Video 100 🪙. — [wiki Video](https://wiki.mira.tg/features/video)
  - Music is "free" in the docs. — [wiki Music](https://wiki.mira.tg/features/music). The live card showed 60 🪙. — [experiments log](https://github.com/Masashi-Ono0611/mira-harness/blob/main/docs/experiments-log.md)
  - Anonymous-question "Reveal" costs tokens. — [wiki Anonymous Questions](https://wiki.mira.tg/features/anonymous-questions)
  - Reminders and Mira Daily are free. — [wiki Reminders](https://wiki.mira.tg/features/reminders); [wiki Mira Daily](https://wiki.mira.tg/features/mira-daily)
- **Conflicting USD prices on mira.tg comparison pages [search summary].** One page says Pro is $9/month. Another says Pro starts at $27/month and Pro Max at $99/month. — [mira.tg vs ChatGPT](https://mira.tg/compare/mira-vs-chatgpt); [mira.tg vs Grok](https://mira.tg/compare/mira-vs-grok)
- **Private Mode costs the same.** The docs table shows "Cost: Standard tokens" for both Normal and Private modes. — [wiki Private Mode](https://wiki.mira.tg/core/private-mode)
- **Observed Pro balance.** A Pro balance of 2130 🪙 was observed after a promo code. — [mira-harness experiments log](https://github.com/Masashi-Ono0611/mira-harness/blob/main/docs/experiments-log.md)

### Inferences
- **Hybrid model.** Pricing is "subscription plus consumables", denominated in Stars, then converted into an in-app token currency. That is two currency conversions (Stars → tokens → actions), which users struggle to reason about. A pricing-clarity proposal is warranted: show the cost in Stars, or show "x images left".

### Gaps
- **Paywall unseen.** I could not see the actual paywall or Stars-purchase screens. Telegram's native Stars payment sheet would appear, but Mira's upsell copy is unknown.
- **Pricing not confirmed for today.** No source confirms current (November 2026) pricing.

## 7. Companion apps and web surfaces

### Takeaway
No native iOS, Android or desktop app and no Chrome extension were found. Mira is Telegram-only: the bot plus the Mini App. The web surfaces are:
- a marketing site with product, solution and compare pages
- a Mintlify docs wiki
- a skills catalog
- a public usage report
- a blog

iMessage is reportedly "coming soon" per @trymira [low confidence]. Walt (Telegram's wallet app) integrates Mira for perps trading.

### Cited Findings
- **Marketing site sections [search summary].**
  - Product page: Team Agent. — [Team Agent](https://mira.tg/products/team-agent)
  - Solution pages: AI for finance and AI for developers. — [finance](https://mira.tg/solutions/ai-for-finance); [developers](https://mira.tg/solutions/ai-for-developers)
  - Compare pages: vs ChatGPT, Grok, Gemini and Microsoft Copilot. — [vs Gemini](https://mira.tg/compare/mira-vs-gemini); [vs Copilot](https://mira.tg/compare/mira-vs-microsoft-copilot)
  - Group landing page. — [mira.tg/chats](https://mira.tg/chats)
  - H1 2026 report. — [mira.tg/report](https://mira.tg/report)
  - Blog. — [mira.tg/blog](https://mira.tg/blog)
- **Docs site.** wiki.mira.tg runs on Mintlify ("theme": "mint"). Its top tabs are Overview, Features, Group Chats, Skills, Tools, Use Cases, Agentic Wallet and API Reference. The navbar CTA reads "Open in Telegram" and the secondary link reads "Try Mira". — [mira-wiki docs.json](https://github.com/Mira-Agent/mira-wiki/blob/main/docs.json)
- **Skills catalog [search summary].** — [skills.mira.tg](https://skills.mira.tg/)
- **Third-party Mini App directories list Mira.** — [findmini.app](https://www.findmini.app/mira_ibot/); [minitelegram.com](https://minitelegram.com/en/apps/mira_ibot); [tg.app](https://tg.app/apps/mira/)
- **OpenRouter presence [search summary].** Mira has an app page on OpenRouter, and Mira's blog claims it ranks #5 in AI productivity agents there. — [openrouter.ai/apps/mira](https://openrouter.ai/ko-KR/apps/mira); [mira.tg blog](https://mira.tg/blog/mira-ranks-5-among-global-ai-productivity-apps-on-openrouter); [codesota](https://www.codesota.com/agentic/openrouter-apps/mira)
- **Walt integration [search summary].** — [Unchained](https://unchainedcrypto.com/telegrams-walt-app-now-lets-ai-agents-open-and-close-perp-trades-for-users/)

### Inferences
- **Mini App as the only "app".** With no native app, the Mini App is the only place for a GUI: settings, memory viewer, skills management, billing, and a connections dashboard. "Revoke access… from the app settings" ([wiki Tools](https://wiki.mira.tg/tools/overview)) implies a connections screen exists in the Mini App.

### Gaps
- **No store listings found.** Searches found no App Store, Google Play, Product Hunt or Chrome Web Store listing for TOP's Mira. Product Hunt results for "mira" were other products.

## 8. Screenshots and visuals collected (files, sources, descriptions)

### Takeaway
Only official **brand assets** could be downloaded, 4 files from the official docs repo on GitHub. Every screenshot host was blocked by the session network policy (see the header). The best substitute for UI screenshots is the **text transcript of real bot screens** in the mira-harness repo, described in section 5. Candidate screenshot sources are listed below with URLs, for a later fetch.

### Cited Findings
**Saved files** in `/home/user/gen/research_notes/Miro Telegram AI agent research/screenshots/`:

1. **product_brand_logo_wordmark_black.png** (272×102 PNG, transparent).
   - Source: https://raw.githubusercontent.com/Mira-Agent/mira-wiki/main/logo/light.png (repo: [Mira-Agent/mira-wiki](https://github.com/Mira-Agent/mira-wiki)).
   - Shows the primary logo lockup. On the left is a **black mascot mark**: a spiky, sun- or star-like blob with about 8 soft, uneven, rounded points and **two white oval "eyes"**, which make it a cute character rather than an abstract star. On the right is the wordmark "**Mira**" in a heavy, tight geometric sans-serif, all black.
   - Monochrome with no accent color. Friendly and slightly playful, similar to a mascot-led consumer brand.
2. **product_brand_logo_wordmark_white.png** (272×102 PNG).
   - Source: https://raw.githubusercontent.com/Mira-Agent/mira-wiki/main/logo/dark.png.
   - The same lockup in **white**, for dark backgrounds. The docs use it in dark mode, per the `logo.dark` key in [docs.json](https://github.com/Mira-Agent/mira-wiki/blob/main/docs.json).
3. **product_brand_logo_wordmark_black.svg** (vector).
   - Source: https://raw.githubusercontent.com/Mira-Agent/mira-wiki/main/logo/light.svg.
   - The vector version of the lockup: six black-filled paths (mascot plus letters).
4. **product_brand_mascot_icon.svg** (601×601 vector).
   - Source: https://raw.githubusercontent.com/Mira-Agent/mira-wiki/main/favicon.svg.
   - The mascot alone, black fill, used as the docs favicon. It is likely the basis of the Telegram bot avatar, but that is unverified.

**Not saved** (not product imagery): `images/hero-light.png`, `hero-dark.png` and `checks-passed.png` in the wiki repo are Mintlify starter-template placeholders (green leaf illustration), not Mira designs.

**Candidate screenshot and video sources** for a future fetch (all blocked this session):
- Mira's Telegram profile, channel and posts: [t.me/mira](https://t.me/mira); channel @miramedia_en (preview URL would be t.me/s/miramedia_en)
- Official site with hero and product imagery: [mira.tg](https://mira.tg/); [Team Agent](https://mira.tg/products/team-agent); [mira.tg/chats](https://mira.tg/chats) (has an "Add Mira to your group" section and testimonials [search summary]); [mira.tg/report](https://mira.tg/report) (charts)
- YouTube: "This AI Assistant Lives Inside Telegram (Mira AI)", labeled #ad — [youtube.com/watch?v=n361vOBtRrc](https://www.youtube.com/watch?v=n361vOBtRrc). Also a Russian full walkthrough, "ИИ-ассистент Mira: лучший персональный помощник в Telegram? Полный разбор функций" — [youtube.com/watch?v=hZTyk1PHtvY](https://www.youtube.com/watch?v=hZTyk1PHtvY). Key frames could not be viewed.
- X posts likely to have media:
  - TOP launch, 2026-02-09 — [x.com/topdotco/status/2020836050742981033](https://x.com/topdotco/status/2020836050742981033)
  - Eyuel, 2026-05-08: "Meet 'Mira' The AI Agent that lives inside Telegram!… She's an AI assistant with her own personality, opinions" (includes a t.co media link) — [x.com/Eyuel88/status/2052745780876714461](https://x.com/Eyuel88/status/2052745780876714461)
  - Mira's $10K creator video contest, 2026-07-01, theme "connectors" — [x.com/trymira/status/2072349536090005606](https://x.com/trymira/status/2072349536090005606)
  - Defileo, 2026-07-03: "summarized 200 group chat messages while I was away in 10 seconds… I typed one sentence -> it posted across 6 platforms" — [x.com/defileo/status/2073053615988830333](https://x.com/defileo/status/2073053615988830333)
  - Greg, 2026-08-11 (Mini App daily briefing) — [x.com/gregwrites_yy/status/2087312579701997722](https://x.com/gregwrites_yy/status/2087312579701997722)
- Mini App directory listings, which usually include screenshots: [findmini.app/mira_ibot](https://www.findmini.app/mira_ibot/); [tg.app/apps/mira](https://tg.app/apps/mira/); [minitelegram.com](https://minitelegram.com/en/apps/mira_ibot)
- Press with probable product images: [itbrief](https://itbrief.co.uk/story/mira-ai-agent-launches-inside-telegram-group-chats); [Dataconomy 2026-05-20](https://dataconomy.com/2026/05/20/telegrams-ai-agent-ecosystem-mira/); [md-eksperiment 2026-02-11](https://md-eksperiment.org/en/post/20260211-mira-telegrams-new-ai-assistant-built-on-cocoon-privacy-or-marketing); [vgtimes](https://vgtimes.ru/news/147319-v-telegram-zapuschen-ii-assistent-mira-privatnost-ili-prosto-marketing.html); [T—Ж](https://t-j.ru/news/telegram-mira/); [netolink guide](https://netolink.com/mira/)

### Inferences
- **What the text transcript shows.** The transcript ([mira-chat-history.txt](https://github.com/Masashi-Ono0611/mira-harness/blob/main/docs/mira-chat-history.txt)) lets a designer reconstruct the real screens faithfully as Telegram bubbles with inline keyboards: the /help list with an "Add Mira to a group" button, the cost-confirm card with three callback buttons, the OAuth message, the wallet list, and the skill draft.

### Gaps
- **No real UI screenshots.** Not of the Mini App, the website hero, groups or onboarding. Allowing these hosts would let them be retrieved: mira.tg, t.me, cdn*.telesco.pe, x.com/pbs.twimg.com, youtube.com/i.ytimg.com and findmini.app.
- **No design-community uploads found.** No Dribbble, Behance, Figma Community or Mobbin entries for TOP's Mira turned up in search.

## 9. Visual identity and brand (logo, color, type, tone, illustration, website)

### Takeaway
The brand centers on a **mascot**: a black, spiky, star-like creature with two eyes. Next to it is a bold black "Mira" wordmark, shipped in monochrome black and white variants. The docs theme uses **violet** accents (#7C3AED). The voice is **warm, casual and feminine-personified**: Mira is "she", with emoji 💎 as a sign-off and "Done! ✅" acknowledgements. The positioning line is "turns conversations into actions", with "execution layer" for the B2B framing.

### Cited Findings
- **Logo.** A mascot mark plus wordmark, in black (light.svg, all fills "black") and white (dark.svg, all fills "white") variants. The favicon is the mascot alone. — [mira-wiki logo/](https://github.com/Mira-Agent/mira-wiki/tree/main/logo); [favicon.svg](https://github.com/Mira-Agent/mira-wiki/blob/main/favicon.svg)
- **Docs color tokens.** `"primary": "#7C3AED", "light": "#A78BFA", "dark": "#5B21B6"`. These are Tailwind violet-600/400/800 equivalents. — [mira-wiki docs.json](https://github.com/Mira-Agent/mira-wiki/blob/main/docs.json)
- **Persona.** Docs refer to Mira as "she" and "her": "talking to her feels like texting a friend — except this friend remembers everything, reasons deeply, and never sleeps". — [wiki Chat & Voice](https://wiki.mira.tg/features/chat-and-voice). In groups: "She's a **participant**… your team's digital colleague", "the AI member who never sleeps". — [wiki Group Chats](https://wiki.mira.tg/group-chats/overview)
- **In-chat tone.** The 💎 emoji closes almost every reply. Other recurring phrases: "Hey Masa! 👋", "Done! ✅", "Got it! 💎", "Pong! ✅", "Want to test it? 💎". — [mira-harness chat export](https://github.com/Masashi-Ono0611/mira-harness/blob/main/docs/mira-chat-history.txt)
- **Personality as a product claim.** An X user describes Mira as "an AI assistant with her own personality, opinions" (2026-05-08). — [Eyuel on X](https://x.com/Eyuel88/status/2052745780876714461)
- **Copy themes.** Recurring themes are "act, not just respond" and "No dashboards, no cron jobs, no code". Also: "Mira doesn't ask you to switch apps. It meets you where you are". — [wiki Agentic Infrastructure](https://wiki.mira.tg/core/agentic-infrastructure); [wiki index](https://wiki.mira.tg)

### Inferences
- **Telegram blue context.** The README badge uses Telegram blue (#2CA5E0) for the "Try Mira" button ([profile README](https://github.com/Mira-Agent/.github/blob/main/profile/README.md)). The brand probably leans on Telegram-native blue in CTAs while keeping a monochrome mascot. This is unconfirmed without the website.
- **💎 and TON.** The 💎 sign-off likely nods to TON's diamond/gem iconography (Mira is TON-ecosystem). It works as a recognizable verbal-visual signature in chat.

### Gaps
- **Website styling unknown.** I could not verify the website's actual typography, color palette, illustration style or hero design, because mira.tg was blocked. The wordmark's typeface is unidentified.
- **Bot avatar unconfirmed.** The bot's avatar was not seen; it is assumed to be the mascot.

## 10. UX friction observed in the materials

### Takeaway
The biggest frictions are:
1. **Integration onboarding.** Only about 1 in 250 users connects a tool, and connecting requires the user to know to ask.
2. **Slow, non-streamed replies** of 5–60 s, with time-limited confirmation gates that silently expire.
3. **Inconsistent facts across Mira's own surfaces**: model names, integration counts, prices, what is free, wallet status, memory visibility.
4. **Trust breaks**: a third-party OAuth domain, a "testnet" wallet, a paid "reveal" in anonymous questions, an "Always yes" auto-spend.
5. **Discoverability**: settings such as Private Mode are buried behind Mini App → Discover, and most features exist only as phrases.

### Cited Findings
- **Integration gap.** "Most users never connect a single tool… the biggest gap between what Mira can do and what people actually use" [search summary]. — [mira.tg/report](https://mira.tg/report)
- **Latency.** "Latency is high and variable — first reply ranged **4.8s – 61.6s**. A naive client times out." — [mira-harness feedback](https://github.com/Masashi-Ono0611/mira-harness/blob/main/docs/mira-feedback.md)
- **Silent confirmation timeouts.** Paid generations need a button press within 5 minutes or they are cancelled. The bot's own explanation referenced a "confirmation popup" and "blocking popups in your browser". That copy is confusing inside Telegram, and it arrived about 50 minutes later, unprompted. — [mira-harness chat export](https://github.com/Masashi-Ono0611/mira-harness/blob/main/docs/mira-chat-history.txt)
- **Deep-link handoff fails.** `/start` payloads are ignored for existing users, so "app → Mira handoff is effectively dead". — [mira-harness feedback](https://github.com/Masashi-Ono0611/mira-harness/blob/main/docs/mira-feedback.md)
- **Research hallucinations.** "Across runs I saw 'TON rebranded to Gram' and 'USDT launched 2026.' Surface the source, never auto-execute on it." — [mira-harness feedback](https://github.com/Masashi-Ono0611/mira-harness/blob/main/docs/mira-feedback.md)
- **Skill activation feedback.** Messages that do not match a skill's pattern get a corrective explanation rather than a graceful fallback: "The skill only activates on messages matching the FROM_TO_AMOUNT pattern…". The live behavior was also permissive in other cases, so the rules are unclear to users. — [mira-harness chat export](https://github.com/Masashi-Ono0611/mira-harness/blob/main/docs/mira-chat-history.txt); [experiments log](https://github.com/Masashi-Ono0611/mira-harness/blob/main/docs/experiments-log.md)
- **Raw data in wallet output.** Wallet history shows raw contract addresses and unformatted jetton amounts ("Jetton 1000000000 APR16 → EQB-re93kxeC…"). The balance call returned a "service error" first. — [mira-harness chat export](https://github.com/Masashi-Ono0611/mira-harness/blob/main/docs/mira-chat-history.txt)
- **OAuth leaves the brand.** The OAuth link leaves Telegram for `connect.composio.dev`, a third-party brand, and expires in 10 minutes. — [mira-harness chat export](https://github.com/Masashi-Ono0611/mira-harness/blob/main/docs/mira-chat-history.txt)
- **Contradictions within Mira's own materials.**
  - **Memory in groups.**
    - The older page (March 2026) says "Group chat: Facts are public (visible to group members)" and "In group chats, facts are visible to other members". — [features/memory.mdx](https://github.com/Mira-Agent/mira-wiki/blob/main/features/memory.mdx); [chat-and-voice.mdx](https://github.com/Mira-Agent/mira-wiki/blob/main/features/chat-and-voice.mdx)
    - The newer page (May 2026) says "Private → Group: **Never**". — [core/memory.mdx](https://wiki.mira.tg/core/memory)
  - **Integration counts.** The counts vary: 200+ ([Tools](https://wiki.mira.tg/tools/overview)), 500+ ([Agentic Infrastructure](https://wiki.mira.tg/core/agentic-infrastructure)), 800+ ([README](https://github.com/Mira-Agent/.github/blob/main/profile/README.md)), 900+ ([Dataconomy](https://dataconomy.com/2026/05/20/telegrams-ai-agent-ecosystem-mira/)) and 1,000+ ([mira.tg](https://mira.tg/), search summary).
  - **Models.** The docs say GPT-4o. — [Private Mode](https://wiki.mira.tg/core/private-mode). The live bot says "GPT 5 Mini", and the hackathon deck said "MiniMax M2.5". — [mira-harness feedback](https://github.com/Masashi-Ono0611/mira-harness/blob/main/docs/mira-feedback.md)
  - **Music pricing.** The docs say free, but the live card charged 60 🪙. Pro is described as "unlimited generations" in one place and "2000 tokens/month" in another. USD prices of $9, $27 and $99 appear on different compare pages. — sources in section 6.
  - **Wallet status.** The wallet is "Coming Soon" on the Agentic Wallet page. — [wallet/overview](https://wiki.mira.tg/wallet/overview). Elsewhere every user "gets a personal TON wallet created automatically" (testnet), and /wallet works live. — [README](https://github.com/Mira-Agent/.github/blob/main/profile/README.md); [chat export](https://github.com/Masashi-Ono0611/mira-harness/blob/main/docs/mira-chat-history.txt)
  - **Broken docs links.** The docs nav still links pages that were removed or redirected, e.g. index cards to "/core/social-memory" and "/product/features", and quickstart cards to "/features/chat", "/features/voice" and "/features/integrations". — [index.mdx](https://github.com/Mira-Agent/mira-wiki/blob/main/index.mdx); [quickstart.mdx](https://github.com/Mira-Agent/mira-wiki/blob/main/quickstart.mdx); [git log, "redirect social-memory → memory"](https://github.com/Mira-Agent/mira-wiki/commits/main)
- **Name and handle confusion.** Users must choose between @mira and @mira_ibot, and between several unrelated "Mira" bots and sites (@usemirabot, mymira.io, mira-pro.com). — [usemira.pro](https://usemira.pro/); [mymira.io](https://mymira.io/blog/imessage-ai-assistants); [mira-pro.com](https://mira-pro.com/)
- **No public API.** "Zero API keys", no CLI or SDK, and the docs' API promise conflicts with reality for builders. — [mira-harness feedback](https://github.com/Masashi-Ono0611/mira-harness/blob/main/docs/mira-feedback.md); [wiki API Reference](https://wiki.mira.tg/api-reference/overview)

### Inferences
- **Proposal angles.** A design proposal could target these, each tied to a friction above:
  1. **Contextual connector prompts**: offer "Connect Calendar" inline when a user asks about meetings, instead of waiting for "Connect my Gmail".
  2. **Progress and streaming states** for long jobs: "Generating… ~45 s", progress edits, and a cancel option.
  3. **Persistent confirm cards** that do not silently expire, or that re-surface with "Still want this? [Generate]".
  4. **A unified cost model** shown in Stars or remaining units.
  5. **A Mini App "Control Center"** for memory (view/delete facts), connections, Private Mode, skills and the "Always yes" setting.
  6. **Group-entry UX**: a self-intro message with a permission explainer and quick actions such as Summarize, Set reminder and Add topic.
  7. **Human-readable wallet output.**
  8. **A single source of truth** for product facts across site, docs and bot.

### Gaps
- **No observed group or Mini App friction.** I found no direct user complaints about group behavior or Mini App usability. The sibling note user_sentiment_reviews.md covers sentiment.
- **Some frictions need a device to confirm.** These could not be observed without logging in: the Telegram admin-rights sheet wording and the Business connection steps.

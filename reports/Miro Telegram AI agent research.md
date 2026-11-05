# Mira's reach outpaces its trust and clarity

The "Miro" Telegram agent is **Mira** (bot **@mira**, site **mira.tg**, X **@trymira**). It is a Telegram-native personal and group AI agent built by **The Open Platform (TOP)**, a Dubai-based TON-ecosystem venture builder that reached a **$1B valuation after a $28.5M Ribbit-led round in July 2025**. Mira went live publicly on **2026-02-09** and launched globally in **May 2026**. The company says it now has **1M+ monthly users and 150K–175K group chats**. It runs as a standard bot with a small Mini App behind a "Discover" button. Chat, voice, search, reminders and a morning digest are free. Images, video and music cost an in-app token currency bought with Telegram Stars, and **Mira Pro is listed at 1,500 Stars a month**.

The key finding for a designer is that Mira's problem is not reach. It is turning reach into trusted action. Mira's own H1 2026 report says **about 1 in 250 active users ever connects a tool**. The few user complaints that exist cluster around four things: a confusing three-layer paywall (one paying user called Pro "deception"), doubts about privacy ("privacy or just marketing?"), generic or repeated answers, and a support link that does not work. A developer's chat transcript from June 2026 adds **unstreamed replies that took 4.8 to 61.6 seconds** and paid confirmations that **expire silently after five minutes**.

Telegram's 2026 Bot API makes the fixes buildable now. It adds streamed drafts with a Stop button, private messages to one user inside a group, Guest Mode, and formatted messages with coloured buttons. The same releases also let Telegram's built-in AI and any rival bot copy Mira's basic features. What Mira can still defend is group-native memory and safe delegated action. The strongest proposal would therefore lead with an activation flow: someone sees Mira in a group, then completes their first connected task, with clear consent and memory controls throughout. A clear Stars pricing meter would be the second pillar.

The evidence is thin. Most websites were blocked during research, so many findings rest on search-result snippets and the company's own claims, and only about six organic Mira-specific complaints exist.

## Thin, company-heavy evidence shapes every conclusion here

The research session's network policy blocked direct reads of almost every primary host: mira.tg, top.co, t.me, telegram.org, x.com, YouTube, the App Store, Product Hunt and most press sites. The Firecrawl scraping tool was also out of credits. That leaves three reliable primary sources and a large layer of secondhand material.

- **Mira's official docs repo** ([Mira-Agent/mira-wiki](https://github.com/Mira-Agent/mira-wiki), last updated 2026-05-08) and its GitHub org README were readable on GitHub.
- **A hackathon repository** ([mira-harness](https://github.com/Masashi-Ono0611/mira-harness)) won first place in the STON.fi Hackathon's Mira AI Track. It contains a **101-message export of a real @mira chat captured 2026-06-07/08**, including inline buttons. This is the closest thing available to real screens, but it reflects one developer who was a returning user with promo credits.
- **Telegram's platform docs** were read through verbatim GitHub mirrors (current to Bot API 10.2, July 2026) and a machine-readable spec (Bot API 10.3, August 24, 2026). Anything Telegram shipped after late August 2026 is unverified.

Everything else comes from search-engine titles, snippets and summaries. The pages behind them could not be opened. **No real screenshot of Mira's chat, Mini App or website could be captured.** The saved images are Mira brand assets, reference images of Telegram's native Mini App UI, and a few competitor images.

Throughout the report, **[Mira]** marks evidence about Mira itself and **[Proxy]** marks evidence from adjacent products (other Telegram AI bots, messenger agents, Telegram's own AI). Quotation marks are used only for text that search results showed as exact or near-exact. Paraphrased summaries never appear as quotes. All user, group and integration metrics are company-reported, unaudited and mutually inconsistent. The researchers were about 90% confident that "Miro" means Mira; the job title the user interviewed for, "Senior Product Designer (Mira)", settles it.

Screenshot paths below such as `screenshots/telegram_miniapp_main_button.png` are relative to the research notes folder. From this report's location that is `../research_notes/Miro Telegram AI agent research/screenshots/`.

## A $1B Telegram venture builder shipped Mira in under a year

**About TOP.** TOP was founded in 2023, is headquartered in Dubai and is led by founder and CEO **Andrew Rogozov** ([The Informer Post](https://theinformerpost.beehiiv.com/p/the-open-platform-aims-to-pioneer-web-3-0-superapp-development-through-wallet-integration-in-telegra); [Crunchbase](https://www.crunchbase.com/person/andrew-rogozov)). It describes itself as a TON-ecosystem builder whose portfolio includes Wallet in Telegram, Tonkeeper, STON.fi, Getgems and Tribute ([The Block PR](https://www.theblock.co/press-releases/361030/the-open-platform-is-first-unicorn-in-web3-ecosystem-in-telegram-at-1bn-valuation)).

**Funding.** The July 2025 extended Series A was **$28.5M at a $1B valuation, led by Ribbit Capital with Pantera** ([CoinDesk](https://www.coindesk.com/business/2025/07/03/the-open-platform-becomes-first-ton-unicorn-following-285m-raise)). TOP says it has raised **more than $70M** in total ([Finance Magnates](https://www.financemagnates.com/thought-leadership/the-open-platform-is-first-unicorn-in-web3-ecosystem-in-telegram-at-1bn-valuation/)). Fortune reported that the round bought about 5% of equity and that the money would help "incubate other TON-based projects, including blockchain games and AI applications" ([Fortune](https://fortune.com/crypto/2025/07/03/telegram-blockchain-the-open-platform-top-ribbit-pantera-capital)). Mira fits that brief. No Mira-specific funding round, named Mira product lead or verified headcount was found. TOP announced Mira only as "built by a TOP portfolio team" ([TOP on X](https://x.com/topdotco/status/2020836050742981033)). Its job ads describe remote hiring with hubs in **Dubai, Yerevan, London and Belgrade** ([freehire](https://freehire.me/jobs/senior-product-manager-the-open-platform-zyz4qrll)).

| Date | Milestone | Source |
|---|---|---|
| 2025-10-29 | Durov unveils Cocoon, a confidential AI compute network on TON; it goes live around end of November 2025 | [Cryptonomist](https://en.cryptonomist.ch/2025/12/01/cocoon-network-telegram-confidential-ai/) |
| Late 2025 | Mira soft launch, per partner STON.fi | [STON.fi on X](https://x.com/ston_fi/status/2105629422665572766) |
| 2026-02-09 | TOP posts "Mira is now live in Telegram"; text free, photo and video via Stars-bought tokens; about 130K users soon after [paraphrase] | [TOP on X](https://x.com/topdotco/status/2020836050742981033); [top.co](https://top.co/insights/mira-ai-assistant-telegram); [T—Zh](https://t-j.ru/news/telegram-mira/) |
| 2026-04-03 | "Mira Connect" launches 800+ integrations via Composio [search summary] | [top.co](https://top.co/insights/mira-connects-800-integrations) |
| 2026-05-20 | Global launch: 2M+ users, about 500K MAU, 50K+ groups; over a third of new users discover Mira inside shared chats | [Dataconomy](https://dataconomy.com/2026/05/20/telegrams-ai-agent-ecosystem-mira/); [IT Brief UK](https://itbrief.co.uk/story/mira-ai-agent-launches-inside-telegram-group-chats) |
| 2026-06-09 | Blog post: "1 million monthly users" (profile counter 1,167,762) | [Mira blog](https://mira.tg/blog/mira-1-million-monthly-users) |
| H1 2026 | Report: 175K group chats, 460B tokens on OpenRouter, about 0.4% of users connect a tool | [mira.tg/report](https://mira.tg/report) |
| Jun–Aug 2026 | Open roles: Senior PM (onboarding, monetization, agent flows), Backend (agent memory, orchestration), CTO, Senior Product Designer (Mira) | [freehire TOP](https://freehire.me/companies/the-open-platform) |
| 2026-10-20 | TOP's trading app Walt opens perpetual futures to AI agents including Mira; agents cannot withdraw, and execution starts switched off | [24/7 Wall St.](https://247wallst.com/investing/cryptocurrency/2026/10/20/you-can-now-let-chatgpt-or-claude-trade-crypto-futures-for-you-on-telegram-is-that-a-good-idea/) |
| "Soon" | iMessage version | [@trymira](https://x.com/trymira) |

**The ecosystem around Mira.** Mira is the TON/Telegram ecosystem's flagship consumer agent, not an outsider. Its Private Mode runs on Cocoon. TOP publishes the TON Tech Agentic Wallets announcement ([TOP insights](https://top.co/insights/ton-tech-agentic-wallets)). Walt and STON.fi are sister companies. This explains a roadmap that leans toward money: "a dedicated sub-wallet allowing users to authorize agents to complete transactions for services within predefined limits", plus agent-to-agent interactions ([Dataconomy](https://dataconomy.com/2026/05/20/telegrams-ai-agent-ecosystem-mira/)).

**Growth and its engine.** Growth was reported as "doubling month-over-month" in May. One analyst warned that "that growth rate will inevitably moderate" ([Efficiently Connected](https://www.efficientlyconnected.com/mira-telegram-messenger-native-ai-agent/)). The company's main growth loop is that over a third of new users meet Mira in a group before adopting it personally ([Dataconomy](https://dataconomy.com/2026/05/20/telegrams-ai-agent-ecosystem-mira/)).

**What the design role covers.** The hiring brief points the same way. The Senior Product Designer listing covers "end-to-end design of Mira, from interfaces and landing pages to chat-based user journeys". It asks for decisions grounded in product data and research, and for practical use of AI. Its nice-to-haves are AI or agent products, Telegram Mini Apps or bots, and designing for trust, privacy and user control ([RemoteDXB](https://www.remotedxb.com/job/senior-product-designer-top--2950335); [freehire](https://freehire.me/jobs/senior-product-designer-mira-the-open-platform-bezqig22)). The sibling PM role covers **onboarding, monetization and agent flows** ([freehire Senior PM](https://freehire.me/jobs/senior-product-manager-the-open-platform-zyz4qrll)). Read together, the open roles describe a team trying to convert scale into activation and revenue while hardening the agent's memory and orchestration. Those are the axes a proposal should speak to. The job text itself was read only through aggregator snippets.

## Mira lives in chat bubbles, with a thin Mini App behind "Discover"

### A standard bot that joins groups as an admin

Mira is a normal Bot API bot, not a userbot logged in as a person. The hackathon builder had to drive it from an MTProto userbot because "a bot cannot read another bot's messages", and he found it has "no public API" despite API pages in the docs ([mira-harness README](https://github.com/Masashi-Ono0611/mira-harness/blob/main/README.md); [feedback](https://github.com/Masashi-Ono0611/mira-harness/blob/main/docs/mira-feedback.md)). Users can reach the same agent through three handles: **@mira**, **@mira_ibot** ([tgfind](https://tgfind.app/bots/mira_ibot)), and the **@MiraAiBot** handle cited in February 2026 coverage ([T—Zh](https://t-j.ru/news/telegram-mira/)). At least two unrelated Telegram bots also use the name "Mira".

**In groups.** Mira is added through a deep link that pre-requests admin rights to invite users and manage topics (`t.me/mira?startgroup=1&admin=invite_users+manage_topics`). After that, "Mira will introduce herself". Busy groups get her attention by mention or reply ([wiki Group Chats](https://wiki.mira.tg/group-chats/overview)). With admin rights she can delete spam, warn and mute users ([wiki Moderation](https://wiki.mira.tg/group-chats/moderation)).

**Other entry points the docs claim.** Typing "@mira in any message field", delegating your Telegram Business inbox, and tagging @mira in a chat "even if it isn't a member" [search summary] ([wiki Features](https://wiki.mira.tg/product/features); [Team Agent](https://mira.tg/products/team-agent)). That last one is probably Telegram's Guest Mode or inline mode, which should be verified on a device.

**Connecting external tools.** Users connect tools through OAuth links that Mira posts in chat. The links lead to Composio's domain and "expire in 10 minutes" ([chat export](https://github.com/Masashi-Ono0611/mira-harness/blob/main/docs/mira-chat-history.txt)).

**The Mini App.** It opens at `t.me/mira/home` from a "Discover" entry ([wiki Private Mode](https://wiki.mira.tg/core/private-mode)), which is probably the chat's menu button. It hosts the Private Mode toggle, communication style and the subscription purchase. There is no native app, store listing or browser extension.

### Onboarding takes three steps and has no paywall, but only 1 in 250 users connects a tool

**The official flow.** It is "Open Mira… Say hello… Connect your apps — Ask Mira: 'Connect my Gmail'… Mira will send you an auth link" ([wiki Quickstart](https://wiki.mira.tg/quickstart)). There is no sign-up form or upfront paywall. Personalization is gathered by conversation, and payment first appears at the first paid generation.

**What a user saw.** In August 2026 one user asked for a daily briefing. Mira asked for a time, his priorities, and whether to connect Google Calendar and Gmail, then delivered meetings and urgent emails in chat [paraphrase] ([Greg on X, 2026-08-11](https://x.com/gregwrites_yy/status/2087312579701997722)). The company's own funnel, from search summaries of its H1 report, shows how rarely that happens. About 40% of users "put Mira to work on a real task". Reminders are "the smallest slice". Only **0.4% connect an external service**, and the company calls this "the biggest gap between what Mira can do and what people actually use" ([mira.tg/report](https://mira.tg/report)).

**Handoffs from other apps are broken.** Deep-link payloads are ignored for existing users, so "an app → Mira handoff is effectively dead" ([mira-harness feedback](https://github.com/Masashi-Ono0611/mira-harness/blob/main/docs/mira-feedback.md)).

**Not captured.** The first-time /start welcome and the Mini App's first-run screens appear in no public source.

### The feature set is broader than the interface

Mira bundles six areas:

- **General chat** with web search and voice. Voice is "the most loved feature by our users", with nine selectable voices ([wiki Chat & Voice](https://wiki.mira.tg/features/chat-and-voice)).
- **A creator studio** for images across five models, text-to-video, music, YouTube-to-Shorts and video-note conversion ([wiki Images](https://wiki.mira.tg/features/images); [wiki Video](https://wiki.mira.tg/features/video)).
- **Productivity tools**: natural-language reminders, the free "Mira Daily" morning push, and Skills ([wiki Reminders](https://wiki.mira.tg/features/reminders)). Mira Daily mixes weather, horoscope, news and tips in six styles, including a "Magical" one "with tarot and symbolism" ([wiki Mira Daily](https://wiki.mira.tg/features/mira-daily)). Skills are user-defined, schedulable automations with their own slash command, shareable as a t.me link with an Install button ([wiki Skills](https://wiki.mira.tg/skills/overview)).
- **Integrations**, which Mira's own pages count at anywhere from 200+ to 1,000+.
- **Group features**: summaries, action items, forum-topic management, moderation, and anonymous questions where recipients can "Reveal — pay tokens to discover who asked" ([wiki Topics](https://wiki.mira.tg/group-chats/topics); [wiki Anonymous Questions](https://wiki.mira.tg/features/anonymous-questions)).
- **A TON wallet** that runs on testnet ([profile README](https://github.com/Mira-Agent/.github/blob/main/profile/README.md)).

**Memory** has three tiers (personal, group and "amortized" summaries) and a strict boundary policy: "Private → Group: Never… Group → Group: Never" ([wiki Memory](https://wiki.mira.tg/core/memory)). An older March 2026 page said the opposite, that "in group chats, facts are visible to other members" ([features/memory.mdx](https://github.com/Mira-Agent/mira-wiki/blob/main/features/memory.mdx)).

**Models.** The docs say normal mode runs GPT and Private Mode runs Qwen3-32B on Cocoon ([llms.txt](https://github.com/Mira-Agent/mira-wiki/blob/main/llms.txt)). The live bot called itself "GPT 5 Mini" in June ([chat export](https://github.com/Masashi-Ono0611/mira-harness/blob/main/docs/mira-chat-history.txt)). Press reports routing across OpenAI, Anthropic, MiniMax, ByteDance and ElevenLabs ([IT Brief UK](https://itbrief.co.uk/story/mira-ai-agent-launches-inside-telegram-group-chats)).

Almost all of this is reached by phrasing alone. The slash commands are just /start, /help, /wallet, /skill_creator, /promo and each skill's /slug. Discoverability therefore depends on /help, the Mini App and luck.

### The real screens, reconstructed from a June 2026 transcript

With no screenshots available, the transcript is the best record of what Mira's chat actually looks like. Replies are plain bubbles with "•" lists, ✅/❌/⚠️ status emoji and a 💎 sign-off on almost every message. Only two kinds of interactive element appeared: a cost-confirm card with callback buttons, and URL buttons for group-add and OAuth. No streaming was observed ("editCount 0 everywhere"), only a "typing…" indicator before each final message ([experiments log](https://github.com/Masashi-Ono0611/mira-harness/blob/main/docs/experiments-log.md)).

The paid-generation gate and its result, about 58 seconds after confirming:

```
Model: GPT Image 2 · Cost 30 🪙 · Balance 2130 🪙 · Confirm?
[✅ Confirm]  [✅ Always yes]  [❌ Cancel]

<photo>  "Friendly teal robot mascot holding a glowing TON diamond, flat vector style. 💎
          GPT Image 2 · 30 🪙"
"Done! Your TON TribeMind mascot is ready. 💎"
```

The OAuth handoff, the wallet, and the skill-creation draft:

```
"I've started the GitHub connection. Please click the link below…"
Connect github  → connect.composio.dev/link/lk_…
"What happens next: 1. Open the link in your browser 2. Authorize the connection 3. Once confirmed…
 The link expires in 10 minutes."

"⚠️ Testnet — funds have no real value."
"TON balance: ❌ unavailable (service error) — I can retry if you want."
"✅ Jetton 1000000000 APR16 → EQB-re93…(2026-06-07 14:32 UTC)"

"Draft: / Name: Swap Helper / Command: /swaphelp / Schedule: — / Category: productivity /
 Required services: none / Instructions: … / Questions: 1… 2…
 Does this look right? I can adjust any part before saving."
```

**What happens on timeout.** When a confirmation lapses, the card is replaced by "The jingle request timed out — you didn't confirm within 5 minutes." About 50 minutes later an unprompted message arrived. It blamed a "confirmation popup" and told the user to "make sure you're not blocking popups in your browser". That copy makes no sense inside Telegram ([chat export](https://github.com/Masashi-Ono0611/mira-harness/blob/main/docs/mira-chat-history.txt)).

**/help.** The /help reply is a capability bullet list ending "Want me to add you to a group? 💎", plus a single "Add Mira to a group" URL button. No reply keyboards, suggestion chips or persistent menus appeared anywhere. Follow-ups are offered as text questions such as "Want to test it? 💎".

### Pricing stacks Stars, tokens and usage limits

| Item | Price | Source and caveat |
|---|---|---|
| Text chat, voice, search, image analysis | Free, but "count toward usage limits" [paraphrase] | [mira-pro.com](https://mira-pro.com/) (ownership unverified); [wiki Images](https://wiki.mira.tg/features/images) |
| Reminders, Mira Daily | Free | [wiki Reminders](https://wiki.mira.tg/features/reminders) |
| Image | 30 🪙 (Nano Banana Pro 60 🪙) | [wiki Images](https://wiki.mira.tg/features/images) |
| Video | 100 🪙 | [wiki Video](https://wiki.mira.tg/features/video) |
| Music | "Free of charge" in docs; 60 🪙 for a 15-second jingle live (June 2026) | [wiki Music](https://wiki.mira.tg/features/music) vs [experiments log](https://github.com/Masashi-Ono0611/mira-harness/blob/main/docs/experiments-log.md) |
| Starter balance and top-up | 150 tokens to start (one video or five images); 300 Stars for 300 tokens [paraphrase] | [Yablyk](https://yablyk.com/079886-besplatnaya-nejroset-mira-v-telegram-kak-zapustit-i-polzovatsya/) |
| Mira Pro | 1,500 Stars per 30 days; 2,000 tokens; premium models; higher limits; 50% off token packs | [mira-pro.com](https://mira-pro.com/) |
| Pro on other Mira pages | "Unlimited generations"; or $9/mo; or $27/mo with Pro Max at $99/mo | [wiki Images](https://wiki.mira.tg/features/images); [vs ChatGPT](https://mira.tg/compare/mira-vs-chatgpt); [vs Grok](https://mira.tg/compare/mira-vs-grok) |
| Private Mode | "Standard tokens" | [wiki Private Mode](https://wiki.mira.tg/core/private-mode) |

**The model.** Mira sells a subscription plus consumables, with two currency conversions (Stars to tokens, tokens to actions) and a separate, invisible usage limit on top. Mira's own surfaces give at least four different answers about what Pro costs and includes. No source confirms current November 2026 pricing, and nobody captured the real paywall screen.

### A mascot, a violet accent and a 💎 sign-off

**Logo and mascot.** The brand centres on a black, spiky, star-like creature with two white oval eyes, next to a heavy geometric "Mira" wordmark, shipped in monochrome black and white versions. See `screenshots/product_brand_logo_wordmark_black.png`, `screenshots/product_brand_logo_wordmark_white.png`, `screenshots/product_brand_logo_wordmark_black.svg`, and the standalone mascot `screenshots/product_brand_mascot_icon.svg`.

**Colour.** The docs theme uses violet `#7C3AED`, with `#A78BFA` and `#5B21B6` ([docs.json](https://github.com/Mira-Agent/mira-wiki/blob/main/docs.json)).

**Voice.** Mira is "she": talking to her "feels like texting a friend — except this friend remembers everything", and in groups she is "your team's digital colleague" ([wiki Chat & Voice](https://wiki.mira.tg/features/chat-and-voice); [wiki Group Chats](https://wiki.mira.tg/group-chats/overview)). The website's real typography and hero design could not be seen.

## Users stumble on price, privacy and "what can you actually do?"

**How the ranking was built.** Mira-specific critical feedback is scarce. It amounts to about six organic data points, mostly Russian-language comments from the February–March 2026 launch audience. Two more structured sources add to it: one developer's June 2026 feedback log, and the company's own funnel data. No Reddit or Hacker News threads about Mira exist. English-language praise on X reads as promotional. The main YouTube reviews are tagged #ad or carry referral links ([YouTube](https://www.youtube.com/watch?v=n361vOBtRrc); [YouTube](https://www.youtube.com/watch?v=F1GZJKsuIDE)). Mira's site shows a self-reported 5.0 rating from seven reviews ([mira.tg](https://mira.tg/)). Telegram bots have no public review mechanism, so most dissatisfaction shows up only as silent churn. The ranking below weighs how often a theme recurs across Mira and proxy evidence, then how much damage it does to trust and retention. It is qualitative.

| Rank | Problem | [Mira] evidence | [Proxy] evidence | Severity |
|---|---|---|---|---|
| 1 | **Pricing opacity and paywall surprise** | Paid Pro "worked two days" then demanded tokens; user calls it deception (T—Zh comments, Feb–Mar 2026, paraphrase). FAQ must separate Pro, tokens and limits. Four conflicting Pro prices across Mira pages. Music "free" in docs but charged live (June 2026) | AI-wrapper refund complaints; OpenClaw runaway token costs; Stars sales are "final" | High: direct churn and "scam" framing |
| 2 | **Activation gap: users don't know what Mira does or how to connect tools** | 0.4% connect a tool (H1 2026 report). "The honest trade-off is setup complexity" (Mira blog). "What can you actually do?" (2026-08-11). Timezone correction needed for a reminder (2026-08-11). Deep-link handoff dead (June 2026) | Poke onboarding abandoned over access fears | High: caps value at scale |
| 3 | **Privacy doubts: what Mira sees, stores and shares** | "Privacy or just marketing?" headlines (Feb 2026). Sceptical pieces on abit.ee and MEXC. Docs contradicted themselves on group memory (March vs May 2026) | "A huge betrayal" (Jan 2026). Grok-deal backlash (May 2025). Poke inbox-access worries | High: blocks integrations and group memory |
| 4 | **Generic, repeated or wrong output, judged against a "spammy bot" expectation** | Same answers repeated; images "так себе" ("so-so"). "It's just advertising" (YouTube). "TG spammy shii" expectation (2026-08-11). Hallucinated "TON rebranded to Gram" (June 2026). "Wrapper" critique | Wrapper bots that deny which model they run; Telegram scam-bot ecosystem | Medium-high: first-session churn |
| 5 | **Slow, silent and expiring flows** | First reply 4.8–61.6 s with no streaming. 5-minute confirmation expiry; recovery message came about 50 minutes later. Wallet "service error" (all June 2026) | Poke timezone errors and slow integrations | Medium-high |
| 6 | **Dead-end support and refunds** | Support link doesn't work (T—Zh comments) | Stars refunds only through the developer via /paysupport; Stars charged but never credited | Medium-high: turns fixable issues into churn |
| 7 | **AI presence in groups that members didn't choose** | No complaint found yet. Risk signals: self-introductions, moderation powers, memory that spans participants | "WhatsApp users fume" over a Meta AI button users can't remove; Telegram "compulsory AI" petition with 500+ upvotes | Latent, high for Team Agent |
| 8 | **Delegated actions that aren't clearly safe (money, accounts)** | Docs show "Send 5 USDT to @username" with no confirmation step. "Always yes" auto-approves spend with no visible undo. Raw jetton output | Agentic-wallet liability unaddressed; OpenClaw exposed instances | Rising as Walt and sub-wallet ship |

### Money: the paywall is the sharpest churn trigger

The most direct churn story is a paying user. In comments under T—Zh's February 2026 launch article, a user says they paid for Mira Pro, it worked for two days, and then the bot demanded tokens again. They call it deception and advise others not to subscribe [paraphrase; exact date not visible] ([T—Zh](https://t-j.ru/news/telegram-mira/)). The FAQ shows why this happens. It has to explain that "tokens are a separate currency only for paid generation: images, video, music and stickers. Usage limits are a separate matter that apply to all activity" ([mira-pro.com](https://mira-pro.com/)). That is three entitlements, priced in a fourth unit (Stars), none of them visible in chat until the moment of spend. A competing vendor also flags that premium models cost in-app credits and that action flows "can feel heavier than a simple Q&A bot" [paraphrase] ([Qualtir](https://qualtir.com/blog/best-ai-bots-for-telegram-2026)).

**Why platform rules make it worse.** Telegram's Stars terms state that "All sales of Telegram Stars are final", and refunds have to come from the bot developer through /paysupport ([Telegram Stars ToS](https://telegram.org/tos/stars)). That puts the whole recovery burden on Mira's support path. The other T—Zh commenter reports that the bot repeats the same answers or links to support, the support link does not work, and photo generation is "так себе" ("so-so") ([T—Zh](https://t-j.ru/news/telegram-mira/)). Together these form one chain: an unclear paywall, then a weak answer, then a dead support link, then the user calls it a scam and leaves. The proxy pattern is the same. Trustpilot reviewers of AI-wrapper services describe hard cancellation and refused refunds ([Trustpilot](https://ca.trustpilot.com/review/askaichat.app)). OpenClaw became a headline for how it "can burn through hundreds of Dollars per day" ([Notebookcheck](https://www.notebookcheck.net/Free-to-use-AI-tool-can-burn-through-hundreds-of-Dollars-per-day-OpenClaw-has-absurdly-high-token-use.1219925.0.html)). Users of messenger agents cannot predict what things will cost, and they punish surprises.

### Activation: capability is invisible, so most users never connect a tool

This problem has the strongest numbers behind it, because it comes from the company itself. Only about 0.4% of active users connect a service, and TOP is quoted as saying "the bottleneck is onboarding, not demand" [search summary] ([mira.tg/report](https://mira.tg/report)). Mira's own comparison post concedes "the honest trade-off is setup complexity" ([Mira blog](https://mira.tg/blog/best-ai-assistant-for-telegram)).

The user side matches. On **2026-08-11** a user wrote: "I went to try the Mira app on Telegram expecting the usual Ai chat, TG spammy shii. Another AI bot promising the world, delivering a canned FAQ. So I did what I always do: I just asked it straight up, 'What can you actually do?'" ([Greg on X](https://x.com/gregwrites_yy/status/2087312579701997722)). The same thread describes Mira refusing to confirm a 9:00 pill reminder until he corrected his timezone to a proper IANA format [paraphrase].

**Why connection is so rare.** Connecting a tool requires the user to know to type "Connect my Gmail". The link then leaves Telegram for a third-party Composio domain and expires in ten minutes. The handoff from other apps is "effectively dead" because /start payloads are ignored ([mira-harness feedback](https://github.com/Masashi-Ono0611/mira-harness/blob/main/docs/mira-feedback.md)). A Poke reviewer names the same gap in another product: "handing an autonomous agent full inbox access is a category of risk, and Poke doesn't do much to walk you through that decision" ([Poke reviews via Saner.ai](https://www.saner.ai/blogs/poke-reviews); the snippet's exact page was not pinned). Integration onboarding is both a discoverability problem and a trust problem.

### Privacy: Telegram's audience arrives sceptical of any AI that reads chats

Russian tech media greeted the launch with the headline "В Telegram запущен ИИ-ассистент Mira: приватность или просто маркетинг?" ("Telegram launches AI assistant Mira: privacy or just marketing?") ([VGTimes](https://vgtimes.ru/news/147319-v-telegram-zapuschen-ii-assistent-mira-privatnost-ili-prosto-marketing.html)). A similar framing appeared on **2026-02-11** ([md-eksperiment](https://md-eksperiment.org/en/post/20260211-mira-telegrams-new-ai-assistant-built-on-cocoon-privacy-or-marketing)). Other outlets told readers to look past the promises [paraphrase] ([abit.ee](https://abit.ee/ru/sowtware/messendzery/telegram-mira-cocoon-chatgpt-nano-banana-google-veo-3-ai-assistant-blockchain-telegram-stars-privacy-ru)) or questioned whether Cocoon's claims would survive scrutiny ([MEXC](https://www.mexc.com/news/995982)).

**TOP's answer.** TOP responds with architecture (confidential compute, encrypted prompts), not with product transparency. No retention policy, audit or reply to critics was found. Meanwhile memory "spans both personal and group contexts", which affects group members who never opted in ([IT Brief UK](https://itbrief.co.uk/story/mira-ai-agent-launches-inside-telegram-group-chats)). Mira's own docs contradicted each other on whether group facts are visible to other members.

**The wider backdrop [Proxy].** When Telegram added Cocoon-based AI summaries in January 2026, one commenter called it "a huge betrayal to the majority userbase who preferred Telegram for its privacy features" ([AlternativeTo](https://alternativeto.net/news/2026/1/telegram-introduces-instant-ai-summaries-for-long-posts-and-full-liquid-glass-design-on-ios)). Telegram's March 2026 AI Editor prompted a feature-request campaign against the "compulsory AI", with 500+ upvotes ([Tumblr](https://cassolotl.tumblr.com/post/812728783955230720/telegram-desktop-is-rolling-out-the-compulsory-ai)). On WhatsApp, "users fume over new Meta AI button that you can't remove" ([TechRadar](https://www.techradar.com/computing/websites-apps/whatsapp-users-fume-over-new-meta-ai-button-that-you-cant-remove-heres-what-it-does)).

**Why this matters for groups.** No Mira user has yet complained about Mira's presence in a group. But a bot that introduces itself, can delete messages and remembers group context is the obvious next target for this kind of backlash. That makes consent design for the Team Agent a pre-emptive priority.

### Speed and quality: slow, silent replies confirm the "spammy bot" expectation

The June 2026 transcript gives Mira-specific evidence on reliability:

- **Speed.** "Latency is high and variable — first reply ranged 4.8s – 61.6s. A naive client times out." ([mira-harness feedback](https://github.com/Masashi-Ono0611/mira-harness/blob/main/docs/mira-feedback.md)). That is far past the ten-second attention limit, beyond which interfaces need progress and a way to interrupt ([NN/g](https://www.nngroup.com/articles/response-times-3-important-limits/)).
- **Accuracy.** "Across runs I saw 'TON rebranded to Gram' and 'USDT launched 2026.' Surface the source, never auto-execute on it."
- **Raw data.** Wallet output exposed raw contract addresses and unformatted jetton amounts after a first "service error".

A YouTube viewer dismissed the project as advertising that wastes computing power [paraphrase] ([YouTube](https://www.youtube.com/watch?v=hZTyk1PHtvY)). An April 2026 Reddit comment, whose subject may be agents in general rather than Mira, put the ceiling plainly: "the real tradeoff is observability and control once workflows get non-trivial" ([Reddit snapshot, 2026-04-28](https://reddit.sentinel-team.org/posts/1sy0qwb/snapshots/2026-04-28T15%3A08%3A45.614782Z)).

### What users praise, and what they implicitly need

The praise is consistent, even if promotional:

- **Group catch-up and no context switch.** On **2026-07-03** one user wrote that Mira "summarized 200 group chat messages while I was away in 10 seconds… it lives directly inside Telegram, no new app, no new tab" ([@defileo](https://x.com/defileo/status/2073053615988830333)).
- **Personality and action.** On **2026-05-08** another described "an AI agent with memory, personality, and real actions that creates content, sends emails, and actually gets things done" ([@Eyuel88](https://x.com/Eyuel88/status/2052745780876714461)).
- **Being asked first.** Greg's thread credits Mira with asking what he cared about before building his briefing.
- **Voice**, which the company calls the most loved feature.

**What users implicitly need** (inferred from the complaints, not requested by users):

- a glanceable view of plan, balance, limits and reset date
- the cost shown before every paid action
- a working help and refund path inside the chat
- a capability tour that answers "what can you actually do?"
- timezone inferred from a city name
- connector prompts that appear at the moment a tool would help
- consent and memory controls that group members can see

Protecting the praised strengths while removing these frictions is the brief.

## Telegram itself is now Mira's sharpest competitor

**What Telegram shipped in 2026.** Between January and May 2026 Telegram shipped native AI summaries on Cocoon ([Telegram blog](https://telegram.org/blog/new-design-ai-summaries)) and a built-in AI Editor for rewriting and translation ([Telegram blog](https://telegram.org/blog/ai-editor-mighty-polls-and-more)). It then released an "AI bot revolution" update with Guest Bots, bot-to-bot chats, Chat Automation (a bot replies on your behalf in chats you choose), streaming bot replies and custom AI styles ([Telegram blog](https://telegram.org/blog/ai-bot-revolution-11-new-features); [TestingCatalog](https://www.testingcatalog.com/telegram-ships-major-update-for-ai-bots-and-automations/)).

**The effect on Mira** cuts both ways. It commoditizes Mira's basic layer: summaries, rewriting, private inference and streaming are now free and built in. Guest Mode lets anyone @mention Mira into any chat, which lowers distribution friction. But it lets them @mention any rival just as easily, which erodes the group-presence moat.

| Product | Surface and autonomy | Pricing (reported) | Lesson or threat for Mira |
|---|---|---|---|
| Telegram native AI | Built into the client; contextual, no memory, no actions | Free | Zero-friction default that absorbs "summarize/rewrite" use cases |
| Grok in Telegram | @GrokAI bot; Premium-gated; $300M xAI deal announced May 2025, then disputed by Musk | Telegram Premium | Brand-name rival; Mira already runs Grok comparison content ([Bloomberg Law](https://news.bloomberglaw.com/bankruptcy-law/telegram-to-distribute-grok-in-300-million-xai-deal-durov-says); [Mira blog](https://mira.tg/blog/grok-in-telegram-what-it-means-for-users-and-why-it-matters)) |
| Perplexity @askplexbot | DM or tagged in groups to fact-check | Free, with Pro perks | Trust through citations, which Mira lacks given observed hallucinations ([Gadgets To Use](https://gadgetstouse.com/blog/2025/04/12/use-perplexity-in-telegram)) |
| GPT4Telegrambot and other wrappers | Multi-model bots with media | Credits | Commodity model breadth; the "spammy bot" expectation users bring to Mira ([Qualtir](https://qualtir.com/blog/best-ai-bots-for-telegram-2026)) |
| OpenClaw | Self-hosted, on Telegram and 20+ other channels; pairing, mention gating, per-chat tool policy, approval cards (allow once / always / deny, 30-min expiry), streamed status draft | Free, plus model costs | Best-in-class trust building blocks, but technical and security-prone ([OpenClaw docs](https://github.com/openclaw/openclaw/blob/main/docs/channels/telegram.md); [exec approvals](https://github.com/openclaw/openclaw/blob/main/docs/tools/exec-approvals.md); [eWeek](https://www.eweek.com/news/clawdbot-self-hosted-ai-security-risks-neuron/)) |
| Poke | iMessage, SMS, Telegram, WhatsApp; proactive "texts you first"; playful gated onboarding | Free / $19 / $199 | Benchmark for personality and proactivity; $25M raised at $300M post-money ([Poster.ly](https://www.poster.ly/guides/poke-guide); [AI News/TechCrunch](https://ainews.us.com/2026/04/08/poke-makes-ai-agents-as-easy-as-sending-a-text/)) |
| Lindy Assistant | iMessage executive assistant that "acts on its own" | $49.99–$199.99/mo | Upper bound on price and autonomy for professionals ([Lindy](https://wf.lindy.ai/blog/lindy-assistant-launch); [Macha](https://www.getmacha.com/blog/lindy-ai-complete-guide)) |
| Meta AI in WhatsApp | Default and built in; WhatsApp banned general-purpose rival chatbots from 2026-01-15 | Free | Reach benchmark; the ban makes Telegram the most open large messenger for agents ([The Decoder](https://the-decoder.com/meta-removes-rival-chatbots-from-whatsapp/)) |
| TON Tech Agentic Wallets | Agents get user-funded on-chain wallets and spend within a budget without approving each transaction (launched 2026-04-28) | n/a | The money rails Mira's sub-wallet will use; liability not addressed ([The Block](https://www.theblock.co/post/399204/telegram-ai-powered-crypto-trading-agents-can-execute-transfers-swaps-staking); [MEXC](https://www.mexc.com/news/1096979)) |

**Strategic tailwind.** The WhatsApp ban pushed ChatGPT, Copilot and Perplexity out of WhatsApp. Toki, a calendar agent, moved to Telegram and LINE after being told its WhatsApp support would end ([Toki](https://toki.com/fr/whatsapp-notice)). That gives Mira a credible "Telegram is the open agent platform" story.

**Where Mira can win.** Across the field, no product designs for multi-party chats with explicit memory boundaries. Telegram's native AI has no memory, and Poke, Lindy and Meta AI are one-to-one. Mira's defensible column is groups plus scoped memory.

**Two benchmarks to borrow from.**

- **OpenClaw** is the trust benchmark. It pairs unknown senders by default, gates group participation on mentions, and sends exec-approval cards to the approver's DM.
- **Poke** is the personality and habit benchmark. Reviewers called its gated "bouncer" onboarding "one of the most creative and unique onboarding experiences" ([ProductPep](https://www.productpep.com/blog/2025/11/16/its-finally-cool-to-poke)). But one Product Hunt reviewer found it "wasn't really useful and never proactive" ([Product Hunt](https://www.producthunt.com/p/poke-by-interaction-co/a-week-with-poke-review-a-promising-start-for-a-proactive-ai-assistant)), a warning for Mira Daily's horoscope-and-news default.

An October 2026 trade piece sums up where the category is heading: value is moving "to the layer underneath the chat: connectors, scoped permissions and reliable task execution" ([n8nlab](https://n8nlab.io/news/messaging-apps-default-home-consumer-ai-agents)).

**Competitor reference images.**

- `screenshots/competitor_openclaw_whatsapp-chat.jpg` shows a casual, lowercase, emoji-rich agent persona in a real messenger thread, useful for tone.
- `screenshots/competitor_nanobot_mobile.png` shows an open-source agent that puts a "Default Permission" selector and an "11%" context-usage meter directly under the composer. It is a compact precedent for always-visible permission state.
- `screenshots/competitor_openclaw_hero.png` and `screenshots/competitor_chatgpt-telegram-bot-karfly_header.png` show mascot-led agent branding and the stock aesthetic of ChatGPT-wrapper bots.

## Telegram's 2026 Bot API hands designers new building blocks for agents

Since Bot API 9.3 (December 31, 2025), Telegram has rebuilt its bot platform around AI agents ([Bot API changelog](https://core.telegram.org/bots/api-changelog)). Most of Mira's observed frictions now have a native fix. The constraints matter just as much, because they differ sharply between DMs and groups.

| Feature or constraint | What it allows or limits | Design implication |
|---|---|---|
| Streaming drafts (`sendMessageDraft` 9.3, opened to all bots in 9.5; `sendRichMessageDraft` 10.1; `can_stop` 10.3) | Partial replies stream live. Empty text shows "Thinking…". A user-facing Stop button exists. **Private chats only**; each draft is a "30-second preview"; about 20 updates per 5 s ([Bot API](https://core.telegram.org/bots/api#sendmessagedraft); [AI features](https://core.telegram.org/api/bots/ai)) | Real progress labels and interruption in DMs. Groups need a different pattern |
| Rich Messages (10.1–10.3) | Tables, collapsible details, LaTeX, media, and buttons inside messages (1–8 per row, with styles) ([Bot Features](https://core.telegram.org/bots/features#advanced-formatting-options)) | Cost cards, plans, summaries without walls of text |
| Button `style` (9.4) and `disabled` (10.3) | success / danger / primary colours; buttons can be greyed out after a decision ([changelog](https://core.telegram.org/bots/api-changelog)) | Approval cards that prevent double-taps |
| Ephemeral messages and commands (10.2) | Group messages "visible only to a specific user and the bot", "ideal for welcome messages, whispers, personalized summaries, contextual hints". Delivery is not guaranteed ([Bot Features](https://core.telegram.org/bots/features#ephemeral-messages)) | Private confirmations, catch-ups and onboarding inside groups without public clutter |
| Guest Mode (10.0) | Users can @mention a bot that isn't in the chat. The bot gets "one reply" and no history or member list; up to 3 guest bots per message ([Bot Features](https://core.telegram.org/bots/features#guest-bots)) | A try-before-you-add entry point, also open to every rival |
| Group privacy mode | By default a bot sees only commands, mentions and replies; admin bots see everything. "Users can always see a bot's current privacy setting in the list of group members" ([Bot Features](https://core.telegram.org/bots/features#privacy-mode)) | Mira's admin-by-default request is a visible trust cost |
| Group rate limit and size limits | 20 messages per minute in groups; 4096-character messages; 64-byte callback data ([Bots FAQ](https://core.telegram.org/bots/faq#my-bot-is-hitting-limits-how-do-i-avoid-this)) | One consolidated, edited message per task. Pending actions stored server-side |
| Secretary / Business bots (no Premium needed since 10.0) | Bot accesses only the chats the user picks; can reply only in chats active in the last 24 h; one business bot per account ([Bot Features](https://core.telegram.org/bots/features#secretary-bots)) | "Reply for me" needs a triage-and-approve UX; exclusivity makes this onboarding high-stakes |
| Topics in private chats (9.3/9.4) | One thread per task in a bot DM; Threaded mode carries an extra Stars-purchase fee ([AI features](https://core.telegram.org/api/bots/ai)) | Parallel tasks and projects; check the fee before relying on it |
| Stars payments | Mandatory for digital goods. Subscriptions are fixed at 30 days and capped at 10,000 Stars. `Update.subscription` reports canceled / active / failed; `refundStarPayment` exists ([Bot Features](https://core.telegram.org/bots/features#payments); [createInvoiceLink](https://core.telegram.org/bots/api#createinvoicelink)) | Monthly Stars tiers, graceful downgrade messages, in-chat refunds |
| Mini Apps | Theme colours, native MainButton and SecondaryButton, native popups, BiometricManager, SecureStorage, `chat_instance` for group-shared use, `requestWriteAccess` ([@types/telegram-web-app](https://www.npmjs.com/package/@types/telegram-web-app); [Bot Features](https://core.telegram.org/bots/features#mini-apps)) | A native-feeling control centre and a per-group dashboard |

**The DM/group asymmetry.** This is the platform's most important constraint for a Team Agent. In a DM, Mira can show "Thinking…", then a step label such as "Reading 42 messages in #design", then streamed text, then a final rich message with styled action buttons, with Stop available throughout.

Mira's June 2026 transcript shows none of this, even though `sendMessageDraft` was open to all bots from March 1, 2026. Rich drafts (June 11) and `can_stop` (August 24) arrived after the capture, so the current bot may have changed. Verify on a device.

In groups, drafts are unavailable. Progress has to come from the typing indicator, which lasts five seconds or less, an edited placeholder message, or an ephemeral note to the requester. All of it has to fit under the 20-messages-per-minute cap.

**Ephemeral messages are the key building block for group UX.** They let Mira confirm a post, request a permission, deliver a personal catch-up or report an error to one person inside a shared chat, without anyone else seeing it.

**Guest Mode creates a natural trust ladder.** There are three rungs:

1. A guest summons Mira, which sees one message.
2. Mira is added as a member in privacy mode, and sees mentions and replies.
3. Mira is promoted to admin, and sees full context and keeps group memory.

Each rung buys more capability, and each could carry its own plain-language consent card. Today Mira's deep link asks for admin rights at the first step.

**What Private Mode copy can honestly claim.** Cocoon runs models inside trusted execution environments (Intel TDX, AMD SEV-SNP), so "all data (prompts, responses) remains private and cannot be accessed by server owners". But its README also says "only the client can see prompts and responses". The client library is "designed to run on servers… e.g., the Telegram backend". For now, proxies are operated by the Cocoon team ([Cocoon README](https://github.com/TelegramMessenger/cocoon)). Unless Mira's own backend is attested too, the honest claim is "your requests run on confidential hardware that compute providers can't read". It is not "no one, including us, can read it". Private Mode also swaps in Qwen3-32B for the normal-mode model, a capability trade-off the toggle should disclose.

**Store rules that touch Mira's features.** Apple's guideline 4.7 requires chatbot and mini-app software to filter objectionable material, offer reporting and blocking, and get consent before sharing data "in each instance" ([Apple App Review Guidelines](https://developer.apple.com/app-store/review/guidelines/)). Mira's "low moderation, creative freedom" image model and its paid anonymous-question reveal deserve a careful look under these rules. This is an inference, not a reported problem.

**Making the Mini App feel native.** Telegram's own guidance asks for:

- mobile-first layouts and components that mimic existing native ones
- 60 fps animation
- accessibility labels
- live theme colours
- respect for safe areas

([Mini Apps – Designing](https://core.telegram.org/bots/webapps#designing-mini-apps)). The reference images show this design language:

- `screenshots/telegram_miniapp_theming_durgerking.png`: one demo app recoloured across three themes
- `screenshots/telegram_miniapp_main_button.png`: a single native primary action pinned outside the webview
- `screenshots/telegram_miniapp_native_popup.png`: a native confirmation dialog
- `screenshots/telegram_miniapp_fullscreen_mode.png`: why content safe areas matter in full-screen mode

The community TelegramUI kit, which has a Figma file, covers standard components, but its last release was October 2025 ([TelegramUI](https://github.com/telegram-mini-apps-dev/TelegramUI)). Rich-message, ephemeral and draft UI will need custom specs. The opportunity is that very few public examples of these 2026 features exist yet.

**Agent UX guidance.** Established guidance points the same way:

- Apple's generative-AI guidelines ask designers to "consider giving specific, reassuring feedback during generation", get "permission before performing irreversible or potentially problematic tasks", and surface "Edit, Undo, Retry" near results ([Apple HIG](https://developer.apple.com/design/human-interface-guidelines/generative-ai)).
- Microsoft's HAX guidelines start with "make clear what the system can do" and end with "provide global controls" ([HAX](https://www.microsoft.com/en-us/haxtoolkit/library/)).
- In a 48-person study, intermediate confirmation in multi-step agent tasks **cut completion time by 13.54%, and 81% of participants preferred it** ([arXiv 2510.05307](https://arxiv.org/pdf/2510.05307), preprint). That is evidence that well-placed checkpoints speed users up rather than slowing them down.

## Seven proposal angles, ranked by evidence strength

Each angle below ties three things together: a documented user problem, a company metric or hiring priority, and a Telegram feature that makes it buildable now. They are ranked by how well those three line up and by how strong the evidence is.

| Priority | Angle | User problem evidence | Company metric or job-posting priority | Platform feature that makes it buildable |
|---|---|---|---|---|
| **1** | **Contextual activation: a useful first task in under 10 seconds, and connection at the moment of need.** Replace "ask to connect" with inline offers ("Connect Calendar to check Friday?") that open a branded Mini App sheet. Add ≤5 suggested-action chips after /start and after each answer, and an answer to "what can you do?" built from real capabilities | 0.4% connect a tool; "What can you actually do?" (2026-08-11); "the honest trade-off is setup complexity"; OAuth leaves to Composio and expires in 10 min; deep-link handoff dead | "The bottleneck is onboarding, not demand" (H1 report); PM role owns onboarding and agent flows; job asks for chat-based user journeys and data-informed design | Inline keyboards with `style`; `web_app` buttons; `start`/`startapp` deep links with 64-char payloads; Rich Message buttons |
| **2** | **A consent ladder that converts group sightings into personal users.** Guest reply → an ephemeral "want this for yourself?" note to the onlooker → DM with the same task pre-loaded. Before admin rights, a "what Mira can see here" card, plus a privacy-mode-first default | Over a third of new users discover Mira in groups; latent group backlash ("compulsory AI", Meta AI "fume"); memory spans members who never opted in | 150K–175K groups; Team Agent is the flagship positioning; job nice-to-have: trust, privacy and user control | Guest Mode (10.0); ephemeral messages and commands (10.2); privacy mode visible in member list; `can_send_welcome_messages` (10.3); Mini App `chat_instance` |
| **3** | **One clear meter and a paywall with no surprises.** One glanceable balance ("Pro · 1,240 🪙 · ~41 images · renews Dec 3"), the cost in the confirm card, a visible and revocable "Always yes" with a spend cap, an in-chat refund/help path, and one pricing story across landing and compare pages | Pro "worked two days" then demanded tokens, called deception; four conflicting Pro prices; music "free" yet charged; Stars "all sales final"; support link dead | PM role owns monetization; job covers landing pages; Pro at 1,500 Stars is the revenue line | Stars subscriptions with `Update.subscription` states; `refundStarPayment`; `editUserStarSubscription`; Mini App MainButton purchase |
| **4** | **A trust and memory control centre.** A `/memory` command plus a Mini App screen showing what Mira remembers per person and per group, each fact with its source and Forget/Edit. Precise Private Mode copy, including the model trade-off. A per-connector access log | "Privacy or just marketing?" (Feb 2026); docs contradicting themselves on group memory visibility; Telegram users' AI backlash | Job's trust, privacy and user control nice-to-have; Backend role for agent memory; docs call memory Mira's "core defensive advantage" | Mini App theme colours, native popups, BiometricManager for deletes; ephemeral "what I remember" cards in groups |
| **5** | **An "agent is working" layer.** Streamed drafts with step labels and Stop. Confirm cards that never vanish silently and come back as "Still want this?". Plain-language errors with Retry. Background jobs (Shorts take 5–15 min) shown as one editable status message | 4.8–61.6 s replies with no streaming; 5-minute silent expiry; "blocking popups in your browser" copy; wallet "service error" | Retention and perceived quality behind MAU growth that is expected to slow | `sendMessageDraft` / `sendRichMessageDraft`, `<tg-thinking>`, `can_stop`, `keep_on_stop`; `disabled` buttons; typing indicator plus edited messages in groups |
| **6** | **An autonomy dial and approval cards for money and delegated actions.** Per-category limits ("spend up to 20 TON/week without asking"), human-readable previews with the risky choice styled red, biometric step-up for transfers, an undo window, and a draft-or-send triage inbox for Secretary Mode | Raw wallet output; no documented confirmation on "Send 5 USDT"; agentic-wallet liability unaddressed; Poke users afraid to grant inbox access | Roadmap: sub-wallet "within predefined limits", agent-to-agent; Walt says "Mira prepares the trade, and the user approves it" | Button `style` danger/success; BiometricManager; TON agentic wallets; Secretary Mode's per-chat scope and 24-h window |
| **7** | **Proactivity drawn from the user's own Telegram activity.** Rebuild Mira Daily around "3 things you missed in your groups, 2 decisions waiting on you, 1 calendar conflict". Deliver it privately inside groups, with quiet hours and frequency controls | Group catch-up is the most-praised use (2026-07-03); reminders are "the smallest slice"; Mira Daily defaults to horoscope and news; Poke "never proactive" | Retention and habit formation; only an agent that lives in Telegram can see unread groups and mentions | Ephemeral personalized summaries; `requestWriteAccess`; `disable_notification`; topics in private chats |

### Recommended shape for the proposal

**The hero story.** Combine angles 1 and 2 into a single end-to-end journey. Someone watches Mira summarize their group. They tap a private "do this for me" prompt. They land in a DM with a pre-loaded task. They connect one tool at the exact moment it helps. They see what Mira will and won't remember.

This journey attacks the one metric the company itself calls its bottleneck, the 0.4% tool-connection rate. It runs through the growth loop that brings in over a third of new users. And it shows command of Telegram's newest features (Guest Mode, ephemeral messages, rich messages with styled buttons), which few designers have yet worked with.

**Supporting chapters.** Weave angle 4 through the hero journey as its trust backbone rather than presenting it as a separate settings page. Use angle 5 as the craft detail that makes the journey feel fast. Present angle 3 as a second, shorter chapter, because it carries the most direct churn evidence and the PM role owns monetization.

**Metrics to put in the proposal.** Propose metrics to instrument, not invented targets:

- tool-connection rate, against the reported ~0.4% baseline
- the share of group-discovered users who complete a personal task within a week
- time to first useful reply
- confirm-card expiry rate
- paid conversion alongside refund and complaint rate

**A feedback loop of its own.** Mira's dissatisfaction is mostly invisible because bots have no public reviews. Lightweight in-chat feedback, such as 👍/👎 buttons or reactions on Mira's replies, is part of the proposal rather than an afterthought.

**Verify on a device before sending.** The public record cannot settle several things:

- the first-time /start welcome
- the Mini App's Discover, subscription and connections screens
- whether @mira already supports Guest Mode or streaming
- current November 2026 pricing
- whether the "Always yes" setting can be found and reversed

Capturing those screens yourself would also give the proposal the real "before" images this research could not obtain.

## Conclusion

The competition among messenger agents has moved from "whose bot answers best" to "whose agent people trust to act in shared spaces". Telegram's 2026 releases sharpened that shift in two directions at once. They gave summaries, rewriting, streaming and private inference to everyone, which erodes Mira's feature moat. They also handed Mira the exact tools to build what no competitor has: consent, scoped memory and safe delegation inside group chats. For Mira, the trust layer is the product, not polish on top of it. A designer who makes memory visible, makes cost predictable and gates actions with native approval cards is building the moat itself.

The evidence also suggests that Mira's problems are one system, not a list. Unclear capability, unclear cost and unclear data handling compound into a single moment of doubt, and that moment decides whether a curious group member becomes a connected, paying user. A proposal that treats the journey from group to personal use as one designed flow will read as strategy rather than a collection of UI fixes. Two further points strengthen it. Mira is heading to iMessage, so these trust objects (the approval card, the memory receipt, the cost meter) should be specified independently of any one messenger and then mapped onto Telegram's features. And Mira's thin public feedback means the proposal should treat the trust layer as hypotheses to measure.

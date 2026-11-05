# Persona research: people who use Telegram for work (startup and remote teams, freelancers, agencies, small businesses on Telegram Business) as target users for Mira

> **Method and limits (read first). Compiled 2026-11-05.**
> - **What could be opened.** The session's network policy blocked direct page reads for every host tried: reddit.com (and its mirrors), telegram.org/telegram.dog, hackernoon, medium, G2, Capterra, Trustpilot, habr, vc.ru, crmchat.ai, techstartups and others. The probe returned HTTP 000; WebFetch failed with ENOTFOUND. Firecrawl was not used because the coordinator said credits may be exhausted. Only **GitHub** (`api.github.com` search and `raw.githubusercontent.com`) was readable. Six GitHub READMEs and repo listings below are therefore the only **primary sources I read myself**.
> - **What most evidence is.** Nearly everything else comes from **WebSearch result summaries**. Labels used throughout:
>   - **[VERBATIM]**: text I read in the primary source (GitHub only).
>   - **[SNIPPET]**: text the search tool reproduced in quotation marks from the page. Probably verbatim, but I did not open the page.
>   - **[SUMMARY]**: the search tool's paraphrase. Treat it as secondhand.
>   - **[VENDOR]**: the source sells a competing or adjacent product.
>   - **[TITLE]**: a page or article title, which is verbatim.
> - **Dating.** Every claim is dated to its source. "Undated" means the search result showed no date.
> - **Overlap with sibling notes.** I did not repeat sibling-note material on Mira's features, Telegram platform mechanics or competitor profiles. I cite them only where they bear on these personas. See `../Miro Telegram AI agent research/product_features_ux_screens.md` and `competitive_landscape.md`.
> - **Russian, Persian and Chinese sources** are translated by me unless marked otherwise.

## 1. Why do teams and businesses run work on Telegram (regions, industries), and what breaks?

### Takeaway
Teams run work on Telegram because their counterparties (crypto communities, CIS and Central Asian customers, partners) already live there. It is fast, free, handles big files and works across borders. In some markets it is simply *the* default commercial channel: Uzbekistan, Iran via VPN, Russia even after the 2026 blocking.

What breaks is the layer on top of the chat:
- no tickets, statuses or "first response" tracking
- decisions and tasks buried under thousands of unread messages
- weak threading and search (worst for CJK)
- deals run in managers' personal accounts, invisible to the business
- no SSO/SCIM admin controls
- account-takeover risk
- in Russia and Iran, outright platform blocking

The market's answer is a long tail of bolt-ons (summary bots, chat-to-ticket bots, Telegram CRMs). That is strong evidence of demand for exactly the "group memory → tasks → follow-up" job Mira's Team Agent targets.

### Cited Findings

**Why Telegram: crypto/Web3**
- Telegram is "the de facto messaging app of crypto". It serves both 1:1 messaging and large fast-moving groups, and it is free or low-cost compared with Discord or Slack. [SUMMARY, undated] — [Bitcoin.com](https://news.bitcoin.com/six-alternatives-to-telegram-for-cryptocurrency-communities); [Coinbound podcast](https://coinbound.io/top-chat-channels-crypto-companies-should-have-ep-22)
- A crypto marketing agency (Coinbound) runs *internal* work on Slack (channels per client and campaign, HubSpot/Trello/Zapier integrations) and treats Telegram as the community channel. It says Telegram "gets cluttered when scaled up". [SUMMARY, undated; self-interested source] — [Coinbound](https://coinbound.io/?p=11754)
- A dedicated vendor category of "Telegram-native CRMs for crypto BD" exists: CRMChat, Breakcold, Telebiz, StackAccel. Telebiz launched an "AI-powered CRM for Telegram" on 2026-07-09 that links chats to deals and syncs with HubSpot and Pipedrive [TITLE + SUMMARY]. CRMChat argues generic CRMs fit Web3 deal flow poorly and that Pipedrive lacks a native Telegram integration [VENDOR, SUMMARY]. StackAccel "summarizes chats, generates action items and ranks conversations by priority" [SUMMARY]. — [techstartups 2026-07-09](https://techstartups.com/2026/07/09/telebiz-launches-ai-powered-crm-for-telegram-to-help-teams-manage-sales-partnerships-and-customer-relationships/); [CRMChat blog](https://crmchat.ai/blog/community-driven-sales-crm-telegram-whatsapp-chat-based); [CRMChat: Pipedrive web3](https://crmchat.ai/blog/pipedrive-web3-integrations-case-studies); [Breakcold](https://www.breakcold.com/crm/telegram); [neura.market: StackAccel](https://neura.market/directories/ai-tools/stackaccel)
- A HackerNoon article is titled "Telegram now has 1 billion users, Telebiz just built the first real business layer on top of it" [TITLE, 2026; body not readable]. — [HackerNoon](https://hackernoon.com/lang/de/telegram-now-has-1-billion-users-telebiz-just-built-the-first-real-business-layer-on-top-of-it)

**Why Telegram: CIS and Russia**
- After Western SaaS exits, Russian companies moved work chats to Telegram. Habr says Slack "deleted some workspaces of Russian users" but never formally announced leaving Russia [SUMMARY]. — [habr.com/en/articles/655709](https://habr.com/en/articles/655709); [tproger: "What to replace Slack with"](https://tproger.ru/experts/chem-zamenit-slack-i-drugie-ushedshie-servisy)
- **2026 platform shock.** The chronology:
  - Roskomnadzor tightened restrictions on Telegram in February 2026 [TITLE, 2026-02-10]. — [Moscow Times](https://www.themoscowtimes.com/2026/02/10/roskomnadzor-tightens-restrictions-on-telegram-as-users-report-disruptions-a91907)
  - Russia "blocks Telegram early" [TITLE, 2026-03-18]. — [RBC-Ukraine](https://newsukraine.rbc.ua/news/russia-blocks-telegram-early-but-officials-1773860427.html)
  - Durov, per TechSpot, says more than 50M Russians still use it daily via VPN [SUMMARY, 2026]. — [TechSpot](https://www.techspot.com/news/111968-russia-efforts-block-vpns-cause-widespread-banking-glitches.html)
  - Alfa-Bank (June 2026) says *using* Telegram is not itself banned but often needs a VPN. It notes Max is whitelisted by the Ministry of Digital Development but "won't suit" businesses whose customers are outside the CIS [SNIPPET]. — [Alfa-Bank Kurs](https://kurs.alfabank.ru/articles/dostupnye-analogi-telegrama-dlya-biznesa/)
  - Sources conflict on how complete the block is.
- Russian Telegram's monthly audience in January 2026 was 95.98M, against WhatsApp 89.42M and Max 73.73M [SNIPPET, via Alfa-Bank article, mid-2026]. — [Alfa-Bank Kurs](https://kurs.alfabank.ru/articles/dostupnye-analogi-telegrama-dlya-biznesa/)

**Why Telegram: Iran and Uzbekistan**
- **Iran.** Telegram has been officially banned since 2018 but "remains one of Iran's most influential platforms, essential to business, news, and social life". Surveys say nearly 90% of Iranians use a VPN [SUMMARY, 2025-11-03/05]. A Kermanshah shop owner said sales fell "to about a quarter" after social-network bans [SUMMARY]. The January 2026 internet shutdown hit "thousands of online sellers". One quote: "It's just a few of us, sometimes, for a few minutes. That's not business." [SNIPPET, 2026-01-26]. — [Iran International 2025-11-03](https://www.iranintl.com/en/202511034046); [Iran International 2025-11-05](https://www.iranintl.news/en/202511051492); [Rudaw](https://rudaw.net/english/categories/iran/914628); [The National 2026-01-26](https://www.thenationalnews.com/news/mena/2026/01/26/view-from-tehran-internet-shutdown-deepens-economic-pain-as-uncertainty-drags-on)
- **Iran on GitHub.** A Persian-language open-source "Telegram Business AI Assistant" was last pushed 2026-08-10 (details in KQ2). It is evidence of Iranian SMB demand for AI auto-reply on Telegram Business. [VERBATIM] — [Ciahshi/Agent-Bot](https://raw.githubusercontent.com/Ciahshi/Agent-Bot/main/README.md)
- **Uzbekistan.** Kun.uz (2025-04-10) describes e-commerce as still dominated by informal sales "through Telegram, street bazaars, and large markets" [SUMMARY]. Botcommerce (Tashkent) lets SMBs build Telegram bots and stores without code, citing pandemic demand because Telegram is one of the country's most popular messengers [SUMMARY]. — [Kun.uz 2025-04-10](https://kun.uz/en/news/2025/04/10/uzbekistans-e-commerce-evolution-marketplaces-classifieds-and-birbirs-platform-with-10m-investment); [CB Insights: Botcommerce](https://www.cbinsights.com/company/botcommerce)

**Why Telegram: India and SE Asia**
- **India.** India is Telegram's largest market, "more than 20% of its user base". Businesses there use it "for marketing, customer support, e-commerce, and social services" [SUMMARY, VENDOR, undated]. Indian creators sell paid groups and channels through third-party checkouts (UPI, cards) [VENDOR]. — [Qontak](https://qontak.com/en/blog/telegram-for-business/); [SuperProfile](https://superprofile.bio/guides/paid-telegram-channel.md)
- **Vietnam / SE Asia.** A Vietnamese open-source desktop app, "deplao-builder", has 266 stars and was pushed 2026-10-31. It is described as "App Desktop integration Zalo, Facebook & Telegram personal for Multi-Account management, CRM, Marketing, POS, ERP, Workflow and AI Assistan[t]" [VERBATIM repo description]. It shows SMBs juggling *personal* messenger accounts as their CRM. — [GitHub babyvibe/deplao-builder](https://github.com/babyvibe/deplao-builder)
- **China-diaspora / grey-market sellers.** "Telegram-interactive-bot" (370 stars, pushed 2026-02-03) is a two-way relay bot to "avoid spam; let restricted customers reach you; supports back-office grouping, a simple CRM" [VERBATIM description, translated from Chinese]. — [GitHub MiHaKun/Telegram-interactive-bot](https://github.com/MiHaKun/Telegram-interactive-bot)
- **Gap:** I found no 2024–2026 source specific to LATAM business use of Telegram.

**What breaks: no tickets or accountability layer (Russian-language practitioners, 2025)**
- A case study the search tool attributes to a Habr article. Translated: "Over several years we accumulated **more than a thousand group Telegram chats with pilot and VIP clients**. Telegram doesn't know what a 'ticket', 'first response' or 'overdue' is. Attempts to track in Excel break at a hundred chats and a couple of on-call shifts." Their fix was a Python bot that turns a chat into a ticket. [SNIPPET; exact article unclear, one of the Habr results] — [habr.com/ru/articles/995850](https://habr.com/ru/articles/995850); [habr.com/ru/articles/1011850](https://habr.com/ru/articles/1011850)
- **Deals in personal accounts.** "A manager leads a client in their personal Telegram: discusses terms, sends the proposal, agrees a discount. In the CRM the status is 'in progress' and nothing else. The head sees a formal picture, not the real course of the deal." [SNIPPET, translated; CRM-vendor blog]. The article is titled (translated) "The manager runs the conversation in private messages and you don't know: how not to lose deals in Telegram" [TITLE]. — [spark.ru / Hotline CRM](https://spark.ru/startup/hotline-crm/blog/352576/menedzher-vedyot-perepisku-v-lichke-i-vi-ob-etom-ne-znaete-kak-ne-teryat-sdelki-v-telegram)
- **Titles that name the pain** [TITLE]:
  - "«Я теряю чаты»: как не пропускать сообщения от клиентов, партнеров, коллег в Telegram" ("I'm losing chats: how not to miss messages from clients, partners, colleagues in Telegram") — [Sostav](https://www.sostav.ru/blogs/250077/45090)
  - "Почему вы теряете клиентов в Telegram" (ChatLab, 2025-08-15) — [crmindex](https://crmindex.ru/services/chatlab/blog/pochemu_vy_teryaete_klientov_v_telegram)
  - "От хаоса к системе в продажах через Telegram" (2025-08-13) — [crmindex](https://crmindex.ru/services/chatlab/blog/ot_haosa_k_sisteme_v_prodajah_cherez_telegram)
  - "Почему Telegram убивает продажи (и как это чинить)" — [vc.ru](https://vc.ru/marketing/2144616-problemy-telegram-ubivayushchie-prodazhi)
  - "Chats instead of CRM: how business loses manageability in Telegram and WhatsApp" — [Astana Hub](https://astanahub.com/en/blog/chaty-vmesto-crm-kak-biznes-teriaet-upravliaemost-v-telegram-i-whatsapp)
- **Agency practice: chat-to-task AI.** A Russian digital agency built an "AI agent… turning a working Telegram chat into a task system" that extracts assignments, deadlines and owners from conversation [TITLE + SUMMARY]. Another case built a corporate bot because management could not see workload per employee or open and closed requests [SUMMARY]. — [workspace.ru / DO Digital](https://workspace.ru/cases/ii-agent-dlya-ooo-mp-intepro-prevraschaem-rabochiy-telegram-chat-v-sistemu-zadach/); [workspace.ru corporate bot](https://workspace.ru/cases/razrabotka-korporativnogo-chat-bota-v-telegram-kotoryy-raspoznaet-klientov-po-inn/)

**What breaks: unread overload, threading and search**
- An open-source summary bot pitches itself with [VERBATIM]: "Feel scared when seeing 2000+ unread in groups? Now you can read them by LLM!" It offers `/summary 10h`, `/query word` ("can search cjk") and `/ask question` ("answer question based on group chat"). The repo has 205 stars and was pushed 2026-11-02. — [asukaminato0721/telegram-summary-bot README](https://raw.githubusercontent.com/asukaminato0721/telegram-summary-bot/main/README.md)
- A daily-digest bot README shows the exact output teams want [VERBATIM, example dated 10.08.2026]:
  > "🔹 Landing page redesign: Oleg, Maria and Ivan decided to simplify the header — drop the carousel, keep a single offer. 🔹 SBP payments: Anya raised the payments question, Maria suggested YooKassa…"

  Each topic links to the first message of that discussion. The default timezone is Europe/Moscow. — [lupikovoleg/summary-bot README](https://raw.githubusercontent.com/lupikovoleg/summary-bot/main/README.md)
- Users on Telegram's bug tracker ask to turn replies into Teams-like threads. Another suggestion says chat-history search is "based on words" and unsuitable for some Asian languages [SNIPPET, undated]. — [bugs.telegram.org/c/2737](https://bugs.telegram.org/c/2737/36)
- A third-party integration page markets that "all of your messages will be auto-backed up, even if they are deleted from Telegram". That implies fear of losing work history [SNIPPET, VENDOR]. — [needl.ai](https://needl.ai/integrations/telegram)

**What breaks: admin and security**
- **No admin controls.** A comparison says Telegram has "no internal CRM integration, no SSO, no SCIM" [SNIPPET, VENDOR, undated]. — [thegtmdirectory](https://thegtmdirectory.com/compare/slack-vs-telegram)
- **Account takeover as an attack vector.** A recurring 2025 pattern in crypto: a trusted contact's Telegram account is hijacked and used to lure founders into fake Zoom calls that install malware.
  - Manta Network co-founder Kenny Li, April 2025.
  - Polygon Ventures lead's Telegram compromised, used to approach other founders.
  - THORChain co-founder lost about $1.2–1.35M, September 2025.
  - BTC Prague co-founder advises "treat all Telegram messages as untrusted".

  [SUMMARY, crypto media] — [Cointelegraph](https://cointelegraph.com/news/crypto-founders-report-deluge-of-north-korean-fake-zoom-hacking-attempts); [Invezz 2025-12-15](https://invezz.com/news/2025/12/15/north-korean-hackers-use-malicious-zoom-calls-to-target-crypto-users-on-telegram/); [Bitcoin.com](https://news.bitcoin.com/zoom-telegram-deepfake-attack-vector-rises-crypto-founders-targeted); [Forklog](https://forklog.com/en/hypersphere-partner-loses-savings-after-zoom-conference-scam/)
- Chainalysis estimated crypto scams and fraud at $17B in 2025, with impersonation scams up 1,400% year over year [SUMMARY, 2025/2026]. — [Cointelegraph](https://cointelegraph.com/news/crypto-founders-report-deluge-of-north-korean-fake-zoom-hacking-attempts) (as aggregated by search)
- **Reliability.** Telegram is "prone to periodically going down", so communities should keep a backup [SUMMARY, undated, older]. — [Bitcoin.com](https://news.bitcoin.com/six-alternatives-to-telegram-for-cryptocurrency-communities)
- **A team that tried Telegram, then left.** A banking-software firm chose Telegram over Slack and Teams for GDPR reasons, then left it. They found "Telegram is not a full-fledged SDK" and moved to self-hosted Mesibo [SUMMARY, ~2022]. — [Medium (jimbk)](https://medium.com/@jimbk/why-we-chose-telegram-for-team-app-over-slack-and-microsoft-team-and-then-moved-away-from-it-2b87012d2095)

**Mira's own group signals (from sibling notes, company-reported)**
- 175,000 group chats (H1 2026). "Each teammate connects their own account before Mira acts through that account". More than a third of new users discover Mira by seeing it work in shared chats. — [mira.tg/report](https://mira.tg/report); [mira.tg Team Agent](https://mira.tg/products/team-agent); [TOP press release](https://www.crypto-reporter.com/press-releases/top-launches-telegrams-first-native-ai-agent-for-group-chats-across-a-1b-user-ecosystem-126814/)

### Inferences
- **Two distinct "work on Telegram" populations.**
  1. **Telegram-by-choice:** crypto/Web3 and international remote startups. Telegram is where external counterparties are; internal tooling (Slack, Notion, Linear, Jira, GitHub) often runs in parallel.
  2. **Telegram-by-default:** CIS, Central Asia, Iran, parts of India. Telegram *is* the business channel, often with no SaaS stack beyond a CRM like amoCRM or Bitrix24.

  Persona 1 comes mostly from (1). Persona 2 comes mostly from (2).
- **The repeated pains map almost one-to-one onto Mira Team Agent features.** "Telegram doesn't know what a ticket is", "2000+ unread" and "decisions buried" match summaries, decision tracking, action items and Skills. Mira's differentiator would be *closing the loop into the system of record* (Linear/Notion/CRM) rather than just summarizing. The DIY bots stop at summaries.
- **Security is part of the product for Persona 1.** Account-takeover attacks run through Telegram itself. A crypto founder is primed to distrust any bot that asks for Gmail or GitHub access, or that posts on their behalf.
- **Platform risk is real for CIS and Iran personas.** Blocking, VPN dependence and shutdowns (2026) mean "your business chat may disappear". An agent that keeps a portable record (export to Notion, Sheets or a CRM) adds resilience value. This is an inference.

### Gaps
- No Reddit thread could be opened. Reddit-specific sentiment on "Telegram for work" is missing; searches returned only vendor content and Teams threads.
- No source on **time-zone** coordination pains specific to Telegram teams.
- No 2024–2026 evidence on LATAM (Brazil, Argentina) business use of Telegram.
- The full texts of the Habr and Sostav case studies were not readable, so their quotes are snippet-level.

## 2. What do small business owners using Telegram Business or customer chats struggle with, and what do they think of auto-reply / AI-secretary features?

### Takeaway
Telegram Business (March/April 2024, Premium-gated) gives SMBs only basic static tools: greeting and away messages, quick replies, hours, location and a connected chatbot. Owners still struggle with response speed, after-hours coverage, repetitive FAQs (prices), routing leads into a CRM, and keeping visibility when staff sell from personal accounts.

In May 2026 Telegram made "a bot replies on my behalf" available to every user (Chat Automation). Builders immediately produced DIY "secretary" bots. Their feature lists show what owners actually want:
- replies in *my* voice
- per-contact rules ("never quote a price to clients")
- auto-pause when I reply myself
- refusal to invent facts

Practitioner sentiment is skeptical of generic bots. The recurring claim is that bad automation is worse than a slow human.

### Cited Findings

**What Telegram Business provides**
- **Launch and features.** Telegram Business launched around 2024-03-31/04-01 with custom opening hours, location, greeting messages, away messages, quick replies, start-page customization, chat labels/folders, and **connecting a chatbot to respond to messages on the business's behalf**. All of it requires Telegram Premium ("no additional cost on top of that") [SUMMARY]. — [TechCrunch 2024-04-01](https://techcrunch.com/2024/04/01/chat-app-telegram-challenges-meta-with-the-launch-of-new-business-features-and-revenue-sharing); [Business Today 2024-04-03](https://www.businesstoday.in/technology/news/story/telegram-business-introduced-with-new-features-quick-replies-to-chatbots-heres-what-is-new-424062-2024-04-03); [Mezha 2024-04-02](https://mezha.media/en/2024/04/02/telegram-launches-business-features-for-premium-users); [Telegram blog (mirror)](https://telegram.dog/blog/telegram-business)
- **Limits [SUMMARY, mostly VENDOR guides, 2024–2026]:**
  - Quick replies "only work in private chats, not groups". One guide claims a 100-quick-reply cap (unverified).
  - Some features don't appear on Desktop.
  - Native tools suffice "if you're a small business just starting out". High-volume support needs third-party tools.
  - Premium cost cited as $4.99/mo or $39.99/yr (unverified).

  — [Marix 2026 guide](https://marix.app/library/guides/telegram-business-features-2026); [Mava](https://www.mava.app/blog/telegram-business-a-step-by-step-guide-2024); [MessageWhiz/MMD Smart](https://mmdsmart.com/guides/business-messaging/telegram-for-business-features-use-cases-and-3-key-considerations/)
- **Business bots: 24-hour window and privacy.** Business-connected bots reportedly can only read and reply in chats active within the last 24 hours, via the Business Connections API [SUMMARY, 2026; conflicting accounts]. A Russian-language article warns that the bot reads messages **in plaintext**: the user consents to the bot developer *and* any AI provider it uses [SUMMARY]. — [Pasquale Pillitteri: "Secretary Mode" (EN)](https://pasqualepillitteri.it/en/news/3225/telegram-secretary-mode-bots-reply-behalf-2026); [same, RU](https://pasqualepillitteri.it/ru/news/3230/telegram-secretary-mode-boty-otvechayut-polzovatelya-2026); [Chatplace help](https://help.chatplace.io/en/articles/13593887-how-to-connect-the-ai-agent-to-a-telegram-business-account)
- **Chat Automation for everyone (2026-05-07).** "Every Telegram user can connect a bot to their profile and allow it to respond to messages on their behalf. When connecting a bot, you configure which chats it can access." [SNIPPET]. I found no statement of what such a bot may read, and no coverage of how *recipients* react to it. — [AlternativeTo, May 2026](https://alternativeto.net/news/2026/5/telegram-brings-guest-bots-custom-ai-styles-chat-automation-and-expanded-emoji-search/); [LatestLY](https://www.latestly.com/technology/telegram-update-chat-automation-ai-bot-to-bot-communication-and-11-new-features-introduced-check-details-7420769.html)

**What DIY "secretary" bots on GitHub reveal about owner needs (2026)**
- **secretary-bot** (TypeScript/grammY/Gemini, pushed 2026-08-21) [VERBATIM]:
  > "An AI auto-responder for your personal Telegram account. When someone messages you, a bot connected via Telegram's Business (Secretary) Mode replies *as you* — in your voice, your language, and within your rules."

  Features:
  - "🧠 Speaks in your voice — few-shot examples from your own messages…"
  - "👥 Per-contact awareness — set tone, gender, and rules per sender (casual with friends, 'never quote a price' to clients)"
  - "🗣️ Configure by chat — DM the bot 'treat @ali as my client…' or 'add a fact: I don't work weekends'"
  - "📇 Personal knowledge base — answers from a facts/FAQ file, and refuses to invent personal details"

  — [dostonsulaymon/secretary-bot README](https://raw.githubusercontent.com/dostonsulaymon/secretary-bot/main/README.md)
- **Persian Telegram Business AI assistant** (Cloudflare Workers + Mistral/OpenAI, pushed 2026-08-10). Translated from Persian [VERBATIM source]:
  > "by detecting your own messages it intelligently enables silent mode (Auto-Pause) so it causes no interference in your real conversations"

  Feature table: "Smart Pause: temporarily disables the bot in a chat when you reply manually"; "short-term chat memory… stores the last 6 messages"; "typing simulation". — [Ciahshi/Agent-Bot README](https://raw.githubusercontent.com/Ciahshi/Agent-Bot/main/README.md)
- **Other Telegram Business AI-reply repos created or pushed August–October 2026** [VERBATIM descriptions]:
  - "Smart Telegram AI Customer Service Bot, with conversation memory… Telegram Business Message support" — Mengheang25
  - "Telegram customer-support bot with automated replies, lead capture, and a live business dashboard" — SabinaSilva
  - "Telegram Business auto-reply bot with Cloudflare AI Gateway and D1 logging" — fan-world-me

  — GitHub search, 2026-11-05: [Mengheang25/Telegram-AI-Auto-Reply-Bot](https://github.com/Mengheang25/Telegram-AI-Auto-Reply-Bot); [SabinaSilva/telegram-ai-business-bot](https://github.com/SabinaSilva/telegram-ai-business-bot); [fan-world-me/tg-business-bot](https://github.com/fan-world-me/tg-business-bot)

**Practitioner sentiment on auto-reply bots**
- A dev.to author validating "Secretary·bot" argues that most customer conversations on Telegram are still handled manually, because "existing automation often creates a worse experience than simply talking to a human". The goal is to automate first contact "without forcing customers through complicated bot menus" [SUMMARY, dated Jun 10, year not shown]. — [dev.to/arsenj](https://dev.to/arsenj/why-telegram-still-has-an-automation-gap-1he9)
- A Russian marketing blog is titled (translated) "Why 90% of chatbots in Telegram annoy your customers (and how to make an AI agent that actually sells)" [TITLE, undated, ~2025–26]. — [Sostav](https://www.sostav.ru/blogs/292225/96248)
- A guide on connecting Claude to Telegram Business recommends **draft-for-approval** rather than auto-send (from sibling note). — [Telegram Bible](https://telegram-bible.pages.dev/guides/connect-claude-to-telegram-business)
- **Customer-side preference.** 70% of consumers would rather communicate with humans than AI agents and only 16% prefer AI agents (Okta/Auth0 Customer Identity Trends 2025, n=6,750, Statista-run) [SUMMARY]. — [Okta](https://www.okta.com/newsroom/articles/the-trust-deficit--why-consumers-are-wary-of-ai-agents--and-what/)

**Response time and after-hours**
- Customers reportedly expect live-chat/messaging replies within minutes: "60% expect a live chat reply within 2 minutes and 90% within 10 minutes". They tolerate up to an hour on email and social DMs [SUMMARY; aggregator stats, not traceable to primary surveys, 2025–2026]. — [Hyperleap](https://hyperleap.ai/blog/smb-customer-messaging-expectations-2026); [LiveChatAI](https://livechatai.com/blog/customer-support-response-time-statistics); [thisandthat.chat](https://www.thisandthat.chat/blog/customer-response-time-statistics/)
- **Vendor outcome claim.** Uzum Group (Uzbekistan fintech/e-commerce) automated first-line support so "only about 10% of first-line support requests now need a human" [SUMMARY, VENDOR case]. — [Umnico case study](https://umnico.com/blog/user-case-uzum-eng/)

**Lead capture, CRM routing and selling**
- Russian CRM vendors sell Telegram ↔ amoCRM/Bitrix24 integrations that store contacts with full history and let staff write to clients from inside the deal. Before Telegram Business, businesses "had to combine chatbots and managers' manual communication" [SUMMARY, VENDOR]. — [Callibri: Telegram ↔ amoCRM](https://callibri.ru/crm-chat/telegram-amocrm); [vc.ru: "Telegram Business for sales"](https://vc.ru/id1190732/1107649-telegram-business-dlya-prodazh)
- Selling through Telegram channels and bots as a "storefront without a website" is a recurring pattern [TITLE/SUMMARY]. — [dev.to: "Selling online without a website: how Telegram bots are replacing storefronts"](https://dev.to/david_off/selling-online-without-a-website-how-telegram-bots-are-replacing-storefronts-4j08); [Trengo](https://trengo.com/blog/a-quick-guide-to-selling-on-telegram)
- A 2025 Russian piece is titled (translated) "Telegram became a customer support channel. What it changes for marketing" [TITLE]. — [Sostav](https://www.sostav.ru/blogs/290165/87226)

**Freelancers and solo service providers**
- A freelancer guide says Telegram "is not a replacement for your CRM, contract, invoice, or task system". It lists common mistakes: "mixing leads, clients, and free followers in the same room" and "using Telegram instead of a contract, proposal, or project management workflow" [SNIPPET, VENDOR, undated ~2025–26]. — [Metricgram](https://metricgram.com/blog/telegram-for-freelancers)
- An r/freelance thread asks whether a client's request to move to Telegram is a scam. Many freelancers had never been asked; others said it is standard in some countries. One advises "always send it via email as well when delivering paperwork and drafts" [SUMMARY via Reddit mirror, ~2025]. — [r/freelance mirror](https://reddit.fsky.io/r/freelance/comments/1j6zyj9/when_clients_ask_to_communicate_via_telegram_is)
- A Capterra reviewer praises Telegram because "my files do not loose quality" [SNIPPET]. Another complains that sent information "can still be found anytime, any day" [SNIPPET]. — [Capterra Telegram reviews](https://www.capterra.com/p/180347/Telegram/reviews/?page=13)

**Multilingual customers**
- Telegram routes its message translation through Cocoon (sibling note). Search is weak for some Asian languages (KQ1). There is no direct SMB evidence on multilingual support pains. — [Durov's Code](https://durovscode.com/telegram-launches-cocoon-decentralized-ai-network)

### Inferences
- **Owners want judgment and boundaries, not "a chatbot".** The independently built 2026 secretary bots converge on the same spec:
  - voice cloning from examples
  - per-contact roles and rules
  - FAQ/facts grounding with refusal to invent
  - **auto-pause on human takeover**
  - configuration by chatting

  That is a validated requirements list for Mira's Telegram Business "reply on my behalf" mode.
- **"Never quote a price" is a telling rule.** Owners fear the agent committing them to prices, discounts, availability or promises. The approval boundary sits at **commitments** (price, booking, refund), not at "any reply".
- **Premium gating plus a 24-hour window** (if accurate) limits Telegram Business's reach and creates a gap in follow-ups (no proactive outreach to cold leads). Mira's reminders and Skills could fill the follow-up job, but only within platform limits. Verify on device.
- **Customers prefer humans (Okta, 70%), so disclosure and graceful handoff matter.** Persona 2 needs "AI drafts or handles first contact, then hands off to me at the right moment", not full autonomy.

### Gaps
- No official count of Telegram Business accounts or connected business bots (see KQ6).
- No user reviews (G2/Capterra/Reddit) of Telegram Business features themselves; all sources are vendor guides or press.
- I could not open Telegram's Bot API documentation to confirm the Business-bot 24-hour rule or Chat Automation's read scope (blocked). The sibling note `telegram_platform_and_agent_ux.md` may cover it.
- No evidence on bookings or payments *inside* Telegram Business chats (Stars and invoices for services), and none on multilingual SMB pains.

## 3. What stops people from connecting work accounts (Gmail, Calendar, Notion, Jira) to a chat bot?

### Takeaway
The barriers stack in five layers:
1. **Trust and fear of action**: account-wide scope, sending on my behalf, things already processed can't be "un-read".
2. **Low baseline willingness**: only about 1 in 5 consumers would give an agent read access to email in one 2026 survey (unverified), and many want a human in the loop.
3. **OAuth friction and third-party branding**: Google's restricted-scope regime, unverified-app warnings, and a consent screen from a different company than the bot.
4. **Company security policies and shared-space consent**: institutions banned meeting bots that joined calls uninvited; Slack locked down API data for LLMs.
5. **Unclear value at the moment of asking.**

Mira's 0.4% connect rate is consistent with all five.

### Cited Findings

**Mira's own funnel (company-reported, H1 2026, via sibling notes)**
- About 40% of users "put Mira to work on a real task". **0.4% connect external services**. "Most users never connect a single tool, and that's the biggest gap…" The company says "the bottleneck is onboarding, not demand" [SUMMARY/PARAPHRASE]. — [mira.tg/report](https://mira.tg/report)
- Mira's OAuth link goes to `connect.composio.dev` (a third-party brand) and expires in 10 minutes (observed 2026-06-08). — [mira-harness chat export](https://github.com/Masashi-Ono0611/mira-harness/blob/main/docs/mira-chat-history.txt)

**Willingness to grant access (surveys, 2025–2026)**
- **Ping Identity 2026** (11,000 consumers, 12 countries): only **21%** would likely grant an AI agent read access to their primary email, "even in exchange for saving five hours a week". Only 18% would let AI make decisions independently. [SUMMARY; I could not confirm these figures in a second search, so treat as unverified] — [iTWire: "Ping Identity survey finds AI trust changes when assistance turns to action"](https://itwire.com/guest-articles/guest-research/ping-identity-survey-finds-ai-trust-changes-when-assistance-turns-to-action); [Ping newsroom](https://www.pingidentity.com/en/company/ping-newsroom.html)
- **Morning Consult for Menlo Ventures, July 2026** (5,067 US adults; figures are among AI users). Permissions people had granted: email 36%, browser 33%, messaging 31%, cloud storage 29%, **calendar 27%**, health 23%, financial 20% [SUMMARY, unverified]. — [digitalapplied summary, 2026-09-16](https://www.digitalapplied.com/blog/ai-agent-access-permissions-consumer-survey-statistics-2026)
- **Zendesk/YouGov, June 2025** (~10,000 people, 10 countries): 52% comfortable relying on personal AI assistants. UK: 55% comfortable with AI managing to-do lists and calendar; **35% trust AI with professional communications** [SUMMARY]. — [Zendesk press release](https://www.zendesk.com/newsroom/press-releases/global-survey-reveals-growing-consumer-trust-in-personal-ai-assistants)
- **Okta/Auth0 2025**: 60% "concerned or very concerned" about AI's impact on privacy and security. **38% want to know there is a human in the loop**. 23% don't want to use AI agents. Among non-users of AI, 44% say "I don't trust AI agents with my personal data" [SUMMARY]. — [Okta](https://www.okta.com/newsroom/articles/the-trust-deficit--why-consumers-are-wary-of-ai-agents--and-what/)
- **Forrester, March 2025**: only 24% of UK online adults trust AI agents to make routine purchases on their behalf [SUMMARY]. — [Forrester](https://www.forrester.com/report/many-uk-consumers-believe-in-agentic-commerce-but-few-trust-it-to-make-purchases/RES188623)
- An older StartMail survey (2023) found more than 40% "deeply concerned about AI scanning their email" [SUMMARY]. — via [getmailbird](https://www.getmailbird.com/third-party-apps-accessing-gmail-privacy/)

**Scope and "action" anxiety (2025–2026)**
- An AI connector's Gmail permission is account-wide, not per-thread. Revoking OAuth stops future reads but does not delete data already processed [SUMMARY]. — [Clean Email](https://clean.email/blog/ai-email-management/is-it-safe-to-connect-chatgpt-or-claude-to-gmail)
- **Unverified viral incident**: a Reddit user alleged ChatGPT emailed FBI contacts from their Gmail without being asked. Screenshots unverified; OpenAI did not comment [SUMMARY]. It shows the *fear* of autonomous sending. — [GadgetReview](https://www.gadgetreview.com/?p=413055)
- Safe-setup advice converging across vendors: start read-only, add send separately, avoid modify/full access, and have a human approve before sending [SUMMARY, VENDOR, 2026-06-04]. — [BetterClaw](https://www.betterclaw.io/blog/ai-agent-gmail-safe-setup); [Inbox Zero](https://www.getinboxzero.com/blog/post/is-it-safe-to-connect-third-party-apps-to-gmail)
- On Poke: "giving an AI agent access to your inbox, calendar, and smart home devices takes a level of trust some people aren't ready for" [SNIPPET, Unite.AI review, ~2025–26]. Poke's material reportedly claims SOC 2 Type II and CASA Tier II, both trust signals [SUMMARY, third-party mirror]. — [Unite.AI Poke review](https://www.unite.ai/poke-review/); [mintlify mirror](https://www.mintlify.com/x1xhlol/system-prompts-and-models-of-ai-tools/commercial/poke)

**OAuth and platform friction**
- Gmail's restricted scopes (`gmail.readonly`, `gmail.modify`, full mail) require full verification **plus an annual CASA security assessment**. `gmail.send` is "sensitive", needing verification but no assessment [SUMMARY]. — [Unified.to docs](https://docs.unified.to/skills/gmail-oauth-app/SKILL.md)
- Unverified apps requesting sensitive or restricted scopes are capped at 100 new users and show warnings [SUMMARY of official Google page]. — [Google Cloud Help](https://support.google.com/cloud/answer/13463817?hl=en)
- An older GMass post cites $15,000–$75,000+ for the assessment (possibly outdated) [SUMMARY]. — [GMass](https://www.gmass.co/blog/wp-json/wp/v2/posts/9167)
- **Slack locked down API data (mid-2025).** Salesforce revised the Slack API Terms to prohibit "bulk exporting of data", "persistent copies, archives, indexes… long-term data stores" and "usage of such data in large language models". Glean was affected. Slack pointed to a real-time search API instead [SNIPPET]. — [Hunton (2025)](https://www.hunton.com/privacy-and-cybersecurity-law-blog/salesforce-locks-down-slack-data-time-to-review-your-slack-api-terms); [Cloud Wars](https://cloudwars.com/cloud-wars-minute/slack-api-terms-update-restricts-data-exports-and-llm-usage)

**Organizational and shared-space consent (meeting bots as a cautionary tale, 2025–2026)**
- Chapman University prohibited Read AI in August 2025, citing security, privacy and institutional data risks. The University of Washington also blocked it [SUMMARY]. — [eesel: Read AI reviews](https://www.eesel.ai/blog/read-ai-reviews); [Zoom Community: "How do I stop read.ai joining meetings?"](https://community.zoom.com/t5/Zoom-AI-Companion/How-do-I-stop-read-ai-joining-meetings/m-p/204109)
- A Fireflies user quote: "the fireflies notetaker still joins zoom meetings after uninstalling and deleting the account, which causes major privacy concerns for other parties" [SNIPPET]. Two BIPA suits are reported: Cruz v. Fireflies.AI (December 2025) and Fricker v. Fireflies.AI (March 2026) [SUMMARY; allegations, dockets not verified]. — [Meetingnotes: remove Fireflies](https://meetingnotes.com/blog/how-to-remove-fireflies-ai); [Voibe: Is Fireflies safe?](https://www.getvoibe.com/resources/is-fireflies-safe.md)

**Telegram-specific privacy and "self-host" signals**
- A summary-bot author warns [VERBATIM]: "This bot will store chat history into my d1 database, so deploy your own bot is recommended". The bot was disabled for new groups after hitting "maximum DB size". It can only see messages "sent by **user** and **after** the bot join the group" (Telegram bot limits). — [asukaminato0721/telegram-summary-bot](https://raw.githubusercontent.com/asukaminato0721/telegram-summary-bot/main/README.md)
- The lupikovoleg digest bot deletes processed messages after each run and cleans records older than 48 hours [VERBATIM]. Short retention is used as a trust feature. — [lupikovoleg/summary-bot](https://raw.githubusercontent.com/lupikovoleg/summary-bot/main/README.md)
- Sibling note: Russian tech press asked whether Mira's private mode is "privacy or just marketing?" — [VGTimes](https://vgtimes.ru/tech-and-hardware/147319-v-telegram-zapuschen-ii-assistent-mira-privatnost-ili-prosto-marketing.html)

### Inferences
- **The barrier is "consent at the wrong moment" more than "OAuth is hard".** Mira asks users to *say* "Connect my Gmail" before they have seen a payoff, then sends them to a non-Mira domain with a 10-minute timer. Survey data (21–36% willing to grant email; 27% calendar) suggests the ceiling is far above 0.4%. A contextual, value-first ask could plausibly move it several-fold. This is an inference, not measured.
- **Calendar and task tools are the lower-risk on-ramps.** The worry is about reading private content and acting irreversibly. Calendar read, a Linear/Notion task create, or GitHub notifications carry less "it might email the FBI" fear than Gmail send. A design proposal could sequence connections from low to high risk.
- **Team settings add a consent problem individuals don't have.** Meeting bots got banned for acting in *shared* spaces without everyone's consent. Mira's Team Agent reads group chats, so it needs visible, group-level consent and retention rules, or it will hit the same institutional backlash. "Each teammate connects their own account" is a good start.
- **Slack's 2025 API terms limit how far Mira can bridge "Slack alongside Telegram" teams.** The terms bar persistent indexes and LLM use of Slack data, so Mira's Slack integration via Composio may be limited to real-time actions. Needs verification.

### Gaps
- No Mira-specific funnel data beyond the 0.4% figure: drop-off at the OAuth screen, by integration, by persona.
- Could not verify whether Composio's Google OAuth app is CASA-verified or what consent-screen branding users see.
- Ping Identity 2026 and Morning Consult/Menlo 2026 figures are from search summaries only.
- No Telegram-user-specific survey on willingness to connect work accounts to bots.

## 4. How do competitors and adjacent products serve these jobs, and what do users complain about?

### Takeaway
The market splits into four groups:
- **Workspace-native AI** (Slack AI, Notion AI): good when that tool is already the team's memory, but priced per seat and bundled into upper tiers, and walled off from Telegram.
- **Meeting notetakers** (Read.ai, Fireflies): strong summaries, but hated for auto-joining and consent problems.
- **Messenger personal agents** (Lindy, Poke): deep inbox and calendar, but expensive or opaque credits, billing complaints, and 1:1-only.
- **Telegram-native CRMs and DIY bots** (CRMChat, Telebiz, Breakcold, summary and secretary bots): solve slices but need setup, self-hosting or separate tools.

No product combines Telegram-group context, per-member account connections and a system-of-record write-back with consumer-grade trust UX.

### Cited Findings

**Slack AI**
- Pricing: originally a $10/user/month add-on (2024). Reportedly bundled into Business+ in June 2025, with Business+ rising from $12.50 to $15/user/month: "You pay for AI whether you use it or not" [SUMMARY, conflicting sources]. Daily recaps are reserved for Business+/Enterprise+. The most common complaint is per-seat cost "when not everyone will use it much". One reviewer says Slack AI is useful mainly "when Slack already functions as the company's shared memory" [SUMMARY, 2024–2026]. — [eesel: Slack AI pricing](https://www.eesel.ai/blog/slack-ai-pricing-and-plans-explained); [eesel: daily recaps](https://www.eesel.ai/blog/slack-ai-daily-recaps); [fast.io review 2026](https://www.fast.io/resources/slack-ai-review-2026.md); [slackcost](https://slackcost.pages.dev/slack-ai); [TechRadar](https://www.techradar.com/pro/slack-is-bringing-all-its-ai-tools-to-more-customers-than-ever-but-it-wont-come-cheap)
- Slack's 2025 API terms restrict third-party LLM use of Slack data (see KQ3). — [Hunton](https://www.hunton.com/privacy-and-cybersecurity-law-blog/salesforce-locks-down-slack-data-time-to-review-your-slack-api-terms)

**Read.ai and Fireflies (meeting notetakers)**
- The dominant complaint is bots joining meetings without permission and persisting after cancellation or account deletion. There are institutional bans (Chapman University, August 2025; University of Washington) and BIPA litigation against Fireflies (December 2025, March 2026; allegations). Much of the coverage is from competitors [SUMMARY]. — [eesel](https://www.eesel.ai/blog/read-ai-reviews); [Meetingnotes](https://meetingnotes.com/blog/how-to-remove-read-ai-from-teams-zoom-or-google-meet); [Zoom Community](https://community.zoom.com/t5/Zoom-AI-Companion/Read-AI-tool-overtakes-Meeting/m-p/228247); [Voibe](https://www.getvoibe.com/resources/is-fireflies-safe.md)

**Lindy (assistant via iMessage/SMS; $49.99–$199.99/mo per sibling note)**
- G2 reviewers most often call it expensive "due to limited credits and costs associated with errors during setup". Quotes [SNIPPET]:
  - "used 5,000 credits in under 10 minutes"
  - "Correcting a bad output still consumes credits"
  - "constant errors and burned through my monthly credits trying to make it work"
- Trustpilot complaints include unauthorized charges and "no cancel button available in the billing settings" [SNIPPET].
- Ratings diverge: about 4.9 on G2 (~170 reviews) versus Trustpilot 1.5–2.4 [SUMMARY, 2026].
- A claim that Lindy's CEO announced "We kill the AI agent" (2026-08-10) is single-source and unverified.

  — [G2 Lindy](https://www.g2.com/products/lindy-lindy); [Trustpilot Lindy](https://www.trustpilot.com/review/lindy.ai?page=1); [CloudTalk review, updated 2026-08-14](https://www.cloudtalk.io/blog/lindy-ai-review/); [Saner.ai](https://blog.saner.ai/lindy-ai-reviews/); [computertech.co](https://computertech.co/?p=4494)

**Poke (iMessage/SMS/Telegram/WhatsApp)**
- Gmail/Outlook access "unlocks most of the assistant's usefulness". Reviewers note the trust hurdle (KQ3). Sibling note: mixed proactivity ("never proactive"). — [Unite.AI](https://www.unite.ai/poke-review/); [Product Hunt review](https://www.producthunt.com/p/poke-by-interaction-co/a-week-with-poke-review-a-promising-start-for-a-proactive-ai-assistant)

**Notion AI**
- Not researched in depth this session. No 2024–2026 complaint evidence was gathered; see Gaps.

**Telegram CRM and helpdesk tools**
- **CRMChat**: pulls active members of crypto and dev groups into a pipeline. It uses "a daily digest bot and a 'Next Review Date' field" for follow-ups [SUMMARY, VENDOR]. — [CRMChat](https://crmchat.ai/blog/telegram-crm-operator-influencer-partnership-management)
- **Telebiz** (launched 2026-07-09): chats-to-deals, HubSpot/Pipedrive sync. — [techstartups](https://techstartups.com/2026/07/09/telebiz-launches-ai-powered-crm-for-telegram-to-help-teams-manage-sales-partnerships-and-customer-relationships/)
- **Breakcold**: a multichannel CRM with Telegram as one channel. — [Breakcold](https://www.breakcold.com/crm/telegram)
- **Russian market**: amoCRM/Bitrix24 connectors (Telegram.A24, Callibri), Umnico, ChatLab. — [Callibri](https://callibri.ru/crm-chat/telegram-amocrm); [Umnico](https://umnico.com/blog/user-case-uzum-eng/)
- **No independent reviews** (G2, Reddit, Product Hunt) of these Telegram CRMs were found [SUMMARY of search]. — search 2026-11-05
- **Automation tooling gaps**: AutomateTG argues "most existing tools either rely heavily on bot APIs or require managing fragmented MTProto setups manually" [SUMMARY, VENDOR]. — [hunted.space: AutomateTG](https://www.hunted.space/dashboard/automatetg)

**DIY open source (GitHub, 2025–2026)**
- Summary bots: asukaminato0721 (205★), lupikovoleg, FogMoe, sirmirzaei. Secretary bots: dostonsulaymon, Ciahshi, Mengheang25, fan-world-me. Team task bots: "Assistant_Bot… streamline team communication and task tracking"; "Statusping… automating daily standup reminders"; "Weekly-Task-Reporter… collects weekly task updates, generates a DOCX report, and uploads it to Google Drive" [VERBATIM repo descriptions]. Their shared limitation is self-hosting: an API key, a database and a server. — GitHub search 2026-11-05: [mscbuild/Assistant_Bot](https://github.com/mscbuild/Assistant_Bot); [Veri5ied/statusping](https://github.com/Veri5ied/statusping); [dorxuun/Weekly-Task-Reporter-Telegram-Bot](https://github.com/dorxuun/Weekly-Task-Reporter-Telegram-Bot)

**Telegram itself**
- Native AI summaries, AI Editor, Guest bots and Chat Automation (2026). These commoditize basic summaries and "reply for me" (sibling note `competitive_landscape.md`). — [Telegram blog](https://telegram.org/blog/ai-bot-revolution-11-new-features)

### Inferences
- **Mira's opening sits where these tools stop.**
  - Slack AI requires the team to live in Slack.
  - Telegram's native AI has no memory or actions.
  - DIY bots require self-hosting.
  - Telegram CRMs are separate apps with their own UI.
  - Lindy and Poke are 1:1 and expensive or opaque.

  A Telegram-native group agent that *writes to the team's existing tools* (Linear, Notion, a CRM sheet) fills the gap between them.
- **Complaint patterns are also design anti-requirements for Mira:**
  - **Never join or act where not explicitly invited** (Read.ai, Fireflies).
  - **Never burn credits on failed or corrective actions, and make cancel easy** (Lindy). This echoes the sibling note's Mira finding that Pro "worked two days" and then asked for tokens.
  - **Don't charge per seat for everyone in a group** (Slack AI). Mira's per-user model fits groups better, but team billing needs a clear story.

### Gaps
- No Notion AI, Jira/Atlassian Rovo or Linear AI complaint evidence gathered this session.
- No independent reviews of Telegram CRMs (CRMChat, Telebiz, Breakcold) found.
- No retention or usage data for any competitor in these segments.

## 5. Jobs-to-be-done statements ("When [situation], I want to [motivation], so I can [outcome]") with supporting evidence

### Takeaway
Ten JTBD statements are well supported. Five belong to the team operator (P1), four to the Telegram-first business owner (P2) and one to the freelancer/agency (P3). The strongest evidence, where people built tools to do the job themselves, is behind:
- J1, catch up on group decisions
- J2, turn chat into tracked tasks
- J6, reply as me within my rules
- J7, hand off when I step in

### Cited Findings
Each JTBD lists its persona, the statement and the evidence (sources detailed in KQ1–4).

- **J1 (P1). Catch up.** "When I return to a work group with hundreds or thousands of unread messages, I want a digest of what was decided and what's waiting on me, with links to the original messages, so I can act without reading everything."
  - "Feel scared when seeing 2000+ unread in groups?" [VERBATIM] — [asukaminato0721](https://raw.githubusercontent.com/asukaminato0721/telegram-summary-bot/main/README.md)
  - A digest with "decided to simplify the header…" plus per-topic links [VERBATIM] — [lupikovoleg](https://raw.githubusercontent.com/lupikovoleg/summary-bot/main/README.md)
  - Mira docs: "Missed a 200-message discussion?" — [wiki](https://wiki.mira.tg/group-chats/overview)
  - An X user: Mira "summarized 200 group chat messages while I was away in 10 seconds" (2026-07-03, sibling note) — [X/defileo](https://x.com/defileo/status/2073053615988830333)
- **J2 (P1). Chat to task.** "When a task, owner or deadline is agreed in a Telegram chat, I want it captured automatically in our tracker (Linear/Jira/Notion), so I can stop losing commitments in the scroll."
  - An agency built an "AI agent… turning a working Telegram chat into a task system" [TITLE] — [workspace.ru](https://workspace.ru/cases/ii-agent-dlya-ooo-mp-intepro-prevraschaem-rabochiy-telegram-chat-v-sistemu-zadach/)
  - "Telegram doesn't know what a 'ticket'… is" [SNIPPET] — [Habr](https://habr.com/ru/articles/995850)
  - StackAccel "generates action items" — [neura.market](https://neura.market/directories/ai-tools/stackaccel)
  - Mira's Linear "attach this screenshot" hack — [wiki Linear](https://github.com/Mira-Agent/mira-wiki/blob/main/tools/linear.mdx)
- **J3 (P1). Deal follow-ups.** "When I'm running dozens of partner, investor or BD conversations across Telegram DMs and groups, I want each one tracked with a next step and nudges, so I can follow up before deals go cold."
  - CRMChat's "Next Review Date" and daily digest bot — [CRMChat](https://crmchat.ai/blog/telegram-crm-operator-influencer-partnership-management)
  - Telebiz chats-to-deals — [techstartups](https://techstartups.com/2026/07/09/telebiz-launches-ai-powered-crm-for-telegram-to-help-teams-manage-sales-partnerships-and-customer-relationships/)
  - "how not to lose deals in Telegram" [TITLE] — [spark.ru](https://spark.ru/startup/hotline-crm/blog/352576/menedzher-vedyot-perepisku-v-lichke-i-vi-ob-etom-ne-znaete-kak-ne-teryat-sdelki-v-telegram)
- **J4 (P1). Manager visibility.** "When my team handles clients in many Telegram chats (often from personal accounts), I want visibility into open requests, response times and who owns what, so I can manage the business, not just trust the CRM status."
  - "In the CRM the status is 'in progress' and nothing else" [SNIPPET] — [spark.ru](https://spark.ru/startup/hotline-crm/blog/352576/menedzher-vedyot-perepisku-v-lichke-i-vi-ob-etom-ne-znaete-kak-ne-teryat-sdelki-v-telegram)
  - A corporate bot built because management couldn't see workload or open and closed requests — [workspace.ru](https://workspace.ru/cases/razrabotka-korporativnogo-chat-bota-v-telegram-kotoryy-raspoznaet-klientov-po-inn/)
- **J5 (P1). Safe delegation.** "When I let an AI act in our group or on my accounts, I want it to act only through *my* connected account, only when asked, with a preview before anything is sent, so I can delegate without risking a security incident or embarrassing my team."
  - Account-takeover attacks via Telegram, 2025 — [Cointelegraph](https://cointelegraph.com/news/crypto-founders-report-deluge-of-north-korean-fake-zoom-hacking-attempts)
  - Okta: 38% want a human in the loop — [Okta](https://www.okta.com/newsroom/articles/the-trust-deficit--why-consumers-are-wary-of-ai-agents--and-what/)
  - Read.ai/Fireflies bans for acting uninvited — [eesel](https://www.eesel.ai/blog/read-ai-reviews)
  - Mira: "each teammate connects their own account" — [Team Agent](https://mira.tg/products/team-agent)
- **J6 (P2). Reply as me.** "When a customer messages my business account after hours or while I'm busy, I want an assistant to answer in my voice from my real FAQ and prices, without inventing facts, so I can keep response times in minutes without being on my phone 24/7."
  - secretary-bot: "replies *as you* — in your voice… within your rules"; "refuses to invent personal details" [VERBATIM] — [secretary-bot](https://raw.githubusercontent.com/dostonsulaymon/secretary-bot/main/README.md)
  - Customers expect replies within minutes [aggregator] — [Hyperleap](https://hyperleap.ai/blog/smb-customer-messaging-expectations-2026)
  - Telegram Business away messages are only static — [TechCrunch 2024-04-01](https://techcrunch.com/2024/04/01/chat-app-telegram-challenges-meta-with-the-launch-of-new-business-features-and-revenue-sharing)
- **J7 (P2). Clean handoff.** "When I jump into a conversation myself, I want the assistant to step back instantly and not talk over me, so I can keep control of important customers."
  - "Smart Pause: temporarily disables the bot in a chat when you reply manually" [VERBATIM, translated] — [Ciahshi/Agent-Bot](https://raw.githubusercontent.com/Ciahshi/Agent-Bot/main/README.md)
  - Okta: 70% prefer humans — [Okta](https://www.okta.com/newsroom/articles/the-trust-deficit--why-consumers-are-wary-of-ai-agents--and-what/)
- **J8 (P2). Per-contact rules.** "When different people write to me (friends, existing clients, new leads), I want per-contact rules (tone, what not to say, e.g. never quote a price), so I can automate safely without the bot overcommitting me."
  - "Per-contact awareness… 'never quote a price' to clients"; "Configure by chat" [VERBATIM] — [secretary-bot](https://raw.githubusercontent.com/dostonsulaymon/secretary-bot/main/README.md)
  - Telegram Chat Automation lets users choose which chats a bot can access — [AlternativeTo](https://alternativeto.net/news/2026/5/telegram-brings-guest-bots-custom-ai-styles-chat-automation-and-expanded-emoji-search/)
- **J9 (P2). Lead to record.** "When a new lead writes in Telegram, I want their details and request captured into my CRM or sheet and a follow-up scheduled, so I can stop losing leads in the chat list."
  - "lead capture, and a live business dashboard" [VERBATIM] — [SabinaSilva](https://github.com/SabinaSilva/telegram-ai-business-bot)
  - amoCRM/Bitrix24 Telegram connectors — [Callibri](https://callibri.ru/crm-chat/telegram-amocrm)
  - "Why you lose clients in Telegram" [TITLE] — [crmindex](https://crmindex.ru/services/chatlab/blog/pochemu_vy_teryaete_klientov_v_telegram)
- **J10 (P3). Client record.** "When I agree scope, files and deadlines with clients in Telegram, I want those approvals and deliverables saved to my project or contract system (and email), so I can prove what was agreed and find files later."
  - "not a replacement for your CRM, contract, invoice, or task system" [SNIPPET] — [Metricgram](https://metricgram.com/blog/telegram-for-freelancers)
  - "always send it via email as well when delivering paperwork" [SUMMARY] — [r/freelance mirror](https://reddit.fsky.io/r/freelance/comments/1j6zyj9/when_clients_ask_to_communicate_via_telegram_is)

### Inferences
- J1 is well served by many tools (Telegram native AI, DIY bots, Mira). It is table stakes. J2, J3 and J9 (write-back to the system of record) need **connected accounts**, so they are the jobs that would lift Mira's 0.4% connect rate if the connect prompt appears *at the moment the job arises*. Example: "Create these 3 tasks in Linear? [Connect Linear]".
- J5, J7 and J8 are **trust jobs**. They are preconditions for J2, J3, J6 and J9 rather than features users would name. They belong in onboarding and permission UX, not a feature list.

### Gaps
- None of these JTBDs were validated through interviews. Evidence comes from artifacts (tools people built, vendor pain framing, surveys), not from first-person user testimony.
- No evidence was found for time-zone jobs ("when teammates are 8 hours apart…") or multilingual customer jobs, though both are plausible for these regions.

## 6. Quantitative data on Telegram use for work and business

### Takeaway
There is **no reliable global figure** for the share of Telegram users who use it for work, and **no official count of Telegram Business accounts**. Business features require Premium, so Premium subscribers are an upper bound: 12M+ around late 2024/early 2025, about 15M reported for mid-2025 by aggregators. The best market-level data is Russia's 2026 surveys, where up to 70% of companies kept using Telegram/WhatsApp for work despite restrictions. Agent-trust surveys give a 21–36% ceiling for email-access willingness, against Mira's 0.4% connect rate.

### Cited Findings

**Platform scale**
- Telegram has about 1B users [SUMMARY, GWI]. The main reason people use Telegram "is because other people are on it". Users skew toward people "interested in tech, who often work in tech themselves" [SNIPPET, undated]. — [GWI: What is Telegram](https://gwi.com/blog/what-is-telegram)
- **Premium subscribers** [SUMMARY]:
  - 1M in December 2022
  - 5M in January 2024 (Durov)
  - "tripled, exceeding 12 million" (Telegram update reported by iClarified, about January 2025)
  - 15M in July 2025 (aggregator; unverified)

  Telegram Business requires Premium. — [Statista](https://www.statista.com/statistics/1344164/telegram-paying-subscribers); [iClarified](https://www.iclarified.com/95985/telegram-reaches-profitability-debuts-first-2025-update-with-collectible-gifts-message-search-filters-more); [DemandSage](https://www.demandsage.com/telegram-statistics/); [Mezha 2024-04-02](https://mezha.media/en/2024/04/02/telegram-launches-business-features-for-premium-users)
- **No official Telegram Business account count** was found [search 2026-11-05].
- Statista paywalls charts on "Main purposes of Telegram use 2023" and "Telegram users distribution by profession". Their values were not visible. — [Statista: purposes](https://statista.com/statistics/1252789/telegram-use-purposes); [Statista: profession](https://statista.com/statistics/1252755/telegram-users-distribution-by-profession)
- Enlyft/iDataLabs company tracking: Telegram's "customers" split 26% small (<50 employees), 27% medium and 24% large (>1,000). Its share of the "collaborative software" category is about 0.01% [SUMMARY; methodology unclear]. — [iDataLabs](https://sentry.idatalabs.com/tech/products/telegram)

**Russia (2025–2026)**
- Up to **70%** of Russian companies continue using Telegram, WhatsApp and other banned platforms for work. 35–40% work in a hybrid mode. Up to 15% have deployed corporate messengers. Interest rose after "Telegram restrictions at the end of March 2026" [SUMMARY of Izvestia via The Moscow Times, 2026-04-24]. — [The Moscow Times (RU)](https://ru.themoscowtimes.com/2026/04/24/okolo-70-biznesa-prodolzhili-ispolzovat-zapreschennie-messendzheri-a193710)
- Kommersant: a third of companies use a hybrid format for work correspondence, 15% of them are deploying corporate messengers, and "more than half still hope for a miracle" via VPN and proxies [SNIPPET, 2026]. — [Kommersant](https://www.kommersant.ru/doc/8623874)
- Every fifth company began moving to domestic messengers after call restrictions in Telegram and WhatsApp [SUMMARY, retail.ru, 2025-10-06]. — [retail.ru](https://www.retail.ru/news/kazhdaya-pyataya-kompaniya-v-rf-nachala-perekhodit-na-otechestvennye-messendzher-6-oktyabrya-2025-269859/)
- In 2022, 72 Russian companies started selling goods through Telegram [TITLE; older]. — [Inc. Russia](https://incrussia.ru/news/72-rossijskih-kompanij-nachali-prodavat-svoi-tovary-cherez-telegram/)

**Other regions**
- **Iran**: about 90% of people use VPNs. A local VPN market of about $500M/year is blamed for blocking the Telegram unban [SUMMARY, 2025-11]. — [Iran International](https://www.iranintl.com/en/202511034046); [TechNadu](https://www.technadu.com/?p=612756)
- **India**: more than 20% of Telegram's user base [SUMMARY, VENDOR, undated]. — [Qontak](https://qontak.com/en/blog/telegram-for-business/)

**Comparator: WhatsApp Business**
- WhatsApp has 3B MAU (Q1 2025 earnings). The WhatsApp Business app had 200M+ monthly users, Meta's last official figure (June 2023). The claim that more than 45% of active businesses used AI auto-replies in 2025 is unsourced [SUMMARY]. — [Nairametrics 2025-05-01](https://nairametrics.com/2025/05/01/whatsapp-crosses-3-billion-monthly-users-as-meta-doubles-down-on-ai-strategy); [ChatMaxima](https://chatmaxima.com/blog/whatsapp-business-statistics-2026/); [sqmagazine](https://sqmagazine.co.uk/?p=7556)

**Mira (company-reported)**
- 175K group chats; about 40% of users put Mira to work on a real task; 0.4% connect external services (H1 2026). — [mira.tg/report](https://mira.tg/report)
- 2M+ users, 500K MAU and 50K+ groups (May 2026). — [IT Brief](https://itbrief.co.uk/story/mira-ai-agent-launches-inside-telegram-group-chats)

**Agent-access willingness**
- Survey figures as in KQ3: Ping 2026 21% email read; Morning Consult/Menlo 2026 email 36% and calendar 27% granted; Zendesk/YouGov 2025 UK 35% trust AI with professional comms; Okta 2025 38% want a human in the loop. — sources in KQ3

### Inferences
- **Rough upper bound on Telegram Business.** If business owners were even 10–20% of about 15M Premium subscribers, Telegram Business would be a 1.5–3M-account niche. This is a speculative illustration, not data. Mira's addressable "reply on my behalf" pool is therefore much smaller than its consumer base. The May 2026 Chat Automation for *all* users (not Premium-gated, per coverage) may widen it. Verify.
- **Russia's 2026 data shows both stickiness and fragility.** Businesses won't leave Telegram easily (70% stayed), but Mira's CIS-heavy users face access risk.

### Gaps
- No global, recent survey on "share of Telegram users who use it for work".
- No Telegram Business adoption numbers and no Premium figure for 2026.
- No data on how many Mira groups are work groups or teams versus social groups.

## 7. Candidate personas: who they are, what they do in Telegram for work, current tools, pains, unmet needs and trust conditions

### Takeaway
The evidence supports **two strong personas and one thinner, optional persona**:
- **P1, "Telegram-native team operator"**: founder, ops or BD lead at a crypto/Web3 or CIS-origin remote startup.
- **P2, "Telegram-first service business owner"**: solo or small team selling through a Telegram Business or personal account in CIS, Central Asia, Iran or India.
- **P3, "Freelancer or agency account manager"** who runs client relationships in Telegram chats.

P1 is the best fit for Team Agent plus Connect. P2 is the best fit for Telegram Business "reply on my behalf". Both hinge on trust UX more than on features.

### Cited Findings

**P1: Telegram-native team operator (founder, ops or BD lead; 5–50-person remote team)**
- **Who**
  - Crypto/Web3 teams, where Telegram is the industry default. — [Bitcoin.com](https://news.bitcoin.com/six-alternatives-to-telegram-for-cryptocurrency-communities)
  - CIS-origin teams that moved off Slack. — [Habr](https://habr.com/en/articles/655709)
  - Tech-leaning users generally. — [GWI](https://gwi.com/blog/what-is-telegram)
- **What they do in Telegram**
  - An internal team group plus many external partner and client groups. One company had more than 1,000 client groups. — [Habr snippet](https://habr.com/ru/articles/995850)
  - BD and deal flow in DMs. — [CRMChat](https://crmchat.ai/blog/community-driven-sales-crm-telegram-whatsapp-chat-based)
  - Community management. — [Coinbound](https://coinbound.io/top-chat-channels-crypto-companies-should-have-ep-22)
- **Current stack and workarounds**
  - Slack, Notion, Linear, Jira or GitHub in parallel. — [Coinbound](https://coinbound.io/?p=11754)
  - Telegram CRMs (CRMChat, Telebiz, Breakcold). — [techstartups](https://techstartups.com/2026/07/09/telebiz-launches-ai-powered-crm-for-telegram-to-help-teams-manage-sales-partnerships-and-customer-relationships/)
  - DIY summary and standup bots. — [GitHub](https://github.com/asukaminato0721/telegram-summary-bot)
  - Excel tracking that "breaks at a hundred chats". — [Habr snippet](https://habr.com/ru/articles/995850)
- **Pains**
  - Unread overload. — [asukaminato0721](https://raw.githubusercontent.com/asukaminato0721/telegram-summary-bot/main/README.md)
  - No tickets, statuses or threads. — [Habr](https://habr.com/ru/articles/995850); [bugs.telegram.org](https://bugs.telegram.org/c/2737/36)
  - Lost follow-ups. — [spark.ru](https://spark.ru/startup/hotline-crm/blog/352576/menedzher-vedyot-perepisku-v-lichke-i-vi-ob-etom-ne-znaete-kak-ne-teryat-sdelki-v-telegram)
  - Account-takeover attacks. — [Cointelegraph](https://cointelegraph.com/news/crypto-founders-report-deluge-of-north-korean-fake-zoom-hacking-attempts)
  - No SSO/SCIM. — [thegtmdirectory](https://thegtmdirectory.com/compare/slack-vs-telegram)
- **Unmet needs**
  - Decisions and action items written back to Linear/Notion/CRM (J2, J3).
  - Manager visibility (J4).
- **Trust conditions**
  - Per-member account connection. — [Team Agent](https://mira.tg/products/team-agent)
  - Act only when invited, never "auto-join" (Read.ai/Fireflies backlash). — [eesel](https://www.eesel.ai/blog/read-ai-reviews)
  - Preview and approve before sending.
  - Visible retention rules. — [lupikovoleg](https://raw.githubusercontent.com/lupikovoleg/summary-bot/main/README.md)
  - Human in the loop. — [Okta](https://www.okta.com/newsroom/articles/the-trust-deficit--why-consumers-are-wary-of-ai-agents--and-what/)

**P2: Telegram-first service business owner (solo or 2–10 staff; tutors, beauty, retail, online shops, consultants)**
- **Who**
  - Markets where Telegram is the default commercial channel:
    - Uzbekistan — [Kun.uz](https://kun.uz/en/news/2025/04/10/uzbekistans-e-commerce-evolution-marketplaces-classifieds-and-birbirs-platform-with-10m-investment)
    - Iran, via VPN — [Iran International](https://www.iranintl.com/en/202511034046)
    - Russia, where up to 70% of businesses stayed — [Moscow Times](https://ru.themoscowtimes.com/2026/04/24/okolo-70-biznesa-prodolzhili-ispolzovat-zapreschennie-messendzheri-a193710)
    - India — [Qontak](https://qontak.com/en/blog/telegram-for-business/)
- **What they do in Telegram**
  - Customer DMs on a personal or Business account; channel as storefront; quick replies and away messages. — [TechCrunch](https://techcrunch.com/2024/04/01/chat-app-telegram-challenges-meta-with-the-launch-of-new-business-features-and-revenue-sharing); [dev.to](https://dev.to/david_off/selling-online-without-a-website-how-telegram-bots-are-replacing-storefronts-4j08)
- **Current stack and workarounds**
  - Telegram Business (Premium). — [Mezha](https://mezha.media/en/2024/04/02/telegram-launches-business-features-for-premium-users)
  - amoCRM/Bitrix24 connectors. — [Callibri](https://callibri.ru/crm-chat/telegram-amocrm)
  - No-code bot builders. — [Botcommerce](https://www.cbinsights.com/company/botcommerce)
  - DIY secretary bots. — [secretary-bot](https://raw.githubusercontent.com/dostonsulaymon/secretary-bot/main/README.md); [Agent-Bot](https://raw.githubusercontent.com/Ciahshi/Agent-Bot/main/README.md)
  - Multi-account desktop CRMs (Vietnam). — [deplao-builder](https://github.com/babyvibe/deplao-builder)
- **Pains**
  - Minute-level response expectations. — [Hyperleap](https://hyperleap.ai/blog/smb-customer-messaging-expectations-2026)
  - Repetitive FAQs and prices.
  - Lost leads. — [crmindex](https://crmindex.ru/services/chatlab/blog/pochemu_vy_teryaete_klientov_v_telegram)
  - Generic bots annoy customers. — [Sostav](https://www.sostav.ru/blogs/292225/96248); [dev.to/arsenj](https://dev.to/arsenj/why-telegram-still-has-an-automation-gap-1he9)
  - Platform blocking and shutdowns. — [The National](https://www.thenationalnews.com/news/mena/2026/01/26/view-from-tehran-internet-shutdown-deepens-economic-pain-as-uncertainty-drags-on)
- **Unmet needs**
  - "Replies as me" with FAQ grounding (J6).
  - Auto-pause on takeover (J7).
  - Per-contact rules (J8).
  - Lead to CRM or sheet plus follow-ups (J9).
- **Trust conditions**
  - Draft-for-approval at least initially, especially for price or booking commitments. — [Telegram Bible](https://telegram-bible.pages.dev/guides/connect-claude-to-telegram-business)
  - Chat scoping (choose which chats). — [AlternativeTo](https://alternativeto.net/news/2026/5/telegram-brings-guest-bots-custom-ai-styles-chat-automation-and-expanded-emoji-search/)
  - "Refuses to invent". — [secretary-bot](https://raw.githubusercontent.com/dostonsulaymon/secretary-bot/main/README.md)
  - Clarity that the bot reads messages in plaintext and which AI provider sees them. — [Pillitteri RU](https://pasqualepillitteri.it/ru/news/3230/telegram-secretary-mode-boty-otvechayut-polzovatelya-2026)

**P3 (optional, thinner evidence): freelancer or agency account manager**
- **Who**
  - Freelancers whose clients, especially in CIS and crypto, prefer Telegram. — [r/freelance mirror](https://reddit.fsky.io/r/freelance/comments/1j6zyj9/when_clients_ask_to_communicate_via_telegram_is)
  - Agencies running a group chat per client. — [workspace.ru](https://workspace.ru/cases/ii-agent-dlya-ooo-mp-intepro-prevraschaem-rabochiy-telegram-chat-v-sistemu-zadach/)
- **Pains**
  - Scope approvals and files buried in chat. — [Metricgram](https://metricgram.com/blog/telegram-for-freelancers)
  - Mixing leads and clients. — [Metricgram](https://metricgram.com/blog/telegram-for-freelancers)
  - Tasks lost across many client groups. — [workspace.ru](https://workspace.ru/cases/ii-agent-dlya-ooo-mp-intepro-prevraschaem-rabochiy-telegram-chat-v-sistemu-zadach/)
- **Unmet needs**
  - Approvals and deliverables pushed to Drive, Notion or email (J10).
  - Per-client digests.
- **Trust conditions**
  - Client confidentiality, and not exposing one client's context to another. Mira's "Group → Group: Never" memory boundary is directly relevant. — [wiki Memory](https://wiki.mira.tg/core/memory)

### Inferences
- **Recommended focus.** P1 fits Mira's Team Agent and Connect story and its crypto/TON ecosystem best. P2 has the sharpest, most concretely specified need (DIY bots exist) and is a natural home for the Telegram Business connection. But it is gated by Premium, a 24-hour window, regional platform risk and customer preference for humans. P3 can fold into P1 (agency = team) unless the proposal needs a solo-user angle.
- **Persona-level trust ladder** (for design proposals):
  1. Read-only digest in one group.
  2. Draft actions with an approve button.
  3. Connect one low-risk tool (calendar or tracker) at the moment of need.
  4. Act through the member's own account, with an audit trail.
  5. Customer-facing auto-replies within explicit per-contact rules and auto-pause.

  Each rung is backed by evidence above: Okta's human-in-loop figure, secretary-bot rules, the meeting-bot backlash and survey willingness levels.

### Gaps
- No first-person interviews or verified Reddit or Telegram community testimony. The personas are artifact- and survey-based and should be validated with Mira user interviews or in-product analysis (e.g. what share of Mira's 175K groups are work groups).
- No data on persona size, willingness to pay, or the languages and regions of Mira's work-oriented users.

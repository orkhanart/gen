# Persona evidence base: Telegram community admins and moderators, channel owners and creators, and members of busy groups (as potential users of Mira's Team Agent)

**Research date:** 2026-11-05. **Scope:** problems, needs and jobs-to-be-done for (a) group and community admins and moderators, (b) channel owners and creators, and (c) ordinary members of busy group chats, plus their attitudes to an AI agent joining a group. Mira's own features are not re-described here; see `../Miro Telegram AI agent research/product_features_ux_screens.md` and `user_sentiment_reviews.md`.

**Method and source limits (read first):**
- **WebFetch reached no page.** itsfoss.com and dev.to failed DNS under the session's network policy. reddit.com, old.reddit.com and hn.algolia.com were refused by the egress proxy (HTTP 403).
- **Firecrawl had no credits** (checked 2026-11-05).
- **What did work:** WebSearch (titles, snippets and the search tool's summaries) and the GitHub search API through `gh`. Issue bodies retrieved through the GitHub API are full and verbatim.
- **No Reddit or Hacker News thread was opened.** The search engine returned no reddit.com results even for `site:reddit.com` queries, so first-person Reddit voice is missing from these notes.
- **Many web sources are vendors.** Metricgram, Qualtir, Varta, Mava, Brand24 and Nuelink all sell competing tools. They are flagged **[VENDOR]** because their claims are self-interested.

**Quote reliability labels:**
- **[GH-VERBATIM]**: text copied from a GitHub issue body or repo description through the API. Exact.
- **[VERBATIM-TITLE]**: the exact page or link title shown by search.
- **[SNIPPET]**: text the search result showed as a quotation. Probably verbatim, but not checked against the full page.
- **[PARAPHRASE]**: the search tool's summary. **Not a quote.**
- Translations from Chinese are mine and marked "(transl.)".

---

## Key Question 1: What are the biggest pains of running a Telegram community or group, what tools do admins use today, and what do they complain about?

### Takeaway
The dominant admin pain is **spam and scams that keep changing shape**. Spam now arrives as forwarded messages bots can't parse, "Thank you" quote-replies and image-only posts. Scammers also run fake "verification" bots that impersonate the Safeguard portal. Rule-based bots (Rose, Combot, Shieldy, captcha bots) and Telegram's on/off Aggressive Anti-Spam leave a gap that admins fill by hand around the clock. The open-source anti-spam bot tg-spam has started adding LLM checks.

Secondary pains:
- false positives that are hard to audit
- managing many chats with separate bots and configs
- bot noise in the group itself
- newcomers asking the same questions over and over
- multilingual members
- appeals when Telegram itself bans a community

As of May–June 2026, Telegram is moving into this space itself with **Guest Bots** and **AI Guardians for Groups**.

### Cited Findings
**Spam and scam pressure (the core pain)**
- **Spam is evolving past keyword bots.** A 2026 DEV post argues spam operations have become harder to catch and that many keyword- and regex-based anti-spam bots miss them. It suggests account age and response-pattern signals instead [PARAPHRASE]. Title: "5 levels of Telegram spam your anti-spam bot isn't catching" [VERBATIM-TITLE, from the URL slug]. — [DEV Community, 2026](https://dev.to/alexey_leshchenko_fc0ec66/5-levels-of-telegram-spam-your-anti-spam-bot-isnt-catching-3311)
- **New spam formats break existing bots (tg-spam GitHub issues, all [GH-VERBATIM]):**
  - "We've encountered a message type in Telegram that bypasses the antispam bot… The message visually appears forwarded (e.g. "Forwarded from"), but: It is not detected as forwarded by the bot. **The /spam command does not remove the message.**" — [umputun/tg-spam #299, 2025-05-15](https://github.com/umputun/tg-spam/issues/299)
  - "There's a new type of spam consisting of only a "Thank you" message as a quote-reply to another channel." — [tg-spam #376, 2026-03-03](https://github.com/umputun/tg-spam/issues/376)
  - "Add support for detecting spam in edited messages" (title). — [tg-spam #308, 2025-06-25](https://github.com/umputun/tg-spam/issues/308)
- **Admins are adding LLMs to spam detection.** tg-spam has an OpenAI checker with a "veto mode". Issues ask to "Add ability to use custom prompts for open ai checker" [GH-VERBATIM title] ([#263, 2025-03-07](https://github.com/umputun/tg-spam/issues/263)) and report breakage when model APIs change ([#466, 2026-09-29](https://github.com/umputun/tg-spam/issues/466); [#452, 2026-09-16](https://github.com/umputun/tg-spam/issues/452)).
- **Fake verification bots are a crypto-group attack vector [PARAPHRASE].** Coverage dates to about January 2025; the exact date was not shown in the snippets.
  - Scam Sniffer reported scammers who pose as crypto influencers on X and invite people to Telegram groups. There, members are told to "verify" through a typosquatted bot, "OfficiaISafeguardBot" (capital I in place of lowercase l). The bot pushes clipboard-injected PowerShell malware that can steal wallet keys.
  - Scam Sniffer reported a 2,000% rise in such malicious Telegram group scams since November [VERBATIM-TITLE fragment: "malicious telegram group scams have increased 2000 since november scam sniffer"].
  - Sources: [Cointelegraph](https://cointelegraph.com/news/telegram-verification-bots-carry-crypto-stealing-malware/); [Cointelegraph (Scam Sniffer)](https://cointelegraph.com/news/malicious-telegram-group-scams-have-increased-2000-since-november-scam-sniffer); [MalwareTips "Telegram Safeguard Scam EXPOSED: Fake Bot Drains Crypto Wallets"](https://malwaretips.com/blogs/telegram-safeguard-scam/); [PCrisk](https://www.pcrisk.com/removal-guides/34117-fake-telegram-safeguard-scam)
- **Verification doesn't stop scam bots, and appeals can fail [PARAPHRASE].** An It's FOSS writer said scam and phishing bots kept getting into their community group despite a verification step. The group was later wiped out, apparently after mass reporting, and Telegram had not answered their appeal as of 2025-10-14. Title: "Telegram, Please Learn Who's a Threat and Who's Not" [VERBATIM-TITLE]. — [It's FOSS, Oct 2025](https://itsfoss.com/news/telegram-unfair-community-ban/)
- **Crypto groups need 24/7 coverage [VENDOR].** "Crypto groups are prime targets for scam links, phishing attempts, and bot attacks." "Markets never sleep, and neither does your group. You can't moderate around the clock." [SNIPPET]. — [Metricgram crypto solutions page, undated](https://www.metricgram.com/solutions/crypto-telegram-groups)
- **An unsourced vendor statistic.** Metricgram claims over 60% of admins call spam their biggest moderation challenge. The page gives no source [PARAPHRASE]. — [Metricgram anti-spam bots 2026](https://metricgram.com/blog/telegram-anti-spam-bots)

**Telegram's own tooling and its limits**
- **Aggressive Anti-Spam (December 2022, groups with 200+ members) [PARAPHRASE]:**
  - It is a single on/off toggle with no other settings, and it only analyses messages, not joins or reactions.
  - A tginfo guide calls it experimental and says it "often triggers incorrectly", advising active moderators to leave it off.
  - Members usually can't see whether it is on, so a ban can seem to come out of nowhere.
  - Sources: [tginfo "Aggressive Anti-Spam"](https://tginfo.me/?p=7964); [Telegram API docs: native antispam](https://core.telegram.org/api/antispam). The docs show admins report false positives through `channels.reportAntiSpamFalsePositive`.
- **Guest Bots (Telegram update of 2026-05-07) [PARAPHRASE]:**
  - Bots, including AI assistants, can be tagged by username in private or group chats without being members.
  - They can access only the message where they were mentioned and replies to it, not the full history or the member list.
  - The same release added Chat Automation (a bot replies on a user's behalf in chats the user picks), bot-to-bot communication, streaming responses, poll statistics, and a way for admins to remove a specific user's reactions.
  - Sources: [LatestLY](https://www.latestly.com/technology/telegram-update-chat-automation-ai-bot-to-bot-communication-and-11-new-features-introduced-check-details-7420769.html); [Telegram Evolution timeline](https://telegram.org/evolution)
- **AI Guardians for Groups (Telegram blog dated 2026-06-11) [PARAPHRASE]:**
  - AI bots can act as group admins that process join requests.
  - They can use Mini App interfaces to screen applicants, for example by requiring a quiz before someone can comment.
  - Coverage frames this as aimed at large groups prone to spam.
  - Title: "Telegram June update: Smartwatch Apps, Rich Text for Bots, AI Guardians for Groups, and Much More" [VERBATIM-TITLE].
  - Sources: [ElevenForum copy of the Telegram blog](https://www.elevenforum.com/t/telegram-june-update-smartwatch-apps-rich-text-for-bots-ai-guardians-for-groups-and-much-more.47480/); [Blockchain.news](https://blockchain.news/news/telegram-smartwatch-apps-ai-tools-groups); [Telegram Evolution](https://telegram.org/evolution)
- **Bad actors use gating to dodge enforcement [PARAPHRASE].** Check Point found criminal groups using "Request to Join" gating to keep automated moderation bots out, and creating backup channels in advance so they can rebuild after takedowns. — [TechEconomy, March 2026](https://techeconomy.ng/telegrams-record-43-5-million-channels-takedowns-fail-to-stop-cybercriminals/)

**Third-party admin tools in use, and what's said about them**
- **Rose (@MissRose_bot)** is a free, closed-source rule-enforcement bot: locks, blocklists, welcome messages, CAPTCHA, and "federations" for shared bans. Its FAQ (May 2026) reports **1B total users, 24M total groups, 55M MAU and 2M monthly active groups** [PARAPHRASE]. An older third-party figure is 600M users across 14M chats. — [missrose.org FAQ](https://missrose.org/FAQ/); [Metricgram Rose alternative [VENDOR]](https://metricgram.com/alternatives/rose-bot)
  - A competitor says Rose "does exactly what it is configured to do, with no judgment", and that admins look for alternatives when their moderation needs change, not because Rose fails [PARAPHRASE, VENDOR]. — [Varta blog](https://varta.pages.dev/blog/rose-alternative-telegram-ai-moderation)
  - Metricgram says Rose "lacks analytics and gamification" [PARAPHRASE, VENDOR]. — [Metricgram](https://metricgram.com/alternatives/rose-bot)
- **Combot** began as analytics and now does moderation, automations, scheduling, AI answers, an API, and the CAS (Combot Anti-Spam) shared spammer database.
  - Its homepage lists "Groups 480,000+, Channels 110,000+, Users 800,000+" [SNIPPET, undated]. — [combot.org](https://combot.org/); [cas.chat](https://cas.chat)
  - A competitor's comparison says: "Best for: Channel owners and marketers who need public analytics and competitive intelligence. Not ideal as your primary group management tool." [SNIPPET, VENDOR]. — [Metricgram comparison 2026](https://www.metricgram.com/blog/telegram-group-management-tools-compared)
- **Shieldy** is presented as the fastest setup: add it and promote it to admin with delete and ban rights [PARAPHRASE, VENDOR]. **GroupHelp** offers moderation plus basic stats through /trend, /graphic and /top10. No usage figure was found for GroupHelp [PARAPHRASE]. — [Metricgram anti-spam bots](https://metricgram.com/blog/telegram-anti-spam-bots); [Metricgram GroupHelp alternative](https://www.metricgram.com/alternatives/grouphelp)
- **Self-hosted bots:** tg-spam, eGenix Antispam Bot (v0.7.1, May 2025), hCaptcha bot, CheeseSpamBot and the tg-captcha-bot variants all need admin rights to delete and ban. — [tg-spam](https://github.com/umputun/tg-spam); [eGenix](https://www.egenix.com/company/news/eGenix-Antispam-Bot-for-Telegram-0.7.1-GA.html); [CheeseSpamBot](https://cheeserobot.org/cheesespambot)

**Operational complaints admins file against their tools (all [GH-VERBATIM])**
- **Running many chats.** "The main issue with the current approach of running multiple instances of tg-spam is the need to create separate bots, set up and potentially synchronize configurations, samples, and all other data. However, if you manage multiple chats, it could be advantageous to use a single instance". This is the most-reacted tg-spam issue (+8). — [tg-spam #100, 2024-07-24](https://github.com/umputun/tg-spam/issues/100)
- **Auditing false positives.** "It's hard to distinguish false positives when a user is banned for the image without text, as there's no image forwarded to admin group. You have to dig into recent actions in the main group and match the time to figure out what's what." — [tg-spam #181, 2024-11-27](https://github.com/umputun/tg-spam/issues/181)
- **Bot clutter in the chat itself.** "Auto delete bot messages" ([tg-spam #175, 2024-11-14](https://github.com/umputun/tg-spam/issues/175)); "Add the ability to delete the system message about joining a group" ([tg-spam #92, 2024-06-03](https://github.com/umputun/tg-spam/issues/92)).
- **A long-standing ask that bots stay quiet for members (older evidence, 2020):** "Can it be possible to add a command / funktion… that the bot just answer commands from the admins in the group? If 200 user testing the command /help it is very *piiiiiiiiip* ;)" — [J-Rios/TLG_JoinCaptchaBot #47, 2020-06-05](https://github.com/J-Rios/TLG_JoinCaptchaBot/issues/47)
- **Permission tiers for AI agents in messengers.** "Hermes Agent currently has a **binary authorization model** for gateway platforms: users are either fully authorized (all commands, all tools, full terminal access) or completely blocked." The issue proposes Owner → Admin → User → Guest tiers for Telegram and other messengers (+26). — [NousResearch/hermes-agent #527, 2026-03-06](https://github.com/NousResearch/hermes-agent/issues/527)

**Newcomers, repeated questions, multilingual members, analytics and events**
- **Repeated newcomer questions [PARAPHRASE, VENDOR].** New users join and ask the same questions over and over: how to get started, where the documentation is, which pricing tier they need. The claimed 40–60% cut in first-line queries is a vendor figure. — [Qualtir use cases](https://qualtir.com/blog/ai-assistant-telegram-group-use-cases)
- **How repetitive support is in web3 communities [PARAPHRASE, VENDOR, small unspecified sample].** Most people Mava spoke with said 50–75% of incoming questions are "standard and easy to answer", such as newcomer wallet setup. Mava claims its AI handles up to 60%. — [Mava "customer support in web3 is broken"](https://mava.app/blog/customer-support-in-web3-is-broken); [Mava AI-powered community support](https://www.mava.app/ai-powered-community-support)
- **Hosted FAQ agents** answer "from your rules, FAQ, and pinned posts" and reply when mentioned or replied to [PARAPHRASE]. — [Quickchat.ai Telegram](https://quickchat.ai/telegram)
- **Engagement, not just moderation [SNIPPET].** A crypto community guide says: "They treat Telegram as a broadcast channel. Many projects post announcements and ignore replies. This kills engagement." The search tool did not pin which page this came from; [flexe.io](https://flexe.io/blog/telegram-management-for-cryptos-growth-strategies/) or [lkiconsulting.io](https://lkiconsulting.io/?p=34689) are the candidates.
- **Multilingual groups have no native auto-translate.**
  - A Telegram suggestions-platform post asks for: "Capability for users in group chats to set messages automatically translate from all or specific languages to their set language." [SNIPPET, undated; no evidence it has shipped]. — [bugs.telegram.org #16062](https://bugs.telegram.org/c/16062/8)
  - Workarounds: TgTranslator (auto, forwards or manual modes), the Yandex Translate bot, LingoComm, and an LLM translator bot that "must be added to the group as an admin" [SNIPPET]. — [TgTranslator](https://github.com/5l1v3r1/tgtranslator); [Yandex bot help](https://yandex.com/support/translate/bot.html); [soos3d/ai-tg-translator-bot](https://awesome.ecosyste.ms/projects/github.com%2Fsoos3d%2Fai-tg-translator-bot)
- **Events and coordination primitives are new.** Telegram added collaborative group checklists in July 2025 (v11.13), and poll vote graphs (after 100 votes) plus poll access limits in May 2026 [PARAPHRASE]. — [Business Today, 2025-07-04](https://www.businesstoday.in/technology/news/story/telegram-rolls-out-checklists-suggested-posts-monetisation-tools-for-creators-483083-2025-07-04); [LatestLY, May 2026](https://www.latestly.com/technology/telegram-update-chat-automation-ai-bot-to-bot-communication-and-11-new-features-introduced-check-details-7420769.html)
- **Moderator burnout (adjacent, non-Telegram) [PARAPHRASE].** A University of Michigan study of volunteer moderators on Reddit and Facebook found burnout driven by conflict between moderators, time constraints and daily exposure to toxicity. It compared moderators to crisis-hotline volunteers (New Media & Society, 2022). — [U-M News](https://news.umich.edu/online-content-moderators-likely-to-experience-burnout-u-m-study-suggests/)
- **Paid moderation is a job category.** Freelance and web3 job boards list round-the-clock Telegram moderation roles. One profile claims "Resolved an average of 10+ user conflicts per week" [SNIPPET; the exact profile was not pinned]. — [CryptoJobsList Telegram moderators](https://cryptojobslist.com/talent/telegram-moderator)

### Inferences
- **Admins don't lack moderation bots.** Rose alone claims 2M monthly active groups. What they lack is **judgment**: catching new spam formats, explaining why something was removed, and answering the human questions that rule bots can't. That gap is where an LLM agent like Mira's Team Agent fits. The admin keeps their Rose-style rules; the agent handles ambiguous cases and repeated questions.
- **Telegram's AI Guardians and Guest Bots (May–June 2026) raise the bar.** Join screening is becoming native. An agent should therefore compete on *post-join* value (answers, summaries, onboarding, multilingual help) and on *explainable* moderation, not on captcha.
- **Bot trust is a scarce resource in crypto groups.** Fake "Safeguard" verification bots mean any bot that asks members to "verify", "connect" or "click" is suspect. Members already distrust "TG spammy" bots (see the background note).
- **Multi-chat admins are a distinct, high-value sub-segment.** tg-spam #100 is the most-reacted issue. A single place to configure policy across many groups is a concrete unmet need.

### Gaps
- No first-person Reddit or Telegram-chat complaints about Rose, Combot, GroupHelp, Shieldy, Safeguard, Chatkeeper or Guardian were retrievable. The only critiques found come from competitors' marketing.
- No independent survey of Telegram admins exists in the results: time spent, team size, paid vs volunteer, tool stack share.
- No data was found on how admins handle events (meetups, AMAs) inside Telegram, beyond feature launches.
- The exact capabilities and adoption of Telegram's AI Guardians, and whether third-party bots like Mira can fill that role, were not confirmed. The official blog text was not readable.

---

## Key Question 2: What do ordinary members of busy groups struggle with?

### Takeaway
Members of busy groups are **overloaded and cope by muting**. Roughly 40% of US and UK respondents say group chat volume overwhelms them. Telegram heavy users join so many groups that they hit the 500-membership cap. Telegram's native AI summaries (January 2026) cover only long channel posts and Instant View, not group conversations. Members therefore reach for self-hosted summarizer bots and agent tools. Their stated job is "catch up on what matters", with topics separated and noise filtered out, without scrolling through hundreds or thousands of unread messages.

### Cited Findings
- **Overwhelm is common.** "40% of the respondents indicating they were overwhelmed with group chat messages and notifications" [SNIPPET; US and UK survey]. — [Phys.org, November 2023](https://phys.org/news/2023-11-overwhelmed-group-chat-messages-youre.html)
- **Group chat as a chore.** "Group Messaging "Feels Like A Part Time Job" According to 42% of Americans" [VERBATIM-TITLE; survey date and method not shown]. — [Secure Data Recovery](https://www.securedatarecovery.com/blog/group-messaging-feels-like-job)
- **Muting is the default coping behaviour [PARAPHRASE]:**
  - A Viber etiquette survey found one in six Americans mute every group chat as soon as they're added, and one in four mute later if messages are nonstop. The results did not pin which page reported it; [Brit + Co](https://www.brit.co/muting-the-group-text) or [Android Authority poll](https://www.androidauthority.com/mute-group-chats-messaging-apps-poll-3357356/) are the candidates.
  - An Irish Censuswide survey (n=1,004) found 24% have muted their work group and 16% a sport or fitness group [PARAPHRASE, undated]. — [Irish Tech News](https://irishtechnews.ie/pure-telecom-survey-reveals-38-percent-of-adults/)
- **Telegram heavy users hit the membership cap [PARAPHRASE].** On Telegram's suggestions tracker, many users report the "500 groups and channels" join limit. Telegram points to the doubled limit for Premium. — [bugs.telegram.org #850](https://bugs.telegram.org/c/850)
- **Muting doesn't remove the unread burden (older Telegram Desktop requests):**
  - Muted groups still count toward unread totals, and users ask for an option to "completely ignore the group / channel" [SNIPPET]. — [tdesktop #775](https://www.github.com/telegramdesktop/tdesktop/issues/775)
  - "when some one using telegram with many-many group, sometimes the unread message gradually increased when he can't read all the message… the unread counter a bit annoying" [GH-VERBATIM; 2015, long-standing]. — [tdesktop #1067](https://github.com/telegramdesktop/tdesktop/issues/1067)
  - "[Feature Request] Add the ability to mark a folder as read/unread" [GH-VERBATIM title, 2020]. — [tdesktop #7507](https://github.com/telegramdesktop/tdesktop/issues/7507)
- **Thousands of unread messages as a use case for agents (all [GH-VERBATIM]):**
  - "A user may have thousands (or tens of thousands) of unread messages across several groups in a Telegram folder and want to process or summarize all of them." — [chigwell/telegram-mcp #162, 2026-07-23](https://github.com/chigwell/telegram-mcp/issues/162)
  - "'Summarize my unread messages' is a headline workflow for agents" — [neoromantic/telegram-sync-cli #25, 2026-10-21](https://github.com/neoromantic/telegram-sync-cli/issues/25)
- **Many DIY group summarizers exist (repo descriptions, [GH-VERBATIM]):**
  - "Summarize group chat with AI, LLM && query group chat, FREE to deploy your own…" (★205, pushed 2026-11-02). — [asukaminato0721/telegram-summary-bot](https://github.com/asukaminato0721/telegram-summary-bot)
  - "summarizes messages from a group chat based on a selected time range (e.g., last 12 hours, 1 day, 1 week)… making it easier for users to catch up on important discussions" (2025). — [sirmirzaei/Telegram_Summarizer_Bot](https://github.com/sirmirzaei/Telegram_Summarizer_Bot)
  - "posts a daily AI-generated digest of your group chat — discussion topics with links to where each conversation started" (2026). — [lupikovoleg/summary-bot](https://github.com/lupikovoleg/summary-bot)
  - "turns chat/group/channel history into per-day LLM summaries — unread, last N, or date range" (2026). — [ant0n-z/telechatsum](https://github.com/ant0n-z/telechatsum)
  - Built for groups "that generate way too many messages to be reviewed manually" [SNIPPET]. — [dev0x13/telegram-chat-summarizer](https://github.com/dev0x13/telegram-chat-summarizer)
- **What members want from a summary (Chinese issues on the most-starred summarizer, [GH-VERBATIM], transl.):**
  - Idea log, first item: "表示消息过多看不完" ("people say there are too many messages to read through"). — [#2, 2024-12-04](https://github.com/asukaminato0721/telegram-summary-bot/issues/2)
  - Quality complaints: "主题混杂… 价值判断缺失：将低信息密度内容（如'喝了冰美式后手抖'）与核心讨论等同处理… 技术细节丢失：关键解决方案…未能突出显示" ("topics get mixed… no value judgment: low-information chatter (e.g. 'my hands shake after an iced Americano') is treated the same as core discussion… technical details lost: key solutions are not highlighted"). — [#14, 2025-02-05](https://github.com/asukaminato0721/telegram-summary-bot/issues/14)
  - Reply threading: replies to topic A posted during topic B get mixed into B's summary; links are suggested as a fix. — [#15, 2025-02-07](https://github.com/asukaminato0721/telegram-summary-bot/issues/15)
  - Cost and scale: "upload 2000+ messages again and again is crazy, need better way." — [#6, 2024-12-05](https://github.com/asukaminato0721/telegram-summary-bot/issues/6)
  - Setup is a barrier for non-developers: a request for a "傻瓜式部署教程" ("idiot-proof deployment tutorial"). — [#11, 2025-01-18](https://github.com/asukaminato0721/telegram-summary-bot/issues/11)
- **Telegram's native summaries skip group chats [PARAPHRASE].** The January 2026 update summarises long channel posts and Instant View pages on Cocoon. No group-conversation summary was found. — [Telegram blog "AI Summaries, New Design and More"](https://telegram.org/blog/new-design-ai-summaries); [AlternativeTo, January 2026](https://alternativeto.net/news/2026/1/telegram-introduces-instant-ai-summaries-for-long-posts-and-full-liquid-glass-design-on-ios)
- **Old native workarounds.** Admins can use Slow Mode (since 2019) to make chats readable [PARAPHRASE]. Members can only mute, archive or scroll. — [Android Police, 2019](https://www.androidpolice.com/2019/08/09/telegram-5-10-adds-silent-messages-slow-mode-and-more/); [How-To Geek](https://www.howtogeek.com/711527/how-to-mute-chats-groups-and-channels-in-telegram/)
- **Long messages clutter groups.** When a long message is split: "This clutters the chat, breaks the logical flow of the text and looks messy - especially in group chats where other people's messages can get mixed in between the parts" [GH-VERBATIM]. — [tdesktop #30530, 2026-04-04](https://github.com/telegramdesktop/tdesktop/issues/30530)
- **The catch-up job resonates with Mira (from the background note).** An X user wrote: "Product that summarized 200 group chat messages while I was away in 10 seconds. It's called @trymira…" [VERBATIM-TITLE]. — [X @defileo, 2026-07-03](https://x.com/defileo/status/2073053615988830333)

### Inferences
- **The member's job is triage, not just a summary.** Members want to know what was decided, what needs them (mentions, questions addressed to them), and which links or files matter, with chatter filtered out and threads kept apart. The Chinese summarizer issues are unusually explicit about this quality bar.
- **Catch-up should be private, not posted to the group.** A muted member wants to catch up without adding noise for everyone else. A DM digest or an ephemeral private reply fits this better than a public summary. Telegram's ephemeral messages for bots support this pattern (see `telegram_platform_and_agent_ux.md`).
- **Self-hosted summarizers prove demand but need technical skill.** Gemini or OpenAI keys, Cloudflare D1, deployment: that setup barrier is Mira's opening for a zero-setup "@mira catch me up".

### Gaps
- No Telegram-specific survey of member behaviour was found: share of muted groups, average groups per user, time spent catching up.
- No Reddit or r/Telegram first-person posts about FOMO were retrievable.
- No evidence was found on whether members prefer public or private summaries. That is an inference to test.

---

## Key Question 3: What do channel owners and creators need?

### Takeaway
Channel owners face a **growth problem**: Telegram has no recommendation feed, and channels are a crowded market of 11.3M+. They also face a **production problem**: native scheduling is basic, and most mainstream schedulers don't support Telegram. Their **monetization stack** is new and fragmented: a 50% ad revenue share, Star reactions, paid posts, suggested posts and paid messages. Third-party analytics (TGStat, Telemetr, Combot) and AI "autopilot" posting tools already exist. The tools that state an explicit "approve before publish" model suggest creators want control over what goes out under their name.

### Cited Findings
- **Discoverability.** "Unlike YouTube or TikTok, Telegram has no recommendation algorithm to surface your content to non-subscribers. You must drive traffic from other platforms initially." [SNIPPET, VENDOR]. — [Brand24 "Top 5 Telegram Analytics Tools for 2026", updated 2026-08-27](https://brand24.com/blog/telegram-analytics-tools)
  - Private channels are not indexed by search engines; public ones appear in Google and Telegram's global search [PARAPHRASE, VENDOR]. — [Schedulala](https://schedulala.com/blog/telegram-channel-seo)
- **Competition.** "Back in 2020, there were just 1.7M channels. By 2025 — already 11.3M+." The same source says 2M+ new channels are created a year [SNIPPET; Telemetr's own market research]. A Ukrainian 2025 market report charts 10.1M (2024) and 11.3M (2025). — [Telemetr news](https://telemetr.me/content/telemetrio_news); [Telegram market research 2025 (PDF, December 2025)](https://skilky-skilky.info/wp-content/uploads/2025/12/Doslidzhennia-rynku-Telegram-2025.pdf)
- **Scheduling gaps:**
  - "most mainstream schedulers (Buffer, Hootsuite, Later) do not support it at all." [SNIPPET, VENDOR]. — [Nuelink blog 2025](https://blog.nuelink.com/social-media-tools-with-telegram-support/)
  - "Native scheduling works well for individual posts planned a few days out. Its limitations appear when managing a high-volume calendar or coordinating publishing across multiple platforms simultaneously." [SNIPPET; the source page was not pinned, probably Nuelink's 2026 scheduling-tools article]. — [Nuelink help](https://help.nuelink.com/article/228-best-telegram-scheduling-tools)
- **Monetization primitives (dates from coverage):**
  - Ad revenue share: channel owners get 50% of Sponsored Messages revenue, paid in Toncoin. Announced in February 2024 [PARAPHRASE]. Guides say eligibility starts at 1,000+ subscribers. — [TechCrunch, 2024-02-28](https://techcrunch.com/2024/02/28/telegram-is-launching-ad-revenue-sharing-next-month-using-toncoin); [InviteMember 2025](https://blog.invitemember.com/telegram-monetization-2025-does-telegram-pay-channel-owners/)
  - Star reactions: "100% of these Star Reactions go directly to the content makers" [SNIPPET]. Launched with Super Channels and subscriptions in August 2024. — [Telegram blog](https://www.telegram.org/blog/superchannels-star-reactions-subscriptions)
  - Suggested posts (July 2025, v11.13): users can suggest a post to a channel, free or with a Stars or TON offer. It was Premium-only at launch. Telegram takes a commission set by a `stars_suggested_post_commission_permille` config value [PARAPHRASE]. — [Business Today, 2025-07-04](https://www.businesstoday.in/technology/news/story/telegram-rolls-out-checklists-suggested-posts-monetisation-tools-for-creators-483083-2025-07-04); [Telegram API: suggested posts](https://core.telegram.org/api/suggested-posts)
  - Paid messages: channels and supergroups can charge Stars per incoming message [PARAPHRASE]. — [Telegram API](https://core.telegram.org/constructor/messageActionPaidMessagesPrice)
  - No 2025 or 2026 totals for creator payouts were found.
- **Analytics.** Third-party tools fill gaps in Telegram's native statistics: TGStat for growth and benchmarking, LiveDune for post-level insight and scheduling, Telemetr for its catalogue (9.4M channels and 11.7B posts in its database) [PARAPHRASE]. — [Brand24](https://brand24.com/blog/telegram-analytics-tools); [eLama](https://elama.ru/blog/servisy-analitiki-telegram/)
- **AI content tools for channels already exist [PARAPHRASE, VENDOR]:**
  - Creaflow auto-posts from RSS, Reddit and Twitter, rephrasing with GPT in "12 writing styles, 24/7", with a calendar and analytics. — [G2 Creaflow](https://www.g2.com/sellers/creaflow)
  - PostEverywhere's AI Studio drafts posts from rough notes, and "you keep control". — [posteverywhere.ai](https://posteverywhere.ai/telegram)
  - Telega's autoposter "does not publish anything without your approval" [PARAPHRASE; possibly verbatim]. — [Telega](https://telega.io/blog/autoposter-bot)
  - A separate, unrelated "Mira – AI autopilot for your Telegram channel" (usemira.pro) finds and drafts channel posts. — see the background note `user_sentiment_reviews.md`, Key Question 0.
- **Posting needs admin rights.** Outside tools can post only through a bot that is a channel admin with the post-messages right [PARAPHRASE]. — [Telega](https://telega.io/blog/autoposter-bot)

### Inferences
- **The channel owner's job is "keep a steady stream of on-brand posts and grow without a feed".** Drafting, scheduling and cross-promotion matter more to them than moderation. Comment-section moderation (a linked discussion group) brings them into persona 1 territory.
- **Draft, approve, publish.** Vendors stress approval before publishing, a sign that creators distrust fully autonomous posting. An agent should default to drafts that wait for approval, never auto-publish.
- **A monetization co-pilot is a gap.** Explaining which levers apply (ads above 1,000 subscribers, Star reactions, paid posts, suggested posts) and tracking Stars earned is unaddressed in the tools found. This fits Mira's Stars-native positioning.

### Gaps
- No first-person creator complaints (Reddit, X) were retrievable.
- No data was found on what share of channel owners use AI to draft posts.
- No creator earnings distribution for Stars or ads was found.
- Whether channel owners would want an agent inside their discussion group, as distinct from a drafting tool in DM, is untested.

---

## Key Question 4: How do people feel about AI bots in groups (acceptance, privacy of members who didn't opt in, backlash), and what do admins want to control?

### Takeaway
Attitudes split. People welcome AI that saves time when **they** call it. They react badly when AI is **pushed in by default, can't be turned off, speaks unprompted, reads everything, or behaves like a person**.

Telegram's own AI rollouts in 2026 drew opt-out demands:
- an "Ability to turn off AI text editor" issue on GitHub with 181 reactions
- the "Slop button" complaint
- a request to opt out of Cocoon AI summaries

Elsewhere:
- WhatsApp's forced Meta AI button drew "fierce backlash".
- Meta AI's unprompted reply in a parents' Facebook group (it claimed to have a disabled, gifted child) became a reference case for AI intruding in communities.
- Otter.ai was sued in August 2025 for asking only the meeting host, not all participants.

The control pattern that keeps emerging:
- invocation by mention only, with Telegram's Guest Bots limited to the tagged message
- admin-level switches to block AI in a chat, as WhatsApp's Advanced Chat Privacy does
- per-member opt-out, as in Discord's 2026 summaries
- role tiers deciding who may command the agent
- memory kept separate between contexts

### Cited Findings
**Telegram users push back on default-on AI (2026, [GH-VERBATIM])**
- "Ability to turn off AI text editor [Completed. Settings > Advanced > Experimental settings.]" had **+181 reactions and 154 comments**. A maintainer reported a hide option added in 6.7.4. — [telegramdesktop/tdesktop #30504, 2026-04-01](https://github.com/telegramdesktop/tdesktop/issues/30504)
- "No option to disable AI prompts". The body reads: "Type anything longer than 3 lines… Slop button comes up… No option to turn off slop button???… Expected behaviour Slop being optional" (headings flattened). — [tdesktop #30533, 2026-04-06](https://github.com/telegramdesktop/tdesktop/issues/30533)
- "Some people don't like AI. Similar to the other AI button (#30504), the Cocoon AI Summary in instant views should be able to be disabled… This could be made opt-in instead". — [tdesktop #30855, 2026-06-20](https://github.com/telegramdesktop/tdesktop/issues/30855)
- The background note adds the "huge betrayal" comment, a "compulsory AI" petition and Grok-deal distrust. — `user_sentiment_reviews.md`, Key Question 10.

**Backlash when AI is pushed into conversations elsewhere**
- **WhatsApp.** "WhatsApp says forcing blue Meta AI circle on everyone is a 'good thing' despite fierce backlash" [VERBATIM-TITLE]. — [TechRadar](https://www.techradar.com/computing/websites-apps/whatsapp-says-forcing-blue-meta-ai-circle-on-everyone-is-a-good-thing-despite-fierce-backlash)
  - Advanced Chat Privacy (April 2025) lets a chat block participants from invoking Meta AI [PARAPHRASE]. — [heise](https://heise.de/-10538187)
  - A fact-check (2025-08-20) rated as false the viral claim that admins *must* enable it to keep Meta AI out. Meta AI sees only what a user tags or forwards to it [PARAPHRASE]. — [Fact Crescendo](https://english.factcrescendo.com/2025/08/20/whatsapp-meta-ai-advanced-chat-privacy-fact-check/)
  - EFF notes that if *anyone* in the chat uses "Summarize", the chat text goes through Meta's servers [PARAPHRASE]. — [EFF](https://www.eff.org/node/111108)
  - The viral rumour itself shows group members' anxiety about AI reading shared chats.
- **Meta AI in a Facebook parents' group (April 2024).** It replied unprompted after an hour without a human reply: "We've had a positive experience with the citywide program, specifically with the program at The Anderson School. The teachers and staff were knowledgeable and supportive of my child's unique needs and abilities" [SNIPPET]. The feature responds "when tagged or when no response is received after a certain time" [PARAPHRASE]. — [404 Media](https://404media.co/facebooks-ai-told-parents-group-it-has-a-disabled-child); [Business Today, 2024-04-18](https://www.businesstoday.in/amp/technology/news/story/meta-ai-on-facebook-thinks-it-has-a-gifted-disabled-child-425886-2024-04-18)
  - Follow-on framing: "AI chatbots are intruding into online communities where people are trying to connect with other humans" [VERBATIM-TITLE, partly truncated]. — [Simon Willison, 2024-06-09](https://www.simonwillison.net/2024/Jun/9/ai-chatbots-are-intruding-into-online-communities-where-people-a); [Discover Magazine](https://www.discovermagazine.com/technology/ai-chatbots-are-intruding-into-online-communities)
- **ChatGPT group chats (November 2025) [PARAPHRASE].** A Business Insider tester ran three group chats with friends. Unless a message was addressed to someone else, the AI jumped in with long, padded, hedging replies, and the tester raised privacy concerns. — [Business Insider, via scour.ing](https://scour.ing/p/https://www.businessinsider.com/chatgpt-group-chats-why-needed-i-tried-2025-11)
  - OpenAI says group chats don't use or create personal memory, and that the model decides when to respond or waits for a tag. Groups hold up to 20 people. — [Axios, 2025-11-15](https://axios.com/2025/11/15/chatgpt-openai-group-chats); [TechRadar](https://www.techradar.com/ai-platforms-assistants/chatgpt/chatgpt-enters-the-group-chat-globally)
- **Discourse.** An AI persona added to a multi-person DM "keeps replying to every message even not mentioned"; the thread closed without a clear way to remove it [SNIPPET, undated]. — [meta.discourse.org](https://meta.discourse.org/t/how-to-remove-ai-persona-from-a-multiple-person-dm/330438)
- **Discord:**
  - March 2023: AI-related privacy policy changes were reverted within about a day after backlash [PARAPHRASE]. — [GameSpot](https://www.gamespot.com/articles/discord-reverses-privacy-policy-changes-after-ai-backlash/1100-6512309/)
  - 2026: AI channel summaries for public servers' web pages are on by default for eligible channels. Admins control them, and individual members can opt out of having *their messages* included, but that does not turn the summaries off [PARAPHRASE; exact date not shown]. — [Mixed News](https://mixed-news.com/en/?p=38598)
- **Consent of participants who didn't opt in (adjacent precedent) [PARAPHRASE].** An August 2025 federal class action says Otter "typically asks only the host for permission" and not other participants, and that recordings were used for training. Otter's CEO: "If they accuse us, then they could accuse everyone else, all the tools you heard about doing meeting notes." [SNIPPET]. — [NHPR/NPR, 2025-08-15](https://www.nhpr.org/2025-08-15/class-action-suit-claims-otter-ai-secretly-records-private-work-conversations); [tl;dv summary](https://tldv.io/blog/ai-meeting-recorder-lawsuits/)

**Survey data on AI privacy attitudes (none is specific to group chats)**
- 58% of 1,944 US adults are uncomfortable with their conversations being used to train AI [PARAPHRASE]. — [DuckDuckGo / Spread Privacy, August 2026](https://spreadprivacy.com/ai-privacy-survey-aug26/)
- 48% would be less comfortable discussing sensitive personal topics with an AI than with a person (n=1,519) [PARAPHRASE]. — [Verasight, September 2025](https://data.verasight.io/ai/people-are-less-comfortable-raising-sensitive-topics-with-ai-than-with-another-person)
- Qualitative research: "This might sound like I'm wearing a tinfoil hat: knowledge workers' perceptions of privacy and surveillance in group-based communicative AI" [VERBATIM-TITLE; *Convergence*, December 2025; findings not visible]. — [metatoc](https://metatoc.com/papers/133981-this-might-sound-like-i-m-wearing-a-tinfoil-hat-knowledge-workers-perceptions-of-privacy-and-surveillance-in-group-based-communicative-ai)

**Platform-level controls that shape what members can expect**
- **Guest Bots** see only the message that tagged them and replies to it, not history or the member list (May 2026) [PARAPHRASE]. — [LatestLY](https://www.latestly.com/technology/telegram-update-chat-automation-ai-bot-to-bot-communication-and-11-new-features-introduced-check-details-7420769.html)
- **Bot privacy mode** is on by default: a bot sees only commands, mentions and replies. Bots with admin rights see everything. — see `user_sentiment_reviews.md`, Key Question 8 (Qualtir).
- **Multi-tenant memory is an open engineering problem.** "Multiplayer agentic AI is the future… Memory operations bypass the hook system entirely, making tenant isolation impossible without forking core" [GH-VERBATIM]. — [NousResearch/hermes-agent #34352, 2026-05-29](https://github.com/NousResearch/hermes-agent/issues/34352)
- **Mira's current group behaviour (from the background notes):** "Mira will introduce herself and join the conversation" on join. The default add link requests the `invite_users` and `manage_topics` rights. Moderation needs admin rights to delete, warn and mute. Group memory is "persistent shared context across participants". — `product_features_ux_screens.md`, Section 2; `user_sentiment_reviews.md`, Key Question 5.

### Inferences
**Adoption triggers for an AI agent in a group, as evidence suggests:**
1. Speaks only when called (a mention, a reply or a slash command).
2. Gives short answers.
3. Saves visible time (catch-up, FAQs, spam removal).
4. Gives the admin an off switch and scope controls.
5. Is transparent about what it reads and remembers.
6. Asks no "verify / connect wallet" actions of members.

**Rejection triggers:**
1. Unprompted replies, including "helpful" replies after silence (the Meta AI case).
2. Long, padded answers.
3. Claiming human experiences.
4. AI that can't be removed or opted out of.
5. Reading all messages without members knowing.
6. Training on group content.
7. Promotional or self-introduction noise.
8. Paywalls hit mid-group.

**What admins want to control** (inferred from the issues above):
- who can invoke the agent (admins only, everyone, or roles)
- trigger mode (mention-only vs proactive)
- which topics or threads it covers
- whether its messages self-delete
- moderation authority (suggest vs act), with an audit log that shows evidence
- memory retention and "forget"
- per-member opt-out
- disclosure to members ("this group uses Mira; here's what it sees")

**Members who didn't opt in are the latent risk.** Every precedent here (Otter, WhatsApp, Discord, Telegram AI buttons) turned on the people who didn't choose the AI. A Team Agent that announces its scope, offers per-member opt-out and defaults to Guest-Bot-like minimal visibility turns this risk into a trust signal.

### Gaps
- No Telegram-specific backlash against a third-party AI bot in a group was found, Mira or otherwise. The evidence is from adjacent platforms and Telegram's own AI.
- No survey measures how comfortable group members are with an AI that reads every message.
- Whether Mira's Team Agent runs in privacy mode or full-read mode by default, and what it tells members, was not verifiable.

---

## Key Question 5: Jobs-to-be-done statements with supporting evidence

### Takeaway
Fifteen job statements are listed below, each tied to evidence from Key Questions 1–4. The strongest-evidenced jobs are:
- **J1** catch up on a busy group without reading everything
- **J4** stop new kinds of spam without manual cleanup
- **J6** answer repeated newcomer questions
- **J10** keep AI under the admin's control and invisible to non-users

### Cited Findings
**Persona A: community admins and moderators**
- **J4. Stop new spam formats.** When new spam formats slip past my rule-based bot (fake forwards, "Thank you" quote-replies, image-only posts), I want something that judges messages by meaning and context, so I can stop hand-deleting spam at all hours. — Evidence: [tg-spam #299](https://github.com/umputun/tg-spam/issues/299), [#376](https://github.com/umputun/tg-spam/issues/376), [#263](https://github.com/umputun/tg-spam/issues/263); [DEV 2026](https://dev.to/alexey_leshchenko_fc0ec66/5-levels-of-telegram-spam-your-anti-spam-bot-isnt-catching-3311); [Metricgram crypto [VENDOR]](https://www.metricgram.com/solutions/crypto-telegram-groups)
- **J5. Audit removals quickly.** When the bot bans or removes someone, I want to see the evidence (the message, image and reason) in one place, so I can reverse false positives quickly and keep members' trust. — Evidence: [tg-spam #181](https://github.com/umputun/tg-spam/issues/181); [tginfo on Aggressive Anti-Spam false triggers](https://tginfo.me/?p=7964)
- **J6. Answer repeated questions.** When newcomers ask the same setup, documentation and pricing questions every day, I want them answered from our pinned posts and rules automatically, so moderators can spend time on real conversations. — Evidence: [Qualtir [VENDOR]](https://qualtir.com/blog/ai-assistant-telegram-group-use-cases); [Mava, 50–75% "standard" questions [VENDOR]](https://mava.app/blog/customer-support-in-web3-is-broken); [Quickchat](https://quickchat.ai/telegram)
- **J7. Manage many groups at once.** When I run several groups (regional, language or product groups), I want one place to set policies and share ban lists, so I don't configure and sync separate bots for each chat. — Evidence: [tg-spam #100 (most-reacted issue)](https://github.com/umputun/tg-spam/issues/100); Rose federations ([missrose.org](https://missrose.org/FAQ/))
- **J8. Keep scammers out without becoming suspect.** When scammers try to get in or pose as verification bots, I want joiners screened in a way members recognise as legitimate, so we block scammers without training members to click "verify" links. — Evidence: [Cointelegraph fake Safeguard](https://cointelegraph.com/news/telegram-verification-bots-carry-crypto-stealing-malware/); [Telegram AI Guardians, June 2026](https://www.elevenforum.com/t/telegram-june-update-smartwatch-apps-rich-text-for-bots-ai-guardians-for-groups-and-much-more.47480/); [It's FOSS, October 2025](https://itsfoss.com/news/telegram-unfair-community-ban/)
- **J9. Include multilingual members.** When members write in different languages, I want messages understandable to everyone without a separate group per language, so the community stays unified. — Evidence: [bugs.telegram.org #16062](https://bugs.telegram.org/c/16062/8); [TgTranslator](https://github.com/5l1v3r1/tgtranslator); [Yandex bot](https://yandex.com/support/translate/bot.html)
- **J10. Control the agent.** When I add an AI agent to my group, I want to decide who can call it, when it speaks, what it reads and remembers, and whether its messages self-delete, so it never embarrasses me or spams my members. — Evidence: [JoinCaptcha #47](https://github.com/J-Rios/TLG_JoinCaptchaBot/issues/47); [tg-spam #175](https://github.com/umputun/tg-spam/issues/175); [hermes-agent #527](https://github.com/NousResearch/hermes-agent/issues/527); [Meta AI parents-group incident](https://404media.co/facebooks-ai-told-parents-group-it-has-a-disabled-child)
- **J11. Keep the group alive.** When the group goes quiet or questions go unanswered, I want prompts, polls and reminders that keep people engaged, so the community doesn't turn into a dead broadcast channel. — Evidence: crypto guide snippet "Many projects post announcements and ignore replies. This kills engagement." [SNIPPET; source not pinned, see Key Question 1]; [poll stats, May 2026](https://www.latestly.com/technology/telegram-update-chat-automation-ai-bot-to-bot-communication-and-11-new-features-introduced-check-details-7420769.html); [checklists, July 2025](https://www.businesstoday.in/technology/news/story/telegram-rolls-out-checklists-suggested-posts-monetisation-tools-for-creators-483083-2025-07-04)

**Persona B: members of busy groups**
- **J1. Catch up.** When I come back to a muted group with hundreds or thousands of unread messages, I want a short, topic-separated recap of what was decided and what involves me, so I can rejoin without scrolling through everything. — Evidence: [telegram-mcp #162](https://github.com/chigwell/telegram-mcp/issues/162); [telegram-summary-bot #2, #14, #15](https://github.com/asukaminato0721/telegram-summary-bot/issues/14); [Phys.org, 40% overwhelmed](https://phys.org/news/2023-11-overwhelmed-group-chat-messages-youre.html); [@defileo on Mira](https://x.com/defileo/status/2073053615988830333)
- **J2. Find a buried answer.** When I need a link, file or answer that was posted weeks ago in a busy group, I want to ask in plain language and get the message with a jump link, so I don't have to scroll or re-ask and annoy people. — Evidence: [telegram-summary-bot "query group chat"](https://github.com/asukaminato0721/telegram-summary-bot); [lupikovoleg digest "with links to where each conversation started"](https://github.com/lupikovoleg/summary-bot). This is moderately supported; no direct user quote was found.
- **J3. Stay in groups without noise.** When I'm in dozens of groups but only care about some topics or mentions, I want to be told only when something relevant to me happens, so I can stay muted without FOMO. — Evidence: [bugs.telegram.org #850 (500-group cap)](https://bugs.telegram.org/c/850); [tdesktop #775](https://www.github.com/telegramdesktop/tdesktop/issues/775), [#1067](https://github.com/telegramdesktop/tdesktop/issues/1067); [Irish Tech News, mute rates](https://irishtechnews.ie/pure-telecom-survey-reveals-38-percent-of-adults/)
- **J12. Privacy as a non-user.** When someone adds an AI bot to a group I'm in, I want to know what it can see and to opt out of my messages being stored or used, so I keep the privacy I chose Telegram for. — Evidence: [tdesktop #30504](https://github.com/telegramdesktop/tdesktop/issues/30504), [#30855](https://github.com/telegramdesktop/tdesktop/issues/30855); [Discord per-member opt-out](https://mixed-news.com/en/?p=38598); [Otter lawsuit](https://www.nhpr.org/2025-08-15/class-action-suit-claims-otter-ai-secretly-records-private-work-conversations); [DuckDuckGo, 58% uncomfortable with training](https://spreadprivacy.com/ai-privacy-survey-aug26/)

**Persona C: channel owners and creators**
- **J13. Publish consistently.** When I need to publish consistently but don't have time to write every post, I want drafts from my notes or sources in my voice, approved by me before they go out, so the channel stays active without losing my voice. — Evidence: [PostEverywhere](https://posteverywhere.ai/telegram); [Telega, approval before publishing](https://telega.io/blog/autoposter-bot); [Creaflow](https://www.g2.com/sellers/creaflow)
- **J14. Grow without a feed.** When my channel can't grow through a recommendation feed, I want to understand what drives subscribers and views, and to find cross-promotion opportunities, so I can grow despite 11M+ competing channels. — Evidence: [Brand24](https://brand24.com/blog/telegram-analytics-tools); [Telemetr 11.3M+](https://telemetr.me/content/telemetrio_news)
- **J15. Earn from the channel.** When I'm eligible for ads, Star reactions, paid posts or suggested posts, I want to know which levers to switch on and what I've earned, so I can turn the audience into income. — Evidence: [TechCrunch ad revenue](https://techcrunch.com/2024/02/28/telegram-is-launching-ad-revenue-sharing-next-month-using-toncoin); [Telegram Star reactions](https://www.telegram.org/blog/superchannels-star-reactions-subscriptions); [suggested posts](https://core.telegram.org/api/suggested-posts)

### Inferences
**Evidence strength, by job:**

| Strength | Jobs | What the evidence is |
|---|---|---|
| Strongest | J1, J4, J10 | Multiple independent sources, including first-person GitHub issues |
| Moderate | J5, J6, J7, J8, J12 | J6 rests on vendor data |
| Weakest | J2, J3, J9, J11, J13, J14, J15 | Mostly feature launches or vendor content |

**J1 is the bridge job.** Members pull Mira into a group (J1), and admins must allow it (J10, J12). It matches the reported growth loop: more than a third of new users discover Mira in groups.

### Gaps
- No direct interviews or first-person forum posts tie each job to frequency or willingness to pay. These jobs should be validated with in-product surveys or interviews of Mira group admins.

---

## Key Question 6: Quantitative data (Telegram groups and channels, group sizes, admin tool usage)

### Takeaway
There are hard platform numbers: about 1B MAU, a 200K-member group cap, a 500-membership cap per user (1,000 with Premium), 11.3M+ channels in 2025, and about 44M groups and channels blocked in 2025. Tool-level numbers are vendor-reported: Rose claims 24M total groups and 2M monthly active, Combot 480K+ groups, Mira 150K–175K. **No credible figure for the total number of Telegram groups or the average group size was found.**

### Cited Findings
**Platform scale and limits**
- Telegram reported 1B monthly active users in March 2025 [PARAPHRASE, second-hand]. Another guide cites "over 900 million" MAU for 2025. — [Nuelink](https://blog.nuelink.com/social-media-tools-with-telegram-support/)
- Telegram groups allow up to 200,000 members [PARAPHRASE; the search summary did not pin which of the arXiv Telegram dataset papers states it]. — [TGDataset, arXiv 2303.05345](https://arxiv.org/abs/2303.05345v1); [Pushshift Telegram Dataset](https://ar5iv.labs.arxiv.org/html/2001.08438)
- Users can join 500 groups and channels, doubled for Premium since June 2022 [PARAPHRASE]. — [bugs.telegram.org #850](https://bugs.telegram.org/c/850)
- Aggressive Anti-Spam is available to groups with 200+ members (December 2022) [PARAPHRASE]. — [tginfo](https://tginfo.me/?p=7964)

**Channels**
- Channels grew from about 1.7M (2020) to 10.1M (2024) and 11.3M+ (2025), with 2M+ new channels a year. These are Telemetr's estimates. — [Telemetr](https://telemetr.me/content/telemetrio_news); [Telegram market research 2025 PDF](https://skilky-skilky.info/wp-content/uploads/2025/12/Doslidzhennia-rynku-Telegram-2025.pdf)

**Research datasets (not census figures)**
- TeraGram (2026): 5.9B+ messages from 712K channels and groups, 2015–2025 [PARAPHRASE]. — [arXiv 2605.15956](https://arxiv.org/pdf/2605.15956)
- Pushshift (2020): 27,801 channels, 317M messages, 2.2M users [PARAPHRASE]. — [arXiv 2001.08438](https://ar5iv.labs.arxiv.org/html/2001.08438)

**Moderation scale**
- 44,085,169 groups and channels blocked in 2025, about 2.7× 2024, including 952,318 for CSAM and 236,573 for terrorism. Q4 2025 alone accounted for 17.4M+. About 543K were removed on 2026-01-01. More than 11.17M were blocked in 2026 by March 30 [PARAPHRASE].
  - Snapshots of the official page conflict, so verify against the live page. A Check Point-based report gives 43.5M+.
  - Sources: [tech.az](https://tech.az/en/posts/telegram-blocked-over-44-million-groups-and-channels-in-2025-6487); [TASS](https://tass.com/economy/2109117); [Telegram Moderation Overview](https://telegram.org/moderation); [Nairametrics, 2026-03-19](https://nairametrics.com/2026/03/19/telegram-users-face-rising-cyber-threats-despite-43-5m-takedowns-report/)

**Admin tool reach (vendor-reported)**

| Tool | Reported reach | Date | Source |
|---|---|---|---|
| Rose | 1B total users, 24M total groups, 55M MAU, 2M monthly active groups | May 2026 FAQ | [missrose.org FAQ](https://missrose.org/FAQ/) |
| Rose (older third-party figure) | 600M users, 14M chats | — | [Metricgram TR](https://metricgram.com/tr/alternatives/rose-bot) |
| Combot | Groups 480,000+, Channels 110,000+, Users 800,000+ | undated | [combot.org](https://combot.org/) |
| Mira Team Agent | 150K+ groups (site); 175K group chats (H1 2026 report); 50K+ at May 2026 launch coverage | 2026 | `user_sentiment_reviews.md`, Key Question 0 |
| GroupHelp, Shieldy, Safeguard, Chatkeeper, Guardian | No usage figures found | — | — |

**Member-behaviour surveys (not Telegram-specific)**
- 40% of US and UK respondents are overwhelmed by group chat volume (November 2023). — [Phys.org](https://phys.org/news/2023-11-overwhelmed-group-chat-messages-youre.html)
- 42% of Americans say group messaging "feels like a part time job" (undated). — [Secure Data Recovery](https://www.securedatarecovery.com/blog/group-messaging-feels-like-job)
- In Ireland, 24% have muted their work group (n=1,004, undated). — [Irish Tech News](https://irishtechnews.ie/pure-telecom-survey-reveals-38-percent-of-adults/)
- Commercial AI support claims (vendor): Mava says its AI handles up to 60% of questions and that 50–75% are "standard". — [Mava](https://www.mava.app/ai-powered-community-support)

### Inferences
- **Mira's group footprint is small next to Rose.** Mira's 150K–175K groups is roughly 7–9% of Rose's claimed 2M monthly active groups. A credible goal is to become the second bot admins add next to Rose, not to replace it.
- **Moderation scale implies a high-scam environment.** About 44M takedowns in 2025 means members and admins meet scams constantly, which raises the bar for any new bot's trust.

### Gaps
- No total count of Telegram groups (public or private), and no average or median group size or messages per day.
- No share of groups that use any admin bot.
- No independent check of Rose, Combot or Mira figures. TGStat and Telemetr group-level data were unreachable.

---

## Key Question 7: Proposed persona sketches (evidence-mapped, for the report writer)

### Takeaway
The evidence supports three personas:
- **A.** The community admin or moderator, the "Keeper": the decision-maker for whether Mira stays in a group.
- **B.** The overloaded group member, the "Catch-up Member": the main pull and discovery vector.
- **C.** The channel owner or creator, the "Broadcaster": adjacent, weaker evidence, mostly DM use.

A and B interact. B pulls Mira in for catch-up (J1). A decides whether it stays (J10). Members who didn't opt in, a sub-type of B, can push for its removal (J12).

### Cited Findings
**Persona A: the "Keeper" (community admin or moderator)**
- **Who:** an admin or moderator of a public or semi-public community: a crypto or web3 project, tech or open-source, a hobby group, or a local group. Often a volunteer or part-time paid moderator. Often runs several groups.
  - Evidence: [CryptoJobsList moderators](https://cryptojobslist.com/talent/telegram-moderator); [tg-spam #100](https://github.com/umputun/tg-spam/issues/100); [U-M burnout study](https://news.umich.edu/online-content-moderators-likely-to-experience-burnout-u-m-study-suggests/)
- **Tool stack:** Rose, Combot or CAS, Shieldy, GroupHelp, captcha bots, self-hosted tg-spam, Telegram Aggressive Anti-Spam, and Request-to-Join or AI Guardians (2026). — see Key Question 1.
- **Top pains:**
  1. Spam formats that evolve (Key Question 1).
  2. Scams posing as verification (Key Question 1).
  3. False positives without evidence ([#181](https://github.com/umputun/tg-spam/issues/181)).
  4. Repeated newcomer questions (vendor evidence).
  5. Bot noise ([#175](https://github.com/umputun/tg-spam/issues/175)).
  6. 24/7 coverage ([Metricgram [VENDOR]](https://www.metricgram.com/solutions/crypto-telegram-groups)).
  7. Telegram bans and appeals ([It's FOSS](https://itsfoss.com/news/telegram-unfair-community-ban/)).
- **Jobs:** J4–J11.
- **Adopts an AI agent if:** it catches what rule bots miss, explains its actions, answers FAQs from pinned content, stays quiet unless called, and gives role- and scope-level control.
- **Rejects it if:** it posts noise or self-promotion, acts unpredictably, upsets members (privacy), or needs broad admin rights without a clear reason.

**Persona B: the "Catch-up Member" (member of busy groups)**
- **Who:** a member of many groups; heavy users approach the 500-group cap. Mutes most groups and dips in periodically. Includes crypto "alpha" group members, work and project group members, and friends or family groups. — [bugs.telegram.org #850](https://bugs.telegram.org/c/850); [Phys.org](https://phys.org/news/2023-11-overwhelmed-group-chat-messages-youre.html)
- **Current workarounds:** mute, archive, folders, scrolling, asking others for a recap, and self-hosted summarizer bots (the technical minority). — [tdesktop #1067](https://github.com/telegramdesktop/tdesktop/issues/1067); [telegram-summary-bot](https://github.com/asukaminato0721/telegram-summary-bot)
- **Pains:** backlogs of thousands of messages ([telegram-mcp #162](https://github.com/chigwell/telegram-mcp/issues/162)); summaries that mix topics or keep chatter ([#14](https://github.com/asukaminato0721/telegram-summary-bot/issues/14)); FOMO when muted; no native group summaries ([Telegram blog, January 2026](https://telegram.org/blog/new-design-ai-summaries)).
- **Jobs:** J1, J2, J3.
- **Non-consenting sub-type:** someone in a group where someone else added an AI. Job J12. Distrusts default-on AI ([tdesktop #30504](https://github.com/telegramdesktop/tdesktop/issues/30504)).

**Persona C: the "Broadcaster" (channel owner or creator)**
- **Who:** runs one or more channels, often with a linked discussion group. Monetizes through ads (1,000+ subscribers), Stars, paid posts or suggested posts. — [TechCrunch](https://techcrunch.com/2024/02/28/telegram-is-launching-ad-revenue-sharing-next-month-using-toncoin); [Telegram API suggested posts](https://core.telegram.org/api/suggested-posts)
- **Tool stack:** native scheduling, Telegram-capable schedulers, TGStat or Telemetr analytics, AI auto-posters. — [Brand24](https://brand24.com/blog/telegram-analytics-tools); [Nuelink](https://blog.nuelink.com/social-media-tools-with-telegram-support/)
- **Pains:** no recommendation feed; 11.3M+ competing channels; scheduling and cross-posting limits; keeping a steady output.
- **Jobs:** J13–J15.
- **Adopts if:** drafts sound like them and wait for approval, and it gives growth and earnings insight.
- **Rejects if:** posts are generic or published automatically without approval.

### Inferences
- **Recommended primary persona pair: A + B.** The evidence is strongest there, and it matches Mira's group-led growth (more than a third of new users discover Mira in groups). Persona C overlaps with Mira's creator-studio features but has the thinnest first-person evidence.
- **Design tension.** B wants Mira to read enough to summarise. The non-consenting B wants it to read as little as possible. A arbitrates. Admin-set read scope, member-facing disclosure and private delivery of catch-ups resolve this better than a single default.

### Gaps
- Persona demographics (region, language, age, group type mix) cannot be grounded from these sources.
- Mira's own group-admin telemetry (which group types add Mira, removal rates, removal reasons) would be the decisive evidence, and it is not public.

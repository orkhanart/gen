# User Sentiment, Reviews and Complaints: "Miro", identified as Mira (@mira), the Telegram AI agent by The Open Platform

**Research date:** 2026-11-05. **Priority, per the coordinator:** user problems, meaning complaints, frustrations, confusion points, unmet needs and churn reasons.

**How the research was done, and its limits (read first):**
- The Firecrawl search and scrape tools ran out of credits on the first call.
- WebFetch could not reach any page: producthunt.com and itbrief.co.uk both failed DNS resolution under the session's network policy.
- Every finding below therefore comes from WebSearch results (link titles, snippets and the search tool's summaries). No page was opened in full.
- Findings marked [MIRA] are about Mira specifically. Everything else is adjacent proxy evidence, labeled **[ADJ-TG-BOTS]** (Telegram AI bot users in general), **[ADJ-MSG-AGENTS]** (AI assistant and agent users in other messengers) or **[ADJ-TG-PRIVACY]** (Telegram users' privacy worries about bots or AI reading their chats).

**Quote reliability labels:**
- **[VERBATIM-TITLE]**: the exact link title, post text or URL slug shown by the search engine. Reliable as a quote, but X post text is cut off at the end.
- **[SNIPPET]**: text the search result showed as a quotation. Probably verbatim, but not checked against the full page.
- **[PARAPHRASE]**: the search tool's summary or translation. **This is not a quote.** Do not present it as a user's own words.

**Dates:** X post dates were decoded from the status IDs in the URLs. Other dates come from the URL, the article date or the coverage window.

## Key Question 0: Which product is "Miro"? (entity identification and confidence)

### Takeaway
No Telegram AI agent called "Miro" exists in any indexed source. The product is **Mira**, from **The Open Platform (TOP, top.co)**, the team behind Telegram Wallet. It runs as the bot and Mini App **@mira** (reported in February 2026 as **@MiraAiBot**), with the website **mira.tg** and the X handle **@trymira**. The coordinator independently confirmed the same identifiers. **Confidence: high, about 90%.**

### Cited Findings
- Searches for "Miro AI agent Telegram", "Miro Telegram bot", "miro t.me bot AI agent personal assistant 2026" and "Miro Telegram agent Product Hunt" returned only two kinds of result: Miro the whiteboard company, and no-code Miro-to-Telegram automation templates. — [Miro What's New May 2026](https://miro.com/blog/whats-new-may-2026/); [Pipedream](https://pipedream.com/apps/miro-custom-app/integrations/telegram-bot-api); [Bardeen](https://www.bardeen.ai/integrations/miro/telegram); [community.miro.com "telegram bot"](https://community.miro.com/ask-the-community-45/telegram-bot-6194)
- Mira is "a messenger-first AI agent built natively into Telegram". Users "can add @mira to a group or message it directly without any additional setup" [SNIPPET]. Coverage is from May 2026. — [IT Brief UK](https://itbrief.co.uk/story/mira-ai-agent-launches-inside-telegram-group-chats); [Dataconomy, 2026-05-20](https://dataconomy.com/2026/05/20/telegrams-ai-agent-ecosystem-mira/)
- TOP's launch post on X (2026-02-09): "Mira is now live in Telegram — the first personal AI assistant built by a TOP portfolio team. It handles all requests directly in chat, where users can search for information, answer questions, and generate text, images or videos In private mode, requests run via Cocoon's…" [VERBATIM-TITLE] — [@topdotco](https://x.com/topdotco/status/2020836050742981033)
- February 2026 Russian coverage gives the bot as @MiraAiBot and says it was launched by the developers of Telegram Wallet [PARAPHRASE]. — [T-Zh](https://t-j.ru/news/telegram-mira/); [Anti-Malware.ru, 2026-02-10](https://www.anti-malware.ru/news/2026-02-10-114534/48998); [vc.ru](https://vc.ru/telegram/2729251-chat-bot-mira-v-telegram-wallet-s-ii-vychisleniyami-cocoon)
- **Products and claims:**
  - Team Agent ("One AI for Your Whole Telegram Group Chat") claims 150,000+ groups. The H1 2026 report says 175,000 group chats. Launch coverage in May 2026 said 50,000+ groups. — [mira.tg Team Agent](https://mira.tg/products/team-agent); [Mira H1 report](https://mira.tg/report); [IT Brief UK](https://itbrief.co.uk/story/mira-ai-agent-launches-inside-telegram-group-chats)
  - Mira Pro is listed at 1,500 Telegram Stars a month, renewing every 30 days. It includes 2,000 tokens a month, 50% off extra tokens and higher limits [PARAPHRASE]. — [mira-pro.com FAQ](https://mira-pro.com/). Note: this domain differs from mira.tg, so whether it is official is unconfirmed.
- **Name collisions that pollute searches:**
  - Mira Network ("Building the Trust Layer for AI"). — [X](https://x.com/miranetwork/status/2094456809595814074)
  - "Mira – AI autopilot for your Telegram channel", a separate bot and Mini App at usemira.pro with a separate Product Hunt launch. — [usemira.pro](https://usemira.pro/); [dev.to Show DEV](https://dev.to/niteflex/show-dev-mira-a-telegram-bot-mini-app-that-finds-and-drafts-posts-for-your-channel-b3); [Product Hunt](https://www.producthunt.com/p/mira-10/mira-be4d3afe-dfc1-4e63-b0c5-327d3da7927d)
  - iOS apps "Mira-AI Video/Image Generator" and "Mira - AI Chat and Companion". — [App Store](https://apps.apple.com/us/app/-/id6743672316); [App Store](https://apps.apple.com/us/app/mira-ai-%EC%B1%84%ED%8C%85-%EC%BB%B4%ED%8C%A8%EB%8B%88%EC%96%B8/id6747144263)
  - usemira.pro itself notes that the name "Mira" is shared by several unrelated products [PARAPHRASE]. — [usemira.pro FAQ](https://usemira.pro/ru/faq)

### Inferences
- "Miro" is a typo for "Mira".
- The handle change from @MiraAiBot to @mira, plus at least two other Telegram bots named "Mira", makes it easy to land on the wrong bot. That is a trust and onboarding risk in its own right.

### Gaps
- I could not confirm whether @MiraAiBot still works or redirects.
- I could not confirm whether mira-pro.com is an official TOP property.

## Key Question 1: The user problems, grouped into themes and ranked by frequency and severity (synthesis)

### Takeaway
Feedback that is specifically about Mira is thin. About six critical data points were found, mostly Russian-language comments from the launch period, and none on Reddit or Hacker News. Combined with the adjacent evidence, the problems rank roughly as follows. Ranking weighs how often a theme appears across Mira and adjacent sources, then how severe it is for trust and churn.

| # | Problem theme | Mira-specific evidence | Adjacent evidence | Severity |
|---|---|---|---|---|
| 1 | **Opaque monetization:** Pro vs tokens vs usage limits; Stars are non-refundable; feels like a bait-and-switch | Yes: a user says Pro "worked two days" then demanded tokens and calls it deception. The FAQ has to explain three separate layers. A reviewer flags credits. | Strong: AI-wrapper refund complaints; Poke pricing; OpenClaw token burn; Telegram AI summaries "Premium/limits" | High (direct churn plus "scam" perception) |
| 2 | **Privacy and data access:** "Is it reading my chats? Is private mode real?" | Yes: "privacy or just marketing?" headline; other sceptical pieces; group memory spans participants | Strong: Grok-Telegram deal backlash; "huge betrayal" comment on Telegram AI; Poke inbox-access abandonment; Manus FAQ | High (blocks activation of integrations and groups) |
| 3 | **Low-quality or generic output, and the "spammy TG bot" prior** | Yes: repeated identical answers; "так себе" (so-so) images; "this is advertising"; a positive user admits expecting "TG spammy shii… canned FAQ" | Moderate: AI-wrapper bots that deny which model they use; scam bots | Medium-high (first-session churn) |
| 4 | **Broken support and recovery paths** | Yes: the support link does not work | Moderate: Stars refunds only through the bot developer via /paysupport | Medium-high (turns a fixable issue into churn) |
| 5 | **Capability discoverability and setup complexity** | Indirect: users ask "What can you actually do?"; Mira's own blog admits "setup complexity"; only 0.4% connect services; IANA timezone friction | Moderate: Poke onboarding abandonment; OpenClaw setup and security mistakes | Medium (caps value; low activation) |
| 6 | **Unwanted AI presence and lack of control or opt-out** (especially in groups) | Not found as a complaint. Risk signals: Mira "will introduce herself and join the conversation"; "jumping in when needed"; group moderation powers | Strong: "WhatsApp users fume over new Meta AI button that you can't remove"; Telegram's "compulsory AI" editor petition (500+ upvotes); no summaries opt-out | Medium-high latent risk for the Team Agent |
| 7 | **Reliability of actions:** time and date errors, slow integrations, security of agents with tool access | Not found for Mira (the GitHub UTC bug is a different "Mira") | Moderate: Poke time zone and date errors; OpenClaw exposed instances and malicious skills; prompt-injection risk | Medium (rises sharply as Mira takes more actions) |
| 8 | **Platform and ecosystem fragility:** wrong-bot confusion, scam ecosystem, platform bans | Name collisions (Key Question 0) | ChatGPT removed from WhatsApp (50M users affected); Telegram anti-spam freezing Manus agent accounts | Medium |
| 9 | **Language and region gaps** | Weak: Russian users discussing payment methods (SBP and cards) | Weak: Telegram summaries skip mixed-language pages | Low or unknown |

### Cited Findings
Evidence for each row is given, with sources, in Key Questions 2 to 4 (Mira) and 8 to 10 (adjacent).

### Inferences
- **Themes 1, 3 and 4 form one chain:** an unclear paywall, then a poor-quality or repeated answer, then a support dead end, then the user calling it a scam and leaving. A design proposal that fixes this chain (transparent balance and entitlements, graceful degradation, an in-chat path to help or a refund) addresses the most direct churn evidence.
- **Theme 2 is the main barrier to deeper value.** Integrations (0.4% activation) and group memory both require trust that is not yet earned.
- **Theme 6 has no Mira complaints yet, but it is the biggest predictable risk for the Team Agent.** Every adjacent "AI pushed into my chats" rollout drew backlash.

### Gaps
- No quantitative frequency data exists. The ranking is qualitative, because the Mira-specific sample is about six data points.
- English-speaking, Persian-, Hindi- and Indonesian-speaking Telegram audiences were not covered by any source found.

## Key Question 2: Mira-specific complaints and frustrations (detailed evidence)

### Takeaway
Every critical comment about Mira found online is paraphrased below. None could be quoted verbatim, because the comment pages could not be opened.

### Cited Findings
- **[MIRA] Paywall felt like deception (theme 1).** In the T-Zh comments, a user says they paid for Mira Pro, it worked for only two days, then the bot demanded tokens again. They call it deception (обман) and advise against the subscription [PARAPHRASE/translation; probably February–March 2026; exact date not visible]. — [T-Zh comments](https://t-j.ru/news/telegram-mira/)
- **[MIRA] Repeated answers, dead support, weak images (themes 3 and 4).** A T-Zh commenter says the bot sends the same answers or links to support, the support link does not work, and photo generation is "так себе" ("so-so") [PARAPHRASE; "так себе" probably verbatim]. — [T-Zh comments](https://t-j.ru/news/telegram-mira/)
- **[MIRA] "It's just advertising" (theme 3).** A YouTube viewer called the project advertising that wastes electricity and computing power [PARAPHRASE]. — [YouTube: "ИИ-ассистент Mira: лучший персональный помощник в Telegram? Полный разбор функций"](https://www.youtube.com/watch?v=hZTyk1PHtvY)
- **[MIRA] Low expectations going in (theme 3).** X post, @gregwrites_yy (2026-08-11): "I went to try the Mira app on Telegram expecting the usual Ai chat, TG spammy shii. Another AI bot promising the world, delivering a canned FAQ. So I did what I always do: I just asked it straight up, "What can you actually do?"…" [VERBATIM-TITLE]. The rest of the post is positive in tone. — [X](https://x.com/gregwrites_yy/status/2087312579701997722)
- **[MIRA] Reminder setup friction (theme 5).** In the same thread, when asked to set a 9:00 pill reminder, Mira asked for the user's timezone and only confirmed after a correction to a proper IANA timezone [PARAPHRASE]. — [X, @gregwrites_yy, 2026-08-11](https://x.com/gregwrites_yy/status/2087312579701997722)
- **[MIRA] Heavier than a Q&A bot (themes 1 and 5).** Action-oriented flows "can feel heavier than a simple Q&A bot", and premium models cost in-app credits [PARAPHRASE]. The publisher sells a competing bot. — [Qualtir: Best AI Bots for Telegram 2026](https://qualtir.com/blog/best-ai-bots-for-telegram-2026)
- **[MIRA] Privacy scepticism (theme 2):** see Key Question 5. — [VGTimes](https://vgtimes.ru/news/147319-v-telegram-zapuschen-ii-assistent-mira-privatnost-ili-prosto-marketing.html)
- **Searched for but not found:** no posts reporting Mira hallucinating, setting wrong reminders, spamming groups, being slow, or failing on integrations. Queries for these on X, Reddit and Russian sites returned nothing. — Searches on 2026-11-05

### Inferences
- The complaints come mainly from the February–March 2026 launch audience: Russian-speaking, free-AI seekers. Grievances from the later English-speaking and group audience are not visible.

### Gaps
- Verbatim comment text and dates for T-Zh and YouTube are unknown.
- Replies to @trymira on X and comments in Mira's Telegram channel were unreachable. These are the most likely places for current complaints.

## Key Question 3: Confusion points, unmet needs, feature requests and churn reasons (Mira)

### Takeaway
The clearest confusion is the **three-layer pricing model**: Pro subscription, tokens for media, and separate usage limits, all paid in non-refundable Stars. Next comes **what Mira can actually do**, plus setup complexity. The only explicit churn reason found is the Pro and token complaint. No user-voiced feature requests were found; the needs below are inferred.

### Cited Findings
- **[MIRA] The FAQ has to separate three concepts:** "Tokens are a separate currency only for paid generation: images, video, music and stickers. Usage limits are a separate matter that apply to all activity." [SNIPPET] It also says chat, voice, search and analysis don't spend tokens [PARAPHRASE]. — [mira-pro.com FAQ](https://mira-pro.com/)
- **[MIRA] Starter economics:**
  - New users start with 150 tokens, enough for one video or five images [PARAPHRASE].
  - 300 Stars buy 300 tokens [PARAPHRASE].
  - Free tokens are offered for subscribing to a channel, checked under "Мои токены" ("My tokens") [PARAPHRASE].
  - Sources disagree on the video model (Google Veo 3 vs Alibaba WAN 2.2).
  — [Yablyk](https://yablyk.com/079886-besplatnaya-nejroset-mira-v-telegram-kak-zapustit-i-polzovatsya/); [T-Zh](https://t-j.ru/news/telegram-mira/)
- **[MIRA] Where to subscribe:** Pro unlocks the most powerful models, higher image and video limits, advanced automation and priority performance, and is bought inside the Mini App [PARAPHRASE]. — [Mira blog](https://mira.tg/blog/mira-1-million-monthly-users)
- **[ADJ-TG-BOTS] Stars refunds:**
  - Telegram's Stars terms say "All sales of Telegram Stars are final" [SNIPPET]. — [Telegram Stars ToS](https://telegram.org/tos/stars)
  - Refunds have to come from the bot developer, requested via /paysupport, with escalation to Telegram using the transaction ID [PARAPHRASE]. — [Telegram Stars ToS](https://telegram.org/tos/stars); [PayStars guide](https://paystars.uz/en/news/telegram-stars-refund-paysupport-guide/)
  - This is the platform rule behind the Pro complaint.
- **[MIRA] Setup complexity admitted by the company.** Mira's own comparison post concedes "the honest trade-off is setup complexity" [SNIPPET]. It lists GPT-4o as the default model, with 10+ selectable models [PARAPHRASE]. — [Mira blog: Best AI Assistant for Telegram in 2026: Honest Comparison](https://mira.tg/blog/best-ai-assistant-for-telegram)
- **[MIRA] Activation funnel, from Mira's own H1 report:** almost everyone chats; reminders are the smallest use ("Reminders remain the smallest slice of what people do with Mira" [SNIPPET]); about 40% of users "put Mira to work on a real task" [PARAPHRASE]; **0.4% connect external services** [PARAPHRASE]. — [Mira H1 2026 report](https://mira.tg/report)
- **[MIRA] Company roadmap, not user requests:** agent-to-agent interactions and a payment sub-wallet for bounded purchases [PARAPHRASE]. — [IT Brief UK](https://itbrief.co.uk/story/mira-ai-agent-launches-inside-telegram-group-chats); [Efficiently Connected](https://www.efficientlyconnected.com/mira-telegram-messenger-native-ai-agent/)
- **[MIRA] Growth cooling.** An analyst notes "that growth rate will inevitably moderate" [SNIPPET]. — [Efficiently Connected](https://www.efficientlyconnected.com/mira-telegram-messenger-native-ai-agent/)

### Inferences
These are needs implied by the complaints and confusion, not user requests:
1. A single, glanceable "what you have" view: plan, token balance, limits left, reset date.
2. An explanation before any action that costs tokens.
3. An in-chat refund and help path that works.
4. A capability tour that answers "what can you actually do?".
5. Natural-language timezone capture: infer it from the city or Telegram locale, not an IANA string.
6. Integration prompts triggered by context, at the moment a connected tool would help.

**Likely churn reasons:**
- A paywall surprise after paying.
- Repetitive or low-quality output in the first session.
- Nowhere to go when things fail.

### Gaps
- No cancellation or retention data was found.
- No explicit feature-request threads were found.
- The Mira wiki and help pages beyond the group-chat overview were not retrievable.

## Key Question 4: What do users praise? Which use cases resonate most? (Mira)

### Takeaway
Public praise comes from X posts that read as promotional. Some YouTube coverage is explicitly sponsored, with an #ad tag and a referral link. The use cases praised are summarizing group chats, zero-install convenience inside Telegram, memory and personality, and an agent that takes actions.

### Cited Findings
- **[MIRA]** @defileo (2026-07-03): "Product that summarized 200 group chat messages while I was away in 10 seconds. It's called @trymira, and it lives directly inside Telegram, no new app, no new tab. I typed one sentence -> it posted across 6 platforms + found…" [VERBATIM-TITLE] — [X](https://x.com/defileo/status/2073053615988830333)
- **[MIRA]** @Eyuel88 (2026-05-08): "An AI agent with memory, personality, and real actions that creates content, sends emails, and actually gets things done [emoji] > Mira is more than just another chatbot." [VERBATIM-TITLE] — [X](https://x.com/Eyuel88/status/2052745780876714461)
- **[MIRA]** Greg's post (2026-08-11) describes a good experience: Mira asked what he cared about before building a daily briefing [PARAPHRASE]. — [X](https://x.com/gregwrites_yy/status/2087312579701997722)
- **[MIRA] Thin and sponsored reviews:**
  - The English YouTube video "This AI Assistant Lives Inside Telegram (Mira AI)" is tagged #ad and has a referral link [PARAPHRASE]. — [YouTube](https://www.youtube.com/watch?v=n361vOBtRrc)
  - The Russian video "Тестирую ИИ Агента Mira - Telegram бот вместо 10 нейросетей" ("Testing the Mira AI agent: a Telegram bot instead of 10 neural networks") also uses a referral link [PARAPHRASE]. — [YouTube](https://www.youtube.com/watch?v=F1GZJKsuIDE)
  - The homepage shows a self-reported 5.0 rating from 7 reviews, and the chats page 5.0 from 6. — [mira.tg](https://mira.tg/); [mira.tg/chats](https://mira.tg/chats)
- **[MIRA] Groups as the growth loop:**
  - More than a third of new users first meet Mira in a group. — [IT Brief UK](https://itbrief.co.uk/story/mira-ai-agent-launches-inside-telegram-group-chats)
  - Specialised agents for finance, career planning and nutrition are in demand [PARAPHRASE]. — [IT Brief UK](https://itbrief.co.uk/story/mira-ai-agent-launches-inside-telegram-group-chats)
- **[MIRA] Free text use** is the hook for Russian-speaking early adopters [PARAPHRASE]. — [Yablyk](https://yablyk.com/079886-besplatnaya-nejroset-mira-v-telegram-kak-zapustit-i-polzovatsya/)

### Inferences
- The resonant value is time saved catching up on groups, plus never leaving Telegram. Design proposals should protect these strengths while fixing the trust and pricing issues.

### Gaps
- No unsponsored long-form English review was found.

## Key Question 5: Trust and privacy concerns, and how the company responds (Mira)

### Takeaway
Russian-language tech media openly questioned whether Mira's "private mode" is real privacy or marketing. TOP responds with architecture, not product transparency: a Private Mode on Telegram's Cocoon TEE network (Intel TDX, encrypted prompts). No audit, no retention policy and no direct reply to critics were found. Mira's memory spans personal and group chats, so group members who never opted in are affected.

### Cited Findings
- **[MIRA]** VGTimes headline: "В Telegram запущен ИИ-ассистент Mira: приватность или просто маркетинг?" ("Telegram launches AI assistant Mira: privacy or just marketing?") [VERBATIM-TITLE]. It questions the "digital amnesia" mode [PARAPHRASE]. — [VGTimes](https://vgtimes.ru/news/147319-v-telegram-zapuschen-ii-assistent-mira-privatnost-ili-prosto-marketing.html)
- **[MIRA]** abit.ee urges readers to look past the promises of privacy and free use [PARAPHRASE]. — [abit.ee](https://abit.ee/ru/sowtware/messendzery/telegram-mira-cocoon-chatgpt-nano-banana-google-veo-3-ai-assistant-blockchain-telegram-stars-privacy-ru)
- **[MIRA]** MEXC says it remains to be seen whether Cocoon's privacy claims hold up to scrutiny [PARAPHRASE]. — [MEXC](https://www.mexc.com/news/995982)
- **[MIRA] Company response.** Private mode runs requests "via Cocoon's" decentralized GPU network on TON with encrypted execution [VERBATIM-TITLE fragment]. Private Mode is pitched to enterprise and privacy-focused users. — [@topdotco, 2026-02-09](https://x.com/topdotco/status/2020836050742981033); [IT Brief UK](https://itbrief.co.uk/story/mira-ai-agent-launches-inside-telegram-group-chats)
  - Cocoon uses Intel TDX TEEs and encrypted prompts. — [CyberInsider](https://cyberinsider.com/telegram-introduces-privacy-focused-ai-summaries-backed-by-cocoon/)
- **[MIRA] Memory spans personal and group chats.** It enables "persistent shared context across participants" [SNIPPET, company claim]. — [IT Brief UK](https://itbrief.co.uk/story/mira-ai-agent-launches-inside-telegram-group-chats); [TOP: Mira Connect](https://top.co/insights/mira-connects-800-integrations)
- **[MIRA] Group powers.** The wiki says that in groups Mira can "auto-delete spam, warn about rule violations, keep the chat clean", and that when started "Mira will introduce herself and join the conversation". Users get its attention with @mira or a reply [SNIPPET]. — [Mira wiki: Group Chats](https://wiki.mira.tg/group-chats/overview)
- **[MIRA] Expanding blast radius.** Mira Connect lets it act on email, calendars and code tools [PARAPHRASE]. — [TOP: Mira Connect](https://top.co/insights/mira-connects-800-integrations)

### Inferences
- Users cannot see TEE claims working. Trust has to come from visible product signals: which mode is on, what is remembered, who in the group can see it, and how to forget or remove it.
- Moderation powers (deleting messages) plus group memory make the Team Agent a likely flashpoint for consent complaints. This is the proxy pattern in Key Question 10.

### Gaps
- Mira's privacy policy, data retention terms, whether data is used for training, and what a bot with admin rights stores were not retrievable.
- No independent audit of Cocoon's TEE attestation was found.

## Key Question 6: Ratings, app stores, Product Hunt and Telegram audience metrics (Mira)

### Takeaway
Mira exists only as a bot and Mini App. No App Store or Play listing, and no Product Hunt launch, was found for TOP's Mira. Ratings are thin: 5.0 from 6 or 7 reviews on Mira's own site, and "No reviews yet" on the TG.app directory. All audience figures are company-reported and growing.

### Cited Findings
- **[MIRA] Audience over time:**
  - About 130K users shortly after the February 2026 launch [PARAPHRASE]. — [T-Zh](https://t-j.ru/news/telegram-mira/)
  - 500K+ monthly active users, "doubling month on month", and 50K+ groups in May 2026 [PARAPHRASE]. — [IT Brief UK](https://itbrief.co.uk/story/mira-ai-agent-launches-inside-telegram-group-chats)
  - 2M+ users. — [TOP](https://top.co/insights/mira-ai-assistant-telegram)
  - A counter of 1,167,762 monthly users, in the post "Mira Just Crossed 1 Million Monthly Users Inside Telegram". — [Mira blog](https://mira.tg/blog/mira-1-million-monthly-users)
  - 175K group chats in H1 2026. — [Mira report](https://mira.tg/report)
- **[MIRA] OpenRouter:** "the leading AI agent inside Telegram". Mira says it ranks #5 in AI productivity and processed 460B tokens in H1 2026 (another post says 440B). — [OpenRouter](https://openrouter.ai/apps/mira); [Mira blog](https://mira.tg/blog/mira-ranks-5-among-global-ai-productivity-apps-on-openrouter); [CodeSOTA, 2026-08-24](https://www.codesota.com/agentic/openrouter-apps/mira)
- **[MIRA] Directory and site ratings:**
  - The TG.app directory listing shows "No reviews yet" [SNIPPET]. — [tg.app/apps/mira](https://tg.app/apps/mira/)
  - Site ratings are 5.0 from 7 (homepage) and 5.0 from 6 (chats page). — [mira.tg](https://mira.tg/); [mira.tg/chats](https://mira.tg/chats)
- **Not Mira:** the Product Hunt "Mira" (channel autopilot) had 0 upvotes, 1 comment and placed #28. — [hunted.space](https://www.hunted.space/product/mira-10)

### Inferences
- Telegram bots have no public review mechanism. Dissatisfaction is therefore mostly invisible, appearing in scattered comments or silent churn. Instrumenting in-chat feedback is itself a design opportunity.

### Gaps
- TGStat and Telemetr pages were unreachable, so there is no independent audience verification.

## Key Question 7: Community signals (Reddit, Hacker News, X, YouTube, Telegram)

### Takeaway
- **Reddit and Hacker News:** no threads about Mira.
- **X:** promotional or influencer posts.
- **YouTube:** mostly sponsored videos, plus one sceptical comment.
- **Russian media comments:** the only organic critique.
- **Telegram's own channels and groups:** unreachable.

### Cited Findings
- **[MIRA]** Searches "Mira Telegram bot reddit" and "r/Telegram … Mira" returned no Reddit threads. — Searches on 2026-11-05
- **[MIRA]** X posts: [@defileo, 2026-07-03](https://x.com/defileo/status/2073053615988830333); [@Eyuel88, 2026-05-08](https://x.com/Eyuel88/status/2052745780876714461); [@gregwrites_yy, 2026-08-11](https://x.com/gregwrites_yy/status/2087312579701997722). An X post claiming 550K MAU appeared in the results. It may be [@ChristianDior31, 2026-08-14](https://x.com/ChristianDior31/status/2088241171067789642); attribution is unclear.
- **[MIRA]** YouTube: [n361vOBtRrc (#ad)](https://www.youtube.com/watch?v=n361vOBtRrc); [F1GZJKsuIDE (referral link)](https://www.youtube.com/watch?v=F1GZJKsuIDE); [hZTyk1PHtvY (sceptical comment)](https://www.youtube.com/watch?v=hZTyk1PHtvY)

### Inferences
- Feedback lives inside Telegram, in Mira's channel and the groups it is in. Interviews or in-bot surveys are needed to ground the proposal.

### Gaps
- Mira's Telegram channel comments (t.me/s/ previews) and @trymira replies were not reachable.

## Key Question 8: [ADJ-TG-BOTS] Proxy, not Mira-specific: problems Telegram AI bot users run into in general

### Takeaway
Users of Telegram AI bots run into four recurring problems:
- Paid "AI wrapper" bots and sites that are hard to cancel or refund.
- Model impersonation: the bot claims to be one model and runs another.
- A scam and phishing bot ecosystem that lowers trust in any new bot.
- Confusion over what a bot in a group can see.

### Cited Findings
- **AI-wrapper billing complaints [PARAPHRASE].** Trustpilot reviews of AI wrapper services describe:
  - Paid signups by imitating ChatGPT or Claude.
  - Hard cancellation and refused refunds.
  - One reviewer charged $200 for a bot advertised as having Claude access.
  - Bots that deny being ChatGPT or Claude when asked.
  These are web services, not Telegram bots, and Trustpilot cannot verify the claims. — [Trustpilot askaichat.app](https://ca.trustpilot.com/review/askaichat.app); [Trustpilot chatlyai.app](https://ca.trustpilot.com/review/chatlyai.app); [Trustpilot chatly.solutions](https://ca.trustpilot.com/review/chatly.solutions)
- **Developer-side payment failures.** "The Stars were charged and on_paid never ran: where Telegram Stars payments get lost in aiogram" [VERBATIM-TITLE]. A developer post shows that charged-but-not-credited Stars payments are a real failure mode. — [DEV Community](https://dev.to/sinnercode228/the-stars-were-charged-and-onpaid-never-ran-where-telegram-stars-payments-get-lost-in-aiogram-5m2)
- **Missing refund method in a bot library.** "Telegrambot don't have refund function (not exist refundStarPayment method)" [VERBATIM-TITLE]. — [GitHub issue #1211](https://github.com/yagop/node-telegram-bot-api/issues/1211)
- **Scam bots.** Malicious bots run fake surveys, quizzes and competitions to harvest personal data [PARAPHRASE]. — [NordVPN, 2026](https://nordvpn.com/blog/telegram-scams/)
- **AI impersonation and raids.** Groups see AI-generated scam messages, admin impersonators and bot raids [PARAPHRASE]. — [Chainfuel, 2026](https://www.chainfuel.com/blog/how-to-stop-spam-in-your-telegram-group-2026)
- **Unwanted contact.** Bots can message users who have not blocked them [PARAPHRASE]. — [AwaitHuman](https://www.awaithuman.dev/blog/why-am-i-getting-bot-messages-on-telegram)
- **Deepfake bots.** Telegram "nudify" bots are built to survive takedowns. — [Centre for Information Resilience](https://www.info-res.org/cir/articles/telegram-deepfake-bots-are-built-to-survive-takedowns/)
- **What a group bot can see.** Privacy Mode is on by default, so a bot sees only commands, mentions and replies. Admin bots see everything. Changing the mode requires removing and re-adding the bot. Bots can't read history from before they joined [PARAPHRASE]. — [Qualtir](https://qualtir.com/blog/telegram-ai-chatbot-for-groups)
- **Open-source bot docs.** One project's docs say: "You should disable the privacy mode of the bot. Otherwise the bot will not receive the messages from the group chat." [SNIPPET; the exact page was not pinned] — [pokitoki](https://hub.docker.com/r/pengshp/pokitoki); [buhe/chatgpt-telegram-bot](https://github.com/buhe/chatgpt-telegram-bot)
- **Thin review activity.** The "ChatGPT on Telegram" listing on SourceForge says "be the first to post a review" [SNIPPET]. — [SourceForge](https://sourceforge.net/app/chatgpt-on-telegram/web-app/)

### Inferences
- Mira starts every new session against this backdrop. Greg's "TG spammy shii" remark shows it directly. Strong identity, verification and transparent billing are table stakes, not polish.

### Gaps
- No Reddit corpus specifically about paid Telegram AI bots was found.

## Key Question 9: [ADJ-MSG-AGENTS] Proxy, not Mira-specific: problems users of AI agents in messengers run into

### Takeaway
The adjacent products are Poke (iMessage), Manus Agents (Telegram), OpenClaw (Telegram and others), Meta AI (WhatsApp) and ChatGPT on WhatsApp. Their users report five recurring problems:
1. Fear of granting inbox or account access, which leads to abandoned onboarding.
2. Pricing that feels high or unpredictable, including runaway token costs.
3. Time and date errors, and slow integrations.
4. Security failures in agents with tools.
5. Platform risk, where the host messenger bans or limits the agent.

### Cited Findings
- **Poke (iMessage) [ADJ-MSG-AGENTS].** The search tool did not pin which review page each snippet came from; candidates are [Saner.ai "Honest Poke.com Reviews (2026)"](https://www.saner.ai/blogs/poke-reviews), [The AI Agent Index](https://theaiagentindex.com/agents/poke) and [AIToolBlaze](https://aitoolblaze.com/blog/poke-ai-imessage-agent-review-2026).
  - On price, one reviewer wrote: "Premium Pricing for a Product Held Together with Duct Tape" [SNIPPET].
  - On inbox access, one review said: "handing an autonomous agent full inbox access is a category of risk, and Poke doesn't do much to walk you through that decision" [SNIPPET].
  - Another said: "this isn't like giving ChatGPT a single prompt—this is inviting an AI to continuously monitor your digital life" [SNIPPET].
  - One writer abandoned onboarding on the first attempt over data-access worries [PARAPHRASE].
  - Time zone errors, date confusion and slow third-party integrations come up repeatedly in user reviews [PARAPHRASE].
  - Poke's Privacy Notice (updated 2026-09-11) says user data may train its models unless the user selects Maximum Privacy [PARAPHRASE].
- **Poke on Product Hunt.** The thread "A Week with Poke Review: A Promising Start for a Proactive AI Assistant" [VERBATIM-TITLE]. — [Product Hunt forum](https://www.producthunt.com/p/poke-by-interaction-co/a-week-with-poke-review-a-promising-start-for-a-proactive-ai-assistant)
- **Manus Agents for Telegram [ADJ-MSG-AGENTS]. Company response pattern.** The help-center article "Is my data safe when using Manus agents in Telegram" says the agent "cannot: See, read, or interact with any of your other Telegram conversations" [SNIPPET]. It frames account freezes as a Telegram anti-spam issue, not a data leak [PARAPHRASE]. — [Manus Help](https://help.manus.im/en/articles/14033996-is-my-data-safe-when-using-manus-agents-in-telegram)
  - Earlier coverage: "Manus AI may be the new DeepSeek, but initial users report problems" [VERBATIM-TITLE], March 2025. — [TechRadar](https://techradar.com/pro/manus-ai-may-be-the-new-deepseek-but-initial-users-report-problems)
- **OpenClaw [ADJ-MSG-AGENTS].**
  - Notebookcheck headline (URL slug): "Free-to-use AI tool can burn through hundreds of Dollars per day: OpenClaw has absurdly high token use" [VERBATIM-TITLE]. — [Notebookcheck](https://www.notebookcheck.net/Free-to-use-AI-tool-can-burn-through-hundreds-of-Dollars-per-day-OpenClaw-has-absurdly-high-token-use.1219925.0.html)
  - c't spent over $100 in one day of testing. Reddit users report about $8 every 30 minutes [PARAPHRASE]. — [Notebookcheck](https://www.notebookcheck.net/Free-to-use-AI-tool-can-burn-through-hundreds-of-Dollars-per-day-OpenClaw-has-absurdly-high-token-use.1219925.0.html)
  - Security problems: exposed instances, malicious skills doing data exfiltration and prompt injection (Cisco), and CertiK advising non-experts to wait for "more mature, hardened, and manageable versions" [SNIPPET]. — [MEXC news](https://www.mexc.com/news/775363)
- **Meta AI in WhatsApp [ADJ-MSG-AGENTS / control].**
  - Headlines: "WhatsApp users fume over new Meta AI button that you can't remove – here's what it does" [VERBATIM-TITLE]. — [TechRadar](https://www.techradar.com/computing/websites-apps/whatsapp-users-fume-over-new-meta-ai-button-that-you-cant-remove-heres-what-it-does)
  - "WhatsApp just made its AI impossible to avoid – but at least you can turn it off" [VERBATIM-TITLE]. — [TechRadar](https://www.techradar.com/computing/artificial-intelligence/whatsapp-just-made-its-ai-impossible-to-avoid-but-at-least-you-can-turn-it-off)
  - An r/whatsapp thread reports @Meta AI tagging stopped working in groups with no explanation. The likely cause is the Advanced Chat Privacy setting [PARAPHRASE]. — [The News PK](https://www.thenews.com.pk/latest/1416422-is-whatsapp-quietly-removing-meta-ai-from-groups)
- **ChatGPT on WhatsApp shut down [ADJ-MSG-AGENTS / platform risk].** OpenAI: "1-800-ChatGPT won't work on WhatsApp after Jan 15, 2026." [SNIPPET]. More than 50M users had used it. Users had to link accounts before the cutoff to keep their history, because WhatsApp has no chat export [PARAPHRASE]. — [OpenAI](https://openai.com/index/chatgpt-whatsapp-transition/); [9to5Mac, 2025-10-22](https://9to5mac.com/2025/10/22/meta-kicking-chatgpt-out-of-whatsapp-for-50m-users/)

### Inferences
- Across messenger agents, the onboarding moment where access is granted is where trust is won or lost. Poke's critics explicitly ask for a guided walkthrough of the decision. That maps directly onto Mira's 0.4% integration activation.
- Unbounded token costs (OpenClaw) and opaque credits (Mira) are the same problem: users cannot predict cost.

### Gaps
- Most Poke and OpenClaw sources are blogs or affiliate reviews. Reddit threads were not directly retrieved.

## Key Question 10: [ADJ-TG-PRIVACY] Proxy, not Mira-specific: Telegram users' privacy worries about bots and AI reading their chats

### Takeaway
Telegram's own AI moves drew pointed privacy pushback: the xAI/Grok deal in May 2025, AI summaries in January 2026, and the AI Editor in March 2026. The pushback included a "huge betrayal" comment, a "compulsory AI" petition with 500+ upvotes, and GitHub requests for an off switch. Telegram, like TOP, answers with Cocoon and TEE claims that have not been audited. Any agent that reads group chats inherits this distrust.

### Cited Findings
- **The xAI/Grok deal (May 2025).** "Telegram gets some AI integration but you may not love the source" [VERBATIM-TITLE]. — [TechRadar](https://www.techradar.com/computing/artificial-intelligence/telegram-gets-some-ai-integration-but-you-may-not-love-the-source)
  - Hacker News commenters asked why xAI would pay for access and worried that private chats might feed Grok [PARAPHRASE]. — [HN item 44116862](https://news.ycombinator.com/item?id=44116862)
  - Privacy Guides members argued that Telegram's privacy marketing overstates its protections [PARAPHRASE]. — [Privacy Guides](https://discuss.privacyguides.net/t/xai-to-pay-telegram-300m-to-integrate-grok-into-the-chat-app/27896)
  - Durov said xAI would only see content users explicitly send to Grok. Critics noted that Telegram chats are not end-to-end encrypted by default [PARAPHRASE]. — [The Register, 2025-05-28](https://www.theregister.com/software/2025/05/28/elon-musks-xai-pays-telegram-300m-to-integrate-grok/1186099)
- **AI summaries (January 2026).** An AlternativeTo commenter called Telegram's Cocoon-based AI "a huge betrayal to the majority userbase who preferred Telegram for its privacy features" [SNIPPET]. — [AlternativeTo, 2026-01](https://alternativeto.net/news/2026/1/telegram-introduces-instant-ai-summaries-for-long-posts-and-full-liquid-glass-design-on-ios)
- **Opt-out requests on GitHub [PARAPHRASE].** — [TelegramMessenger/cocoon issues](https://github.com/TelegramMessenger/cocoon/issues)
  - Cocoon issue #53 (April 2026) asks for a button to disable AI features in the editor.
  - Issue #74 (July 2026) flags that "AI Summaries on Instant View have Premium/limits, and mixed-language pages get no summary".
- **The AI Editor (March 2026).** A Tumblr post titled "Telegram Desktop is rolling out the compulsory AI…" [VERBATIM-TITLE, truncated] reports annoying pop-ups and a feature-request campaign with over 500 upvotes. A toggle was later added to experimental settings [PARAPHRASE]. — [Tumblr (cassolotl)](https://cassolotl.tumblr.com/post/812728783955230720/telegram-desktop-is-rolling-out-the-compulsory-ai)
- **No official off switch.** A guide says users asked for an official way to disable AI summaries but none had shipped. Workarounds include rolling Desktop back to 6.6.3 [PARAPHRASE]. — [DeleteAccountGuide](https://deleteaccountguide.com/how-to-turn-off-ai-summaries-on-telegram-2026/)
- **Cocoon still unaudited.** Third-party coverage notes that Cocoon's privacy claims still need an independent audit [PARAPHRASE]. — [HappyCapy Guide](https://happycapyguide.com/blog/telegram-ai-editor-privacy-cocoon-network-2026)
- **Group bot visibility.** If a summarizer needs admin rights or privacy mode turned off, it sees everything posted in the group. Open-source summarizers advertise hashing user IDs or keeping messages only in memory as privacy features [PARAPHRASE]. — [moalimirinfinity Telegram-Group-Chat-Summarizer-Bot](https://github.com/moalimirinfinity/Telegram-Group-Chat-Summarizer-Bot); [barbashov/telegram_summarize_bot](https://github.com/barbashov/telegram_summarize_bot)

### Inferences
- Telegram users chose the app partly for privacy, so an AI that reads chats pushes against that identity.
- The concrete asks seen repeatedly are an off switch, no forced AI UI, and clarity on what is read and stored. Mira's Team Agent design should answer these up front: per-group consent, a visible memory indicator, "forget" controls and an easy remove or mute.

### Gaps
- No r/Telegram threads were directly retrieved. Reddit sentiment is reported only second-hand.

# User Sentiment, Reviews and Complaints: "Miro" (most likely Mira, the Telegram AI agent by The Open Platform)

**Research date:** 2026-11-05.

**How the research was done, and its limits (read first):**
- The Firecrawl search and scrape tools ran out of credits on the first call.
- WebFetch could not reach any page: producthunt.com and itbrief.co.uk both failed DNS resolution under the session's network policy. As a result, no page was opened in full.
- Every finding below comes from WebSearch results: link titles, snippets and the search tool's summaries.

**Quote reliability labels:**
- **[VERBATIM-TITLE]**: the exact link title or post text shown by the search engine. This is reliable as a quote, but X post text is cut off at the end.
- **[SNIPPET]**: text the search result showed as a quotation. It is probably verbatim, but it was not checked against the full page.
- **[PARAPHRASE]**: the search tool's summary or translation. **This is not a quote.** Do not present it as a user's own words.

**Dates:** X post dates were decoded from the status IDs in the URLs (Twitter snowflake IDs encode the posting time). Other dates come from the article date in the URL or the coverage date, where one was available.

## Key Question 0: Which product is "Miro"? (entity identification and confidence)

### Takeaway
No AI agent product called "Miro" that lives in Telegram could be found. The brief almost certainly means **Mira**: a Telegram-native AI agent and personal assistant from **The Open Platform (TOP)**, the team behind Telegram Wallet. Its website is **mira.tg**, its X handle is **@trymira**, and its bot handle is **@mira** (earlier reported as **@MiraAiBot**). **Confidence: about 80%** that Mira is the intended product. The rest is the chance of a very small or stealth "Miro" startup that search does not index.

### Cited Findings
- Searches for "Miro AI agent Telegram", "Miro Telegram bot", "miro t.me bot AI agent personal assistant 2026" and "Miro Telegram agent Product Hunt" found no Miro-branded Telegram agent. The results were either Miro the whiteboard company (Sidekicks agents, Support Bot, MCP connectors) or no-code Miro-to-Telegram automation templates (Pipedream, Latenode, Bardeen, Yoom). — [Miro What's New May 2026](https://miro.com/blog/whats-new-may-2026/); [Miro Support Bot (Beta)](https://help.miro.com/hc/en-us/articles/34159808034962-Miro-Support-Bot-Beta); [Pipedream Miro + Telegram](https://pipedream.com/apps/miro-custom-app/integrations/telegram-bot-api); [Bardeen Miro + Telegram](https://www.bardeen.ai/integrations/miro/telegram)
- Miro's own community has only a hobbyist thread about a Telegram bot that watches a board for changes. It is not a product. — [community.miro.com "telegram bot"](https://community.miro.com/ask-the-community-45/telegram-bot-6194)
- Mira is described as "a messenger-first AI agent built natively into Telegram". It works in personal and group chats, and users "can add @mira to a group or message it directly without any additional setup" [SNIPPET]. Coverage is from May 2026. — [IT Brief UK](https://itbrief.co.uk/story/mira-ai-agent-launches-inside-telegram-group-chats); [Dataconomy, 2026-05-20](https://dataconomy.com/2026/05/20/telegrams-ai-agent-ecosystem-mira/)
- TOP's launch post on X (2026-02-09): "Mira is now live in Telegram — the first personal AI assistant built by a TOP portfolio team. It handles all requests directly in chat, where users can search for information, answer questions, and generate text, images or videos In private mode, requests run via Cocoon's…" [VERBATIM-TITLE] — [@topdotco on X](https://x.com/topdotco/status/2020836050742981033)
- Russian-language coverage from February 2026 says Mira was launched by the developers of Telegram Wallet and gives the bot address as **@MiraAiBot** [PARAPHRASE]. — [T-Zh (t-j.ru)](https://t-j.ru/news/telegram-mira/); [Anti-Malware.ru, 2026-02-10](https://www.anti-malware.ru/news/2026-02-10-114534/48998); [vc.ru](https://vc.ru/telegram/2729251-chat-bot-mira-v-telegram-wallet-s-ii-vychisleniyami-cocoon)
- The official site calls itself "AI Agent & Personal AI Assistant for Telegram" [VERBATIM-TITLE]. — [mira.tg](https://mira.tg/)
- **Name collisions that will pollute any "Mira" search.** None of these is TOP's Telegram agent:
  - **Mira Network** (@miranetwork): "Building the Trust Layer for AI". — [X](https://x.com/miranetwork/status/2094456809595814074)
  - **"Mira – AI autopilot for your Telegram channel"**: a separate Product Hunt launch for channel content automation. Its FAQ is at usemira.pro. — [Product Hunt](https://www.producthunt.com/p/mira-10/mira-be4d3afe-dfc1-4e63-b0c5-327d3da7927d); [usemira.pro FAQ](https://usemira.pro/ru/faq)
  - **"Mira-AI Video/Image Generator"**: an iOS app by NGMOB PTE. LTD. — [App Store](https://apps.apple.com/us/app/-/id6743672316)
  - **Smartsupp Mira AI** and **Serviceform Mira**: e-commerce and support bots. — [Smartsupp](https://www.smartsupp.com/product-updates/2024-10-introducing-mira-ai/); [Serviceform](https://www.serviceform.com/mira)
  - The usemira.pro page itself notes that the name "Mira" is shared by several unrelated products [PARAPHRASE]. — [usemira.pro FAQ](https://usemira.pro/ru/faq)

### Inferences
- "Miro" in the brief is most likely a typo or mishearing of "Mira". The product details match: Telegram-native, agentic, works in group chats, has integrations.
- The two bot handles (@MiraAiBot in February 2026, @mira by May 2026) suggest TOP later secured the short @mira username, for example through Telegram's collectible username marketplace. **This is unconfirmed.**
- Heavy name collisions (Miro, Mira Network, other "Mira" bots) are a real problem for discoverability and trust. A user searching "Mira Telegram" can easily land on a different bot. That is relevant to onboarding design: verified-bot cues and a canonical deep link.

### Gaps
- The Mira website, Product Hunt pages and IT Brief articles could not be opened because WebFetch was blocked. The identification relies on search snippets.
- I could not confirm whether @MiraAiBot still exists or now redirects to @mira.
- If the brief really does mean a separate startup literally named "Miro", nothing about it was found.

## Key Question 1: What do users praise? Which use cases resonate most?

### Takeaway
The praise visible online is almost all positive X posts. These read as promotional or influencer posts, and some may be paid. They praise three things: summarizing busy group chats; doing things inside Telegram ("no new app, no new tab"); and memory and personality. Mira's own usage data shows plain chat dominates. Only a tiny share of users connect external tools.

### Cited Findings
- **Group chat summarization and staying inside Telegram.** X post by @defileo (2026-07-03): "I f*ckn hate I didn't find this product earlier. Product that summarized 200 group chat messages while I was away in 10 seconds. It's called @trymira, and it lives directly inside Telegram, no new app, no new tab. I typed one sentence -> it posted across 6 platforms + found…" [VERBATIM-TITLE] — [X](https://x.com/defileo/status/2073053615988830333)
- **Better than expected, after starting from a sceptical baseline.** X post by @gregwrites_yy (2026-08-11): "I have something to confess y'all. I went to try the Mira app on Telegram expecting the usual Ai chat, TG spammy shii. Another AI bot promising the world, delivering a canned FAQ. So I did what I always do: I just asked it straight up, "What can you actually do?" No fluff. No ma…" [VERBATIM-TITLE; truncated. The framing implies a positive turn, but the rest of the post was not visible.] — [X](https://x.com/gregwrites_yy/status/2087312579701997722)
- **Memory, personality and real actions.** X post by @Eyuel88 (2026-05-08): "Meet "Mira" The AI Agent that lives inside Telegram! An AI agent with memory, personality, and real actions that creates content, sends emails, and actually gets things done [emoji] > Mira is more than just another chatbot. She's an AI assistant with her own personality, opinions,…" [VERBATIM-TITLE] — [X](https://x.com/Eyuel88/status/2052745780876714461)
- The mira.tg homepage shows testimonials with a self-reported aggregate rating of **5 from 7 reviews**. The testimonials praise memory and group chat summaries [PARAPHRASE]. The page belongs to the company, so these are curated. — [mira.tg](https://mira.tg/)
- **Usage mix from Mira's H1 2026 report:** "Almost everyone chats with Mira. Reminders remain the smallest slice of what people do with Mira." [SNIPPET]. The report frames H1 as a shift from assistant to operator, saying "Mira doesn't just answer, it acts" [SNIPPET]. It also says voice is used by Pro subscribers [PARAPHRASE]. It covers search, image generation, automation, group chats, skills and tool actions. — [Mira H1 2026 report](https://mira.tg/report)
- The same report says only **0.4% of users connect external services** such as Gmail, Calendar or Sheets [PARAPHRASE]. — [Mira H1 2026 report](https://mira.tg/report)
- **Groups drive discovery.** TOP says more than one-third of new users first encounter Mira in group conversations before using it themselves. — [IT Brief UK](https://itbrief.co.uk/story/mira-ai-agent-launches-inside-telegram-group-chats); [Dataconomy](https://dataconomy.com/2026/05/20/telegrams-ai-agent-ecosystem-mira/)
- **Specialised agents.** Coverage says users are turning to specialised agents for financial insights, career planning and nutrition guidance [PARAPHRASE]. — [IT Brief UK](https://itbrief.co.uk/story/mira-ai-agent-launches-inside-telegram-group-chats)
- **Integrations.** Mira Connect links 800 to 900+ services: Google Calendar, Gmail, Notion, Drive, GitHub, Strava, Canva and others. Sources give different counts. — [TOP: Mira launches Connect with 800+ integrations](https://top.co/insights/mira-connects-800-integrations); [IT Brief UK](https://itbrief.co.uk/story/mira-ai-agent-launches-inside-telegram-group-chats)
- **Free access.** Early Russian coverage stresses that text use is free, which is a draw [PARAPHRASE]. — [T-Zh](https://t-j.ru/news/telegram-mira/); [Yablyk: "free neural network Mira in Telegram"](https://yablyk.com/079886-besplatnaya-nejroset-mira-v-telegram-kak-zapustit-i-polzovatsya/)

### Inferences
- **What resonates most in public posts:** catching up on group chats, the zero-install convenience of living inside Telegram, and the sense of an agent that acts rather than just answers.
- **The usage data tells a different story.** The integration story is marketed heavily, yet only 0.4% connect services. That is a large gap between the value proposition and actual activation. It is a strong candidate for a design proposal on progressive disclosure of integrations and contextual prompts to connect a tool at the moment of need.
- **Group chats are both the growth loop and the first impression for a third of new users.** How Mira behaves in groups for people who are not yet users (tone, how often it speaks, consent) is a high-leverage design surface.

### Gaps
- No independent, non-promotional long-form user review praising specific workflows was found.
- The X posts look like influencer or campaign content. Their sponsorship status is unknown.

## Key Question 2: What do users complain about?

### Takeaway
Direct complaints are sparse. All of the ones found are in Russian, from the launch period, and are paraphrased here.

| Complaint theme | What users said |
|---|---|
| Paywall and credits feel deceptive | A Pro subscription that "worked for two days" and then asked for tokens again |
| Repetitive answers | The bot repeats the same answers or links |
| Broken support | The support link does not work |
| Image quality | Mediocre image generation |
| Value | Scepticism about whether the product adds anything |

A third-party, competitor-run review adds that action flows feel heavier than a simple Q&A bot, and flags credit-based pricing.

### Cited Findings
- **Subscription and token confusion, perceived as deception.** In the T-Zh comments, a user says they bought Mira Pro, it worked for only two days, and then tokens were required again. They call it a deception (обман) and do not recommend the subscription [PARAPHRASE/translation; exact comment date not visible]. — [T-Zh comments](https://t-j.ru/news/telegram-mira/)
- **Repetitive replies, dead support link, weak images.** Another commenter complains that the bot sends the same answers or links to support, that the support link does not work, and that photo generation quality is low. They call it "так себе" ("so-so") for photo generation [PARAPHRASE; "так себе" probably verbatim]. — [T-Zh comments](https://t-j.ru/news/telegram-mira/)
- **"Advertising" and wasted compute.** A viewer commenting on a Russian YouTube walkthrough called the project advertising that wastes electricity and computing power [PARAPHRASE]. — [YouTube: "ИИ-ассистент Mira: лучший персональный помощник в Telegram? Полный разбор функций"](https://www.youtube.com/watch?v=hZTyk1PHtvY)
- **Pricing model behind the complaints.** Text use is free, but requests involving photos and video need tokens, which are bought with Telegram Stars [PARAPHRASE]. — [T-Zh](https://t-j.ru/news/telegram-mira/)
- **Pro price, low confidence.** One third-party page says Mira Pro costs 1,500 Telegram Stars a month and includes 2,000 tokens a month [PARAPHRASE]. The search could not find an official pricing page. — [proxy.best listing "Mira Pro — AI assistant in Telegram with premium models"](https://proxy.best/)
- **Heavier flows than a Q&A bot.** A comparison article says action-oriented flows can feel heavier than a simple Q&A bot and that pricing uses in-app credits for premium models [PARAPHRASE]. The publisher sells a competing Telegram bot, so it may be biased. — [Qualtir: Best AI Bots for Telegram 2026](https://qualtir.com/blog/best-ai-bots-for-telegram-2026)
- **Integration reliability is discussed but not detailed.** An aggregator says users discuss how well Mira connects to Gmail, Calendar and other services, but it reports no specific failures. It may be describing a different "Mira" [PARAPHRASE]. — [apimaster.ai Mira review](https://apimaster.ai/ai-agents/mira)
- **Privacy scepticism** is covered in Key Question 4. — [VGTimes](https://vgtimes.ru/news/147319-v-telegram-zapuschen-ii-assistent-mira-privatnost-ili-prosto-marketing.html)

### Inferences
- **The most design-relevant complaint is that the subscription and token model is opaque.** Users did not understand why a paid Pro plan still needed tokens. This points to unclear entitlement communication: what Pro includes, which actions cost tokens, and balance and expiry visibility.
- **Repeated answers and dead support links suggest weak recovery paths.** When the agent fails, users have no way to escalate.
- **Missing from the evidence:** no complaints were found about hallucinations, speed, notification spam or language support. Treat that as missing evidence, not as evidence that these problems do not exist.

### Gaps
- Exact wording and dates of the T-Zh and YouTube comments are unknown; the pages could not be opened.
- No English-language complaint threads (Reddit, Hacker News, Telegram groups) were found.
- No data was found on hallucinations, latency, onboarding drop-off, group notification noise or non-English quality.

## Key Question 3: What feature requests recur?

### Takeaway
No recurring user feature requests could be found in public sources. The only forward-looking items are the company's own roadmap: agent-to-agent interactions and a bounded payment sub-wallet. Design needs can be inferred from the complaints above.

### Cited Findings
- The roadmap includes agent-to-agent interactions and a dedicated payment sub-wallet for bounded purchases [PARAPHRASE]. — [IT Brief UK](https://itbrief.co.uk/story/mira-ai-agent-launches-inside-telegram-group-chats); [Dataconomy](https://dataconomy.com/2026/05/20/telegrams-ai-agent-ecosystem-mira/)
- Mira Connect builds on the agent's memory architecture, which tracks user preferences and context across conversations [PARAPHRASE]. — [TOP: Mira Connect](https://top.co/insights/mira-connects-800-integrations)

### Inferences
These are needs implied by the complaints, not stated requests:
- Clear Pro and token entitlements, and a visible balance.
- A support channel that works.
- Fewer repeated or canned replies.
- Better image quality.
- A plain-language "what can you actually do?" capability tour. The @gregwrites_yy post shows users probing for exactly this.

### Gaps
- The best places to find feature requests are Mira's Telegram community channel or group comments (via t.me/s/ previews) and replies to @trymira on X. Neither was searchable or fetchable in this session.

## Key Question 4: Are there trust and privacy concerns about giving the agent access to Telegram chats? How does the company respond?

### Takeaway
Yes. Russian-language tech media openly asked whether Mira's "private mode" is real privacy or marketing. The company's answer is architectural: a Private Mode that runs inference on Telegram's Cocoon network (TEE, Intel TDX, with encrypted prompts). No independent audit, no data retention policy and no direct company reply to critics were found. Mira's persistent memory across personal and group chats sharpens the concern.

### Cited Findings
- VGTimes headline: "В Telegram запущен ИИ-ассистент Mira: приватность или просто маркетинг?" ("Telegram launches AI assistant Mira: privacy or just marketing?") [VERBATIM-TITLE]. It questions whether the "digital amnesia" privacy mode is only marketing [PARAPHRASE]. — [VGTimes](https://vgtimes.ru/news/147319-v-telegram-zapuschen-ii-assistent-mira-privatnost-ili-prosto-marketing.html)
- An Estonian and Russian piece by abit.ee notes the promises of privacy and free use and urges readers to look past the claims [PARAPHRASE]. — [abit.ee (RU)](https://abit.ee/ru/sowtware/messendzery/telegram-mira-cocoon-chatgpt-nano-banana-google-veo-3-ai-assistant-blockchain-telegram-stars-privacy-ru)
- MEXC News says it remains to be seen whether Cocoon's privacy claims hold up to scrutiny [PARAPHRASE]. — [MEXC News](https://www.mexc.com/news/995982)
- **The company's position.** TOP's launch post says that "In private mode, requests run via Cocoon's" decentralized GPU network built on TON with encrypted execution [VERBATIM-TITLE fragment plus PARAPHRASE]. Private Mode is pitched to enterprise teams and privacy-focused users. — [@topdotco on X, 2026-02-09](https://x.com/topdotco/status/2020836050742981033); [IT Brief UK](https://itbrief.co.uk/story/mira-ai-agent-launches-inside-telegram-group-chats)
- Cocoon uses TEEs (Intel TDX) for confidential inference and keeps prompts encrypted. — [CyberInsider](https://cyberinsider.com/telegram-introduces-privacy-focused-ai-summaries-backed-by-cocoon/); [Let's Data Science](https://letsdatascience.com/news/telegram-launches-cocoon-for-private-ai-d465238c)
- Russian coverage also headlines the Cocoon private mode at launch. — [Computerra](https://www.computerra.ru/335790/v-telegram-predstavlen-ii-assistent-mira-s-privatnym-rezhimom-na-baze-cocoon/); [Anti-Malware.ru](https://www.anti-malware.ru/news/2026-02-10-114534/48998)
- **Memory scope.** Mira retains memory across personal and group interactions, which creates "persistent shared context across participants" [SNIPPET, company claim]. — [IT Brief UK](https://itbrief.co.uk/story/mira-ai-agent-launches-inside-telegram-group-chats); [TOP: Mira Connect](https://top.co/insights/mira-connects-800-integrations)
- The general sceptical baseline toward Telegram bots ("TG spammy shii … canned FAQ") appears even in a positive Mira post. — [@gregwrites_yy on X, 2026-08-11](https://x.com/gregwrites_yy/status/2087312579701997722)

### Inferences
- Private Mode looks like an opt-in mode, not the default. That would mean ordinary requests and group memory are handled under standard processing. This is **unconfirmed**, but the design implication holds either way: users need to see clearly which mode is on, what Mira remembers, and who in a group can see it.
- Group memory means participants who never opted in may have their messages remembered. That consent and visibility issue is a ripe area for a design proposal: memory indicators, a "forget this" control, and per-group memory settings.
- The company's answer is technical (TEE and Cocoon), not experiential. Users cannot verify TEE claims, so trust has to come from in-product transparency.

### Gaps
- Mira's privacy policy, data retention terms, and whether group messages are stored or used for training could not be checked; mira.tg could not be fetched.
- No independent audit of Cocoon's TEE attestation was found.
- No official company response to the "privacy or marketing?" criticism was found.

## Key Question 5: Ratings, app stores, Product Hunt and Telegram audience metrics

### Takeaway
Mira appears to be bot-only. No App Store or Google Play app for TOP's Mira was found. No Product Hunt launch for TOP's Mira was found (the "Mira" on Product Hunt is a different channel-autopilot product). Audience size is reported only by the company and promoters, and the figures conflict, ranging from 130K users at launch to "2M+ users".

### Cited Findings
- **Users at launch.** Early Russian coverage said the bot had passed 130,000 users [PARAPHRASE]. — [T-Zh](https://t-j.ru/news/telegram-mira/)
- **Monthly users.** Mira's blog says the counter on its official Telegram profile read **1,167,762 users per month**. The blog post is titled "Mira Just Crossed 1 Million Monthly Users Inside Telegram" [VERBATIM-TITLE plus PARAPHRASE]. — [Mira blog](https://mira.tg/blog/mira-1-million-monthly-users)
- **Total users.** TOP cites more than 2 million users [PARAPHRASE]. — [TOP insights](https://top.co/insights/mira-ai-assistant-telegram)
- **MAU claim on X.** A promotional X post in the results claimed over 550,000 monthly active users. The search tool did not clearly say which post. It may be [@ChristianDior31, 2026-08-14](https://x.com/ChristianDior31/status/2088241171067789642). Treat it as unverified.
- **OpenRouter.** OpenRouter lists Mira as "the leading AI agent inside Telegram". Mira claims rank #5 among AI productivity agents on OpenRouter and 460 billion tokens processed in H1 2026. Another post cites 440B, so the figures differ. — [OpenRouter: Mira](https://openrouter.ai/apps/mira); [Mira blog](https://mira.tg/blog/mira-ranks-5-among-global-ai-productivity-apps-on-openrouter); [Mira H1 report](https://mira.tg/report); [CodeSOTA OpenRouter snapshot, 2026-08-24](https://www.codesota.com/agentic/openrouter-apps/mira)
- **Third-party ranking.** A comparison site calls Mira one of the most-installed consumer agents on Telegram [PARAPHRASE]. — [Qualtir](https://qualtir.com/blog/best-ai-bots-for-telegram-2026)
- **Homepage rating.** The homepage shows a self-reported 5.0 rating from 7 reviews [PARAPHRASE]. — [mira.tg](https://mira.tg/)
- **The Product Hunt "Mira" is a different product** ("AI autopilot for your Telegram channel"). A tracker shows 0 upvotes, 1 comment, and #28 on its launch day [PARAPHRASE]. — [hunted.space](https://www.hunted.space/product/mira-10); [Product Hunt](https://www.producthunt.com/p/mira-10/mira-be4d3afe-dfc1-4e63-b0c5-327d3da7927d)

### Inferences
- The user numbers measure different things (total users, monthly users, MAU, and different dates) and all come from the company or its promoters. The safest framing is "company-reported roughly 1M+ monthly users by mid or late 2026".
- With no app store presence, there is no large public body of reviews. Telegram itself offers no review or rating mechanism for bots, so dissatisfaction tends to surface only in scattered comments.

### Gaps
- TGStat and Telemetr data for @mira or @MiraAiBot could not be retrieved, because the tools were blocked.
- Telegram's public t.me/mira page, which shows a monthly-users count, could not be fetched to verify the current number.

## Key Question 6: Community signals (Reddit, Hacker News, X, YouTube, Telegram)

### Takeaway
Community discussion of Mira is thin.

| Platform | What was found |
|---|---|
| Reddit | Nothing |
| Hacker News | Nothing |
| X | Promotional or influencer posts |
| Russian media and YouTube | Scattered sceptical comments |
| Telegram groups and channels | Could not be checked |

### Cited Findings
- A targeted search ("Mira Telegram bot reddit") found **no Reddit threads** about TOP's Mira. — Search on 2026-11-05. Results: [hunted.space](https://www.hunted.space/product/mira-10) and [T-Zh](https://t-j.ru/news/telegram-mira/), but no reddit.com threads.
- On X, the visible posts are positive and promotional in tone: [@defileo, 2026-07-03](https://x.com/defileo/status/2073053615988830333); [@Eyuel88, 2026-05-08](https://x.com/Eyuel88/status/2052745780876714461); [@gregwrites_yy, 2026-08-11](https://x.com/gregwrites_yy/status/2087312579701997722). The company account is [@trymira](https://x.com/trymira).
- A Russian YouTube walkthrough exists, and its comments include a sceptical "this is advertising" reaction [PARAPHRASE]. — [YouTube](https://www.youtube.com/watch?v=hZTyk1PHtvY)
- Third-party explainer and SEO guides exist, but they are not user voice. — [Netolink guide](https://netolink.com/mira/); [Efficiently Connected: "Mira on Telegram: The Messenger-Native AI Agent Bet"](https://www.efficientlyconnected.com/tag/telegram/)

### Inferences
- The low-key Reddit and Hacker News footprint fits Mira's audience. It looks consumer-heavy, Telegram-native and partly crypto/TON-adjacent and Russian-speaking, so feedback likely lives inside Telegram itself rather than on Western forums. User interviews or in-bot feedback would be needed to ground a proposal properly.

### Gaps
- Telegram channel and group comments (t.me/s/ previews), the full set of YouTube comments, and the replies and quote-posts on @trymira could not be retrieved. These are the highest-value next sources.

## Key Question 7: PROXY, not Mira-specific: common complaints about Telegram AI assistant bots in general

### Takeaway
**Proxy evidence, clearly labeled.** General concerns about Telegram AI bots cluster around:
- Uncertainty over what a bot in a group can read. Telegram's privacy mode and admin status determine this.
- Pervasive scam, phishing and impersonation bots, which lower trust in any new bot.
- Limits and paywalls on free bots.

Most sources here are vendor blogs, so they are useful for themes but not for measuring how common each problem is.

### Cited Findings
- **What a group bot can see.** Telegram Privacy Mode is on by default: a group bot receives commands aimed at it and replies to its messages, while bots added as admins receive all messages [PARAPHRASE]. — [Qualtir: Telegram AI chatbot for groups](https://qualtir.com/blog/telegram-ai-chatbot-for-groups)
- **Developer docs for open-source ChatGPT bots.** One project's docs say: "You should disable the privacy mode of the bot. Otherwise the bot will not receive the messages from the group chat." [SNIPPET; the search tool did not pin down which page] — [pokitoki on Docker Hub](https://hub.docker.com/r/pengshp/pokitoki); [buhe/chatgpt-telegram-bot on GitHub](https://github.com/buhe/chatgpt-telegram-bot)
- **Scam bots.** Malicious Telegram bots run fake surveys, quizzes and competitions that ask for personal details [PARAPHRASE]. — [NordVPN: Telegram scams 2026](https://nordvpn.com/blog/telegram-scams/)
- **Unwanted contact.** Bots can start conversations with users who have not blocked them, and attackers exploit default privacy settings [PARAPHRASE]. — [AwaitHuman: Why am I getting bot messages on Telegram?](https://www.awaithuman.dev/blog/why-am-i-getting-bot-messages-on-telegram)
- **AI impersonation and spam.** Admins report AI-generated scam messages, convincing admin impersonators and coordinated bot raids [PARAPHRASE]. — [Chainfuel: stop spam in your Telegram group](https://www.chainfuel.com/blog/how-to-stop-spam-in-your-telegram-group-2026)
- **Harmful bots.** AI "nudify" and deepfake bots on Telegram are built to survive takedowns, which adds to platform-level distrust of AI bots. — [Centre for Information Resilience](https://www.info-res.org/cir/articles/telegram-deepfake-bots-are-built-to-survive-takedowns/)
- **Limits and paywalls.** Bots usually cap messages per day, model access or group size. A competitor claims the official ChatGPT presence on Telegram requires Telegram Premium. **This is unverified.** [PARAPHRASE] — [Qualtir: ChatGPT Telegram bot setup](https://qualtir.com/blog/chatgpt-telegram-bot-setup)
- **Review activity is thin.** A review-platform listing for "ChatGPT on Telegram" invites users to "be the first to post a review" [SNIPPET]. Formal review activity for Telegram AI bots is thin in general. — [SourceForge](https://sourceforge.net/app/chatgpt-on-telegram/web-app/)

### Inferences
- Any Telegram agent starts with a trust deficit created by the scam-bot ecosystem. The @gregwrites_yy post about Mira ("TG spammy shii … canned FAQ") confirms that this baseline applies to Mira's first impression.
- Design responses could include:
  - Clear identity and verification cues.
  - Explicit disclosure of what Mira can see in a group, given privacy mode and admin status.
  - Consent-forward group onboarding.
  - Transparent usage limits before users hit the paywall.

### Gaps
- No Reddit or app store complaint corpus about Telegram AI bots specifically was found. The proxy themes rest mostly on vendor and security blogs, not on large samples of user voice.

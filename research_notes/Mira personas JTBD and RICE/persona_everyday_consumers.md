# Everyday consumer Telegram users as Mira personas: problems, needs and jobs-to-be-done

> **Scope.** Everyday consumers who might use Mira (@mira, mira.tg, by The Open Platform/TOP) as a personal AI assistant inside Telegram:
> - busy professionals doing life admin
> - students
> - creative or fun users (images, stickers, music, voice)
> - users in Telegram's largest markets: India, Russia/CIS, Indonesia, Brazil, Iran, Nigeria, Middle East
>
> **Research date:** 2026-11-05.
>
> **Not repeated here.** Mira-specific complaints, pricing details and features are in the sibling notes [user_sentiment_reviews.md](../Miro%20Telegram%20AI%20agent%20research/user_sentiment_reviews.md) and [product_features_ux_screens.md](../Miro%20Telegram%20AI%20agent%20research/product_features_ux_screens.md). They are cited only where they ground a persona.
>
> **Method and limits (read first):**
> - **Blocked hosts.** The session network policy blocked direct page reads. WebFetch and curl failed on datareportal.com, unite.ai, reddit.com, habr.com, vc.ru, t-j.ru, telegram.org, techcrunch.com, storyboard18.com, inc42.com and restofworld.org (connect_rejected or DNS failure, checked 2026-11-05).
> - **Firecrawl.** Out of credits ("Insufficient credits", 2026-11-05).
> - **GitHub was reachable.** The official Mira docs repo [Mira-Agent/mira-wiki](https://github.com/Mira-Agent/mira-wiki) (last commit 2026-05-08) was cloned and read directly.
> - **Everything else is search-result text** from the WebSearch tool (titles, snippets and the tool's own summaries). Treat it as unverified against the live page.
>
> **Labels:**
> - **[SNIPPET]**: text the search tool showed as a quotation from the page. Probably verbatim, not checked against the page.
> - **[VERBATIM-TITLE]**: the exact headline or URL slug.
> - **[PARAPHRASE]**: the search tool's summary or translation. **Not a quote.**
> - **[REPO]**: read directly from the GitHub source. Verbatim.
> - **[AGGREGATOR]**: a stats-compilation or SEO site with weak methodology.

## 1. Telegram demographics 2025–2026: scale, money, age, top countries, platform and device/data constraints

### Takeaway
Telegram passed **1 billion MAU in March 2025**. It has roughly **15M Premium subscribers (2025), about 1.5% of MAU**. Its audience is **young (about 52% aged 18–34) and male-skewed (about 57–62%)**. It is **overwhelmingly Android/mobile in its biggest markets**.

Telegram publishes no country breakdown. India is the largest market by downloads (Durov cites "150M+" Indian users, June 2026). Russia is the most intensive market (74% monthly reach among Russians 12+). Then come Indonesia, the CIS (especially Uzbekistan), Iran (used via VPN despite a ban), Nigeria and Brazil, where Telegram is declining.

Three of the largest markets had **state blocks or throttling of Telegram in 2025–2026**:
- India: a one-week national block in June 2026.
- Russia: calls blocked from August 2025, with phased throttling since February 2026.
- Iran: banned since 2018, plus near-total internet blackouts in 2026.

### Cited Findings
**Scale and money**
- **1B MAU (March 2025).** Durov announced on his channel (~2025-03-19/20) that Telegram had passed 1 billion monthly active users, calling WhatsApp a "cheap, watered-down imitation" [PARAPHRASE]. — [Kun.uz, 2025-03-20](https://kun.uz/en/news/2025/03/20/telegram-surpasses-1-billion-active-users-closes-in-on-whatsapps-dominance); [dev.ua](https://dev.ua/en/news/durov-povidomyv-pro-1-mlrd-aktyvnykh-korystuvachiv-shchomisiatsia-ta-nazvav-whatsapp-deshevoiu-pomiakshenoiu-imitatsiieiu-telegram-1742399465); [Business Insider NL](https://www.businessinsider.nl/telegram-hits-1-billion-active-users-as-ceo-pavel-durov-takes-swipe-at-meta-owned-rival-whatsapp/)
- **No newer official count.** No newer company-reported MAU figure for 2026 was found. Aggregators repeat "1B+", and one cites ~500M DAU (October 2025, unverified) [AGGREGATOR/PARAPHRASE]. — [RichAds](https://richads.com/blog/telegram-statistics/); [DemandSage](https://www.demandsage.com/telegram-statistics/)
- **First profitable year (2024).** Durov said 2024 revenue passed $1B and Telegram was profitable for the first time. Premium subscribers then "exceeded 12 million" (December 2024) [PARAPHRASE]. — [TechCrunch, 2024-12-23](https://techcrunch.com/2024/12/23/pavel-durov-says-telegram-is-now-profitable); [Malay Mail, 2024-12-24](https://www.malaymail.com/news/money/2024/12/24/telegram-founder-says-messaging-app-finally-makes-profit-as-revenue-rises-above-us1b/160911)
- **Premium above 15M (2025)** [PARAPHRASE]. — [Poder360](https://www.poder360.com.br/poder-tech/telegram-completa-13-anos-com-mais-de-1-bilhao-de-usuarios/); [DemandSage](https://www.demandsage.com/telegram-statistics/) [AGGREGATOR]
- **H1 2025 financials** (FT-reported investor materials, via secondary outlets) [PARAPHRASE]:
  - Revenue about $870M, up about 65%.
  - Premium subscription revenue about $223M, up about 88%.
  - Advertising about $125M, up about 5%.
  - Net loss about $222M, attributed to a drop in TON holdings.
  — [KuCoin News flash](https://www.kucoin.com/news/flash/telegram-2025-q1-q2-financials-revenue-up-65-but-net-loss-of-222m-due-to-ton-price-drop)
- **Stars revenue:** no reliable figure found (see Gaps).

**Age and gender** (all third-party panel estimates, mostly Similarweb-based) [AGGREGATOR/PARAPHRASE]
- 18–24: about 22.5–23.8%. 25–34: about 29.4–29.7%. Together, 18–34 is about 52–54%.
- Male share: 56.8% in the Similarweb-based figures; other sites say 58.6–61.6%.

— [DemandSage](https://www.demandsage.com/telegram-statistics/); [Sidetrain](https://sidetrain.com/guides/telegram-users-demographic-statistics); [Thunderbit](https://thunderbit.com/blog/telegram-stats)

**Countries and markets**
- **No official country split.** Telegram does not publish user counts by country.
  - Statista (2025) ranks **India first and Russia second by app downloads**; the figures are paywalled [PARAPHRASE]. — [Statista](https://statista.com/statistics/1336855)
  - One compilation lists downloads of India 104.04M, Russia 34.4M and Indonesia 27.21M (period unclear) [AGGREGATOR]. — [DemandSage](https://www.demandsage.com/telegram-statistics/)
- **India (June 2026):**
  - **Block.** India blocked Telegram nationwide **until 2026-06-22** under IT Act §69A, ahead of the NEET-UG re-exam after a paper leak. Editing of sent messages stayed disabled until 2026-06-30, and app stores were told to de-list the app [PARAPHRASE]. — [The Star/Reuters, 2026-06-16](https://www.thestar.com.my/tech/tech-news/2026/06/16/india-blocks-telegram-messaging-app-until-june-22-government-says); [The Wire](https://m.thewire.in/article_pdf/government/government-blocks-telegram-app-till-june-22-over-neet-ug-exam); [Free Press Journal](https://www.freepressjournal.in/tech/telegram-ban-to-be-lifted-in-india-today-but-message-editing-restriction-stays-in-place-till-june-30)
  - **Durov's response.** He said the ban "punishes 150M+ ordinary Telegram users in India" [SNIPPET]. — [Reclaim The Net](https://reclaimthenet.org/india-shut-down-telegram-for-150-million-users-over-one-exam-leak) ("India shut down Telegram for 150 million users over one exam leak" [VERBATIM-TITLE])
  - **Restored.** Telegram returned to Google Play on 2026-06-23. App Store status was reported inconsistently. — [Business Today, 2026-06-23](https://www.businesstoday.in/technology/news/story/telegram-returns-to-google-play-store-in-india-restoring-access-for-android-users-538593-2026-06-23); [Free Press Journal](https://www.freepressjournal.in/tech/telegram-services-restored-in-india-now-listed-on-app-stores-once-again)
  - **Students affected.** Headline: "We received practice papers through the app: students highlight demerits of Telegram suspension" [VERBATIM-TITLE, approximate]. — [NewKerala, June 2026](https://www.newkerala.com/news/a/we-received-practice-papers-through-app-students-highlight-807.htm)
- **India, students' study layer:**
  - Telegram is "the go-to platform for test-prep in India but has a piracy problem" [VERBATIM-TITLE; older article]. — [FactorDaily](https://archive.factordaily.com/telegram-turns-go-to-platform-for-test-prep-in-india-but-has-a-piracy-problem/)
  - Telegram became the main file-sharing layer for UPSC aspirants, partly because of WhatsApp file-size limits, and because channel admins can broadcast "without group chaos" [PARAPHRASE]. — [BharatNotes](https://bharatnotes.com/faq/coaching/telegram-groups-and-study-communities/)
- **Russia, reach.** Mediascope Q1 2025: monthly reach was **74% of Russians aged 12+** (73% a year earlier), daily reach 55% (from 49%), and time spent 47 min/day (from 44) [PARAPHRASE of a Mediascope summary]. — [ppc.world, May 2025](https://ppc.world/articles/lyubopytnye-issledovaniya-rynka-marketinga-i-reklamy-za-may-2025-goda/)
- **Russia, restrictions:**
  - Roskomnadzor blocked Telegram calls from August 2025 and began **phased throttling of Telegram traffic from February 2026** [PARAPHRASE].
  - Max, the state-backed messenger, became **mandatory pre-install from 2025-09-01**. Operators began sending login codes through Max from May 2026 [PARAPHRASE].
  - Comnews Research: Telegram's Russian audience **fell 286K to 95.69M in February 2026**, while Max was the only growing messenger [PARAPHRASE; the search tool did not say which result it came from].
  - Rumors of a full block on 1 April 2026 did not come true. A regional outlet (August 2026) says "restrictions will tighten, there will be no full block" [PARAPHRASE].
  — [Anti-Malware.ru, 2026-01-27](https://www.anti-malware.ru/news/2026-01-27-111332/48828); [SecurityLab](https://www.securitylab.ru/news/569438.php); [Peterburg2, August 2026](https://peterburg2.ru/news/telegram-v-rossii-ogranicheniya-uzhestochatsya-polnoy-blokirovki-ne-budet-229454.html); [Kod.ru, 2026-06-18](https://kod.ru/pochemu-tormozit-telegram); [eLama, February 2026](https://elama.ru/blog/glavnye-novosti-targeta-i-smm-za-fevral-2026-goda/); [vc.ru](https://vc.ru/telegram/2878804-telegram-pod-ugrozoy-blokirovki-sedmoy-shtraf)
- **Iran:**
  - **Ban.** Telegram has been blocked since 2018 but is still widely used through VPNs. Durov estimates about 50M Iranian VPN users. One Tehran E-Commerce Association report says about 90% of Iranians use a VPN. A 2024 law criminalized VPN use without a permit [PARAPHRASE]. — [Cointelegraph](https://cointelegraph.com/news/telegram-durov-iran-ban-backfire); [TechRadar](https://www.techradar.com/vpn/vpn-privacy-security/irans-vpn-mafia-blamed-for-delays-on-the-lifting-of-telegram-ban-heres-what-we-know)
  - **January 2026 shutdown.** A nationwide internet shutdown began in January 2026. Psiphon connections fell below 100K, from up to 6M daily before [PARAPHRASE]. — [The Star, 2026-03-17](https://www.thestar.com.my/tech/tech-news/2026/03/17/how-iranians-are-communicating-through-internet-blackout); [The Sun MY](https://thesun.my/news/world-news/iranians-bypass-14-day-internet-blackout/)
- **Uzbekistan / CIS:**
  - Telegram is the dominant messenger. A 2019 feature describes Uzbeks who "learned to love (and live on) the Telegram messenger app" [VERBATIM-TITLE]. — [Global Voices](https://globalvoices.org/2019/04/12/how-uzbeks-learned-to-love-and-live-on-the-telegram-messenger-app/)
  - Uzbekistan ranks 2nd in the world (after Russia) in number of Telegram channels, with more than 123K channels (2023) [PARAPHRASE]. — [Kun.uz](https://kun.uz/en/50659966)
  - The Ministry of Justice runs an AI chatbot, "Odil", inside Telegram for public-service questions [PARAPHRASE; launch date unconfirmed]. — [Buzb.uz](https://buzb.uz/en/news/the-ai-based-odil-chatbot-has-been-launched)
- **Brazil, Telegram in decline:**
  - Mobile Time/Opinion Box ("Assistentes de IA e mensageria no Brasil", February 2025) found Telegram's presence on smartphones **fell from 63% to 57%** in a year, and daily openers from 50% to 38% [PARAPHRASE]. — [Mobile Time, 2025-02-27](https://www.mobiletime.com.br/noticias/27/02/2025/telegram/)
  - Telegram peaked at 65% in 2023, while WhatsApp sits at about 99% [PARAPHRASE]. — [Correio Braziliense](https://www.correiobraziliense.com.br/cbradar/o-fim-do-telegram-no-brasil-dados-preocupam-especialistas/); [TecMundo](https://www.tecmundo.com.br/redes-sociais/403058-telegram-esta-em-queda-livre-em-usuarios-no-brasil-revela-pesquisa.htm)
- **Nigeria:**
  - Telegram's largest African market (Q3 2022: about 54% of the continent's users), with appeal partly tied to inflation and cost of living [PARAPHRASE; dated]. — [Africa.com](https://africa.com/top-10-news/how-a-messaging-app-takes-a-jab-at-nollywood)
  - **Data costs:** the average price of 1GB rose from ₦287.5 (2023) to ₦637.5 (2025), after a ~50% tariff hike in January 2025 [PARAPHRASE; the search tool did not say which result]. — [TechBuild Africa](https://techbuild.africa/mobile-data-nigeria-expensive-affordable/); [Stears](https://www.stearsng.com/article/overpriced-why-nigerians-pay-so-much-for-data)
  - Headlines: "How Nigerians spent ₦20.87billion daily on data in 2025" [VERBATIM-TITLE], [TechCabal, 2026-02-09](https://techcabal.com/2026/02/09/how-nigerians-spent-%E2%82%A620-87billion-daily-on-data-in-2025/); "Nigeria's internet users reach 148.2 million amid rising data costs" [VERBATIM-TITLE], [TechAfricaNews, 2026-02-20](https://techafricanews.com/2026/02/20/nigerias-internet-users-reach-148-2-million-amid-rising-data-costs/)
  - Mobile carries over 99% of internet traffic [PARAPHRASE].

**Platform mix and devices**
- **Android dominance.** Android 65%, iOS 28%, desktop 5%, web 2%. The source is unsourced [AGGREGATOR]. — [Sidetrain](https://sidetrain.com/guides/telegram-users-demographic-statistics)
- **iOS dominates in-app revenue.** Statista: 2024 in-app revenue net of fees was $116.15M, the largest share from iOS. BankMyCell: iOS is 79% of IAP [PARAPHRASE]. — [Statista](https://www.statista.com/topics/9640/telegram/); [BankMyCell](https://bankmycell.com/blog/number-of-telegram-users)
- **Voice transcription is rationed for free users.** Telegram opened voice-to-text to free users with **2 transcriptions per week** (late 2023). Premium is unlimited. — [Engadget](https://www.engadget.com/telegram-now-offers-all-users-limited-transcriptions-of-voice-messages-185114448.html)
  - The API docs show the cap is a server setting: "Users without a Telegram Premium subscription can only transcribe transcribe_audio_trial_weekly_number messages per week" [SNIPPET]. — [core.telegram.org/api/transcribe](https://core.telegram.org/api/transcribe)

### Inferences
- **Who the median user is.** The mass-market user is a young man aged 18–34 on Android, in India, Russia/CIS, Indonesia or Iran. Paying users skew iOS and toward the roughly 1.5% who already buy Premium. Mira's paying persona is therefore not its median persona.
- **Platform risk is a real job.** The top three markets each saw blocking or throttling in 2025–2026. Users in these markets plausibly value an assistant whose reminders, memory and history survive disruption (an export and continuity job).
- **Voice is an unmet need inside Telegram.** Free users get only about 2 native transcriptions a week. A bot that transcribes and acts on voice notes for free fills a gap Telegram deliberately rations to sell Premium. That likely explains why Mira's docs call voice "the most loved feature" (section 2).
- **Brazil is a weaker bet than its population suggests.** Telegram is shrinking there (57% of phones, 38% daily), and WhatsApp is near-universal.

### Gaps
- DataReportal (country ad reach, age by country) was blocked. No authoritative per-country MAU exists for India, Indonesia, Iran, Nigeria or the Middle East.
- No Telegram Stars volume or revenue data was found.
- No data was found on low-end-device share, app size or "Power saving mode" use in key markets.
- No 2025–2026 per-GB data prices were found for India, Indonesia, Brazil or Russia. The cable.co.uk results were 2020–21.
- The Middle East (UAE, Saudi Arabia, Egypt, Iraq) was not researched in depth. No usable sources surfaced.

## 2. Why do people use AI bots inside Telegram instead of the ChatGPT/Gemini apps?

### Takeaway
The motivation differs sharply by market.

- **Russia/CIS and Iran: access.** ChatGPT needs a VPN, a foreign phone number and a foreign card, or is sanctions-blocked. Telegram bots proxy the models with no VPN and accept locally purchasable payment. A large Russian-language bot ecosystem exists (one operator claims about 35M active users).
- **India and Indonesia: not access, but convenience and context.** ChatGPT is not blocked there, dominates usage, and paid tiers are free or cheap. A Telegram assistant has to win on zero-install, living where study channels, groups and voice notes already are, memory and proactive delivery.
- **Everywhere: no-new-app.** Meta's January 2026 ban of general-purpose chatbots on WhatsApp makes Telegram the largest open messenger for third-party AI.

### Cited Findings
**Russia and the CIS: access and payment**
- Russian guides say ChatGPT "doesn't work from Russia without VPN", and registering on OpenAI's site needs a foreign SIM card. Telegram bots work "without VPN and additional registration" [SNIPPET/translated]. — [Lifehacker.ru](https://lifehacker.ru/chatgpt-v-telegram/); [Hi-Tech Mail.ru](https://hi-tech.mail.ru/review/62196-chatgpt-bez-vpn/); [T-Zh "Мой ChatGPT"](https://t-j.ru/chatgpt-for-telegram/)
- A Habr author claims bots process requests "much faster than ChatGPT on the official site via VPN" (an author claim, not measured) [PARAPHRASE; Habr article not identified]. — [Habr](https://habr.com/ru/post/723428)
- A bot developer says the project is for people facing sanctions-related restrictions and unstable VPN [PARAPHRASE; repo not identified]. — [awesome.ecosyste.ms listing](https://awesome.ecosyste.ms/projects/github.com%2Fshliamb%2Ftelegram-bot-chatgpt-openai)
- **Freemium is the norm:**
  - One bot reviewed offered 50,000 free tokens a week plus a paid tier [PARAPHRASE]. — [Lifehacker.ru](https://lifehacker.ru/chatgpt-v-telegram/)
  - The aggregator bot Syntx AI pitches "more than 70 neural networks in one place, without VPN", with only 5 free tokens on its free tier [PARAPHRASE]. — [Workspace.ru](https://workspace.ru/blog/syntx-ai-neyroset-v-telegram-bote-kotoraya-umeet-vse-sozdavat-teksty-generirovat-video/); [Skillbox](https://skillbox.ru/media/code/chat-gpt-telegram/)
- **Scepticism toward wrappers.** A Russian marketing blog warns that most AI bots in Telegram are "просто обертка над дешевыми моделями" ("just a wrapper over cheap models") [SNIPPET]. — [Sostav](https://www.sostav.ru/blogs/288343/88419)
- **Ecosystem scale.** GPT4Telegrambot's co-founder says the team's several AI bots and 10+ channels reach about **35M active users** [PARAPHRASE of an interview; company claim, unverified]. — [Unite.ai interview](https://www.unite.ai/id/anna-veklich-co-founder-of-gpt4telegram-interview-series/)
- **How Russians pay.** The common route is buying Stars from third-party services via **SBP (Russia's fast-payment system) in rubles, about 1.59 ₽ per Star**, with instant credit. The App Store route "theoretically exists but practically doesn't work for Russian users" [PARAPHRASE; commercial guides]. — [vc.ru SBP guide](https://vc.ru/services/2711164-kak-kupit-zvezdy-telegram-po-sbp); [vc.ru Russia guide](https://vc.ru/telegram/3050731-kak-kupit-zvezdy-telegram-v-rossii); [DTF](https://dtf.ru/flood/4795624-kak-kupit-telegram-zvezdy)
- **Mira's own launch audience.** Mira's February 2026 launch audience was Russian-speaking free-AI seekers. Free text use was the hook (Yablyk; T-Zh) [PARAPHRASE, from the sibling note]. — [Yablyk](https://yablyk.com/079886-besplatnaya-nejroset-mira-v-telegram-kak-zapustit-i-polzovatsya/); [T-Zh](https://t-j.ru/news/telegram-mira/)

**Iran: sanctions plus censorship**
- OpenAI does not officially serve Iran (US sanctions). chatgpt.com blocks Iranian IPs, and Iranian payment methods fail [PARAPHRASE; low-quality sources]. — [Voidly](https://voidly.ai/ai-blocked/is-chatgpt-blocked-in-iran)
- One OpenAI forum user wrote that as of 2025-05-03 "I was surprised to find that I can use ChatGPT without any VPN or proxy" [SNIPPET; single anecdote]. — [OpenAI Community](https://community.openai.com/t/access-to-chatgpt-from-iran-without-vpn-may-2025-is-access-restored/1250817)
- Persian tech media publish lists of Persian-language ChatGPT bots on Telegram. One bot is described as "one of the best ChatGPT-based bots in Persian"; BuddyGPT is noted for only 25 free requests [PARAPHRASE/translated; lists dated about 2023]. — [Digikala Mag](https://www.digikala.com/mag/chat-gpt-telegram-robot/); [Digiato, 2023-04-12](https://digiato.com/article/2023/04/12/telegram-ai-bots)

**India and Indonesia: ChatGPT is available, dominant and cheap or free**
- **India:** 100M weekly ChatGPT users per Altman (February 2026), OpenAI's second-largest market. — [TechCrunch, 2026-02-15](https://www.techcrunch.com/2026/02/15/india-has-100m-weekly-active-chatgpt-users-sam-altman-says/)
  - "Half of ChatGPT users in India are students under 24, says OpenAI" [VERBATIM-TITLE, August 2025]. India has the largest student user base [PARAPHRASE]. — [Storyboard18](https://www.storyboard18.com/amp/digital/half-of-chatgpt-users-in-india-are-students-under-24-says-openai-79666.htm)
- **Indonesia:** ChatGPT held a **75.92% share** of AI chatbot use in April 2025 (StatCounter) [SNIPPET]. — [Katadata Databoks](https://databoks.katadata.co.id/en/technology-telecommunications/statistics/682eaf359e5d2/this-is-the-most-widely-used-ai-chatbot-in-indonesia-in-april-2025)
- Free and cheap tiers (section 5): ChatGPT Go free for 12 months in India from 2025-11-04; Jio–Google AI Pro free for 18 months; Airtel–Perplexity Pro free; ChatGPT Go and Gemini AI Plus at Rp 75,000 in Indonesia.

**Messenger-native convenience**
- Russian reviewers note there is "no need to install a separate app or browser extension, everything works inside the messenger" [PARAPHRASE]. — [Lifehacker.ru](https://lifehacker.ru/chatgpt-v-telegram/)
- **Meta's WhatsApp ban.** Meta banned general-purpose chatbots on WhatsApp from 2026-01-15. "1-800-ChatGPT won't work on WhatsApp after Jan 15, 2026" [SNIPPET]; more than 50M users had used it. — [OpenAI](https://openai.com/index/chatgpt-whatsapp-transition/); [9to5Mac, 2025-10-22](https://9to5mac.com/2025/10/22/meta-kicking-chatgpt-out-of-whatsapp-for-50m-users/)
- **Telegram's own AI bot push.** Telegram's May 2026 update added Guest Mode bots and AI sticker search (see the sibling note telegram_platform_and_agent_ux.md). — [Telegram blog, via the sibling note](https://telegram.org/blog/ai-bot-revolution-11-new-features)
- **Mira's docs on voice:** "**Voice is the most loved feature by our users** — and for good reason… Zero friction — press and hold to record, just like talking to a friend. No keyboard needed… Multilingual — speak in any language, Mira understands and responds in kind." [REPO] — [mira-wiki features/chat-and-voice.mdx](https://github.com/Mira-Agent/mira-wiki/blob/main/features/chat-and-voice.mdx)
- **Mira's "Life Hacks" page** lists consumer jobs [REPO]:
  - "Morning commute — dictate tasks, check emails, plan the day while driving"
  - "Before sleep — dictate tomorrow's to-do list with your eyes closed"
  - "Summarize 200+ messages — 'What happened while I was away?'"
  - "Try on clothes", "Color type analysis", "Photo restoration"

  — [mira-wiki use-cases/life-hacks.mdx](https://github.com/Mira-Agent/mira-wiki/blob/main/use-cases/life-hacks.mdx)

### Inferences
- **Two value propositions, not one:**
  - **CIS and Iran personas** get *"a world-class AI that just works here, and that I can pay for"*. Access and payment are the job. Competition is other Telegram wrapper bots (Syntx, GPT4Telegrambot and others) and local AIs, not ChatGPT itself.
  - **India and Indonesia personas** get *"AI that already lives where my groups, channels and voice notes are, remembers me and pings me"*. Here the competitor is a free ChatGPT, Gemini or Perplexity.
- **The WhatsApp ban helps less than it seems.** It removes ChatGPT from the messenger Indians, Brazilians and Indonesians use most, but those users must first be on Telegram. Mira cannot follow them into WhatsApp.
- **The wrapper prior is a trust tax.** The "wrapper over cheap models" prior (Sostav) plus Mira's model inconsistency (GPT-4o in the docs, "GPT 5 Mini" live; sibling note) means CIS users will probe which model they get.

### Gaps
- No Indian or Indonesian source explains why someone would use an AI bot in Telegram rather than the ChatGPT app. That motivation is inferred, not evidenced.
- No Telegram-bot usage figures exist for Iran, Nigeria or the Middle East.
- Mira's user split by country or language was not found. mira.tg/report was blocked, and the sibling notes have no geography data.

## 3. Pains with consumer AI assistants and Telegram AI bots

### Takeaway
Recurring 2025–2026 pains:
1. **Forgetting.** Context is lost within long chats and memory resets across chats.
2. **Unreliable reminders.** ChatGPT Tasks misfires, and Gemini's replacement of Assistant broke reminders and timers.
3. **Opaque credit systems** that charge for failed or unusable generations.
4. **Vague free-tier limits and paywalls.**
5. **Weaker quality in Hindi and other non-English languages**, and in code-mixed Hinglish.
6. **Wrapper and scam distrust** of Telegram bots.

Proactive morning briefings are now a premium feature in ChatGPT (Pulse, launched at the $200 tier). Mira Daily being free is therefore a differentiator, but notification fatigue is a risk.

### Cited Findings
**Forgetting and context loss**
- An OpenAI forum bug report says "After ~30–50 messages, GPT-4o often forgets earlier parts of the same conversation" [SNIPPET]. It reports blank new threads and ties some resets to a 2025-06-10 outage (summer 2025) [PARAPHRASE]. — [OpenAI Community](https://community.openai.com/t/bug-gpt-4o-memory-regression-context-loss-across-chats-and-inside-threads/1310926)
- A user reports exported chats coming back "fragmented, unordered, and missing essential data" [SNIPPET]. — [OpenAI Community](https://community.openai.com/t/critical-chatgpt-data-loss-engineering-fix-urgently-needed/1360675)
- Reddit snapshots from January to May 2026 show recurring "memory forgets" threads. Users' workaround is to keep "a dynamic document that it can refer to" [SNIPPET; specific thread not identified]. — [Reddit snapshot archive (example)](https://reddit.sentinel-team.org/posts/1qpj4ax/snapshots/2026-01-28T22%3A16%3A33.310829Z)

**Reminders and scheduled tasks**
- An OpenAI forum thread is titled "ChatGPT Tasks ('GPT-4o with Scheduled Tasks') Broken" [VERBATIM-TITLE, January 2025]. Users report no push notifications and test tasks that never fired [PARAPHRASE]. — [OpenAI Community](https://community.openai.com/t/chatgpt-tasks-gpt-4o-with-scheduled-tasks-broken/1091150)
- Tom's Guide: "I let ChatGPT Tasks schedule my day — and it was a trainwreck to say the least" [VERBATIM-TITLE]. It also said Tasks "will randomly pause a task" [SNIPPET]. A second Tom's Guide piece is titled "I tried ChatGPT Tasks and I'm sticking with Siri for now" [VERBATIM-TITLE]. — [Tom's Guide](https://www.tomsguide.com/ai/i-let-chatgpt-task-schedule-a-me-time-hour-and-it-booked-me-for-a-dentist-appointment); [Tom's Guide](https://www.tomsguide.com/ai/i-tried-chatgpt-tasks-and-im-sticking-with-siri-for-now-heres-why)
- A How-To Geek writer found push notifications and emails "all too easy to miss among the mass of other notifications" [SNIPPET]. — [Yahoo/How-To Geek](https://tech.yahoo.com/general/articles/tried-replacing-todoist-chatgpt-tasks-113013089.html)
- Digit called the delays "occasional" but "annoying for time-sensitive reminders" [SNIPPET]. — [Digit](https://www.digit.in/features/general/what-is-chatgpt-tasks-automating-productivity-one-reminder-at-a-time.html)
- **Gemini replacing Assistant (2026):**
  - Users say simple hands-free jobs like timers and reminders stopped working once Assistant was retired. The Reddit thread drew about 680 upvotes and 640+ comments in five days [PARAPHRASE]. — [PhoneArena](https://www.phonearena.com/news/pixel-owners-are-fed-up-and-threatening-to-leave-the-ecosystem-over-this-one-annoying-change_id183814)
  - In 2024, Google's own support page told users to switch back to Assistant for reminders [PARAPHRASE]. — [Android Authority](https://androidauthority.com/google-assistant-reminders-bug-3454118)
- **Mira's own reminder friction.** Mira asked for an IANA timezone before confirming a 9:00 pill reminder (X, 2026-08-11). Mira's H1 report says reminders are "the smallest slice of what people do with Mira" [SNIPPET]. — [X @gregwrites_yy](https://x.com/gregwrites_yy/status/2087312579701997722); [mira.tg/report](https://mira.tg/report) (both via the sibling note)

**Credits, tokens, failed generations and paywalls**
- **Adobe Firefly users on failed generations:**
  - "The app report an issue and nothing is generated but my credits get down anyway" [SNIPPET].
  - "I spent 625 credits for 2 times without a result" [SNIPPET].
  - A thread titled "I lose too many credits doing trial and error; the monthly cost should be based on downloads" [VERBATIM-TITLE].
  - One user proposed charging only when an image is successfully generated, not when "Generate" is clicked [PARAPHRASE].

  — [Adobe Community](https://community.adobe.com/questions-404/firefly-is-eating-my-credits-but-then-something-went-wrong-no-image-generated-and-credits-gone-that-s-borderline-dodgy-guys-please-contact-me-asap-1548278); [Adobe Community idea](https://community.adobe.com/t5/adobe-firefly-ideas/i-lose-too-many-credits-doing-trial-and-error-the-monthly-cost-should-be-based-on-downloads/idc-p/15316988); [Adobe Community, "unfair credit deduction"](https://community.adobe.com/feature-requests-405/unfair-credit-deduction-1629791)
- **Counter-example:** Scenario's help page says failed generations are refunded automatically, except Grok generations, which the provider charges for [PARAPHRASE]. — [Scenario Help](https://help.scenario.com/articles/6055400395-troubleshooting-image-generation-failures)
- **ChatGPT image limits:**
  - During the Ghibli surge, OpenAI capped free users at **3 images per day** (Altman, about 2025-04-01) [PARAPHRASE].
  - ChatGPT only says free users have "limited access" [SNIPPET].
  - Headline: "GPUs melting: OpenAI to limit ChatGPT image generation amid demand overload" [VERBATIM-TITLE, 2025-03-28].

  — [India TV News](https://www.indiatvnews.com/technology/news/chatgpt-s-ghibli-image-gen-feature-now-available-to-all-free-users-company-adds-million-users-in-1-hour-2025-04-01-983256); [Business Standard](https://business-standard.com/amp/technology/tech-news/openai-image-generation-limits-ghibli-trend-sam-altman-125032800179_1.html)
- **Mira-specific (sibling note):**
  - A T-Zh commenter paid for Pro, which "worked two days", then the bot demanded tokens. They called it "обман" (deception) [PARAPHRASE].
  - Mira's FAQ has to separate Pro, tokens and usage limits.

  — [T-Zh](https://t-j.ru/news/telegram-mira/); [mira-pro.com](https://mira-pro.com/)

**Language quality outside English**
- A commercial-chatbot news-accuracy benchmark found Hindi trailing: Gemini 3 Flash scored **90.0% in Hindi vs 98.0% in Russian**, and the gap widened for weaker models [PARAPHRASE; arXiv, about May 2026]. — [arXiv 2605.22785](https://arxiv.org/pdf/2605.22785)
- A 2025 Hinglish chatbot paper says models falter "on highly colloquial or regional Hinglish" [SNIPPET]. — [arXiv 2504.19070](https://arxiv.org/pdf/2504.19070)
- IAMAI–Kantar: 870M Indians used the internet in Indic languages in 2024 [PARAPHRASE, via a vendor guide]. — [CallMissed buyer guide](https://www.callmissed.com/blog/multilingual-ai-voice-agent-india-2026-buyer)
- A vendor claims global LLMs "hallucinate or return awkward, formal translations" for Hinglish [SNIPPET; marketing, unverified]. — [AICraftGen](https://aicraftgen.pages.dev/blog-post-14.html)

**Proactive briefings and notification load**
- ChatGPT Pulse launched 2025-09-25 for **Pro ($200/month) users only**. It sends 5–10 morning cards drawn from chats, plus optional Gmail and Calendar [PARAPHRASE]. — [TechCrunch, 2025-09-25](https://techcrunch.com/2025/09/25/openai-launches-chatgpt-pulse-to-proactively-write-you-morning-briefs); [Gizmodo](https://gizmodo.com/chatgpt-pulse-openai-morning-briefing-2000663894)
  - Reviewers praised "finite morning briefing cards—not an infinite feed" [SNIPPET] and asked whether it is "worth $200 a month" [SNIPPET]. — [Skywork review](https://skywork.ai/blog/chatgpt-pulse-review-the-morning-briefing-that-feels-like-a-personal-assistant/)
- **Mira Daily is free.** It has 6 styles (Professional, Brief, Deep, Warm, Magical, Sharp) and includes horoscope and tarot. — [mira-wiki](https://github.com/Mira-Agent/mira-wiki) (features/mira-daily, via the sibling note)

**Distrust of Telegram bots**
- Prior expectation of "TG spammy shii… a canned FAQ" (X, 2026-08-11), plus the "wrapper over cheap models" prior. — [X @gregwrites_yy](https://x.com/gregwrites_yy/status/2087312579701997722); [Sostav](https://www.sostav.ru/blogs/288343/88419)

### Inferences
- **Where Mira can beat ChatGPT for life admin.** Reminders delivered *as Telegram messages* in an app users open many times a day (Russians average 47 minutes in Telegram per day) directly answer the "easy to miss among notifications" and Gemini-reminder pains. The obstacles are setup friction (IANA timezone) and trust that reminders will fire.
- **Charge only on success.** Charging per successful delivery, with automatic refunds of failed generations shown in chat, is the specific fix users ask for in credit systems.
- **Language quality decides India.** A Hinglish- or Hindi-speaking student will notice formal or awkward replies. In India, Mira's language quality (voice in, voice out) is a deciding feature, not polish.

### Gaps
- No Reddit, r/india or r/Telegram threads were directly readable.
- No complaints about Telegram AI bots were found in Hindi, Indonesian or Persian.
- No measured rate of AI "notification spam" or opt-outs for proactive digests was found.

## 4. Creative and fun use cases (images, avatars, stickers, music, voice, companions) and what users complain about

### Takeaway
Viral photo-transformation trends are the biggest consumer AI moments in key markets:
- **Ghibli style (March–April 2025):** ChatGPT added 1M users in an hour.
- **Gemini "Nano Banana" saree and retro-Bollywood portraits (September 2025):** India became the top market, at up to 414K downloads a day.

Complaints cluster on three things:
1. **Free-tier caps and queues** (3 images a day).
2. **Privacy and identity fears about uploading faces**: a "creepy" mole incident, police advisories, fake sites.
3. **Paying credits for misses.**

Evidence on AI stickers and AI music complaints is thin. Companion and "AI girlfriend" bots are a visible Russian-language Telegram genre.

### Cited Findings
- **Ghibli (2025-03-28 to 04-01):** "ChatGPT's Ghibli image gen feature now available to all free users; company adds million users in 1 hour" [VERBATIM-TITLE]. Free users were capped at 3 images a day. — [India TV News, 2025-04-01](https://www.indiatvnews.com/technology/news/chatgpt-s-ghibli-image-gen-feature-now-available-to-all-free-users-company-adds-million-users-in-1-hour-2025-04-01-983256); [Business Standard, 2025-03-28](https://business-standard.com/amp/technology/tech-news/openai-image-generation-limits-ghibli-trend-sam-altman-125032800179_1.html)
- **Nano Banana saree trend (September 2025):**
  - Headline: "India becomes top market for Google's Nano Banana" [VERBATIM-TITLE]. Daily downloads peaked at **414,000 on 2025-09-13** after the 2025-09-01 update [PARAPHRASE]. — [Storyboard18](https://www.storyboard18.com/digital/india-becomes-top-market-for-googles-nano-banana-81159.htm)
  - **Privacy scare.** Instagram user Jhalak Bhawnani said the edit added a real mole not visible in her uploaded photo. Her warning: "Whatever you are uploading on these AI platforms, please be safe" [SNIPPET]. — [The Week, 2025-09-16](https://www.theweek.in/news/sci-tech/2025/09/16/beware-of-nano-banana-ai-saree-trend-creepy-ai-edits-on-google-gemini-scares-users-how-to-protect-your-privacy.html); [Free Press Journal](https://www.freepressjournal.in/tech/indian-instagram-users-creepy-experience-with-google-gemini-nano-banana-ai-saree-trend-goes-viral-watch-video)
  - **Warnings.** IPS officer V.C. Sajjanar posted an advisory that "falling into the trap of the 'Nano Banana' craze can be risky" [SNIPPET]. Experts flagged identity-theft and deepfake risks, and scam sites imitated Nano Banana to harvest photos [PARAPHRASE]. — [Storyboard18](https://www.storyboard18.com/digital/is-gemini-nano-banana-tool-safe-ai-craze-sparks-warnings-over-privacy-and-security-80939.htm); [Asianet Newsable](https://newsable.asianetnews.com/amp/technology/google-gemini-nano-banana-saree-experts-warn-of-identity-theft-deepfake-dmn-articleshow-hzvtggm); [CyberPeace](https://cyberpeace.org/resources/blogs/the-nano-banana-saree-trend-retro-glam-or-privacy-risk)
- **Mira already has trend-shaped features** [REPO]:
  - Image tricks: "Try on clothes — send a selfie + a clothing photo", "Color type analysis — send a selfie", "Photo restoration — 'Make this old photo look new'", "Batch generation". — [mira-wiki life-hacks.mdx](https://github.com/Mira-Agent/mira-wiki/blob/main/use-cases/life-hacks.mdx)
  - The image models include Nano Banana and Nano Banana Pro at 30 and 60 tokens (sibling note). — [mira-wiki features/images](https://github.com/Mira-Agent/mira-wiki)
- **Stickers:**
  - Telegram added AI-powered sticker search ("AI-Powered Sticker Search, Improved Videos and More" [VERBATIM-TITLE]) and has a native sticker maker. — [Telegram blog mirror](https://telegram.dog/blog/AI-sticker-search-video-improvements); [Telegram blog: sticker maker](https://telegram.org/blog/sticker-maker)
  - Third-party AI sticker bots exist; Sogni's docs say it "generates stickers from your prompt in seconds" [PARAPHRASE]. — [Sogni docs](https://docs.sogni.ai/learn/telegram-ai-sticker-bot)
  - A 2026 roundup calls AI sticker tools "fine for simple sticker graphics, but limited for generating original AI sticker characters" [SNIPPET; single, unverified source]. — [StickerForge roundup](https://stickerforge-web.pages.dev/blog/best-ai-sticker-makers)
  - Telegram stickers must be 512×512 transparent WebP, a common source of format failures [PARAPHRASE].
- **Companions.** vc.ru headline: "Нейросеть девушка ТГ: 6 Telegram-ботов для общения в 2025 году" ("AI girlfriend TG: 6 Telegram bots for chatting in 2025") [VERBATIM-TITLE]. — [vc.ru](https://vc.ru/services/2313012-neyroset-dievushka-tg-telegram-boty)
- **Mira-specific creative complaints (sibling note):** "так себе" ("so-so") photo generation; repeated identical answers. Music was listed as free in the docs but cost 60 tokens live. — [T-Zh](https://t-j.ru/news/telegram-mira/); [mira-harness experiments log](https://github.com/Masashi-Ono0611/mira-harness/blob/main/docs/experiments-log.md)

### Inferences
- **The fun persona's jobs are trend-driven and social.** Make *my* version of today's trend from a selfie, fast, then share it in my group or story. Mira sits inside the chat where sharing happens, which can beat the Gemini app's export-then-share loop.
- **Face upload is a trust moment.** Users want an explicit "your photo is deleted after generation / not used for training" assurance at upload time. That is a cheap, high-value addition. The India saree episode shows the fear is mainstream, not niche.
- **Pricing per trend image matters most.** One Mira image costs 30 tokens, roughly $0.39–0.60 (section 5). Against free-but-capped ChatGPT and Gemini, a "3 free trend edits a day" style allowance may convert better than token packs.

### Gaps
- No evidence was found on AI music use or complaints (Suno-style) among Telegram users.
- No direct user complaints about AI sticker bots were found.
- No data on how many Mira users generate media vs chat.

## 5. Willingness to pay and pricing expectations (Stars, regional purchasing power, credits vs subscriptions)

### Takeaway
**At list Stars prices, Mira Pro costs as much as ChatGPT Plus**: about $20–30 a month depending on how Stars are bought. That is **4–6× the regional "cheap AI" price point** of $4.50 a month (ChatGPT Go and Gemini AI Plus in India and Indonesia). In India the effective price anchor in late 2025–2026 is **₹0** (ChatGPT Go free for 12 months; Jio–Google AI Pro free for 18 months; Airtel–Perplexity Pro free).

Only about 1.5% of Telegram users pay for Premium, and Telegram itself prices Premium regionally (India ₹179 vs ₹469). Stars purchases are final, and Russians buy them through SBP resellers. Credit systems that charge for failures generate "deception" complaints.

### Cited Findings
**Stars mechanics and price**
- **Price is a live config value.** Telegram's API docs say the USD price of 1,000 Stars comes from the `stars_usd_sell_rate_x1000` config parameter, not a published table [PARAPHRASE]. — [core.telegram.org/api/stars](https://core.telegram.org/api/stars)
- **Retail per-Star price** [PARAPHRASE; third-party, the search tool did not pin which page gave which figure]:
  - About $0.02 per Star at retail (e.g., 50 Stars about $0.99; 2,500 about $49.99).
  - About $0.019 per Star via mobile in-app purchase, about $0.013 via Fragment.
  - Prices vary by region, and app-store commission (up to 30%) inflates the in-app price.
  — [Postmypost](https://postmypost.io/resources/telegram-stars-what-are-they-how-much-do-the-stars-cost-and-how-to-withdraw-them); [DEV: "what Telegram Stars actually pay"](https://dev.to/__747bb5a1521/i-built-a-paid-telegram-bot-heres-what-telegram-stars-actually-pay-3fo)
- **Russia:** about 1.59 ₽ per Star via SBP resellers (2025–2026) [PARAPHRASE]. — [vc.ru](https://vc.ru/services/2711164-kak-kupit-zvezdy-telegram-po-sbp)
- **Sales are final.** "All sales of Telegram Stars are final" [SNIPPET]. Refunds go through the bot developer via /paysupport (sibling note). — [Telegram Stars ToS](https://telegram.org/tos/stars)
- **Mira's price points** (sibling notes) [PARAPHRASE]:
  - Mira Pro: 1,500 Stars a month, including 2,000 tokens. — [mira-pro.com](https://mira-pro.com/) (ownership unverified)
  - Images 30 tokens, video 100. — [mira-wiki](https://github.com/Mira-Agent/mira-wiki)
  - 300 Stars buy 300 tokens; new users start with 150 tokens. — [Yablyk](https://yablyk.com/079886-besplatnaya-nejroset-mira-v-telegram-kak-zapustit-i-polzovatsya/)
  - USD prices of $9, $27 and $99 appear on different mira.tg compare pages. — [mira.tg vs ChatGPT](https://mira.tg/compare/mira-vs-chatgpt)

**Regional AI price anchors**
- **India, ChatGPT Go:** launched August 2025 at **₹399 a month**. OpenAI then offered it **free for 12 months to Indian users who enrolled from 2025-11-04** (announced 2025-10-28; card or UPI required; auto-renews at ₹399) [PARAPHRASE]. — [Smartprix](https://www.smartprix.com/bytes/openai-launches-chatgpt-go-in-india-for-just-rs-399-per-month/); [Business Standard, 2025-10-28](https://www.business-standard.com/technology/tech-news/openai-offers-chatgpt-go-free-for-one-year-in-india-125102800612_1.html); [Outlook Business](https://www.outlookbusiness.com/deeptech/artificial-intelligence/openai-offers-free-one-year-chatgpt-go-access-in-india-starting-november-4)
- **India, Jio + Google:** a free **18-month Google AI Pro** plan (valued at ₹35,100). It first covered users aged 18–25, then all Jio Unlimited 5G users [PARAPHRASE]. — [91mobiles](https://www.91mobiles.com/hub/reliance-jio-free-18-month-google-gemini-pro-subscription); [Engadget](https://engadget.com/ai/google-brings-free-gemini-access-to-indias-largest-carrier-130627625.html)
- **India, Airtel + Perplexity:** a free year of Perplexity Pro for Airtel's roughly 360M customers [PARAPHRASE]. — [TelecomTalk](https://telecomtalk.info/?p=1001760); [Digit](https://www.digit.in/?p=1186514)
- **Indonesia:** ChatGPT Go at **Rp 75,000 (about $4.50) a month** (2025-09-22), vs ChatGPT Plus at Rp 349,000. Google's Gemini AI Plus is also Rp 75,000; one report cites an introductory Rp 37,500 [PARAPHRASE]. — [TechCrunch, 2025-09-22](https://techcrunch.com/2025/09/22/after-india-openai-launches-its-affordable-chatgpt-go-plan-in-indonesia/); [Bisnis.com, 2025-09-23](https://teknologi.bisnis.com/read/20250923/84/1913978/openai-agresif-cari-pengguna-baru-chatgpt-go-dijual-murah-rp75000-di-ri); [TechCrunch, 2025-09-24](https://techcrunch.com/2025/09/24/googles-cheaper-ai-plus-plan-is-now-available-in-over-40-countries); [DQ India, "pricing war hits emerging markets"](https://www.dqindia.com/data-and-ai/openai-and-googles-new-ai-pricing-war-hits-emerging-markets-10493206)
- **Telegram's own regional pricing:** Premium in India was cut to **₹179 from ₹469 a month** (October 2022), making it the cheapest in the world at the time [PARAPHRASE]. — [Inc42](https://inc42.com/buzz/telegram-premium-subscription-price-62-indian-users/); [TechCrunch, 2022-10-01](https://techcrunch.com/2022/10/01/telegram-premium-india-price-change/)
- **Who pays:** Premium has about 15M subscribers on 1B MAU, about 1.5% (section 1), and iOS accounts for most in-app revenue (Statista; BankMyCell).

**Credits vs subscriptions**
- Users of credit systems object to paying for failures and trial-and-error, and ask to be charged per successful output (Adobe Community, section 3).
- **Mira-specific:** the "Pro worked two days then demanded tokens = обман" complaint. — [T-Zh](https://t-j.ru/news/telegram-mira/)

### Inferences
**Price comparison** (computed from the figures above; FX approximate):

| Item | Approx. USD/month |
|---|---|
| Mira Pro, 1,500 Stars via mobile IAP (~$0.019–0.02/Star) | **~$28.5–30** |
| Mira Pro, 1,500 Stars via Fragment (~$0.013/Star) | ~$19.5 |
| Mira Pro, 1,500 Stars via Russian SBP reseller (1.59 ₽/Star) | ~2,385 ₽ |
| ChatGPT Plus (US list) | $20 |
| ChatGPT Go / Gemini AI Plus, Indonesia | ~$4.50 |
| ChatGPT Go, India | ₹399 (~$4.5); **₹0 for 12 months for 2025-11 enrollees** |
| Google AI Pro via Jio, India | ₹0 for 18 months |
| Telegram Premium, India (2022) | ₹179 (~$2) |

Per-unit cost:
- One Mira image (30 tokens, if 1 token ≈ 1 Star) costs about $0.39–0.60.
- One video (100 tokens) costs about $1.30–2.00.

What this implies:
- **Mira Pro is priced like a Western premium plan** while its largest audiences sit in markets anchored at $0–5. The likely paying personas are CIS users, for whom Stars-via-SBP is one of the few working rails for paying for AI at all, and a minority of iOS and Premium users in any market. Students in India are unlikely to pay ~1,500 Stars.
- **Pricing levers that fit the evidence:**
  1. Regional Pro pricing in Stars, as Telegram does for Premium.
  2. Small, cheap trend packs (e.g., "10 images").
  3. Free-trial generations.
  4. **Charge-on-success with visible auto-refunds**, plus balance and "images left" shown in plain units rather than tokens.
- **Timing risk in India.** Free-ChatGPT-Go users who enrolled in November 2025 reach their 12-month renewal around now (November 2026), so price sensitivity there may shift. This is a hypothesis and has not been checked.

### Gaps
- No official Stars price table per country was found, and no evidence on whether Stars are priced lower in India, Indonesia or Nigeria in-app.
- No survey of Telegram users' willingness to pay for AI was found.
- Mira's conversion rate and ARPU were not found.
- Whether ChatGPT Go and the Jio/Airtel free offers are still open in November 2026 was not confirmed.

## 6. Language needs and privacy attitudes by market

### Takeaway
**Language:**
- Russian is the proven core: Mira's launch audience and the language of most Mira complaints.
- India needs Hindi, Hinglish and voice. Benchmarks show Hindi lags and code-mixed Hinglish is a known weak spot.
- Persian and Indonesian are untested for Mira.
- Mira's docs claim "speak in any language", but the docs themselves are English-only and the use-case pages target professionals and creators, not students or regional users.

**Privacy** is a defining trait of Telegram's identity but is fragile:
- Telegram began sharing IPs and phone numbers on valid legal requests (September 2024).
- Russia pushes the state messenger Max, and Iran criminalizes VPNs.
- India's face-upload panic shows mainstream consumers fear identity misuse.
- Mira's Cocoon "Private Mode" is met with "privacy or marketing?" scepticism (sibling note).

### Cited Findings
**Language**
- **Mira's language claims vs docs** [REPO]:
  - Mira claims "Multilingual — speak in any language, Mira understands and responds in kind" and stores "language" in the user profile memory. — [chat-and-voice.mdx](https://github.com/Mira-Agent/mira-wiki/blob/main/features/chat-and-voice.mdx); [core/memory.mdx](https://github.com/Mira-Agent/mira-wiki/blob/main/core/memory.mdx)
  - The docs config has no localization or language settings, and the use-case pages are for-creators, for-designers, for-developers, for-pms and life-hacks. — [docs.json](https://github.com/Mira-Agent/mira-wiki/blob/main/docs.json); [use-cases/](https://github.com/Mira-Agent/mira-wiki/tree/main/use-cases)
- **Japanese worked in testing.** Mira replied fluently to a Japanese prompt (June 2026). — [mira-harness experiments log](https://github.com/Masashi-Ono0611/mira-harness/blob/main/docs/experiments-log.md)
- **Hindi and Hinglish** (section 3): Hindi trails other languages on accuracy, and models falter "on highly colloquial or regional Hinglish" [SNIPPET]. — [arXiv 2605.22785](https://arxiv.org/pdf/2605.22785); [arXiv 2504.19070](https://arxiv.org/pdf/2504.19070)
- **Voice preference** [PARAPHRASE/SNIPPET]:
  - YouGov (2024, 17 markets): **India stands out for audio**. 49% prefer receiving text, 8% prefer voice notes, 40% like both equally. 48% prefer or equally like voice notes, vs 18% in Great Britain. — [YouGov](https://business.yougov.com/content/48604-do-consumers-prefer-sending-and-receiving-messages-in-audio-or-text-form)
  - A claim that Brazil sends 4× more voice notes than any market, attributed to Meta, is unverified. — [AI Spectrum India](https://aispectrumindia.com/news/10/369/heineken-launches-new-whatsapp-technology-that-swaps-voice-notes-for-real-life-conversations-over-a-beer.html)
  - WhatsApp reported 7B voice messages a day (2022). — [TechCrunch, 2022-03-30](https://techcrunch.com/2022/03/30/people-are-sending-7-billion-voice-messages-on-whatsapp-every-day)
- **Persian.** Persian-language ChatGPT bots on Telegram are a recognised category in Iranian tech media (about 2023). — [Digikala Mag](https://www.digikala.com/mag/chat-gpt-telegram-robot/)
- **Telegram's own AI and mixed languages.** A Cocoon GitHub issue (July 2026) notes "mixed-language pages get no summary" [SNIPPET, via the sibling note]. — [TelegramMessenger/cocoon issues](https://github.com/TelegramMessenger/cocoon/issues)

**Privacy**
- **Telegram's 2024 policy change.** Durov announced on 2024-09-23 that Telegram will share users' IP addresses and phone numbers with authorities in response to valid legal requests in criminal cases. It was framed as deterring criminals, and he said "99.999%" of users are not involved in crime [SNIPPET].
  - Reaction: concern among privacy-motivated users. Coverage notes that chats are not end-to-end encrypted by default [PARAPHRASE].

  — [404 Media](https://404media.co/telegram-changes-policy-says-it-will-provide-user-data-to-authorities); [BGR](https://bgr.com/tech/telegram-agrees-to-share-user-ip-addresses-and-phone-numbers-with-authorities/); [The Defiant](https://thedefiant.io/news/security/telegram-will-share-user-data-with-authorities-for-criminal-investigations)
- **Russia, the Max messenger.** Max is state-backed and mandatory pre-install (from 2025-09-01), and login codes move to it (May 2026) while Telegram is throttled (section 1).
- **Iran, high stakes.** VPN use without a permit has been criminal since 2024, and there are recurring national shutdowns (section 1).
- **India, face uploads.** The Nano Banana privacy panic and police advisory (September 2025, section 4).
- **India, platform risk.** The June 2026 government block of Telegram (section 1).
- **Telegram's own AI rollouts** drew "a huge betrayal to the majority userbase who preferred Telegram for its privacy features" (AlternativeTo, January 2026) [SNIPPET, via the sibling note]. — [AlternativeTo](https://alternativeto.net/news/2026/1/telegram-introduces-instant-ai-summaries-for-long-posts-and-full-liquid-glass-design-on-ios)
- **Mira's Private Mode.** VGTimes headline: "Mira: приватность или просто маркетинг?" ("privacy or just marketing?") [VERBATIM-TITLE]. Private Mode costs the same tokens (sibling notes). — [VGTimes](https://vgtimes.ru/news/147319-v-telegram-zapuschen-ii-assistent-mira-privatnost-ili-prosto-marketing.html)

### Inferences
- **Privacy means different things by market:**
  - **CIS and Iran personas**: privacy from the state. "Is my chat with the bot stored? Where? Can it be handed over?"
  - **Indian consumers**: privacy of their face and likeness, plus parents and family seeing things.
  - **Professionals**: privacy of linked accounts (Gmail, Calendar), which is the 0.4% integration activation problem.

  One generic "Private Mode" toggle does not answer any of these specifically.
- **Language quality decides Indian activation.** A "speak any language" claim needs proof in Russian, Hindi or Hinglish, Indonesian and Persian, ideally voice in and voice out. Mira's English-only docs and professional-only use-case pages signal that regional and student audiences are not yet designed for.

### Gaps
- No Mira quality data for Hindi, Indonesian, Persian or Portuguese.
- No survey of Telegram users' privacy attitudes toward AI bots specifically in India, Indonesia or Nigeria.

## 7. Jobs-to-be-done statements ("When [situation], I want to [motivation], so I can [outcome]") with supporting evidence

### Takeaway
Twelve JTBD statements are below. Strength reflects how directly the evidence supports each job: High means direct Mira or market evidence; Medium means strong adjacent evidence; Low means plausible but thin. The strongest are:
- access without VPN or foreign card (CIS/Iran)
- voice-note-to-action
- reliable reminders inside Telegram
- morning catch-up digests
- trend image edits from selfies
- predictable, fair spend

### Cited Findings
1. **Access without workarounds** (Strength: High; CIS, Iran). *When ChatGPT or Gemini is blocked, needs a VPN, a foreign SIM or a foreign card, I want to use a top AI inside Telegram, which I already open every day, so I can get answers and content without workarounds or legal risk.*
   - Evidence: Russian guides say ChatGPT "doesn't work from Russia without VPN" and needs a foreign SIM [SNIPPET/translated] ([Lifehacker.ru](https://lifehacker.ru/chatgpt-v-telegram/); [Hi-Tech Mail.ru](https://hi-tech.mail.ru/review/62196-chatgpt-bez-vpn/)).
   - OpenAI does not serve Iran ([Voidly](https://voidly.ai/ai-blocked/is-chatgpt-blocked-in-iran)), and about 50M Iranians use VPNs ([Cointelegraph](https://cointelegraph.com/news/telegram-durov-iran-ban-backfire)).
   - Syntx pitches "70+ networks without VPN" ([Workspace.ru](https://workspace.ru/blog/syntx-ai-neyroset-v-telegram-bote-kotoraya-umeet-vse-sozdavat-teksty-generirovat-video/)).
   - Mira's launch audience was Russian-speaking free-AI seekers ([Yablyk](https://yablyk.com/079886-besplatnaya-nejroset-mira-v-telegram-kak-zapustit-i-polzovatsya/)).
2. **Pay with rails that work here** (Strength: High; Russia). *When I want more than the free tier, I want to pay in a way that works from my country (Stars via SBP in rubles), so I can upgrade without a foreign card or a scammy reseller.*
   - Evidence: SBP Stars at 1.59 ₽, and the App Store "practically doesn't work" ([vc.ru](https://vc.ru/services/2711164-kak-kupit-zvezdy-telegram-po-sbp); [vc.ru](https://vc.ru/telegram/3050731-kak-kupit-zvezdy-telegram-v-rossii)).
   - Russian users discussing SBP and card payment for Mira (sibling note).
3. **Voice note to action** (Strength: High; all markets, strongest in India). *When I'm commuting, cooking or walking and can't type, I want to send a voice note and have it become a reminder, list, answer or reply, so I can handle life admin hands-free.*
   - Evidence: Mira: "Voice is the most loved feature by our users"; the Life Hacks page lists commute and before-sleep dictation ([REPO](https://github.com/Mira-Agent/mira-wiki/blob/main/features/chat-and-voice.mdx); [REPO](https://github.com/Mira-Agent/mira-wiki/blob/main/use-cases/life-hacks.mdx)).
   - Telegram rations free transcription to about 2 per week ([Engadget](https://www.engadget.com/telegram-now-offers-all-users-limited-transcriptions-of-voice-messages-185114448.html)).
   - India's high voice-note preference ([YouGov](https://business.yougov.com/content/48604-do-consumers-prefer-sending-and-receiving-messages-in-audio-or-text-form)).
4. **Reminders I can trust** (Strength: High as a pain; Medium for Mira fit). *When I need to remember a bill, pill, appointment or deadline, I want a reminder that fires on time, in my local time, in the app I check constantly, so I can trust it with things that matter.*
   - Evidence: "ChatGPT Tasks… Broken" and the "trainwreck" review ([OpenAI Community](https://community.openai.com/t/chatgpt-tasks-gpt-4o-with-scheduled-tasks-broken/1091150); [Tom's Guide](https://www.tomsguide.com/ai/i-let-chatgpt-task-schedule-a-me-time-hour-and-it-booked-me-for-a-dentist-appointment)).
   - Gemini reminder breakage ([PhoneArena](https://www.phonearena.com/news/pixel-owners-are-fed-up-and-threatening-to-leave-the-ecosystem-over-this-one-annoying-change_id183814)).
   - Mira reminders "arrive as Telegram messages". The pill reminder needed an IANA timezone first ([X](https://x.com/gregwrites_yy/status/2087312579701997722)).
   - Reminders are Mira's "smallest slice" of usage ([mira.tg/report](https://mira.tg/report)).
5. **Morning catch-up** (Strength: Medium-High). *When I wake to hundreds of unread channel and group messages, I want one short, personalized digest of what matters (plus weather and my day), so I can start the day without 30+ minutes of scrolling.*
   - Evidence: Russians spend 47 minutes a day in Telegram ([ppc.world/Mediascope](https://ppc.world/articles/lyubopytnye-issledovaniya-rynka-marketinga-i-reklamy-za-may-2025-goda/)).
   - "summarized 200 group chat messages while I was away in 10 seconds" ([X @defileo](https://x.com/defileo/status/2073053615988830333)).
   - ChatGPT Pulse sits behind a $200 a month plan, and reviewers like "finite cards—not an infinite feed" ([TechCrunch](https://techcrunch.com/2025/09/25/openai-launches-chatgpt-pulse-to-proactively-write-you-morning-briefs); [Skywork](https://skywork.ai/blog/chatgpt-pulse-review-the-morning-briefing-that-feels-like-a-personal-assistant/)).
   - Mira Daily is free.
6. **Study from Telegram materials** (Strength: Medium; India students). *When I'm preparing for an exam with PDFs and notes from Telegram channels, I want to ask questions about them, get explanations in Hindi or Hinglish and quiz myself, so I can study faster without paid coaching.*
   - Evidence: Telegram is India's test-prep layer ([FactorDaily](https://archive.factordaily.com/telegram-turns-go-to-platform-for-test-prep-in-india-but-has-a-piracy-problem/); [BharatNotes](https://bharatnotes.com/faq/coaching/telegram-groups-and-study-communities/)).
   - Half of India's ChatGPT users are students under 24 ([Storyboard18](https://www.storyboard18.com/amp/digital/half-of-chatgpt-users-in-india-are-students-under-24-says-openai-79666.htm)).
   - Mira's "send a PDF, get a 5-bullet summary" quick win ([REPO](https://github.com/Mira-Agent/mira-wiki/blob/main/use-cases/life-hacks.mdx)).
   - Hinglish quality gap ([arXiv](https://arxiv.org/pdf/2504.19070)).
7. **Join the trend before it passes** (Strength: High as a market behavior; Medium for Mira fit). *When a visual trend (Ghibli, saree, figurine) goes viral, I want to make my own version from a selfie in seconds, inside the chat where I'll share it, so I can join friends before the trend dies.*
   - Evidence: ChatGPT added 1M users in an hour during Ghibli ([India TV](https://www.indiatvnews.com/technology/news/chatgpt-s-ghibli-image-gen-feature-now-available-to-all-free-users-company-adds-million-users-in-1-hour-2025-04-01-983256)).
   - Nano Banana peaked at 414K downloads a day in India ([Storyboard18](https://www.storyboard18.com/digital/india-becomes-top-market-for-googles-nano-banana-81159.htm)).
   - Mira offers try-on and selfie tricks ([REPO](https://github.com/Mira-Agent/mira-wiki/blob/main/use-cases/life-hacks.mdx)).
8. **Play safely with my face** (Strength: Medium-High; India). *When I upload a selfie for a fun edit, I want to know it won't be stored, reused or leaked, so I can play without fearing deepfakes or identity misuse.*
   - Evidence: the "creepy" mole incident, "please be safe" ([The Week](https://www.theweek.in/news/sci-tech/2025/09/16/beware-of-nano-banana-ai-saree-trend-creepy-ai-edits-on-google-gemini-scares-users-how-to-protect-your-privacy.html)).
   - Police advisory and fake sites ([Storyboard18](https://www.storyboard18.com/digital/is-gemini-nano-banana-tool-safe-ai-craze-sparks-warnings-over-privacy-and-security-80939.htm)).
9. **Fair, predictable spend** (Strength: High). *When I pay for generations or a subscription, I want to see exactly what each action costs, what I have left, and never pay for failures, so I can spend without feeling cheated.*
   - Evidence: Adobe "credits get down anyway" ([Adobe Community](https://community.adobe.com/questions-404/firefly-is-eating-my-credits-but-then-something-went-wrong-no-image-generated-and-credits-gone-that-s-borderline-dodgy-guys-please-contact-me-asap-1548278)).
   - Mira Pro "обман" ([T-Zh](https://t-j.ru/news/telegram-mira/)).
   - Stars are final ([Telegram Stars ToS](https://telegram.org/tos/stars)).
10. **Keep my assistant through blocks** (Strength: Medium; India, Russia, Iran). *When my government blocks or throttles Telegram or AI services, I want my reminders, memory and history to survive and be exportable, so I don't lose my setup or miss important reminders.*
    - Evidence: India's June 2026 block ([The Star](https://www.thestar.com.my/tech/tech-news/2026/06/16/india-blocks-telegram-messaging-app-until-june-22-government-says)).
    - Russian throttling ([Kod.ru](https://kod.ru/pochemu-tormozit-telegram)).
    - Iran's 2026 shutdown ([The Star](https://www.thestar.com.my/tech/tech-news/2026/03/17/how-iranians-are-communicating-through-internet-blackout)).
    - ChatGPT-on-WhatsApp users had to link accounts to keep their history ([OpenAI](https://openai.com/index/chatgpt-whatsapp-transition/)).
11. **Remember me, stay fun** (Strength: Medium). *When I chat for fun or company, I want an AI with a personality that remembers me and doesn't repeat itself, so I can have conversations that feel personal, not canned.*
    - Evidence: the AI-girlfriend Telegram bot genre ([vc.ru](https://vc.ru/services/2313012-neyroset-dievushka-tg-telegram-boty)).
    - ChatGPT memory-loss complaints ([OpenAI Community](https://community.openai.com/t/bug-gpt-4o-memory-regression-context-loss-across-chats-and-inside-threads/1310926)).
    - Mira's "same answers" complaint ([T-Zh](https://t-j.ru/news/telegram-mira/)).
    - Mira personality marketing ([X @Eyuel88](https://x.com/Eyuel88/status/2052745780876714461)).
12. **Light on data** (Strength: Low; Nigeria and data-constrained users). *When mobile data is expensive or my connection is weak, I want text-first, lightweight replies and control over media, so I can use AI without burning my data bundle.*
    - Evidence: Nigeria's 1GB price rose from ₦287.5 to ₦637.5 between 2023 and 2025 ([TechBuild Africa](https://techbuild.africa/mobile-data-nigeria-expensive-affordable/)).
    - Mira replies are slow (4.8–61.6 s) and not streamed ([mira-harness](https://github.com/Masashi-Ono0611/mira-harness/blob/main/docs/mira-feedback.md)).
    - No direct user evidence.

### Inferences
- **Jobs 3, 4, 5 and 9 form a coherent "busy professional life admin" bundle** that Mira already half-supports (voice, reminders, Mira Daily). The gap is reliability, setup and pricing clarity, not missing features.
- **Jobs 6, 7 and 8 form the "student and creator" bundle.** They hinge on language quality, trend speed, face privacy and a near-zero price.
- **Jobs 1, 2 and 10 are market-structural.** They make Telegram-native AI uniquely valuable in the CIS and Iran, and they argue for continuity features (export, backup) everywhere.

### Gaps
- No primary interviews or survey data were available. All JTBD statements are inferred from public complaints, product docs and market data and should be validated with in-bot surveys.

## 8. Proposed personas (2–3), with the evidence base and strength for each

### Takeaway
Three personas are recommended:
- **P1: the CIS "workaround" professional (Russia/CIS, with an Iran variant).** Evidence: strongest. Likely payer.
- **P2: the Indian Gen-Z student-creator.** Evidence: strong on market, weak on Mira-specific data. Huge reach, near-zero willingness to pay.
- **P3: the voice-first, data-conscious emerging-market user (Indonesia, Nigeria, Brazil).** Evidence: thinnest. Treat as secondary, or fold into P2.

Each persona maps to a different value proposition and pricing logic.

### Cited Findings
**P1 evidence: CIS workaround professional**
- **Market:**
  - 74% monthly reach and 47 minutes a day in Russia ([ppc.world/Mediascope](https://ppc.world/articles/lyubopytnye-issledovaniya-rynka-marketinga-i-reklamy-za-may-2025-goda/)).
  - Uzbekistan and Russia lead in channels ([Kun.uz](https://kun.uz/en/50659966)).
- **Access and payment:**
  - ChatGPT needs a VPN and foreign SIM ([Lifehacker.ru](https://lifehacker.ru/chatgpt-v-telegram/)).
  - SBP Stars ([vc.ru](https://vc.ru/services/2711164-kak-kupit-zvezdy-telegram-po-sbp)).
- **Platform pressure:** throttling, call blocks and Max pre-install ([Anti-Malware.ru](https://www.anti-malware.ru/news/2026-01-27-111332/48828); [Peterburg2](https://peterburg2.ru/news/telegram-v-rossii-ogranicheniya-uzhestochatsya-polnoy-blokirovki-ne-budet-229454.html)).
- **Mira-specific:**
  - Russian launch coverage and complaints: Pro to tokens "обман", repeated answers, dead support link ([T-Zh](https://t-j.ru/news/telegram-mira/)).
  - Privacy scepticism ([VGTimes](https://vgtimes.ru/news/147319-v-telegram-zapuschen-ii-assistent-mira-privatnost-ili-prosto-marketing.html)).
  - The team's Russian-speaking diaspora roots (inferred in the sibling company note).
- **Competition:** Syntx, GPT4Telegrambot and other wrappers ([Workspace.ru](https://workspace.ru/blog/syntx-ai-neyroset-v-telegram-bote-kotoraya-umeet-vse-sozdavat-teksty-generirovat-video/); [Unite.ai](https://www.unite.ai/id/anna-veklich-co-founder-of-gpt4telegram-interview-series/)).
- **Iran variant:** OpenAI is unavailable, VPNs are criminalized, shutdowns recur, and Persian ChatGPT bots are common ([Voidly](https://voidly.ai/ai-blocked/is-chatgpt-blocked-in-iran); [TechRadar](https://www.techradar.com/vpn/vpn-privacy-security/irans-vpn-mafia-blamed-for-delays-on-the-lifting-of-telegram-ban-heres-what-we-know); [Digikala](https://www.digikala.com/mag/chat-gpt-telegram-robot/)).

**P2 evidence: Indian Gen-Z student-creator**
- **Scale:** 150M+ Telegram users in India (Durov, June 2026) ([Reclaim The Net](https://reclaimthenet.org/india-shut-down-telegram-for-150-million-users-over-one-exam-leak)). India is #1 for downloads ([Statista](https://statista.com/statistics/1336855)).
- **Study:** Telegram is the test-prep layer ([FactorDaily](https://archive.factordaily.com/telegram-turns-go-to-platform-for-test-prep-in-india-but-has-a-piracy-problem/)). Students were hit by the June 2026 block ([NewKerala](https://www.newkerala.com/news/a/we-received-practice-papers-through-app-students-highlight-807.htm)).
- **AI habits:** half of India's ChatGPT users are students under 24 ([Storyboard18](https://www.storyboard18.com/amp/digital/half-of-chatgpt-users-in-india-are-students-under-24-says-openai-79666.htm)). India has 100M weekly ChatGPT users ([TechCrunch](https://www.techcrunch.com/2026/02/15/india-has-100m-weekly-active-chatgpt-users-sam-altman-says/)).
- **Creative trends:** Ghibli and Nano Banana; India is the top Nano Banana market ([Storyboard18](https://www.storyboard18.com/digital/india-becomes-top-market-for-googles-nano-banana-81159.htm)).
- **Price anchor ₹0:** free ChatGPT Go, Jio AI Pro and Airtel Perplexity ([Business Standard](https://www.business-standard.com/technology/tech-news/openai-offers-chatgpt-go-free-for-one-year-in-india-125102800612_1.html); [91mobiles](https://www.91mobiles.com/hub/reliance-jio-free-18-month-google-gemini-pro-subscription); [TelecomTalk](https://telecomtalk.info/?p=1001760)).
- **Language and voice:** Hinglish weakness ([arXiv](https://arxiv.org/pdf/2504.19070)); India's voice-note affinity ([YouGov](https://business.yougov.com/content/48604-do-consumers-prefer-sending-and-receiving-messages-in-audio-or-text-form)).
- **Privacy:** fear of misuse of uploaded faces ([The Week](https://www.theweek.in/news/sci-tech/2025/09/16/beware-of-nano-banana-ai-saree-trend-creepy-ai-edits-on-google-gemini-scares-users-how-to-protect-your-privacy.html)).

**P3 evidence: voice-first, data-conscious emerging-market user**
- **Indonesia:** ChatGPT holds 75.92% share ([Katadata](https://databoks.katadata.co.id/en/technology-telecommunications/statistics/682eaf359e5d2/this-is-the-most-widely-used-ai-chatbot-in-indonesia-in-april-2025)); ChatGPT Go and Gemini AI Plus at Rp 75,000 ([TechCrunch](https://techcrunch.com/2025/09/22/after-india-openai-launches-its-affordable-chatgpt-go-plan-in-indonesia/)).
- **Nigeria:** Telegram's largest African market ([Africa.com](https://africa.com/top-10-news/how-a-messaging-app-takes-a-jab-at-nollywood)); rising data costs ([TechCabal](https://techcabal.com/2026/02/09/how-nigerians-spent-%E2%82%A620-87billion-daily-on-data-in-2025/)).
- **Brazil:** Telegram fell to 57% of phones and 38% daily, while WhatsApp is near-universal ([Mobile Time](https://www.mobiletime.com.br/noticias/27/02/2025/telegram/)).
- **WhatsApp's chatbot ban** pushes AI to other messengers ([OpenAI](https://openai.com/index/chatgpt-whatsapp-transition/)).

### Inferences
**P1: "Dmitry", the CIS workaround professional.** Composite: 27–40, Moscow, Almaty or Tashkent, office or IT job, iPhone or upper-mid Android.
- **Context:** Telegram is his primary internet (news channels, work chats, family). ChatGPT means a VPN plus a foreign card, and Telegram itself is being throttled.
- **Jobs:** 1 (access), 2 (pay locally), 3 (voice to task), 4 (reminders), 5 (morning digest of channels), 9 (fair spend), 10 (continuity).
- **Pains:** wrapper bots of unknown model quality, paywall surprises ("обман"), support dead ends, slow replies.
- **Willingness to pay:** the most plausible Mira Pro payer. He already buys Stars via SBP. Expects ruble-denominated clarity and a real refund path.
- **Language:** Russian first. English for work.
- **Privacy:** wary of state access (Max, Telegram's 2024 data-sharing change). Wants proof of what Private Mode stores.
- **Iran variant:** Persian, sanctions, VPN criminalization and shutdowns. Even higher value placed on access and privacy, but Stars purchase routes are unclear (gap).

**P2: "Priya" or "Arjun", the Indian Gen-Z student-creator.** Composite: 17–24, tier-1/2 city, budget-to-mid Android on Jio or Airtel, preparing for NEET, JEE, UPSC or a university exam.
- **Context:** Telegram is the study-material and fandom layer. ChatGPT, Gemini and Perplexity are free through promos.
- **Jobs:** 6 (study from PDFs in Hinglish), 7 (trend edits), 8 (safe selfies), 3 (voice), 11 (fun companion), 10 (block resilience, after June 2026).
- **Pains:** free-tier caps, formal or awkward Hindi, fear of face misuse, platform blocks.
- **Willingness to pay:** near zero for subscriptions; anchor ₹0–399. Small impulse packs or earned or referral tokens are more plausible than 1,500-Star Pro.
- **Language:** Hinglish and Hindi plus a regional language. Voice-friendly.
- **Mira fit:** reach and virality (shared trend images, group study summaries), not direct revenue.

**P3: "Rina" or "Ade", the voice-first, data-conscious emerging-market user.** Composite: 20–35, Jakarta, Lagos or São Paulo. WhatsApp for family; Telegram for channels, crypto and communities.
- **Jobs:** 3 (voice), 12 (low data), 7 (trends), 5 (digest).
- **Evidence status:** thin for Telegram-specific AI behavior. Recommend validating with in-bot language and geo telemetry before investing. Otherwise fold into P2 as "price- and data-sensitive mass market".

**Cross-persona implication for RICE.** The highest-leverage features shared across personas are:
1. Transparent, regional, charge-on-success pricing in Stars.
2. Rock-solid reminders with natural-language timezone capture.
3. Voice in and out in Russian, Hindi/Hinglish and Indonesian.
4. A face-upload privacy promise.
5. Export and continuity of memory and reminders.

### Gaps
- Persona sizing is not possible without Mira's country, language and device telemetry, which no public source provides.
- No user interviews were available. Personas are composites built from secondary evidence.
- Middle East personas (UAE, Saudi Arabia, Egypt) could not be built: no sources were retrieved.

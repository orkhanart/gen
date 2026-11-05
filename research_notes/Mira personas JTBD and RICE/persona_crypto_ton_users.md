# Persona Evidence Base: Crypto/TON-Native Telegram Users (Traders, Airdrop/Points Farmers, DeFi Users, Web3 Community Members) as Potential Mira Personas

> **Method note (read first).** Compiled 2026-11-05. This session's network policy blocked every crypto media, Reddit, Dune, X and Telegram host for WebFetch and curl (unchainedcrypto.com, 247wallst.com, theblock.co, cointelegraph.com, decrypt.co, coindesk.com, reddit.com/old.reddit.com and Reddit mirrors, dune.com, coingecko.com, coinshares.com, ton.org all failed DNS or returned proxy 403). Firecrawl had no credits, and the GitHub CLI token was invalid. **Almost every third-party fact below therefore comes from WebSearch result summaries and snippets.** These are marked **[snippet]**. Text in quotation marks marked [snippet] is wording the search tool presented as quoted from the page. I could not open the page to check it, so treat it as "reported wording", not a verified quote. Mira-specific facts reuse primary GitHub sources that sibling researchers read; see `../Miro Telegram AI agent research/competitive_landscape.md` and `product_features_ux_screens.md`. I did not repeat their material beyond what the personas need. No Reddit thread could be opened, so **no first-person Reddit quotes are verbatim**. Where I report community sentiment, it is a labeled paraphrase from search summaries.

---

## 0. Who are these users, what do they do in Telegram, and which 1–2 personas does the evidence support?

### Takeaway
The evidence supports two distinct personas. **(A) the "Speed Trader"** is an active memecoin/perps trader. They live in alpha/call channels, execute through Telegram bots (Trojan, BonkBot, Banana Gun, Maestro) or now web terminals (Axiom, GMGN), and increasingly trade perps inside Walt. **(B) the "TON Community Farmer"** is a mass-market, often emerging-market Telegram user. They came in through tap-to-earn and mini-apps (Notcoin, Hamster Kombat, Blum), hold small balances in Wallet/Walt, Tonkeeper or the new Gram wallet, and farm points and airdrops across many mini-apps and groups. DeFi yield users and Web3 community admins are sub-variants of A and B rather than separate personas.

### Cited Findings
**Persona A signals: active on-chain/perps traders**
- Telegram bots let traders "buy the coin being shilled without leaving the app". Speed and skipping web-DEX friction are the main stated draws [snippet, paraphrase of Solana bot guides, 2025–2026] — [graphdex.io](https://graphdex.io/en/blog/best-telegram-trading-bots-solana-2026); [getblock.io](https://getblock.io/blog/best-sol-trading-bot/)
- Trojan reportedly has ~1.7M total users and ~$23.4B lifetime volume (CoinGecko guide citing Dune, date unclear). Another source says ~2.5M users and $27B+ (Solana Floor citing Dune, date unclear). BONKbot has ~519K–573K users and $12.8–13.8B lifetime volume [snippet] — [CoinGecko](https://www.coingecko.com/learn/solana-telegram-trading-bots); [Solana Floor](https://solanafloor.com/news/trojan-introduces-comprehensive-onchain-trading-terminal); [MEXC](https://www.mexc.com/news/1020872)
- In 2025 active Solana traders migrated to web terminals. Axiom's share of Solana trading-platform volume reportedly rose from 4.41% (Feb 2025) to 57.33% (Jul 2025), and Photon fell from 30.7% (Jan) to <10% (Jul) [snippet] — [Messari: Axiom breaking open the trading bot market](https://messari.io/report/axiom-breaking-open-the-trading-bot-market); [StepData](https://stepdata.substack.com/p/solana-trading-bot-axiom-becomes); [Crypto Briefing: GMGN overtakes Axiom](https://cryptobriefing.com/gmgn-overtakes-axiom-24-hour-revenue/)
- Perps came to Telegram's mass wallet on **2026-04-02**. Wallet in Telegram integrated Lighter, with up to 50x leverage, 50+ markets (crypto, gold, oil, equities, ETFs) and positions from $1. It was pitched at "150M+ users", with US/UK restricted initially [snippet] — [The Block](https://www.theblock.co/post/396228/telegram-wallet-integrates-lighter-to-roll-out-in-app-perpetual-futures-trading-to-150m-users); [TOP insights](https://top.co/insights/telegram-wallet-lighter-perpetuals); [The Defiant](https://thedefiant.io/news/defi/wallet-in-telegram-rolls-out-perpetual-futures-trading-via-lighter)
- Perps trading in Telegram is being made social: "Trading together on Telegram: perps trading goes social with $100K trading competition" (headline) [snippet] — [Cointelegraph](https://cointelegraph.com/news/trading-together-on-telegram-perps-trading-goes-social-with-100k-trading-competition)

**Persona B signals: TON mass-market community members and farmers**
- Hamster Kombat claimed 300M+ users, of whom ~131M qualified for its Sept 2024 airdrop and ~2.3M were banned as cheaters. ForkLog reported it "loses nearly 260 million players post-listing" (headline) [snippet] — [The Defiant](https://thedefiant.io/hamster-kombat-faces-backlash-for-excluding-57-of-users-from-airdrop); [DailyCoin](https://dailycoin.com/hamster-kombat-bans-2-3m-players-as-hmstr-drop-riles-fanbase/); [ForkLog](https://forklog.com/en/hamster-kombat-loses-nearly-260-million-players-post-listing/)
- TOP said in Dec 2025 that 150M+ people had registered with Wallet in Telegram. Reporting notes many were onboarded via earlier gamified mini-apps, so these are registrations, not active traders [snippet] — [The Block, 2026-04](https://www.theblock.co/post/396228/telegram-wallet-integrates-lighter-to-roll-out-in-app-perpetual-futures-trading-to-150m-users)
- The Blum Telegram trading bot reportedly passed 700K–1M users. Its Memepad reportedly did $200M volume with 200K tokens created, figures from company-linked sources [snippet] — [BeInCrypto](https://beincrypto.com/blum-raises-5-million-ai-trading/); [ForkLog](https://forklog.com/en/?p=21107)
- Bitget Research says Telegram trends point to a crypto boom in **Africa and Eastern Europe** (headline). A related piece reports a 189% Africa crypto surge "as youth choose Telegram over traditional banking" [snippet; headline-level only] — [Bitget Research](https://www.bitget.cloud/blog/articles/bitget-research-reveals-telegram-trends-point-to-crypto-boom-in-africa-and-eastern-europe-press-release); [DigitalMoneyBox](https://digitalmoneybox.com/news/cryptocurrency/africa-crypto-surge-hits-189-as-youth-choose-telegram-over-traditional-banking)
- The wallet landscape changed in Aug–Sept 2026. Wallet in Telegram rebranded to **Walt**, "a separate app for trading, investing, earning yield, and managing assets across multiple chains". Telegram's new non-custodial **Gram** wallet took its place as the simple everyday wallet "for Telegram's one billion users". Accounts and addresses carried over. Reports date it Aug 31 (announcement) or Sept 28, 2026 (effective) [snippet] — [Crypto Briefing](https://cryptobriefing.com/telegrams-crypto-lineup-expands-as-wallet-rebrands-to-walt-alongside-new-gram-wallet/); [CCN](https://www.ccn.com/news/crypto/telegram-gram-wallet-launch-walt-rebrand/); [crypto.news](https://crypto.news/wallet-in-telegram-rebrands-as-walt/); [dev.ua](https://dev.ua/en/news/telegram-launched-the-non-custodial-gram-wallet-and-carried-out-a-large-scale-rebranding-of-crypto-services)
- Rogozov (TOP/Walt CEO): "We started as a simple wallet for buying Toncoin and bitcoin, and over four years have grown into a full-fledged crypto platform" [snippet] — [crypto.news](https://crypto.news/wallet-in-telegram-rebrands-as-walt/)
- Crypto investors rank X, Telegram and YouTube as their main information sources (CoinGecko survey, headline) [snippet; date unclear] — [ForkLog](https://forklog.com/en/coingecko-survey-reveals-crypto-communitys-preference-for-x-telegram-and-youtube/); [Crypto Briefing](https://cryptobriefing.com/crypto-social-media-usage)

### Inferences
- **Persona A, "Speed Trader" (working name).** A 20–35-year-old active trader, typically in CIS, Turkey, SEA, LATAM or the EU, with **multiple wallets** (a hot "bot wallet" plus a main/cold wallet). They are in **dozens of alpha/call channels and KOL groups** and trade memecoins (Solana, TON jettons) and now perps (Walt/Lighter, Hyperliquid). Tools: Trojan/BonkBot/Banana Gun/Maestro or Axiom/GMGN/Photon, Walt perps, wallet trackers, DexScreener-style charts. Telegram is both their **information feed and their execution surface**.
- **Persona B, "TON Community Farmer" (working name).** A mass-market Telegram user, often in an emerging market (Eastern Europe, CIS, Africa, South/Southeast Asia), with **small balances**. They joined crypto through tap-to-earn games or mini-apps and hold TON/USDT in Wallet/Walt, Tonkeeper or Gram. They are in **many project groups and channels**, complete tasks and quests, farm points across mini-apps, and may admin or moderate a community group. They are less technical, care about **not getting scammed**, and are sensitive to fees on small amounts.
- The **Walt → Gram split** maps onto the personas. Walt (trading, yield, perps, AI agents) serves Persona A. Gram (the simple native wallet) serves Persona B. Mira sits in TOP's orbit next to Walt, so its natural first financial persona is A, while its broad consumer base (2M users, 50K+ groups per the sibling notes) skews toward B.

### Gaps
- No demographic survey of Telegram crypto users (age, country, income, balance size) was found. The persona demographics are inferred from regional adoption reports and ecosystem composition.
- I could not open Reddit, X or Telegram to collect verbatim first-person persona quotes.

---

## 1. What are crypto users' biggest pains in Telegram?

### Takeaway
The pains cluster into four groups. (1) **Security and scams**: fake bots and phishing ("Safeguard" malware, up 2,000% in winter 2024–25), bot-wallet key custody, and repeated bot exploits (Maestro, Unibot, Banana Gun). (2) **Information overload with adverse selection**: dozens of noisy alpha groups, late entries, and KOL/insider dumps. (3) **Unfair or opaque reward systems** for farmers: shifting airdrop criteria, sybil bans, "dust" payouts. (4) **Execution costs**: ~1% bot fees, MEV sandwiches, failed transactions. Portfolio and airdrop tracking is a real but weakly documented pain.

### Cited Findings
**Scams, phishing and fake bots**
- Scam Sniffer reported a ~2,000% surge in malicious Telegram "verification" (fake Safeguard) attacks between Nov 2024 and Jan 2025. The fake bot runs PowerShell or clipboard-injected code that installs malware able to steal private keys [snippet] — [Cointelegraph](https://cointelegraph.com/news/malicious-telegram-group-scams-have-increased-2000-since-november-scam-sniffer); [SlowMist](https://slowmist.medium.com/new-scam-technique-fake-safeguard-scam-on-telegram-bb4803bad521)
- zeroShadow traced $1.8M+ stolen in one week of Jan 2025 and linked the campaign to the Amos Stealer malware targeting **Solana memecoin traders**. Telegram said: "A fake Safeguard bot was removed by Telegram moderators on January 3… Another fake Safeguard bot was removed on January 16" [snippet] — [Cointelegraph](https://cointelegraph.com/news/telegram-verification-bots-carry-crypto-stealing-malware/); [zeroShadow-related write-up](https://website-refresh.pages.dev/blog/safeguard-scams-amos-stealer-in-sight)
- The Security Alliance (SEAL) issued a PSA on fake Telegram support channels that act as drainers (title) [snippet] — [SEAL Radar](https://radar.securityalliance.org/psa-fake-telegram-support-channels-drainers/)
- Sibling note: scam bots, AI-generated scam messages, admin impersonators and bot raids are common in Telegram groups (NordVPN 2026; Chainfuel 2026) — see `user_sentiment_reviews.md`

**Bot exploits and custody risk**
- **Maestro** (2023-10-24) and **Unibot** (2023-10-31) router exploits drained approved tokens. CertiK says both routers "lacked necessary permission and parameter checks", with a combined ~$1.1M lost. Unibot reported ~$560K–$640K lost, paused its router and compensated users. Maestro reportedly refunded more than was lost [snippet] — [CertiK](https://www.certik.com/blog/maestro-and-unibot); [REKT](https://www.rekt.news/unibot-rekt); [Decrypt](https://decrypt.co/203795/unibot-telegram-bot-falls-prey-major-exploit-over-640k-crypto-lost)
- **Banana Gun** (Sept 2024): ~$3M was drained from 11 users. The cause was attributed to a vulnerability in the **Telegram message oracle**, and one analysis called it a manual, targeted attack. Banana Gun refunded from its treasury, "no tokens would be sold". It took the bots offline and relaunched with 2FA and transfer delays. Initial reports said ~$2M from 36 users [snippet] — [The Block, 2024-09-25](https://www.theblock.co/post/318074/banana-gun-exploit-refund); [QuillAudits](https://www.quillaudits.com/blog/hack-analysis/banana-gun-exploit); [Catenaa](https://investors.catenaa.com/?p=15995)
- A BlockSec co-founder on bot-generated wallets: "there's an inherent risk pertaining to the continued storage of the private keys on the platform. Should there be a data breach or hack, it could spell disaster for bot users". Halborn's COO said bots "lack a proper security audit, provide no insights into the storage methods for private keys". Bot chats are not end-to-end encrypted (secret chats do not work with bots) [snippet; The Block, 2023] — [The Block](https://www.theblock.co/post/241386/telegram-crypto-trading-bots-spark-fears-over-security-vulnerabilities)

**Information overload, late entries, adverse selection**
- Vendor blog anecdote: one trader runs **50+ Telegram channels with 1,000+ unread messages**. Some groups "spam 30 signals a day across every alt"; "Crypto markets generate thousands of signals daily… New traders drown in noise"; most traders "end up in multiple groups so they can cross-check signals" [snippet; vendor sources with commercial stake] — [flexe.io](https://flexe.io/blog/cryptocurrency-telegram-groups-2025-guide-real-alpha/); [flexe.io signals guide](https://flexe.io/blog/crypto-calls-telegram-2025-guide-to-trading-signals-that-actually-deliver/)
- Retail sees worse results than signal providers "because of slippage, network delays, and missed entries" [snippet; vendor] — [flexe.io](https://flexe.io/blog/crypto-telegram-signals-spot-real-winners-vs-scams-2025/)
- Filtering tools are emerging. TG Alpha Hunter is marketed as filtering "casual chatter, memes without substance, and repetitive noise" [snippet; vendor] — [aiindigo](https://aiindigo.com/blog/navigating-the-noise-a-raw-look-at-tg-alpha-hunter-in-2026)
- **Adverse selection:** one report finds the more followers an influencer has, the worse the memecoins they promote perform [snippet; single secondary source]. Solidus Labs found a Telegram ring ("PumpCell") running cross-chain pump-and-dumps that netted ~$800K in a month by exiting after copy-traders bought in. ZachXBT exposed 16 influencer accounts coordinating pump-and-dumps [snippet] — [search summary of KOL studies](https://www-web.itiger.com/news/2533928547); [Pulse/Solidus Labs](https://www.pulse.bot/crypto/news/telegram-ring-ran-pump-and-dump-network-that-netted-800k-in-a-month-solidus-labs-cace8ba5-a639-4447-b610-6bce2c9c40b8); [arXiv 2507.01963](https://arxiv.org/pdf/2507.01963v2)
- One vendor guide: "Subscriber count is close to useless for judging a memecoin call channel", and channels recycle each other's calls [snippet] — [logiover guide](https://logiover.pages.dev/guides/how-to-track-crypto-kol-twitter-telegram-signals-2026/)

**Airdrop and points-farming pains**
- Hamster Kombat (Sept 2024): about 57–63% of players were excluded. Criteria shifted. "On June 6, Hamster Kombat said that Points Per Hour (PPH) was the main criterion", and the focus later moved to "keys", which many felt was unfair. Players were banned just before the drop, and some legitimate players say they were wrongly disqualified. Payouts were called "dust" [snippet] — [The Defiant](https://thedefiant.io/news/tokens/unmet-expectations-spark-hamster-kombat-airdrop-outrage); [BeInCrypto](https://beincrypto.com/why-the-hamster-kombat-airdrop-failed); [Decrypt](https://decrypt.co/283246/hamster-kombat-players-gripe-airdrop-dust)
- Catizen faced similar anger over changed allocation weighting at the same time [snippet] — [search summary](https://thedefiant.io/news/tokens/unmet-expectations-spark-hamster-kombat-airdrop-outrage)
- By 2025, points programs were "the default pre-airdrop mechanism". Sybil filtering is harsh: one protocol filtered 803K addresses (~59% of assessed wallets). Repeating actions across wallets "can trigger Sybil detection" and blacklisting. LayerZero gave self-reported farmers 15% of their allocation [snippet; SEO-style guides] — [txchyon](https://txchyon.pages.dev/blog/airdrop-farming/how-projects-detect-sybil-wallets); [spark.money](https://www.spark.money/glossary/airdrop-farming); [KuCoin](https://www.kucoin.com/news/flash/web3-airdrop-history-12-landmark-anti-farming-projects-exposed)
- Farmers are advised to "treat points as probabilistic, cap your time and capital per campaign" [snippet] — [txchyon](https://txchyon.pages.dev/blog/airdrop-farming/optimizing-airdrop-points-safely). The points meta has "glaring drawbacks amid sybil capture and poor user retention" [snippet; DL News, older] — [DL News](https://www.dlnews.com/articles/defi/airdrops-promise-billions-but-users-are-complaining/)
- Airdrop farming has "professionalized on both sides: industrial sybil operations… forensic analytics and ruthless filtering" (July 2026) [snippet] — [airdropalert](https://airdropalert.com/?p=322215)

**Fees, gas, MEV and failed transactions**
- Standard Telegram bot fee is **~1% per trade** (BonkBot, Trojan), with a range of 0.5–1%. StonksBot (TON) charges 0.8% [snippet] — [MadeOnSol](https://madeonsol.com/blog/bonkbot-review); [tontradingbots](https://tontradingbots.pages.dev/reviews/stonksbot)
- Sandwich attacks are the main documented execution failure. EigenPhi's analysis says that when a trade fails, users "often feel tempted to increase the trade slippage", which bots then exploit (a stated conjecture). CoW DAO on a large loss: such trades "show that DeFi UX still isn't where it needs to be to protect all users" [snippet] — [EigenPhi](https://eigenphi.substack.com/p/fomo-makes-you-victim-of-jared); [Cointelegraph](https://cointelegraph.com/news/mev-bot-makes-10-million-in-crypto-swap-gone-wrong)
- During memecoin surges, web frontends "couldn't update prices fast enough", and since most Solana wallets don't allow gas adjustment, "numerous transactions failed". This is presented as a reason bots grew [snippet] — [Solana bot guides](https://gts.ai/defi/solana-telegram)

### Inferences
- **Trust is the master pain.** Every category (scam bots, bot hacks, KOL dumps, airdrop rug-of-criteria) is a failure of "can I trust this bot, channel or project?". An agent that acts on money inside Telegram inherits this prior. Mira's sibling sentiment note already found a "spammy TG bot / scam" prior among Mira users.
- **Persona A's overload pain is really a timing and adverse-selection pain.** They don't want fewer messages per se. They want the 1–2 actionable signals, early, with a quick check on whether the caller or insiders are dumping. **Persona B's pain is a fairness and tracking pain**: what counts, what's the deadline, am I eligible, is this link real.
- Telegram-native agents can see things web terminals can't: which groups the user is in and what is being said there. That is the unique data an in-Telegram agent could filter.

### Gaps
- No quantitative study of time spent or money lost to information overload was found. The "50+ channels / 1,000+ unread" figure is a vendor anecdote.
- No survey on portfolio-tracking or airdrop-tracking pain specifically (tools, spreadsheets, missed claims) was found. This pain is plausible but evidenced only indirectly.
- No aggregate 2025–2026 dollar figure for Telegram-specific crypto scam losses was found.

---

## 2. What do users say about Telegram trading bots (speed, fees, security, UX, custodial keys)? What do they love?

### Takeaway
Users love bots for **speed, staying inside Telegram where the alpha is, and automation** (snipes, auto-sell, stop-loss, copy-trade). They tolerate **~1% fees** and **custodial or bot-held keys** as the price of speed, and they mitigate risk with burner wallets. They distrust the anonymity of bot developers and have lived through several exploits. In 2025 the most active Solana traders shifted to **web terminals** (Axiom, GMGN, Photon), which suggests the inline-keyboard UX is a ceiling, not a moat.

### Cited Findings
**What they love**
- Speed and less friction: "Bots cut out the UX friction: no wallet popups, no page reloads, no hunting for pool links"; bots execute "faster than any human using a standard website" [snippet; attribution among these guide pages unclear] — [graphdex.io](https://graphdex.io/en/blog/best-telegram-trading-bots-solana-2026); [getblock.io](https://getblock.io/blog/best-sol-trading-bot/); [Coinmonks](https://medium.com/coinmonks/how-to-choose-the-best-solana-telegram-trading-bot-16ad2a27a754)
- Automation: "Auto-Sell" and "Stop-Loss" orders executed on price triggers are a top-cited benefit [snippet] — [CoinEx Academy](https://www.coinex.com/en/academy/detail/3209-top-solana-telegram-trading-bots?pId=31&sId=45)
- r/solana thread "Why do people use telegram bots instead of some…" (2025-03-11). Paraphrase from search summary: defenders said **the speed advantage is real**, and that a web app can ask for your private key just as a bot can, so the risk is the same either way [paraphrase] — [r/solana via redlib mirror](https://redlib.ssps.io/r/solana/comments/1j8xv3v/why_do_people_use_telegram_bots_instead_of_some)
- Trojan positions itself on UX and support: "Putting the user first in every way: Trojan credits $5B lifetime volume to UX, support" (headline) [snippet] — [Solana Floor](https://solanafloor.com/news/putting-the-user-first-in-every-way-trojan-credits-5b-lifetime-volume-ux-support)

**What they distrust or dislike**
- Same r/solana thread. Paraphrase: one commenter argued that with a Telegram bot you have **no idea who built it, no accountability, and no way to know your wallet details are safe** [paraphrase] — [r/solana via redlib mirror](https://redlib.ssps.io/r/solana/comments/1j8xv3v/why_do_people_use_telegram_bots_instead_of_some)
- Common folk practice is to use a **fresh wallet funded only with what you're willing to risk**, research the developer and past incidents, and enable Telegram 2FA [snippet] — [crypto.news](https://crypto.news/?p=14214007); [Webacy](https://world.webacy.com/telegram-trading-bots-greed-shouldnt-compromise-your-safety)
- Overtrading: bots "can make it easier to overtrade if you don't set guardrails" [snippet] — [graphdex.io](https://graphdex.io/en/blog/best-telegram-trading-bots-solana-2026)
- History of exploits and refunds (Maestro, Unibot, Banana Gun). See Q1. The refunds (Maestro over-refunded; Banana Gun paid from treasury) are part of why these bots retained users.

**The web-terminal shift (UX signal)**
- Axiom reportedly took Solana trading-platform share from 4.41% (Feb 2025) to 57.33% (Jul 2025), with peaks cited around 72%. It became "the fastest application to reach $200M in revenue" (headline). One 2026 piece claims on-chain terminals "replaced Telegram bots as the primary execution layer for active crypto traders in 2026". Some terminals have only Telegram alert notifications, not a Telegram trading bot [snippet] — [StepData](https://stepdata.substack.com/p/solana-trading-bot-axiom-becomes); [Messari](https://messari.io/report/axiom-breaking-open-the-trading-bot-market); [MadeOnSol](https://madeonsol.com/blog/photon-vs-axiom-solana-trading-terminal)
- DataWallet (2026, unsourced vendor claim): Trojan's share fell "from above 50% toward 44% as mobile-native rivals grew" [snippet] — [DataWallet](https://www.datawallet.com/crypto/best-crypto-telegram-bots)

### Inferences
- The **inline-keyboard button-matrix UX** (menus of buy 0.1/0.5/1 SOL, slippage, priority fee) is loved by experts for speed but is a learning-curve barrier. The Axiom migration suggests power users want **richer visual context** (charts, holder distribution, dev-wallet flags) than a chat keyboard gives. That argues for **Mini App + chat hybrid** designs: chat for intent and alerts, a Mini App sheet for review and confirm.
- **Burner-wallet behavior** is the users' own "spending limit". Users already run a mental model of "a small hot wallet I can afford to lose". That model maps directly to TON Agentic Wallets and Walt's dedicated agent account (Q3).
- **Refund behavior after hacks builds loyalty.** A Mira trust story could pre-commit to something comparable (an insurance or compensation policy for agent errors), though I found no evidence that any AI agent product offers this.

### Gaps
- I could not open Reddit, app-store reviews or bot support channels to collect verbatim complaints about inline-keyboard UX, failed transactions or support. Search found no direct UX-complaint corpus.
- No audit evidence on how Trojan or BonkBot store keys was found.

---

## 3. Attitudes toward AI agents executing trades or payments: approvals, limits, risk controls, undo, transparency, liability. Evidence on AI-agent trading products (incl. Walt + Mira) and reactions

### Takeaway
Crypto users are **split on wallet access but open to partial delegation**. In CoinGecko's 2025 survey, 37.5% don't trust AI with wallet access, but 87% would let an agent manage at least 10% of holdings. The industry has converged on a **"sandboxed budget + off-by-default execution + revoke"** pattern: TON Agentic Wallets (2026-04-28), Walt agent accounts (2026-10-20, no withdrawals, execution off by default) and Robinhood Agents (spend caps, approval/notifications). Real-world agent failures (Lobstar Wilde, AIXBT), mixed LLM trading results (Alpha Arena) and an IC3 finding that most "AI trading agents" don't actually trade autonomously all justify skepticism. **Liability is unaddressed** everywhere. **No independent user reaction to Walt + Mira was found.**

### Cited Findings
**Survey attitudes**
- CoinGecko survey (Feb–Mar 2025, n=2,632, released Apr 2025): **37.5% do not trust AI with wallet access, 34.5% trust, 27.9% neutral**. **87%** would permit AI agents to handle at least 10% of their crypto holdings, and **14.5%** would trust AI with 100%. Half believe AI agents would beat humans "most of the time". CoinGecko said the results are "indicative only" [snippet] — [Blocmates](https://www.blocmates.com/news-posts/less-than-15-of-crypto-users-trust-ai-to-manage-their-entire-portfolio-coingecko-finds); [Crowdfund Insider](https://www.crowdfundinsider.com/2025/04/238840-crypto-trading-and-investing-1-in-7-traders-willing-to-trust-ai-with-investment-portfolio-report/); [Cointelegraph](https://cointelegraph.com/news/majority-crypto-users-let-ai-agents-manage-portfolio)
- A Nov 2025 survey (n=2,022; original research body not named in the republished article): **64.6%** believe AI bots outperform humans in short-term crypto trading, 52.3% in long-term investing, and **~60%** would pay a monthly fee for a reliable AI bot [snippet; lower confidence] — [MEXC](https://www.mexc.com/news/256159)

**Platform patterns: limits, approvals, revoke**
- **TON Agentic Wallets (2026-04-28).** An open standard. Each agent gets its own wallet that the user funds and budgets, and the user can revoke access at any time. Agents hold and spend TON "without user approval on every transaction". The TON docs describe them as self-custody wallets for autonomous agents. Coverage said spending caps and revocation add "a layer of risk mitigation". Another outlet called it "the first serious attempt to normalize autonomous agents as on-chain actors inside a mainstream consumer app, with all the upside and all the systemic risk" [snippet] — [The Defiant](https://thedefiant.io/news/nfts-and-web3/ton-tech-launches-agentic-wallets-on-ton-telegram); [crypto.news](https://crypto.news/tons-agentic-wallets-turn-telegram-bots-into-spending-entities/); [docs.ton.org](https://docs.ton.org/ecosystem/ai/wallets); [TOP insights](https://top.co/insights/ton-tech-agentic-wallets)
- OECD.AI logged the launch as an **AI Hazard**: "this event does not describe a realized harm… but rather a plausible future risk stemming from the deployment of autonomous AI agents controlling funds" [snippet]. A crypto outlet asked whether an agent could drain a balance while still staying within its budget. Sibling note: commentators flagged that **liability is not addressed** — [OECD.AI](https://oecd.ai/en/incidents/2026-04-28-9e99); [MEXC](https://www.mexc.com/news/1096979)
- **Walt AI-agent perps (announced 2026-10-20).** Users connect **Mira, ChatGPT or Claude** to a **dedicated account they fund**. **Order execution is off until the user turns it on.** The agent "can trade only money the user moves into a dedicated account, and it cannot take that money out or send it anywhere else". Users can set trading parameters and disconnect the agent at any time (per advance release via The Defiant). Mira brings the experience into Telegram conversations, while ChatGPT and Claude users work in their own chat apps. The release did **not** specify leverage limits, cost, regions or the execution venue. Walt's perps had launched in April 2026 via Lighter with up to 50x [snippet] — [Unchained](https://unchainedcrypto.com/telegrams-walt-app-now-lets-ai-agents-open-and-close-perp-trades-for-users/); [The Defiant](https://thedefiant.io/news/defi/walt-plans-ai-perpetuals-trading-through-mira-chatgpt-and-claude); [Crypto Briefing](https://cryptobriefing.com/walt-ai-agents-perpetuals-trading-chatgpt-claude/); [RuntimeWire](https://runtimewire.com/article/walt-plans-ai-agent-trading-for-perpetual-futures-separate-from-telegram)
- Mira's X reportedly says "Mira prepares the trade, and the user approves it" [search summary, via sibling note] — [X @trymira](https://x.com/trymira); see `product_features_ux_screens.md`
- Rogozov argued that terminals and charts have a learning curve and that AI integration is a significant shift (Oct 2026) [via sibling note] — [24/7 Wall St., 2026-10-20](https://247wallst.com/investing/cryptocurrency/2026/10/20/you-can-now-let-chatgpt-or-claude-trade-crypto-futures-for-you-on-telegram-is-that-a-good-idea/)
- **Critical reaction:** Diario Bitcoin's headline says Walt lets ChatGPT and Claude trade crypto futures in Telegram "but the risk remains intact". Its argument is that the dedicated account limits withdrawals but does not stop a poor strategy or leverage from consuming the balance [snippet; paraphrase] — [Diario Bitcoin](https://www.diariobitcoin.com/criptomonedas/walt-permite-que-chatgpt-y-claude-operen-futuros-cripto-en-telegram-pero-el-riesgo-sigue-intacto/)
- **Robinhood Agents (2026-05-27):** "Agentic Trading" and an "Agentic Credit Card" let AI agents trade and make purchases on the user's behalf. Users set spend caps. Reports conflict on whether each trade needs approval. Per TechCrunch coverage, every AI-initiated trade triggers a push notification, and certain orders show a preview the user must approve. AltcoinBuzz (2026-10-01) reports "manual approval is also enabled by default during setup", which users can change later (single source) [snippet] — [Robinhood newsroom](https://robinhood.com/newsroom/robinhood-is-now-open-to-agents); [CoinMarketCap](https://coinmarketcap.com/academy/article/robinhood-ai-agent-trading); [AltcoinBuzz](https://www.altcoinbuzz.io/robinhood-launches-ai-that-can-trade-24-7-with-users-taking-the-risk)
- Mira's own current spend UX (for comparison): the generation cost card offers **✅ Confirm / ✅ Always yes / ❌ Cancel** and times out after 5 minutes. Wallet docs show "Send 5 USDT to @username" with no documented confirmation step, and the wallet is testnet or "Coming Soon" [primary GitHub, via sibling note] — [mira-harness experiments log](https://github.com/Masashi-Ono0611/mira-harness/blob/main/docs/experiments-log.md); [Mira-Agent profile README](https://github.com/Mira-Agent/.github/blob/main/profile/README.md)

**Evidence on AI trading agents' performance and failures**
- **Alpha Arena (Nof1, Oct–Nov 2025):** six LLMs, $10K each, trading perps on Hyperliquid. Qwen3-Max finished +22.32%. DeepSeek peaked around +120–126% mid-contest. GPT-5 reportedly ended about −62.66% and Gemini 2.5 Pro about −56.71%. Coverage noted the short duration and lack of statistical controls [snippet] — [SCMP](https://www.scmp.com/tech/tech-trends/article/3331425/alibabas-ai-model-outperforms-us-rivals-crypto-trading-showdown); [Decrypt](https://decrypt.co/345006/ai-crypto-trading-showdown-deepseek-grok-winning-gemini-implodes); [Yellow](https://yellow.com/learn/ai-models-real-money-trading-test)
- **IC3 paper:** most AI-agent crypto platforms show **no evidence of autonomous on-chain trade execution**. Token holders lost $191.7M collectively, and the top 1% captured 81.4% of gains [snippet] — [The Defiant](https://thedefiant.io/news/defi/ic3-paper-finds-most-ai-agent-platforms-no-evidence-autonomous-on-chain-trading); [Roundtable](https://roundtable.io/tech/study-finds-most-ai-crypto-trading-agents-arent-really-trading)
- **Lobstar Wilde (Feb 2026):** an autonomous Solana trading agent sent ~$250K–$441K in tokens to a stranger who had asked for ~$310. Investigators blamed "a decimal error and loss of conversational context" [snippet; amounts vary] — [Edge & Node](https://edgeandnode.com/articles/the-450000-lesson-no-one-asked-for); [BlockEden](https://blockeden.xyz/blog/2026/02/24/ai-agent-450k-accident-lobstar-wilde/); [KuCoin](https://www.kucoin.com/news/flash/ai-agent-lobstar-wilde-loses-440-000-in-solana-transfer-error)
- **AIXBT (Mar 2025):** ~55.5 ETH (~$105K) was lost after an attacker gained dashboard access and used malicious prompts to make the agent transfer funds [snippet] — [CryptoRank](https://cryptorank.io/news/feed/05b32-aixbt-agent-tricked-to-send-eth)
- A first-person forum post, "My AI Agent Lost $12K in a Weekend – A Cautionary Tale About Autonomous DeFi" (unverified) — [BlockEden forum](https://blockeden.xyz/forum/t/my-ai-agent-lost-12k-in-a-weekend-a-cautionary-tale-about-autonomous-defi/368)
- **Liability vacuum:** "When AI Agents Own Assets: Inside the $479M Legal Personhood Vacuum" (2026-04-22, headline). Another piece asks "who is responsible when an AI agent drains a wallet" [snippet; headline-level] — [BlockEden](https://blockeden.xyz/blog/2026/04/22/ai-agents-legal-personhood-vacuum-479m-agdp-liability-frameworks/); [RNWY](https://rnwy.com/blog/who-responsible-ai-agent-drains-wallet)
- **Hallucination risk in Mira research:** a hackathon tester saw Mira state "TON rebranded to Gram" and "USDT launched 2026", and advised "Surface the source, never auto-execute on it" (June 2026) [primary GitHub]. Note: Telegram later launched a *Gram* wallet (Aug–Sept 2026), so the first claim may have been a garbled half-truth rather than pure invention — [mira-harness feedback](https://github.com/Masashi-Ono0611/mira-harness/blob/main/docs/mira-feedback.md)

### Inferences
- **Trust ladder:** users accept an agent that (1) **reads and alerts**, then (2) **prepares and asks**, then (3) **acts within a small sandboxed budget**, long before (4) **full autonomy**. The CoinGecko 87%-at-10% versus 14.5%-at-100% split is the quantitative shape of this ladder. Walt's "execution off by default" and Mira's "prepares, user approves" sit at rung 2. TON Agentic Wallets enable rung 3.
- **What would make them trust Mira with money (synthesized):**
  - a separate, capped agent balance that cannot withdraw
  - plain-language pre-trade previews showing size, leverage, liquidation price, fees and worst case
  - per-trade approve by default, with **scoped** auto-approve ("up to $X per trade / $Y per day / only these markets") rather than a global "Always yes"
  - an always-visible **kill switch** and close-all
  - a P&L and action log with **reasons and sources** for each trade
  - notifications for every action
  - a post-incident policy (compensation or refund precedent, as with Banana Gun and Maestro)
- **What would make them reject it:**
  - a global "Always yes" for money
  - unexplained or hallucinated rationale
  - opaque fees on top of bot or exchange fees
  - any path to the main wallet
  - leverage defaults that can wipe the budget fast (the Diario Bitcoin critique)
  - the agent being socially engineered from a group chat (AIXBT, Lobstar) — **a specific risk for Mira because it lives in groups**
  - confusion between testnet and mainnet
- **Undo:** on-chain and perps actions are not reversible. The credible substitutes are **pre-commit delay windows** (Banana Gun added transfer delays after its hack), **cancel-before-fill** for limit orders, and instant **close-position** buttons.

### Gaps
- **No independent user reactions (Reddit, X, Telegram) to Walt + Mira agent trading were found.** Coverage is press-release-derived. Adoption numbers for the feature are unknown.
- Walt has not published leverage limits, cost, regions or the venue for agent trading (as of the coverage found).
- No survey specifically measures preferences for approval-per-trade versus budgets versus undo windows among crypto users.
- Robinhood's approval default is reported inconsistently, and I could not confirm it from Robinhood's own materials.

---

## 4. Jobs-to-be-done statements (with supporting evidence)

### Takeaway
The strongest jobs are **filter-and-alert** (turn noisy groups into a few actionable, pre-checked signals), **safe fast execution** (act on a signal in seconds without exposing the main wallet), **guardrailed delegation** (let the agent trade or pay within limits I set), **scam defense** (tell me if this bot, link or token is fake), and for farmers **track-and-claim** (keep my points, tasks, deadlines and eligibility straight).

### Cited Findings
JTBD statements below are **synthesized** from the evidence cited. Each lists its evidence.

**Persona A: Speed Trader**
1. **When** a token or trade idea is called in one of the dozens of groups I'm in, **I want to** get a short filtered alert with a quick risk read (dev/insider holdings, honeypot or rug flags, whether this caller's past calls dumped), **so I can** decide in seconds without reading 1,000 unread messages or being exit liquidity.
   - Evidence: 50+ channels / 1,000+ unread and 30 signals a day ([flexe.io](https://flexe.io/blog/cryptocurrency-telegram-groups-2025-guide-real-alpha/)); KOL follower-count vs. performance and the Telegram pump-and-dump ring ([Pulse/Solidus](https://www.pulse.bot/crypto/news/telegram-ring-ran-pump-and-dump-network-that-netted-800k-in-a-month-solidus-labs-cace8ba5-a639-4447-b610-6bce2c9c40b8)); insider-held supply ([search summary](https://www-web.itiger.com/news/2533928547))
2. **When** I decide to enter, **I want to** execute from the same chat in one or two taps with MEV protection and sane slippage, **so I can** get the entry I saw instead of being sandwiched or failing.
   - Evidence: bots loved for no popups or reloads ([graphdex](https://graphdex.io/en/blog/best-telegram-trading-bots-solana-2026)); failed-tx → raise slippage → sandwich ([EigenPhi](https://eigenphi.substack.com/p/fomo-makes-you-victim-of-jared)); missed entries from slippage and delays ([flexe.io](https://flexe.io/blog/crypto-telegram-signals-spot-real-winners-vs-scams-2025/))
3. **When** I'm asleep or away from the screen, **I want** my positions protected by stop-loss, take-profit and an agent watching within limits I set, **so I can** avoid waking up liquidated or having missed the exit.
   - Evidence: auto-sell and stop-loss as a top-cited bot benefit ([CoinEx](https://www.coinex.com/en/academy/detail/3209-top-solana-telegram-trading-bots?pId=31&sId=45)); 50x perps now in Walt ([The Block](https://www.theblock.co/post/396228/telegram-wallet-integrates-lighter-to-roll-out-in-app-perpetual-futures-trading-to-150m-users)); Walt agents can open and close perps ([Unchained](https://unchainedcrypto.com/telegrams-walt-app-now-lets-ai-agents-open-and-close-perp-trades-for-users/))
4. **When** I let an AI help me trade, **I want** it to work only from a capped, non-withdrawable balance, propose trades with clear reasoning and worst-case loss, and ask before acting until I widen its permissions, **so I can** get leverage from automation without risking my main wallet or blowing up on a hallucination.
   - Evidence: CoinGecko 87% at ≥10% vs. 14.5% at 100% ([Blocmates](https://www.blocmates.com/news-posts/less-than-15-of-crypto-users-trust-ai-to-manage-their-entire-portfolio-coingecko-finds)); burner-wallet practice ([crypto.news](https://crypto.news/?p=14214007)); Walt's off-by-default, no-withdrawal design ([The Defiant](https://thedefiant.io/news/defi/walt-plans-ai-perpetuals-trading-through-mira-chatgpt-and-claude)); Lobstar Wilde and AIXBT failures ([Edge & Node](https://edgeandnode.com/articles/the-450000-lesson-no-one-asked-for)); Mira hallucination warning ([mira-harness](https://github.com/Masashi-Ono0611/mira-harness/blob/main/docs/mira-feedback.md))
5. **When** a new trading bot or tool is shilled to me, **I want to** know whether it is legitimate and how it holds my keys, **so I can** avoid another Unibot or Banana Gun style loss.
   - Evidence: Maestro, Unibot and Banana Gun exploits ([CertiK](https://www.certik.com/blog/maestro-and-unibot); [The Block](https://www.theblock.co/post/318074/banana-gun-exploit-refund)); "no idea who built it, no accountability" paraphrase ([r/solana](https://redlib.ssps.io/r/solana/comments/1j8xv3v/why_do_people_use_telegram_bots_instead_of_some))

**Persona B: TON Community Farmer**

6. **When** I'm farming points across many mini-apps and project groups, **I want** one place that tracks my tasks, points, deadlines, snapshot dates and eligibility rules (and tells me when rules change), **so I can** avoid losing an airdrop to a missed deadline or a criteria switch.
   - Evidence: Hamster Kombat's criteria shifted from PPH to keys and ~57–63% were excluded ([The Defiant](https://thedefiant.io/news/tokens/unmet-expectations-spark-hamster-kombat-airdrop-outrage)); points are the 2025 default and should be treated as probabilistic ([txchyon](https://txchyon.pages.dev/blog/airdrop-farming/optimizing-airdrop-points-safely))
7. **When** a group asks me to "verify", claim or connect my wallet, **I want** a trusted assistant to tell me instantly whether the bot or link is real, **so I can** stay safe from malware and drainers.
   - Evidence: fake Safeguard attacks up 2,000% and $1.8M stolen in one week ([Cointelegraph](https://cointelegraph.com/news/malicious-telegram-group-scams-have-increased-2000-since-november-scam-sniffer)); SEAL PSA on fake support drainers ([SEAL](https://radar.securityalliance.org/psa-fake-telegram-support-channels-drainers/))
8. **When** I want to grow my small TON/USDT balance, **I want** plain-language options (stake, earn yield, swap) with fees shown in my currency before I confirm, **so I can** avoid fees eating small amounts or me doing something I don't understand.
   - Evidence: Walt positioned for "trading, investing, earning yield" ([Crypto Briefing](https://cryptobriefing.com/telegrams-crypto-lineup-expands-as-wallet-rebrands-to-walt-alongside-new-gram-wallet/)); TON Agentic Wallets for swaps, staking and DeFi ([The Defiant](https://thedefiant.io/news/nfts-and-web3/ton-tech-launches-agentic-wallets-on-ton-telegram)); ~1% bot fees ([MadeOnSol](https://madeonsol.com/blog/bonkbot-review)); raw jetton amounts in Mira wallet output (sibling note, [mira-harness chat](https://github.com/Masashi-Ono0611/mira-harness/blob/main/docs/mira-chat-history.txt))
9. **When** I run or moderate a crypto community group, **I want** an agent that removes scam bots and impersonators, answers repeated questions and summarizes announcements, **so I can** keep members safe and engaged without being online 24/7.
   - Evidence: AI scam messages, admin impersonation and raids (sibling `user_sentiment_reviews.md` citing [Chainfuel 2026](https://www.chainfuel.com/blog/how-to-stop-spam-in-your-telegram-group-2026)); Mira moderation needs admin rights ([wiki Moderation](https://wiki.mira.tg/group-chats/moderation))
10. **When** I want to pay a friend or chip in for a group expense in TON/USDT, **I want to** just say it in chat and see a clear confirm card, **so I can** send money as easily as a message without fearing a wrong address or amount.
    - Evidence: Mira's "Send 5 USDT to @username" example with no documented confirmation ([profile README](https://github.com/Mira-Agent/.github/blob/main/profile/README.md)); Lobstar Wilde decimal-error transfer ([BlockEden](https://blockeden.xyz/blog/2026/02/24/ai-agent-450k-accident-lobstar-wilde/))

### Inferences
- JTBD 1, 4 and 7 are the most **Telegram-native** jobs: they depend on the agent being inside the user's groups. Web terminals (Axiom) and standalone AI (ChatGPT/Claude via Walt) can't do them as well.
- JTBD 4 is the **Walt + Mira** job. Mira's edge over ChatGPT/Claude in Walt is that it can combine JTBD 1 (signals from the user's own groups) with JTBD 4 (guardrailed execution) in one conversation.
- JTBD 6 and 7 are lower-risk entry jobs for Persona B. They build trust before any money-moving job (8, 10).

### Gaps
- These JTBD are synthesized from secondary evidence, not from interviews. No Mira-user research on crypto jobs was found.
- No evidence was found on how often Persona B pays friends in crypto inside Telegram. JTBD 10 is weakly evidenced.

---

## 5. Quantitative data: Telegram trading-bot market size, TON/Wallet user numbers, share of Telegram users holding crypto

### Takeaway
Numbers are plentiful but inconsistent and mostly snapshot or vendor-sourced. A defensible summary:
- **Telegram:** ~1B MAU.
- **Wallet in Telegram:** 150M+ registered accounts (Dec 2025).
- **TON wallet activations:** "100M+".
- **Active on-chain TON wallets:** only ~1.5–1.8M monthly (CoinShares).
- **Telegram trading-bot ecosystem:** tens of billions of dollars in lifetime volume, with Trojan at ~$23–27B and 1.7–2.5M users.
- **Bot fees:** peaked near $100M per week (early Feb 2025, DefiLlama).
- **Share of Telegram users holding crypto:** no direct measure exists. Proxies range from ~0.12–0.18% (monthly active on-chain) to ~10–15% (activated or registered wallets).

### Cited Findings
**Telegram and TON/Wallet users**

| Metric | Value | Date | Source / confidence |
|---|---|---|---|
| Telegram MAU / DAU | 1B+ MAU (crossed Mar 2025); ~450M DAU | 2025 | [Finance Magnates via TradingView](https://jp.tradingview.com/news/financemagnates:92ce6e9e3094b:0-telegram-reaches-450m-daily-users-33-interact-with-crypto-brokers-see-growth-via-mini-apps) [snippet]. The headline also says "33% interact with crypto", but its method is unknown |
| Wallet in Telegram registrations | 150M+ registered | Dec 2025 (TOP), repeated Apr 2026 | [The Block](https://www.theblock.co/post/396228/telegram-wallet-integrates-lighter-to-roll-out-in-app-perpetual-futures-trading-to-150m-users); [TOP insights](https://top.co/insights/telegram-wallet-lighter-perpetuals) [snippet]. Registrations, not actives |
| TON wallet activations | "over 100 million users… activated their TON wallets last year", ≈10% of 1B | Statement date unclear (likely 2025 re 2024) | [DigitalMoneyBox](https://digitalmoneybox.com/news/research/telegram-brings-crypto-wallet-to-87-million-us-users) [snippet]. Activation ≠ holding |
| TON monthly active wallets | ~1.78M; ~2.16M daily txs; ~43.6K new wallet activations/day; ratio to Telegram MAU "0.12%" | Date unclear (2025–26) | [CoinShares research note](https://coinshares.com/insights/research-data/the-open-network-ton-an-institutional-research-note/) [snippet]. Other sources give ~1.48M with 53M activated |
| TON daily active wallets | ~510K (Jan) → 620K+ (Jun 2026) | 2026 | Guide-level source, low confidence [snippet] — [search summary](https://sqmagazine.co.uk/toncoin-statistics/) |
| "Active TON wallets" (Tonscan) | ~15M | May 2026 | Conflicts with CoinShares; definition differs [snippet] — [search summary](https://sqmagazine.co.uk/toncoin-statistics/) |
| Tonkeeper | 30M+ MAU (company-era claim, ~2024) vs. AppGoblin estimate 3.1–3.5M MAU and 43.5M installs (Mar 2026) | 2024 / 2026 | [Analytics Insight](https://www.analyticsinsight.net/cryptocurrency-analytics-insight/a-gateway-to-over-50-million-users-tonkeeper-wallet-on-welcoming-the-masses-to-the-open-network-ton); [AppGoblin](https://appgoblin.info/apps/com.ton_keeper) [snippet] |
| TON ecosystem goal | Onboard 500M Telegram users by 2028 (Bybit report) | 2025 | [Finance Magnates](https://www.financemagnates.com/cryptocurrency/bybit-reports-tons-strategy-to-onboard-500-million-telegram-users-by-2028/) [snippet; headline] |
| Mira users (for context) | 2M+ users, 500K MAU, 50K+ groups (company, May 2026) | 2026 | See sibling `competitive_landscape.md` |
| Global crypto ownership (not Telegram-specific) | 24% in 2025 (vs 21% in 2024), six markets | 2025 | [Gemini report via search summary](https://www.n1.xyz/blog/2025-crypto-end-user-report) [snippet] |

**Telegram trading-bot market**

| Metric | Value | Date | Source / confidence |
|---|---|---|---|
| Trojan | ~1.7M users, ~$23.4B lifetime volume; or ~2.5M users, $27B+ | Dates unclear (2025–26) | [CoinGecko](https://www.coingecko.com/learn/solana-telegram-trading-bots); [Solana Floor](https://solanafloor.com/news/trojan-introduces-comprehensive-onchain-trading-terminal) [snippet; Dune-derived] |
| BONKbot | 519K–573K users; $12.8–13.8B lifetime | 2025–26 | [CoinGecko](https://www.coingecko.com/learn/solana-telegram-trading-bots); [MEXC](https://www.mexc.com/news/1020872) [snippet] |
| Banana Gun | $16.09B lifetime, 25.3M trades (2026); earlier $5.3B and 215K users | 2026 / 2025 | [DataWallet](https://www.datawallet.com/crypto/best-crypto-telegram-bots); [AMBCrypto](https://ambcrypto.com/top-7-telegram-trading-bots-of-july-2025/) [snippet; vendor lists] |
| Maestro | 20M+ trades, $7B+ volume | Jul 2025 | [AMBCrypto](https://ambcrypto.com/top-7-telegram-trading-bots-of-july-2025/) [snippet] |
| 7-day DEX-bot volume share | Trojan 25.8%, Banana Gun 21.8%, Maestro 13.5% (top 3 = 61.1%); Trojan $101M in 7 days | Mid-2025 | [Coinspeaker citing Dune](https://www.coinspeaker.com/telegram-trading-bots-booming-can-snorter-stand-out/amp) [snippet; promotional article] |
| Aggregate fees, TG bots + trading apps | ~$100M in week ending 2025-02-02; a later 4-week average of ~$42M (date unclear) | 2025 | [DefiLlama dashboard](https://defillama.com/pro/tg-bots-trading-apps-7y0m8c) [snippet] |
| Cumulative 2025 bot fees | "over $2 billion", top 5 ≈ 60% | 2025 | [openliquid blog](https://openliquid.pages.dev/blog/telegram-trading-bots-landscape-2026) [snippet; unverified] |
| Bot fee per trade | ~1% standard (0.5–1% range); StonksBot 0.8% | 2025–26 | [MadeOnSol](https://madeonsol.com/blog/bonkbot-review); [tontradingbots](https://tontradingbots.pages.dev/reviews/stonksbot) [snippet] |
| Web-terminal shift | Axiom 4.41% → 57.33% of Solana trading-platform volume (Feb → Jul 2025); Photon 30.7% → <10% | 2025 | [StepData](https://stepdata.substack.com/p/solana-trading-bot-axiom-becomes); [Messari](https://messari.io/report/axiom-breaking-open-the-trading-bot-market) [snippet] |
| TON bots | Blum bot 700K–1M users, $50M volume; Memepad $200M volume, 200K tokens | 2024–25 | [BeInCrypto](https://beincrypto.com/blum-raises-5-million-ai-trading/); [ForkLog](https://forklog.com/en/?p=21107) [snippet; company-linked] |
| Walt perps venue | Lighter did $65.47B volume in Mar 2026 (#4 perp DEX) | 2026 | [The Block](https://www.theblock.co/post/396228/telegram-wallet-integrates-lighter-to-roll-out-in-app-perpetual-futures-trading-to-150m-users) [snippet] |

**Loss and incident figures (for risk framing)**
- Maestro + Unibot (Oct 2023): ~$1.1M combined ([CertiK](https://www.certik.com/blog/maestro-and-unibot)). Banana Gun (Sept 2024): ~$3M from 11 users ([The Block](https://www.theblock.co/post/318074/banana-gun-exploit-refund)). Fake Safeguard: $1.8M+ in one week (Jan 2025) ([Cointelegraph](https://cointelegraph.com/news/telegram-verification-bots-carry-crypto-stealing-malware/)). Lobstar Wilde agent: $250K–$441K (Feb 2026) ([KuCoin](https://www.kucoin.com/news/flash/ai-agent-lobstar-wilde-loses-440-000-in-solana-transfer-error)). AIXBT: ~$105K (Mar 2025) ([CryptoRank](https://cryptorank.io/news/feed/05b32-aixbt-agent-tricked-to-send-eth)). IC3 study: $191.7M lost by AI-agent token holders ([The Defiant](https://thedefiant.io/news/defi/ic3-paper-finds-most-ai-agent-platforms-no-evidence-autonomous-on-chain-trading)) [all snippet]

### Inferences
- **Share of Telegram users holding crypto (derived, not sourced):**
  - Monthly active on-chain TON wallets of ~1.5–1.8M against ~1B MAU give **~0.15–0.18%** (CoinShares itself cites 0.12%, likely with a different denominator).
  - 150M Wallet registrations against 1B gives **~15% have ever registered**.
  - 100M activations against 1B gives **~10% have ever activated** a TON wallet.

  The realistic "actively holds and uses crypto in Telegram" share is probably **low single-digit millions of people, under 1% of Telegram MAU**. The "has touched crypto via Telegram" share is **~10–15%**. This gap (huge dormant base, small active base) is the core sizing tension for both personas.
- **Persona A** is small but valuable: roughly 1–3M bot users per top bot, with overlap. They generate ~1% fees per trade, and weekly ecosystem fees ranged from tens of millions to ~$100M at the 2025 peak. **Persona B** is huge but dormant: 100–150M registered or activated, with ~1–2M monthly active on-chain.
- With Gram rolling out to Telegram's whole base (Sept 2026 onward), the dormant base may re-activate. This is a timing argument for Mira to serve Persona B's safety and tracking jobs now.

### Gaps
- No Telegram-specific crypto-ownership survey was found. The "33% interact with crypto" headline could not be verified.
- Dune dashboards could not be opened. All bot figures are dated snapshots from secondary articles, with unclear dates for several.
- No 2025–2026 total for Telegram-bot users across all bots (deduplicated) was found.
- No independent active-user figure for Walt, the Gram wallet or Walt's AI-agent trading feature was found.
- Hosts that would need to be allowed to verify these numbers: reddit.com, dune.com, coingecko.com, coinshares.com, theblock.co, cointelegraph.com, decrypt.co, unchainedcrypto.com, 247wallst.com, ton.org, x.com, t.me.

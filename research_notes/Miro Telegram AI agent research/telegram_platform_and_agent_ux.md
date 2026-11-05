# Telegram Platform Capabilities & Constraints for AI Agents (2026), and Conversational AI Agent UX Best Practices

Research date: 2026-11-05. Scope: design foundation for a proposal to the Telegram AI agent product. Per coordinator update, the product is very likely **"Mira" (@mira) by The Open Platform (TOP)**: a bot plus Mini App, used in groups as a "Team Agent", with Telegram Stars payments and a "private mode" on Cocoon. Group-bot features, Mini Apps, Stars subscriptions, business ("Secretary") bots and Cocoon get priority below.

**Method note (read first).** This session could not reach core.telegram.org, telegram.org, t.me, nngroup.com, pair.withgoogle.com, openai.com and most other sites, and the Firecrawl tool had no credits left. To get primary Telegram documentation anyway I used:
- (a) **Verbatim HTML snapshots of the official Telegram pages** (Bot API changelog, Bot Features, Bots FAQ, Mini Apps, Payments), committed to GitHub on 2026-11-04 in [timoncool/telegram-api-mcp/docs](https://github.com/timoncool/telegram-api-mcp/tree/master/docs). A second mirror, [EngDawood/telegram-mcp-worker](https://github.com/EngDawood/telegram-mcp-worker/tree/main/docs/bot-api), is identical. Both snapshots end at **Bot API 10.2 (July 14, 2026)**.
- (b) **The machine-readable Bot API spec** [PaulSonOfLars/telegram-bot-api-spec](https://github.com/PaulSonOfLars/telegram-bot-api-spec). It is scraped from core.telegram.org/bots/api and its `api.json` reads `"version": "Bot API 10.3", "release_date": "August 24, 2026"`. I diffed its git history version by version to get exact method and field additions. Its last regeneration commits were on 2026-08-24/25, and no later version appears in it.
- (c) The **official `@types/telegram-web-app` 10.1.0 typings** (published 2026-08-29), for Mini App APIs with "@since Bot API x" annotations ([npm](https://www.npmjs.com/package/@types/telegram-web-app)).
- (d) WebSearch snippets, for pages I could not open. These are marked "(search snippet)".

Official URLs are cited first, then the mirror I actually read.

---

## 1. Telegram Bot API capabilities as of late 2025–2026, including AI/agent-specific features

### Takeaway
Over the past year Telegram has rebuilt the Bot API around AI agents. The current version is **Bot API 10.3 (Aug 24, 2026)**. Since 9.3 (Dec 31, 2025) it has added:
- **native streaming drafts** (`sendMessageDraft`, later `sendRichMessageDraft` with a "Thinking…" block and a user-facing **Stop** button)
- **topics/threads in private bot chats**
- **Rich Messages** (tables, LaTeX, collapsible details, media blocks)
- **ephemeral, per-user messages inside groups**
- **Guest Mode** (summon a bot into any chat without adding it)
- **bot-to-bot communication**
- **Managed Bots** (bots that create bots)
- **Secretary/business bots without Premium**
- **Communities**
- **Stars subscription lifecycle updates**

Most of these are buildable today and map directly onto agent UX patterns (progress, interruption, private confirmations, parallel tasks).

### Cited Findings

**Version timeline (dates and headline features)**

- **Bot API 9.0 (Apr 11, 2025):**
  - Business accounts got granular `BusinessBotRights`, which replaced the single `can_reply` flag. Bots can now mark messages as read, delete messages, change the business account's name, username, bio and photo, check and transfer its Star balance, manage its gifts and post stories on its behalf.
  - Mini Apps got `DeviceStorage` (persistent local storage) and `SecureStorage` (secure storage for sensitive data).
  - The maximum subscription-period price was raised to 10,000 Stars.
  - Sources: [Bot API changelog](https://core.telegram.org/bots/api-changelog) (read via [mirror snapshot](https://github.com/timoncool/telegram-api-mcp/blob/master/docs/raw-api-changelog.html)).
- **Bot API 9.1 (Jul 3, 2025):**
  - Checklists arrived: the `Checklist`/`InputChecklist` types, plus `sendChecklist` and `editMessageChecklist`. Bots can send them only "on behalf of a business account".
  - Polls can have up to 12 options.
  - New `getMyStarBalance`, and the Mini App method `WebApp.hideKeyboard`.
  - Sources: [changelog](https://core.telegram.org/bots/api-changelog); [mirror](https://github.com/timoncool/telegram-api-mcp/blob/master/docs/raw-api-changelog.html).
- **Bot API 9.2 (Aug 15, 2025):** replies to specific checklist tasks, Direct Messages in channels, and Suggested Posts (approve or decline, paid posts). Sources: [changelog](https://core.telegram.org/bots/api-changelog); [mirror](https://github.com/timoncool/telegram-api-mcp/blob/master/docs/raw-api-changelog.html).
- **Bot API 9.3 (Dec 31, 2025), "Topics in private chats":**
  - New field `User.has_topics_enabled` shows whether forum-topic mode is on for the bot.
  - `message_thread_id` is now supported in private chats for all send methods and for `sendChatAction`.
  - New method **`sendMessageDraft`**, "allowing partial messages to be streamed to a user while being generated".
  - Paid-media maximum raised to 25,000 Stars; `message_effect_id` added to forward and copy.
  - Sources: [changelog](https://core.telegram.org/bots/api-changelog); [mirror](https://github.com/timoncool/telegram-api-mcp/blob/master/docs/raw-api-changelog.html).
  - One third-party blog says `sendMessageDraft` arrived in 9.5. The official changelog lists it in 9.3, and 9.5 "Allowed all bots to use the method sendMessageDraft", so availability was evidently restricted at first. Sources: [ai-muninn.com](https://ai-muninn.com/en/blog/openclaw-telegram-sendmessagedraft-streaming), contradicted by [changelog](https://core.telegram.org/bots/api-changelog).
- **Bot API 9.4 (Feb 9, 2026):**
  - Bots can **create topics in private chats** (`createForumTopic`) and can stop users from creating or deleting them via a BotFather setting (`allows_users_to_create_topics`).
  - **Button colours:** `style` on `InlineKeyboardButton`/`KeyboardButton`, with values "danger" (red), "success" (green) and "primary" (blue).
  - **Custom-emoji button icons:** `icon_custom_emoji_id`.
  - Custom emoji in bot messages if the bot owner has Premium.
  - Bots can set their own profile photo (`setMyProfilePhoto`).
  - Sources: [changelog](https://core.telegram.org/bots/api-changelog); [Bot API spec](https://github.com/PaulSonOfLars/telegram-bot-api-spec).
- **Bot API 9.5 (Mar 1, 2026):** a `date_time` message entity, which shows formatted local dates and times; `sendMessageDraft` opened to **all bots**; chat member tags (`setChatMemberTag`); and `iconCustomEmojiId` on the Mini App `BottomButton`. Source: [changelog](https://core.telegram.org/bots/api-changelog).
- **Bot API 9.6 (Apr 3, 2026):**
  - **Managed Bots**: `KeyboardButtonRequestManagedBot`, `getManagedBotToken` and `replaceManagedBotToken`, plus `https://t.me/newbot/{manager_bot}/{suggested_username}?name=` links that let a bot create bots for users.
  - `savePreparedKeyboardButton` together with the Mini App method `WebApp.requestChat`.
  - Major poll upgrades: multiple correct answers, revoting, user-added options, descriptions, shuffling, hiding results until close.
  - Source: [changelog](https://core.telegram.org/bots/api-changelog).
- **Bot API 10.0 (May 8, 2026):**
  - **Guest Mode** (`answerGuestQuery`, `Update.guest_message`, `User.supports_guest_queries`).
  - "Added the ability to see certain messages sent by other bots in groups".
  - "Allowed Business Bots to manage user accounts **without a Telegram Premium subscription**".
  - "Added the ability to send messages to other bots via username if both bots enabled bot-to-bot communication".
  - "Allowed bots to pass an empty text in the method sendMessageDraft", which shows a "Thinking..." placeholder.
  - Media in polls, live photos, reaction management, managed-bot access settings, and `getUserPersonalChatMessages`.
  - Source: [changelog](https://core.telegram.org/bots/api-changelog).
- **Bot API 10.1 (Jun 11, 2026):**
  - **Rich Messages**: "allowing bots to send highly structured text and **stream AI-generated replies with seamless rich formatting**", through `sendRichMessage`, `sendRichMessageDraft`, and `editMessageText(rich_message)`.
  - **Join Request Queries**: a "guard bot" can show a Mini App before approving a join (`sendChatJoinRequestWebApp`, `answerChatJoinRequestQuery`).
  - Source: [changelog](https://core.telegram.org/bots/api-changelog).
- **Bot API 10.2 (Jul 14, 2026):**
  - Block-level builders for Rich Messages.
  - **Ephemeral Messages**: "allowing bots to send group messages and receive commands that are visible only to a specific user and the bot", with `BotCommand.is_ephemeral`, `editEphemeralMessage*` and `deleteEphemeralMessage`.
  - **Communities**: "several supergroups, channels, and bots linked together".
  - **`Update.subscription`** (`BotSubscriptionUpdated`) for Stars subscription changes.
  - **Mini App origin hardening**, enabled automatically on Jul 20, 2026.
  - Source: [changelog](https://core.telegram.org/bots/api-changelog).
- **Bot API 10.3 (Aug 24, 2026).** Derived from the spec diff, because I could not read the changelog text for this release:
  - `sendMessageDraft` and `sendRichMessageDraft` gained **`can_stop`**, which "show[s] the user a button to stop further drafts", and **`keep_on_stop`**. A new update, **`stopped_message_generation`** (`MessageGenerationStopped`), reports when the user stopped.
  - `EphemeralMessageParameters` (`receiver_user_id`, `callback_query_id`, `replace_callback_query_message`) replaced the per-method `receiver_user_id` parameters.
  - **Disabled buttons** (`InlineKeyboardButton.disabled`).
  - `force_reply` on inline and reply keyboards.
  - **Buttons inside Rich Messages** (`RichMessageButton`, with styles danger/success/primary/link; `InputRichBlockButtons` holds 1–8 per row), plus Rich Document and Expandable Blockquote blocks and compact tables.
  - New admin right `can_send_welcome_messages`, and `CommunityChatJoined`.
  - Sources: [Bot API spec api.json (10.3)](https://raw.githubusercontent.com/PaulSonOfLars/telegram-bot-api-spec/main/api.json); [Bot API](https://core.telegram.org/bots/api#sendmessagedraft). A search summary also said "the latest entry (August 24) adds RichMessageButton and related classes" (search snippet of [changelog](https://core.telegram.org/bots/api-changelog)).

**Streaming / "thinking" / progress primitives**

- `sendMessageDraft` is defined as: "stream a partial message to a user while the message is being generated. Note that the streamed draft is ephemeral and acts as a temporary **30-second preview** — once the output is finalized, you must call sendMessage with the complete message to persist it."
  - `chat_id` is the "target **private chat**".
  - `draft_id` must be non-zero. "Changes to drafts with the same identifier are animated. Otherwise, the draft is replaced without animation."
  - Text is 0–4096 characters. "Pass an empty text to show a 'Thinking...' placeholder."
  - Source: [Bot API](https://core.telegram.org/bots/api#sendmessagedraft), via [spec](https://raw.githubusercontent.com/PaulSonOfLars/telegram-bot-api-spec/main/api.json).
- `keep_on_stop`: "keep the draft in the chat when the button is pressed. The draft will still disappear after a short time... To fully preserve the partial draft, the bot should send it as a new message." Source: [Bot API](https://core.telegram.org/bots/api#sendmessagedraft).
- `RichBlockThinking` / `<tg-thinking>` is "a block with a 'Thinking...' placeholder". It "may be used only in sendRichMessageDraft", and Telegram recommends the custom emoji pack `t.me/addemoji/AIActions` for it. Source: [Bot API](https://core.telegram.org/bots/api#richblockthinking).
- From the MTProto "AI features for bots" page (search snippets):
  - Live drafts "can currently only be sent to users".
  - Bots should rate-limit draft updates to **20 calls per 5 s and 40 per 30 s per peer**, and "the same limits apply to the Bot API sendMessageDraft".
  - Not all clients render multiple concurrent drafts in the same topic correctly.
  - Sources: [core.telegram.org/api/bots/ai](https://core.telegram.org/api/bots/ai); [corefork mirror](https://corefork.telegram.org/api/bots/ai).
- The same page says bots "can behave like forums if Threaded mode is enabled via @botfather. This is especially useful for AI chatbots". Enabling it "is subject to an **additional fee for Telegram Star purchases** as described in Section 6.2.6 of our Terms of Service for Bot Developers". Source: [core.telegram.org/api/bots/ai](https://core.telegram.org/api/bots/ai) (search snippet; fee size not seen).
- `sendChatAction` (typing and similar) "is set for 5 seconds or less". Telegram recommends it "only... when a response from the bot will take a noticeable amount of time". Source: [Bot API](https://core.telegram.org/bots/api#sendchataction).

**Rich formatting**

- Rich Messages support Rich Markdown (which "follows GitHub Flavored Markdown where possible") and Rich HTML:
  - headings, lists and task lists
  - tables with captions, borders, striping and row/column spans
  - media blocks
  - block quotes and pull quotes
  - collapsible details
  - anchors and footnotes
  - "Full LaTeX support"
  - maps, collages and slideshows

  The demo is @RichTextDemoBot. Regular messages (MarkdownV2/HTML) remain "the best choice for short text, confirmations, simple chat flows". Source: [Bot Features – Advanced Formatting](https://core.telegram.org/bots/features#advanced-formatting-options) ([mirror](https://github.com/timoncool/telegram-api-mcp/blob/master/docs/raw-features.html)).
- `InputRichMessage` takes exactly one of `html`, `markdown` or `blocks`, with optional `is_rtl` and `skip_entity_detection`. `RichBlockDetails` is an expandable `<details>` block with an `is_open` flag. Sources: [Bot API](https://core.telegram.org/bots/api#inputrichmessage); [spec](https://raw.githubusercontent.com/PaulSonOfLars/telegram-bot-api-spec/main/api.json).

**Input surfaces: keyboards, commands, menu button, inline mode**

- Reply keyboards replace the user's keyboard with preset answers. Options include `one_time_keyboard`, `is_persistent` and an `input_field_placeholder` of 1–64 characters. Inline keyboards sit under messages and don't post messages to the chat; they cover callback, URL, switch-inline, game, pay, `copy_text`, `web_app` and `login_url` buttons. Telegram advises "editing your keyboard when the user toggles a setting button or navigates to a new page" rather than sending new messages. Sources: [Bot Features – Keyboards](https://core.telegram.org/bots/features#keyboards); [Bot API](https://core.telegram.org/bots/api#replykeyboardmarkup).
- The menu button sits next to the input field. It shows the command list or launches a Mini App, and can be set per user or per language via `setChatMenuButton`. Global commands `/start`, `/help` and `/settings` are expected. Sources: [Bot Features – Menu Button / Global Commands](https://core.telegram.org/bots/features#menu-button).
- Command limits: at most 100 commands; names 1–32 characters (lowercase letters, digits, underscore); descriptions 1–256 characters. Commands can be scoped per chat type, admin or language. Source: [Bot API](https://core.telegram.org/bots/api#setmycommands).
- Inline mode lets users type `@bot query` in any chat and pick a result, which they then send themselves. Guest Mode is different: there the bot "actively participate[s] and independently reply[s] as itself". Source: [Bot Features – Guest Bots](https://core.telegram.org/bots/features#guest-bots).
- Deep links: `t.me/bot?start=<param>` and `?startgroup=<param>`, where the parameter is up to 64 characters (base64url recommended). Mini Apps use `?startapp=`. Source: [Bot Features – Deep Linking](https://core.telegram.org/bots/features#deep-linking).
- Chat and user pickers (`KeyboardButtonRequestChat`/`RequestUsers`) open a native selector. Picking a chat "will send its identifier to the bot". Source: [Bot Features – Chat and User Selection](https://core.telegram.org/bots/features#chat-and-user-selection).

**Expressive features: reactions, effects, polls, checklists**

- `setMessageReaction`: "as non-premium users, bots can set up to one reaction per message"; "Paid reactions can't be used by bots". Source: [Bot API](https://core.telegram.org/bots/api#setmessagereaction).
- `message_effect_id` (animated message effects) is "for private chats only". Source: [Bot API](https://core.telegram.org/bots/api#sendmessage).
- Since 9.6 and 10.0, polls support multiple correct quiz answers, revoting, user-added options, descriptions, media and links, a "members_only" setting and country restrictions. The minimum number of options is now 1. Source: [changelog](https://core.telegram.org/bots/api-changelog).
- Checklists hold 1–30 tasks and can let others add tasks or mark them done. **Bots can send them only on behalf of a connected business account** (`sendChecklist` requires `business_connection_id`). Source: [Bot API – sendChecklist / InputChecklist](https://core.telegram.org/bots/api#sendchecklist).

**Group-agent features (most relevant to a "Team Agent")**

- **Ephemeral messages (10.2):**
  - These are "private responses inside group chats — visible only to a specific user and the bot... ideal for welcome messages, whispers, personalized summaries, contextual hints".
  - They support media, documents, contacts and locations.
  - **Ephemeral commands**: "the user's initial message remains completely invisible to other group members and other bots"; "Telegram clients visually distinguish ephemeral bot commands".
  - Source: [Bot Features – Ephemeral Messages](https://core.telegram.org/bots/features#ephemeral-messages).
  - Delivery is "not guaranteed... especially if they are offline". The message ID can be reused after the message is deleted or expires. Source: [Bot API – EphemeralMessageParameters / deleteEphemeralMessage](https://core.telegram.org/bots/api#deleteephemeralmessage).
- **Guest Mode (10.0):**
  - Mentioning or replying to a guest bot gives it "a dedicated update" and it "is able to issue **one reply**".
  - It "does not grant access to a chat's message history or participant list".
  - Users can mention "up to 3 guest bots in your message at the same time".
  - Telegram's suggested use is "AI Assistants: Summoning an agent to answer a specific question or carry out a task, reporting its progress back to the chat".
  - It is enabled in the BotFather Mini App.
  - Source: [Bot Features – Guest Bots](https://core.telegram.org/bots/features#guest-bots).
- **Bot-to-bot communication (10.0):**
  - In groups, bots reach each other through `/command@OtherBot` or a reply, as long as at least one of the two has the mode enabled. A bot with the mode on also sees *all* other bots' messages if it is an admin or has privacy mode off.
  - In private chats, bots can message each other via `sendMessage(@username)` if *both* have the mode on.
  - Business-account bots can message other bots.
  - Telegram requires **loop prevention**: deduplication, rate limits ("no more than one reply every few seconds per bot") and maximum depth or timeouts. Otherwise there may be "platform restrictions".
  - Source: [Bot Features – Bot-to-Bot Communication](https://core.telegram.org/bots/features#bot-to-bot-communication); also [core.telegram.org/api/bots/bot-to-bot](https://core.telegram.org/api/bots/bot-to-bot) (search snippet).
- **Communities (10.2)** link several supergroups, channels and bots around a shared audience, exposed as `ChatFullInfo.community` plus service messages. Source: [changelog](https://core.telegram.org/bots/api-changelog).
- **Topics:** `createForumTopic` works "in a forum supergroup chat or a private chat with a user". In supergroups the bot must be an admin with `can_manage_topics`. Source: [Bot API](https://core.telegram.org/bots/api#createforumtopic).
- **Mini Apps in group context:** "When opened from a direct link in a group, mini apps can also use the chat_instance parameter to track the current context, supporting shared usage by multiple chat members — to create live whiteboards, group orders, multiplayer games." Source: [Bot Features – Mini Apps](https://core.telegram.org/bots/features#mini-apps).
- **Join Request Queries (10.1)**: a guard bot can show a Mini App before deciding whether to approve someone. This suits onboarding gates. Source: [Bot API – sendChatJoinRequestWebApp](https://core.telegram.org/bots/api#sendchatjoinrequestwebapp).

**Secretary (business) bots: an agent acting inside the user's own chats**

- "Bots can enable Secretary Mode, allowing users to connect them to their account and allow it to process incoming messages and even respond on their behalf."
  - "The account owner can specify which chats your bot can access — within those chats, the bot will receive all updates... except messages sent by itself and other bots."
  - "Depending on the connection settings, your bot may also be able to send messages... on behalf of the account owner in chats that were active in the last 24h."
  - Users see a "Manage Bot" quick-action bar in each managed chat.
  - Telegram points developers to Bot Developer ToS Section 5.4.
  - Source: [Bot Features – Secretary Bots](https://core.telegram.org/bots/features#secretary-bots).
- `BusinessBotRights` flags: `can_reply` ("chats that had incoming messages in the last 24 hours"), `can_read_messages`, `can_delete_sent_messages`, `can_delete_all_messages`, `can_edit_name`/`bio`/`profile_photo`/`username`, gift and Stars rights, and `can_manage_stories`. Source: [Bot API – BusinessBotRights](https://core.telegram.org/bots/api#businessbotrights).
- Premium is no longer required (10.0). The MTProto doc says "Connecting a business bot does not require Telegram Premium" and that "currently just one business bot may be connected to a user account" (search snippet). One secondary guide says only away and greeting messages still need Premium, and that users find the feature under Settings as "Chat Automation". Sources: [changelog](https://core.telegram.org/bots/api-changelog); [core.telegram.org/api/bots/connected-business-bots](https://core.telegram.org/api/bots/connected-business-bots) (search snippet); [weego.tech guide](https://weego.tech/blog/telegram-auto-reply) (secondary).

**Managed bots and payments**

- Managed Bots let "your bot manager... allow users to seamlessly spin up their own **personal AI agents**". A `t.me/newbot/...` link pre-fills the new bot's name and username, and `setManagedBotAccessSettings` can restrict access to the owner plus up to 10 users. Sources: [Bot Features – Managed Bots](https://core.telegram.org/bots/features#managed-bots); [Bot API](https://core.telegram.org/bots/api#setmanagedbotaccesssettings).
- **Stars and subscriptions:**
  - `createInvoiceLink` with `currency="XTR"` and `subscription_period`. The period "must always be 2592000 (30 days)" and the price may not exceed 10,000 Stars. Multiple concurrent subscriptions are allowed, including several from the same user.
  - `editUserStarSubscription` cancels or re-enables renewal.
  - `Update.subscription` reports the states "canceled", "active" (re-enabled) and "failed" (payment failed).
  - `refundStarPayment` exists.
  - Bots get 50% of Telegram Ads revenue shown in their chats.
  - Sources: [Bot API – createInvoiceLink](https://core.telegram.org/bots/api#createinvoicelink); [BotSubscriptionUpdated](https://core.telegram.org/bots/api#botsubscriptionupdated); [Bot Features – Monetization](https://core.telegram.org/bots/features#monetization).
- **Gifts:** `sendGift`, `getAvailableGifts`, `upgradeGift`, `transferGift`, `getUserGifts` and `getChatGifts` (9.3). These could serve as delight or reward mechanics. Source: [changelog](https://core.telegram.org/bots/api-changelog).

**Telegram's AI announcements and Cocoon**

- **Product framing:** Telegram's May 7, 2026 release covered Guest Bots, bot-to-bot, streaming responses, "Chat Automation" (connecting a bot to a personal account), custom AI writing styles and AI sticker search. Secondary coverage reported it as Telegram app 12.7. Sources: [TestingCatalog](https://www.testingcatalog.com/telegram-ships-major-update-for-ai-bots-and-automations/), [Mobigyaan](https://www.mobigyaan.com/telegram-update-2026-ai-guest-bots), [TechTimes](https://www.techtimes.com/articles/316790/20260518/telegrams-bot-api-now-lets-autonomous-ai-agents-coordinate-directly-no-federal-multi-agent.htm) (secondary; official post reportedly at telegram.org/blog/ai-bot-rev..., not retrieved).
- **COCOON (Confidential Compute Open Network)**, from its own repository:
  - "enables running AI models in trusted execution environments, while earning TON cryptocurrency for compute services".
  - Three components: client, proxy and worker. "Both proxy and worker run inside TEE (currently Intel TDX, AMD SEV-SNP), ensuring all data (prompts, responses) remains private and cannot be accessed by server owners."
  - "Clients can verify that responses come from the requested model". Attestation is verified over RA-TLS, against an on-chain root contract that lists allowed image and model hashes.
  - "Only the client can see prompts and responses."
  - "Proxies are operated by the COCOON team for simplicity" for now. The root contract is also team-managed for now, with a DAO planned.
  - "The client library is designed to run on servers... e.g., the Telegram backend". A lightweight on-device library is a work in progress.
  - Source: [TelegramMessenger/cocoon README](https://github.com/TelegramMessenger/cocoon) and [docs/architecture.md](https://github.com/TelegramMessenger/cocoon/blob/main/docs/architecture.md) (repo HEAD 2026-04-10).
- Durov announced Cocoon on Oct 29, 2025 (Blockchain Life, Dubai). It went live around the end of November 2025, with Telegram as "first major customer". Sources: [Cryptonomist](https://en.cryptonomist.ch/2025/12/01/cocoon-network-telegram-confidential-ai/), [CoinEdition](https://coinedition.com/telegram-activates-cocoon-network-to-rival-aws-for-ai-compute/) (secondary; pricing and performance claims are Durov's, unverified).
- Mira's own site has Cocoon and Telegram-AI explainer posts. These are vendor content, found but not read: [mira.tg – What is Cocoon](https://mira.tg/blog/what-is-cocoon-telegram), [mira.tg – Telegram AI Platform 2026](https://mira.tg/blog/telegram-ai-platform-2026-grok-cocoon), [mira.tg – AI in Telegram](https://mira.tg/blog/ai-in-telegram-everything-you-can-do-with-an-ai-assistant).

### Inferences
- **Private-chat (DM) agent:**
  - The best-practice streaming flow is buildable natively: an empty draft shows "Thinking…"; then a rich draft with a `<tg-thinking>` step label ("Reading 42 messages in #design…"); then streamed text; then the final `sendRichMessage` with action buttons.
  - Keep one `draft_id` per answer so the updates animate.
  - Use `can_stop=true` for long generations. The stop button is the platform-native interrupt.
- **Group agent (the "Team Agent" case):**
  - `sendMessageDraft` and `sendRichMessageDraft` target private chats only. In groups, progress has to come from `sendChatAction` (≤5 s, so it must be refreshed) plus a placeholder message that is edited, or an ephemeral progress message to the requester.
  - The 20 messages/min group cap (Q2) argues for fewer, consolidated messages.
- **Ephemeral messages are the key group-UX primitive for an agent.** Use them for:
  - confirmations ("I'm about to post this summary to the group. Send / Edit / Cancel")
  - permission requests
  - personal digests
  - errors
  - onboarding hints

  This keeps the shared chat clean and avoids embarrassing anyone publicly. Ephemeral commands (e.g. `/ask` marked `is_ephemeral`) let people query the team agent privately inside the group.
- **Guest Mode** gives a no-install, try-before-you-add acquisition path. Anyone can type @mira in any chat, get one reply, and then be offered "Add Mira to this group" for persistent team-agent features. It also suits privacy-sensitive users, since a guest bot sees only the tagged message and the message it replies to.
- **Topics in private chats** allow "one topic per task/project" (parallel agent threads, Claude/ChatGPT-style). Check the Stars-purchase fee before relying on this if Mira monetises with Stars.
- **Button `style`** (success/danger/primary) and `disabled` (10.3) let approval cards follow the "safe default plus clearly marked destructive action" convention. After a decision, disable the buttons so nobody double-taps.
- **Cocoon "private mode" copy must be precise.** Cocoon keeps prompts away from GPU and server owners, and attestation proves which model ran. But "only the client can see prompts and responses", and the client is the app's backend. Unless Mira's own backend is also attested, the honest claim is "your requests are processed on confidential hardware that compute providers can't read". It is not "no one, including us, can read it". Proxies are also still run by the Cocoon team.
- **Secretary Mode** makes a personal "manage my DMs" agent possible without Premium. The 24-hour reply window and the per-chat access the user grants should drive the onboarding and trust design. Only one business bot can be connected per account, which is a competitive constraint: users must pick one.

### Gaps
- I could not read the official Aug 24, 2026 changelog prose. The 10.3 items above come from the Bot API spec diff (field and method additions are exact; release notes and rationale are missing). As of the spec's last regeneration (Aug 25, 2026) there was no evidence of a 10.4. I could not check whether anything shipped between then and Nov 5, 2026, because core.telegram.org and t.me/BotNews were unreachable.
- The size of the Threaded-mode Stars fee (ToS §6.2.6) was not visible.
- I could not retrieve Telegram's official blog posts (Dec 2025 "threads for bots" and May 2026 AI update). Their user-facing framing comes from secondary coverage.
- I found no primary source on how Telegram itself uses Cocoon (which AI features, and whether third-party bots get a Telegram-provided Cocoon endpoint), or on Cocoon pricing for developers.

---

## 2. Constraints: rate limits, message limits, what bots cannot do, privacy mode, Bot API vs MTProto userbots, Business/Premium, App Store and payment policy

### Takeaway
The hard constraints that shape agent design are:
- about 1 msg/s per chat and **20 msgs/min per group**
- **4096-character** messages (1024 for captions)
- **64-byte callback data**
- drafts that are **private-only 30-second previews**, rate-limited to about 20 updates per 5 s
- **group privacy mode by default**
- no access to a user's other chats unless they connect the bot via Secretary Mode, which is limited to chats they choose, a 24-hour reply window and one bot per account
- **Telegram Stars mandatory for digital goods**, with subscriptions fixed at 30 days and capped at 10,000 Stars
- Apple's guideline 4.7 rules for mini apps and chatbots

### Cited Findings

**Rate limits**
- "In a single chat, avoid sending more than one message per second... eventually you'll begin receiving 429 errors."
- "In a group, bots are not be able to send more than **20 messages per minute**."
- "For bulk notifications, bots are not able to broadcast more than about **30 messages per second**, unless they enable paid broadcasts."
- Paid broadcasts allow up to 1000 msg/s at 0.1 Stars per message above the free 30/s. To qualify, a bot needs **≥100,000 Stars on balance and ≥100,000 MAU**. Otherwise Telegram suggests "spreading [broadcasts] over longer intervals (e.g. 8–12 hours)".
- Source: [Bots FAQ](https://core.telegram.org/bots/faq#my-bot-is-hitting-limits-how-do-i-avoid-this) ([mirror](https://github.com/timoncool/telegram-api-mcp/blob/master/docs/raw-faq.html)).

**Draft limits**
- 20 calls per 5 s and 40 per 30 s per peer. Drafts can only be sent to users, not groups. Sources: [core.telegram.org/api/bots/ai](https://core.telegram.org/api/bots/ai) (search snippet); [Bot API sendMessageDraft](https://core.telegram.org/bots/api#sendmessagedraft) ("target private chat").

**Size limits**
- Message text is 1–4096 characters after entity parsing; media captions 0–1024. Callback data is 1–64 bytes.
- Commands: at most 100; 1–32 characters each; descriptions up to 256.
- Bot description: 0–512 characters. Short description: 0–120 characters.
- Rich-message button rows hold 1–8 buttons.
- Sources: [Bot API](https://core.telegram.org/bots/api#sendmessage), via [spec](https://raw.githubusercontent.com/PaulSonOfLars/telegram-bot-api-spec/main/api.json).
- Files: bots can send up to 50 MB ([Bots FAQ](https://core.telegram.org/bots/faq)) and download up to 20 MB via `getFile` ([Bot API](https://core.telegram.org/bots/api#getfile)). A self-hosted Local Bot API server lifts these limits ([Bot Features – Local Bot API](https://core.telegram.org/bots/features#local-bot-api)).

**Privacy mode in groups**
- By default, bots in groups "only see relevant messages and commands":
  - commands addressed to them
  - general commands, if this bot was the last bot to post
  - inline messages sent via the bot
  - replies to the bot's messages

  They always receive service messages.
- Admin bots receive all messages.
- Disabling privacy mode requires the bot to be re-added. "We only recommend doing this in cases where it is absolutely necessary." "**Users can always see a bot's current privacy setting in the list of group members.**"
- Source: [Bot Features – Privacy Mode](https://core.telegram.org/bots/features#privacy-mode).

**Bots and other bots' messages (conflicting docs)**
- The FAQ still says "bots will not be able to see messages from other bots regardless of mode" and that admin or privacy-off bots get everything "except messages sent by other bots". The newer Features page (Bot-to-Bot, Bot API 10.0) allows exceptions. The FAQ looks stale. Sources: [Bots FAQ](https://core.telegram.org/bots/faq); contradicted by [Bot Features – Bot-to-Bot](https://core.telegram.org/bots/features#bot-to-bot-communication).

**What bots cannot do**
- They can't read a user's other chats. The only exception is Secretary Mode, and then only for chats the user selects, excluding messages from bots and from the bot itself. Source: [Bot Features – Secretary Bots](https://core.telegram.org/bots/features#secretary-bots).
- Mini Apps opened via inline mode or a direct link "have no access to the chat — they can't read messages or send new ones on behalf of the user". Source: [Mini Apps](https://core.telegram.org/bots/webapps#direct-link-mini-apps).
- Guest bots get no history or participant list. Source: [Bot Features – Guest Bots](https://core.telegram.org/bots/features#guest-bots).
- `getUserPersonalChatMessages` returns only the last 1–20 messages of the user's "personal chat (i.e., the chat currently added to their profile)". It does not read their private chats. Source: [Bot API](https://core.telegram.org/bots/api#getuserpersonalchatmessages).
- Reactions: one per message, no paid reactions. Message effects work in private chats only. Custom-emoji button icons need a bot with purchased Fragment usernames or a Premium owner. Sources: [Bot API – setMessageReaction](https://core.telegram.org/bots/api#setmessagereaction), [sendMessage](https://core.telegram.org/bots/api#sendmessage), [InlineKeyboardButton](https://core.telegram.org/bots/api#inlinekeyboardbutton).
- The attachment menu is "currently only available for major advertisers on the Telegram Ad Platform". Source: [Mini Apps – Attachment Menu](https://core.telegram.org/bots/webapps#launching-mini-apps-from-the-attachment-menu).
- `requestWriteAccess` is a native popup through which a Mini App asks permission for the bot to message the user. This is the consented route to proactive DMs from a Mini App user. Source: [@types/telegram-web-app](https://www.npmjs.com/package/@types/telegram-web-app) (Bot API 6.9+).

**Secretary Mode and Premium**
- No Premium is needed since Bot API 10.0 (May 8, 2026). Source: [changelog](https://core.telegram.org/bots/api-changelog).
- Reply is allowed only in chats active in the last 24 h. Source: [BusinessBotRights](https://core.telegram.org/bots/api#businessbotrights).
- One business bot per account. Source: [connected-business-bots](https://core.telegram.org/api/bots/connected-business-bots) (search snippet).

**Mini App security**
- Since Jul 20, 2026, Mini App methods are blocked from origins other than the Mini App's own domain unless the owner opts out in BotFather. Iframe and multi-domain setups break. Sources: [changelog 10.2](https://core.telegram.org/bots/api-changelog); [Adsgram guide](https://adsgram.ai/blog/adsgram/telegram-mini-app-tma-development-mistakes-and-how-to-avoid-them) (secondary).

**Payments and store policy**
- "If your bot or mini app sells digital goods and services, be sure to carry out the payment in Telegram Stars by specifying XTR as currency. In compliance with third-party store policies, Telegram does not support the sale of digital goods and services using other currencies." Physical goods can use third-party providers such as Stripe, and Telegram takes no fee on those. Source: [Bot Features – Payments](https://core.telegram.org/bots/features#payments).
- "Users can acquire Stars through in-app purchases via Apple and Google or via @PremiumBot." Source: [Bot Features – Telegram Stars](https://core.telegram.org/bots/features#telegram-stars).
- The policy came from Apple flagging a bot under App Review Guidelines 4.7 and 3.1.1. Digital payments had to move to Stars from June 12, 2024. Sources: [Telegram Stars blog](https://telegram.org/blog/telegram-stars); [Apple Developer Forums thread](https://developer.apple.com/forums/thread/755947) (search snippets).
- Apple App Review Guideline **4.7 "Mini apps, mini games, streaming games, chatbots, plug-ins, and game emulators"** (last updated Oct 16, 2026):
  - Software offered this way must follow privacy guideline 5.1.
  - It must include "a method for filtering objectionable material, a mechanism to report content and timely responses to concerns, and the ability to block abusive users".
  - It must "follow Guideline 3.1 in order to offer digital goods or services".
  - 4.7.3: "may not share data or privacy permissions to any individual software offered in your app without explicit user consent in each instance".
  - 4.7.5: age-restriction mechanisms.
  - Source: [Apple App Review Guidelines](https://developer.apple.com/app-store/review/guidelines/).
- Telegram reportedly requires bots and mini apps to publish a privacy policy to comply with Apple guideline 5.1.1(i). Source: search snippet summarising [Telegram Stars blog](https://telegram.org/blog/telegram-stars).
- Stars subscription limits: 30-day period only, ≤10,000 Stars. Source: [Bot API – createInvoiceLink](https://core.telegram.org/bots/api#createinvoicelink).

### Inferences
- In groups the 20/min limit plus the noise cost make "one consolidated, edited message per task" a sound pattern. Put per-person content in ephemeral messages.
- A long, rich agent answer can exceed 4096 characters. Use a Rich Message with a collapsible `details` block, or a "Open full report" Mini App button, rather than splitting into many messages. (Whether Rich Messages have a higher character limit was not verified.)
- With 64-byte callback data, button actions must reference server-side state (e.g. `approve:<short_id>`). Approval cards therefore need a server-side "pending action" record, which is also good for audit and undo.
- The "Team Agent" privacy decision is a UX decision. Privacy mode on means the agent sees only mentions and replies (high trust, low context). Admin or privacy off means it sees everything (powerful, and visible to all members in the member list). The proposal should make this choice explicit and reversible, e.g. an onboarding card explaining "what Mira can see here".
- Because the Stars subscription period is fixed at 30 days, pricing tiers must be monthly in Stars. `Update.subscription` "failed" and "canceled" states give natural hooks for graceful downgrade messaging.

### Gaps
- **Bot API vs MTProto userbots.** I could not access Telegram's API Terms of Service (core.telegram.org/api/terms) or authoritative statements on userbot restrictions. The general knowledge that userbots log in as a user account via MTProto, can read all of that user's chats, and risk ToS bans is unverified here and should be treated as unsourced.
- I did not verify whether Rich Messages allow more than 4096 characters, or whether ephemeral messages count toward the group rate limit.
- Google Play's position on Stars was not confirmed. Secondary commentary says the trigger was Apple-only.

---

## 3. Telegram design language: official Mini App guidelines, UI kits, theming and native feel

### Takeaway
Telegram's official guidance is short: be mobile-first, mimic native components, run animations at 60 fps, label everything for accessibility, follow live theme colours, respect safe areas, and degrade gracefully on low-end Android. Native feel comes mostly from using Telegram's own chrome (MainButton/SecondaryButton, BackButton, SettingsButton, native popups, haptics, the custom splash screen) and the 15 `themeParams` CSS variables. The community `@telegram-apps/telegram-ui` kit and its Figma file implement iOS and Material-flavoured Telegram components.

### Cited Findings

**Official "Design Guidelines" (Mini Apps), quoted**
- "Telegram apps are known for being snappy, smooth and following a consistent cross-platform design. Your Mini App should ideally reflect these principles.
  - All elements should be responsive and designed with a mobile-first approach.
  - Interactive elements should mimic the style, behavior, and intent of UI components that already exist.
  - All included animations should be smooth, ideally 60fps.
  - All inputs and images should contain labels for accessibility purposes.
  - The app should deliver a seamless experience by monitoring the dynamic theme-based colors provided by the API and using them accordingly.
  - Ensure that the app's interface respects the safe area and content safe area to avoid overlapping with control elements, especially when using fullscreen mode.
  - For Android devices, consider the additional information in the User-Agent... and adjust for the device's performance class, minimizing animations and visual effects on low-performance devices."
- On colour schemes: "Mini Apps always receive data about the user's current color theme in real time... when users switch between Day and Night modes or use various custom themes."
- Source: [Mini Apps – Designing Mini Apps](https://core.telegram.org/bots/webapps#designing-mini-apps) ([mirror](https://github.com/timoncool/telegram-api-mcp/blob/master/docs/raw-webapps.html)).

**Theme parameters and CSS variables**
- `bg_color`, `text_color`, `hint_color`, `link_color`, `button_color`, `button_text_color` and `secondary_bg_color` (6.1+).
- `header_bg_color`, `accent_text_color`, `section_bg_color`, `section_header_text_color`, `subtitle_text_color` and `destructive_text_color` (all 7.0+).
- `section_separator_color` (7.6+) and `bottom_bar_bg_color` (7.10+).
- Each is available as `var(--tg-theme-<name>)`, along with `--tg-color-scheme`, `--tg-viewport-height`, `--tg-viewport-stable-height` and safe-area variables such as `--tg-content-safe-area-inset-left`.
- `setHeaderColor`, `setBackgroundColor` and `setBottomBarColor` (7.10+) tint Telegram's chrome. The bottom-bar colour is also applied to the Android navigation bar.
- Sources: [@types/telegram-web-app 10.1.0](https://www.npmjs.com/package/@types/telegram-web-app); [Mini Apps – ThemeParams](https://core.telegram.org/bots/webapps#themeparams).

**Native chrome components**
- **MainButton and SecondaryButton** (`BottomButton`):
  - Defaults: "Continue" and "Cancel".
  - Colours follow theme `button_color` and `bottom_bar_bg_color`.
  - `showProgress()` adds a loading spinner.
  - `hasShineEffect` (7.10+).
  - The secondary button's `position` can be left, right, top or bottom (7.10+).
  - `iconCustomEmojiId` (9.5+).
  - Source: [@types/telegram-web-app](https://www.npmjs.com/package/@types/telegram-web-app); [Mini Apps – BottomButton](https://core.telegram.org/bots/webapps#bottombutton).
- **Other native controls:**
  - BackButton in the header.
  - SettingsButton in the context menu.
  - HapticFeedback.
  - `showPopup` with title 0–64 characters, message 1–256 characters and button text 0–64 characters; plus `showAlert` and `showConfirm`.
  - `enableClosingConfirmation`.
  - `disableVerticalSwipes` (7.7+), with the advice to "always enable swipes unless they conflict with the Mini App's own gestures".
  - `showScanQrPopup`.
  - `requestContact` and `requestWriteAccess`.
  - Source: [@types/telegram-web-app](https://www.npmjs.com/package/@types/telegram-web-app).
- `ready()` should be called "as early as possible... Once this method is called, the loading placeholder is hidden". Source: [@types/telegram-web-app](https://www.npmjs.com/package/@types/telegram-web-app).
- **Custom loading screens**: "developers can add their own icon and set specific colors for both light and dark themes" (BotFather > Bot Settings > Configure Mini App > Configure Splash Screen). Source: [Bot Features – Customizable Loading Screens](https://core.telegram.org/bots/features#customizable-loading-screens).

**Device capabilities (Bot API 8.0 "largest update in the history of Telegram mini apps", Nov 17, 2024, plus later additions)**
- Full-screen in portrait and landscape (`requestFullscreen`), with `safeAreaInset` and `contentSafeAreaInset`.
- Home-screen shortcuts (`addToHomeScreen`, `checkHomeScreenStatus`).
- Emoji status (`setEmojiStatus`, `requestEmojiStatusAccess` combined with Bot API `setUserEmojiStatus`).
- `shareMessage`, which uses a `PreparedInlineMessage`.
- `downloadFile` and `shareToStory`.
- LocationManager; Accelerometer, Gyroscope and DeviceOrientation; `lockOrientation`.
- Stars subscriptions in Mini Apps.
- Android hardware performance class in the User-Agent.
- Sources: [Mini Apps – Recent changes](https://core.telegram.org/bots/webapps#recent-changes); [Bot Features – Mini Apps](https://core.telegram.org/bots/features#mini-apps).

**Storage**
- **CloudStorage**: 1024 keys; keys 1–128 characters; values 0–4096 characters; synced across devices. Source: [@types/telegram-web-app](https://www.npmjs.com/package/@types/telegram-web-app).
- **DeviceStorage** (9.0+): "Each bot can store up to 5 MB per user". Source: [Mini Apps – DeviceStorage](https://core.telegram.org/bots/webapps#devicestorage).
- **SecureStorage** (9.0+): iOS Keychain or Android Keystore, "up to 10 items per user", suited to "tokens, secrets, authentication state". Source: [Mini Apps – SecureStorage](https://core.telegram.org/bots/webapps#securestorage).
- **BiometricManager** (7.2+) can gate actions behind Face ID or fingerprint and store a biometric token. Source: [@types/telegram-web-app](https://www.npmjs.com/package/@types/telegram-web-app).

**Launch surfaces**
- "Telegram currently supports seven different ways of launching Mini Apps": the main Mini App from the profile button, a keyboard button, an inline button, the bot menu button, inline mode, a direct link and the attachment menu.
- The main Mini App opens full height by default; `mode=compact` opens it at half height.
- Bots with a main Mini App plus Stars payments can be featured in the Mini App Store. "More than 500 million out of Telegram's 950 million users interact with mini apps every month."
- Sources: [Mini Apps – Implementing](https://core.telegram.org/bots/webapps#implementing-mini-apps); [Bot Features – Mini App Store](https://core.telegram.org/bots/features#mini-app-store).
- Mini App previews (screenshots and videos on the bot profile) support per-language versions. Source: [Bot Features – Mini App Previews](https://core.telegram.org/bots/features#mini-app-previews).

**UI kits**
- **@telegram-apps/telegram-ui ("Telegram UI")**:
  - "Use built-in support for iOS's Human Interface Guidelines and Android's Material Design", "Pre-designed UI Components... inspired by Telegram's interface", and "Telegram Color Scheme Support".
  - Component groups:
    - Blocks: Accordion, Avatar/AvatarStack, Badge, Banner, Blockquote, Button, Card, Cell, IconButton, InlineButtons, List, Placeholder, Section, Steps, Timeline.
    - Feedback: Progress, Skeleton, Snackbar, Spinner, Spoiler.
    - Form: Checkbox, Chip, Input, Multiselect, PinInput, Radio, Rating, Select, Slider, Switch, Textarea.
    - Layout: FixedLayout, Tabbar.
    - Navigation: SegmentedControl, TabsList, Pagination.
    - Overlays: Modal, Popper, Tooltip.
    - Typography: LargeTitle, Title, Headline, Text, Caption.
  - Figma file: [figma.com/community/file/1348989725141777736](https://figma.com/community/file/1348989725141777736/). Storybook: [tgui.xelene.me](https://tgui.xelene.me/).
  - Latest npm release is **2.1.13 (Oct 14, 2025)**, so the kit is about a year old and pre-dates the 2026 additions.
  - Sources: [TelegramUI GitHub](https://github.com/telegram-mini-apps-dev/TelegramUI); [npm @telegram-apps/telegram-ui](https://www.npmjs.com/package/@telegram-apps/telegram-ui).
- The community-maintained **Telegram Mini Apps docs and SDK** (tma.js, `@telegram-apps/sdk`) document the platform components with images of the native Main Button, Back Button, Popup, Settings Button, theming, viewport and full-screen. The repo was updated on 2026-10-28. Source: [Telegram-Mini-Apps/telegram-apps docs](https://github.com/Telegram-Mini-Apps/telegram-apps/tree/master/apps/docs/platform) (docs.telegram-mini-apps.com).
- Secondary guides agree on the native-feel checklist: native MainButton for the primary action, native BackButton for navigation, SDK haptics, `MainButton.showProgress()` during async work, skeletons and progressive loading, and testing in light and dark. Sources: [vp0.com](https://vp0.com/blogs/telegram-mini-app-ui-kit-figma-free), [dev.to guide](https://dev.to/automate_ai/complete-guide-to-telegram-mini-apps-in-2026-40b0) (secondary).

### Inferences
- **"Native" for a chat-first agent means designing in two layers.**
  - In-chat: messages, Rich Messages, inline keyboards, ephemeral messages, drafts. This is where most moments happen and where Telegram renders everything natively.
  - Mini App: for dense or stateful surfaces, such as memory and permissions dashboard, task board, billing and history.

  Hand-off links (`startapp=` deep links, `web_app` buttons) should land in the exact relevant screen.
- **For the Mini App:**
  - Drive all colour from `--tg-theme-*` and avoid hard-coded brand backgrounds. Express brand through iconography, illustration, custom emoji (AIActions pack style) and the splash screen.
  - Use MainButton for the single primary action. Use SecondaryButton (`position: left`) for "Not now" or "Cancel".
  - Use native `showConfirm`/`showPopup` for destructive confirmations.
  - Use BiometricManager for very high-stakes confirmations, such as sending money or deleting memory.
- **Shared group surfaces.** Opening the Mini App via a direct link in a group gives it `chat_instance`, enabling a team dashboard tied to that group (shared task list, decisions log). This fits a "Team Agent".
- The TelegramUI kit is a good starting point for the Figma work. Its last release (Oct 2025) means 2026 primitives (rich messages, ephemeral and draft UI) will need custom specs.

### Gaps
- I could not open Telegram's official Figma resources or confirm whether Telegram publishes an official, first-party Mini App UI kit (as opposed to the community TelegramUI kit). I found no official typography, spacing or icon spec for Mini Apps.
- I could not inspect how Telegram clients visually render ephemeral messages, drafts, the Stop button or rich-message buttons. Specs list fields only.

---

## 4. Best practices for conversational AI agent UX in chat (trust, progress, latency, errors, memory, proactivity, personality, onboarding, permissions)

### Takeaway
Credible guidance converges on these principles:
- disclose AI and set capability expectations up front
- show specific, honest progress, not "Processing…"
- keep people in control, with confirmation before consequential or irreversible actions and easy edit, undo and retry
- make the agent's plan visible
- handle errors with plain language and a next step
- give users visible, granular memory controls
- time interruptions to context, and offer global controls over what the agent monitors
- ask for minimal data with clear benefit explanations
- support quick, voluntary feedback

Empirical work suggests confirmation at intermediate steps of multi-step agent tasks can *speed up* completion, and users prefer it.

### Cited Findings

**Apple Human Interface Guidelines – Generative AI** (new June 9, 2025; updated June 8, 2026 with guidance on refining results and feedback during generation)
- "Keep people in control... Give them the ability to dismiss new content they don't want, and revert or retry... Clearly identify when and where you use AI."
- "Never trick someone into thinking they're interacting with or viewing content authored by a human if they're actually interacting with AI."
- "Set clear expectations about what your AI-powered feature can and can't do... For open-ended features like a search bar or generation prompt, consider offering curated suggestions that make it easy to get started. If your feature has known limitations, let people know up front."
- "Ask permission before using personal information... use the minimum data you need and always offer a clear way to opt out"; "explain the benefits in a way that's concise, specific, and easy to understand."
- "Consider consequences and get permission before performing irreversible or potentially problematic tasks... Avoid automating destructive actions... Generally, ask for confirmation before performing a significant action on someone's behalf."
- "Make it easy for people to refine or revert generated results, and acknowledge when their corrections take effect... surfacing controls like Edit, Undo, Retry, or Adjust near generated content."
- "Consider giving specific, reassuring feedback during generation... instead of 'Processing…', say 'Finding substitutions for ingredients' or 'Summarizing key themes from your notes.'... If something goes wrong, describe what happened in plain language and offer a clear next step."
- "Factor processing time into your design... design a loading experience or generate in the background."
- "Consider offering alternate versions of results."
- "Let people share feedback on outputs... Always make providing feedback voluntary... simple thumbs-up and thumbs-down buttons."
- "Raise awareness about and minimize the chance of hallucinations."
- Source: [Apple HIG – Generative AI](https://developer.apple.com/design/human-interface-guidelines/generative-ai) (read via its JSON data endpoint).

**Microsoft HAX – 18 Guidelines for Human-AI Interaction** (Amershi et al., CHI 2019)
- *Initially:*
  - G1 Make clear what the system can do.
  - G2 Make clear how well the system can do what it can do.
- *During interaction:*
  - G3 Time services based on context ("Time when to act or interrupt based on the user's current task and environment").
  - G4 Show contextually relevant information.
  - G5 Match relevant social norms.
  - G6 Mitigate social biases.
- *When wrong:*
  - G7 Support efficient invocation.
  - G8 Support efficient dismissal.
  - G9 Support efficient correction.
  - G10 Scope services when in doubt ("Engage in disambiguation or gracefully degrade").
  - G11 Make clear why the system did what it did.
- *Over time:*
  - G12 Remember recent interactions.
  - G13 Learn from user behavior.
  - G14 Update and adapt cautiously.
  - G15 Encourage granular feedback.
  - G16 Convey the consequences of user actions.
  - G17 Provide global controls ("Allow the user to globally customize what the AI system monitors and how it behaves").
  - G18 Notify users about changes ("Inform the user when the AI system adds or updates its capabilities").
- Sources: [HAX Design Library](https://www.microsoft.com/en-us/haxtoolkit/library/); [Microsoft Research blog](https://www.microsoft.com/en-us/research/blog/guidelines-for-human-ai-interaction-design/).

**Anthropic – "Our framework for developing safe and trustworthy agents"** (Aug 4, 2025)
- Keep humans in control while enabling autonomy. Example: Claude Code is read-only by default, asks approval before modifying, and lets users grant persistent permissions for routine tasks.
- "Humans need visibility into agents' problem-solving processes", balancing too little against too much detail. Example: a real-time to-do checklist users can adjust.
- Agents may take "reasonable-seeming actions" beyond intent (e.g. restructuring files when asked to organise).
- Protect privacy across extended interactions, since memory can leak context between tasks. Example: per-connector allow or block, and one-time vs permanent access.
- Guard against prompt injection.
- Source: [Anthropic](https://www.anthropic.com/news/our-framework-for-developing-safe-and-trustworthy-agents).

**Anthropic – "Building effective agents"** (Dec 19, 2024)
- Start with "the simplest solution possible".
- Core principles: simplicity; "Prioritize transparency by explicitly showing the agent's planning steps"; a well-documented agent-computer interface.
- Agents can "pause for human feedback at checkpoints or when encountering blockers". Use stopping conditions such as maximum iterations.
- Source: [Anthropic Engineering](https://www.anthropic.com/engineering/building-effective-agents).

**Google PAIR People + AI Guidebook**
- Chapters:
  - User Needs + Defining Success
  - Data Collection + Evaluation
  - Mental Models
  - Explainability + Trust
  - Feedback + Control
  - Errors + Graceful Failure
- Versions: launched 2019; second edition 2021, adding patterns and case studies; amended in 2023 for generative AI.
- Sources: [PAIR Guidebook](https://pair.withgoogle.com/guidebook); [PAIR Medium – updating for generative AI](https://medium.com/people-ai-research/updating-the-people-ai-guidebook-in-the-age-of-generative-ai-cace6c846db4) (search snippets; chapter content not read).

**NN/g – response-time limits**
- 0.1 s feels instantaneous.
- 1 s keeps the flow of thought. Above 1 s, indicate that the system is working.
- 10 s is the attention limit. Longer operations need "a percent-done indicator as well as a clearly signposted way for the user to interrupt the operation."
- Source: [NN/g – Response Times: The 3 Important Limits](https://www.nngroup.com/articles/response-times-3-important-limits/) (search snippet).
- NN/g also notes the **ELIZA effect**: users quickly attribute human traits to chatbots, which can inflate trust. Source: [NN/g AI topic](https://www.nngroup.com/topic/ai/?page=7) (search snippet).

**Empirical evidence on confirmation in multi-step agent tasks**
- In a 48-participant experiment, intermediate confirmation "reduced task completion time by 13.54%" and was preferred by 81% of participants. The authors frame confirmation "as a mixed-initiative design opportunity", not a binary trade-off. Source: [arXiv 2510.05307 "When Should Users Check?"](https://arxiv.org/pdf/2510.05307) (search snippet; preprint).
- The 2025 AI Agent Index reports that 20 of 30 documented agents have pause or stop mechanisms. Source: [arXiv 2602.17753](https://arxiv.org/pdf/2602.17753) (search snippet).

**Practitioner patterns**
- An "Autonomy Dial" / progressive authorisation lets users set independence separately for low-stakes and high-stakes tasks. Source: [Smashing Magazine, Feb 2026 – Designing for Agentic AI](https://www.smashingmagazine.com/2026/02/designing-agentic-ai-practical-ux-patterns/) (search snippet).
- Interruption frequency, uncertainty handling and confirmation behaviour shape an agent's perceived personality. Users should decide "which events deserve interruption, which can wait for a digest". Sources: [UXmatters, Dec 2025](https://www.uxmatters.com/mt/archives/2025/12/designing-for-autonomy-ux-principles-for-agentic-ai.php); [alitajer.com](https://alitajer.com/blog/agentic-ux-patterns) (search snippets; practitioner opinion).
- Show **five or fewer** suggested prompts at once, and hide them once the user picks one, because they go stale as context changes. Source: [AWS Cloudscape – Support prompts](https://cloudscape.design/patterns/genai/support-prompts) (search snippet).

**Memory transparency reference: ChatGPT**
- Two layers: "saved memories" and "chat history". Both can be toggled; users can view or delete individual memories or clear all.
- Deleting a chat does not delete its memories.
- "Temporary Chat" doesn't use or create memory and isn't used for training.
- There is no per-conversation memory exclusion that keeps the chat in history (per staff forum post).
- Sources: [OpenAI – Memory and new controls](https://openai.com/index/memory-and-new-controls-for-chatgpt/); [OpenAI community](https://community.openai.com/t/add-per-conversation-memory-controls-for-saved-chatgpt-chats/1382890) (search snippets).

**Platform-level etiquette signals (Telegram and Apple)**
- Telegram asks bots to avoid unnecessary privacy-mode-off access ("only recommend doing this in cases where it is absolutely necessary"). Source: [Bot Features – Privacy Mode](https://core.telegram.org/bots/features#privacy-mode).
- Telegram positions ephemeral messages for "personalized summaries, contextual hints and other interactions that shouldn't clutter the conversation for others". Source: [Bot Features – Ephemeral Messages](https://core.telegram.org/bots/features#ephemeral-messages).
- Apple: push notifications "should not be used for promotions or direct marketing purposes unless customers have explicitly opted in... and you provide a method in your app for a user to opt out". Source: [Apple App Review Guidelines 4.5.4](https://developer.apple.com/app-store/review/guidelines/).

### Inferences: mapping principles to Telegram primitives for Mira
- **Disclose and set expectations (HIG; HAX G1/G2):**
  - Use the bot's short description (≤120 characters) and description (≤512) and the `/start` card to state what Mira does and doesn't do in that context.
  - In groups, post one pinned or ephemeral "What Mira can see here" card that reflects privacy mode versus admin status.
- **Onboarding that shows value fast:**
  - Up to 5 suggested-action buttons, using reply-keyboard chips or inline buttons that disappear once one is used.
  - A first task the agent can complete in under 10 s, using the group's recent context where permitted.
  - Guest Mode as a zero-commitment first touch.
- **Progress and latency (NN/g limits; HIG "specific feedback"):**
  - Under 1 s: no indicator needed.
  - 1–10 s: typing action plus an empty draft ("Thinking…").
  - Over 10 s: a draft with `<tg-thinking>` step labels describing the actual work, plus `can_stop` (Bot API 10.3) as the "clearly signposted way to interrupt".
  - Background jobs: an editable status message, plus a completion notification.
- **Visible plan and checkpoints (Anthropic; arXiv):**
  - For multi-step tasks, post a plan as a checklist-style rich message ("1. Read #design since Monday ✓ 2. Draft summary… 3. Post to group — needs your OK"), editing it in place.
  - Put the confirmation at the consequential step, not every step.
- **Confirmation before consequential actions (HIG; HAX G16):**
  - Use an ephemeral approval card to the requester in groups, or a DM card in private.
  - Buttons: `style:"success"` for the primary action, plus Edit and Cancel. Use `style:"danger"` for destructive actions.
  - After a tap, disable the buttons and edit the card to show "Sent by @alice at 14:02 · Undo (30 s)".
  - Use BiometricManager in the Mini App for money or irreversible deletes.
- **Error recovery (HIG; HAX G9/G10):**
  - Plain-language error, then a next-step button (Retry, Rephrase, Narrow scope).
  - When intent is ambiguous, ask a one-tap disambiguation question with inline buttons rather than guessing.
- **Memory transparency (Anthropic privacy; HAX G12/G17; ChatGPT model):**
  - A "Memory" Mini App screen, plus a `/memory` command showing what Mira remembers per person and per group.
  - Each memory carries its source ("from #general, Oct 12"), with forget/edit controls and a "temporary/off-the-record" mode.
  - Acknowledge when a correction takes effect (HIG).
  - Separate personal memory from team memory to avoid cross-context leakage.
- **Proactive messaging etiquette (HAX G3/G17/G18; Telegram limits):**
  - Default to digests, either a scheduled daily or weekly summary or a "catch-up" on demand.
  - Interrupt in real time only for user-defined triggers (mentions, deadlines, decisions needing a vote).
  - Use ephemeral messages for personal nudges in groups, `disable_notification` for low-priority posts, and a global "quiet hours / frequency" control.
  - Announce new capabilities once (G18).
- **Permission and trust design for reading messages (HIG "ask permission"; Apple 4.7.3; Telegram Secretary Mode):**
  - Ask at the moment of need, with a concrete benefit ("Let Mira read #design to answer this?").
  - Scope access per chat, show the scope, make it revocable, and log access.
  - For Cocoon private mode, state precisely what is protected and from whom (see Q1 inference).
- **Personality and tone (HAX G5; NN/g ELIZA effect):**
  - Be concise and match group norms.
  - Avoid over-humanising, so trust isn't inflated.
  - Use expressive Telegram features sparingly (one reaction per message, effects in DMs only).
  - Use reactions as lightweight acknowledgments (👀 = working, ✅ = done) instead of extra messages in busy groups.
- **Feedback (HIG; HAX G15):** offer voluntary 👍/👎 inline buttons, or user reactions on Mira's messages, which bots can observe through reaction updates. Telegram itself doesn't specify using reactions as feedback; this is an inference.

### Gaps
- NN/g and Google PAIR pages were unreachable. Their findings here rely on search snippets, and I found no dedicated NN/g article on AI *agent* UX patterns or on citations and trust.
- I found no rigorous research on proactive-notification frequency for AI agents. The etiquette guidance is synthesised from HAX G3/G17, Apple's notification rules and practitioner essays.
- I found no a16z or Greylock agent-UX essays in the results, and could not reach their sites.
- I did not retrieve OpenAI or Anthropic memory-UX documentation beyond the OpenAI memory-controls snippet.

---

## 5. Notable examples of excellent Telegram bot / Mini App design, and screenshots

### Takeaway
The clearest "native-feeling" exemplars are Telegram's own:
- **@DurgerKingBot**, the official demo Mini App. It follows the user's theme, uses the native MainButton for checkout and native popups, and launches from an inline button, the menu button, inline mode and the attachment menu.
- **@RichTextDemoBot**, which demonstrates Rich Messages.
- First-party-adjacent apps such as **Wallet** and **Fragment**, which feel integrated rather than "website in a webview".

Good Telegram design (a) uses Telegram's chrome rather than custom equivalents, (b) adapts to the live theme, (c) keeps one clear primary action, and (d) loads fast with a branded splash.

### Cited Findings
- @DurgerKingBot is Telegram's reference example. It launches from an inline button and the menu button, works in inline mode ("try typing @durgerkingbot in any chat") and via the attachment menu. Sources: [Mini Apps – Menu Button / Attachment Menu](https://core.telegram.org/bots/webapps#launching-mini-apps-from-the-menu-button); [Bot Features – Inline Requests](https://core.telegram.org/bots/features#inline-requests).
- @RichTextDemoBot is Telegram's "interactive rich message demo". Source: [Bot Features – Advanced Formatting](https://core.telegram.org/bots/features#advanced-formatting-options).
- Wallet by Telegram (@wallet) is described as "Telegram-native with a simple UX" and recommended for non-crypto users, though it is custodial. Fragment is a marketplace for usernames, numbers and NFTs with "native integration". Source: [dev.to – 30 best Mini Apps on TON 2026](https://dev.to/ton-adoption/30-best-mini-apps-on-ton-in-2026-catalog-by-category-1jc7) (secondary listicle; volume claims unverified).
- Grindery smart wallet was redesigned inside Telegram. It reportedly reached "over 4 million users", and the designer claims the redesign cut transaction time by more than half. Source: [yuridek.com case study](https://www.yuridek.com/project/grindery-smart-wallet) (designer's own portfolio; unverified).
- To be featured in the Mini App Store, a bot must enable a Main Mini App, upload high-quality media demos and accept Stars. Source: [Bot Features – Mini App Store](https://core.telegram.org/bots/features#mini-app-store).

**Screenshots downloaded** (all via `curl` from raw.githubusercontent.com) to `/home/user/gen/research_notes/Miro Telegram AI agent research/screenshots/`. They come from the community-maintained Telegram Mini Apps documentation and depict Telegram's native Mini App UI:

| Filename | Source URL | Description |
|---|---|---|
| `telegram_miniapp_theming_durgerking.png` (1400×1120) | https://raw.githubusercontent.com/Telegram-Mini-Apps/telegram-apps/master/apps/docs/public/functionality/theming.png | Telegram's official demo Mini App **Durger King (@DurgerKingBot)** in three Telegram themes (dark/green, light/purple, dark/blue). Header text, accent colour and the native "VIEW ORDER" MainButton all re-colour from `themeParams`. This is the canonical illustration of "monitor dynamic theme colours". |
| `telegram_miniapp_main_button.png` (1400×700) | https://raw.githubusercontent.com/Telegram-Mini-Apps/telegram-apps/master/apps/docs/public/components/main-button.png | Durger King checkout in dark theme with the **native MainButton** "PAY $1.49" pinned at the bottom, outside the webview. Shows the single-primary-action pattern. |
| `telegram_miniapp_native_popup.png` (1400×700) | https://raw.githubusercontent.com/Telegram-Mini-Apps/telegram-apps/master/apps/docs/public/components/popup.png | A **native `showPopup` dialog** ("Additional — Would you like to add ketchup? Yes / No") over the Mini App, with the MainButton dimmed. This is the pattern for native confirmations. |
| `telegram_miniapp_fullscreen_mode.png` (1000×700) | https://raw.githubusercontent.com/Telegram-Mini-Apps/telegram-apps/master/apps/docs/public/functionality/full-screen.png | A Mini App ("Zipsy") in standard mode (Telegram header with Close and ⋯) versus **full-screen mode** (floating Close and ⌄/⋯ controls over content). Shows why `contentSafeAreaInset` matters. |

- Source repo for the images: [Telegram-Mini-Apps/telegram-apps (docs, updated 2026-10-28)](https://github.com/Telegram-Mini-Apps/telegram-apps/tree/master/apps/docs/public).

### Inferences
- The proposal should present Mira's Mini App screens in the same visual grammar as these screenshots: themed backgrounds, a native MainButton for the one primary action, native popups for confirmations, and a full-screen mode only for immersive views such as a team board.
- The strongest in-chat exemplar to model is the combination of Telegram's 2026 primitives (draft streaming with a thinking block, then a rich message with buttons, then ephemeral confirmations). This is so new that few public examples exist, which is an opportunity for the proposal to show "best-in-class on the newest platform features".

### Gaps
- I couldn't download screenshots of Wallet, Fragment or Mira itself: telegram.org, wallet.tg, fragment.com, Wikimedia and most image hosts were blocked. The four images are of Telegram's demo app and platform components, not third-party exemplars.
- I found no credible, design-focused critiques of specific Telegram Mini Apps; available sources are mostly listicles. Design-quality claims about Wallet and Fragment rest on secondary sources.
- I could not view or capture renderings of 2026 AI features (drafts, the Stop button, ephemeral messages, rich messages) as screenshots.

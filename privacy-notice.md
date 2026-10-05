# Kindred — Privacy Notice

**Status:** v0.14 · _Testing stage: Kindred is used by the founder's family and invited testers only._ **Last updated:** 2026-10-05

* * *

## In short — the 30-second version

-   **Kindred is a personal health-records vault for caregivers.** You upload records (lab reports, prescriptions, doctor notes, etc.) for the people you care for, and log day-to-day vital readings (BP, blood sugar) for them.
-   **Your data is stored in India** (Mumbai), on Oracle Cloud.
-   **AI reads your reports** to explain them. It is on when you start; you can turn it off at any time in Profile. Before a report goes to the AI, we remove names, phone numbers, email addresses and ID numbers from its text. The AI provider's servers may be outside India. See [AI reading of reports](#ai).
-   **You can ask Kindred questions about your family's records**, and make a one-page brief for a doctor visit. The AI sees relations ("your mother"), never names. We keep the chat for 30 days so Kindred remembers what you asked before; **Clear chat** deletes it at once. See [Asking Kindred and visit briefs](#ask).
-   **You can send reports on WhatsApp.** Our WhatsApp replies never contain your test values; those stay behind your Kindred sign-in. See [Using Kindred on WhatsApp](#whatsapp).
-   **Phone notifications.** When someone else in your family adds a report or a reading, and when a home check (BP, sugar, medicine) set up for a person you look after is due, the Kindred app can tell you. Google delivers only a signal with numbers that identify the item, never names or health values. Your phone then gets the text from Kindred over your signed-in connection. See [Who we share it with](#sharing).
-   **We don’t sell your data, ever.** We don’t share it with advertisers, marketers, or insurers.
-   **You can delete your account and your records at any time.** Deleting hides the item at once. For 24 hours you (or anyone who looks after that person) can undo it, in case of a mistake. Then the files and data are erased for good — not just hidden.
-   **One person to write to:** `ajaygaur319@gmail.com`. We respond to grievance and rights requests within 30 days.

The full notice is below. Read it once. The short version above is what most caregivers need to know.

* * *

## 1. Who we are {#who-we-are}

Kindred is operated by **Ajay Gaur**, an individual based in India, acting as the **Data Fiduciary** under the Digital Personal Data Protection Act, 2023 (“DPDPA”).

If Kindred incorporates as a legal entity in future, this notice will be updated and you will be asked to consent again.

For everything in this notice, “we” / “Kindred” means the data fiduciary above. “You” means the person whose personal data is being processed — what DPDPA calls the **Data Principal**.

## 2. What we collect {#data-collected}

We only collect data we actually need to run the app. Today, that means:

**Account data**

-   Your name, email address, and Google profile picture (when you sign in with Google).
-   Your Google account identifier (a unique ID Google issues to us).
-   The language you choose for Kindred and its WhatsApp messages.
-   Your consent choices: that you agreed to this notice, which version, whether AI reading is on, and when — each time you choose or change.

**Health-record data you upload**

-   Files you upload as records — typically lab reports, prescriptions, doctor notes, discharge summaries, imaging reports, and similar documents. These often contain sensitive health information about the patient the record is for.
-   A name and date of birth for each patient you add (e.g., yourself, your parent).
-   The relationship you have to that patient (e.g., self, father, mother).

**Vital readings you log**

-   Blood-pressure measurements (systolic, diastolic, pulse) and blood-glucose readings (value, fasting / post-meal context) that you log for a patient.
-   Whether a prescribed medication was taken at the time of a reading (yes / no), if the daily check is configured to track medication.
-   Optional notes you add to a reading.
-   A threshold you set for each patient (e.g., 140/90 for BP) and a flag we compute for each reading indicating whether it crossed the threshold.
-   Who logged the reading and when. Vital readings are intrinsic to the patient; we record which caregiver entered them as metadata, for accountability among co-caregivers.

**Caregiver-relationship data**

-   The email address of someone you invite to share access to a patient’s records.
-   The fact that you have invited them, and whether they accepted.
-   A record of consent attestations (when, by which caregiver, on whose behalf) for invites and revocations, retained as a privacy / DPDPA audit trail.
-   For a one-time join link (sent from your own WhatsApp, see [Who we share it with](#sharing)): which patient it is for, who created it, when it expires, and who used it. We keep only a scrambled fingerprint (hash) of the link, never the link itself. We do **not** store the phone number you invite.

**WhatsApp data** (only if you use Kindred on WhatsApp)

-   Your WhatsApp phone number, linked to your Kindred account after you confirm it.
-   The files you send us on WhatsApp. They are stored like any other record.
-   For each message: its type (file, text, button), when it arrived, and what Kindred did with it. We do **not** store the text of your WhatsApp messages.

**AI readings**

-   What the AI finds in a report: its type, date, lab or hospital, a short summary, the test results with their printed ranges, flags that need attention, and questions for the doctor.
-   Each test result, stored separately so that we can show trends over time.

**Questions you ask Kindred**

-   Your chat with Kindred: each question as you typed it, Kindred's answer and the reports it cited, and the AI's working copy of that turn (the question with names replaced by relation labels, and what it looked up in your records). We keep it so a follow-up question ("and her sugar?") has context. Our logs record only that a question was asked, how long the answer took, and which reports it cited, never the question or the answer.
-   If you tap **Report this answer** under an AI answer or a report's reading, we keep your report: the reason you chose, your note if you wrote one, and — for an Ask answer or a visit-brief summary — the text of that answer. For a report's reading we keep only which report it was, because the reading is already stored.

**Phone notifications** (Kindred Android app)

-   A push token for each phone where you are signed in to the Kindred app: a random code from Google's Firebase Cloud Messaging that lets us send a notification to that phone. We keep which account it belongs to, the platform (Android) and when it was last used.
-   We do **not** store the notifications. Each one is made when your phone asks for it, in your language, after we check that you still look after that person. It shows the person's first name and what was added, for example "Papa · BP 150/92 · added by Riya", or a report's title and the names of results that need attention. A reminder shows the person's first name and the check, for example "Papa · time for Morning BP"; every caregiver of that person gets it. A reading within its limits comes without sound.
-   To send each reminder once, we note which check was reminded on which day (ids and the date only) and delete that note after 7 days.
-   On a locked phone the notification hides its text, unless your phone is set to show all notification content on the lock screen. You can turn Kindred's notifications off in your phone's settings at any time.

**Operational logs**

-   Server logs that record requests to our backend (timestamp, request path, response code, IP address). These exist for security, debugging, and abuse prevention.
-   Sign-in events (timestamp, device type, IP address).
-   App error reports: when something fails in the Kindred app (sign-in, a request to our server, an upload, or the app closing because of an error), the app sends us what failed. A report holds the kind of error, its code and a short error message, the screen or the server address it happened on (with the numbers that identify a person or a report removed), the time, the app version, your phone's make and model, and its Android version. If you are signed in, we also keep which account it came from. A report never holds health data, file names or sign-in tokens; before we store it, we remove anything in the message that looks like an email address, a phone number or a token.

**What we do not collect today**

-   Location, contacts, photos beyond what you upload, microphone audio, or any data from other apps.
-   We do not run third-party advertising or analytics SDKs in the app.

## 3. Why we collect it {#purposes}

| What we collect | Why |
| --- | --- |
| Account data | To let you sign in, recognise you across devices, and contact you if needed. |
| Health-record data | To store records on your behalf and show them back to you and the caregivers you authorise. |
| Vital readings | To track day-to-day measurements, show trends to caregivers, and alert co-caregivers when a reading crosses a threshold the family has set. |
| Caregiver-relationship data | To deliver invites, grant access to the records and vitals you’ve chosen to share, and keep an honest audit trail of who agreed to what and when. |
| WhatsApp data | To receive reports you send on WhatsApp, file them under the right family member, and reply to you. |
| AI readings | To explain a report in plain words, flag results that need attention, and show trends across reports. |
| Questions you ask, visit briefs | To answer questions about your family's records and prepare a one-page brief for a doctor visit. |
| Reports of AI answers | To check AI answers that people flag as wrong, harmful or offensive, and to make Kindred's AI answers better. |
| Phone notification tokens | To tell you on your phone when someone else adds a report or a reading for a person you look after, and when a home check for them is due. |
| Operational logs | To keep the service secure, diagnose problems, and detect abuse. |
| App error reports | To find and fix what goes wrong in the Kindred app, for example why a sign-in failed on a certain phone. |

We do not use any of this data for advertising, marketing profiling, or sale to third parties.

## 4. Legal basis for processing {#legal-basis}

We process your personal data on the basis of your **consent** (DPDPA Section 6). When you sign in for the first time, the line right under the **Continue with Google** button says that continuing means you agree to this notice and that AI explains your reports, with a link to this notice; tapping the button is your agreement. Nothing is pre-ticked, and Kindred stores or files nothing for you before that. AI reading is on for a new account, and you can turn it off at any time in Profile (see [AI reading of reports](#ai)). Whenever what you agree to changes, Kindred shows you once that the notice was updated, and you tap **Agree and continue**; your AI choice stays as it was. Records you add for the people you care for are added by you, as their caregiver, on their behalf. Operational logs and app error reports are processed on the basis of legitimate uses (security and service operation) under DPDPA Section 7.

You can withdraw consent at any time — see [Your rights](#your-rights). Withdrawal applies going forward and does not affect processing that has already happened.

## 5. Where your data is stored {#storage-location}

-   **Region:** Your data is stored in India. Three kinds of processing can happen outside India, each described in [Who we share it with](#sharing): AI reading of reports (the AI provider's servers), WhatsApp messages (Meta's servers), and test-name matching (TypeSafe's servers).
-   **Backend service and database:** Hosted on Oracle Cloud Infrastructure, Mumbai region (`ap-mumbai-1`). The database is a SQLite file on an encrypted block volume (Oracle encrypts all block volumes by default), and the file itself is encrypted by Kindred with SQLCipher (AES-256), so a copy of the file cannot be read without its key.
-   **Uploaded record files:** During the testing stage, stored on the Kindred server's encrypted disk in Oracle Cloud Mumbai, and served only through short-lived signed links. Before opening to a wider audience, files move to a private Amazon S3 bucket in Mumbai (`ap-south-1`) with customer-managed keys.
-   **Encryption at rest — database:** two layers since 30 September 2026: Oracle volume encryption, and SQLCipher (AES-256) encryption of the database file by the application. The key is stored apart from the file.
-   **Encryption in transit:** All app-to-server and server-to-storage traffic uses TLS.
-   **Backups:** Database backups are encrypted with a separate backup key that the running application never holds, so a backup cannot be decrypted with the database key alone. During the testing stage they are kept on the same server for up to 14 days; before Kindred opens to a wider audience, they will also be copied off the server, encrypted.

## 6. How long we keep your data {#retention}

| Type of data | Retention |
| --- | --- |
| Account data (name, email, profile picture, Google ID) | Until you delete your account. Your account is locked at once and erased 24 hours later (you can undo until then). What remains is an anonymous placeholder with no name, email, Google ID or picture, so that reports you added for people others look after stay with those people. |
| Patient records you uploaded | Until you delete the record, or delete your account. A deleted record is hidden at once and erased 24 hours later, file first (you or another caregiver of that person can undo until then). Deleting a person hides and then erases all of their records the same way. |
| Vital readings you logged | Until the person they belong to is deleted, or you delete your account (if no one else looks after that person). Erased 24 hours after the request, like records. |
| Caregiver invites and acceptance records | Until you remove the caregiver, or delete your account. Consent attestations linked to these events are retained for 3 years after the share ends, as a privacy / DPDPA audit trail. |
| AI readings and the test results taken from them | As long as the record they came from. Deleting the record deletes them. |
| WhatsApp link (your number ↔ your account) | Until you send **STOP**, or until 90 days pass with no message from you, or you delete your account. |
| WhatsApp message log (type, time, outcome; no text) | 30 days, then deleted. |
| A WhatsApp file waiting for you to say whose report it is | 24 hours, then deleted if you don't choose. |
| One-time join links | Until used, or 7 days, whichever comes first. The record of who created and used it stays with the caregiver audit trail. |
| Your chat with Kindred (questions, answers, the AI's working copy) | 30 days from each message, then deleted. Deleted at once when you tap **Clear chat** or delete your account, and when a person or report it used is deleted. Hidden while you can no longer see a person it used, or they turned AI reading off. |
| AI answers you report (your reason, your note, and the answer's text) | 90 days, then deleted. Also deleted with the report it is about, or with your account. |
| Your consent choices (which version of this notice, AI reading yes or no, when) | While your account exists, and 3 years after it is erased, as the record of your consent. They hold no name or email address. |
| Push token for your phone | Until you sign out on that phone, Google tells us the token no longer works (for example, the app was removed), or you delete your account. |
| Server logs (incl. IP address) | 90 days, then deleted. Retained for security and debugging. |
| App error reports | 30 days, then deleted. Also deleted with your account. |
| Sign-in audit logs | 90 days, then deleted. |
| Operational backups | Up to 30 days on a rolling window. Deletion requests propagate to backups within 35 days of the request. |

If a deletion request reaches us via email, we treat it as a formal **right-to-erasure** request under DPDPA and the timelines above apply.

## 7. Who we share it with {#sharing}

We share your data with a small number of service providers (called **Data Processors** under DPDPA), strictly to operate the service:

-   **Google LLC** — for Google Sign-In, when you choose to sign in with Google. Google’s own privacy notice applies to that step.
-   **Google LLC (Google Play)** — when someone opens a join link on an Android phone without the Kindred app, the link can send them to Google Play to install it. The link's one-time code goes to Google Play with it, and Google Play gives the code only to the Kindred app after installation, so the app opens the invite. Google sees the code, not who it is for. The code still works only once, for 7 days.
-   **Google LLC (Firebase Cloud Messaging)** — to deliver notifications to the Kindred app on your phone. Google receives your phone's push token and a message that holds only the kind of item and numbers that identify it (for example "reading 123, person 45"). Never names, values or report content: your phone gets those from Kindred directly.
-   **Oracle Cloud Infrastructure (India)** — for hosting the backend service and the database, in their Mumbai region.
-   **Amazon Web Services India** — for hosting uploaded record files in their Mumbai region, once files move to S3 (see [Where your data is stored](#storage-location)).
-   **OpenRouter, Inc. and the AI model provider it routes to** — to read reports (see [AI reading of reports](#ai)). They receive report text with names, phone numbers, email addresses and ID numbers removed, plus the patient's age and sex. For photos and scanned PDFs, they receive the image itself, which can show personal details printed on it. Our production setting sends reports only to providers that promise not to keep or train on them. The same providers answer questions you ask Kindred and write visit-brief summaries (see [Asking Kindred and visit briefs](#ask)).
-   **TypeSafe (Jev)** — to match printed test names (e.g. "S. Creat") to standard tests. It receives test names and units only. During the testing stage, it also receives the first lines of a report sent on WhatsApp (which include the printed patient name, age and sex) to work out which family member the report is for.
-   **Meta Platforms (WhatsApp Business Platform)** — if you use Kindred on WhatsApp. Messages and files you send to Kindred, and our replies, pass through Meta's servers, where WhatsApp's end-to-end encryption ends. Meta's own terms and privacy policy apply to WhatsApp.

We also share data with **other caregivers you choose to invite**:

-   When you invite another person (typically a family member) to view a patient’s records, that person becomes a co-caregiver of that patient and can view all of the records you’ve uploaded for that patient. They can also upload new records and log vital readings for the same patient. You retain access; the invite adds them, it does not transfer ownership.
-   A share is identified by the recipient’s email address. The recipient must sign in to Kindred with that exact email (via Google Sign-In) before access takes effect. If the share is not claimed within 30 days, it expires automatically.
-   **You can remove an invited caregiver at any time**, including a caregiver who originally invited others. If you are the patient yourself (i.e., you have signed up and claimed your own record), you can revoke any caregiver — including the person who originally added you — without their cooperation. This is a deliberate property: control over who can see your records belongs to you.
-   Removing a caregiver ends their access to that patient’s records and vitals going forward. Records and readings they entered while they had access remain in the patient’s record set.
-   **Invites and shares on WhatsApp.** You can also invite someone, or share a report with them, through a message that opens in **your own** WhatsApp. Kindred never messages people who have not written to it first. The message holds a one-time link that works for 7 days. An invite message also names the email address you invited, so the person signs in with the right Google account. The person joins only after signing in with Google and choosing their relation to the patient. If they sign in with a different account, Kindred shows them the invited address hidden in part (for example "v••••@gmail.com") and asks which account to use. The shared message holds the report's title, date, a summary without numbers, and the names of flagged results — never test values.
-   Sharing is per-patient. Inviting someone to see records for one parent does not give them access to records for any other patient.

We do **not** share your data with:

-   Advertisers, ad networks, or marketing analytics services.
-   Insurers, employers, hospitals, doctors, or any other third party — unless you explicitly direct us to (e.g., in future, by sharing a record with someone).
-   Government or law enforcement, unless required by a lawful order. If we receive such an order and are not legally barred from doing so, we will tell the affected user.

We do **not** sell your data. There is no business model that involves selling data, and we have no intention of building one.

## 8. Your rights {#your-rights}

Under DPDPA, you have the following rights as a Data Principal. They apply to you whenever Kindred is processing your personal data.

-   **Right to access** — see what personal data we hold about you and a summary of how it’s being processed.
-   **Right to correction** — fix data that is wrong, incomplete, or out of date.
-   **Right to erasure** — ask us to delete your data. We comply within the timelines in [Retention](#retention), unless we are legally required to keep it.
-   **Right to grievance redressal** — raise a complaint about how we handle your data, and have it addressed within 30 days.
-   **Right to nominate** — name another person who can exercise your rights on your behalf if you die or become incapacitated. (We will support this through the in-app caregiver flow.)
-   **Right to withdraw consent** — at any time, for any processing based on consent. Withdrawal applies going forward.

For data **about a patient you care for** (e.g., your aging parent), the patient is the Data Principal. If the patient is able to use Kindred themselves, they can sign up and claim their record — at which point they can exercise these rights directly. Until then, you exercise these rights as their lawful caregiver.

## 9. How to use these rights {#exercise-rights}

Three ways:

-   **In the app** — for the most common actions (delete a record, delete a person, delete your account, remove a caregiver), use the in-app option. It is faster and produces the same result as a written request. A deletion takes effect at once and becomes permanent after 24 hours; until then it can be undone.
-   **On the web** — to delete your account without installing the app (for example, from a borrowed phone, or after uninstalling), sign in to the Kindred web app and choose **Profile → Delete my account**. This is the same end result as in the app.
-   **By email** — write to **`ajaygaur319@gmail.com`** with a short description of the request. Please mention the email address of your Kindred account so we can verify your identity.

We respond to all requests within 30 days. Most are completed within 7 days.

We will not charge a fee for these requests, unless they are manifestly unfounded or excessive (e.g., the same request repeated many times in a short period) — in which case DPDPA permits a reasonable fee or a refusal.

## 10. Data about children {#childrens-data}

DPDPA defines a child as anyone under 18 (Section 9).

-   If the patient you are adding is a minor, you must be the **parent or legal guardian** of that child, or have explicit authorisation from the parent or legal guardian.
-   We do not process children’s personal data for tracking, behavioural monitoring, or targeted advertising — DPDPA Section 9 prohibits these and we have no use for them anyway.
-   When the child reaches 18, they can sign up and claim their record. From that point on, the rights in [Your rights](#your-rights) belong to them, and they decide who continues to have caregiver access.

## 11. Grievance redressal {#grievance}

If you have a complaint about how we are handling your personal data, write to:

> **Email:** `ajaygaur319@gmail.com` **For the attention of:** Grievance Officer, Kindred **Response time:** Acknowledgement within 7 working days; resolution within 30 days.

If you are not satisfied with our response, you can complain to the **Data Protection Board of India** under DPDPA Section 13. The Board’s contact details and complaint process will be published on the Government of India’s official channels once the Board is fully constituted.

## 12. AI reading of reports {#ai}

When a report is uploaded (on the web or on WhatsApp), Kindred asks an AI model to read it and explain it.

-   **What the AI receives.** For a digital PDF: the report's text, after our own code (not an AI) removes the names of the patient and their caregivers, phone numbers, email addresses, Aadhaar and PAN numbers, and labelled IDs. If a name is still found after that step, the report is not sent at all. For a photo or a scanned PDF: the image itself, which can show personal details printed on it. With either, the patient's age and sex, so that ranges can be read correctly. Never the patient's name, your email, or your account details.
-   **Where it runs.** On the servers of the AI provider that OpenRouter routes to, which may be outside India.
-   **What it returns.** A short summary, the test results as printed, flags that need attention, and questions to ask the doctor. We check every value against the report text before we store it.
-   **What it does not do.** It does not diagnose, and it does not advise starting or stopping any medicine. Check anything worrying with a doctor.
-   **Choice.** AI reading is on for a new account (the sign-in screen says so), and you can turn it off at any time in Profile. If you made a choice before 5 October 2026, it stays as you set it. While it is off, reports you add are stored and shown but not read, and nothing goes to the AI. Turning it off stops new readings; readings already made stay with their reports until you delete them.

### Asking Kindred and visit briefs {#ask}

-   **Asking.** In the **Ask Kindred** chat (the green chat button in the app, the Ask page on the web) you can ask about any report, test or home log of the people you care for. An AI model answers by looking up your family's records through Kindred, one piece at a time: the list of people (by relation, age and sex), test results and trends, report summaries and findings, prescriptions and home readings. It can see only the people you are a caregiver of.
-   **What the AI receives.** Your question, with every name we hold for your family replaced by a relation label (for example "[Mother]") and phone numbers, email addresses and IDs removed. If a name is still found after that step, the question is not sent. The records it looks up carry no names, file names, doctor names or your notes.
-   **What we keep.** The chat, for 30 days, on our server (encrypted, like your records), so that Kindred remembers the conversation: a follow-up is sent to the AI together with your earlier questions and its earlier answers, still without names. Nothing is saved on your phone or in your browser. **Clear chat** (⋮ in the app, the button on the web) deletes it at once. An answer you report with **Report this answer** is kept for 90 days to check it. See [How long we keep your data](#retention).
-   **Visit brief.** The brief's numbers come straight from your records and home logs, not from the AI. Only its short summary and the suggested questions for the doctor are written by the AI, in the same way as an answer on the Ask page.
-   **Where it runs, and choice.** The same as report reading above: an AI provider that may be outside India, and only if you turned AI reading on. With it off, the Ask page and the brief's summary say so instead of asking the AI; the rest of the brief still shows.

## 13. Using Kindred on WhatsApp {#whatsapp}

-   **Joining.** You message the Kindred WhatsApp number. We reply with a one-time link. You sign in with Google, then tap **Yes, it's me** in WhatsApp. Your number is linked only after both steps. Nothing you send before that is stored.
-   **What our replies contain.** The report's title, date and lab, a short summary with all numbers removed, the names of flagged results, and a link. Test values open only after you sign in to Kindred, so they stay out of your chat history.
-   **Consent first.** Kindred files a report you send on WhatsApp only after you have agreed to this notice; until then it replies with a link to agree first. With AI reading off, a report you send is filed but not read, and the reply says so.
-   **Stopping.** Send **STOP** at any time to unlink your number. Records you already sent stay in your account until you delete them.
-   **Changed number.** If WhatsApp tells us your number changed, or your number sends us nothing for 90 days, we unlink it. You join again from your new number.
-   **Language.** Kindred's messages use the language you choose. Test names and values stay in English.
-   **Cost.** Kindred does not send you promotional messages on WhatsApp.

## 14. Future changes {#changes}

When a new feature processes your data in a way this notice does not describe, we will:

1.  Update this notice to describe exactly what the feature does, what data it processes, where it runs, and what it returns.
2.  Ask you to consent again, specifically for that processing. You can refuse, and the feature will stay off for your account.

For other changes (e.g., adding a new feature, switching a service provider), we will update this notice and post the change date at the top. Material changes will be communicated by email and through an in-app prompt.

## 15. How to reach us {#contact}

For anything in this notice — questions, rights requests, grievances, corrections — write to:

**`ajaygaur319@gmail.com`**

For everything else (product feedback, bug reports, general questions), use the in-app feedback option once it ships, or the same email above.

* * *

## Appendix — for the developer wiring this in Phase 0.5

_This appendix is **not** part of the user-facing notice. Strip it from the in-app screen._

### Stable section anchors

These anchors are part of the contract. Don’t rename them — Phase 0.5 in-app deep links and any future settings cards will link to them.

-   `#who-we-are`
-   `#data-collected`
-   `#purposes`
-   `#legal-basis`
-   `#storage-location`
-   `#retention`
-   `#sharing`
-   `#your-rights`
-   `#exercise-rights`
-   `#childrens-data`
-   `#grievance`
-   `#ai`
-   `#ask`
-   `#whatsapp`
-   `#changes`
-   `#contact`

### Things that must be true before this notice is shown to any external user

The notice makes promises Kindred has to actually keep. Block Internal Testing publication (and all later tracks) until each of these is true:

1.  **`ajaygaur319@gmail.com` is a monitored inbox.** A 7-day acknowledgement and 30-day resolution SLA is stated; the inbox must reach Ajay reliably and have a triage process. (Tracker: Phase 0.5 r94 grievance contact row.) Phase 0.5 contact is Ajay’s personal Gmail; will swap to `privacy@kindred.in` when `kindred.in` is registered (R238).
2.  **Account deletion actually erases data, including S3 record bytes and all object versions.** _Done for files on the Kindred server (testing stage), 2026-09-30:_ `DELETE /auth/me` erases files and data 24 hours after the request. Still open: all object versions once files move to a versioned S3 bucket. (Tracker: Phase 0.5 r14 DPDPA hard-delete + r95 R12 S3 cascade rows.)
3.  **Per-record deletion erases all S3 versions, not just adds a delete-marker.** (Tracker: Phase 1.5 record-deletion + delete-version row.)
4.  **The in-app privacy notice screen is wired** — first-launch overlay + permanent link from Profile screen. (Tracker: Phase 0.5 r93 in-app privacy screen row.)
5.  **The web-based account deletion mechanism is live** — _done 2026-09-30:_ Profile → Delete my account on the web app (§9). Required by Google Play Policy for any app with account creation, and required for the §9 promise to be honest. (Tracker: Phase 0.5 R236 web-based deletion row.)
6.  **Consent is captured affirmatively** — a tap on a clearly-labelled control with the agreement stated next to it, not a pre-ticked checkbox or implicit consent from continuing to use the app. (DPDPA Section 6.) _Done 2026-09-30:_ consent screen in the app and web app (unticked "I agree"), stored per version; the API refuses everything else until then. _Changed 2026-10-05 (v0.13):_ the agreement line sits under every **Continue with Google** button and the tap is recorded as consent (version, AI choice, source); updates use a one-tap **Agree and continue** screen.
7.  **Patient-controlled creator-revocation is implemented** for Scenario A (when a patient self-claims their record). The §7 promise that “if you are the patient yourself, you can revoke any caregiver — including the person who originally added you — without their cooperation” is currently true for non-creator caregivers but needs to extend to the creator when Scenario A ships. (Tracker: Phase 1 R234 patient-controlled creator-revocation row.)
8.  **Consent for AI reading and for WhatsApp is captured** before any person outside the testing group uses Kindred (§12). Until then, AI reading is on for all testers. (Added in v0.4.) _Done 2026-09-30:_ AI reading is a separate unticked choice, enforced by the server for report reading, Ask and briefs; WhatsApp files nothing before consent.
9.  **Photos and scans are redacted before AI reading**, or the notice keeps saying they are sent as images (§12). OCR with in-code redaction is planned. (Added in v0.4.)

If any of these is not yet true when Internal Testing or any wider track is being considered, do **not** publish. Either complete the row, or revert the notice to “internal use only” and gate publication behind the dependency.

### Decisions deferred to a later notice version

These are honest gaps that will be filled when the corresponding feature lands. Don’t try to address them in this version — they don’t exist yet.

-   **AI processing description** — added in v0.4 (§12). Fresh consent is gating item 8.
-   **Doctor-side data flow** — added if/when a doctor surface ships, with the receiving-doctor’s data fiduciary status clarified.
-   **Cross-border transfers** — v0.4 names the three kinds of processing outside India (§5). A formal transfer section is needed before the notice reaches users outside the testing group.
-   **Significant Data Fiduciary (SDF) obligations** — DPDPA may classify Kindred as an SDF based on volume / sensitivity once external usage scales. If/when designated, add: DPO contact, periodic DPIA cadence, independent audit cadence.

### Things this draft deliberately does not promise

To keep the notice honest and avoid commitments Kindred can’t yet keep:

-   We do **not** promise a hardware security module, dedicated VPC, or single-tenant infrastructure. We use Oracle Cloud (backend) and AWS S3 (files) — both shared-tenant managed services in Mumbai.
-   We do **not** promise zero-knowledge encryption. Kindred’s backend can read uploaded files (this is required for any future AI feature; honesty is better than overclaiming).
-   We do **not** claim to be HIPAA-compliant. HIPAA is a US statute and does not apply. Indian frameworks (DPDPA, and where applicable Telemedicine Practice Guidelines 2020) are what we operate under.
-   We do **not** publish a specific incident-notification SLA in this draft. DPDPA Section 8(6) and Cert-In’s 6-hour reporting will be addressed in the incident-response runbook (Phase 2 tracker row); the in-app notice will reference the runbook once it exists.

### When to bump the version

-   v0.1 → v0.2 _(2026-05-08, applied)_: added Vitals data category; switched backend host narrative from “AWS managed” to Oracle Cloud + AWS S3 split; added SQLCipher encryption-at-rest commitment per ADR 027; added web-based account deletion mechanism per Google Play Policy (R236); clarified patient-controlled caregiver revocation (R227, with R234 for the creator-revocation extension); added gating-list items for r93, R236, R234.
-   v0.2 → v0.3: any further change to data categories, purposes, retention, or sharing before publication. Likely triggers: account-deletion stack (r14+r95+R236) lands, in-app screen (r93) wires up, push-notification content (R237 + r194 + r179-181) ships.
-   v0.3 → v0.4 _(2026-09-29, applied)_: AI reading of reports (§12), WhatsApp (§13), new processors (OpenRouter and model providers, TypeSafe, Meta), processing outside India, testing-stage file storage on the Oracle server, retention for readings and WhatsApp data. Markdown source moved into this repo.
-   v0.4 → v0.5 _(2026-09-30, applied)_: Asking Kindred and visit briefs (§12, #ask), questions not stored, language preference, one-time join links and WhatsApp invites/shares sent from the user's own WhatsApp (§2, §6, §7), language of WhatsApp messages (§13).
-   v0.5 → v0.6 _(2026-09-30, applied)_: deletion now hides at once, can be undone for 24 hours, then erases for good (In short, §6, §9); account deletion leaves an anonymous placeholder; web deletion is Profile → Delete my account instead of a planned URL.
-   v0.6 → v0.7 _(2026-09-30, applied)_: "Report this answer" on AI output (Google Play AI-generated content policy): what a report keeps and for how long (In short, §2, §3, §6, #ask).
-   v0.7 → v0.8 _(2026-09-30, applied)_: consent screen with an explicit "I agree" and a separate AI choice that is off unless ticked (§2, §4, §6, §12, #ask, §13); consent records and their retention; launch gates 6 and 8 done.
-   v0.8 → v0.9 _(2026-09-30, applied)_: database encryption (SQLCipher, AES-256) is live; backups use a separate key; testing-stage backups stay on the server for up to 14 days (§5).
-   v0.9 → v0.10 _(2026-10-01, applied)_: phone notifications (In short, §2, §3, §6, §7): push tokens, Google Firebase Cloud Messaging as a processor that sees ids only, what a notification shows, lock-screen behaviour, retention.
-   v0.10 → v0.11 _(2026-10-05, applied)_: app error reports (§2 Operational logs, §3, §4, §6): what a report holds, what it never holds, scrubbing, 30-day retention, legitimate-use basis.
-   v0.11 → v0.12 _(2026-10-05, applied)_: invites name the invited email address, and a masked form is shown to someone who opens the link with another account (§7); a join link's one-time code passes through Google Play when the app is installed from it (§7).
-   v0.12 → v0.13 _(2026-10-05, applied)_: signing in with Google is the agreement, stated under the button (§4, launch gate 6); AI reading is on for new accounts and can be turned off in Profile, earlier choices stay (§12); updates are agreed with one tap.
-   v0.13 → v0.14 _(2026-10-05, applied)_: the Ask Kindred chat is kept 30 days so follow-up questions have context; Clear chat, account deletion and deleting a person or report delete it (In short, §2, §6, #ask).
-   v0.14, edit _(2026-10-05)_: phone notifications also remind every caregiver when a home check is due; readings within limits come without sound; the 7-day reminder note (In short, §2, §3). No new data, purpose of a new kind or processor, so nobody is asked to agree again.
-   v0.14 → v1.0: when this notice ships in-app and on the public web to external users for the first time, on the day of the first AAB upload to Internal Testing.
-   v1.0 → v1.1, v1.2 …: any further changes; communicated via email + in-app prompt.
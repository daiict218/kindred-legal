# Kindred — Privacy Notice

**Status:** DRAFT v0.3 · _Source-of-truth for the in-app notice and the public-hosted policy. Becomes effective when Kindred opens to Internal Testing on Google Play._ **Last updated:** 2026-05-11 **Effective:** When the first AAB lands on Google Play Internal Testing track. Until then, this is a draft.

* * *

## In short — the 30-second version

-   **Kindred is a personal health-records vault for caregivers.** You upload records (lab reports, prescriptions, doctor notes, etc.) for the people you care for, and log day-to-day vital readings (BP, blood sugar) for them.
-   **Your data lives in India** (Mumbai). The backend runs on Oracle Cloud; uploaded record files are stored in Amazon S3. Both are in Mumbai data centres.
-   **We don’t sell your data, ever.** We don’t share it with advertisers, marketers, or insurers.
-   **You can delete your account and your records at any time.** When you do, the underlying files are erased — not soft-deleted.
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

**Operational logs**

-   Server logs that record requests to our backend (timestamp, request path, response code, IP address). These exist for security, debugging, and abuse prevention.
-   Sign-in events (timestamp, device type, IP address).

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
| Operational logs | To keep the service secure, diagnose problems, and detect abuse. |

We do not use any of this data for advertising, marketing profiling, or sale to third parties.

## 4. Legal basis for processing {#legal-basis}

We process your personal data on the basis of your **consent**, given when you sign up and when you upload data on behalf of a patient (DPDPA Section 6). Operational logs are processed on the basis of legitimate uses (security and service operation) under DPDPA Section 7.

You can withdraw consent at any time — see [Your rights](#your-rights). Withdrawal applies going forward and does not affect processing that has already happened.

## 5. Where your data is stored {#storage-location}

-   **Region:** All your data is processed and stored in India. Your data does not leave India in normal operation.
-   **Backend service and database:** Hosted on Oracle Cloud Infrastructure, Mumbai region (`ap-mumbai-1`). The database is a SQLite file on an encrypted block volume — Oracle encrypts all block volumes by default, and we plan to add a second layer of application-level encryption (SQLCipher, AES-256) before opening to caregivers outside the founding family.
-   **Uploaded record files:** Stored in a private Amazon S3 bucket in Mumbai (`ap-south-1`). The bucket is not public; only the Kindred backend can authorise access.
-   **Encryption at rest — files:** S3 objects are encrypted using AWS-managed keys (SSE-S3) today. We plan to upgrade to customer-managed keys (SSE-KMS) before opening to a wider audience.
-   **Encryption at rest — database:** Oracle volume-encryption today; SQLCipher application-level encryption added before non-founding caregivers are invited.
-   **Encryption in transit:** All app-to-server and server-to-storage traffic uses TLS.
-   **Backups:** Encrypted backups of the database are kept on a separate location for up to 30 days; we deliberately keep the backup secret separately from the database secret so a single backup capture cannot be decrypted on its own.

## 6. How long we keep your data {#retention}

| Type of data | Retention |
| --- | --- |
| Account data (name, email, profile picture, Google ID) | Until you delete your account. After deletion, fully removed within 30 days. |
| Patient records you uploaded | Until you delete the record, or delete your account. After deletion, fully removed within 30 days, including all stored versions of the file. |
| Vital readings you logged | Until the patient or you delete the reading, or you delete your account. After deletion, fully removed within 30 days. |
| Caregiver invites and acceptance records | Until you remove the caregiver, or delete your account. Consent attestations linked to these events are retained for 3 years after the share ends, as a privacy / DPDPA audit trail. |
| Server logs (incl. IP address) | 90 days, then deleted. Retained for security and debugging. |
| Sign-in audit logs | 90 days, then deleted. |
| Operational backups | Up to 30 days on a rolling window. Deletion requests propagate to backups within 35 days of the request. |

If a deletion request reaches us via email, we treat it as a formal **right-to-erasure** request under DPDPA and the timelines above apply.

## 7. Who we share it with {#sharing}

We share your data with a small number of service providers (called **Data Processors** under DPDPA), strictly to operate the service:

-   **Google LLC** — for Google Sign-In, when you choose to sign in with Google. Google’s own privacy notice applies to that step.
-   **Oracle Cloud Infrastructure (India)** — for hosting the backend service and the database, in their Mumbai region.
-   **Amazon Web Services India** — for hosting uploaded record files in their Mumbai region.

We also share data with **other caregivers you choose to invite**:

-   When you invite another person (typically a family member) to view a patient’s records, that person becomes a co-caregiver of that patient and can view all of the records you’ve uploaded for that patient. They can also upload new records and log vital readings for the same patient. You retain access; the invite adds them, it does not transfer ownership.
-   A share is identified by the recipient’s email address. The recipient must sign in to Kindred with that exact email (via Google Sign-In) before access takes effect. If the share is not claimed within 30 days, it expires automatically.
-   **You can remove an invited caregiver at any time**, including a caregiver who originally invited others. If you are the patient yourself (i.e., you have signed up and claimed your own record), you can revoke any caregiver — including the person who originally added you — without their cooperation. This is a deliberate property: control over who can see your records belongs to you.
-   Removing a caregiver ends their access to that patient’s records and vitals going forward. Records and readings they entered while they had access remain in the patient’s record set.
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

-   **In the app** — for the most common actions (delete a record, delete your account, remove a caregiver), use the in-app option. It is faster and produces the same result as a written request.
-   **On the web** — to delete your account without installing the app (for example, from a borrowed phone, or after uninstalling), visit **`https://kindred.app/delete-account`** and complete the flow. This is the same end result as the in-app deletion.
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

## 12. Future changes — including AI features {#changes}

The current Kindred app stores and shows your records. It does **not** use artificial intelligence to read, summarise, or analyse them.

When AI features launch — for example, generating a pre-visit brief from your records — the processing involved is materially different from what’s in this notice. Before any such feature processes your data, we will:

1.  Update this notice to describe exactly what the AI feature does, what data it processes, where it runs, and what it returns.
2.  Ask you to consent again, specifically for that processing. You can refuse, and the AI features will simply remain off for your account.

For other changes (e.g., adding a new feature, switching a service provider), we will update this notice and post the change date at the top. Material changes will be communicated by email and through an in-app prompt.

## 13. How to reach us {#contact}

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
-   `#changes`
-   `#contact`

### Things that must be true before this notice is shown to any external user

The notice makes promises Kindred has to actually keep. Block Internal Testing publication (and all later tracks) until each of these is true:

1.  **`ajaygaur319@gmail.com` is a monitored inbox.** A 7-day acknowledgement and 30-day resolution SLA is stated; the inbox must reach Ajay reliably and have a triage process. (Tracker: Phase 0.5 r94 grievance contact row.) Phase 0.5 contact is Ajay’s personal Gmail; will swap to `privacy@kindred.in` when `kindred.in` is registered (R238).
2.  **Account deletion actually erases data, including S3 record bytes and all object versions.** Today’s `/auth/me DELETE` flow does not do this fully. (Tracker: Phase 0.5 r14 DPDPA hard-delete + r95 R12 S3 cascade rows.)
3.  **Per-record deletion erases all S3 versions, not just adds a delete-marker.** (Tracker: Phase 1.5 record-deletion + delete-version row.)
4.  **The in-app privacy notice screen is wired** — first-launch overlay + permanent link from Profile screen. (Tracker: Phase 0.5 r93 in-app privacy screen row.)
5.  **The web-based account deletion mechanism is live** at the URL named in §9 above (`kindred.app/delete-account` or final domain). Required by Google Play Policy for any app with account creation, and required for the §9 promise to be honest. (Tracker: Phase 0.5 R236 web-based deletion row.)
6.  **Consent is captured affirmatively** — a tap on a clearly-labelled “I agree” control, not a pre-ticked checkbox or implicit consent from continuing to use the app. (DPDPA Section 6.)
7.  **Patient-controlled creator-revocation is implemented** for Scenario A (when a patient self-claims their record). The §7 promise that “if you are the patient yourself, you can revoke any caregiver — including the person who originally added you — without their cooperation” is currently true for non-creator caregivers but needs to extend to the creator when Scenario A ships. (Tracker: Phase 1 R234 patient-controlled creator-revocation row.)

If any of these is not yet true when Internal Testing or any wider track is being considered, do **not** publish. Either complete the row, or revert the notice to “internal use only” and gate publication behind the dependency.

### Decisions deferred to a later notice version

These are honest gaps that will be filled when the corresponding feature lands. Don’t try to address them in this version — they don’t exist yet.

-   **AI processing description** — added when Phase 1 AI features ship, with fresh consent.
-   **Push-notification content** — added when FCM-based push (V1.5 vitals push, share-sent push) ships. Content of pushes will be enumerated explicitly so caregivers know what shows on a lock screen before they install.
-   **Doctor-side data flow** — added if/when a doctor surface ships, with the receiving-doctor’s data fiduciary status clarified.
-   **Cross-border transfers** — added only if Kindred ever stores or processes data outside India. As long as everything stays in Mumbai data centres, this section is unnecessary.
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
-   v0.3 → v1.0: when this notice ships in-app and on the public web to external users for the first time, on the day of the first AAB upload to Internal Testing.
-   v1.0 → v1.1, v1.2 …: any further changes; communicated via email + in-app prompt.
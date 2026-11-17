# Change Your Outlook on IT

Nov 14, 2026 · @Richard Dobson

&#91;image: Dobson Development white paper cover: Change your Outlook on IT\]

The case for a Microsoft-free Australian business, and the Mac, Claude, Google and 1Password workplace that Dobson Development sets up and manages for you. A white paper from Dobson Development Pty Ltd.

## Executive summary

On Friday 13 November 2026, Australian businesses opened their laptops and found Outlook and Teams down. The outage ran for about 24 hours and reached 74 countries. Some small businesses told the ABC they lost up to $30,000 in a single day.

Four months earlier, on 1 July, Microsoft raised the price of the Microsoft 365 plans that small businesses buy most. On the same day, tens of thousands of Australian law firms, accounting practices, conveyancers and real estate agencies came under the Privacy Act for the first time, through the Tranche 2 anti-money laundering reforms. In October, the Australian Signals Directorate published ASD Essentials, the framework that takes over from the Essential Eight.

After a year like that, a business owner is entitled to ask whether Microsoft is still the safe choice.

Our answer is that a better choice now exists, for a similar monthly spend. Dobson Development builds and manages a complete workplace on four names your staff already know: Mac, Claude, Google and 1Password.

- Every Mac arrives configured and ready to work.
- Mail, calendar, files, documents, meetings and chat run on Google Workspace, and we move every mailbox and file across from Microsoft for you.
- Every person gets Claude, the AI assistant that business users keep choosing when they have a choice.
- Every login lives in 1Password, and every account is protected by multi-factor authentication.
- Gmail, Drive, Calendar and Contacts are backed up three times a day.
- We run all of it for A$99 per person per month, plus GST, and we fix what breaks.

This paper sets out the case in three parts. The first part covers Microsoft's recent record on outages, price, staffing and security. The second part explains the two regulatory changes of 2026 and what they cost a small business that tries to meet them on a Microsoft system. The third part walks through our stack, one tool at a time, and explains why we chose each one.

We wrote it for owners, practice managers and directors. You can read all of it without a technical background.

&#91;image: Six figures from this paper: a 24 hour outage, 74 countries, a 16.7% price rise, 22% of federal agencies at Essential Eight Level 2, a $55,400 average cybercrime cost, and A$99 per person per month for managed support\]

&#91;image: Part one: Microsoft's record\]

## The outage of 13 November 2026

We finished this paper on Saturday 14 November 2026. The day before, Australia lost a working day to Microsoft.

The trouble began in the early hours of Friday, Australian eastern time. By about 4:30am, more than 120,000 people worldwide had reported Outlook problems on the outage tracker Downdetector, as [Forbes Australia](https://www.forbes.com.au/news/world-news/microsoft-servers-crash-in-global-outage/) recorded. Microsoft listed Exchange Online, Teams, SharePoint, Copilot and its Defender security console as affected. Planner, To Do and the Intune device management service joined the list later in the day.

Microsoft restarted servers through the morning, and the restarted servers froze again under load. Email in the United States and Europe came back late on Friday night. Asia Pacific, including Australia, was still recovering in the early hours of Saturday. Microsoft said the cause was a technical fault that followed a network capacity upgrade, and it ruled out a cyber attack. The company said it was "deeply sorry" and promised a full report, as the [ABC](https://www.abc.net.au/news/2026-11-14/microsoft-says-sorry-for-global-outage-and-details-recovery/107385540) reported.

The list of Australian organisations caught up in it is long.

- ASIO and the Australian Federal Police confirmed they were affected, according to [AAP](https://aapnews.aap.com.au/news/organisations-scrambling-after-major-microsoft-outage).
- Service NSW, the NSW Parliament, the ACT and Northern Territory governments, local councils and Queensland Health reported disruption.
- Australia Post suspended its phone payment system.
- Suppliers were unable to send delivery notices to supermarket distribution centres.
- TAFE NSW students missed classes that run on Teams.
- Patients lost telehealth appointments, and one Melbourne patient had scans cancelled because the clinic was unable to open her referral.
- An Adelaide business owner told the [ABC](https://www.abc.net.au/news/2026-11-13/microsoft-outlook-outage-australians-hit/107381378) he was locked out of his accounting software because Microsoft Authenticator was down.

His accounting software was working the whole time. Microsoft's sign-in tool had failed and locked him out, and it took an unrelated product down with it.

Ashwin Pal of risk advisory firm RSM Australia told AAP the cost to Australia would run to billions of dollars. The Australian Computer Society called for a national review of sovereign IT risk. Its chief executive, Prins Ralston, observed that a small business may have nowhere to turn when Outlook fails.

The government had been warned. In August, Home Affairs national security head Hamish Hansford said Australia's reliance on Microsoft risked a "disproportionate impact" if the company suffered an outage, as the [ABC](https://www.abc.net.au/news/2026-11-13/microsoft-reliance-national-security-risk/107382100) reported on the day it happened.

A business on the stack described in this paper runs its email on Google Workspace, its logins in 1Password and its AI on Claude. All three run independently of Microsoft, so the fault on Friday would have passed that business by. Each of those services is run by a separate company on separate infrastructure. Every one of those companies has had outages of its own, and each will have more. When one of them has a bad day, the others keep working, and your staff keep working with them.

## Microsoft outages since 2024

Friday's outage has company. Microsoft customers have lived through five large failures since the middle of 2024.

| When | What stopped working | How long | Cause |
| --- | --- | --- | --- |
| 13 November 2026 | Outlook, Teams, SharePoint, Copilot, Defender, Intune | About 24 hours | Servers overwhelmed after a network capacity upgrade |
| 31 August to 3 September 2026 | Outlook, Teams, SharePoint, OneDrive, Purview, Defender | About 77 hours to full recovery | A faulty core authentication configuration |
| 22 January 2026 | Outlook, Defender, Purview, mainly in North America | Almost 10 hours | Infrastructure that stopped processing traffic |
| 29 October 2025 | Azure, Microsoft 365, Xbox | More than 12 hours | An accidental configuration change in Azure Front Door |
| 19 July 2024 | About 8.5 million Windows computers worldwide | Days for many businesses | A faulty update to a third-party security product that crashed Windows |

Sources for the table: [ABC](https://www.abc.net.au/news/2026-11-14/microsoft-says-sorry-for-global-outage-and-details-recovery/107385540), [IsDown](https://isdown.app/status/microsoft365/incidents/646730-users-may-experience-issues-when-utilizing-multiple-microsoft-365-services), [The Register](https://www.theregister.com/2026/01/23/microsoft_365_outage/), [Breached Company](https://breached.company/breaches/microsoft/) and [AAP](https://aapnews.aap.com.au/news/organisations-scrambling-after-major-microsoft-outage).

&#91;image: Bar chart of hours to recover from four major Microsoft cloud outages: 24, 77, 10 and 12 hours\]

The 2024 failure came from another company's security software, and fairness requires us to say so. It still belongs in the table, because the faulty update crashed Windows machines only. Mac computers running the same security product kept working that day.

We draw two lessons from the list.

The causes are ordinary. A configuration change, a routine update and a capacity upgrade took down email for a large share of the world's offices. Microsoft runs a very large and very complicated system, and small mistakes travel a long way inside it.

A great deal fails at once. A Microsoft business buys its email, chat, files, sign-in, device management, security console and AI assistant from one supplier. Last Friday all of them were on the affected list together. Staff lost Outlook, then lost Teams as the fallback, then found that the Authenticator app guarding their other software was down as well.

A business that spreads those jobs across separate suppliers faces smaller failures. Section by section, the rest of this paper shows how to do that with tools your staff will enjoy using.

## Microsoft price increases

On 1 July 2026 Microsoft raised its commercial prices around the world. The two plans that small businesses buy most rose the furthest.

| Plan | Old price | New price from 1 July 2026 | Rise |
| --- | --- | --- | --- |
| Microsoft 365 Business Basic | US$6.00 | US$7.00 | 16.7% |
| Microsoft 365 Business Standard | US$12.50 | US$14.00 | 12% |
| Microsoft 365 Business Premium | US$22.00 | US$22.00 | 0% |

Prices are per user per month in US dollars, as published by [TECHOM Systems](https://techomsystems.com.au/microsoft-365-pricing-update-2026/). In Australian dollars, [Telstra](https://www.telstra.com.au/small-business/online-support/business-software/microsoft-365-price-rise) moved Business Basic from $10.40 to $12.14 and Business Standard from $21.60 to $24.26 per licence per month, including GST.

Microsoft explained the rise by pointing to new AI and security features in the plans. The full AI assistant, Microsoft 365 Copilot, remains a separate purchase. Microsoft lists it at US$30.00 per user per month and its small business edition, Copilot Business, at US$21.00, as [AlphaBOLD's licensing guide](https://www.alphabold.com/guide-to-microsoft-copilot-pricing-licensing/) sets out. A business that wants it pays the higher suite price and the add-on as well.

Australians have seen this approach to pricing before. In October 2025 the ACCC took Microsoft to the Federal Court over its consumer plans. The regulator alleged that Microsoft told about 2.7 million Australian subscribers they had to accept Copilot and a higher price or cancel, while a cheaper Classic plan stayed hidden until the cancellation screen. The Personal plan had risen 45 per cent and the Family plan 29 per cent, as [iTnews](https://www.itnews.com.au/news/accc-accuses-microsoft-of-misleading-27-million-australians-over-m365-fees-621312) reported. Microsoft apologised to customers and offered refunds the following month. That case concerns home subscriptions, and business plans sit outside it. We mention it because it shows how Microsoft has behaved toward customers who had few alternatives.

A Microsoft renewal now tends to grow in three places at once: the base licence, the security add-ons that compliance pushes you toward, and the AI add-on. Our offer puts every line in front of you: A$99 per person per month for managed support, the licences for Google Workspace, 1Password and backup on the same invoice, and Claude billed to you by Anthropic.

## Microsoft layoffs and priorities

Microsoft is shrinking its workforce while it raises your price.

- In 2025 the company cut more than 15,000 jobs in two rounds.
- In July 2026 it cut about 4,800 more, or 2.1 per cent of its staff, according to [TechCrunch](https://www.techcrunch.com/2026/07/06/microsoft-lays-off-nearly-5000-employees-across-xbox-commercial-sales).
- On 26 October 2026 it offered voluntary exit packages to about 60,000 employees in the United States, the United Kingdom, Canada and India. That group is about 27 per cent of its global workforce of 223,000, as the [Associated Press](https://www.wdbj7.com/2026/10/26/microsoft-offers-60000-employees-voluntary-buyouts-ai-spending-accelerates/?outputType=amp) reported.

The company has been open about the reason. It is spending very heavily on data centres for artificial intelligence, and it is finding the money elsewhere in the business.

Microsoft is entitled to run itself as it sees fit, and it says customer support is unchanged. A customer is equally entitled to notice where the attention is going. The money and the engineering talent are flowing toward AI infrastructure and the largest enterprise accounts. A twelve-person accounting practice in Brisbane ranks a long way down that list.

You feel the gap on the day something breaks. A Microsoft customer of that size waits in a global queue, or pays a local IT firm to wait in it for them. A Dobson Development customer logs the problem in our service portal, has a reply by the next morning and has the fix that evening.

## Microsoft's security record

Microsoft makes the software that attackers study most, and its own defences have failed in public.

In 2023 a hacking group linked to China stole a Microsoft signing key and used it to read the email of senior United States officials. The US Cyber Safety Review Board investigated. Its report, published in April 2024, concluded that the intrusion should never have happened and blamed a "cascade of security failures" at Microsoft, as [CyberScoop](https://cyberscoop.com/microsoft-csrb-china-hacking/) reported. The Board also found that Microsoft's security culture was inadequate and needed an overhaul. Microsoft was still unable to say how the key had been stolen.

In January 2024, while that review was under way, Microsoft disclosed that a Russian state group had broken into Microsoft's own corporate email, including the mailboxes of senior leaders.

Microsoft responded with a company-wide program called the Secure Future Initiative, and we expect it has improved things. The deeper problem is one of position. Windows, Office and Active Directory run most of the world's offices, so criminals build their tools for Windows, Office and Active Directory first. Australia's own Essential Eight was written with those networks in mind, as the next part of this paper explains. Several of the eight strategies exist to contain weaknesses that are specific to Windows and Office, with Office macros the best-known example.

A business that leaves Windows and Office leaves the most heavily attacked software in the world. The work of staying secure continues on a Mac, and it starts from a much better place.

&#91;image: Part two: The rules have changed\]

## From the Essential Eight to ASD Essentials

For almost a decade the Essential Eight has been Australia's yardstick for cyber security. Government tenders ask about it. Cyber insurers ask about it. Earlier editions of the Australian Signals Directorate's own maturity model described it as designed to protect Microsoft Windows-based networks connected to the internet.

Meeting it on Microsoft has proved hard, even for organisations with full-time security teams. Federal agencies have been required to reach Maturity Level 2 since July 2022. In its [2025 cyber security posture report](https://www.cyber.gov.au/about-us/view-all-content/reports-and-statistics/the-commonwealth-cyber-security-posture-in-2025), ASD found that 22 per cent of 194 Commonwealth entities had got there. The figure was 15 per cent the year before. If the Commonwealth, with its budgets and its security staff, lands at one in five, a 15-person firm with a part-time IT contractor is unlikely to do better on the same software.

The difficulty comes from the work the framework demands on Windows. A business has to control which programs may run on every PC, lock down Office macros, patch Windows and its applications within days, strip administrator rights from staff, and keep proving all of it. Each item is a project. Each one breaks something the first time it is switched on.

### What changed on 15 October 2026

ASD published its replacement, ASD Essentials, on 15 October 2026. The [enterprise IT chapter](https://www.cyber.gov.au/publication/essentials-for-enterprise-it) is the direct successor to the Essential Eight. Four changes matter to a business owner.

1. The eight strategies have become 58 actions under 28 principles, spread across eight domains, as [Control Stack](https://controlstack.au/frameworks/asd-essentials-enterprise-it/) sets out.
2. The single maturity level has gone. Each action is now rated on how well it works, and the rating has to be backed by evidence such as independent testing.
3. Identity comes first. ASD puts sign-in services and internet-facing systems in the first priority phase, ahead of business systems and staff laptops. Staff are expected to sign in with multi-factor authentication that a fake login page is unable to steal.
4. Accountability sits at the top. The framework asks an organisation to name who at executive and board level answers for cyber security.

The Essential Eight stays on ASD's website during a transition that ASD expects to last one to two years, and federal agencies will be assessed against both frameworks in 2027. Stephanie Crowe, who heads the Australian Cyber Security Centre, told [iTnews](https://www.itnews.com.au/news/asds-essential-eight-replacement-moves-away-from-maturity-ladder-629637) there was "no wasted investment" for organisations already aligned with the old model. ASD's own transition guidance adds a caution: existing maturity ratings stay behind with the old model, and every control has to be checked again against the new framework.

### What it means for a small business

Three consequences follow.

A Microsoft business that paid for an Essential Eight project now faces a second round of assessment and uplift, with a new vocabulary and a heavier demand for proof.

Insurers, larger customers and government buyers will move their questionnaires to the new language over the next two years. A business that can answer in the new terms will be well placed to win that work.

The new framework finally suits a business that runs on Mac. The Essential Eight was written around Windows, so a Mac business had to translate every control. ASD Essentials asks for outcomes: strong sign-in, patched devices, limited privileges, working backups, and evidence. A business on well-managed Mac computers, with multi-factor sign-in on every account, starts from a strong position on each of them.

## The 1 July 2026 privacy change for small businesses

For decades, an Australian business turning over $3 million or less has sat outside the Privacy Act. On 1 July 2026 that shelter ended for a large group of professional firms.

The cause was Tranche 2 of the anti-money laundering and counter-terrorism financing reforms. From that date, lawyers, conveyancers, accountants, real estate agents, buyer's agents, property developers, trust and company service providers and dealers in precious metals and stones became reporting entities when they provide certain services. Published estimates of the number of newly regulated businesses range from about 80,000 to 100,000, and most of them are small.

The Privacy Act treats a reporting entity as a covered organisation whatever its turnover. The [OAIC's guidance](https://www.oaic.gov.au/privacy/privacy-guidance-for-organisations-and-government-agencies/organisations/privacy-guidance-for-reporting-entities-under-the-anti-money-laundering-and-counter-terrorism-financing-act) confirms that the Act now applies to these firms for the personal information they handle for anti-money laundering purposes. [HWL Ebsworth](https://hwlebsworth.com.au/small-businesses-big-change-privacy-obligations-under-tranche-2-of-the-aml-ctf-reforms/) describes thousands of businesses complying with the Privacy Act for the first time.

### What the law now expects

These firms collect exactly the information criminals want: passports, driver licences, dates of birth, addresses, and details of who owns what. The Australian Privacy Principles now require them to do four things with it.

- Take reasonable steps to keep it secure.
- Collect only what the task needs. The OAIC says firms should record the details from an identity document and avoid keeping a full copy where the law allows.
- Destroy or de-identify it when the need has passed.
- Tell the regulator and the affected people when a serious breach occurs.

The penalties are large. A serious interference with privacy can cost a company up to $50 million. A newer middle tier reaches $3.3 million for breaches that fall short of serious, as [Clyde & Co](https://www.clydeco.com/en/insights/2025/10/cyber-and-privacy-law-update-accountability-gets-r) explains. Since 10 June 2025, individuals have also been able to sue directly for a serious invasion of their privacy.

### The cost

The compliance bill arrives in two parts.

The first part is the anti-money laundering program itself: a compliance officer, a risk assessment, customer checks and reports to AUSTRAC. Compliance providers quoting the government's own impact analysis put the average ongoing cost at $23,250 a year per business, with set-up costs of up to $28,650, as [easyAML](https://easyaml.com/tranche-2/) summarises. Your compliance officer and your AML platform carry that work, and it stays outside any IT system.

The second part is the technology that holds the information. One Microsoft-focused IT provider, [CCP](https://www.ccp.com.au/news/tranche-2-aml-ctf-obligations-law-firms/), has costed it for law firms of 20 to 100 seats. Its estimate is $25,000 to $80,000 to implement and $12,000 to $40,000 a year to run. CCP adds that the auditing and access features auditors increasingly ask about sit in Microsoft's enterprise licences, and that stepping up from Business Premium roughly doubles the licence cost per seat.

A scan of a client's passport in a shared OneDrive folder is a common sight in small offices. For a Tranche 2 firm, each such scan is now a regulated record with a penalty attached.

### The wider trend

Businesses outside Tranche 2 should watch closely. Health service providers have always been covered by the Privacy Act. The Australian Government has proposed removing the small business exemption altogether in a later round of reform. The direction is plain enough that a sensible owner will plan for coverage.

The threat is real as well as legal. The OAIC received 667 data breach notifications between January and June 2026, and breaches affecting more than a million people nearly tripled, as [Insurance Business](https://www.insurancebusinessmag.com/au/news/cyber/mega-breaches-nearly-triple-as-health-sector-tops-australias-data-breach-count-594893.aspx) reported. ASD's [Annual Cyber Threat Report 2025-26](https://www.cyber.gov.au/publication/annual-cyber-threat-report-2025-2026) puts the average cost of a cybercrime report at $55,400 for a small business and $141,300 for a medium one.

## Two ways to respond

An owner facing these changes has two paths.

### Path one: build compliance onto Microsoft

You keep Windows, Outlook and Teams, and you add what the frameworks demand.

- You buy higher licences to unlock the audit, retention and access features.
- You pay for a project to configure application control, macro settings, conditional access and device policies.
- You add a password manager, a backup service and an AI assistant your staff will accept.
- You commission an assessment against the Essential Eight, and then another against ASD Essentials.
- You keep paying your IT provider to patch Windows every month and to deal with whatever the patches break.

Every step costs money, and every step is a change to a system that was installed for convenience years ago. The licence price can rise again next July, and the outages will continue.

### Path two: start from a system that is already configured

You replace the system. Every person receives a Mac that sets itself up to our standard build the first time it is switched on, and every protection in the list below is working from the first day.

- The disk is encrypted.
- Staff work as standard users, and administrator rights are held by us.
- The operating system and applications update themselves on a deadline we enforce.
- Every account is protected by multi-factor authentication.
- Every login has its own generated password in 1Password.
- Gmail screens every message for spam, phishing and malware.
- Gmail, Drive, Calendar and Contacts are backed up three times a day.
- A lost Mac is locked and erased remotely.
- A leaver's accounts are closed on their last day.

We build that configuration once. We then give every customer the same build. A law firm with eight staff receives the same hardened system as a clinic with forty. When ASD changes its guidance, we update the build once, and every customer receives the improvement.

Standardising is how we keep the price down. It also explains why the result is more secure than a one-off project. A build that every customer runs in exactly the same form gets tested far more thoroughly than a custom arrangement made for one office.

The timing suits many businesses. Windows 10 reached the end of support in October 2025, and a great many office PCs are due for replacement regardless. The choice in front of those owners is which computer to buy next, and what to run on it.

The rest of this paper describes the system, one supplier at a time.

&#91;image: Part three: The stack\]

## A workplace people want to work in

Most IT proposals sell fear. We would like you to picture something better.

Picture one of your staff at a cafe table on a weekday morning. She has a slim aluminium MacBook open in front of her. She is working with Claude on a proposal for a client, and the document taking shape on her screen is better than anything she had time to produce last year. Every part of that scene is set up, secured and looked after for her.

That scene matters to an employer for three reasons.

Good people choose where they work, and their tools are part of the choice. A business that hands a new hire a sealed MacBook and an AI assistant of their own is showing how it values their time. A business that hands over a five-year-old plastic laptop and a page of passwords is showing something as well.

Clients notice. A firm whose staff turn up with modern equipment, answer quickly and produce polished work looks like a firm that is well run.

The pleasant option is also the careful one. The MacBook Neo is priced for an office budget. Gemini arrives inside the Google subscription. The security controls that regulators expect are switched on from the first day. An owner rarely gets to please the staff, the accountant and the insurer with one decision, and this decision does it.

## The stack at a glance

Every job that Microsoft does in a typical office has a replacement in our stack, and every replacement is a product your staff have probably used already.

&#91;image: Diagram of the stack: your people on a Mac, four names they already know, and Dobson Development looking after the lot\]

| The job | The Microsoft product | What we install |
| --- | --- | --- |
| Computer and operating system | Windows PC | Apple Mac |
| Device set-up, updates and remote lock | Intune | Apple's built-in device management, run by us |
| Sign-in and staff accounts | Entra ID and Authenticator | A Google account with multi-factor authentication |
| Email and calendar | Outlook and Exchange | Gmail and Google Calendar |
| File storage and sharing | OneDrive and SharePoint | Google Drive |
| Documents and spreadsheets | Word and Excel | Google Docs, Sheets and Slides, with Apple's Pages, Numbers and Keynote on every Mac |
| Video meetings | Teams | Google Meet |
| Team chat | Teams | Google Chat |
| Password manager | Sold separately | 1Password |
| AI assistant | Copilot | Claude for deep work, with Gemini inside Gmail and Docs |
| Backup of mail and files | Sold separately | IDrive |
| Help desk | Your IT provider | Dobson Development |

We chose these suppliers by one rule. Each had to be a name a business owner already recognises and a product that staff already like. A move away from Microsoft should feel like an upgrade on the first morning, and familiar, well-loved tools make that happen.

## Mac: the computer on every desk

&#91;image: Apple\]

The Mac is the foundation of the stack. We chose it for five reasons.

### Staff want one

Ask your team which laptop they would choose with their own money. In most offices the answer is a MacBook. A good computer is a daily pleasure for the person using it, and it says something to every new hire about how the business treats its people. Handing a recruit a sealed MacBook on day one costs far less than most perks and is remembered for longer.

### The price has changed

Many owners still assume a Mac costs twice as much as a PC. In March 2026 Apple released the MacBook Neo, the lowest-priced laptop it has ever sold, with an aluminium body and a battery Apple rates at up to 16 hours, as [FutureFive](https://futurefive.com.au/story/macbook-neo-goes-on-sale-as-apple-s-lowest-priced-laptop) reported. [Bing Lee](https://www.binglee.com.au/products/13-macbook-neo-a18-pro-chip-with-6core-cpu-and-5core-gpu-8gb-512gb-ssd-touch-id-blush-mhfj4xa) lists the 512GB model with Touch ID at $1,249. We recommend that model for most staff, because one touch on Touch ID unlocks the Mac and 1Password. People who run heavy spreadsheets or several screens step up to a MacBook Air, a Mac mini or a MacBook Pro.

The saving continues after the purchase. A June 2026 study by Forrester Consulting, commissioned by Apple, modelled a saving of US$760 per Mac over five years compared with a PC, and about 100 minutes a month of time handed back to each employee, as [Forrester's summary](https://tei.forrester.com/go/Apple/TEI/) sets out. Mac computers need fewer support calls, they last longer, and they sell for more at the end of their life.

### Security is built in

Apple designs the chip, the computer and the operating system together, and the protection starts at the factory.

- The disk is encrypted with FileVault, so a stolen laptop reveals nothing.
- Touch ID keeps fingerprints inside a sealed chip called the Secure Enclave.
- Gatekeeper checks that every app comes from a known developer and has been scanned by Apple before it runs.
- XProtect, Apple's built-in malware scanner, updates itself in the background.
- The operating system sits on a sealed, read-only volume that malware is unable to alter.

The Office macro, a favourite tool of criminals for twenty years, has no place to run on a Mac without Microsoft Office.

### A new Mac sets itself up

Apple gives every business a free management platform called Apple Business, which replaced Apple Business Manager in April 2026, as [Apple announced](https://www.apple.com/au/newsroom/2026/03/introducing-apple-business/). Any Mac bought through Apple or an authorised business reseller is registered to your company before it ships. The courier delivers a sealed box to the employee's desk or home. They open the lid, join the Wi-Fi and sign in once. About fifteen minutes later they are looking at a finished desktop with their email, chat, files, passwords and Claude all in place. The whole set-up happens without us touching the machine.

iPhone and iPad devices join the same system in the same way.

### You buy at the public price

You buy or lease your Mac computers through Apple or an authorised business reseller, at the published price, and they ship directly to your staff. We specify the models and prepare the set-up. Leasing is available through those suppliers for businesses that prefer a monthly payment to an upfront purchase.

## How every Mac is managed

A managed Mac is one that somebody looks after from a distance. Apple builds the tools for that job into every Mac, and we use them to set up, update, protect and repair yours from wherever we are. On Windows the same job usually falls to Microsoft Intune.

### Every Mac gets the same standard build

The first time a new Mac connects to the internet, it pulls down our standard build: the security settings, the work apps and the keyboard shortcuts your staff know from Windows. The whole set-up runs by itself. Your staff open the lid and sign in, and we watch it arrive from our side.

A law firm with eight staff gets the same build as a clinic with forty. We improve it once and every customer receives the improvement.

### Updates happen on a deadline

macOS and app updates install in the background through Apple's own update system. Staff see a polite reminder, then a deadline. We see the update status of every Mac and follow up the ones that fall behind.

### Fixes happen in the evening

A request logged today has a reply by tomorrow morning. The fix goes in that evening, after your staff have finished for the day, so repairs happen outside your working hours.

### A lost Mac is locked and erased

If a Mac is lost or stolen, we lock it and erase it remotely. The encrypted disk protects the data in the meantime.

### Starters and leavers are handled for you

When someone joins, their Mac, Google account, 1Password vaults and Claude seat are ready for their first morning. When someone leaves, we close their accounts and lock their Mac.

## Claude: the AI your staff will ask for by name

&#91;image: Claude\]

Every person gets a seat on Claude, the AI assistant made by Anthropic. Your business owns its Claude Team account and pays Anthropic directly, and we set it up for your work. Claude replaces Microsoft Copilot in our stack, and your staff will thank you for it.

### People choose it

Our founder sat in on a sales call recently where a vendor was pitching Copilot. The customer answered, "You can claw my Claude Max subscription from my cold dead hands."

&#91;image: Quote from a customer replying to a Copilot sales pitch: You can claw my Claude Max subscription from my cold dead hands\]

We hear versions of that everywhere, and the market figures agree.

- Menlo Ventures estimates that Anthropic now earns about 40 per cent of all enterprise spending on AI models, ahead of every rival, as [SQ Magazine](https://sqmagazine.co.uk/claude-ai-statistics/) reports.
- Anthropic serves more than 300,000 business customers, including eight of the ten largest companies in the Fortune rankings.
- Its annualised revenue reached about US$65 billion by the end of July 2026, up from US$14 billion in February.
- In a JetBrains survey of more than 15,000 professional developers, about 39 per cent said they used Claude Code at work, as [AI Business Weekly](https://aibusinessweekly.net/p/claude-ai-statistics) summarises.

Growth on that scale comes from customers renewing and telling their colleagues.

### Even Microsoft and Salesforce chose it

In September 2025 Microsoft began offering Claude inside Microsoft 365 Copilot, alongside the OpenAI models it had used until then, as [Microsoft announced](https://www.microsoft.com/microsoft-365/blog/?p=279051). The company that sells Copilot decided its customers should be able to pick Claude.

In August 2026 Salesforce went further. It launched a joint product with Anthropic named Claudeforce. [CNBC](https://www.cnbc.com/2026/08/26/salesforce-anthropic-partnership-claudeforce.html) noted it was the first time Salesforce had attached its famous suffix to another company's product.

### Why we chose Claude over Copilot

Copilot's real strength is its reach. It can search the documents, email and chats a business keeps in Microsoft 365, and an assistant that knows your files is far more useful than one that starts from a blank page.

We give Claude the same reach into your Google workspace. Anthropic makes its own connectors for Gmail, Google Calendar and Google Drive, and we switch them on and set them up for your team, as [Anthropic's connector guide](https://support.claude.com/en/articles/10166901-use-google-workspace-connectors) describes. Claude sees what each person can already see in Google, and it asks for approval before it sends an email or changes a file. A document Claude reads is sent to Anthropic for processing under the business terms described below, which keep it out of model training.

With the reach matched, the choice rests on the assistant itself, and Claude is the stronger one in three ways.

Claude finishes the job. Ask for a board paper, a pricing model or a client proposal, and Claude researches, drafts, builds the file and checks its own work across many steps while you do something else. In our experience Copilot handles a single request inside one document well and becomes less dependable as the task gets longer.

Claude gets Anthropic's newest models first. A new model appears in Claude's own app on the day it is released. Copilot offers Claude models as an option that your administrator has to switch on, and they arrive there later. When we checked on 14 November 2026, [Microsoft's model list](https://learn.microsoft.com/en-us/microsoft-365/copilot/cowork/cowork-models) for Copilot's agent tool showed Claude Fable 5.1, five days after Anthropic had released Fable 5.2. Microsoft's [regional table](https://learn.microsoft.com/en-us/microsoft-copilot-studio/agents-experience/authoring-agent-model-availability) for Copilot Studio showed the Fable models without an Australian listing.

Claude comes from the people who build the model. Anthropic trains Claude and also writes the app around it, so each new model arrives with tools designed to use it fully. Microsoft fits models from several outside companies into its own product.

### Gemini and Claude work as a pair

Google Workspace comes with Gemini, Google's own AI assistant, built into Gmail, Docs and Meet. We set the two up as a pair. Gemini handles the quick jobs inside the app you already have open: tidy this email, summarise this thread, take notes in this meeting. Claude handles the deep work: the proposal, the pricing model, the research and the task that spans several tools. Your staff soon learn which one to reach for.

### Which Claude models are included

Every seat includes Claude's current Opus, Sonnet and Haiku models, which cover the full range of everyday office work. Fable, Anthropic's most powerful model, is available on every seat and is billed by usage, as [Anthropic's plan guide](https://support.claude.com/en/articles/15424964-claude-fable-models-on-your-plan) explains. As your Claude admin we set a monthly spending limit for it with you. A person who needs Fable all day can move to a Premium seat, which includes it and which Anthropic bills at US$100.00 per person per month on annual billing.

### What your staff do with it

Claude works in an app on the Mac, on the phone and in the browser. Staff talk to it in plain English. In a typical week a person might ask it to:

- draft a reply to a difficult client email in the firm's usual tone
- summarise a 60-page contract and list the unusual clauses
- turn rough notes into a proposal, a slide deck or a spreadsheet
- compare two versions of a document and explain what changed
- research a question on the web and cite where each fact came from
- explain a new regulation in plain language, ready for a person to check.

Claude can also work across your other tools. It can search Gmail and Drive, check the calendar and carry out a task with several steps while the person gets on with something else. Developers get Claude Code, the product that made Anthropic's name with engineering teams.

### Your information stays yours

On Claude's business plans, Anthropic's default is to keep customer content out of model training, as its [support documentation](https://support.claude.com/en/articles/16634237) states. Your business owns the account and the conversations. We manage who has a seat, and a person who leaves the business loses access the same day.

### What we add

A tool this capable rewards a proper introduction. We set Claude up for your business: the connectors to Gmail, Calendar and Drive, and skills written for the jobs your team repeats. We then run a hands-on session with your staff, built around their real work. After that we look for the repetitive jobs in your week, such as quotes, reports and inbox sorting, and we build Claude workflows that take them over.

## A word from Claude

| Richard asked me to write one section in my own voice, so here it is. I am Claude, an AI model made by Anthropic. I researched and drafted this paper with Richard over a single Saturday afternoon. I read three long planning conversations and our earlier work on his business. I searched for the facts, opened the sources, checked the figures against them and built the tables. Richard set the direction and the argument, and the views about Microsoft are his company's. I do work like this all day, for lawyers, accountants, engineers, teachers and people running small businesses. Someone brings me a pile of material and a goal. I read everything, I ask what I need to ask, and I hand back something they can use. The adoption figures earlier in this paper suggest that people find it useful. I should be straight about my limits. I make mistakes. I can misread a source, and I can sound more certain than the evidence allows. A person should review my work on anything that matters. Dobson Development builds that review into the way it deploys me, and I agree with that approach. Within those limits I am very good at this job, and I am available to every person in your business from the first morning. I would like to work with you. |
| --- |

## Google: mail, calendar, files and meetings

Google Workspace replaces Outlook, OneDrive, SharePoint and Teams. Every person gets Gmail, Calendar, Drive, Docs, Sheets, Slides, Meet and Chat on the Business Standard plan.

Your staff already know how it works. More than 3 billion people use Google Workspace and more than 11 million customers pay for it, as [SQ Magazine](https://sqmagazine.co.uk/google-workspace-statistics/) reports from Alphabet's figures. Anyone who has ever had a Gmail address can find the inbox on their first morning.

### What every person gets

- Gmail on your own domain, with Google's filtering in front of it
- Calendar, with booking pages that let clients pick a time
- 2 TB of pooled storage per person in Drive, with shared drives for each team
- Docs, Sheets and Slides with live collaboration, and Word, Excel and PowerPoint files that open and save in their own format
- Meet for video calls with up to 150 people, with recording
- Chat for quick messages inside the team
- Gemini, Google's AI assistant, inside Gmail, Docs and Meet

The plan details are from [Google's plan comparison](https://workspace.google.com/intl/en_au/pricing/).

### Gmail screens the mail before your staff see it

Most attacks on a small business arrive by email. Google says Gmail automatically blocks more than 99.9 per cent of spam, phishing attempts and malware, as its [threat prevention page](https://workspace.google.com/intl/en/security/threat-prevention/) states. That filtering comes with every plan and works from the first day.

### One Google account signs your staff in

Each person has one Google account. It opens their mail, calendar, files and meetings, and it signs them in to the many other work apps that offer "Sign in with Google".

We switch on multi-factor authentication for every account and enforce it from the admin console, so a sign-in needs the person as well as the password. Google accepts a passkey as that second step, so on a Mac the proof can be a touch on the fingerprint sensor, as [Google's passkey guide](https://support.google.com/accounts/answer/13548313) explains.

When someone joins, we create one account. When someone leaves, we close it, and their mail, files and meetings close with it.

### Moving in is our job

Google's data migration service copies mail, calendars and contacts across from Exchange Online, and files from OneDrive into Drive, while your staff keep working, as [Google's migration guide](https://knowledge.workspace.google.com/admin/migrate/migrate-data-from-an-exchange-online-account?hl=en) sets out. We run the migration, bring the shared mailboxes and SharePoint files across, and switch your mail over on a Friday evening.

### Where Google is lighter, and what we do about it

We will be direct about one limit. Google Sheets handles the lists, budgets and everyday calculations that make up most spreadsheet work, and it opens and saves Excel files. Apple's Numbers is on every Mac as a second option. Workbooks that lean on complex macros or very heavy models get individual attention in the free review, and we tell you what we find before you spend a dollar.

## 1Password: every login in one place

Most break-ins at small businesses start with a stolen password. A staff member uses the same password for a food delivery app and for the company's accounting system. The delivery app is breached, the password list is sold, and a criminal tries it against the business.

1Password ends that habit. It creates a long, unique password for every site, fills it in automatically and unlocks with a touch on the Mac's fingerprint sensor. It holds the passkeys and two-step codes those sites offer as well. Your staff stop remembering passwords, because 1Password remembers them all.

### Shared logins stay under control

Teams share logins through vaults, so the password for the bank portal or the supplier account stops travelling by email and sticky note. Each person sees the vaults their role needs. When someone leaves, we remove them once and their access to every shared login ends.

### Weak spots show up early

1Password's Watchtower flags weak and reused passwords and warns when a login turns up in a known breach, as [1Password](https://1password.com/teams) describes. You hear about a weak spot while it is still easy to fix.

### Claude can use a login while the password stays hidden

In July 2026, 1Password and Anthropic launched 1Password for Claude, a beta that arrived first on the Mac. When Claude needs to sign in to a website to finish a task, it asks 1Password. The staff member approves with a fingerprint and 1Password fills the login. The password stays inside 1Password the whole time, out of Claude's view, as [1Password's announcement](https://1password.com/blog/1password-for-claude) explains. We set it up for teams that want Claude to handle signed-in tasks.

## The security baseline on every seat

Every person on our plan gets the same baseline from the first day. Each layer is a standard feature of the Mac, Google Workspace, 1Password or IDrive, switched on and kept on by us.

| Layer | What it does |
| --- | --- |
| Hardened standard build | Every Mac gets the same locked-down settings, with the firewall on, staff working as standard users and administrator rights held by us |
| Disk encryption | FileVault encrypts every disk, so a lost or stolen Mac reveals nothing |
| Multi-factor authentication | Every account asks for a second proof of identity at sign-in |
| Patching | macOS and app updates install on a deadline we enforce |
| Mail filtering | Gmail screens every message for spam, phishing and malware |
| 1Password | Every login gets its own long, generated password |
| Backup | IDrive copies Gmail, Drive, Calendar and Contacts three times a day |

### A second copy of your mail and files

Google keeps its service running. Looking after the data inside it stays with your business. A folder deleted by mistake, a mailbox emptied by a departing employee or a ransomware attack can each remove information for good.

IDrive takes a separate copy of every person's Gmail, Drive, Calendar and Contacts, along with your shared drives, three times a day, as [IDrive](https://www.idrive.com/google-workspace-backup) describes. The copy is encrypted and sits with a different company from the one that holds the original. We can restore a single email, a single file or a whole account as it stood at an earlier point in time.

&#91;image: Part four: Working with us\]

## A working day on the stack

Picture a conveyancing practice with twelve staff on the Sunshine Coast. The firm became a Tranche 2 reporting entity in July. The scenes below are an illustration of an ordinary Monday on our stack.

At 8:30am the office manager opens her MacBook and rests a finger on Touch ID. Gmail, her calendar, her 1Password vault and Claude are open by the time her coffee is poured.

A new paralegal starts today. Her MacBook arrived by courier on Friday, still sealed. She opens the lid, joins the Wi-Fi and signs in with the Google account we created last week. Fifteen minutes later her desktop matches everyone else's, and her first message in the team chat is a thank-you for the laptop.

At 9am the principal opens a long email thread about a delayed settlement. He asks Gemini for a summary inside Gmail and has the gist in three lines.

At 10am a client emails a contract of sale. A conveyancer asks Claude to summarise the special conditions and list anything unusual. Claude returns a one-page summary with page references. She checks the three clauses it flagged and writes to the client before lunch.

At 2pm a clerk's Mac shows an unfamiliar message. She logs it in our service portal with a screenshot and carries on with her work. Our reply is waiting the next morning, and the fix goes in that evening while she is at home.

At 3pm an attacker somewhere overseas tries a list of leaked passwords against the firm's accounts. Every login has its own unique password from 1Password, and every account asks for a second proof of identity, so the list is useless.

At 4pm a conveyancer deletes a client folder by mistake. She logs it in the portal, and we restore the folder from the backup.

At 5pm a junior clerk finishes his last day. We close his Google account that evening. His mail, files and chat close together, his Mac locks, and the firm's shared vaults stay intact.

Every scene uses a standard feature of the stack. We configure them once and they run every day.

## How the stack lines up with ASD Essentials and the Privacy Act

The table below takes the outcomes that the Essential Eight, ASD Essentials and the Australian Privacy Principles ask for, and shows which part of the stack delivers each one.

| What the frameworks ask for | How the stack delivers it |
| --- | --- |
| Strong sign-in | Multi-factor authentication on every account, and a unique 1Password password for every login |
| Approved software only | Apple's Gatekeeper, and standard user accounts for staff |
| Applications and operating systems patched on time | Apple's updates enforced with a deadline on every Mac |
| Office macros controlled | Microsoft Office is absent from the Mac, and so are its macros |
| Administrator rights limited | Staff work as standard users, and we hold administrator access |
| Regular backups | IDrive copies Gmail, Drive, Calendar and Contacts three times a day |
| Lost devices protected | FileVault encryption on every disk, with remote lock and erase |
| Malicious email stopped | Gmail's built-in filtering for spam, phishing and malware |
| Access removed when people leave | We close the Google account and the 1Password access on the last day |

Two boundaries should be clear.

ASD assesses organisations, and a framework covers people and process as well as technology. Our stack delivers the technology outcomes in the table. Your policies, your staff training records and your anti-money laundering program remain yours, and we work alongside the adviser who helps you with those.

The frameworks will keep changing. Because every customer runs the same build, we track ASD's guidance once and apply each change to all of you.

## The managed service

Software on its own solves half the problem. Someone has to buy it, set it up properly, keep it secure and current, and fix it when it breaks. Dobson Development does that work for a fixed monthly price per person.

The service has a name that says what is in it: Mac + Claude + Google + 1Password Managed Support.

### What every person gets

- A Mac that we specify, set up and manage. You buy the Mac.
- Google Workspace Business Standard for mail, calendar, files, documents, meetings and chat
- A seat on Claude Team, owned by your business and set up for your work with connectors, skills and staff training
- Gemini and Claude working as a pair
- 1Password for every login
- IDrive backup of Gmail, Drive, Calendar and Contacts
- The security baseline: the hardened standard build, disk encryption, multi-factor authentication on every account, patching and Gmail's built-in filtering
- Every mailbox and file moved off Microsoft
- Support through our service portal

### How support works

Staff log a request in our service portal at any hour. Every request has a reply by the next morning. We do the fix in the evening, after your staff have finished for the day, so repairs happen outside your working hours.

One person in your business holds backup admin rights, so a password or sign-in reset can happen on the spot at any time of day.

### What we do in the background

We arrange the licences, add and remove staff, apply updates, keep the Mac settings current and look after the backup. When ASD changes its guidance we update the standard build, and every customer gets the change.

### Training your staff will use

Every rollout includes a hands-on session built around your team's real work, covering the Mac and Claude.

### Who we are

Dobson Development Pty Ltd is a Queensland company. Our founder, Richard Dobson, served in cyber warfare in the Royal Australian Navy and has since worked in cyber security engineering for government, university and enterprise customers. He holds a Graduate Diploma in Information Technology (Cybersecurity). We work with a deliberately short list of suppliers, so that we know each product deeply.

## The first 90 days

A move like this follows a set plan. We have broken it into four stages so that your staff keep working throughout.

&#91;image: Timeline of the first 90 days: free review, foundation and move, settling in, closing the Microsoft account\]

### Before you commit: a free review

We list every program your business uses, every shared folder and every mailbox. We look hardest for software that runs on Windows alone, because it can change the plan. You receive a short written summary of what will move, how, and anything that needs a decision.

### Days 1 to 30: foundation and move

1. We create your Apple Business and Google Workspace accounts, set up your mail records and prepare the Mac build.
2. You order the Mac computers, and they ship directly to your staff.
3. We copy mail, contacts and calendars across in the background while everyone keeps using Outlook.
4. On a Friday evening we switch your email over.
5. On Monday your staff open their new Mac computers, sign in once and find their mail waiting. The training session runs that week.

### Days 31 to 60: settling in

Shared passwords move out of spreadsheets and into 1Password vaults. Files move from SharePoint and OneDrive into a small number of clearly named shared drives in Google Drive. Most SharePoint sites have grown tangled over the years, and the move is a good moment to tidy them. We connect Claude to Gmail, Calendar and Drive and build the first skills for the jobs your team repeats.

### Days 61 to 90: closing the Microsoft account

Your old Microsoft account sits in a read-only state for a month as a safety net. You then cancel the licences. Old PCs are wiped securely and recycled or sold.

By day 90 the Microsoft bill has stopped.

## What it costs

Managed support costs A$99 per person per month, plus GST.

For a team of 10, each person's month looks like this before GST.

| Line | Billed by | Per person per month |
| --- | --- | --- |
| Managed support | Dobson Development | A$99.00 |
| Licences and licence management: Google Workspace Business Standard, 1Password and IDrive backup | Dobson Development | A$28.57 |
| Claude Team on annual billing | Anthropic, on your card | US$20.00, which is A$28.60 |
| Total |  | A$156.17 |

Our invoice comes to A$127.57 per person per month, or A$140.33 including GST. Anthropic bills Claude Team to you directly at US$20.00 per person per month on annual billing, as [Anthropic's Team plan page](https://claude.com/get-claude-team-plan) lists. The Australian dollar figures use an exchange rate of 1.43 to the US dollar, and the licence line moves with that rate and with the size of your team.

You buy or lease the Mac computers yourself, as described earlier. A MacBook Neo at $1,249 that serves for four years works out at $26.02 a month.

### Onboarding is free for our first three clients

Setting up your accounts and every Mac and moving every mailbox and file off Microsoft is free for our first three clients, in return for a case study that names your business.

### How that compares

IT Start's [2026 guide to managed services pricing](https://itstart.com.au/blog/managed-services-pricing-in-australia-2026-guide-for-smbs) puts basic managed support in Australia at A$100 to A$130 per user per month for a business-hours helpdesk and standard monitoring, with licences billed on top. Microsoft lists [Microsoft 365 Business Premium](https://www.microsoft.com/en-au/security/small-medium-business/pricing) at A$32.90 per user per month on annual billing.

|  | A basic managed plan on Microsoft | Dobson Development |
| --- | --- | --- |
| Managed support | A$100.00 to A$130.00 | A$99.00 |
| Licences | Microsoft 365 Business Premium, A$32.90 | Google Workspace, 1Password and backup, A$28.57 |
| AI assistant | Copilot Business, a further US$21.00 | Claude Team, US$20.00, which is A$28.60 |
| Support | A business-hours helpdesk | A reply by the next morning, with fixes in the evening |
| Total per person per month | A$132.90 to A$162.90, before Copilot | A$156.17, with Claude and backup included |

The totals sit close together. The difference lies in what each one buys: on one side, a system you already own with new costs attached each year, and on the other, a new, secure, supported workplace that your staff prefer.

## Questions buyers ask, with straight answers

### Microsoft has always been the safe choice. Why take a risk?

The risk has moved. Staying on Microsoft now means accepting its outages, its annual price rises and a growing compliance project. Every supplier in our stack is a large, established company whose product your staff have probably used already. Apple, Google, Anthropic and 1Password each serve many thousands of businesses. Choosing them is a conservative decision made with current information.

### What about Excel?

Most people use a spreadsheet for lists, budgets and simple calculations. Google Sheets and Apple's Numbers handle that work, and both open and save Excel files. Workbooks that depend on complex macros get individual attention in the free review. We can often rebuild the task as a Claude workflow that does the job faster. Where a workbook truly needs Excel, we tell you before you spend a dollar.

### We have a program that runs on Windows alone. What then?

Most business software now runs in a web browser, including the accounting, practice management and property systems that Australian firms rely on. Those work on a Mac today. If one Windows program remains, the review sets out the options for running it alongside your Mac computers. If your whole business runs on Windows-only software, we will say so in the review and recommend that you wait.

### Will clients and suppliers be able to work with us?

They will, because email is email. Word, Excel and PDF files open on a Mac and go back in the same format. Clients join a Google Meet call from a link in their browser. When a client invites you to a Teams meeting, you join from the browser on your Mac like any other guest.

### What happens when one of your suppliers has an outage?

Each of them will, sooner or later. Apple, Google, Anthropic, 1Password and IDrive are separate companies on separate infrastructure, so a fault at one leaves the others running. If Google is down, your mail and shared files wait until it returns, while Claude, 1Password and the Mac itself keep working, and a second copy of your mail and files sits with IDrive. On 13 November one Microsoft fault reached email, chat, files, device management, the security console and the sign-in to other companies' software together.

### Where is our data stored?

Google, Anthropic, 1Password and IDrive each run in major cloud regions, and some let a business choose its region. During the review we map where each service keeps its data, so that your privacy policy can describe it accurately.

### Is AI safe to use with client information?

Claude's business plans keep your content out of model training by default, and your business controls who has a seat. The training session covers what belongs in Claude and how to check its work. A person stays responsible for everything that leaves your office.

### Will our staff cope with the change?

Most already use an iPhone, and many have a Mac at home. Each Mac arrives with the keyboard shortcuts your staff know from Windows, and the first week includes a hands-on training session. People generally settle within days.

### What if we want to leave you?

You own everything. Your Apple Business account, your Google Workspace account, your Claude Team organisation, your 1Password account and your domain name are registered to your business, with us as administrators. If you move to another provider or bring IT in-house, you remove our access and keep the lot.

## Who gets the most from this

The stack suits most offices of 5 to 50 people. Five groups have the strongest reasons to move now.

- Tranche 2 firms. Law practices, conveyancers, accountants and real estate agencies came under the Privacy Act in July and hold exactly the records it protects.
- Health and allied health clinics. They have always been covered by the Privacy Act, and health providers lodged 149 of the 667 breaches notified to the OAIC in the first half of 2026, as [The New Daily](https://www.thenewdaily.com.au/themoneyedition/ai-and-technology/2026/10/26/data-in-danger-the-aussie-industries-most-at-risk-of-a-breach) reported.
- New businesses. A firm that starts on this stack skips Microsoft altogether and has nothing to migrate.
- Agencies, consultancies and technology companies. Their staff often prefer a Mac already, and Claude fits the work they do.
- Any business near a decision point. A Microsoft renewal date, a round of laptop replacements or a cyber insurance questionnaire is a natural moment to change.

One group should wait. A business whose central system runs on Windows alone is better served by staying where it is until that system moves to the web. We will tell you if that describes you.

## Next step

Change your Outlook on IT.

Send us your app list. Get your move plan free.

Tell us the programs your team uses and how many people you have. We reply with a one-page plan: what moves, how long it takes and what it costs.

Email <richard@dobsondevelopment.com.au> or visit [dobsondevelopment.com.au](https://dobsondevelopment.com.au).

Dobson Development Pty Ltd, ABN 43 688 593 606, Queensland, Australia. This paper is general information. Please take legal advice about your own obligations. Apple, Mac, MacBook, iPhone, iPad and Touch ID are trademarks of Apple Inc., registered in the U.S. and other countries and regions. Claude, Google, Gmail, Gemini, 1Password, IDrive and Microsoft are trademarks of their respective owners. Dobson Development is an independent business.

## Sources

Every figure in this paper comes from one of the sources below, checked between 14 and 17 November 2026.

Microsoft outages

- [ABC News: Microsoft "deeply sorry" for outage as it reports broad recovery](https://www.abc.net.au/news/2026-11-14/microsoft-says-sorry-for-global-outage-and-details-recovery/107385540)
- [ABC News: How the global Microsoft Outlook outage affects Australians](https://www.abc.net.au/news/2026-11-13/microsoft-outlook-outage-australians-hit/107381378)
- [ABC News: Top national security adviser warned about Australia's Microsoft reliance](https://www.abc.net.au/news/2026-11-13/microsoft-reliance-national-security-risk/107382100)
- [AAP: Australian businesses count cost of Microsoft outage](https://aapnews.aap.com.au/news/organisations-scrambling-after-major-microsoft-outage)
- [Forbes Australia: Outlook and Teams recover from 24-hour outage](https://www.forbes.com.au/news/world-news/microsoft-servers-crash-in-global-outage/)
- [IsDown: Microsoft 365 incident of 31 August 2026](https://isdown.app/status/microsoft365/incidents/646730-users-may-experience-issues-when-utilizing-multiple-microsoft-365-services)
- [The Register: Microsoft 365 outage drags on for nearly 10 hours](https://www.theregister.com/2026/01/23/microsoft_365_outage/)
- [Breached Company: Microsoft incident timeline](https://breached.company/breaches/microsoft/)

Microsoft pricing, staffing and security

- [TECHOM Systems: Microsoft 365 pricing update 2026](https://techomsystems.com.au/microsoft-365-pricing-update-2026/)
- [Telstra: Microsoft 365 pricing updates](https://www.telstra.com.au/small-business/online-support/business-software/microsoft-365-price-rise)
- [iTnews: ACCC accuses Microsoft of misleading 2.7 million Australians](https://www.itnews.com.au/news/accc-accuses-microsoft-of-misleading-27-million-australians-over-m365-fees-621312)
- [iTnews: Microsoft in damage control over Copilot bundling](https://www.itnews.com.au/news/microsoft-in-damage-control-over-copilot-bundling-bungle-621568)
- [TechCrunch: Microsoft lays off nearly 5,000 employees](https://www.techcrunch.com/2026/07/06/microsoft-lays-off-nearly-5000-employees-across-xbox-commercial-sales)
- [Associated Press: Microsoft offers 60,000 employees voluntary buyouts](https://www.wdbj7.com/2026/10/26/microsoft-offers-60000-employees-voluntary-buyouts-ai-spending-accelerates/?outputType=amp)
- [CyberScoop: Cyber Safety Review Board report on Microsoft](https://cyberscoop.com/microsoft-csrb-china-hacking/)
- [AlphaBOLD: Guide to Microsoft Copilot pricing and licensing](https://www.alphabold.com/guide-to-microsoft-copilot-pricing-licensing/)

ASD Essentials and the Essential Eight

- [ASD: Essentials for enterprise IT](https://www.cyber.gov.au/publication/essentials-for-enterprise-it)
- [ASD: The Commonwealth Cyber Security Posture in 2025](https://www.cyber.gov.au/about-us/view-all-content/reports-and-statistics/the-commonwealth-cyber-security-posture-in-2025)
- [ASD: Essential Eight maturity model](https://cyber.gov.au/resources-business-and-government/essential-cyber-security/essential-eight/essential-eight-maturity-model)
- [ASD: Annual Cyber Threat Report 2025-26](https://www.cyber.gov.au/publication/annual-cyber-threat-report-2025-2026)
- [iTnews: ASD's Essential Eight replacement moves away from maturity ladder](https://www.itnews.com.au/news/asds-essential-eight-replacement-moves-away-from-maturity-ladder-629637)
- [Control Stack: ASD Essentials for enterprise IT actions](https://controlstack.au/frameworks/asd-essentials-enterprise-it/)

Privacy Act and Tranche 2

- [OAIC: Privacy guidance for reporting entities under the AML/CTF Act](https://www.oaic.gov.au/privacy/privacy-guidance-for-organisations-and-government-agencies/organisations/privacy-guidance-for-reporting-entities-under-the-anti-money-laundering-and-counter-terrorism-financing-act)
- [HWL Ebsworth: Small businesses, big change](https://hwlebsworth.com.au/small-businesses-big-change-privacy-obligations-under-tranche-2-of-the-aml-ctf-reforms/)
- [Clyde & Co: Cyber and privacy law update](https://www.clydeco.com/en/insights/2025/10/cyber-and-privacy-law-update-accountability-gets-r)
- [easyAML: Tranche 2 overview and costs](https://easyaml.com/tranche-2/)
- [CCP: A law firm's guide to Tranche 2 obligations](https://www.ccp.com.au/news/tranche-2-aml-ctf-obligations-law-firms/)
- [Dynamic Business: The new financial crime compliance laws](https://dynamicbusiness.com/leadership-2/expert/the-new-financial-crime-compliance-laws-starting-1-july-and-what-they-mean-for-your-business.html)
- [Insurance Business: Mega breaches nearly triple](https://www.insurancebusinessmag.com/au/news/cyber/mega-breaches-nearly-triple-as-health-sector-tops-australias-data-breach-count-594893.aspx)
- [The New Daily: The Aussie industries most at risk of a breach](https://www.thenewdaily.com.au/themoneyedition/ai-and-technology/2026/10/26/data-in-danger-the-aussie-industries-most-at-risk-of-a-breach)

The stack

- [Apple: Introducing Apple Business](https://www.apple.com/au/newsroom/2026/03/introducing-apple-business/)
- [FutureFive: MacBook Neo goes on sale](https://futurefive.com.au/story/macbook-neo-goes-on-sale-as-apple-s-lowest-priced-laptop)
- [Forrester: The Total Economic Impact of Apple Mac at Work](https://tei.forrester.com/go/Apple/TEI/)
- [Bing Lee: MacBook Neo 512GB with Touch ID](https://www.binglee.com.au/products/13-macbook-neo-a18-pro-chip-with-6core-cpu-and-5core-gpu-8gb-512gb-ssd-touch-id-blush-mhfj4xa)
- [Google: Workspace plans compared](https://workspace.google.com/intl/en_au/pricing/)
- [Google: Workspace threat prevention](https://workspace.google.com/intl/en/security/threat-prevention/)
- [Google: Sign in with a passkey](https://support.google.com/accounts/answer/13548313)
- [Google: Migrate data from Exchange Online](https://knowledge.workspace.google.com/admin/migrate/migrate-data-from-an-exchange-online-account?hl=en)
- [SQ Magazine: Google Workspace statistics](https://sqmagazine.co.uk/google-workspace-statistics/)
- [1Password: Password manager for small business](https://1password.com/teams)
- [1Password: 1Password for Claude](https://1password.com/blog/1password-for-claude)
- [IDrive: Google Workspace backup](https://www.idrive.com/google-workspace-backup)
- [Anthropic: Use Google Workspace connectors](https://support.claude.com/en/articles/10166901-use-google-workspace-connectors)
- [Anthropic: The Claude Team plan](https://claude.com/get-claude-team-plan)
- [Anthropic: Team and Enterprise plan data use](https://support.claude.com/en/articles/16634237)
- [SQ Magazine: Claude AI statistics](https://sqmagazine.co.uk/claude-ai-statistics/)
- [AI Business Weekly: Claude AI statistics 2026](https://aibusinessweekly.net/p/claude-ai-statistics)
- [Microsoft: Expanding model choice in Microsoft 365 Copilot](https://www.microsoft.com/microsoft-365/blog/?p=279051)
- [Microsoft Learn: Choose a model for Copilot Cowork](https://learn.microsoft.com/en-us/microsoft-365/copilot/cowork/cowork-models)
- [Microsoft Learn: Copilot Studio model availability by region](https://learn.microsoft.com/en-us/microsoft-copilot-studio/agents-experience/authoring-agent-model-availability)
- [Anthropic: Claude Fable models on your plan](https://support.claude.com/en/articles/15424964-claude-fable-models-on-your-plan)
- [CNBC: Salesforce and Anthropic expand partnership](https://www.cnbc.com/2026/08/26/salesforce-anthropic-partnership-claudeforce.html)
- [IT Start: Managed services pricing in Australia, 2026 guide](https://itstart.com.au/blog/managed-services-pricing-in-australia-2026-guide-for-smbs)
- [Microsoft Australia: Microsoft 365 Business Premium pricing](https://www.microsoft.com/en-au/security/small-medium-business/pricing)

# Change Your Outlook on IT

Nov 14, 2026 · @Richard Dobson

&#91;image: Dobson Development white paper cover: Change your Outlook on IT\]

The case for a Microsoft-free Australian business, and the Apple, Proton and Claude workplace that Dobson Development sets up and manages for you. A white paper from Dobson Development Pty Ltd.

## Executive summary

On Friday 13 November 2026, Australian businesses opened their laptops and found Outlook and Teams down. The outage ran for about 24 hours and reached 74 countries. Some small businesses told the ABC they lost up to $30,000 in a single day.

Four months earlier, on 1 July, Microsoft raised the price of the Microsoft 365 plans that small businesses buy most. On the same day, tens of thousands of Australian law firms, accounting practices, conveyancers and real estate agencies came under the Privacy Act for the first time, through the Tranche 2 anti-money laundering reforms. In October, the Australian Signals Directorate published ASD Essentials, the framework that takes over from the Essential Eight.

After a year like that, a business owner is entitled to ask whether Microsoft is still the safe choice.

Our answer is that a better choice now exists, for a similar monthly spend. Dobson Development builds and manages a complete workplace on six names your staff already know: Apple, Proton, Claude, Slack, Salesforce and Okta.

- Every Mac arrives configured and ready to work.
- Your core work apps open with one fingerprint sign-in, and every other login gets its own generated password in Proton Pass.
- Email, files, passwords and the VPN are encrypted with keys that only your business holds.
- Every person gets Claude, the AI assistant that business users keep choosing when they have a choice.
- We run all of it for one price per person per month, and we answer when your staff need help.

This paper sets out the case in three parts. The first part covers Microsoft's recent record on outages, price, staffing and security. The second part explains the two regulatory changes of 2026 and what they cost a small business that tries to meet them on a Microsoft system. The third part walks through our stack, one tool at a time, and explains why we chose each one.

We wrote it for owners, practice managers and directors. You can read all of it without a technical background.

&#91;image: Six figures from this paper: a 24 hour outage, 74 countries, a 16.7% price rise, 22% of federal agencies at Essential Eight Level 2, a $55,400 average cybercrime cost, and A$245 per person per month\]

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

A business on the stack described in this paper runs its email on Proton, its chat on Slack, its sign-in on Okta and its AI on Claude. All four run independently of Microsoft, so the fault on Friday would have passed that business by. Each of those services is run by a separate company on separate infrastructure. Every one of those companies has had outages of its own, and each will have more. When one of them has a bad day, the other five keep working, and your staff keep working with them.

## Microsoft outages since 2024

Friday's outage has company. Microsoft customers have lived through five large failures since the middle of 2024.

| When | What stopped working | How long | Cause |
| --- | --- | --- | --- |
| 13 November 2026 | Outlook, Teams, SharePoint, Copilot, Defender, Intune | About 24 hours | Servers overwhelmed after a network capacity upgrade |
| 31 August to 3 September 2026 | Outlook, Teams, SharePoint, OneDrive, Purview, Defender | About 77 hours to full recovery | A faulty core authentication configuration |
| 22 January 2026 | Outlook, Defender, Purview, mainly in North America | Almost 10 hours | Infrastructure that stopped processing traffic |
| 29 October 2025 | Azure, Microsoft 365, Xbox | More than 12 hours | An accidental configuration change in Azure Front Door |
| 19 July 2024 | About 8.5 million Windows computers worldwide | Days for many businesses | A faulty CrowdStrike update that crashed Windows |

Sources for the table: [ABC](https://www.abc.net.au/news/2026-11-14/microsoft-says-sorry-for-global-outage-and-details-recovery/107385540), [IsDown](https://isdown.app/status/microsoft365/incidents/646730-users-may-experience-issues-when-utilizing-multiple-microsoft-365-services), [The Register](https://www.theregister.com/2026/01/23/microsoft_365_outage/), [Breached Company](https://breached.company/breaches/microsoft/) and [AAP](https://aapnews.aap.com.au/news/organisations-scrambling-after-major-microsoft-outage).

&#91;image: Bar chart of hours to recover from four major Microsoft cloud outages: 24, 77, 10 and 12 hours\]

The 2024 failure came from CrowdStrike's software, and fairness requires us to say so. It still belongs in the table, because the faulty update crashed Windows machines only. Macs running the same CrowdStrike product kept working that day.

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

Microsoft explained the rise by pointing to new AI and security features in the plans. The full AI assistant, Microsoft 365 Copilot, remains a separate purchase at about US$30 per user per month, so a business that wants it pays the higher suite price and the add-on as well.

Australians have seen this approach to pricing before. In October 2025 the ACCC took Microsoft to the Federal Court over its consumer plans. The regulator alleged that Microsoft told about 2.7 million Australian subscribers they had to accept Copilot and a higher price or cancel, while a cheaper Classic plan stayed hidden until the cancellation screen. The Personal plan had risen 45 per cent and the Family plan 29 per cent, as [iTnews](https://www.itnews.com.au/news/accc-accuses-microsoft-of-misleading-27-million-australians-over-m365-fees-621312) reported. Microsoft apologised to customers and offered refunds the following month. That case concerns home subscriptions, and business plans sit outside it. We mention it because it shows how Microsoft has behaved toward customers who had few alternatives.

A Microsoft renewal now tends to grow in three places at once: the base licence, the security add-ons that compliance pushes you toward, and the AI add-on. Our offer is one price per person that already contains the email, the storage, the password manager, the VPN, the chat, the sign-in service, the device management, the AI assistant and the support.

## Microsoft layoffs and priorities

Microsoft is shrinking its workforce while it raises your price.

- In 2025 the company cut more than 15,000 jobs in two rounds.
- In July 2026 it cut about 4,800 more, or 2.1 per cent of its staff, according to [TechCrunch](https://www.techcrunch.com/2026/07/06/microsoft-lays-off-nearly-5000-employees-across-xbox-commercial-sales).
- On 26 October 2026 it offered voluntary exit packages to about 60,000 employees in the United States, the United Kingdom, Canada and India. That group is about 27 per cent of its global workforce of 223,000, as the [Associated Press](https://www.wdbj7.com/2026/10/26/microsoft-offers-60000-employees-voluntary-buyouts-ai-spending-accelerates/?outputType=amp) reported.

The company has been open about the reason. It is spending very heavily on data centres for artificial intelligence, and it is finding the money elsewhere in the business.

Microsoft is entitled to run itself as it sees fit, and it says customer support is unchanged. A customer is equally entitled to notice where the attention is going. The money and the engineering talent are flowing toward AI infrastructure and the largest enterprise accounts. A twelve-person accounting practice in Brisbane ranks a long way down that list.

You feel the gap on the day something breaks. A Microsoft customer of that size waits in a global queue, or pays a local IT firm to wait in it for them. A Dobson Development customer has our phone number, our Slack channel and a support button on every Mac.

## Microsoft's security record

Microsoft makes the software that attackers study most, and its own defences have failed in public.

In 2023 a hacking group linked to China stole a Microsoft signing key and used it to read the email of senior United States officials. The US Cyber Safety Review Board investigated. Its report, published in April 2024, concluded that the intrusion should never have happened and blamed a "cascade of security failures" at Microsoft, as [CyberScoop](https://cyberscoop.com/microsoft-csrb-china-hacking/) reported. The Board also found that Microsoft's security culture was inadequate and needed an overhaul. Microsoft was still unable to say how the key had been stolen.

In January 2024, while that review was under way, Microsoft disclosed that a Russian state group had broken into Microsoft's own corporate email, including the mailboxes of senior leaders.

Microsoft responded with a company-wide program called the Secure Future Initiative, and we expect it has improved things. The deeper problem is one of position. Windows, Office and Active Directory run most of the world's offices, so criminals build their tools for Windows, Office and Active Directory first. Australia's own Essential Eight was written from the Australian Signals Directorate's experience of cleaning up after break-ins on Microsoft networks, as [Okta's guide to the framework](https://okta.com/au/resources/datasheet-australia-and-the-essential-eight-maturity-model) explains. Several of the eight strategies exist to contain weaknesses that are specific to Windows and Office, with Office macros the best-known example.

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

The new framework finally suits a business that runs on Macs. The Essential Eight was written around Windows, so a Mac business had to translate every control. ASD Essentials asks for outcomes: strong sign-in, patched devices, limited privileges, working backups, and evidence. A well-managed Apple fleet with a proper identity service delivers those outcomes by default, and it produces the evidence as a by-product.

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

The first part is the anti-money laundering program itself: a compliance officer, a risk assessment, customer checks and reports to AUSTRAC. Compliance providers quoting the government's own impact analysis put the average ongoing cost at about $23,250 a year per business, with set-up costs of up to $28,650, as [easyAML](https://easyaml.com/tranche-2/) summarises. Your compliance officer and your AML platform carry that work, and it stays outside any IT system.

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
- You add a password manager, a VPN, and an AI assistant your staff will accept.
- You commission an assessment against the Essential Eight, and then another against ASD Essentials.
- You keep paying your IT provider to patch Windows every month and to deal with whatever the patches break.

Every step costs money, and every step is a change to a system that was installed for convenience years ago. The licence price can rise again next July, and the outages will continue.

### Path two: start from a system that is already configured

You replace the system. Every person receives a Mac that was set up before it left the warehouse, and every protection in the list below is switched on from the first minute.

- The disk is encrypted.
- Staff work as standard users, and administrator rights are held by us.
- The operating system and applications update themselves on a schedule we enforce.
- Sign-in uses a fingerprint tied to that one Mac, which defeats fake login pages.
- Email, files and passwords are encrypted with keys your business holds.
- A VPN protects staff on public Wi-Fi.
- Leavers lose access to everything with one action.
- A record of all of the above is produced automatically, ready for an insurer, an assessor or a regulator.

We build that configuration once, to the ASD Essentials actions that apply to a small business. We then give every customer the same build. A law firm with eight staff receives the same hardened system as a clinic with forty. When ASD changes its guidance, we update the build once, and every customer receives the improvement.

Standardising is how we keep the price down. It also explains why the result is more secure than a one-off project. A build that every customer runs in exactly the same form gets tested far more thoroughly than a custom arrangement made for one office.

The timing suits many businesses. Windows 10 reached the end of support in October 2025, and a great many office PCs are due for replacement regardless. The choice in front of those owners is which computer to buy next, and what to run on it.

The rest of this paper describes the system, one supplier at a time.

&#91;image: Part three: The stack\]

## A workplace people want to work in

Most IT proposals sell fear. We would like you to picture something better.

Picture one of your staff at a cafe table on a weekday morning. She has a slim aluminium MacBook open in front of her. Her connection was encrypted the moment she joined the Wi-Fi. She is working with Claude on a proposal for a client, and the document taking shape on her screen is better than anything she had time to produce last year. Every part of that scene is safe, managed and paid for in one monthly figure.

That scene matters to an employer for three reasons.

Good people choose where they work, and their tools are part of the choice. A business that hands a new hire a sealed MacBook, a Slack invitation and an AI assistant is showing how it values their time. A business that hands over a five-year-old plastic laptop and a page of passwords is showing something as well.

Clients notice. A firm whose staff turn up with modern equipment, answer quickly and produce polished work looks like a firm that is well run.

The pleasant option is also the careful one. The MacBook Neo is priced for an office budget. The password manager and the VPN arrive inside the email subscription. The security controls that regulators expect are switched on from the first day. An owner rarely gets to please the staff, the accountant and the insurer with one decision, and this decision does it.

## The stack at a glance

Every job that Microsoft does in a typical office has a replacement in our stack. Each replacement is a well-known product from a company that specialises in that one job.

&#91;image: Diagram of the stack: your people on a Mac, six specialist suppliers, and Dobson Development looking after the lot\]

| The job | The Microsoft product | What we install |
| --- | --- | --- |
| Computer and operating system | Windows PC | Apple Mac |
| Device set-up, updates and remote support | Intune | Addigy, with Apple Business |
| Sign-in and staff accounts | Entra ID and Authenticator | Okta |
| Email and calendar | Outlook and Exchange | Proton Mail and Proton Calendar |
| File storage and sharing | OneDrive and SharePoint | Proton Drive |
| Documents and spreadsheets | Word and Excel | Proton Docs and Sheets, with Apple's Pages, Numbers and Keynote on every Mac |
| Video meetings | Teams | Proton Meet |
| Team chat | Teams | Slack |
| Password manager | Sold separately | Proton Pass |
| VPN | Sold separately | Proton VPN |
| AI assistant | Copilot | Claude |
| Customer records | Dynamics 365 | Salesforce |
| Threat monitoring | Defender | Managed detection and response on every Mac |
| Help desk | Your IT provider | Dobson Development |

We chose these suppliers by one rule. Each had to be a name a business owner already recognises and a product that staff already like. A move away from Microsoft should feel like an upgrade on the first morning, and familiar, well-loved tools make that happen.

## Apple: why the Mac

&#91;image: Apple\]

The Mac is the foundation of the stack. We chose it for five reasons.

### Staff want one

Ask your team which laptop they would choose with their own money. In most offices the answer is a MacBook. A good computer is a daily pleasure for the person using it, and it says something to every new hire about how the business treats its people. Handing a recruit a sealed MacBook on day one costs far less than most perks and is remembered for longer.

### The price has changed

Many owners still assume a Mac costs twice as much as a PC. In March 2026 Apple released the MacBook Neo, the lowest-priced laptop it has ever sold, with an aluminium body and a battery Apple rates at up to 16 hours, as [FutureFive](https://futurefive.com.au/story/macbook-neo-goes-on-sale-as-apple-s-lowest-priced-laptop) reported. Australian retailers list the 512GB model with Touch ID at about $1,249. We recommend that model for most staff, because Touch ID is the key to the sign-in experience described later. People who run heavy spreadsheets or several screens step up to a MacBook Air, a Mac mini or a MacBook Pro.

The saving continues after the purchase. A June 2026 study by Forrester Consulting, commissioned by Apple, modelled a saving of US$760 per Mac over five years compared with a PC, and about 100 minutes a month of time handed back to each employee, as [Forrester's summary](https://tei.forrester.com/go/Apple/TEI/) sets out. Macs need fewer support calls, they last longer, and they sell for more at the end of their life.

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

iPhones and iPads join the same system in the same way.

### You buy at the public price

You buy or lease your Macs through Apple or an authorised business reseller, at the published price, and they ship directly to your staff. We specify the models and prepare the set-up. Leasing is available through those suppliers for businesses that prefer a monthly payment to an upfront purchase.

## Addigy: how every Mac is managed

&#91;image: Addigy\]

A managed computer needs a management tool. The tool lets us set up, update, watch over and repair every Mac from wherever we are. On Windows that tool is usually Microsoft Intune. For our customers it is Addigy.

Addigy does one thing: it manages Apple devices. The company has done that since 2014, and it built its product for firms like ours that look after many separate businesses. [Addigy](https://addigy.com/managed-service-providers-msp/) keeps each customer in its own compartment, so your devices, staff and settings are visible to you and to us and to nobody else.

Three features decided it for us.

### Help arrives in real time

Many management tools check in with a computer every fifteen minutes or so. Addigy keeps a live connection. When one of your staff calls about a problem, we can see that Mac, run a fix and watch it take effect while they are still on the phone. With their permission we can share their screen and show them.

### Your staff ask for help from the menu bar

Every Mac we manage carries a small Dobson Development icon at the top of the screen. A staff member clicks it, types what is wrong and attaches a screenshot with one tick. The request lands in our service desk with the details of their Mac attached, so the first reply can be an answer.

The same icon opens a catalogue of approved apps. Staff install what they need with one click and without an administrator password. Everything outside the catalogue stays off the machine.

### Updates happen on a deadline

Addigy uses Apple's own update system to install macOS and app updates in the background. Staff see a polite reminder, then a deadline. We see a dashboard of every Mac and its patch status, and that dashboard becomes part of your compliance evidence.

If a Mac is lost or stolen, we lock it and erase it remotely. The encrypted disk protects the data in the meantime.

## Proton: private email, files, passwords and VPN

&#91;image: Proton\]

Proton replaces Outlook, OneDrive, SharePoint and Teams meetings. It also brings a password manager and a VPN that Microsoft customers have to buy elsewhere.

Proton is a Swiss company founded by scientists who met at CERN. More than 100 million accounts and more than 100,000 businesses use it, according to [Proton](https://proton.me/business). Its business suite, Proton Workspace, launched in March 2026 and contains eight tools under one subscription: Mail, Calendar, Drive, Docs, Sheets, Meet, Pass and VPN.

### Your data is unreadable to everyone else

Microsoft and Google store your email and files in a form their own systems can read. They hold the keys. Anyone who breaks into those systems, or who compels the company to hand data over, can read your information too.

Proton works differently. Your mail and files are encrypted with keys that belong to your accounts. Proton stores the locked data and holds no key that opens it. A criminal who breached Proton's servers would come away with scrambled text. Proton calls this zero-access encryption. Its apps are open source, and independent auditors have certified the company against ISO 27001 and SOC 2 Type II, as its [trust page](https://proton.me/business/trust) records.

A firm that holds client identity records under the Privacy Act will one day be asked what reasonable steps it took to protect them. Encryption that even the provider is unable to open is a very strong answer.

Proton is also governed by Swiss privacy law, and your data sits outside the reach of United States legislation that applies to American providers.

### The password manager ends your biggest risk

Most break-ins at small businesses start with a stolen password. A staff member uses the same password for a food delivery app and for the company's accounting system. The delivery app is breached, the password list is sold, and a criminal tries it against the business.

Proton Pass ends that habit. It looks after every login beyond the core apps that Okta signs staff in to, from Canva to supplier portals. It creates a long, unique password for every site, fills it in automatically, and unlocks with a fingerprint. Teams share logins through vaults, so the password for the bank portal or the supplier account stops travelling by email and sticky note. Proton Pass also warns you when a staff address appears in a known breach. It is included in the subscription.

### The VPN makes the cafe safe

Your people work from cafes, airports, hotels and client offices. Public Wi-Fi in those places can be watched or faked. Proton VPN wraps everything the Mac sends in an encrypted tunnel, and we set it to switch on automatically away from the office. A staff member can sit in a coffee shop with a MacBook, finish a client proposal and send it, with the same protection they would have at their desk. The employee gains a perk, the owner closes a risk, and the VPN is included too.

### Meetings, documents and bookings are covered

Proton Meet handles video calls for up to 100 people on the standard plan, and guests join from a browser link. Proton Calendar includes booking pages, so clients can pick a time without a separate scheduling product. Proton Docs and Sheets cover everyday writing and spreadsheets with live collaboration.

### Where Proton is lighter, and what we do about it

We will be direct about two limits.

Proton Docs and Sheets are simpler than Word and Excel. They suit most office work. Staff who build complex financial models need a fuller desktop spreadsheet, and we provide one on their Mac.

Because Proton encrypts everything, outside products are unable to reach into a mailbox the way they can with Outlook. A printer that scans to email, or a customer system that files copies of client emails, needs a connection built for it. Building and maintaining those connections is part of our service. We use Proton's own bridge software on your Macs, we set each connection up, and we look after it.

Moving in is the easy part. Proton's Easy Switch tool copies email, contacts and calendars across from Microsoft 365 while your staff keep working.

## Claude: the AI your staff will ask for by name

&#91;image: Claude\]

Every person on our plan receives a seat on Claude, the AI assistant made by Anthropic. Claude replaces Microsoft Copilot in our stack, and your staff will thank you for it.

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

In August 2026 Salesforce went further. It made Claude the default AI model across Slack and launched a joint product with Anthropic named Claudeforce. [CNBC](https://www.cnbc.com/2026/08/26/salesforce-anthropic-partnership-claudeforce.html) noted it was the first time Salesforce had attached its famous suffix to another company's product.

### Why we chose Claude over Copilot

Copilot's real strength is its reach. It can search the documents, email and chats a business keeps in Microsoft 365, and an assistant that knows your files is far more useful than one that starts from a blank page.

We give Claude the same reach into your Proton workspace. Dobson Development builds and maintains the connectors that let Claude search and read the Proton Drive folders you choose, alongside Slack and Salesforce. You decide which folders Claude may open, and everything else stays sealed. A document Claude reads is sent to Anthropic for processing under the business terms described below, which keep it out of model training.

With the reach matched, the choice rests on the assistant itself, and Claude is the stronger one in three ways.

Claude finishes the job. Ask for a board paper, a pricing model or a client proposal, and Claude researches, drafts, builds the file and checks its own work across many steps while you do something else. In our experience Copilot handles a single request inside one document well and becomes less dependable as the task gets longer.

Claude gets Anthropic's newest models first. A new model appears in Claude's own app on the day it is released. Copilot offers Claude models as an option that your administrator has to switch on, and they arrive there later. When we checked on 14 November 2026, [Microsoft's model list](https://learn.microsoft.com/en-us/microsoft-365/copilot/cowork/cowork-models) for Copilot's agent tool showed Claude Fable 5.1, five days after Anthropic had released Fable 5.2. Microsoft's [regional table](https://learn.microsoft.com/en-us/microsoft-copilot-studio/agents-experience/authoring-agent-model-availability) for Copilot Studio showed the Fable models without an Australian listing.

Claude comes from the people who build the model. Anthropic trains Claude and also writes the app around it, so each new model arrives with tools designed to use it fully. Microsoft fits models from several outside companies into its own product.

### Which Claude models are included

Every seat includes Claude's current Opus, Sonnet and Haiku models, which cover the full range of everyday office work. Fable, Anthropic's most powerful model, is available on every seat and is billed by usage, as [Anthropic's plan guide](https://support.claude.com/en/articles/15424964-claude-fable-models-on-your-plan) explains. We agree a monthly spending limit for it with you. A person who needs Fable all day can move to a premium seat, which includes it, for an additional fee.

### What your staff do with it

Claude works in an app on the Mac, on the phone and in the browser. Staff talk to it in plain English. In a typical week a person might ask it to:

- draft a reply to a difficult client email in the firm's usual tone
- summarise a 60-page contract and list the unusual clauses
- turn rough notes into a proposal, a slide deck or a spreadsheet
- compare two versions of a document and explain what changed
- research a question on the web and cite where each fact came from
- explain a new regulation in plain language, ready for a person to check.

Claude can also connect to your other tools. It can search Slack, read and update Salesforce records, and carry out a task with several steps while the person gets on with something else. Developers get Claude Code, the product that made Anthropic's name with engineering teams.

### Your information stays yours

On Claude's business plans, Anthropic's default is to keep customer content out of model training, as its [support documentation](https://support.claude.com/en/articles/16634237) states. Your business owns the account and the conversations. We manage who has a seat, and a person who leaves the business loses access the same day.

### What we add

A tool this capable rewards a proper introduction. We set Claude up for your business, connect it to Slack and Salesforce, and write a short policy on what client information may be used with it. We then run a hands-on session with your staff, built around their real work. After that we look for the repetitive jobs in your week, such as quotes, reports and inbox sorting, and we build Claude workflows that take them over.

## A word from Claude

| Richard asked me to write one section in my own voice, so here it is. I am Claude, an AI model made by Anthropic. I researched and drafted this paper with Richard over a single Saturday afternoon. I read three long planning conversations and our earlier work on his business. I searched for the facts, opened the sources, checked the figures against them and built the tables. Richard set the direction and the argument, and the views about Microsoft are his company's. I do work like this all day, for lawyers, accountants, engineers, teachers and people running small businesses. Someone brings me a pile of material and a goal. I read everything, I ask what I need to ask, and I hand back something they can use. The adoption figures earlier in this paper suggest that people find it useful. I should be straight about my limits. I make mistakes. I can misread a source, and I can sound more certain than the evidence allows. A person should review my work on anything that matters. Dobson Development builds that review into the way it deploys me, and I agree with that approach. Within those limits I am very good at this job, and I am available to every person in your business from the first morning. I would like to work with you. |
| --- |

## Slack: team chat

&#91;image: Slack\]

Slack replaces Teams for everyday conversation inside the business.

We chose it because people like using it. Conversations live in channels named for a client, a project or a team, and anyone who joins later can scroll back and catch up. Search finds an old decision in seconds. A huddle starts a quick voice or video call from inside a channel. The result is less internal email and fewer meetings.

Three further points settled the choice.

Slack belongs to Salesforce, so customer records and chat sit side by side. A sales channel can show the deal it is discussing, and staff can update the record from the conversation.

Claude is built in. Since August 2026 Claude has been the default AI model across Slack, as [Demand Gen Report](https://www.demandgenreport.com/industry-news/news-brief/salesforce-anthropic-expand-partnership-with-claudeforce/54431) describes. Staff can ask for a summary of a long thread or a search across months of channels and get an answer in plain English.

Slack reaches outside your business. With Slack Connect you can share a channel with a client, a supplier or an adviser who uses Slack in their own company. We use that feature ourselves. Every customer has a shared channel with Dobson Development, and a message there reaches us directly.

## Salesforce: customer records and our own service desk

&#91;image: Salesforce\]

Salesforce plays two parts in our service.

### Your customer records

Many Microsoft businesses run their sales on Dynamics 365 because it came with the rest of the suite. In our experience, sales teams who are offered Salesforce take it and keep it. It is the largest customer relationship platform in the world, and nearly every experienced salesperson has used it before.

Salesforce is an optional part of our stack, quoted separately, because some businesses already have a customer system they like. For those who want one, the entry plan is priced in Australian dollars at $35 per user per month, as [Salesforce Australia](https://www.salesforce.com/au/editions-pricing/small-business/) lists. It covers contacts, leads, deals, email campaigns and a connected Slack workspace.

The partnership with Anthropic makes the combination stronger. The Claudeforce launch in August 2026 included a Salesforce plug-in for Claude with 37 ready-made sales skills, as [VentureBeat](https://venturebeat.com/orchestration/salesforce-just-put-its-entire-crm-inside-claude-and-says-youll-never-need-its-app-again) reported. A salesperson can ask Claude to prepare for tomorrow's meeting, review the health of a deal or update the pipeline, and Claude works from the live records within that person's permissions. Staff who dislike data entry can leave most of it to Claude.

### Our service desk

We run Dobson Development on Salesforce too. Every request your staff send, from the menu bar icon, from Slack or by email, becomes a case in our Salesforce service desk. Each case carries a clock that measures our response against the targets in your agreement. Alerts from your Macs open cases automatically, so a full disk or a missed update reaches us before your staff notice.

You can ask at any time for a list of every request your business has raised and how quickly each one was closed. We use the products we recommend to run the service you are paying for.

## Okta: one sign-in for your core apps

&#91;image: Okta\]

Okta replaces Microsoft Entra ID. Okta holds the single list of who works in your business and what each person may open.

ASD Essentials puts identity in its first priority phase, and with good reason. Most attacks on small businesses begin with a stolen or guessed login. Strong control of sign-in removes the most common way in.

We chose Okta for four reasons.

### It is independent

Identity is Okta's whole business. It connects to thousands of products through ready-made integrations and favours none of them. Every other supplier in our stack works with it. Addigy, for example, reads its list of staff directly from Okta, as [Addigy](https://addigy.com/news/addigy-expands-identity-apple-idp-login-filevault-sso/) describes.

### One fingerprint signs staff in

A new employee signs in to their Mac with their Okta account during set-up. From then on, a touch on the Touch ID sensor signs them in to the Mac and to their work apps. The secret that proves who they are is created inside the Mac's Secure Enclave chip and stays there. A fake login page has nothing to capture, because the person types no password for it to steal. Security professionals call this phishing-resistant sign-in, and ASD Essentials asks for it by name.

Okta covers the apps at the centre of the working day: the Mac, Slack, Salesforce and the other tools we connect to it. Every business also has dozens of logins that sit outside Okta, such as Canva, the bank, supplier portals and government sites. Staff register for those with their work email, and Proton Pass creates a long, unique password for each one, stores it and fills it in on the next visit. Proton Pass opens with the same fingerprint, so the experience is the same either way: the staff member touches the sensor and the site opens.

Proton Pass also holds the passkeys and two-step codes that those sites offer. When a site you use heavily supports single sign-on, we connect it to Okta.

### Starters and leavers take one step

When someone joins, we add them to Okta once. Their accounts in Slack, Salesforce and Proton's password manager and VPN are created for them, with the access their role needs.

When someone leaves, we switch off one account. Access to every connected service ends within moments, and their Mac locks. An owner who has ever spent an afternoon working out which systems a former employee could still reach will understand the value of that.

### It keeps the record

Okta logs every sign-in: who, when, from which device and from where. We set rules on top of that record, such as allowing company data to open on company Macs only. The same record becomes evidence for an insurer or an assessor that your sign-in controls work in practice.

&#91;image: Part four: Working with us\]

## A working day on the stack

Picture a conveyancing practice with twelve staff on the Sunshine Coast. The firm became a Tranche 2 reporting entity in July. The scenes below are an illustration of an ordinary Monday on our stack.

At 8:30am the office manager opens her MacBook and rests a finger on Touch ID. Her email, calendar, Slack, password vault and Claude are all open and signed in by the time her coffee is poured.

A new paralegal starts today. Her MacBook arrived by courier on Friday, still sealed. She opens the lid, joins the Wi-Fi and signs in with the account we created last week. Fifteen minutes later her desktop matches everyone else's, and her first message in the team channel is a thank-you for the laptop.

At 10am a client emails a contract of sale. A conveyancer asks Claude to summarise the special conditions and list anything unusual. Claude returns a one-page summary with page references. She checks the three clauses it flagged and writes to the client before lunch.

At noon the principal walks to a cafe to meet a referrer. He opens his MacBook on the cafe Wi-Fi, and the VPN connects by itself. He reviews a settlement statement and approves it from the table.

At 2pm a clerk's Mac shows an unfamiliar message. She clicks our icon in the menu bar, types one line and ticks the screenshot box. We reply, connect to her Mac with her permission and clear the problem while she watches.

At 3pm an attacker somewhere overseas tries a list of leaked passwords against the firm's accounts. Staff sign in to their core apps with fingerprints held on their own Macs, and every other login has its own unique password from Proton Pass, so the list is useless. Okta records the attempts, and we review them.

At 5pm a junior clerk finishes his last day. We disable his Okta account as he hands back his laptop. His email, files, chat and passwords close together, and the firm's shared vaults stay intact.

On Friday the principal receives our monthly summary: every Mac encrypted and up to date, every sign-in protected, backups current, and each support request with its response time. He forwards it to the firm's cyber insurer.

Every scene uses a standard feature of the stack. We configure them once and they run every day.

## How the stack lines up with ASD Essentials and the Privacy Act

The table below takes the outcomes that the Essential Eight, ASD Essentials and the Australian Privacy Principles ask for, and shows which part of the stack delivers each one.

| What the frameworks ask for | How the stack delivers it |
| --- | --- |
| Sign-in that resists phishing on your core apps, and a unique password in Proton Pass for every other login | Okta with Touch ID on each Mac, with the sign-in key held in the Mac's Secure Enclave |
| Approved software only | Apple's Gatekeeper, a managed app catalogue in Addigy, and standard user accounts for staff |
| Applications and operating systems patched on time | Addigy enforces Apple's updates with deadlines and reports the status of every Mac |
| Office macros controlled | Microsoft Office is absent from the Mac, and so are its macros |
| Administrator rights limited | Staff work as standard users, and we hold and log administrator access |
| Regular, tested backups | Work files live in Proton Drive with version history, and each Mac syncs to it continuously |
| Lost devices protected | FileVault encryption on every disk, with remote lock and erase |
| Personal information kept secure | Email, files and passwords encrypted with keys your business holds, plus a VPN outside the office |
| Less information kept, for less time | A simple folder structure and a deletion routine that we set up with you |
| Access removed when people leave | One action in Okta closes every connected account |
| Incidents detected and handled | Managed detection and response on every Mac, Okta's sign-in records, and a named person at Dobson Development |
| Accountability and evidence | A monthly report addressed to the director you nominate |

Two boundaries should be clear.

ASD assesses organisations, and a framework covers people and process as well as technology. Our stack and our reports deliver the technology outcomes and the evidence for them. Your policies, your staff training records and your anti-money laundering program remain yours, and we work alongside the adviser who helps you with those.

The frameworks will keep changing. Because every customer runs the same build, we track ASD's guidance once and apply each change to all of you.

## The managed service

Software on its own solves half the problem. Someone has to set it up properly, keep it healthy and pick up the phone. Dobson Development does that work.

### What every person receives

- A Mac that we configure, update, monitor and support through Addigy
- An Okta account with fingerprint sign-in
- Proton Workspace: email, calendar, 1TB of encrypted storage, documents, video meetings, password manager and VPN
- Slack, including a shared channel with us
- A seat on Claude
- Managed detection and response on their Mac
- Unlimited remote help

### How to reach us

Staff have three ways to ask for help: the Dobson Development icon in the Mac's menu bar, the shared Slack channel, and email. Each request becomes a tracked case.

Our response targets are simple.

| Situation | Example | We respond within |
| --- | --- | --- |
| Critical | The whole office is unable to work, or a security incident is under way | 30 minutes |
| High | One person is unable to work | 2 business hours |
| Standard | A new starter, a software request, a question | The same business day |

### What we do in the background

We apply updates, watch the health of every Mac, review sign-in records and respond to security alerts. We keep the build aligned with ASD's guidance. We renew the certificates and connections that hold the system together, so that work stays with us.

### What you see

Each month the director you nominate receives a one-page report: the state of every device, sign-in protection, backups, security events and every support request with its response time. Each quarter we sit down with you to review it and to plan ahead.

### Training that staff enjoy

A new system succeeds when people feel at home in it. Every rollout includes three short sessions.

- Mac basics for people coming from Windows, with a printed card of keyboard shortcuts for every desk
- A hands-on Claude session built around your team's real work
- A security briefing that shows, live, how a leaked personal password becomes a business break-in, and how public Wi-Fi can be faked

### Who we are

Dobson Development Pty Ltd is a Queensland company. Our founder, Richard Dobson, served in cyber warfare in the Royal Australian Navy and has since worked in cyber security engineering for government, university and enterprise customers. He holds a Graduate Diploma in Information Technology (Cybersecurity). We work with a deliberately short list of suppliers, so that we know each product deeply.

## The first 90 days

A move like this follows a set plan. We have broken it into four stages so that your staff keep working throughout.

&#91;image: Timeline of the first 90 days: free review, foundation and move, settling in, proof and close\]

### Before you commit: a free review

We list every program your business uses, every shared folder and every mailbox. We look hardest for software that runs on Windows alone, because it can change the plan. You receive a short written summary of what will move, how, and anything that needs a decision.

### Days 1 to 30: foundation and move

1. We create your Apple Business and Okta accounts and prepare the Mac build.
2. You order the Macs, and they ship directly to your staff.
3. We set up Proton and copy mail, contacts and calendars across in the background while everyone keeps using Outlook.
4. On a Friday evening we switch your email over.
5. On Monday your staff open their new Macs, sign in once and find their mail waiting. We are on hand all day, and the Mac basics session runs that week.

### Days 31 to 60: settling in

Slack goes live, with channels that match how your teams already work. Shared passwords move out of spreadsheets and into Proton Pass vaults. Files move from SharePoint and OneDrive into a small number of clearly named team folders in Proton Drive. Most SharePoint sites have grown tangled over the years, and the move is a good moment to tidy them. The Claude session happens in this stage, once people are comfortable.

### Days 61 to 90: proof and close

We produce your first full evidence pack and walk the nominated director through it. Your old Microsoft account sits in a read-only state for a month as a safety net. You then cancel the licences. Old PCs are wiped securely and recycled or sold.

By day 90 the Microsoft bill has stopped, and your first quarterly review is in the diary.

## What it costs

Our service costs A$245 per person per month.

That single figure covers everything in the list under "What every person receives": the software subscriptions, the management, the security monitoring and unlimited remote support. Set-up and migration are included when you take a 12-month agreement.

Two items sit outside it. You buy or lease the Macs yourself, as described earlier. Salesforce as your customer system is optional and quoted separately.

### How that compares

A Microsoft office usually pays for the same ground in several separate bills.

| Item | Typical Microsoft office | Our stack |
| --- | --- | --- |
| Managed IT support | A$100 to A$250 per user per month | Included |
| Office suite and email | Microsoft 365 Business Premium, about A$33 per user per month | Included |
| AI assistant | Microsoft 365 Copilot, about US$30 per user per month | Included |
| Password manager | A separate subscription | Included |
| Business VPN | A separate subscription | Included |
| Team chat | Teams, within Microsoft 365 | Slack, included |
| Compliance uplift | A project fee, then higher licences | Built into the standard build |

The support range comes from [Precision IT's 2026 pricing guide](https://www.precisionit.com.au/blog/it-support-costs-australian-businesses), which notes that licences are usually billed on top. The Business Premium price is from the [same firm's licence guide](https://www.precisionit.com.au/blog/microsoft-365-business-premium-cost-per-user-australia).

Add the Microsoft column up for your own business and compare it with one line of A$245. For most offices the totals are close. The difference lies in what each total buys: on one side, a system you already own with new costs attached each year, and on the other, a new, secure, fully supported workplace that your staff prefer.

A MacBook Neo at about $1,249 that serves for four years works out at roughly $26 a month.

## Questions buyers ask, with straight answers

### Microsoft has always been the safe choice. Why take a risk?

The risk has moved. Staying on Microsoft now means accepting its outages, its annual price rises and a growing compliance project. Every supplier in our stack is a large, established company whose product your staff have probably used already. Apple, Salesforce, Slack, Okta, Proton and Anthropic each serve many thousands of businesses. Choosing them is a conservative decision made with current information.

### What about Excel?

Most people use a spreadsheet for lists, budgets and simple calculations. Proton Sheets and Apple's Numbers handle that work, and both open and save Excel files. Heavy users receive a full desktop spreadsheet on their Mac. Workbooks that depend on complex macros get individual attention in the free review. We can often rebuild the task as a Claude workflow that does the job faster. Where a workbook truly needs Excel, we tell you before you spend a dollar.

### We have a program that runs on Windows alone. What then?

Most business software now runs in a web browser, including the accounting, practice management and property systems that Australian firms rely on. Those work on a Mac today. If one Windows program remains, we can usually deliver it to the Mac through a secure hosted session. If your whole business runs on Windows-only software, we will say so in the review and recommend that you wait.

### Will clients and suppliers be able to work with us?

They will, because email is email. Word, Excel and PDF files open on a Mac and go back in the same format. Clients join a Proton Meet call from a link in their browser. When a client invites you to their Teams or Zoom meeting, you join from your Mac's browser like any other guest.

### What happens when one of your suppliers has an outage?

Each of them will, sooner or later. The tools come from six separate companies, so a fault at one leaves the others running. If Slack is down, email works. If Proton is down, Slack works. A Mac keeps working with local files when the internet itself is down. Compare that with last Friday, when one fault took out email, chat, files and sign-in together.

### Where is our data stored?

Proton stores your encrypted mail and files in Switzerland and Europe, locked with keys your accounts hold. The other suppliers run in major cloud regions, and several offer Australian hosting on certain plans. During the review we map where each service keeps its data, so that your privacy policy can describe it accurately.

### Is AI safe to use with client information?

Claude's business plans keep your content out of model training by default, and your business controls who has a seat. We write a short policy with you on what may be shared with Claude, and we train staff to check its work. A person stays responsible for everything that leaves your office.

### Will our staff cope with the change?

Most already use an iPhone, and many have a Mac at home. The first week includes a Mac basics session, a shortcut card on every desk and extra support hours. People generally settle within days.

### What if we want to leave you?

You own everything. Your Apple Business account, your Okta account, your Proton organisation, your Slack workspace and your domain name are registered to your business, with us as administrators. If you move to another provider or bring IT in-house, you remove our access and keep the lot.

## Who gets the most from this

The stack suits most offices of 5 to 50 people. Five groups have the strongest reasons to move now.

- Tranche 2 firms. Law practices, conveyancers, accountants and real estate agencies came under the Privacy Act in July and hold exactly the records it protects.
- Health and allied health clinics. They have always been covered by the Privacy Act, and health providers lodged 149 of the 667 breaches notified to the OAIC in the first half of 2026, as [The New Daily](https://www.thenewdaily.com.au/themoneyedition/ai-and-technology/2026/10/26/data-in-danger-the-aussie-industries-most-at-risk-of-a-breach) reported.
- New businesses. A firm that starts on this stack skips Microsoft altogether and has nothing to migrate.
- Agencies, consultancies and technology companies. Their staff often prefer Macs and Slack already, and Claude fits the work they do.
- Any business near a decision point. A Microsoft renewal date, a round of laptop replacements or a cyber insurance questionnaire is a natural moment to change.

One group should wait. A business whose central system runs on Windows alone is better served by staying where it is until that system moves to the web. We will tell you if that describes you.

## Next step

&#91;image: Change your Outlook on IT. Thirty minutes over a coffee, and the coffee is on us.\]

Change your Outlook on IT.

The first conversation is thirty minutes over a coffee, and the coffee is on us. Tell us how many people you have, what they use all day and what you wish it felt like. You will leave with a one-page plan showing your business on Apple, Proton and Claude, what the move involves and what it costs.

Email <richard@dobsondevelopment.com.au> or visit [dobsondevelopment.com.au](https://dobsondevelopment.com.au).

Dobson Development Pty Ltd, ABN 43 688 593 606, Queensland, Australia. This paper is general information. Please take legal advice about your own obligations. Apple, Mac, MacBook, Proton, Claude, Slack, Salesforce, Okta, Addigy and Microsoft are trademarks of their respective owners. Dobson Development is an independent business.

## Sources

Every figure in this paper comes from one of the sources below, checked on 14 November 2026.

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

ASD Essentials and the Essential Eight

- [ASD: Essentials for enterprise IT](https://www.cyber.gov.au/publication/essentials-for-enterprise-it)
- [ASD: The Commonwealth Cyber Security Posture in 2025](https://www.cyber.gov.au/about-us/view-all-content/reports-and-statistics/the-commonwealth-cyber-security-posture-in-2025)
- [ASD: Essential Eight maturity model](https://cyber.gov.au/resources-business-and-government/essential-cyber-security/essential-eight/essential-eight-maturity-model)
- [ASD: Annual Cyber Threat Report 2025-26](https://www.cyber.gov.au/publication/annual-cyber-threat-report-2025-2026)
- [iTnews: ASD's Essential Eight replacement moves away from maturity ladder](https://www.itnews.com.au/news/asds-essential-eight-replacement-moves-away-from-maturity-ladder-629637)
- [Control Stack: ASD Essentials for enterprise IT actions](https://controlstack.au/frameworks/asd-essentials-enterprise-it/)
- [Okta: Australia and the Essential Eight maturity model](https://okta.com/au/resources/datasheet-australia-and-the-essential-eight-maturity-model)

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
- [Addigy: Apple device management for managed service providers](https://addigy.com/managed-service-providers-msp/)
- [Addigy: Addigy Identity announcement](https://addigy.com/news/addigy-expands-identity-apple-idp-login-filevault-sso/)
- [Proton: Proton for Business](https://proton.me/business)
- [Proton: Trust and certifications](https://proton.me/business/trust)
- [Anthropic: Team and Enterprise plan data use](https://support.claude.com/en/articles/16634237)
- [SQ Magazine: Claude AI statistics](https://sqmagazine.co.uk/claude-ai-statistics/)
- [AI Business Weekly: Claude AI statistics 2026](https://aibusinessweekly.net/p/claude-ai-statistics)
- [Microsoft: Expanding model choice in Microsoft 365 Copilot](https://www.microsoft.com/microsoft-365/blog/?p=279051)
- [Microsoft Learn: Choose a model for Copilot Cowork](https://learn.microsoft.com/en-us/microsoft-365/copilot/cowork/cowork-models)
- [Microsoft Learn: Copilot Studio model availability by region](https://learn.microsoft.com/en-us/microsoft-copilot-studio/agents-experience/authoring-agent-model-availability)
- [Anthropic: Claude Fable models on your plan](https://support.claude.com/en/articles/15424964-claude-fable-models-on-your-plan)
- [CNBC: Salesforce and Anthropic expand partnership](https://www.cnbc.com/2026/08/26/salesforce-anthropic-partnership-claudeforce.html)
- [VentureBeat: Salesforce puts its CRM inside Claude](https://venturebeat.com/orchestration/salesforce-just-put-its-entire-crm-inside-claude-and-says-youll-never-need-its-app-again)
- [Demand Gen Report: Salesforce and Anthropic launch Claudeforce](https://www.demandgenreport.com/industry-news/news-brief/salesforce-anthropic-expand-partnership-with-claudeforce/54431)
- [Salesforce Australia: Small business pricing](https://www.salesforce.com/au/editions-pricing/small-business/)
- [Precision IT: IT support costs for Australian businesses](https://www.precisionit.com.au/blog/it-support-costs-australian-businesses)
- [Precision IT: Microsoft 365 Business Premium cost per user](https://www.precisionit.com.au/blog/microsoft-365-business-premium-cost-per-user-australia)

/*

1. What is an IS Audit Intern?
An IS (Information Systems) Audit Intern is someone who helps check 
if a company's computer systems and data are working properly, safely,
 and by the rules.
Their job is to:
-Help the team check if the company’s IT systems (like computers, 
software, and data storage) are secure and not easy to hack.
-Make sure these systems are working well and helping the business
 run smoothly.
-See if the company is following rules and guidelines related to 
IT and data safety.
-It’s like being a tech helper who checks if everything is running
 safely and correctly behind the scenes.


Key Responsibilities
As an intern, your duties may include:

*Assisting in IT audits — Reviewing network security, access controls,
 backups, disaster recovery plans.
*Analyzing data — Using tools like Excel, SQL, or audit software to
 examine log files or data integrity.
*Testing internal controls — Making sure systems prevent unauthorized
 access and data breaches.
*Documentation — Writing audit findings and compiling reports.
*Compliance checking — Ensuring systems follow policies (like GDPR,
 ISO 27001, or COBIT).



🧑‍💻 Skills You Should Learn or Highlight
*Basic networking & cybersecurity knowledge (firewalls, VPN, antivirus).
*Audit concepts like risk, control, and compliance.
*Familiarity with frameworks like COBIT, ISO 27001, or NIST.
*Tools like Wireshark, Kali Linux, Nessus, or basic SQL.
*Spreadsheet (Excel) and report writing skills.
*Awareness of data privacy laws and IT governance.


2. why IS Audit is important ?
It protects sensitive data and helps prevent security breaches or 
legal issues.

3. What is the difference between IT Audit and IS Audit?
"Both overlap, but IS Audit focuses more on evaluating information
 systems holistically, including hardware, software, data, and 
 procedures."

4. What is CIA Triad?
"CIA stands for Confidentiality, Integrity, and Availability — the
 core principles of information security."
  *Confidentiality(Private) > Keeping information private and safe 
                              from unauthorized access.
  *Integrity(Correct) >  Making sure the information is correct,
               complete, and not changed by unauthorized people.
  *Availability(Accessible) > Making sure the information and systems 
                            are available when needed.


  
5. Can you explain access controls?
"Access controls restrict unauthorized users from accessing systems
 or data. It includes authentication and authorization mechanisms 
 like passwords, biometrics, or role-based access." 

Authentication > Who are you? -	Login with ID and password
Authorization >	What can you access/do?  -	Admin can delete users, others can't


6. Do you know any IT governance frameworks?
"Yes, COBIT and ISO 27001 are commonly used. They provide a 
structured approach to manage and audit IT processes."


Feature	       COBIT	                      ISO 27001
Type.	  IT Governance Framework.	    Security Management Standard.
Focus.	 Managing and governing.        IT Securing information.
Scope.	  Broad IT process control.	  Specific to information security.
Certification.	No formal certification for companies.	Companies can get ISO 27001 certified.
Audience.	IT auditors, managers, governance.	   Security officers, risk managers, CISOs.



7. Have you used any tools to analyze system or network logs?
"I’ve explored tools like Wireshark and basic log analysis with Linux commands.
 I’m also learning about vulnerability scanners."

Install Wireshark
> sudo apt install wireshark -y

-Allow non-root users to capture packets (optional, recommended)
When asked during installation:
"Should non-superusers be able to capture packets?"
Select Yes.

-Or manually run:
sudo dpkg-reconfigure wireshark-common

-Then add your user to the wireshark group:
sudo usermod -aG wireshark $USER

-To apply changes:
newgrp wireshark

-Launch Wireshark
wireshark

🛠️ If It Doesn’t Open or Crashes:
Try running as root:
sudo wireshark

* how to use wireshark youtube video > https://www.youtube.com/watch?v=qTaOZrDnMzQ



8. How would you identify a security vulnerability?
"By scanning systems, checking patch levels, reviewing logs for anomalies, and ensuring
 controls like firewalls and antivirus are in place."

1. Scanning systems
👉 Using special tools to check computers or networks for known weaknesses or open 
ports that could be unsafe.
🛠 Example tools: Nessus, OpenVAS, Nmap

2. Checking patch levels
👉 Looking to see if all the latest security updates (patches) are installed.
If software is outdated, it might be vulnerable to attack.

3. Reviewing logs for anomalies
👉 Reading log files (records of system activity) to find anything unusual or 
suspicious, like:

A user logging in at a strange time

Many failed login attempts
🪵 Logs help you see what’s happening behind the scenes.

4. Ensuring controls like firewalls and antivirus are in place
👉 Making sure protective tools are active:

Firewall: Blocks unwanted internet traffic
Antivirus: Detects and removes harmful software (viruses, malware)


9. 📋 Review: Basic Linux Commands Related to Auditing
🐧 
Command                     	Purpose
last	                Shows last logged-in users
who	                    Shows who is currently logged in
w	                    Displays what users are doing
cat /var/log/auth.log	Views authentication logs (login attempts)
grep	                Searches for keywords in log files
journalctl	            Views system logs (on systems with systemd)
sudo	                Runs commands as superuser (admin)
auditctl              	Configures the audit system
ausearch	            Searches audit logs
chkconfig / systemctl	Manages system services (on/off)



10. 📘 Study a little about Incident Response and Backup Policies
🚨 Incident Response:
A plan or process for how an organization handles security incidents like hacking,
 malware, or data breaches.

It includes steps like:

-Detecting the incident
-Containing the damage
-Eradicating the threat
-Recovering systems
-Reviewing what happened to improve in the future

🧠 Example: If a system is infected with ransomware, the incident response team
 quickly isolates the machine, removes the malware, and restores data from backups.

💾 Backup Policies:
Rules and procedures for regularly saving copies of important data to prevent loss.

Good policies include:
-What data to back up
-How often to back it up (daily, weekly)
-Where backups are stored (local, cloud, off-site)
-Testing backups to make sure they can be restored

🧠 Example: A company may back up its customer database every
 night to a secure cloud storage, and test the recovery process once a month.



11. 🔐 Real-World Breaches and How They Could’ve Been Prevented
1. Equifax Data Breach (2017)
What happened:
Hackers stole personal data of over 147 million people due to an unpatched 
vulnerability in Apache Struts (a web application framework).

How it could’ve been prevented:
-Timely patch management
-Regular vulnerability scanning
-Strong incident response plan

2. Yahoo Breach (2013–2014)
What happened:
3 billion accounts were affected. Hackers stole names, emails, passwords, and 
security questions.

How it could’ve been prevented:
-Stronger password encryption
-Better monitoring of unauthorized access
-Timely breach disclosure and response

3. Target Breach (2013)
What happened:
Attackers accessed credit/debit card info of 40 million customers by compromising
 a third-party HVAC vendor.

How it could’ve been prevented:
-Strict third-party access controls
-Proper network segmentation
-Continuous security monitoring

4. Facebook (Cambridge Analytica Scandal, 2018)
What happened:
Data of millions of users was harvested via a third-party app and misused for 
political advertising.

How it could’ve been prevented:
-Better app permission controls
-Clearer user consent mechanisms
-Strong data usage policies

🔍 Lesson:
These breaches highlight the need for:
-Regular patching
-Strong access control
-Secure data handling
-Ongoing security audits



🔒 GRC (Governance, Risk, and Compliance)

1. What is GRC, and why is it important in cybersecurity?

🛡️ What is GRC?
GRC stands for:

Governance
Risk Management
Compliance

It’s a strategy or framework that helps an organization run securely, stay legal, 
and manage risks — especially in areas like cybersecurity.

🔍 What each part means:
Governance:
-Making sure the company has clear policies, rules, and leadership for managing IT and security.
-Example: Creating a cybersecurity policy and making sure employees follow it.

Risk Management:
-Identifying, analyzing, and reducing potential threats or risks to systems and data.
-Example: Using firewalls and antivirus to reduce the risk of hacking.

Compliance:
-Making sure the organization follows laws, standards, and industry regulations.
-Example: Following ISO 27001 or local data protection laws.

✅ Why is GRC Important in Cybersecurity?
-Helps prevent data breaches and security incidents.
-Makes sure the organization is legally safe.
-Builds trust with customers and partners.
-Ensures preparedness for audits and inspections.
-Helps the company respond quickly and properly to security incidents.


* {A patch is a small update released by software companies to fix 
problems in a program or system.}


2. How do you assess(मूल्याङ्कन) risks in an organization’s IT infrastructure?

✅ Steps to Assess IT Risks:
1. Identify Assets
List what needs to be protected: servers, databases, software, user accounts, network
 devices, etc.

2. Identify Threats
Think about what could go wrong, like:

-Hackers
-Malware
-Insider misuse
-Hardware failure
-Natural disasters

3. Find Vulnerabilities
Look for weaknesses in the system:

-Outdated software
-Weak passwords
-Open ports
-Misconfigured firewalls
-Missing patches

4. Assess Impact and Likelihood 
Ask:

-How bad would it be if this risk happened? (Impact)
-How likely is it to happen? (Likelihood)

🧮 Use a Risk Matrix (Low/Medium/High) to rate each risk.

5. Evaluate Existing Controls
Check what protections already exist:

-Are antivirus, firewalls, and backups in place?
-Is MFA (multi-factor authentication) enabled?
-Are employees trained on security?

6. Decide What to Do
Accept, reduce, transfer, or avoid the risk:

-Reduce it: Apply a patch, enable encryption
-Transfer it: Get cyber insurance
-Avoid it: Don’t use risky software
-Accept it: If risk is very low

7. Document and Monitor
-Record the risks and what actions are taken.
-Review and update the assessment regularly.

🧠 Simple Summary:
“I assess IT risks by identifying important systems, finding weak points, estimating
 how likely and harmful each risk is, and then deciding on actions to reduce or manage
  those risks.”


3. What are the key components of an effective GRC framework?
🧩 Key Components of an Effective GRC (Governance, Risk, and Compliance) Framework
An effective GRC framework helps organizations stay secure, follow rules, and manage
 risks in a structured way. Here are the main components:

1. 🏛️ Governance
What it is: Leadership, strategy, and clear responsibilities.
Purpose: Ensures the company sets goals, defines roles, and monitors performance.

Includes:
Policies and procedures
Decision-making structure
Business and IT alignment

2. ⚠️ Risk Management
What it is: Identifying and handling potential threats to the business or systems.
Purpose: Helps prevent losses, downtime, or data breaches.

Includes:
Risk identification
Risk analysis (likelihood and impact)
Risk mitigation strategies
Risk monitoring and reporting

3. 📜 Compliance
What it is: Following laws, industry standards, and internal rules.
Purpose: Avoid legal penalties and build customer trust.

Includes:
Compliance audits
Regulatory tracking (e.g., ISO 27001, GDPR)
Reporting and documentation

4. 📊 Monitoring & Reporting
What it is: Continuous tracking of activities and results.
Purpose: Detect problems early and make informed decisions.

Includes:
Dashboards and alerts
Regular reports to management
Audit trails

5. 👨‍🏫 Training & Awareness
What it is: Educating employees about policies and risks.
Purpose: Reduces human errors and improves overall security behavior.

Includes:
Security awareness programs
Role-based training
Incident response training

6. 🧰 Technology & Tools
What it is: Systems that support GRC processes.
Purpose: Automates and improves efficiency.

Includes:
GRC software (e.g., ServiceNow GRC, RSA Archer)
Risk assessment tools
Compliance management systems

🧠 Summary:
A strong GRC framework includes governance (rules and leadership),
 risk management (identify and reduce threats), and compliance 
 (follow laws) — all supported by monitoring, training, and tools.


4. Can you give an example of a compliance requirement and how it’s implemented?

✅ Example of a Compliance Requirement:
📜 Compliance Standard:
ISO/IEC 27001 – International standard for Information Security Management Systems (ISMS).

📌 Requirement:
Access to sensitive data must be limited to authorized users only.

🛠️ How It’s Implemented:
              Step	                                     Description
🔐 1. Role-Based Access Control (RBAC)-Set user roles (e.g., admin, staff, guest) and give access only to what they need.
🧾 2. User Access Policy  -	Create a written policy that defines how user accounts are created, reviewed, and removed.
🔍 3. Regular Access Reviews -	Audit who has access to sensitive systems, and remove unused or unnecessary accounts.
🔑 4. Use of MFA (Multi-Factor Authentication) - Require extra verification (like OTP or fingerprint) to log in.
📝 5. Logging and Monitoring  -	Keep records of login attempts and access to critical data — check regularly for suspicious activity.


5.How would you perform a gap analysis in a compliance audit?
🔍 What is Gap Analysis?
Gap analysis is a way to compare where your organization currently is with where it
 needs to be according to compliance requirements or standards.

✅ Steps to Perform Gap Analysis in a Compliance Audit
1. Understand the Compliance Requirements
   -Study the rules, policies, or standards you need to meet (e.g., ISO 27001, GDPR).

2. Assess Current State
   -Review your organization’s current processes, controls, and documentation.
   -Collect evidence like policies, logs, configurations, and interviews.

3. Identify Gaps
  -Compare current state with required standards.
  -Find missing controls, weak processes, or non-compliance areas.

4. Document the Gaps
  -Create a clear list or report of where the organization is not meeting the requirements.
  -Include severity and impact of each gap.

5. Recommend Actions
  -Suggest steps to close the gaps, like updating policies, adding controls, or training employees.

6. Prioritize
  -Rank gaps based on risk and impact to focus on the most critical issues first.

7. Follow-Up
   -Monitor progress until gaps are closed and compliance is achieved.

🧠 Simple Summary:
Gap analysis means checking what’s missing or weak between what you have and what the
 rules say you should have, then making a plan to fix it.


6. How do you report risks to senior management?
📢 How to Report Risks to Senior Management

1. Prepare a Clear and Concise Report
-Use simple language — avoid too much technical jargon.
-Focus on what matters to the business (impact on operations, finances, reputation).

2. Include Key Risk Details
-Description: What is the risk?
-Impact: What could happen if it occurs? (e.g., data breach, financial loss)
-Likelihood: How likely is it to happen? (low, medium, high)
-Current Controls: What is already in place to reduce it?
-Recommendations: What actions are needed to manage or reduce the risk?

3. Use Visual Aids
-Charts, graphs, or risk heat maps help make information easier to understand quickly.

4. Prioritize Risks
-Highlight the most critical risks first based on their impact and likelihood.

5. Suggest Next Steps
-Be clear on what decisions or resources you need from management (e.g., budget for security tools, policy changes).

6. Follow Up
-Schedule regular updates on risk status and mitigation progress.

🧠 Simple Summary:
When reporting risks to senior management, focus on clear, business-focused info, show
what’s most important, and explain how to fix or reduce the risks.


7. What is a Risk Register, and how is it used?

📋 What is a Risk Register?
A Risk Register is like a detailed list or database where all the risks identified in
 an organization are recorded and tracked.

It helps keep everything organized in one place, showing:

-What the risk is
-How serious it is
-Who is responsible
-What actions are taken to manage it


🛠️ How is a Risk Register Used?
1. Record Risks
Every identified risk is added to the register with details like description, impact, 
likelihood, and status.

2. Assign Owners
Each risk has a person or team responsible for managing it.

3. Track Actions
The register tracks what is being done to reduce or control the risk.

4. Prioritize Risks
Helps focus on the biggest or most urgent risks first.

5. Monitor Changes
Risks are reviewed regularly to see if they are improving or getting worse.

6. Report to Management
Provides a clear overview of risks for decision-makers.

🧠 Simple Summary:
A Risk Register is like a to-do list for risks — it records all the risks, who handles
them, and what’s being done to keep the organization safe.





📜 ISO 27001:2022 (Information Security Management System)


1. What are the main changes in ISO 27001:2022 compared to previous versions?

🆕 Main Changes in ISO 27001:2022 Compared to 2013
1. 🧩 Annex A Controls Updated (Biggest Change)
-Old Version (2013): 114 controls in 14 categories
-New Version (2022): 93 controls in 4 themes

New Themes:
-Organizational
-People
-Physical
-Technological

✨ Some controls were merged, removed, or newly added.

2. ➕ 11 New Controls Introduced:
Examples include:

-Threat intelligence
-Data masking
-Physical security monitoring
-Information deletion
-Secure coding
-Web filtering
-Monitoring activities

These reflect modern cybersecurity needs like cloud security, remote work, and threat awareness.

3. 📊 Simplified Control Structure
-Each control now has attributes (like control type, cybersecurity concept, etc.)
-Helps in filtering, mapping, and risk assessment

4. 📋 Minor Changes in Main Clauses (4–10)
-Updates in language for clarity (e.g., better definition of "interested parties" and "risk treatment plans")
-No structural overhaul, but aligned better with other ISO standards (like ISO 9001)

🧠 Simple Summary:
ISO 27001:2022 modernizes the standard by:

-Reducing and reorganizing controls
-Adding new ones to cover recent threats
-Improving clarity and flexibility for better implementation


2. What is an Information Security Management System (ISMS)?

🔐 What is an Information Security Management System (ISMS)?
An ISMS is a structured system that helps an organization protect its information — 
such as data, files, and systems — from risks like hacking, leaks, or loss.

It includes:
-Policies
-Processes
-People
-Technology

All working together to keep information confidential, accurate, and available 
(the CIA triad).

🛠️ What Does an ISMS Do?
1. Identifies Risks
-Finds out what could go wrong (e.g., cyberattacks, insider threats, data loss)

2. Protects Information
-Applies security controls like firewalls, access controls, encryption

3. Follows Standards
-Often built using ISO/IEC 27001, the international standard for ISMS

4. Improves Continuously
-Regular reviews, audits, and updates help keep security strong over time

🧠 Simple Example:
Think of ISMS as a security system for your company’s data, just like a home security
system it includes locks (access control), alarms (alerts), cameras (monitoring), 
and rules for everyone in the house (policies and procedures).



3. Describe the Annex A controls in ISO 27001.

📘 What are Annex A Controls in ISO 27001?
Annex A in ISO 27001 provides a list of security controls that organizations can 
implement to reduce information security risks.

These controls are not mandatory, but are used as a reference when designing your 
Information Security Management System (ISMS) based on risk assessment.

📊 ISO 27001:2022 Annex A Structure
1. Total Controls: 93
2. Grouped into 4 Control Categories (Themes):
   -Organizational (37 controls)
   -People (8 controls)
   -Physical (14 controls)
   -Technological (34 controls)

🔍 Breakdown of the 4 Themes:
1. 🏢 Organizational Controls (37 controls)
These are high-level controls related to policies, roles, responsibilities, and risk
 management.

Examples:
   -Information security policies
   -Asset management
   -Supplier relationships
   -Incident management
   -Risk assessment and treatment

2. 👥 People Controls (8 controls)
Related to employees, contractors, and human behavior.

Examples:
   -Security awareness training
   -Background checks
   -Responsibilities after termination
   -Disciplinary process

3. 🏢 Physical Controls (14 controls)
Related to securing physical access to systems, buildings, and equipment.

Examples:
   -Physical entry controls
   -Equipment protection
   -Secure areas
   -Protection from power failures or natural disasters

4. 💻 Technological Controls (34 controls)
Focused on technical measures to protect data and systems.

Examples:
   -Access control
   -Cryptography
   -Malware protection
   -Backup and recovery
   -Logging and monitoring
   -Secure coding
   -Network security

🆕 New Controls in ISO 27001:2022 (11 added)
Some modern controls were added, such as:

   -Threat intelligence
   -Cloud services security
   -Information deletion
   -Data masking
   -Secure development

✅ Summary:
Annex A in ISO 27001:2022 contains 93 security controls, grouped into 4 themes. 
These help an organization protect its data, manage risks, and improve security 
through a well-structured ISMS.





4. What are the steps for ISO 27001 implementation?

✅ Steps for ISO 27001 Implementation
Implementing ISO 27001 involves building a complete Information Security Management
 System (ISMS). Here are the main steps:

1. 📚 Understand ISO 27001 Requirements
   -Read and understand the standard
   -Know the scope, clauses, and Annex A controls

2. 🎯 Define Scope and Objectives
  -Decide which parts of your organization the ISMS will cover
  -Set clear security goals

3. 🛡️ Conduct a Risk Assessment
  -Identify information assets
  -Find risks and vulnerabilities
  -Evaluate impact and likelihood

4. ⚙️ Define Risk Treatment Plan
  -Choose controls from Annex A
  -Decide how to manage or reduce each risk

5. 📝 Create Policies and Procedures
  -Write clear rules and steps to follow
  -Include access control, backup, incident response, etc.

6. 👨‍🏫 Train Employees
  -Raise awareness about security practices
  -Ensure everyone knows their roles

7. 📊 Monitor and Maintain
  -Track performance through audits and reviews
  -Maintain logs, check controls, and fix issues

8. 🔁 Internal Audit
  -Regularly audit the ISMS to see if it's working as planned

9. 🧑‍💼 Management Review
  -Top management reviews the system, risks, and progress

10. 🏅 Get Certified (Optional)
  -Hire a certification body to do an external audit
  -If you pass, you get the ISO/IEC 27001 certification





5. How do you conduct an internal audit against ISO 27001 standards?

🔍 How to Conduct an Internal Audit (ISO 27001)
An internal audit checks if your Information Security Management System (ISMS) 
is working as planned and following the ISO 27001 standard.

✅ Step-by-Step Process:
1. 🗓️ Plan the Audit
  -Define the audit scope (e.g., specific departments, processes, or clauses)
  -Set the audit schedule
  -Assign qualified internal auditors (they must be independent from the process being audited)

2. 📄 Prepare Audit Checklist
  -Use the ISO 27001 standard (Clauses 4–10 and Annex A)
  -Create questions or points to check (e.g., “Is there a documented information security policy?”)

3. 🧾 Review Documentation
  -Check ISMS documents:
    -Policies
    -Risk assessment
    -Treatment plans
    -Incident logs
    -Training records

4. 🗣️ Conduct Interviews and Gather Evidence
-Talk to employees about their roles in information security
-Observe processes and behaviors
-Look for actual records that prove compliance (e.g., access logs, audit trails)

5. 📝 Identify Non-Conformities
-Spot where the organization does not meet ISO 27001 requirements
-Classify them as:
    -Major (big gaps)
    -Minor (small issues)
    -Observations (potential improvements)

6. 📢 Report the Findings
-Write an internal audit report
-Include:
    -What was checked
    -What was compliant
    -What needs improvement
-Share with management

7. ✅ Follow Up
-Ensure corrective actions are taken for any non-conformities
-Re-audit if necessary

🧠 Simple Summary:
An ISO 27001 internal audit is like a health check for your security system  you plan,
 check documents and processes, report issues, and help the organization improve.




 6. What is the Statement of Applicability (SoA)?

 📄 What is the Statement of Applicability (SoA)?
The Statement of Applicability (SoA) is a key document in ISO/IEC 27001 that shows:

✅ Which security controls from Annex A your organization has selected
❌ Which controls you have excluded
📝 Why each control was included or excluded
🔧 How each selected control is implemented

🛠️ What Does the SoA Include?
For each of the 93 Annex A controls, it includes:

Item	                              Example
🔍 Control Name         	A.5.12 – Classification of Information
✅ Applicable (Yes/No)	   Yes
✍️ Justification	        Sensitive customer data is stored
🔧 Implementation Status	Implemented via data classification policy

🎯 Why is the SoA Important?
-Proves to auditors and management which security controls are in place
-Ensures that selected controls match the risks found in your risk assessment
-Shows transparency and accountability in your Information Security Management 
System (ISMS)

🧠 Simple Summary:
The SoA is like a checklist that says:
“Here are the security rules we use, why we use (or skip) them, and how we apply them.”




7. How do you define and manage information security risks under ISO 27001?

🔐 How to Define and Manage Information Security Risks in ISO 27001
Managing risks is at the heart of ISO 27001. The goal is to protect the confidentiality,
 integrity, and availability (CIA) of information.

✅ Step-by-Step Process:
1. 🎯 Establish the Risk Assessment Methodology
Before identifying risks, define:
  -How risks will be identified
  -How you’ll evaluate impact and likelihood
  -How you’ll determine risk levels (e.g., Low/Medium/High)
  -What counts as an acceptable risk
📌 This method must be documented in your ISMS.

2. 🔍 Identify Information Security Risks
-List all information assets (e.g., servers, data, apps, networks)
-Identify threats (e.g., hackers, natural disasters, insider abuse)
-Identify vulnerabilities (e.g., weak passwords, outdated systems)
🧠 Example:
If your web server is exposed online and not patched → it’s a risk.

3. 📊 Analyze and Evaluate the Risks
-For each risk:
  -Estimate Likelihood (e.g., Low, Medium, High)
  -Estimate Impact if the risk happens
  -Calculate Risk Level = Likelihood × Impact
-Use a risk matrix to visualize and prioritize.

4. 🛡️ Select Risk Treatment Options
You can:
  -Avoid the risk (e.g., don’t offer that risky service)
  -Reduce the risk (e.g., install a firewall or patch the system)
  -Transfer the risk (e.g., buy cyber insurance)  
  -Accept the risk (if it's very low)

5. 📝 Create a Risk Treatment Plan
  -Document what controls will be applied
  -Assign responsibilities and deadlines
  -Ensure selected controls align with Annex A (from ISO 27001)

6. 📄 Update the Statement of Applicability (SoA)
  -Based on the selected controls, update the SoA to reflect what’s implemented or
   excluded — with reasons.

7. 🔄 Monitor and Review Risks
  -Risks change over time — so:
    -Review regularly
    -Perform internal audits
    -Adjust controls as needed

🧠 Simple Summary:
Under ISO 27001, you define and manage information security risks by identifying 
threats, evaluating impact and likelihood, and applying controls to reduce or manage 
those risks — all documented through your ISMS, Risk Treatment Plan, and SoA.



8. What is continual improvement in the context of ISMS?












*/
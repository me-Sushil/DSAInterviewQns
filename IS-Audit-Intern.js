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


























































*/
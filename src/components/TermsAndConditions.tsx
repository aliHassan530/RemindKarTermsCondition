import React from 'react';
import './Terms.css';

const TermsAndConditions: React.FC = () => {
  return (
    <div className="terms-page">
      <div className="container">
        <h1>Terms and Conditions</h1>
        <p className="effective-date"><strong>Effective Date:</strong> December 17, 2025</p>
        
        <div className="content">
          <p>
            Welcome to Remind Kar ("we," "our," or "us"). These Terms and Conditions ("Terms") 
            govern your use of the Remind Kar mobile application (the "Service") operated by us.
          </p>
          
          <p>
            By downloading, installing, accessing, or using our Service, you agree to be bound by 
            these Terms. If you disagree with any part of these terms, then you may not access the Service.
          </p>

          <section>
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using Remind Kar, you accept and agree to be bound by the terms 
              and provision of this agreement. Additionally, when using this app's particular 
              services, you shall be subject to any posted guidelines or rules applicable to such services.
            </p>
          </section>

          <section>
            <h2>2. Description of Service</h2>
            <p>Remind Kar is a productivity application that provides the following features:</p>
            <ul>
              <li>Event creation and management</li>
              <li>Reminder notifications</li>
              <li>Shopping list management</li>
              <li>Timer functionality</li>
              <li>PDF generation and sharing</li>
              <li>Local data storage only (no cloud storage)</li>
              <li>User authentication (login and password reset via Firebase)</li>
              <li>Account deletion and password reset from Settings</li>
            </ul>
          </section>

          <section>
            <h2>3. User Accounts and Registration</h2>
            <p>
              You may use Remind Kar in offline mode without creating an account, or create an 
              account using Firebase authentication for sign-in only. The app does not store user data in the cloud.
            </p>
            <p>
              When you create an account with us, you must provide information that is accurate, 
              complete, and current at all times. You are responsible for safeguarding the password 
              and for maintaining the confidentiality of your account.
            </p>
            <p>
              You agree not to disclose your password to any third party and to take sole 
              responsibility for any activities or actions under your account.
            </p>
            <div className="notice">
              <p>
                <strong>Login & Forgot Password:</strong> You can sign in using Firebase Authentication. If you forget your password, use the “Forgot Password” option to receive a password reset email and regain access to your account.
              </p>
            </div>
          </section>

          <section>
            <h2>4. User Conduct and Prohibited Uses</h2>
            <p>You agree not to use the Service:</p>
            <ul>
              <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
              <li>To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
              <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
              <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
              <li>To submit false or misleading information</li>
              <li>To upload or transmit viruses or any other type of malicious code</li>
              <li>To attempt to reverse engineer, modify, or distribute the application without permission</li>
            </ul>
          </section>

          <section>
            <h2>5. Data Storage and Backup</h2>
            <p>
              All app data is stored locally on your device using secure storage methods. Firebase is used only for authentication (sign-in, sign-out, and password reset). The app does not store user data in the cloud.
            </p>
            <p>
              While we strive to maintain data integrity, you acknowledge that you are solely 
              responsible for backing up your data. We recommend regular backups of important information.
            </p>
            <div className="notice">
              <p>
                <strong>Local Storage:</strong> Certain app data is stored locally on your device. If you uninstall the app, all locally stored data is cleared by the operating system and will no longer be available.
              </p>
            </div>
          </section>

          <section>
            <h2>6. App Permissions</h2>
            <p>The app requires the following permissions to function properly:</p>
            <ul>
              <li><strong>Internet Access:</strong> For Firebase authentication (sign-in/sign-out and password reset)</li>
              <li><strong>Exact Alarm Scheduling:</strong> For precise reminder notifications</li>
              <li><strong>Notifications:</strong> To display reminders and alerts</li>
              <li><strong>Audio Recording:</strong> For voice memo features</li>
              <li><strong>Boot Completed Listener:</strong> To restore alarms after device restart</li>
            </ul>
          </section>

          <section>
            <h2>7. Intellectual Property Rights</h2>
            <p>
              The Service and its original content, features, and functionality are and will remain 
              the exclusive property of Remind Kar and its licensors. The Service is protected by 
              copyright, trademark, and other laws.
            </p>
          </section>

          <section>
            <h2>8. Disclaimer of Warranties</h2>
            <p>
              The information on this app is provided on an "as is" basis. To the fullest extent 
              permitted by law, this Company excludes all representations, warranties, conditions, 
              and terms whether express, implied, statutory, or otherwise.
            </p>
          </section>

          <section>
            <h2>9. Limitation of Liability</h2>
            <p>
              In no event shall Remind Kar, nor its directors, employees, partners, agents, 
              suppliers, or affiliates, be liable for any indirect, incidental, special, 
              consequential, or punitive damages, including without limitation, loss of profits, 
              data, use, goodwill, or other intangible losses, resulting from your use of the Service.
            </p>
          </section>

          <section>
            <h2>10. Termination</h2>
            <p>
              We may terminate or suspend your account and bar access to the Service immediately, 
              without prior notice or liability, under our sole discretion, for any reason whatsoever 
              and without limitation, including but not limited to a breach of the Terms.
            </p>
            <p>
              If you wish to terminate your account, you may simply discontinue using the Service 
              or delete your account through the app settings.
            </p>
          </section>

          <section>
            <h2>11. Governing Law</h2>
            <p>
              These Terms shall be interpreted and governed by the laws of the jurisdiction in 
              which the company is established, without regard to its conflict of law provisions.
            </p>
          </section>

          <section>
            <h2>12. Changes to Terms</h2>
            <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms at 
              any time. If a revision is material, we will provide at least 30 days notice prior 
              to any new terms taking effect.
            </p>
          </section>

          <section>
            <h2>13. Support & Contact</h2>
            <p>
              For support or any questions, reach out to us:
            </p>
            <p>
              <strong>Email:</strong> <a href="mailto:ah7163259@gmail.com">mesumnaqvi530@gmail.com</a><br/>
              <strong>App Name:</strong> Remind Kar
            </p>
          </section>
          
          <section>
            <h2>14. Account Management in Settings</h2>
            <p>
              The app provides account management options in the Settings screen:
            </p>
            <ul>
              <li><strong>Reset Password:</strong> Initiate a password reset through Firebase to receive a secure reset link via email.</li>
              <li><strong>Delete Account:</strong> Permanently delete your account. This removes your Firebase user credentials. App data is stored locally and is cleared when you uninstall the app.</li>
            </ul>
          </section>
          
          <section>
            <h2>15. Account Deletion and Data Handling</h2>
            <p>
              Deleting your account will remove your Firebase-authenticated profile. 
              Locally stored app data resides on your device and, as noted, is cleared when the app is uninstalled by the operating system.
            </p>
            <p>
              Some operations may require re-authentication to protect your account. After deletion, you can create a new account at any time.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;

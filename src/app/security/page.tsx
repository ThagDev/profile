import { BackNavigation } from "@/components/back-navigation";

export default function SecurityPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-5xl space-y-8">
        <BackNavigation
          destination="/"
          label="Back to Home"
          variant="elegant"
        />

        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
            Security Policy
          </h1>
          <p className="text-muted-foreground">Last updated: April 19, 2023</p>
        </div>

        <div className="prose prose-gray dark:prose-invert max-w-none">
          <h2>1. Introduction</h2>
          <p>
            At Thang Dev&#39;s personal website, we are committed to ensuring the
            security of our website and protecting the data of our users. This
            Security Policy outlines the measures we take to maintain a secure
            environment for all visitors and users of our website at
            www.thangdev.com (the &quot;Website&quot;).
          </p>

          <h2>2. Data Security Measures</h2>
          <h3>2.1 Encryption</h3>
          <p>
            We implement industry-standard encryption technologies to protect
            data transmission between your browser and our servers:
          </p>
          <ul>
            <li>
              All data transmitted to and from our Website is encrypted using
              TLS (Transport Layer Security)
            </li>
            <li>
              We maintain an up-to-date SSL certificate to ensure secure
              connections
            </li>
            <li>
              Sensitive information, such as contact form submissions, is
              encrypted during transmission
            </li>
          </ul>

          <h3>2.2 Data Storage</h3>
          <p>
            We employ secure practices for storing any data collected through
            our Website:
          </p>
          <ul>
            <li>User data is stored in secure, access-controlled databases</li>
            <li>
              Personal information is segregated from other data to provide an
              additional layer of protection
            </li>
            <li>Regular backups are performed to prevent data loss</li>
          </ul>

          <h3>2.3 Access Controls</h3>
          <p>We restrict access to personal information:</p>
          <ul>
            <li>
              Only authorized personnel have access to systems containing user
              data
            </li>
            <li>Access to data is granted on a need-to-know basis</li>
            <li>
              Multi-factor authentication is required for administrative access
              to our systems
            </li>
          </ul>

          <h2>3. Infrastructure Security</h2>
          <h3>3.1 Hosting Environment</h3>
          <p>
            Our Website is hosted in a secure environment with the following
            protections:
          </p>
          <ul>
            <li>
              Industry-leading cloud infrastructure with built-in security
              features
            </li>
            <li>Regular security patches and updates to all systems</li>
            <li>Firewall protection to filter malicious traffic</li>
            <li>DDoS (Distributed Denial of Service) attack mitigation</li>
          </ul>

          <h3>3.2 Monitoring and Threat Detection</h3>
          <p>
            We continuously monitor our systems for potential security threats:
          </p>
          <ul>
            <li>
              Automated systems to detect unusual or suspicious activities
            </li>
            <li>
              Regular security scans to identify potential vulnerabilities
            </li>
            <li>Logging of system events for security analysis</li>
          </ul>

          <h2>4. Application Security</h2>
          <h3>4.1 Secure Development Practices</h3>
          <p>Our Website is developed following secure coding practices:</p>
          <ul>
            <li>Regular code reviews to identify and fix security issues</li>
            <li>Input validation to prevent injection attacks</li>
            <li>
              Protection against common web vulnerabilities (XSS, CSRF, etc.)
            </li>
            <li>Secure authentication mechanisms</li>
          </ul>

          <h3>4.2 Third-Party Components</h3>
          <p>We carefully manage third-party components used in our Website:</p>
          <ul>
            <li>Regular updates to all third-party libraries and frameworks</li>
            <li>
              Verification of the security reputation of third-party services
            </li>
            <li>Limited permissions for third-party integrations</li>
          </ul>

          <h2>5. Incident Response</h2>
          <p>
            In the event of a security incident or data breach, we have
            procedures in place to respond quickly and effectively:
          </p>
          <ul>
            <li>
              A defined incident response plan to address security breaches
            </li>
            <li>Prompt investigation of any suspected security incidents</li>
            <li>
              Notification to affected users as required by applicable laws
            </li>
            <li>
              Post-incident analysis to prevent similar issues in the future
            </li>
          </ul>

          <h2>6. User Responsibilities</h2>
          <p>
            While we take extensive measures to secure our Website, users also
            play a role in maintaining security:
          </p>
          <ul>
            <li>Use strong, unique passwords if creating any accounts</li>
            <li>Keep your devices and browsers updated</li>
            <li>Be cautious about sharing personal information</li>
            <li>
              Report any suspicious activities or potential security issues
            </li>
          </ul>

          <h2>7. Security Assessments</h2>
          <p>We regularly evaluate and improve our security measures:</p>
          <ul>
            <li>
              Periodic security assessments of our Website and infrastructure
            </li>
            <li>Vulnerability testing to identify potential weaknesses</li>
            <li>Review and updates to our security policies and procedures</li>
          </ul>

          <h2>8. Compliance</h2>
          <p>
            Our security practices are designed to comply with applicable laws
            and regulations regarding data protection and online security,
            including:
          </p>
          <ul>
            <li>
              General Data Protection Regulation (GDPR) for users in the
              European Union
            </li>
            <li>
              California Consumer Privacy Act (CCPA) for California residents
            </li>
            <li>
              Other applicable regional and international data protection laws
            </li>
          </ul>

          <h2>9. Reporting Security Issues</h2>
          <p>
            If you discover a security vulnerability or have concerns about the
            security of our Website, please contact us immediately at{" "}
            <a href="mailto:security@johndoe.com">security@johndoe.com</a>. We
            appreciate your help in keeping our Website secure.
          </p>

          <h2>10. Changes to This Security Policy</h2>
          <p>
            We may update our Security Policy from time to time. We will notify
            you of any changes by posting the new Security Policy on this page
            and updating the &quot;Last Updated&quot; date at the top.
          </p>

          <h2>11. Contact Information</h2>
          <p>
            If you have any questions about this Security Policy, please contact
            us at <a href="mailto:john.doe@example.com">john.doe@example.com</a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

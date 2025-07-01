import { BackNavigation } from "@/components/back-navigation";

export default function PrivacyPage() {
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
            Privacy Policy
          </h1>
          <p className="text-muted-foreground">Last updated: April 19, 2025</p>
        </div>

        <div className="prose prose-gray dark:prose-invert max-w-none">
          <h2>1. Introduction</h2>
          <p>
            At Thang Dev&#39;s personal website, we respect your privacy and are
            committed to protecting your personal data. This Privacy Policy
            explains how we collect, use, disclose, and safeguard your
            information when you visit our website www.thangdev.com (the
            &quot;Website&quot;).
          </p>
          <p>
            Please read this Privacy Policy carefully. If you do not agree with
            the terms of this Privacy Policy, please do not access the Website.
          </p>

          <h2>2. Information We Collect</h2>
          <h3>2.1 Personal Data</h3>
          <p>
            We may collect personal identification information from you in a
            variety of ways, including, but not limited to, when you visit our
            Website, fill out a form, and in connection with other activities,
            services, features, or resources we make available on our Website.
            You may be asked for, as appropriate:
          </p>
          <ul>
            <li>Name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Message content when using the contact form</li>
          </ul>

          <h3>2.2 Non-Personal Data</h3>
          <p>
            We may collect non-personal identification information about users
            whenever they interact with our Website. Non-personal identification
            information may include:
          </p>
          <ul>
            <li>Browser name</li>
            <li>Type of computer or device</li>
            <li>
              Technical information about users&#39; means of connection to our
              Website, such as the operating system and the Internet service
              providers utilized
            </li>
            <li>Other similar information</li>
          </ul>

          <h3>2.3 Cookies and Tracking Technologies</h3>
          <p>
            Our Website may use &quot;cookies&quot; to enhance user experience.
            A cookie is a small piece of data stored on your computer or mobile
            device by your web browser while you are viewing a website. We use
            cookies for the following purposes:
          </p>
          <ul>
            <li>
              To help us understand your preferences based on previous or
              current Website activity
            </li>
            <li>
              To compile aggregate data about site traffic and site interactions
            </li>
            <li>To enhance our Website to improve your browsing experience</li>
          </ul>
          <p>
            You can instruct your browser to refuse all cookies or to indicate
            when a cookie is being sent. However, if you do not accept cookies,
            you may not be able to use some portions of our Website.
          </p>

          <h2>3. How We Use Your Information</h2>
          <p>
            We may use the information we collect from you in the following
            ways:
          </p>
          <ul>
            <li>To personalize your experience on our Website</li>
            <li>To improve our Website based on the feedback you provide</li>
            <li>
              To respond to your inquiries, questions, and/or other requests
            </li>
            <li>
              To send periodic emails (if you have provided your email address
              and consented to receiving communications)
            </li>
          </ul>

          <h2>4. Data Protection</h2>
          <p>
            We adopt appropriate data collection, storage, and processing
            practices and security measures to protect against unauthorized
            access, alteration, disclosure, or destruction of your personal
            information, username, password, transaction information, and data
            stored on our Website.
          </p>
          <p>
            However, please note that no method of transmission over the
            Internet or method of electronic storage is 100% secure. While we
            strive to use commercially acceptable means to protect your personal
            information, we cannot guarantee its absolute security.
          </p>

          <h2>5. Sharing Your Personal Information</h2>
          <p>
            We do not sell, trade, or rent users&#39; personal identification
            information to others. We may share generic aggregated demographic
            information not linked to any personal identification information
            regarding visitors and users with our business partners, trusted
            affiliates, and advertisers for the purposes outlined above.
          </p>

          <h2>6. Third-Party Websites</h2>
          <p>
            Users may find content on our Website that links to the sites and
            services of our partners, suppliers, advertisers, sponsors,
            licensors, and other third parties. We do not control the content or
            links that appear on these sites and are not responsible for the
            practices employed by websites linked to or from our Website.
            Browsing and interaction on any other website, including websites
            which have a link to our Website, is subject to that website&#39;s
            own terms and policies.
          </p>

          <h2>7. GDPR Compliance</h2>
          <p>
            If you are a resident of the European Economic Area (EEA), you have
            certain data protection rights. We aim to take reasonable steps to
            allow you to correct, amend, delete, or limit the use of your
            personal information.
          </p>
          <p>Under the GDPR, you have the following rights:</p>
          <ul>
            <li>
              The right to access – You have the right to request copies of your
              personal data.
            </li>
            <li>
              The right to rectification – You have the right to request that we
              correct any information you believe is inaccurate or complete
              information you believe is incomplete.
            </li>
            <li>
              The right to erasure – You have the right to request that we erase
              your personal data, under certain conditions.
            </li>
            <li>
              The right to restrict processing – You have the right to request
              that we restrict the processing of your personal data, under
              certain conditions.
            </li>
            <li>
              The right to object to processing – You have the right to object
              to our processing of your personal data, under certain conditions.
            </li>
            <li>
              The right to data portability – You have the right to request that
              we transfer the data that we have collected to another
              organization, or directly to you, under certain conditions.
            </li>
          </ul>

          <h2>8. Children&#39;s Privacy</h2>
          <p>
            Our Website is not intended for children under the age of 13. We do
            not knowingly collect personal information from children under 13.
            If you are a parent or guardian and you are aware that your child
            has provided us with personal information, please contact us so that
            we can take necessary actions.
          </p>

          <h2>9. Changes to This Privacy Policy</h2>
          <p>
            We reserve the right to update or change our Privacy Policy at any
            time. When we do, we will revise the updated date at the top of this
            page. We encourage users to frequently check this page for any
            changes to stay informed about how we are helping to protect the
            personal information we collect.
          </p>

          <h2>10. Contact Information</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact
            us at <a href="mailto:john.doe@example.com">john.doe@example.com</a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

import { BackNavigation } from "@/components/back-navigation";

export default function TermsPage() {
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
            Terms & Conditions
          </h1>
          <p className="text-muted-foreground">Last updated: April 19, 2023</p>
        </div>

        <div className="prose prose-gray dark:prose-invert max-w-none">
          <h2>1. Introduction</h2>
          <p>
            Welcome to ThagDev personal website. These Terms and
            Conditions govern your use of our website located at www.johndoe.com
            (the &quot;Website&quot;) and form a binding contractual agreement
            between you, the user of the Website, and us, John Doe.
          </p>
          <p>
            By accessing or using the Website, you agree to be bound by these
            Terms. If you disagree with any part of the Terms, you may not
            access the Website.
          </p>

          <h2>2. Definitions</h2>
          <p>For the purposes of these Terms and Conditions:</p>
          <ul>
            <li>
              <strong>&quot;Content&quot;</strong> means any information, text,
              graphics, photos, or other materials uploaded, downloaded, or
              appearing on the Website.
            </li>
            <li>
              <strong>&quot;Services&quot;</strong> refers to the services
              offered by the Website, including but not limited to access to
              portfolio information, blog posts, and contact forms.
            </li>
            <li>
              <strong>&quot;User&quot;</strong> means any individual who
              accesses or uses the Website.
            </li>
            <li>
              <strong>
                &quot;We,&quot; &quot;Us,&quot; or &quot;Our&quot;
              </strong>{" "}
              refers to John Doe, the owner of the Website.
            </li>
          </ul>

          <h2>3. Intellectual Property Rights</h2>
          <p>
            Unless otherwise stated, we own the intellectual property rights for
            all material on the Website. All intellectual property rights are
            reserved. You may view, download, and print pages from the Website
            for your own personal use, subject to the restrictions set out below
            and elsewhere in these Terms.
          </p>
          <p>You must not:</p>
          <ul>
            <li>Republish material from this Website without attribution</li>
            <li>Sell, rent, or sub-license material from the Website</li>
            <li>
              Reproduce, duplicate, or copy material from the Website for
              commercial purposes
            </li>
            <li>
              Redistribute content from this Website, unless content is
              specifically made for redistribution
            </li>
          </ul>

          <h2>4. User Responsibilities</h2>
          <p>As a user of our Website, you agree to:</p>
          <ul>
            <li>
              Use the Website in a manner consistent with all applicable laws
              and regulations
            </li>
            <li>
              Not use the Website in any way that causes, or may cause, damage
              to the Website or impairment of the availability or accessibility
              of the Website
            </li>
            <li>
              Not use the Website in any way which is unlawful, illegal,
              fraudulent, or harmful
            </li>
            <li>
              Not use the Website for any purpose related to marketing without
              our express written consent
            </li>
          </ul>

          <h2>5. Limitation of Liability</h2>
          <p>
            In no event shall we, nor our directors, employees, partners,
            agents, suppliers, or affiliates, be liable for any indirect,
            incidental, special, consequential, or punitive damages, including
            without limitation, loss of profits, data, use, goodwill, or other
            intangible losses, resulting from:
          </p>
          <ul>
            <li>
              Your access to or use of or inability to access or use the Website
            </li>
            <li>Any conduct or content of any third party on the Website</li>
            <li>Any content obtained from the Website</li>
            <li>
              Unauthorized access, use, or alteration of your transmissions or
              content
            </li>
          </ul>

          <h2>6. Indemnification</h2>
          <p>
            You agree to defend, indemnify, and hold harmless us, our
            affiliates, licensors, and service providers, and our and their
            respective officers, directors, employees, contractors, agents,
            licensors, suppliers, successors, and assigns from and against any
            claims, liabilities, damages, judgments, awards, losses, costs,
            expenses, or fees (including reasonable attorneys&#39; fees) arising
            out of or relating to your violation of these Terms or your use of
            the Website.
          </p>

          <h2>7. External Links</h2>
          <p>
            Our Website may contain links to external websites that are not
            provided or maintained by or in any way affiliated with us. Please
            note that we do not guarantee the accuracy, relevance, timeliness,
            or completeness of any information on these external websites.
          </p>

          <h2>8. Modifications to Terms</h2>
          <p>
            We reserve the right to modify these Terms at any time. If we make
            changes to these Terms, we will post the revised Terms on the
            Website and update the &quot;Last Updated&quot; date at the top of
            these Terms. We encourage you to review the Terms whenever you
            access the Website.
          </p>

          <h2>9. Governing Law</h2>
          <p>
            These Terms shall be governed and construed in accordance with the
            laws of [Your Jurisdiction], without regard to its conflict of law
            provisions.
          </p>

          <h2>10. Contact Information</h2>
          <p>
            If you have any questions about these Terms, please contact us at{" "}
            <a href="hoquocthang150722@gmail.com">hoquocthang150722@gmail.com</a>.
          </p>
        </div>
      </div>
    </div>
  );
}

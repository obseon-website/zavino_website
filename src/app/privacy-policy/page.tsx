import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy policy",
  description:
    "How Zavino handles website visits, business communications, project information, and payment records.",
  alternates: { canonical: "/privacy-policy" },
};
export default function Privacy() {
  return (
    <LegalPage
      title="Privacy policy."
      summary="What we collect, why we need it, and how we handle it."
      sections={[
        {
          id: "who-we-are",
          title: "Who we are",
          content: (
            <p>
              This policy explains how Zavino, a creative and marketing agency
              based at {site.address}, handles personal information in
              connection with this website and our services. Contact us at{" "}
              <a href={`mailto:${site.email}`}>{site.email}</a> with privacy
              questions.
            </p>
          ),
        },
        {
          id: "information",
          title: "Information we collect",
          content: (
            <>
              <p>
                When you contact us by phone, email, or WhatsApp, we may receive
                your name, contact details, company information, project brief,
                files, and the content of our conversations. Please share only
                information relevant to your inquiry or project.
              </p>
              <p>
                For client projects, we may also receive billing details,
                proposal approvals, delivery records, and transaction
                references. We do not need your account passwords, card PIN, or
                one-time payment codes.
              </p>
              <p>
                This website does not currently have an inquiry form, user
                accounts, newsletter signup, or an on-site checkout.
              </p>
            </>
          ),
        },
        {
          id: "website-data",
          title: "Website data and local storage",
          content: (
            <>
              <p>
                Our hosting and security providers may process technical request
                information such as IP address, browser type, requested page,
                timestamps, and error records to deliver the website, prevent
                abuse, and diagnose problems.
              </p>
              <p>
                We do not currently install third-party advertising pixels or
                visitor analytics scripts. We use a session-storage flag on your
                device to avoid replaying the opening animation during the same
                browser session. It contains no contact or payment details and
                is not sent to us.
              </p>
              <p>
                Portfolio videos and fonts are served with the site. Opening an
                external social or messaging link takes you to that provider’s
                service, where its own privacy and storage practices apply.
              </p>
            </>
          ),
        },
        {
          id: "use",
          title: "How we use information",
          content: (
            <ul>
              <li>
                Respond to inquiries, discuss a brief, and prepare proposals.
              </li>
              <li>
                Manage projects, communicate progress, obtain approvals, and
                deliver work.
              </li>
              <li>
                Issue invoices, reconcile payments, and administer approved
                refunds.
              </li>
              <li>
                Protect our services, keep appropriate business records, and
                meet applicable legal obligations.
              </li>
            </ul>
          ),
        },
        {
          id: "payments",
          title: "Payment information",
          content: (
            <p>
              Where an agreed project is paid through SSLCommerz, the payment
              provider and relevant financial institutions handle payment
              credentials on their systems. Zavino may receive a transaction
              reference, payment status, amount, and relevant billing details.
              We do not collect or store full card numbers or card security
              codes through this website. The provider’s privacy terms apply to
              its payment service.
            </p>
          ),
        },
        {
          id: "sharing",
          title: "Sharing and service providers",
          content: (
            <>
              <p>
                We do not sell personal information. We may share information
                with hosting, communications, payment, or production providers
                only where needed to operate the website or carry out your
                engagement. Project collaborators receive only the information
                needed for their role.
              </p>
              <p>
                We may disclose information where required by law, to respond to
                a lawful request, or to protect legitimate rights and safety.
                Providers such as Cloudflare and communications platforms may
                process information outside Bangladesh, subject to their terms
                and applicable safeguards.
              </p>
            </>
          ),
        },
        {
          id: "retention",
          title: "Retention and security",
          content: (
            <p>
              We retain information only for as long as needed for the purpose
              it was collected, our contractual responsibilities, record-keeping
              obligations, or the resolution of disputes. We use reasonable
              access controls and operational safeguards. No method of
              transmission or storage can guarantee absolute security.
            </p>
          ),
        },
        {
          id: "choices",
          title: "Your choices",
          content: (
            <p>
              You may contact us to request access to, correction of, or
              deletion of information you have provided, or to ask us to stop
              optional communications. We may need to verify your identity and
              retain certain records where required or permitted by applicable
              law. Send requests to{" "}
              <a href={`mailto:${site.email}`}>{site.email}</a>.
            </p>
          ),
        },
        {
          id: "updates",
          title: "Policy updates",
          content: (
            <p>
              We may update this policy when our services or data practices
              change. The date at the top identifies the latest version. New
              forms, analytics, or payment features will be reflected in this
              policy before they are introduced.
            </p>
          ),
        },
      ]}
    />
  );
}

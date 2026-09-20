import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Terms & conditions",
  description:
    "Zavino’s terms for proposals, project payments, revisions, approvals, delivery, and ongoing engagements.",
  alternates: { canonical: "/terms-and-conditions" },
};
export default function Terms() {
  return (
    <LegalPage
      title="Terms & conditions."
      summary="A shared understanding makes better work. These are the foundations of working with Zavino."
      sections={[
        {
          id: "agreement",
          title: "Your agreement with us",
          content: (
            <>
              <p>
                These terms apply to creative and marketing services provided by
                Zavino in Bangladesh. Every engagement begins with a written
                proposal or scope of work describing the services, deliverables,
                fees, and schedule.
              </p>
              <p>
                You accept an engagement by signing or clearly approving the
                proposal in writing, including by email or WhatsApp. Work begins
                after that approval and receipt of the agreed advance. Visiting
                this website or making an inquiry does not place an order.
              </p>
              <p>
                Specific terms in an accepted proposal take priority over these
                general terms where they differ, subject to applicable law.
              </p>
            </>
          ),
        },
        {
          id: "scope",
          title: "Scope and responsibilities",
          content: (
            <p>
              We supply the services listed in the accepted proposal. You will
              nominate a contact, provide accurate information and necessary
              materials, and give timely consolidated feedback. You are
              responsible for having permission to use any materials you supply.
              Additional deliverables, changes in direction, extra formats, or
              work outside the agreed scope require a written change and may
              affect fees and delivery dates.
            </p>
          ),
        },
        {
          id: "payment",
          title: "Fees and payment",
          content: (
            <>
              <p>
                Unless your proposal states otherwise, project engagements
                require a 50% advance before work begins and the remaining 50%
                after final approval and before release of final deliverables.
                Larger projects may use an agreed milestone schedule. Monthly
                retainers are invoiced and paid in advance of each service
                period.
              </p>
              <p>
                Quotes are primarily in Bangladeshi Taka (BDT). Another currency
                can be agreed in writing where supported by the payment method.
                Applicable taxes, media spend, licensing, travel, talent,
                printing, or other third-party costs are specified separately
                when relevant.
              </p>
              <p>
                Payment instructions are provided with your invoice. SSLCommerz
                may be used for supported online payments. This website has no
                public checkout. We may pause work or final delivery if an
                agreed payment is overdue, after notifying you.
              </p>
            </>
          ),
        },
        {
          id: "revisions",
          title: "Feedback, revisions, and approval",
          content: (
            <>
              <p>
                Unless otherwise agreed, a project includes two rounds of
                consolidated revisions within the approved brief. A revision
                round is one combined set of feedback submitted by your
                nominated contact. A new concept, change to an approved
                direction, reshoot, or additional deliverable is a scope change
                and is quoted separately.
              </p>
              <p>
                We request written approval of key stages and final work. Please
                check names, dates, claims, prices, and other supplied
                information before approval. Silence is not treated as final
                approval. Delayed feedback may move the schedule.
              </p>
            </>
          ),
        },
        {
          id: "delivery",
          title: "Timing and delivery",
          content: (
            <p>
              Delivery dates and file formats are agreed in your proposal. Final
              work is delivered digitally through an agreed transfer method, or
              through an agreed production or activation handover. Delivery
              depends on receiving materials, approvals, and payments on time.
              If a delay arises, we will discuss a revised schedule. Editable
              source files, raw footage, and unused concepts are included only
              when expressly listed in the proposal.
            </p>
          ),
        },
        {
          id: "ownership",
          title: "Ownership and usage rights",
          content: (
            <>
              <p>
                Once full payment is received, you receive the ownership or
                usage rights to approved final work stated in your proposal.
                Unless otherwise specified, final custom creative produced
                specifically for your brand is assigned to you on full payment.
                Our pre-existing tools, templates, working files, and unused
                concepts remain ours.
              </p>
              <p>
                Third-party fonts, stock, music, software, and other licensed
                materials remain subject to their own licenses. You retain
                rights to the materials you provide. We will agree permission
                before presenting your commissioned work in our portfolio where
                it has not already been approved for that purpose.
              </p>
            </>
          ),
        },
        {
          id: "retainers",
          title: "Monthly retainers",
          content: (
            <p>
              Your proposal defines the monthly scope, service period,
              deliverables, and any minimum commitment. Unless otherwise agreed,
              either party may end a recurring engagement with 30 days’ written
              notice. Work and committed costs during the notice period remain
              payable. Unused deliverables do not automatically roll over unless
              agreed. Any unused prepaid amount is reconciled under our
              cancellation and refund policy.
            </p>
          ),
        },
        {
          id: "performance",
          title: "Campaigns and third-party services",
          content: (
            <p>
              We apply professional care to our work, but do not guarantee a
              particular number of leads, sales, followers, ad approvals, or
              platform results. Outcomes depend on factors beyond creative
              execution, including your offer, market conditions, budget, and
              platform policies. Advertising spend and third-party platform fees
              are separate from agency fees unless the proposal explicitly
              includes them.
            </p>
          ),
        },
        {
          id: "cancellation",
          title: "Cancellation and refunds",
          content: (
            <p>
              Cancellation requests, completed work, committed costs, and
              refundable balances are handled under our{" "}
              <Link href="/cancellation-refund-policy">
                Cancellation & Refund Policy
              </Link>
              . No term removes rights or remedies that cannot lawfully be
              excluded.
            </p>
          ),
        },
        {
          id: "resolution",
          title: "Concerns and applicable law",
          content: (
            <p>
              Please tell us promptly if something is wrong so we can
              investigate and agree a practical resolution. These terms are
              governed by the applicable laws of Bangladesh. We will first seek
              to resolve disputes through good-faith discussion. Any further
              action is subject to the jurisdiction and remedies provided by
              applicable law.
            </p>
          ),
        },
      ]}
    />
  );
}

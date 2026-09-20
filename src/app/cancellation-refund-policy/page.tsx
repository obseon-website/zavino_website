import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cancellation & refund policy",
  description:
    "How Zavino handles project cancellations, unused advances, committed costs, retainer notice, and approved refunds.",
  alternates: { canonical: "/cancellation-refund-policy" },
};
export default function Refunds() {
  return (
    <LegalPage
      title="Cancellation & refunds."
      summary="Clear expectations for a change of plan, with a fair accounting of work and costs."
      sections={[
        {
          id: "request",
          title: "How to request cancellation",
          content: (
            <p>
              Send a written request to{" "}
              <a href={`mailto:${site.email}`}>{site.email}</a> with your name,
              company, project or invoice reference, and the work you wish to
              cancel. A WhatsApp request is also accepted if we can identify and
              confirm the engagement. We will confirm receipt and discuss the
              work completed, any commitments, and the next steps.
            </p>
          ),
        },
        {
          id: "before",
          title: "Before work starts",
          content: (
            <p>
              If you cancel before work begins and before we have incurred
              approved, non-recoverable third-party costs, your advance is
              refundable in full. Where such costs have already been committed
              with your approval, we deduct only those documented costs and
              refund the remaining unused amount. An advance is not
              automatically forfeited simply because you cancel.
            </p>
          ),
        },
        {
          id: "after",
          title: "After work has started",
          content: (
            <>
              <p>
                We will reconcile your payments against work actually completed
                and approved, non-recoverable commitments made for your project.
                Completed work is valued using the accepted proposal’s
                milestones or agreed rates. We will provide a breakdown rather
                than apply an arbitrary cancellation charge.
              </p>
              <p>
                If your payments exceed that amount, the unused balance is
                refundable. If completed work and approved commitments exceed
                the amount paid, the outstanding balance remains due under your
                agreement. We stop avoidable further work and spending after
                cancellation is confirmed.
              </p>
            </>
          ),
        },
        {
          id: "costs",
          title: "Production and third-party costs",
          content: (
            <p>
              Examples of committed costs include approved studio or venue
              bookings, talent, travel, printing, media placements, and
              third-party licenses. Refunds of these costs depend on the
              supplier’s terms and what can be recovered. We will identify the
              commitments and pass on recovered amounts attributable to your
              project. Advertising spend already used by a platform cannot be
              refunded by Zavino.
            </p>
          ),
        },
        {
          id: "retainers",
          title: "Monthly partnerships",
          content: (
            <p>
              Unless an accepted proposal provides otherwise, recurring
              retainers require 30 days’ written notice. Services continue
              during the notice period unless we agree another arrangement. Fees
              for work delivered and approved commitments remain payable. Any
              prepaid amount for services after the effective cancellation date
              is reconciled and the unused balance refunded. A proposal may
              define a minimum term or reserved capacity; these must be
              disclosed and agreed before the engagement begins.
            </p>
          ),
        },
        {
          id: "issues",
          title: "If there is a problem with the work",
          content: (
            <p>
              If a deliverable does not meet the agreed scope, contact us with
              the specific issue. We will review it and discuss correction,
              re-performance, or an appropriate refund for any undelivered
              portion. Approval of a creative direction does not remove rights
              relating to a failure to supply agreed services. A change in
              preference after approved work is completed is handled through
              revisions or a new scope.
            </p>
          ),
        },
        {
          id: "our-cancellation",
          title: "If Zavino cancels",
          content: (
            <p>
              If we cannot continue an engagement, we will notify you, account
              for any usable work delivered, and refund the unused prepaid
              amount for services we will not provide. We will discuss an
              orderly handover and any outstanding third-party commitments. Your
              applicable statutory rights continue to apply.
            </p>
          ),
        },
        {
          id: "processing",
          title: "Refund method and timeline",
          content: (
            <>
              <p>
                Once a refund is approved in writing and the necessary
                transaction details are confirmed, we process the approved
                refund within 7 to 10 working days. We will send confirmation
                when it has been submitted.
              </p>
              <p>
                Refunds are returned through the original payment method,
                including SSLCommerz where it processed the payment, unless
                another lawful method is agreed. The payment provider or bank
                controls when the credit appears in your account, and additional
                settlement time may apply. We cannot guarantee a bank’s posting
                date.
              </p>
              <p>
                We do not ask you to disclose a card PIN, full card security
                details, or an OTP to receive a refund. If your refund has not
                arrived after the expected settlement period, contact us with
                the original transaction reference so we can follow up.
              </p>
            </>
          ),
        },
        {
          id: "rights",
          title: "Your agreement and rights",
          content: (
            <p>
              This policy works alongside your accepted proposal and our Terms &
              Conditions. Any specific cancellation arrangement must be made
              clear in that proposal. Nothing in this policy excludes a refund,
              remedy, or other right required by applicable law.
            </p>
          ),
        },
      ]}
    />
  );
}

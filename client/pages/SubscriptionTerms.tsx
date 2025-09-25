import Layout from "@/components/Layout";

export default function SubscriptionTerms() {
  return (
    <Layout>
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">Subscription Terms</h1>
          <p className="text-foreground/80 mb-6">
            Please provide your final Subscription Terms content and I will replace this placeholder. Below is a sensible structure we can use; update any sections as needed.
          </p>
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-2">1. Plans and Billing</h2>
              <p className="text-foreground/80">Details about plan durations, renewals, pricing changes, taxes, and proration.</p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-2">2. Trials and Intro Offers</h2>
              <p className="text-foreground/80">Explain how trials convert to paid, cancellation timing, and eligibility rules.</p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-2">3. Payment Methods</h2>
              <p className="text-foreground/80">Accepted methods, storage of payment tokens, failed renewals, and collection.</p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-2">4. Cancellations and Refunds</h2>
              <p className="text-foreground/80">How to cancel, timing, access through period-end, and refund eligibility.</p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-2">5. Changes to Service</h2>
              <p className="text-foreground/80">How features or pricing may change with advance notice where required.</p>
            </section>
          </div>
        </div>
      </section>
    </Layout>
  );
}

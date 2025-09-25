import Layout from "@/components/Layout";

export default function PrivacyPolicy() {
  return (
    <Layout>
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-foreground/80 mb-6">
            Please provide your final Privacy Policy content. This page is fully wired and styled. Here’s a suggested outline to speed things up:
          </p>
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-2">1. Information We Collect</h2>
              <p className="text-foreground/80">Account data, usage data, device data, cookies, and analytics.</p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-2">2. How We Use Information</h2>
              <p className="text-foreground/80">Service provision, safety, personalization, analytics, and communication.</p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-2">3. Sharing and Disclosure</h2>
              <p className="text-foreground/80">Vendors, legal requests, business transfers, and with your consent.</p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-2">4. Your Rights</h2>
              <p className="text-foreground/80">Access, correction, deletion, objection, and data portability.</p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-2">5. Data Security & Retention</h2>
              <p className="text-foreground/80">Technical and organizational measures, and how long we keep data.</p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-2">6. International Transfers</h2>
              <p className="text-foreground/80">Safeguards used when transferring data across borders.</p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-2">7. Contact</h2>
              <p className="text-foreground/80">Email: support@studevo.com</p>
            </section>
          </div>
        </div>
      </section>
    </Layout>
  );
}

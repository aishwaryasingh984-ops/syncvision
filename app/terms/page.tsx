export default function TermsPage() {
  return (
    <main className="bg-[var(--syncvision-bg-light)] text-[var(--syncvision-text-main)] pt-28 pb-16 md:pt-36">
      <section className="max-w-5xl mx-auto px-6">
        <div className="border-l-4 border-[var(--syncvision-gold)] pl-5 mb-8">
          <h1 className="text-3xl md:text-5xl font-extrabold text-[var(--syncvision-green)] tracking-tight">
            Terms & Conditions
          </h1>
          <p className="mt-3 text-sm md:text-base text-[var(--syncvision-text-muted)]">
            Effective date: April 1, 2026
          </p>
        </div>

        <div className="bg-white rounded-3xl border border-[var(--syncvision-blue-light)]/20 shadow-[0_12px_32px_rgba(13,27,62,0.08)] p-6 md:p-10 space-y-8">
          <section>
            <h2 className="text-xl font-bold text-[var(--syncvision-green)] mb-2">1. Acceptance of Terms</h2>
            <p className="text-[var(--syncvision-text-muted)] leading-relaxed">
              By accessing or using this website, you agree to these Terms & Conditions. If you do not agree, please discontinue use of the website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--syncvision-green)] mb-2">2. Website Use</h2>
            <p className="text-[var(--syncvision-text-muted)] leading-relaxed">
              Content on this website is for general information about SyncVision Research Solution LLP and its services. You agree not to misuse the website or attempt unauthorized access.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--syncvision-green)] mb-2">3. Intellectual Property</h2>
            <p className="text-[var(--syncvision-text-muted)] leading-relaxed">
              All branding, text, visuals, and materials on this website are owned by or licensed to SyncVision Research Solution LLP and may not be copied, distributed, or reused without prior written permission.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--syncvision-green)] mb-2">4. External Links</h2>
            <p className="text-[var(--syncvision-text-muted)] leading-relaxed">
              This website may include links to third-party websites. We are not responsible for the content, security, or privacy practices of external sites.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--syncvision-green)] mb-2">5. Limitation of Liability</h2>
            <p className="text-[var(--syncvision-text-muted)] leading-relaxed">
              SyncVision Research Solution LLP is not liable for any direct or indirect damages resulting from use of this website, to the extent permitted by applicable law.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--syncvision-green)] mb-2">6. Updates to Terms</h2>
            <p className="text-[var(--syncvision-text-muted)] leading-relaxed">
              We may update these Terms & Conditions at any time. Updates are effective when posted on this page.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--syncvision-green)] mb-2">7. Contact</h2>
            <p className="text-[var(--syncvision-text-muted)] leading-relaxed">
              For questions related to these terms, contact us at{" "}
              <a
                href="mailto:info@syncvisionresearch.com"
                className="text-[var(--syncvision-teal)] font-semibold hover:underline"
              >
                info@syncvisionresearch.com
              </a>
              .
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}

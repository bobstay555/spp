export default function TermsPage() {
  return (
    <section className="bg-background min-h-screen py-20 px-6 text-text-secondary">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-accent text-primary mb-8">Terms & Conditions</h1>

        <p className="mb-6">
          These Terms & Conditions govern your use of services offered by
          <strong> Smile Pic Photography</strong>. By booking or using our
          services, you agree to the terms outlined below.
        </p>

        <h2 className="text-2xl font-display text-text-primary mt-10 mb-3">
          1. Booking & Payments
        </h2>
        <ul className="list-disc ml-6 mb-6 space-y-2">
          <li>A booking is confirmed only after advance payment.</li>
          <li>Remaining payment must be completed on or before delivery.</li>
          <li>Advance is non-refundable but dates can be rescheduled.</li>
        </ul>

        <h2 className="text-2xl font-display text-text-primary mt-10 mb-3">
          2. Photography Coverage
        </h2>
        <ul className="list-disc ml-6 mb-6 space-y-2">
          <li>Coverage depends on event schedule and client cooperation.</li>
          <li>Unpredictable factors (weather, lighting, crowd) may affect output.</li>
          <li>Specific poses or shots are not guaranteed unless pre-discussed.</li>
        </ul>

        <h2 className="text-2xl font-display text-text-primary mt-10 mb-3">
          3. Image Delivery
        </h2>
        <ul className="list-disc ml-6 mb-6 space-y-2">
          <li>Editing time: 2–6 weeks depending on project size.</li>
          <li>RAW files are not provided unless agreed beforehand.</li>
          <li>Albums will be printed only after client approval.</li>
        </ul>

        <h2 className="text-2xl font-display text-text-primary mt-10 mb-3">
          4. Usage Rights
        </h2>
        <p className="mb-6">
          Smile Pic Photography retains rights to use images for portfolio,
          social media, or promotions, unless the client requests privacy
          in writing before the event.
        </p>

        <h2 className="text-2xl font-display text-text-primary mt-10 mb-3">
          5. Cancellations & Refunds
        </h2>
        <ul className="list-disc ml-6 mb-6 space-y-2">
          <li>Cancellations within 10 days of event will not receive refunds.</li>
          <li>Rescheduling is allowed once, subject to availability.</li>
        </ul>

        <h2 className="text-2xl font-display text-text-primary mt-10 mb-3">
          6. Liability
        </h2>
        <p className="mb-6">
          While we ensure quality and professionalism, we are not responsible for:
        </p>
        <ul className="list-disc ml-6 mb-6 space-y-2">
          <li>Loss of data due to technical failure</li>
          <li>Damage caused by third-party vendors</li>
          <li>Delays due to unforeseen circumstances</li>
        </ul>

        <h2 className="text-2xl font-display text-text-primary mt-10 mb-3">
          7. Contact Information
        </h2>
        <p>
          For inquiries about these Terms, reach out at:<br />
          <strong>Email:</strong> smilepicphotography03@gmail.com<br />
          <strong>Phone:</strong> 63829 54626
        </p>
      </div>
    </section>
  );
}

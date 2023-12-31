

export default function Page() {
  return (
    <main className="mx-2 lg:mx-10 mt-28 mb-4">
      <div>
        <h1 className="text-2xl font-bold text-center my-5 underline">Terms and Conditions</h1>

        <h2 className="text-xl font-bold">1. Acceptance of Terms</h2>
        <p>
          By accessing and using this website, you agree to be bound by these
          Terms and Conditions.
        </p>

        <h2 className="text-xl font-bold">2. Privacy</h2>
        <p>
          Refer to our <a href="privacy.html">Privacy Policy</a> for information
          about how we handle your personal information.
        </p>

        <h2 className="text-xl font-bold">3. Intellectual Property</h2>
        <p>
          All content on this website is protected by copyright and other
          intellectual property laws.
        </p>

        <h2 className="text-xl font-bold">4. Limitation of Liability</h2>
        <p>
          We are not liable for any damages or losses resulting from the use of
          this website.
        </p>

        <h2 className="text-xl font-bold">5. Changes to Terms</h2>
        <p>
          We reserve the right to change these Terms and Conditions at any time
          without notice.
        </p>

        <h2 className="text-xl font-bold">6. Contact Information</h2>
        <p>
          If you have any questions or concerns, please contact us at
          <span className="text-cyan-600 underline ms-2">{ process.env.NEXT_PUBLIC_APP_MAIL }</span>.
        </p>
      </div>
      <div>
        <h1 className="text-2xl font-bold text-center my-5 underline">Privacy Policy</h1>

        <h2 className="text-xl font-bold">1. Information Collection</h2>
        <p>
          We collect information that you provide, such as your name and email
          address, when you interact with our website.
        </p>

        <h2 className="text-xl font-bold">2. Information Use</h2>
        <p>
          We use your information to provide and improve our services, and we do
          not share your personal information with third parties.
        </p>

        <h2 className="text-xl font-bold">3. Cookies</h2>
        <p>
          We use cookies to enhance your browsing experience. You can disable
          cookies in your browser settings.
        </p>

        <h2 className="text-xl font-bold">4. Security</h2>
        <p>
          We take reasonable steps to protect your personal information, but we
          cannot guarantee security.
        </p>

        <h2 className="text-xl font-bold">5. Changes to Policy</h2>
        <p>
          We may update our Privacy Policy, and the updated version will be
          posted on this website.
        </p>

        <h2 className="text-xl font-bold">6. Contact Information</h2>
        <p>
          If you have questions or concerns about your privacy, please contact
          us at <span className="text-cyan-600 underline ms-2">{ process.env.NEXT_PUBLIC_APP_MAIL }</span>.
        </p>
      </div>
    </main>
  );
}

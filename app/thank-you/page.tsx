/**
 * Simple confirmation page displayed after the contact form is submitted.
 * It thanks the visitor and provides a link back to the home page. This
 * page lives under the `/thank-you` route configured by the app router.
 */
export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-4xl font-bold mb-4">Thank you!</h1>
      <p className="mb-8 max-w-xl">
        Your message has been received. I’ll review it and get back to you as soon as possible.
      </p>
      <a href="/" className="text-blue-600 underline hover:no-underline focus-visible:outline focus-visible:outline-offset-2">
        Return to homepage
      </a>
    </div>
  );
}
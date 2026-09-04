import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";
import Logo from "@/components/logo/logo";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#f5f6f8] text-[#101b35]">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
          <Logo/>

          <Link
            href="/register"
            className="flex items-center gap-2 text-sm text-gray-500 transition hover:text-teal-500"
          >
            <ArrowLeft size={17} />
            Back to Sign Up
          </Link>
        </div>
      </header>

      {/* Content */}
      <section className="mx-auto max-w-4xl px-6 py-14">
        {/* Title */}
        <div className="mb-10 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-100 text-teal-500">
            <FileText size={27} />
          </div>

          <h1 className="mt-5 text-4xl font-bold text-[#101b35]">
            Terms of Service
          </h1>

          
        </div>

        <div className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm md:p-10">
          <div className="space-y-9">
            <section>
              <h2 className="text-xl font-bold">1. Acceptance of Terms</h2>

              <p className="mt-3 leading-7 text-gray-600">
                By creating an account or using Montra, you agree to these Terms
                of Service. If you do not agree with these terms, please do not
                use the service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold">2. Using Montra</h2>

              <p className="mt-3 leading-7 text-gray-600">
                Montra provides tools that help you record, organize, and
                understand your personal expenses. You are responsible for the
                information you enter into your account.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold">3. Your Account</h2>

              <p className="mt-3 leading-7 text-gray-600">
                You are responsible for keeping your account information
                accurate and protecting your login credentials. You should
                notify us if you believe that your account has been accessed
                without your permission.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold">
                4. Your Financial Information
              </h2>

              <p className="mt-3 leading-7 text-gray-600">
                Montra is an expense tracking tool and does not provide
                financial, investment, tax, or legal advice. The information
                shown by the application should not be considered professional
                financial advice.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold">5. Prohibited Use</h2>

              <p className="mt-3 leading-7 text-gray-600">
                You agree not to misuse the service, attempt to gain
                unauthorized access, interfere with the application, or use
                Montra for unlawful purposes.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold">6. Service Availability</h2>

              <p className="mt-3 leading-7 text-gray-600">
                We aim to keep Montra available and reliable, but we cannot
                guarantee that the service will always be uninterrupted or
                error-free.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold">7. Changes to These Terms</h2>

              <p className="mt-3 leading-7 text-gray-600">
                We may update these Terms of Service when necessary. When
                changes are made, the updated version will be posted on this
                page.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold">8. Contact Us</h2>

              <p className="mt-3 leading-7 text-gray-600">
                If you have questions about these terms, please contact the
                Montra team.
              </p>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}

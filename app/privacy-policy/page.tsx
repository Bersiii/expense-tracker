import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import Logo from "@/components/logo/logo";

export default function PrivacyPolicyPage() {
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
            <ShieldCheck size={27} />
          </div>

          <h1 className="mt-5 text-4xl font-bold text-[#101b35]">
            Privacy Policy
          </h1>

          
        </div>

        <div className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm md:p-10">
          <div className="space-y-9">
            <section>
              <h2 className="text-xl font-bold">1. Introduction</h2>

              <p className="mt-3 leading-7 text-gray-600">
                Your privacy is important to us. This Privacy Policy explains
                what information Montra may collect, how it is used, and how we
                work to protect it.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold">2. Information We Collect</h2>

              <p className="mt-3 leading-7 text-gray-600">
                When you create an account, we may collect information such as
                your name, email address, and account information. When you use
                Montra, you may also provide expense information such as
                amounts, categories, dates, and descriptions.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold">
                3. How We Use Your Information
              </h2>

              <p className="mt-3 leading-7 text-gray-600">
                We use the information you provide to operate Montra, display
                your expenses and financial summaries, improve the application,
                and communicate with you about your account when necessary.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold">4. Your Expense Data</h2>

              <p className="mt-3 leading-7 text-gray-600">
                Your expense information is used to provide the tracking,
                category, statistics, and overview features of Montra. We do not
                use your expense information to provide financial advice.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold">5. Data Security</h2>

              <p className="mt-3 leading-7 text-gray-600">
                We take reasonable steps to protect your account and information
                from unauthorized access, alteration, or disclosure. However, no
                online service can guarantee complete security.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold">6. Cookies and Technology</h2>

              <p className="mt-3 leading-7 text-gray-600">
                Montra may use cookies or similar technologies when necessary to
                maintain sessions, remember preferences, and improve the
                experience of the application.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold">7. Your Choices</h2>

              <p className="mt-3 leading-7 text-gray-600">
                You may review and update certain account information through
                your account. If you have questions about your information or
                would like to request changes, please contact us.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold">8. Changes to This Policy</h2>

              <p className="mt-3 leading-7 text-gray-600">
                We may update this Privacy Policy from time to time. Any changes
                will be reflected on this page along with the updated date.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold">9. Contact Us</h2>

              <p className="mt-3 leading-7 text-gray-600">
                If you have any questions about this Privacy Policy or how your
                information is handled, please contact the Montra team.
              </p>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}

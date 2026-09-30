import type { Metadata } from "next";
import SignInForm from "./sign-in-form";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sign in | núvo",
};

const TRUST_POINTS = [
  "256-bit bank grade encryption",
  "Offline POS resilient cache",
  "Cairo 24/7 on-call support",
];

export default function SignInPage() {
  return (

    <>
    <nav className="h-[68px] w-full ">
      <div className="flex h-full items-center justify-between px-[47px]">
        {/* Logo */}
        <Link href="/" aria-label="Nuvo home" className="flex items-center">
          <Image
            src="/logo/navlogo.png"
            alt="Nuvo logo"
            width={96}
            height={40}
            priority
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* Right controls */}
        <div className="flex items-center gap-3">
          {/* Help */}
          <button
            type="button"
            className="flex h-7 items-center gap-1.5 rounded-full border border-[#ebe7df] bg-[#faf8f4] px-3 text-[11px] text-[#6b665e]"
          >
            <svg
              width="11"
              height="11"
              viewBox="0 0 24 24"
              fill="none"
              className="text-[#8c8479]"
            >
              <circle
                cx="12"
                cy="12"
                r="8.5"
                stroke="currentColor"
                strokeWidth="1.7"
              />
              <path
                d="M9.8 9.2a2.3 2.3 0 1 1 3.65 1.85c-.92.68-1.45 1.08-1.45 2.15"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
              />
              <circle cx="12" cy="16.3" r=".8" fill="currentColor" />
            </svg>

            <span>help</span>
          </button>

          {/* Language */}
          <button
            type="button"
            className="flex h-7 items-center gap-2 rounded-full border border-[#ebe7df] bg-[#faf8f4] px-2.5 text-[10px]"
          >
            <span className="rounded-full bg-white px-1.5 py-[3px] font-medium text-[#17543c]">
              EN
            </span>

            <span className="text-[#7d776e]">عربي</span>
          </button>
        </div>
      </div>
    </nav>
    
    <main className="flex flex-1 flex-col items-center px-4 py-12 sm:py-16">
      <SignInForm />

      <ul className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-primary/70">
        {TRUST_POINTS.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </main>
    </>
    
  );
}
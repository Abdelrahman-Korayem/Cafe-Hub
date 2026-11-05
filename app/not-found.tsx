import Image from "next/image";
import Container from "@/app/_components/ui/Container";
import Button from "@/app/_components/ui/Button";
import Logo from "@/app/_components/ui/Logo";

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-[#faf3e4]">
      {/* Dotted texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(rgba(153,95,47,0.18) 1px, transparent 1px)",
          backgroundSize: "5px 5px",
        }}
      />
      {/* Soft light behind the text */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 50% 45%, rgba(255,255,255,0.9), transparent 60%)",
        }}
      />

      {/* Decorations */}
      <div className="pointer-events-none absolute left-0 top-0 w-[38%] max-w-[300px] sm:w-[24%]">
        <Image
          src="/hero/splash.png"
          alt=""
          width={600}
          height={600}
          className="h-auto w-full"
          priority
        />
      </div>
      <div className="pointer-events-none absolute right-0 top-0 w-[34%] max-w-[420px] sm:w-[26%]">
        <Image
          src="/hero/leaves-1.png"
          alt=""
          width={900}
          height={900}
          className="h-auto w-full"
          priority
        />
      </div>

      {/* Header */}
      <header className="relative z-10 py-5">
        <Container>
          <Logo />
        </Container>
      </header>

      {/* Content */}
      <main className="relative z-10 flex flex-1 items-center justify-center px-4 pb-16 text-center">
        <div>
          <p
            className="flex items-center justify-center gap-1 text-[7rem] font-bold leading-none text-primary sm:gap-3 sm:text-[11rem] lg:text-[14rem]"
            aria-label="Error 404"
          >
            <span aria-hidden>4</span>
            <Image
              src="/hero/muffin.png"
              alt=""
              width={300}
              height={300}
              className="h-auto w-[5.5rem] sm:w-[9rem] lg:w-[11.5rem]"
              priority
            />
            <span aria-hidden>4</span>
          </p>

          <h1 className="mt-4 font-script text-4xl font-semibold text-secondary sm:text-5xl lg:text-6xl">
            Oops, this cup is empty
          </h1>

          <p className="mx-auto mt-4 max-w-md text-base text-ink/80 sm:text-lg">
            The page you’re looking for doesn’t exist or has been moved. Let’s
            get you back to the good stuff.
          </p>

          <Button href="/" arrow className="mt-8">
            Back to Home
          </Button>
        </div>
      </main>
    </div>
  );
}
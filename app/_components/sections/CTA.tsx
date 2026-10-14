import Container from "@/app/_components/ui/Container";
import Button from "@/app/_components/ui/Button";

export default function CTA() {
  return (
    <section id="get-started" className="bg-white py-12 sm:py-16">
      <Container>
        <div className="rounded-3xl bg-[#115C41] px-6 py-14 text-center sm:px-10 sm:py-16">
          <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-white">
            A simpler café starts here
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white text-balance sm:text-4xl">
            Ready to run your café smarter?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-white">
            Give your customers a simpler experience and your team the
            visibility they need.
          </p>
          <Button href="#" variant="light" className="mt-7 text-white hover:bg-white hover:text-green-700">
            Get Started
          </Button>
        </div>
      </Container>
    </section>
  );
}

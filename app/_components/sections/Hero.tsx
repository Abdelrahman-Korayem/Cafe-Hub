import Image from "next/image";
import Button from "@/app/_components/ui/Button";

export default function Hero() {
  return (
    <section id="home" className="w-full  pt-6 lg:pt-18">
      <div className="@container relative mx-auto w-full overflow-hidden bg-gradient-to-br from-[#fdf9f1] to-[#f8efde] lg:aspect-[1440/800]">
        {/* Text */}
        <div className="relative z-40 p-6 sm:p-10 lg:absolute lg:left-[4.5%] lg:top-[23%] lg:w-[41%] lg:p-0">
          <span className="inline-block rounded-md bg-sand px-4 py-2 text-xs font-semibold uppercase tracking-wide text-primary shadow-sm lg:px-[1.5cqw] lg:py-[0.7cqw] lg:text-[1cqw]">
            Built for cafe owners
          </span>

          <h1 className="mt-5 text-4xl font-bold leading-[1.15] text-ink lg:mt-[1.6cqw] lg:text-[4.4cqw]">
            More Customers
            <br />
            Happier Guests
            <span className="block font-script text-5xl font-semibold text-primary lg:text-[5cqw] lg:leading-[1.1]">
              A Bigger Cafe
            </span>
          </h1>

          <p className="mt-4 max-w-md text-base text-ink/80 lg:mt-[1.2cqw] lg:max-w-none lg:text-[1.3cqw] lg:leading-[1.5]">
            Manage bookings, memberships and daily operations in one place, so
            you can focus on what you love.
          </p>

          <Button href="#features" className="mt-6 lg:mt-[2cqw]">
            Explore Cafehub
          </Button>
        </div>

        {/* Visual composition */}
        <div className="relative aspect-[1100/595] w-full lg:absolute lg:inset-0">
          {/* Splash */}
          <div className="absolute left-[0%] top-[0%] z-0 w-[25%] hidden lg:block">
            <Image
              src="/hero/splash.png"
              alt=""
              width={600}
              height={600}
              className="h-auto w-full"
              priority
            />
          </div>

          {/* Big leaves, top right */}
          <div className="absolute right-0 top-0 z-0 w-[46%]">
            <Image
              src="/hero/leaves-1.png"
              alt=""
              width={900}
              height={900}
              className="h-auto w-full"
              priority
            />
          </div>

          {/* Podium */}
          <div className="absolute bottom-0 left-[30%] z-10 w-[70%]">
            <Image
              src="/hero/podium.png"
              alt=""
              width={1200}
              height={300}
              className="h-auto w-full"
            />
          </div>

          {/* Laptop */}
          <div className="absolute left-[40%] top-[24%] z-200 w-[58%]">
            <Image
              src="/hero/laptop.png"
              alt="CafeHub dashboard on a laptop"
              width={1200}
              height={800}
              className="h-auto w-full"
              priority
            />
          </div>

          {/* Side leaves */}
          <div className="absolute right-0 top-[30%] z-30 w-[13%]">
            <Image
              src="/hero/leaves-2.png"
              alt=""
              width={400}
              height={600}
              className="h-auto w-full"
            />
          </div>

          {/* Phone */}
          <div className="absolute left-[42%] top-[30%] z-30 w-[17%]">
            <Image
              src="/hero/phone.png"
              alt="CafeHub mobile app"
              width={400}
              height={600}
              className="h-auto w-full"
              priority
            />
          </div>

          {/* Muffin */}
          <div className="absolute left-[44.5%] top-[3%] z-30 w-[14%]">
            <Image
              src="/hero/muffin.png"
              alt=""
              width={400}
              height={400}
              className="h-auto w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
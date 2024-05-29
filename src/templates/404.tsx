import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export function Component(): JSX.Element {
  return (
    <main className="flex h-dvh flex-col justify-between bg-gradient-to-tl from-[#D40000] via-[#2F0B13] to-[#307260] bg-cover">
      <Navbar />
      <section className="flex w-full flex-col items-center gap-6 text-white">
        <h1 className="text-center text-5xl font-extrabold">404</h1>
        <h2 className="text-center text-3xl font-medium">
          There is no such page you're looking for.
        </h2>
      </section>
      <Footer />
    </main>
  );
}

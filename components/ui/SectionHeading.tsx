import Highlight from "./Highlight";

type Props = {
  label: string;
  title: string;
  text?: string;
  dark?: boolean; 
  underline?: boolean; 
  className?: string;
};

export default function SectionHeading({ label, title, text, dark, underline, className = "" }: Props) {
  return (
    <div data-aos="zoom-in" suppressHydrationWarning className={`text-center ${className}`}>
      <p className="font-heading text-sm md:text-base font-semibold uppercase tracking-[0.25em] text-brand">
        {label}
      </p>
      <h2
        className={`mt-3 font-heading text-3xl font-bold leading-[1.2] tracking-tight sm:text-4xl lg:text-[42px] ${
          dark ? "text-white" : "text-ink"
        }`}
      >
        <Highlight text={title} />
      </h2>
      {text && (
        <p className={`mx-auto mt-4 max-w-2xl text-base md:text-lg ${dark ? "text-white/80" : "text-slate-500"}`}>
          {text}
        </p>
      )}
      {underline && <div className="mx-auto mt-5 h-[3px] w-16 rounded bg-brand" />}
    </div>
  );
}

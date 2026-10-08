import Image from "next/image";
import { blogPosts, caseSection, caseStudies, blogSection, hero, servicesSection, site } from "@/data/data";
import AboutSection from "@/components/sections/AboutSection";
import BlogCard from "@/components/sections/BlogCard";
import CaseCard from "@/components/sections/CaseCard";
import ServicesGrid from "@/components/sections/ServicesGrid";
import StatsBanner from "@/components/sections/StatsBanner";
import Testimonials from "@/components/sections/Testimonials";
import ArrowButton from "@/components/ui/ArrowButton";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function Home() {
  const cases = caseStudies.filter((c) => c.listed).slice(0, 4);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0a0a0a] text-white">
        <Image src={site.images.hero} alt="" fill priority sizes="100vw" className="object-cover object-[75%_50%] lg:object-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/40 sm:bg-gradient-to-r sm:from-black/60 sm:via-black/20 sm:to-black/0 lg:from-black/50 lg:via-black/10 lg:to-transparent" />
        <div className="container-x relative flex min-h-[400px] items-center py-16 md:min-h-[460px] lg:min-h-[520px]">
          <div className="max-w-[760px] -mt-8 md:-mt-16">
            <h1 className="font-body text-[32px] font-bold leading-[1.1] tracking-tight sm:text-[40px] md:text-[56px]">
              {hero.title.split("*").map((part, i) =>
                i % 2 === 1 ? (
                  <span key={i} className="block text-brand">
                    {part}
                  </span>
                ) : (
                  part
                ),
              )}
            </h1>
            <p className="mt-5 max-w-[560px] text-lg leading-7 sm:mt-6 sm:text-xl sm:leading-8">{hero.text}</p>
          </div>
        </div>
      </section>

      <AnimatedSection>
        <AboutSection />
      </AnimatedSection>

      {/* Services */}
      <AnimatedSection className="bg-ink py-12 md:py-16">
        <SectionHeading dark label={servicesSection.label} title={servicesSection.title} text={servicesSection.text} className="mb-12 px-5 font-mont" />
        <ServicesGrid dark limit={3} />
      </AnimatedSection>

      {/* Testimonials */}
      <AnimatedSection className="py-12 md:py-16">
        <SectionHeading
          label="Testimonials"
          title="What Our *Clients Say*"
          text="We take pride in building long-term relationships and delivering real results. Here's what our clients have to say about working with us."
          className="px-5"
        />
        <Testimonials />
      </AnimatedSection>

      {/* Case studies */}
      <AnimatedSection className="pb-12 md:pb-16 pt-4 md:pt-6">
        <SectionHeading label={caseSection.label} title={caseSection.title} underline className="mb-10 px-5" />
        <div className="container-x grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cases.map((c) => (
            <CaseCard key={c.id} item={c} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <ArrowButton href="/case-study">View More</ArrowButton>
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <StatsBanner />
      </AnimatedSection>

      {/* Blog */}
      <AnimatedSection className="py-12 md:py-16">
        <SectionHeading label={blogSection.label} title={blogSection.title} text={blogSection.text} underline className="mb-10 px-5" />
        <div className="container-x grid gap-6 lg:grid-cols-3">
          {blogPosts.slice(0, 3).map((p) => (
            <BlogCard key={p.id} post={p} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <ArrowButton href="/blog">View More</ArrowButton>
        </div>
      </AnimatedSection>
    </>
  );
}

export type IconName =
  | "target" | "chart" | "lightbulb" | "users" | "handshake" | "briefcase" | "award"
  | "shield" | "clock" | "file" | "settings" | "megaphone" | "cpu" | "search" | "trending";

import rawData from "./data.json";

export const BizConsult = rawData.BizConsult;
export const templateComponents = rawData.BizConsult.templateComponents;
export const sections = rawData.BizConsult.sections;

const s = rawData.BizConsult.sections;

export const site = s.SiteChrome.variants.BizConsultHeader1.site;
export const navLinks = s.SiteChrome.variants.BizConsultHeader1.navLinks;
export const quickLinks = s.SiteChrome.variants.BizConsultFooter1.quickLinks;
export const hero = s.Hero.variants.BizConsultHero1;
export const about = s.About.variants.BizConsultAbout1;
export const whyChoose = s.WhyChoose.variants.BizConsultWhyChoose1;
export const stats = s.Stats.variants.BizConsultStats1;
export const testimonials = s.Testimonials.variants.BizConsultTestimonials1;

export type Service = (typeof s.Services.variants.BizConsultServices1.services)[0];
export type CaseStudy = (typeof s.CaseStudies.variants.BizConsultCaseStudies1.caseStudies)[0];
export type BlogPost = (typeof s.Blog.variants.BizConsultBlog1.blogPosts)[0];

export const services = s.Services.variants.BizConsultServices1.services as Service[];
export const serviceCardOrder = s.Services.variants.BizConsultServices1.serviceCardOrder;
export const servicesSection = s.Services.variants.BizConsultServices1.section;
export const caseStudies = s.CaseStudies.variants.BizConsultCaseStudies1.caseStudies as CaseStudy[];
export const caseSection = s.CaseStudies.variants.BizConsultCaseStudies1.section;
export const caseHelpCard = s.CaseStudies.variants.BizConsultCaseStudies1.caseHelpCard;
export const blogPosts = s.Blog.variants.BizConsultBlog1.blogPosts as BlogPost[];
export const blogCategories = s.Blog.variants.BizConsultBlog1.categories;
export const blogSection = s.Blog.variants.BizConsultBlog1.section;
export const faqSection = s.Faq.variants.BizConsultFaq1.section;
export const faqs = s.Faq.variants.BizConsultFaq1.faqs;
export const contactInfo = s.Contact.variants.BizConsultContact1.info;
export const contactSection = s.Contact.variants.BizConsultContact1.section;
export const quoteSection = s.Quote.variants.BizConsultQuote1;
export const thankYou = s.ThankYou.variants.BizConsultThankYou1;
export const pageTitles = s.PageBanner.variants.BizConsultPageBanner1.pageTitles;

// ---------------------------------------------------------------- Detail page links 
export const detailLink = {
  service: (id: number) => `/service-details/${id}`,
  caseStudy: (id: number) => `/case-studies-detail/${id}`,
  blog: (id: number) => `/blog-detail/${id}`,
};

export default rawData;

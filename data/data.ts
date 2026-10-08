// Saara site ka data yahin se aata hai. Text/image/link badalna ho to sirf is file mein badlo.
// Title mein *star* ke beech ka text orange highlight hota hai.

export type IconName =
  | "target" | "chart" | "lightbulb" | "users" | "handshake" | "briefcase" | "award"
  | "shield" | "clock" | "file" | "settings" | "megaphone" | "cpu" | "search" | "trending";

import data from "./data.json";

export const site = data.site;
export const navLinks = data.navLinks;
export const quickLinks = data.quickLinks;
export const hero = data.hero;
export const about = data.about;
export const whyChoose = data.whyChoose;
export const stats = data.stats;
export const testimonials = data.testimonials;
export type Service = (typeof data.services)[0];
export type CaseStudy = (typeof data.caseStudies)[0];
export type BlogPost = (typeof data.blogPosts)[0];

export const services = data.services as Service[];
export const serviceCardOrder = data.serviceCardOrder;
export const servicesSection = data.servicesSection;
export const caseStudies = data.caseStudies as CaseStudy[];
export const caseSection = data.caseSection;
export const caseHelpCard = data.caseHelpCard;
export const blogPosts = data.blogPosts as BlogPost[];
export const blogCategories = data.blogCategories;
export const blogSection = data.blogSection;
export const faqSection = data.faqSection;
export const faqs = data.faqs;
export const contactInfo = data.contactInfo;
export const contactSection = data.contactSection;
export const quoteSection = data.quoteSection;
export const thankYou = data.thankYou;
export const pageTitles = data.pageTitles;

// ---------------------------------------------------------------- Detail page links (bina slug: /page?id=2)
export const detailLink = {
  service: (id: number) => `/service-details/${id}`,
  caseStudy: (id: number) => `/case-studies-detail/${id}`,
  blog: (id: number) => `/blog-detail/${id}`,
};

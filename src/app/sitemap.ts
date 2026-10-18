import { MetadataRoute } from "next";
import { doctors } from "@/data/doctors";
import { specialities } from "@/data/specialities";
import { packagesData } from "@/data/packages";
import { servicesData } from "@/data/services";
import { facilitiesData } from "@/data/facilities";
import { departmentsData } from "@/data/departments";
import { articlesData } from "@/data/articles";
import { newsData, eventsData } from "@/data/newsEvents";
import { jobPostings } from "@/data/careers";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.marriotthospital.com";

  // Static core routes
  const staticRoutes = [
    "",
    "/about",
    "/about/our-hospital",
    "/about/vision-mission-values",
    "/about/leadership",
    "/about/infrastructure",
    "/about/quality-and-patient-safety",
    "/about/accreditations",
    "/about/community-initiatives",
    "/doctors",
    "/specialities",
    "/departments",
    "/services",
    "/facilities",
    "/appointments",
    "/appointments/faq",
    "/patients",
    "/patients/new-patients",
    "/patients/existing-patients",
    "/patients/opd-and-timings",
    "/patients/admission",
    "/patients/discharge",
    "/patients/billing-and-insurance",
    "/patients/medical-records",
    "/patients/patient-rights",
    "/patients/visitor-guidelines",
    "/patients/feedback",
    "/patients/faqs",
    "/health-packages",
    "/health-library",
    "/news",
    "/events",
    "/international-patients",
    "/careers",
    "/careers/apply",
    "/contact",
    "/locations",
    "/search",
    "/privacy-policy",
    "/terms-and-conditions",
    "/cookie-policy",
    "/accessibility",
    "/medical-disclaimer",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : route.startsWith("/appointments") || route.startsWith("/doctors") ? 0.9 : 0.8,
  }));

  // Dynamic doctor routes
  const doctorRoutes = doctors.map((doc) => ({
    url: `${baseUrl}/doctors/${doc.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  // Dynamic speciality routes
  const specialityRoutes = specialities.map((spec) => ({
    url: `${baseUrl}/specialities/${spec.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  // Dynamic package routes
  const packageRoutes = packagesData.map((pkg) => ({
    url: `${baseUrl}/health-packages/${pkg.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // Dynamic service routes
  const serviceRoutes = servicesData.map((svc) => ({
    url: `${baseUrl}/services/${svc.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  // Dynamic facility routes
  const facilityRoutes = facilitiesData.map((fac) => ({
    url: `${baseUrl}/facilities/${fac.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Dynamic department routes
  const departmentRoutes = departmentsData.map((dep) => ({
    url: `${baseUrl}/departments/${dep.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  // Dynamic article routes
  const articleRoutes = articlesData.map((art) => ({
    url: `${baseUrl}/health-library/${art.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Dynamic news routes
  const newsRoutes = newsData.map((item) => ({
    url: `${baseUrl}/news/${item.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  // Dynamic event routes
  const eventRoutes = eventsData.map((evt) => ({
    url: `${baseUrl}/events/${evt.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  // Dynamic career routes
  const careerRoutes = jobPostings.map((job) => ({
    url: `${baseUrl}/careers/${job.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [
    ...staticRoutes,
    ...doctorRoutes,
    ...specialityRoutes,
    ...packageRoutes,
    ...serviceRoutes,
    ...facilityRoutes,
    ...departmentRoutes,
    ...articleRoutes,
    ...newsRoutes,
    ...eventRoutes,
    ...careerRoutes,
  ];
}

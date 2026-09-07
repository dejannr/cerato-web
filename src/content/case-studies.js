/**
 * Local case-study content model. Optional fields are omitted rather than
 * rendered as empty UI, so approved customer stories can be added directly.
 */
export const caseStudies = [
  { slug: "case-study-one", status: "placeholder", title: "Case study coming soon", industry: "PLACEHOLDER", summary: "PLACEHOLDER: CASE STUDY 1 SUMMARY", featured: true, facts: [], challenge: { heading: "PLACEHOLDER: CHALLENGE", body: [] }, solution: { heading: "PLACEHOLDER: SOLUTION", body: [] }, sections: [], outcomes: [] },
  { slug: "case-study-two", status: "placeholder", title: "Case study coming soon", industry: "PLACEHOLDER", summary: "PLACEHOLDER: CASE STUDY 2 SUMMARY", featured: true, facts: [], challenge: { heading: "PLACEHOLDER: CHALLENGE", body: [] }, solution: { heading: "PLACEHOLDER: SOLUTION", body: [] }, sections: [], outcomes: [] },
];
export const getCaseStudy = (slug) => caseStudies.find((study) => study.slug === slug);

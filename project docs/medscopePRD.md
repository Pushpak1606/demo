**MEDSCOPE**

Product Requirements Document

_AI-Powered Digital Healthcare Platform_

| **Project**       | Medscope                        |
| ----------------- | ------------------------------- |
| **Version**       | 1.0                             |
| **Date**          | March 2026                      |
| **Department**    | Information Technology (B.Tech) |
| **Frontend Lead** | Student - IT Team               |

# **1\. Executive Summary**

Medscope is an AI-powered digital healthcare platform designed to unify physical health management, mental health support, and smart medication management into a single, patient-centric ecosystem. The platform bridges the gap between fragmented healthcare services by leveraging artificial intelligence to provide continuous, personalized support for patients while streamlining clinical workflows for medical professionals.

This PRD defines the complete frontend requirements, user flows, feature specifications, and design expectations for the Medscope website - serving as the guiding blueprint for the vibe-coding process.

# **2\. Problem Statement**

Current healthcare systems suffer from critical fragmentation that Medscope is designed to solve:

- Patients manage physical health, mental health, and medications through entirely disconnected apps and services.
- Medication non-adherence reaches 50% in chronic disease patients due to the absence of intelligent, continuous reminder systems.
- Mental health support is siloed from physical health records, leading to incomplete diagnoses and treatment gaps.
- Doctors lack real-time patient context between appointments, severely limiting proactive care and early intervention.
- No single platform combines AI-driven guidance, live consultations, community peer support, and lifestyle coaching in one unified experience.

# **3\. Goals & Objectives**

## **3.1 Platform Goals**

- Integrate physical consultations, mental health, medication management, and lifestyle coaching into one seamless platform.
- Reduce missed medication doses by 30-50% through intelligent AI-driven reminders and nearby pharmacy suggestions.
- Enable early symptom detection through AI screening, daily journaling, and health trend analysis.
- Provide 24/7 mental health support through an empathetic AI chatbot with clinical escalation pathways.
- Streamline doctor workflows via centralized patient dashboards and AI-generated summaries.
- Ensure HIPAA/GDPR-compliant data handling with clearly defined AI-human decision boundaries.

## **3.2 Frontend-Specific Goals**

- Build a visually stunning, responsive, and accessible web interface that rivals production-grade healthcare platforms.
- Deliver an intuitive user experience for both patients and doctors with zero learning curve.
- Implement smooth role-based navigation between the Patient Portal and Doctor Portal.
- Achieve fast load times, skeleton states, and seamless transitions between all modules.
- Maintain consistent design language aligned with a modern, trustworthy medical aesthetic.

# **4\. Target Users**

| **User Type** | **Description**                                                                                   | **Primary Needs**                                                   |
| ------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| Patient       | Individuals seeking physical or mental healthcare, medication management, and lifestyle guidance. | Reminders, AI assistant, doctor access, community support.          |
| Doctor        | Licensed medical professionals managing patient details, consultations, and treatment workflows.  | Patient data, AI prescription aid, schedule management, delegation. |

# **5\. Feature Requirements**

## **5.1 Public Pages**

| **ID** | **Feature**          | **Description**                                                                                           | **Priority** | **Status** |
| ------ | -------------------- | --------------------------------------------------------------------------------------------------------- | ------------ | ---------- |
| F-01   | **Landing Page**     | Hero section, feature highlights, how-it-works flow, testimonials, dual CTA for patient and doctor login. | **High**     | In Dev     |
| F-02   | **About Page**       | Mission, team intro, platform story, and B.Tech project context.                                          | **Medium**   | Planned    |
| F-03   | **Login / Register** | Dual-portal login (Patient / Doctor) with role-based redirect. Multi-step registration form.              | **High**     | In Dev     |
| F-04   | **Pricing Page**     | Subscription tiers or academic demo banner.                                                               | **Low**      | Planned    |

## **5.2 Patient Portal**

| **ID** | **Feature**               | **Description**                                                                                                 | **Priority** | **Status** |
| ------ | ------------------------- | --------------------------------------------------------------------------------------------------------------- | ------------ | ---------- |
| P-01   | **Patient Dashboard**     | Personalized home with health summary, upcoming reminders, and quick-access cards.                              | **High**     | In Dev     |
| P-02   | **AI Medicine Assistant** | Upload medicine photo/details. AI provides content, dosage, disease relevance, timing, and drug classification. | **High**     | Planned    |
| P-03   | **Reminder System**       | Smart reminders for medicine intake, meals, and refills. Suggests nearby medical shops.                         | **High**     | Planned    |
| P-04   | **Nutrition & Exercise**  | Disease-specific nutrition plans and exercise routines dynamically tailored to health profile.                  | **High**     | Planned    |
| P-05   | **Live Consultation**     | Live chat and video/audio call interface with available doctors. Booking and scheduling UI.                     | **High**     | Planned    |
| P-06   | **Mental Health Module**  | AI disorder diagnosis chat, mood tracking, daily journaling, severity assessment UI.                            | **High**     | In Dev     |
| P-07   | **AI Chatbot**            | Empathetic chatbot for immediate support, companionship, and mental health check-ins.                           | **High**     | Planned    |
| P-08   | **Daily Journal**         | Rich-text journal editor with date history, mood tags, and private encrypted notes.                             | **Medium**   | Planned    |
| P-09   | **Community**             | Moderated peer community grouped by condition. Forums, posts, reactions, and moderation.                        | **Medium**   | Planned    |
| P-10   | **Health Profile**        | Editable profile with medical history, current conditions, allergies, and preferences.                          | **High**     | Planned    |

## **5.3 Doctor Portal**

| **ID** | **Feature**               | **Description**                                                                           | **Priority** | **Status** |
| ------ | ------------------------- | ----------------------------------------------------------------------------------------- | ------------ | ---------- |
| D-01   | **Doctor Dashboard**      | Today's appointments, patient alerts, pending reviews, and key metrics overview.          | **High**     | In Dev     |
| D-02   | **Patient Details**       | Complete patient profiles with medical history, current meds, and AI-generated summaries. | **High**     | Planned    |
| D-03   | **AI Medicine Assistant** | AI-guided prescription suggestions based on patient disease, symptoms, and history.       | **High**     | Planned    |
| D-04   | **Daily Schedule**        | Calendar/agenda view for appointments and tasks. Create, edit, and cancel slots.          | **High**     | Planned    |
| D-05   | **Community**             | Professional networking and moderated case discussion groups for doctors.                 | **Medium**   | Planned    |
| D-06   | **Assistant Doctor**      | Delegation interface to assign patients or consultations to an available assistant.       | **Medium**   | Planned    |
| D-07   | **Consultation UI**       | Live chat and call interface accessible during scheduled patient consultations.           | **High**     | Planned    |

# **6\. Page Specifications**

## **6.1 Landing Page (/)**

- Navbar: Logo, nav links (Home, Features, About, Pricing, Contact), dual CTA - 'Patient Login' and 'Doctor Login'.
- Hero: Full-width section with headline, subtitle, animated visual/mockup, and primary CTA button.
- Features Strip: 3-4 highlighted AI features with icons and short descriptions.
- How It Works: 3-step animated flow - Register, Connect, Get Care.
- Testimonials: Carousel with patient and doctor quotes.
- Footer: Navigation links, social icons, and legal text.

## **6.2 Auth Pages**

- Login: Role selector (Patient / Doctor) then email and password fields with submit.
- Register: Role-based multi-step form capturing name, email, and role-specific medical details.
- Password Reset: Email-based reset flow with confirmation screen.

## **6.3 Patient Dashboard (/patient/dashboard)**

- Sidebar Navigation: Links to all patient modules with icons.
- Top Bar: User greeting, notification bell, quick profile access.
- Health Summary Card: Current conditions, last activity, and adherence score.
- Upcoming Reminders Widget: Next 3 reminders in chronological order.
- Quick Access Grid: Icon cards for AI Assistant, Consultations, Journal, and Community.

## **6.4 Doctor Dashboard (/doctor/dashboard)**

- Sidebar Navigation: Links to all doctor modules.
- Top Bar: Availability toggle, notification bell, profile access.
- Today's Appointments: Time-sorted list with patient names and consultation type.
- Patient Alert Panel: Patients requiring follow-up or showing concerning trends.
- Quick Stats: Total patients, consultations today, and pending reviews.

# **7\. Non-Functional Requirements**

| **Requirement** | **Specification**                                                                       |
| --------------- | --------------------------------------------------------------------------------------- |
| Responsiveness  | Fully responsive across mobile (320px+), tablet (768px+), and desktop (1280px+).        |
| Performance     | Page load under 3 seconds on standard broadband. Lazy-load images and heavy components. |
| Accessibility   | WCAG 2.1 AA compliance. Semantic HTML, ARIA labels, full keyboard navigation support.   |
| Tech Stack      | Next.js / React + Tailwind CSS + Framer Motion. Deployed on Vercel.                     |
| Security        | HTTPS enforced. JWT token-based auth. Sensitive data never stored in localStorage.      |
| Browser Support | Chrome, Firefox, Edge, and Safari - last 2 major versions each.                         |

# **8\. User Journey Maps**

## **8.1 Patient - Physical Consultation**

- Visits landing page and clicks 'Patient Login'.
- Registers or logs in via the Patient auth portal.
- Lands on Patient Dashboard - sees health summary, reminders, and quick links.
- Navigates to AI Medicine Assistant - uploads medicine image or enters details.
- Reviews AI output: dosage, timing, disease relevance, and drug classification.
- Sets a reminder - system suggests meal timing and nearby pharmacies.
- Accesses Nutrition and Exercise module for a disease-specific lifestyle plan.
- Initiates live consultation - selects available doctor, enters chat or call interface.

## **8.2 Patient - Mental Health**

- Login then Dashboard then selects the Mental Health pathway.
- Opens AI Chatbot - begins conversation; bot assesses mood and current symptoms.
- AI analyzes responses against medical history, provides disorder type and severity assessment.
- User writes in Daily Journal - mood logs, free-text entries, and personal tags.
- Explores Community - joins a condition-specific group, reads and creates posts.
- Books live consultation with a psychiatrist through the in-platform scheduling UI.

## **8.3 Doctor Journey**

- Doctor logs in and is redirected to the Doctor Dashboard.
- Reviews today's schedule and patient alerts on the dashboard.
- Opens a patient profile - reviews history, current medications, and AI summaries.
- Uses AI Medicine Assistant to validate or draft a prescription recommendation.
- Joins scheduled consultation - chats and prescribes through the platform interface.
- If unavailable, delegates the patient to an assistant doctor via the delegation UI.

# **9\. Assumptions & Constraints**

## **9.1 Assumptions**

- Backend APIs will be developed by other team members and consumed by the frontend via REST or GraphQL.
- AI features (chatbot, diagnosis, medicine assistant) are handled by the backend and AI team; frontend renders and displays responses only.
- Authentication tokens are provided by the backend; the frontend manages session state via secure cookies or memory.
- The platform will be demoed in an academic context - production-level AI response latency is acceptable.

## **9.2 Constraints**

- This is a final year B.Tech project - timeline is semester-bound with a fixed viva deadline.
- The team is following a vibe-coding approach: rapid iteration with AI-assisted development tools.
- Real payment gateway integration is out of scope for the MVP.
- Full HIPAA/GDPR compliance is aspirational for MVP; security best practices will be applied throughout.

# **10\. Success Metrics**

| **Metric**                   | **Target**                                      | **How to Measure**                       |
| ---------------------------- | ----------------------------------------------- | ---------------------------------------- |
| All major pages implemented  | 100% of F, P, and D feature IDs                 | Feature checklist review                 |
| Mobile-responsive UI         | Works at 320px through 1920px viewport widths   | Chrome DevTools breakpoint testing       |
| Lighthouse performance score | Above 85 for Performance and Accessibility      | Chrome Lighthouse audit on Vercel deploy |
| Demo-ready for viva          | Full end-to-end patient and doctor flow working | Live walkthrough demo without errors     |

# **11\. Out of Scope (MVP)**

- Real payment gateway integration.
- Production-grade AI model training or fine-tuning by the frontend team.
- Native mobile application for iOS or Android.
- EHR/EMR external system integrations.
- Real-time wearable device data ingestion.
- Multi-language internationalization (i18n).

_\-- End of Document --_

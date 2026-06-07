**MEDSCOPE**

Frontend Design Document

_Visual Language, UI Patterns & Component Specification_

_Inspired by the Markify Design Reference_

# **1\. Design Philosophy**

Medscope's frontend design is inspired by the reference UI provided - a modern, clean marketplace layout (Markify) characterized by a minimal white canvas, strong typographic hierarchy, purposeful accent colors, and card-based content organization. Applied to a healthcare context, this translates into a design system that feels trustworthy, calm, and clinical-grade while remaining warm and approachable.

## **1.1 Core Design Principles**

| **Principle**                | **Application in Medscope**                                                                                             |
| ---------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| **Clarity First**            | Every screen communicates one primary action. No visual clutter. Medical information is presented with clean hierarchy. |
| **Trust Through Aesthetics** | White space, structured cards, and a professional teal-navy palette signal medical credibility and safety.              |
| **Progressive Disclosure**   | Complex medical data (medicine details, AI diagnoses) is revealed in layers - summary first, detail on demand.          |
| **Role Clarity**             | Patient and Doctor portals have distinct yet consistent visual identities - same system, different context.             |
| **Accessible by Default**    | Color contrast ratios meet WCAG AA. All interactive elements are keyboard-accessible. Text is legible at all sizes.     |
| **Motion with Purpose**      | Framer Motion animations are used sparingly - page transitions, loading states, and micro-interactions only.            |

# **2\. Reference UI Analysis (Markify)**

The provided Markify UI reference is a creative digital marketplace with a clean layout. Below is the analysis of its key design patterns and how they translate directly to Medscope.

## **2.1 Layout Structure Observed**

- Fixed top navigation bar with logo (left), nav links (center-right), and a dark CTA button - this exact pattern will be used for Medscope's navbar.
- Clean white/off-white canvas as the primary background - maintained for all Medscope pages.
- Card-based content organization in a responsive grid - used for features, patient modules, and doctor tools.
- Category tabs (All Creatives, SaaS, Business, etc.) for filtering - will become module tabs in patient and doctor dashboards.
- Large bold typography for headlines (60-72px equivalent) tapering to readable body text - adopted directly.
- Subtle green accent color for pricing and highlights - replaced with Medscope's teal (#028090) for medical branding.
- Blog section with image cards and date/title metadata - becomes the 'Community Feed' and 'Daily Journal' sections.
- Full-width footer with organized link columns and social icons - adopted 1:1 in structure.

## **2.2 Component Patterns Identified**

| **Component**      | **In Markify Reference**                                      | **In Medscope**                                                           |
| ------------------ | ------------------------------------------------------------- | ------------------------------------------------------------------------- |
| **Navigation Bar** | Logo + nav links + dark 'Buy Template' button                 | Logo + nav + 'Patient Login' + 'Doctor Login' dual CTAs                   |
| **Hero Section**   | Badge + H1 headline + subtitle + CTA button + product mockup  | Badge ('AI Healthcare') + headline + subtitle + dual CTA + app screenshot |
| **Category Cards** | 4 icon cards with label (Website, App, Dashboard, Branding)   | 4 pathway cards (Physical Health, Mental Health, Medication, Lifestyle)   |
| **Product Grid**   | 3-column card grid with image, name, price, and action button | Module grid with icon, title, short description, and 'Open' button        |
| **Filter Tabs**    | Horizontal pill tabs (All, SaaS, Business, Mobile)            | Horizontal pill tabs (All, Physical, Mental, Reminders, Community)        |
| **Blog Cards**     | Date + title + excerpt + 'Read More' link                     | Community post / journal card with mood tag, date, and excerpt            |
| **CTA Banner**     | 'Are you Looking for Custom Creatives? Book a call' section   | 'Need a Doctor Now? Book Live Consultation' banner section                |
| **Footer**         | 4-column link grid with logo and social icons                 | Same structure - links to portals, support, legal, social                 |

# **3\. Color System**

## **3.1 Primary Palette**

The Markify reference uses a clean dark CTA on white, with green accents. For Medscope, the green accent is replaced with a healthcare-appropriate teal, and a deep navy is introduced for premium authority.

| **Swatch** | **Name**          | **Hex** | **Usage** |
| ---------- | ----------------- | ------- | --------- |
|            | **Medscope Teal** | #028090 | 028090    |
|            | **Deep Navy**     | #0A2342 | 0A2342    |
|            | **Seafoam**       | #00A896 | 00A896    |
|            | **Teal Light**    | #E0F4F6 | E0F4F6    |
|            | **Pure White**    | #FFFFFF | FFFFFF    |
|            | **Off-White**     | #F7F9FA | F7F9FA    |
|            | **Near Black**    | #2D2D2D | 2D2D2D    |
|            | **Body Gray**     | #555555 | 555555    |
|            | **Alert Red**     | #C0392B | C0392B    |
|            | **Warning Amber** | #E67E22 | E67E22    |
|            | **Health Green**  | #27AE60 | 27AE60    |

## **3.2 Dark Mode Considerations**

Medscope's dashboard should support a light/dark toggle. In dark mode: the primary background shifts to #0D1117, card surfaces to #161B22, and text inverts. The teal accent remains unchanged as it reads well on both light and dark backgrounds.

# **4\. Typography System**

Inspired by the Markify reference's strong typographic hierarchy. Medscope uses a modern sans-serif system for clinical legibility and professional weight.

| **Element**           | **Font**       | **Size / Weight** | **Usage**                                          |
| --------------------- | -------------- | ----------------- | -------------------------------------------------- |
| **Display / Hero H1** | Inter or Sora  | 60-72px / 800     | Landing page headline. Bold and impactful.         |
| **Page Title H1**     | Inter          | 40-48px / 700     | Dashboard section titles, module page headers.     |
| **Section Header H2** | Inter          | 28-32px / 600     | Card group headers, form section labels.           |
| **Card Title H3**     | Inter          | 20-24px / 600     | Feature card titles, module names, widget headers. |
| **Body Text**         | Inter          | 16px / 400        | Paragraph text, descriptions, AI response content. |
| **Small / Caption**   | Inter          | 13-14px / 400     | Metadata, timestamps, footnotes, form hints.       |
| **Button / Label**    | Inter          | 14-16px / 600     | CTA buttons, tab labels, navigation links.         |
| **Monospace**         | JetBrains Mono | 14px / 400        | Medicine codes, dosage values, health metrics.     |

## **4.1 Font Stack (CSS)**

Primary: font-family: 'Inter', 'Segoe UI', system-ui, -apple-system, sans-serif;

Monospace: font-family: 'JetBrains Mono', 'Fira Code', monospace;

Load via: Google Fonts CDN - Inter (weights 400, 500, 600, 700, 800).

# **5\. Component Specifications**

## **5.1 Buttons**

| **Variant**              | **Background**         | **Text**     | **Use Case**                                             |
| ------------------------ | ---------------------- | ------------ | -------------------------------------------------------- |
| **Primary**              | #028090 (Teal)         | White / Bold | Main CTAs: 'Book Consultation', 'Save', 'Submit'.        |
| **Secondary**            | White with teal border | #028090 Teal | Alternative actions: 'View Details', 'Learn More'.       |
| **Ghost**                | Transparent            | #028090 Teal | Tertiary actions: 'Cancel', 'Skip', navigation links.    |
| **Danger**               | #C0392B Red            | White / Bold | Destructive actions: 'Delete', 'Remove Reminder'.        |
| **Dark (Markify-style)** | #0A2342 Navy           | White / Bold | Hero CTA, navbar 'Login' button - inspired by reference. |

All buttons: border-radius: 8px | padding: 12px 24px | transition: 200ms ease | hover: 10% darker background | focus: 2px teal outline offset 2px.

## **5.2 Cards**

| **Card Type**           | **Specification**                                                                                                                                                        |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Module Card**         | White background, 1px border #E5E7EB, border-radius 12px, padding 24px, box-shadow: 0 2px 8px rgba(0,0,0,0.08). Icon (teal), title (H3), description (body), CTA button. |
| **Health Summary Card** | Teal-light (#E0F4F6) background, 12px radius, icon badge, large stat number in teal, label in gray.                                                                      |
| **Reminder Card**       | White, left border 4px teal accent, icon, medicine name, time, status badge (Complete / Pending).                                                                        |
| **Doctor Profile Card** | White, avatar with teal ring, name, specialty, availability badge, 'Book Now' button.                                                                                    |
| **Community Post Card** | White, user avatar, condition tag (pill chip), post excerpt, reaction icons, 'Read More' link.                                                                           |
| **Journal Entry Card**  | White, mood emoji badge, date, entry excerpt, edit icon on hover.                                                                                                        |

## **5.3 Navigation**

**Top Navigation Bar (Landing Page)**

- Height: 72px | Background: white | Position: sticky top-0 | Box-shadow on scroll: 0 2px 12px rgba(0,0,0,0.06).
- Logo: Medscope wordmark in teal (left-aligned).
- Nav Links: Inter 15px / 500 weight, color #2D2D2D, hover color teal, gap: 32px.
- CTAs: 'Patient Login' - secondary button (teal outline) | 'Doctor Login' - primary dark button (navy fill).

**Dashboard Sidebar**

- Width: 256px | Background: #F7F9FA | Border-right: 1px solid #E5E7EB.
- Logo at top, nav items below with icon + label, active state: teal background fill on full row.
- Bottom: user avatar, name, and logout button.
- Collapses to icon-only rail on tablet (768px).

## **5.4 Form Elements**

- Input fields: 48px height, border: 1px solid #D1D5DB, border-radius 8px, focus: 2px teal outline.
- Labels: Inter 14px / 600, color #2D2D2D, 8px gap above input.
- Error states: red border + red helper text below.
- Select dropdowns: custom styled to match input fields.
- Checkboxes and radio buttons: teal fill on check/selection.

## **5.5 Data Visualization**

- Health trend charts: Recharts line/area chart in teal gradient.
- Adherence score: Circular progress ring in teal on light teal background.
- Mood tracker: Emoji-based weekly heatmap with gradient from red (low) to green (high).
- Appointment calendar: Full calendar component in white with teal day highlights.

## **5.6 AI Chatbot UI**

- Full-screen overlay or slide-in drawer panel.
- User messages: right-aligned, teal background bubble, white text.
- AI messages: left-aligned, white background bubble, gray text, with Medscope AI avatar.
- Typing indicator: three animated dots in teal.
- Input bar at bottom: text field + send icon button (teal).

# **6\. Layout & Grid System**

## **6.1 Spacing Scale**

Base unit: 4px. Scale: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96px. Use multiples of 4 for all padding, margin, and gap values.

## **6.2 Grid Specifications**

| **Breakpoint**   | **Viewport Width** | **Grid Columns** | **Container Max-Width**  |
| ---------------- | ------------------ | ---------------- | ------------------------ |
| **Mobile**       | 320px - 767px      | 1 column         | 100% (16px side padding) |
| **Tablet**       | 768px - 1023px     | 2 columns        | 100% (24px side padding) |
| **Desktop**      | 1024px - 1279px    | 3 columns        | 1024px centered          |
| **Wide Desktop** | 1280px+            | 4 columns        | 1280px centered          |

## **6.3 Dashboard Layout**

- Full viewport height layout: sidebar (256px fixed left) + main content area (flex-1).
- Top bar: full width across main content, 72px height, sticky.
- Content area: 32px padding all sides, scrollable independently of sidebar.
- Card grid: CSS Grid with auto-fill columns, minmax(280px, 1fr), gap 24px.

# **7\. Key Page Design Specs**

## **7.1 Landing Page**

- Section 1 - Hero: Full-width, white background. Centered badge chip ('100+ AI Features'). H1 at 64px bold teal. Subtitle at 20px gray. Two CTA buttons side by side. Below: Browser mockup of dashboard as product screenshot.
- Section 2 - Trusted By: Horizontal scrolling logo strip of partner logos or academic institution badges, similar to 'Trusted by Industry Leaders' in reference.
- Section 3 - Explore Pathways: 4 icon cards in a row (Physical, Mental, Medication, Lifestyle) - matching the 'Explore Categories' layout in the reference.
- Section 4 - Features: Tabbed grid of feature cards (mimicking 'Explore Our Creatives' with filter tabs). Each card: icon, title, description, and 'Learn More' button.
- Section 5 - Blog/Updates: 3-column card grid with article thumbnails, dates, titles, and excerpts.
- Section 6 - CTA Banner: 'Need a Doctor Now? Book a live consultation in 60 seconds.' - centered text, primary button.
- Section 7 - Footer: Logo, tagline, 4 columns of links (Pages, Features, Support, Legal), social icons.

## **7.2 Patient Dashboard**

- Sidebar: Medscope logo, nav items with icons (Dashboard, AI Assistant, Reminders, Nutrition, Consultation, Mental Health, Journal, Community, Profile).
- Top Bar: 'Good morning, \[Name\]', notification bell with badge count, profile avatar.
- Row 1 - Stats: 3 metric cards (Adherence Score, Active Reminders, Next Appointment).
- Row 2 - Left (60%): Upcoming Reminders list card with timeline view.
- Row 2 - Right (40%): Quick Access 2x2 grid of module shortcut cards.
- Row 3: Recent AI chat summary card + Nutrition tip of the day card.

## **7.3 Doctor Dashboard**

- Sidebar: Logo, nav items (Dashboard, My Patients, AI Assistant, Schedule, Consultations, Community, Delegate, Profile).
- Top Bar: 'Dr. \[Name\]', availability toggle (Online / Away), notification bell, avatar.
- Row 1 - Stats: 4 metric cards (Total Patients, Today's Consultations, Pending Reviews, Active Alerts).
- Row 2 - Full width: Today's Appointment timeline list, sortable by time.
- Row 3 - Left: Patient Alert panel (patients flagged by AI for deterioration). Right: Quick action buttons (New Prescription, View Patient, Delegate).

# **8\. Motion & Animation**

Motion is used sparingly and purposefully - following the reference UI's clean, non-distracting aesthetic.

| **Animation**        | **Duration**  | **Specification**                                            |
| -------------------- | ------------- | ------------------------------------------------------------ |
| **Page transition**  | 300ms         | Fade in + slide up 16px using Framer Motion AnimatePresence. |
| **Card hover**       | 150ms ease    | transform: translateY(-4px) + box-shadow deepens.            |
| **Button press**     | 100ms ease    | transform: scale(0.97) on mousedown.                         |
| **Skeleton loader**  | 1.5s infinite | Linear shimmer gradient from #F0F0F0 to #E0E0E0 to #F0F0F0.  |
| **Chatbot message**  | 200ms ease    | Slide in from bottom-left (AI) or bottom-right (user).       |
| **Reminder pulse**   | 2s infinite   | Subtle teal ring pulse around active reminder card.          |
| **Sidebar collapse** | 250ms ease    | Width transition from 256px to 72px, labels fade out.        |

# **9\. Recommended Tech Stack for Vibe Coding**

## **9.1 Core Technologies**

- Next.js 14+ (App Router) - framework for routing, SSR, and API routes.
- React 18 - component library with hooks and concurrent mode.
- Tailwind CSS v3 - utility-first styling for rapid development.
- Framer Motion - declarative animations and page transitions.

## **9.2 UI Component Libraries**

- shadcn/ui - copy-paste component primitives (Dialog, Sheet, Tabs, Command) styled with Tailwind.
- Radix UI - accessible headless components for complex UI (Dropdown, Tooltip, Modal).
- Lucide React - icon library matching the reference UI's clean line-icon style.

## **9.3 AI Coding Tools (Vibe Coding)**

- v0.dev by Vercel - generate full page layouts with prompt. (Your prototype at v0-med-scope-platform-design.vercel.app is already using this!)
- Cursor IDE - AI-powered IDE for autocomplete and refactoring.
- Claude (this session!) - for architecture decisions, component logic, and code review.
- GitHub Copilot - inline suggestions for repetitive component patterns.

## **9.4 State Management & Data**

- Zustand - lightweight global state for auth, user data, and UI state.
- React Query (TanStack) - server state, caching, and background refetching for API calls.
- React Hook Form + Zod - form management and schema validation.

## **9.5 Key Libraries**

- Recharts - health data charts (adherence, mood trends, vitals).
- FullCalendar - doctor schedule and appointment calendar.
- React Day Picker - date pickers for journal and reminders.
- Sonner - toast notifications for reminders and alerts.
- Next Themes - dark/light mode toggle.

# **10\. Vibe Coding Strategy**

Since you are vibe-coding the entire frontend, here is a structured approach to ship fast without losing quality:

## **Phase 1: Foundation (Week 1-2)**

- Set up Next.js project with Tailwind, shadcn/ui, and Framer Motion.
- Define the global design tokens in tailwind.config.js (colors, fonts, border-radius).
- Build reusable components: Button, Card, Input, Badge, Avatar, Sidebar, TopBar.
- Create the landing page - use v0.dev to generate the hero section layout quickly.

## **Phase 2: Patient Portal (Week 3-4)**

- Build Patient Dashboard layout with sidebar and top bar.
- Implement static versions of all P-01 through P-10 features with mock data.
- Add the AI Chatbot UI as a floating action button that opens a drawer.
- Wire up the AI Medicine Assistant UI - file upload zone + results display card.

## **Phase 3: Doctor Portal (Week 5-6)**

- Duplicate dashboard layout, adjust sidebar links and color accent for doctor identity.
- Build Patient Details page - tabbed layout (Overview, Medications, History, AI Summary).
- Implement Schedule page with FullCalendar integration.
- Build the Consultation interface - chat panel + call controls UI.

## **Phase 4: Polish & Integration (Week 7-8)**

- Connect all pages to backend APIs - replace mock data with real API calls via React Query.
- Add loading skeletons, error states, and empty states to every data-driven page.
- Implement Framer Motion page transitions and micro-interactions.
- Run Lighthouse audit - fix performance and accessibility issues.
- Final responsive QA across mobile, tablet, and desktop.

_\-- End of Document --_

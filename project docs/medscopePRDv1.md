**MEDSCOPE**

Product Requirements Document

**v1.1 - Community Module & Separate Doctor Auth**

_AI-Powered Digital Healthcare Platform_

| **Project**         | Medscope                                                                               |
| ------------------- | -------------------------------------------------------------------------------------- |
| **Version**         | 1.1 - Updated March 2026                                                               |
| **Changes in v1.1** | \+ Full Community Module (C-01 to C-10)<br><br>\+ Separate Doctor Login & Signup Pages |
| **Frontend Lead**   | Student - IT Team                                                                      |

# **1\. Version Changelog**

This document is an addendum and update to Medscope PRD v1.0. All previous sections remain valid. This version adds two major feature areas:

| **Version** | **Date**   | **Changes**                                                                                                               |
| ----------- | ---------- | ------------------------------------------------------------------------------------------------------------------------- |
| **v1.0**    | March 2026 | Initial PRD - Patient Portal, Doctor Portal, core features, auth overview.                                                |
| **v1.1**    | March 2026 | Added: Full Community Module spec (C-01 to C-10), Separate Doctor Auth Pages (DA-01 to DA-04), updated user journey maps. |

# **2\. Community Module - Full Specification \[NEW\]**

The Community module is a core social feature of Medscope, enabling patients with similar diseases, conditions, or mental health challenges to connect, share experiences, and support each other. It operates as a moderated, condition-segmented forum integrated directly into both the Patient Portal and the Doctor Portal.

## **2.1 Community Overview**

| **Attribute**            | **Details**                                                                                       |
| ------------------------ | ------------------------------------------------------------------------------------------------- |
| **Module Name**          | Medscope Community                                                                                |
| **Access**               | Patient Portal + Doctor Portal (separate views and permissions)                                   |
| **Purpose**              | Peer support, experience sharing, and stigma reduction for patients with shared conditions.       |
| **Structure**            | Disease/condition-based Groups, each containing Posts, Comments, and Reactions.                   |
| **Moderation**           | AI-assisted auto-moderation + human moderator role (assigned doctor or admin).                    |
| **Privacy**              | Posts are anonymous by default (shown as 'Community Member') unless user opts to show name.       |
| **Doctor Participation** | Doctors can post informational content, answer questions, and moderate groups in their specialty. |

## **2.2 Community Feature Table**

| **ID** | **Feature**                  | **Description**                                                                                                                                                               | **Priority** | **Status** |
| ------ | ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ---------- |
| C-01   | **Community Home**           | Landing page of the Community module. Shows joined groups, trending posts, and recommended groups based on patient health profile.                                            | **High**     | Planned    |
| C-02   | **Disease/Condition Groups** | Pre-created groups for each supported condition (Diabetes, Hypertension, Depression, Anxiety, Cancer, Arthritis, PCOS, etc.). Patients join groups relevant to their profile. | **High**     | Planned    |
| C-03   | **Create & Browse Groups**   | Patients can browse all available groups with member count and recent activity. Admin/doctors can create new groups.                                                          | **High**     | Planned    |
| C-04   | **Post Creation**            | Rich-text post editor with optional image upload, condition tag, mood tag, and anonymous toggle. Supports text formatting.                                                    | **High**     | Planned    |
| C-05   | **Comments & Replies**       | Threaded comment system under each post. Patients and doctors can reply. Supports nested replies up to 2 levels.                                                              | **High**     | Planned    |
| C-06   | **Reactions**                | Emoji-based reaction system on posts and comments (Heart, Support, Helpful, Strong). No downvote - positive-only environment.                                                 | **Medium**   | Planned    |
| C-07   | **Search & Filter**          | Search posts by keyword, filter by condition group, date, and post type (Question, Experience, Tip, Update).                                                                  | **Medium**   | Planned    |
| C-08   | **Moderation Panel**         | Flag/report system for inappropriate content. Doctor/admin moderators review flagged posts. AI pre-screens for harmful content.                                               | **High**     | Planned    |
| C-09   | **Doctor Q&A**               | Special post type: patients ask a medical question publicly. Verified doctors in the group can provide an official answer (distinguished by a 'Verified Doctor' badge).       | **High**     | Planned    |
| C-10   | **Notifications**            | Users receive in-app notifications for replies to their posts, new posts in joined groups, and doctor answers to their questions.                                             | **Medium**   | Planned    |

## **2.3 Community Group Structure**

Each group is organized around a single condition or life situation. Below are the default groups available at launch:

| **Category**         | **Group Name**          | **Description**                                                                                                         |
| -------------------- | ----------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| **Chronic Physical** | Diabetes Warriors       | Support group for Type 1 and Type 2 diabetes patients. Share glucose tracking tips, diet advice, and daily challenges.  |
| **Chronic Physical** | Heart Health Hub        | Community for cardiac patients, hypertension, and heart disease management.                                             |
| **Chronic Physical** | Joint & Mobility        | Support for arthritis, joint pain, and mobility disorder patients.                                                      |
| **Chronic Physical** | PCOS Sisters            | A safe space for women managing Polycystic Ovary Syndrome - symptoms, lifestyle, and fertility discussions.             |
| **Chronic Physical** | Cancer Survivors Circle | Support for current cancer patients and survivors sharing treatment journeys and emotional experiences.                 |
| **Mental Health**    | Anxiety Allies          | Group for generalized anxiety disorder, panic attacks, and social anxiety. Share coping strategies.                     |
| **Mental Health**    | Depression Support      | A compassionate, moderated space for patients experiencing depression. Emphasizes positivity and professional guidance. |
| **Mental Health**    | Stress & Burnout        | For patients dealing with work-related burnout, chronic stress, and emotional exhaustion.                               |
| **Mental Health**    | Sleep Disorders         | Insomnia, sleep apnea, and other sleep condition discussions and tips.                                                  |
| **Lifestyle**        | Healthy Eating Together | Community for disease-specific nutrition discussions, recipe sharing, and dietary goal tracking.                        |
| **Lifestyle**        | Move More Club          | Exercise motivation and routine sharing for patients with physical limitations or chronic conditions.                   |
| **Open**             | New to Medscope         | Onboarding community for new users - ask questions, find your groups, and meet the community.                           |

## **2.4 Post Types**

Each post in the community must be tagged with one of the following post types to aid filtering and discovery:

| **Post Type**      | **Icon / Tag Color** | **When to Use**                                                                                       |
| ------------------ | -------------------- | ----------------------------------------------------------------------------------------------------- |
| **Question**       | Blue - '? Question'  | Patient has a query about their condition, medication, or treatment. Doctors and peers can answer.    |
| **Experience**     | Green - 'Story'      | Sharing a personal journey, diagnosis story, or treatment outcome.                                    |
| **Tip**            | Teal - 'Tip'         | Sharing a lifestyle hack, dietary advice, medication reminder trick, or coping strategy.              |
| **Update**         | Gray - 'Update'      | Sharing a personal health update or milestone (e.g., 'One month clean', 'My A1C dropped!').           |
| **Vent / Support** | Purple - 'Vent'      | Emotional post asking for support. No advice expected - peers respond with empathy reactions only.    |
| **Doctor Insight** | Gold - 'Dr. Answer'  | Official informational post by a verified doctor in the group. Pinned at top of relevant discussions. |

## **2.5 Community Page Layout Specification**

**Community Home (/patient/community)**

- Top: Search bar spanning full width with 'Browse All Groups' link on the right.
- Section 1 - Your Groups: Horizontal scroll row of joined group cards (group name, member count, condition badge, unread count badge).
- Section 2 - Trending Posts: 3-column card grid of highest-reacted posts this week, filtered across all your groups.
- Section 3 - Discover Groups: Full grid of all available groups (icon, name, member count, category chip, 'Join' button).
- Floating Action Button: '+' Create Post button fixed at bottom-right - only visible when inside a group.

**Individual Group Page (/patient/community/\[group-slug\])**

- Group header: Banner image (condition-specific illustration), group name, member count, category badge, and 'Joined / Join' toggle button.
- About section: Collapsible short description and group rules.
- Filter tabs: All, Questions, Experiences, Tips, Updates, Doctor Insights.
- Post feed: Infinite scroll list of posts sorted by Latest or Top. Each post card shows author avatar (or anonymous icon), post type tag, title excerpt, reaction count, comment count, time ago.
- Sidebar (desktop): Active members count, Pinned posts by doctors, Group moderator info.

**Post Detail Page (/patient/community/\[group-slug\]/\[post-id\])**

- Full post content with author info (anonymous or named), post type badge, date, condition tag.
- Reaction bar below post: Heart / Support / Helpful / Strong with counts.
- If post type is 'Question' and a doctor has answered: Doctor's answer shown in a highlighted card with a 'Verified Doctor' gold badge pinned above regular comments.
- Comment section: Threaded replies, show/hide nested replies, commenter avatar, time, reaction on comment.
- Comment input box at bottom: text field, emoji picker, submit button, anonymous toggle.
- Report button (flag icon) on every post and comment.

## **2.6 Doctor Community View**

Doctors access the community from their portal with elevated permissions and a different interface focus:

- Doctor sees only groups in their medical specialty by default (e.g., a cardiologist sees Heart Health Hub).
- Doctor profile in community shows: name, specialty, and a gold 'Verified Doctor' badge on all their posts and comments.
- Doctors can pin important informational posts to the top of a group.
- Doctors can access the Moderation Panel to review flagged posts in their specialty groups.
- Doctors can create 'Doctor Insight' posts - these appear in a special section above regular posts.
- Doctors cannot see patient real names unless the patient has opted to display their name publicly.

## **2.7 Moderation & Safety Rules**

- All posts are screened by AI (keyword filter) before publishing - posts with self-harm, violence, or hate speech are auto-held for review.
- Users can report any post or comment with a single tap. Reported content is hidden from others pending review.
- Three strikes rule: 3 valid reports against a user results in a temporary account restriction.
- Mental Health groups (Depression, Anxiety, Vent) have enhanced moderation - every post is reviewed within 24 hours by a verified doctor moderator.
- Emergency escalation: If AI detects crisis language (e.g., self-harm indicators), it immediately shows the user a mental health helpline banner and alerts the assigned doctor.

# **3\. Separate Doctor Authentication Pages \[NEW\]**

A critical update to the original PRD: Doctor login and registration are entirely separate from the Patient auth flow. They live at different URLs, have different UI designs, different form fields, and route to different dashboards.

## **3.1 Authentication Architecture**

| **Page**                     | **Patient URL**               | **Doctor URL**               |
| ---------------------------- | ----------------------------- | ---------------------------- |
| **Login**                    | /auth/patient/login           | /auth/doctor/login           |
| **Register / Sign Up**       | /auth/patient/register        | /auth/doctor/register        |
| **Forgot Password**          | /auth/patient/forgot-password | /auth/doctor/forgot-password |
| **After Login Redirect**     | /patient/dashboard            | /doctor/dashboard            |
| **Entry Point from Landing** | 'Patient Login' CTA button    | 'Doctor Login' CTA button    |

## **3.2 Auth Feature Table**

| **ID** | **Feature**                  | **Description**                                                                                                                                                                                                                                                                                                         | **Priority** | **Status** |
| ------ | ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ---------- |
| DA-01  | **Patient Login Page**       | Dedicated login page at /auth/patient/login. Email + password fields, forgot password link, social login (optional), and link to patient register page.                                                                                                                                                                 | **High**     | In Dev     |
| DA-02  | **Patient Register Page**    | Multi-step registration at /auth/patient/register. Step 1: Name, email, password. Step 2: Date of birth, gender. Step 3: Primary condition(s) selection for community auto-join. Step 4: Profile complete screen.                                                                                                       | **High**     | In Dev     |
| DA-03  | **Doctor Login Page**        | Dedicated login at /auth/doctor/login. Medical registration number field + email + password. Visually distinct from patient login (different color accent, doctor-specific branding).                                                                                                                                   | **High**     | Planned    |
| DA-04  | **Doctor Register Page**     | Multi-step registration at /auth/doctor/register. Step 1: Full name, email, password. Step 2: Medical Registration Number (MRN), Specialty selection, Years of experience. Step 3: Upload medical license/certificate (file upload). Step 4: Pending verification screen (account reviewed by admin before activation). | **High**     | Planned    |
| DA-05  | **Doctor Verification Flow** | After doctor registration, account goes into 'Pending Review' state. Doctor sees a waiting screen. Admin approves or rejects. Doctor receives email notification on approval.                                                                                                                                           | **High**     | Planned    |
| DA-06  | **Forgot Password**          | Both portals have independent forgot password flows routed to their respective email templates.                                                                                                                                                                                                                         | **High**     | Planned    |

## **3.3 Patient Login Page Specification (/auth/patient/login)**

**Visual Design**

- Left panel (50%): Full-height illustration - patient with a phone/health app, soft teal gradient background.
- Right panel (50%): White card, centered content, Medscope logo at top.
- Headline: 'Welcome back' in bold, subtitle: 'Sign in to your health journey'.

**Form Fields**

- Email address field.
- Password field with show/hide toggle.
- 'Remember me' checkbox.
- 'Forgot Password?' link - right aligned, links to /auth/patient/forgot-password.
- Primary CTA: 'Sign In' - full-width teal button.

**Bottom Links**

- 'Don't have an account? Register here' - links to /auth/patient/register.
- 'Are you a Doctor? Doctor Login' - small text link, routes to /auth/doctor/login.

## **3.4 Patient Register Page Specification (/auth/patient/register)**

**Step 1 - Account Details**

- Full Name, Email Address, Password, Confirm Password.
- Password strength indicator bar below the password field.
- Terms of Service checkbox.

**Step 2 - Personal Info**

- Date of Birth (date picker), Gender (dropdown: Male / Female / Non-binary / Prefer not to say).
- Phone Number (optional, for SMS reminders).
- City / State (for nearby pharmacy suggestions feature).

**Step 3 - Health Profile Setup**

- Headline: 'Tell us about yourself so we can personalize your experience.'
- Multi-select chip picker: 'Do you have any of these conditions?' - shows all community group conditions as selectable chips (Diabetes, Anxiety, Depression, Hypertension, etc.).
- Optional free-text field: 'Any other conditions or notes?'
- This selection auto-joins them into corresponding Community groups and pre-configures their dashboard.

**Step 4 - All Done Screen**

- Checkmark animation, 'You're all set!' message.
- Summary of joined communities, big CTA: 'Go to My Dashboard'.

## **3.5 Doctor Login Page Specification (/auth/doctor/login)**

**Visual Design - Distinct from Patient Login**

- Left panel (50%): Deep navy (#0A2342) background with a medical professional illustration (stethoscope, dashboard screens). Gold or white accent elements.
- Right panel (50%): White card with 'Doctor Portal' badge chip at the top in teal.
- Headline: 'Doctor Portal' in large bold text with a subtle stethoscope icon.
- Subheadline: 'Sign in to manage your patients and consultations'.

**Form Fields**

- Medical Registration Number (MRN) - text field with tooltip icon explaining what this is.
- Email address field.
- Password field with show/hide toggle.
- 'Remember me' checkbox.
- 'Forgot Password?' link - routes to /auth/doctor/forgot-password.
- Primary CTA: 'Sign In as Doctor' - full-width navy/teal button.

**Bottom Links**

- 'New to Medscope? Register as a Doctor' - links to /auth/doctor/register.
- 'Are you a Patient? Patient Login' - small text link, routes to /auth/patient/login.

## **3.6 Doctor Register Page Specification (/auth/doctor/register)**

**Step 1 - Account Details**

- Full Name (as on medical license), Email Address, Password, Confirm Password.
- Password strength indicator.
- Terms of Service + Privacy Policy checkboxes.

**Step 2 - Professional Details**

- Medical Registration Number (MRN) - primary identifier.
- Medical Specialty - dropdown: General Physician, Cardiologist, Psychiatrist, Neurologist, Endocrinologist, Orthopedic, Gynecologist, Oncologist, Other.
- Sub-specialty text field (optional, e.g., 'Interventional Cardiology').
- Years of Experience - number field.
- Hospital / Clinic Name - text field (optional).
- City / State - for filtering in doctor search.

**Step 3 - Verification Documents**

- Headline: 'Upload your medical credentials for verification.'
- File upload zone: Drag-and-drop or click to upload. Accepts PDF and image files.
- Required document: Medical License / Registration Certificate.
- Optional document: Degree Certificate.
- File size limit shown clearly (max 5MB per file).
- Upload progress bar per file.

**Step 4 - Pending Verification Screen**

- Clock/hourglass animation.
- 'Your application is under review' message.
- Expected timeline: 'Most accounts are approved within 24-48 hours.'
- Email confirmation notice: 'We have sent a confirmation to \[email\].'
- Button: 'Back to Home' - returns to landing page.
- Once admin approves: Doctor receives email with login link and their account activates.

## **3.7 Landing Page Auth Entry Points**

The landing page (/) must clearly separate the two portals with dual CTAs in the navbar and hero section:

| **Location**            | **Patient CTA**                                 | **Doctor CTA**                              |
| ----------------------- | ----------------------------------------------- | ------------------------------------------- |
| **Navbar (right side)** | 'Patient Login' - secondary teal outline button | 'Doctor Login' - primary navy filled button |
| **Hero Section**        | 'I am a Patient' - large teal button            | 'I am a Doctor' - large navy button         |
| **Footer**              | Link: Patient Login / Register                  | Link: Doctor Login / Register               |
| **404 / Error Pages**   | Button back to patient login                    | Button back to doctor login                 |

# **4\. Updated User Journey Maps**

## **4.1 New Patient - Onboarding with Community Auto-Join**

- Visits landing page, clicks 'I am a Patient' in the hero section.
- Goes through the 4-step Patient Register flow.
- In Step 3, selects 'Diabetes' and 'Anxiety' as their conditions.
- System auto-joins them to 'Diabetes Warriors' and 'Anxiety Allies' community groups.
- On Step 4, sees the communities they've joined with member counts.
- Clicks 'Go to My Dashboard' - arrives at pre-configured patient dashboard.
- Community widget on dashboard shows unread posts from their auto-joined groups.

## **4.2 Patient - Community Engagement Journey**

- Patient opens Community from the sidebar.
- Community Home shows their joined groups (Diabetes Warriors, Anxiety Allies).
- They click into 'Diabetes Warriors' group.
- They see trending posts - clicks a 'Question' type post asking about meal timing.
- Reads a Verified Doctor's pinned answer at the top.
- Scrolls to comments - reads peer experiences and adds their own comment.
- Reacts to a helpful comment with 'Helpful' reaction.
- Creates their own post - selects 'Tip' type, writes about their glucose management trick, toggles anonymous ON.
- Post is published (after AI screening passes) and appears in the group feed.

## **4.3 New Doctor - Registration & Verification Journey**

- Visits landing page, clicks 'Doctor Login' in the navbar.
- On the Doctor Login page, clicks 'Register as a Doctor' link.
- Goes through 4-step Doctor Register flow.
- Step 2: Fills in MRN, selects 'Cardiologist' specialty.
- Step 3: Uploads medical license PDF. Sees upload progress bar.
- Step 4: Arrives at Pending Verification screen - receives confirmation email.
- 24 hours later: Receives approval email with activation link.
- Clicks link - directed to /auth/doctor/login. Logs in with MRN + email + password.
- Lands on Doctor Dashboard - fully active account with specialty-matched community groups.

## **4.4 Doctor - Community Moderation Journey**

- Doctor opens Community from their portal sidebar.
- Doctor's community shows only their specialty groups (e.g., Heart Health Hub for cardiologist).
- Doctor sees a 'Question' post asking about medication interactions.
- Doctor writes an official answer as a 'Doctor Insight' post type.
- Their answer is automatically pinned above regular comments with the gold 'Verified Doctor' badge.
- Doctor checks Moderation Panel - reviews a flagged post for inappropriate content.
- Doctor dismisses the flag (content is acceptable) - post goes back to visible status.

# **5\. Complete Updated URL & Route Map**

| **Route**                                 | **Page Name**              | **Auth Required** |
| ----------------------------------------- | -------------------------- | ----------------- |
| **/**                                     | Landing Page               | No                |
| **/auth/patient/login**                   | Patient Login              | No                |
| **/auth/patient/register**                | Patient Register (4 Steps) | No                |
| **/auth/patient/forgot-password**         | Patient Forgot Password    | No                |
| **/auth/doctor/login**                    | Doctor Login               | No                |
| **/auth/doctor/register**                 | Doctor Register (4 Steps)  | No                |
| **/auth/doctor/forgot-password**          | Doctor Forgot Password     | No                |
| **/patient/dashboard**                    | Patient Dashboard          | Patient           |
| **/patient/medicine**                     | AI Medicine Assistant      | Patient           |
| **/patient/reminders**                    | Reminder System            | Patient           |
| **/patient/nutrition**                    | Nutrition & Exercise       | Patient           |
| **/patient/consultation**                 | Live Consultation          | Patient           |
| **/patient/mental-health**                | Mental Health Module       | Patient           |
| **/patient/chat**                         | AI Chatbot                 | Patient           |
| **/patient/journal**                      | Daily Journal              | Patient           |
| **/patient/community**                    | Community Home             | Patient           |
| **/patient/community/\[group\]**          | Group Page                 | Patient           |
| **/patient/community/\[group\]/\[post\]** | Post Detail Page           | Patient           |
| **/patient/profile**                      | Health Profile             | Patient           |
| **/doctor/dashboard**                     | Doctor Dashboard           | Doctor            |
| **/doctor/patients**                      | Patient List               | Doctor            |
| **/doctor/patients/\[id\]**               | Patient Detail             | Doctor            |
| **/doctor/medicine**                      | AI Medicine Assistant      | Doctor            |
| **/doctor/schedule**                      | Daily Schedule             | Doctor            |
| **/doctor/community**                     | Doctor Community           | Doctor            |
| **/doctor/community/moderation**          | Moderation Panel           | Doctor            |
| **/doctor/delegate**                      | Assistant Doctor           | Doctor            |
| **/doctor/consultation/\[id\]**           | Live Consultation Room     | Doctor            |

_\-- End of v1.1 Update Document --_

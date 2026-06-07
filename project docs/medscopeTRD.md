# MEDSCOPE — Technical Requirements Document (TRD)

### AI-Powered Digital Healthcare Platform

**Version:** 1.0 | **Date:** March 2026 | **Author:** Frontend Team — IT Department, B.Tech Final Year Project

---

> **Scope of this Document:** This TRD covers the complete technical architecture, stack decisions, folder structure, component design, API contract format, state management, routing, security, performance, and deployment strategy for the Medscope frontend. It is the engineering-level companion to the PRD v1.1 and the Design Document v1.0.

---

## Table of Contents

1. [System Architecture Overview](#1-system-architecture-overview)
2. [Tech Stack](#2-tech-stack)
3. [Project Structure](#3-project-structure)
4. [Routing & URL Architecture](#4-routing--url-architecture)
5. [Authentication System](#5-authentication-system)
6. [State Management](#6-state-management)
7. [Component Architecture](#7-component-architecture)
8. [API Integration Layer](#8-api-integration-layer)
9. [Community Module — Technical Spec](#9-community-module--technical-spec)
10. [AI Feature Integration](#10-ai-feature-integration)
11. [Real-Time Features](#11-real-time-features)
12. [Forms & Validation](#12-forms--validation)
13. [Performance Requirements](#13-performance-requirements)
14. [Security Requirements](#14-security-requirements)
15. [Responsive Design & Accessibility](#15-responsive-design--accessibility)
16. [Testing Strategy](#16-testing-strategy)
17. [Deployment & CI/CD](#17-deployment--cicd)
18. [Environment Variables](#18-environment-variables)
19. [Error Handling Strategy](#19-error-handling-strategy)
20. [Design Token Reference](#20-design-token-reference)

---

## 1. System Architecture Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                        CLIENT (Browser)                         │
│                                                                 │
│   Next.js 14 App Router                                         │
│   ┌──────────────┐  ┌──────────────┐  ┌──────────────────────┐ │
│   │ Public Pages │  │Patient Portal│  │   Doctor Portal      │ │
│   │  /           │  │ /patient/*   │  │   /doctor/*          │ │
│   │  /auth/*     │  │              │  │                      │ │
│   └──────────────┘  └──────────────┘  └──────────────────────┘ │
│                                                                 │
│   ┌──────────────────────────────────────────────────────────┐  │
│   │             Global State (Zustand)                       │  │
│   │   authStore | userStore | uiStore | notificationStore    │  │
│   └──────────────────────────────────────────────────────────┘  │
│                                                                 │
│   ┌──────────────────────────────────────────────────────────┐  │
│   │          Server State (TanStack Query)                   │  │
│   │   Patient data | Doctor data | Community | AI results    │  │
│   └──────────────────────────────────────────────────────────┘  │
└───────────────────────────┬─────────────────────────────────────┘
                            │ HTTPS / REST / WebSocket
┌───────────────────────────▼─────────────────────────────────────┐
│                     BACKEND (Team API)                          │
│                                                                 │
│   ┌──────────────┐  ┌──────────────┐  ┌──────────────────────┐  │
│   │  Auth API    │  │  Core API    │  │     AI Service       │  │
│   │  JWT / OAuth │  │  REST/GraphQL│  │  Medicine / Chat /   │  │
│   │              │  │              │  │  Diagnosis           │  │
│   └──────────────┘  └──────────────┘  └──────────────────────┘  │
│                                                                 │
│   ┌──────────────┐  ┌──────────────┐  ┌──────────────────────┐  │
│   │  WebSocket   │  │  Database    │  │  File Storage        │  │
│   │  (Chat/Live) │  │  PostgreSQL  │  │  S3 / Cloudinary     │  │
│   └──────────────┘  └──────────────┘  └──────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
```

### 1.1 Rendering Strategy

| Page Type                      | Strategy                                | Reason                                       |
| ------------------------------ | --------------------------------------- | -------------------------------------------- |
| Landing page `/`               | **SSG** (Static Site Generation)        | No auth needed, SEO important, never changes |
| Auth pages `/auth/*`           | **CSR** (Client Side Rendering)         | No SEO needed, form-heavy                    |
| Patient Dashboard `/patient/*` | **CSR + TanStack Query**                | Auth-gated, real-time data                   |
| Doctor Dashboard `/doctor/*`   | **CSR + TanStack Query**                | Auth-gated, real-time data                   |
| Community Group pages          | **ISR** (Incremental Static Regen, 60s) | Semi-public, SEO-optional                    |
| Post detail pages              | **SSR** (Server Side Rendering)         | Dynamic per post, shareable                  |

---

## 2. Tech Stack

### 2.1 Core Framework

```
Framework:       Next.js 14+ (App Router)
Language:        TypeScript 5+
Runtime:         Node.js 20+
Package Manager: pnpm (faster installs, strict dependency resolution)
```

### 2.2 Styling

```
Primary:         Tailwind CSS v3.4+
Components:      shadcn/ui (copy-paste primitives)
Animations:      Framer Motion v11+
Icons:           Lucide React
Fonts:           Google Fonts (loaded via next/font)
```

### 2.3 State & Data

```
Global State:    Zustand v4+
Server State:    TanStack Query v5 (React Query)
Forms:           React Hook Form v7+
Validation:      Zod v3+
```

### 2.4 UI Libraries

```
Calendar:        FullCalendar (doctor schedule)
Charts:          Recharts v2+
Date Picker:     React Day Picker v8+
Rich Text:       Tiptap v2 (journal editor, post creation)
Toast:           Sonner
Carousel:        Embla Carousel
File Upload:     React Dropzone
```

### 2.5 Developer Tools

```
Linting:         ESLint + eslint-config-next
Formatting:      Prettier
Git Hooks:       Husky + lint-staged
Type Checking:   TypeScript strict mode
Bundler:         Turbopack (Next.js built-in, dev) / Webpack (prod)
```

### 2.6 Testing

```
Unit Tests:      Vitest
Component Tests: React Testing Library
E2E Tests:       Playwright
```

### 2.7 Deployment

```
Hosting:         Vercel
CDN:             Vercel Edge Network
Domain:          medscope.vercel.app (or custom domain)
Environment:     Preview (PR deploys) + Production
```

---

## 3. Project Structure

```
medscope/
│
├── app/                                  # Next.js App Router
│   ├── (public)/                         # Route group — no auth
│   │   ├── page.tsx                      # Landing page /
│   │   ├── about/page.tsx
│   │   └── pricing/page.tsx
│   │
│   ├── auth/                             # Auth pages
│   │   ├── patient/
│   │   │   ├── login/page.tsx
│   │   │   ├── register/page.tsx
│   │   │   └── forgot-password/page.tsx
│   │   └── doctor/
│   │       ├── login/page.tsx
│   │       ├── register/page.tsx
│   │       └── forgot-password/page.tsx
│   │
│   ├── patient/                          # Patient Portal (auth-gated)
│   │   ├── layout.tsx                    # Patient shell: sidebar + topbar
│   │   ├── dashboard/page.tsx
│   │   ├── medicine/page.tsx
│   │   ├── reminders/page.tsx
│   │   ├── nutrition/page.tsx
│   │   ├── consultation/page.tsx
│   │   ├── mental-health/page.tsx
│   │   ├── chat/page.tsx
│   │   ├── journal/
│   │   │   ├── page.tsx
│   │   │   └── [date]/page.tsx
│   │   ├── community/
│   │   │   ├── page.tsx                  # Community Home
│   │   │   └── [group]/
│   │   │       ├── page.tsx              # Group Page
│   │   │       └── [postId]/page.tsx     # Post Detail
│   │   └── profile/page.tsx
│   │
│   ├── doctor/                           # Doctor Portal (auth-gated)
│   │   ├── layout.tsx                    # Doctor shell: sidebar + topbar
│   │   ├── dashboard/page.tsx
│   │   ├── patients/
│   │   │   ├── page.tsx
│   │   │   └── [id]/page.tsx
│   │   ├── medicine/page.tsx
│   │   ├── schedule/page.tsx
│   │   ├── community/
│   │   │   ├── page.tsx
│   │   │   └── moderation/page.tsx
│   │   ├── delegate/page.tsx
│   │   ├── consultation/
│   │   │   └── [id]/page.tsx
│   │   └── profile/page.tsx
│   │
│   ├── api/                              # Next.js API Routes (thin proxy layer)
│   │   └── [...slug]/route.ts            # Proxy to backend API
│   │
│   ├── globals.css                       # Global styles + Tailwind base
│   ├── layout.tsx                        # Root layout (fonts, providers)
│   └── not-found.tsx
│
├── components/                           # Shared UI Components
│   ├── ui/                               # shadcn/ui primitives (auto-generated)
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── dialog.tsx
│   │   ├── input.tsx
│   │   ├── tabs.tsx
│   │   └── ...
│   │
│   ├── layout/                           # Layout components
│   │   ├── patient-sidebar.tsx
│   │   ├── doctor-sidebar.tsx
│   │   ├── topbar.tsx
│   │   ├── landing-navbar.tsx
│   │   └── footer.tsx
│   │
│   ├── auth/                             # Auth-specific components
│   │   ├── patient-login-form.tsx
│   │   ├── doctor-login-form.tsx
│   │   ├── patient-register-steps.tsx
│   │   ├── doctor-register-steps.tsx
│   │   └── pending-verification.tsx
│   │
│   ├── patient/                          # Patient-specific components
│   │   ├── dashboard/
│   │   │   ├── health-summary-card.tsx
│   │   │   ├── reminders-widget.tsx
│   │   │   └── quick-access-grid.tsx
│   │   ├── medicine/
│   │   │   ├── medicine-upload-zone.tsx
│   │   │   └── medicine-result-card.tsx
│   │   ├── chat/
│   │   │   ├── chat-bubble.tsx
│   │   │   └── chat-input-bar.tsx
│   │   └── journal/
│   │       ├── journal-editor.tsx
│   │       └── mood-picker.tsx
│   │
│   ├── doctor/                           # Doctor-specific components
│   │   ├── dashboard/
│   │   │   ├── appointment-list.tsx
│   │   │   ├── patient-alert-panel.tsx
│   │   │   └── stats-bar.tsx
│   │   ├── patients/
│   │   │   ├── patient-card.tsx
│   │   │   └── patient-detail-tabs.tsx
│   │   └── schedule/
│   │       └── doctor-calendar.tsx
│   │
│   ├── community/                        # Community components
│   │   ├── community-home.tsx
│   │   ├── group-card.tsx
│   │   ├── group-header.tsx
│   │   ├── post-card.tsx
│   │   ├── post-detail.tsx
│   │   ├── post-create-form.tsx
│   │   ├── comment-thread.tsx
│   │   ├── reaction-bar.tsx
│   │   ├── doctor-answer-card.tsx
│   │   └── moderation-panel.tsx
│   │
│   └── shared/                           # Truly shared primitives
│       ├── page-header.tsx
│       ├── skeleton-loader.tsx
│       ├── empty-state.tsx
│       ├── error-boundary.tsx
│       ├── avatar.tsx
│       ├── badge-chip.tsx
│       └── condition-tag.tsx
│
├── hooks/                                # Custom React hooks
│   ├── use-auth.ts
│   ├── use-patient-data.ts
│   ├── use-doctor-data.ts
│   ├── use-community.ts
│   ├── use-ai-chat.ts
│   ├── use-reminders.ts
│   └── use-websocket.ts
│
├── stores/                               # Zustand stores
│   ├── auth-store.ts
│   ├── user-store.ts
│   ├── ui-store.ts
│   └── notification-store.ts
│
├── lib/                                  # Utility functions & config
│   ├── api-client.ts                     # Axios/fetch wrapper
│   ├── query-keys.ts                     # TanStack Query key factory
│   ├── validators.ts                     # Zod schemas
│   ├── utils.ts                          # cn(), formatDate(), etc.
│   ├── constants.ts                      # App-wide constants
│   └── community-groups.ts              # Static group definitions
│
├── types/                                # TypeScript type definitions
│   ├── auth.types.ts
│   ├── patient.types.ts
│   ├── doctor.types.ts
│   ├── community.types.ts
│   ├── medicine.types.ts
│   └── api.types.ts
│
├── middleware.ts                         # Next.js middleware (auth guard)
├── tailwind.config.ts                    # Tailwind config + design tokens
├── next.config.ts                        # Next.js config
├── tsconfig.json
└── package.json
```

---

## 4. Routing & URL Architecture

### 4.1 Route Protection via Middleware

All protected routes are guarded in `middleware.ts`:

```typescript
// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const PATIENT_ROUTES = ["/patient"];
const DOCTOR_ROUTES = ["/doctor"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const patientToken = request.cookies.get("medscope_patient_token");
  const doctorToken = request.cookies.get("medscope_doctor_token");

  // Protect patient routes
  if (PATIENT_ROUTES.some((r) => pathname.startsWith(r))) {
    if (!patientToken) {
      return NextResponse.redirect(new URL("/auth/patient/login", request.url));
    }
  }

  // Protect doctor routes
  if (DOCTOR_ROUTES.some((r) => pathname.startsWith(r))) {
    if (!doctorToken) {
      return NextResponse.redirect(new URL("/auth/doctor/login", request.url));
    }
  }

  // Redirect logged-in users away from auth pages
  if (pathname.startsWith("/auth/patient") && patientToken) {
    return NextResponse.redirect(new URL("/patient/dashboard", request.url));
  }
  if (pathname.startsWith("/auth/doctor") && doctorToken) {
    return NextResponse.redirect(new URL("/doctor/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/patient/:path*", "/doctor/:path*", "/auth/:path*"],
};
```

### 4.2 Complete Route Map

| Route                                 | Page                  | Auth    | Render  |
| ------------------------------------- | --------------------- | ------- | ------- |
| `/`                                   | Landing Page          | Public  | SSG     |
| `/about`                              | About                 | Public  | SSG     |
| `/auth/patient/login`                 | Patient Login         | Public  | CSR     |
| `/auth/patient/register`              | Patient Register      | Public  | CSR     |
| `/auth/patient/forgot-password`       | Patient Forgot PW     | Public  | CSR     |
| `/auth/doctor/login`                  | Doctor Login          | Public  | CSR     |
| `/auth/doctor/register`               | Doctor Register       | Public  | CSR     |
| `/auth/doctor/forgot-password`        | Doctor Forgot PW      | Public  | CSR     |
| `/patient/dashboard`                  | Patient Dashboard     | Patient | CSR     |
| `/patient/medicine`                   | AI Medicine Assistant | Patient | CSR     |
| `/patient/reminders`                  | Reminders             | Patient | CSR     |
| `/patient/nutrition`                  | Nutrition & Exercise  | Patient | CSR     |
| `/patient/consultation`               | Live Consultation     | Patient | CSR     |
| `/patient/mental-health`              | Mental Health         | Patient | CSR     |
| `/patient/chat`                       | AI Chatbot            | Patient | CSR     |
| `/patient/journal`                    | Journal Home          | Patient | CSR     |
| `/patient/journal/[date]`             | Journal Entry         | Patient | CSR     |
| `/patient/community`                  | Community Home        | Patient | CSR     |
| `/patient/community/[group]`          | Group Page            | Patient | ISR 60s |
| `/patient/community/[group]/[postId]` | Post Detail           | Patient | SSR     |
| `/patient/profile`                    | Health Profile        | Patient | CSR     |
| `/doctor/dashboard`                   | Doctor Dashboard      | Doctor  | CSR     |
| `/doctor/patients`                    | Patient List          | Doctor  | CSR     |
| `/doctor/patients/[id]`               | Patient Detail        | Doctor  | CSR     |
| `/doctor/medicine`                    | AI Medicine           | Doctor  | CSR     |
| `/doctor/schedule`                    | Schedule              | Doctor  | CSR     |
| `/doctor/community`                   | Doctor Community      | Doctor  | CSR     |
| `/doctor/community/moderation`        | Moderation Panel      | Doctor  | CSR     |
| `/doctor/delegate`                    | Delegate              | Doctor  | CSR     |
| `/doctor/consultation/[id]`           | Consultation Room     | Doctor  | CSR     |

---

## 5. Authentication System

### 5.1 Auth Flow

```
Patient Registration Flow:
─────────────────────────
Step 1 (Account)  →  Step 2 (Personal)  →  Step 3 (Health Profile)  →  Step 4 (Done)
   [POST /auth/patient/register/step1]     [POST /auth/patient/register/complete]
   Returns: { tempToken }                  Returns: { accessToken, refreshToken, user }

Doctor Registration Flow:
─────────────────────────
Step 1 (Account)  →  Step 2 (Professional)  →  Step 3 (Documents)  →  Step 4 (Pending)
   [POST /auth/doctor/register]              [POST /auth/doctor/upload-docs]
   Returns: { tempToken }                    Returns: { status: 'pending_review' }
   ↓
Admin approves  →  [PATCH /auth/doctor/verify/:doctorId]
   →  Doctor receives email with activation link
   →  Doctor logs in normally

Login Flow (Both Roles):
────────────────────────
[POST /auth/{role}/login]
  → Returns: { accessToken (15min), refreshToken (7d), user: {...} }
  → accessToken stored: memory (Zustand)
  → refreshToken stored: httpOnly cookie (set by server)

Token Refresh:
──────────────
  → Axios interceptor catches 401
  → Calls [POST /auth/refresh] with cookie
  → Returns new accessToken
  → Retries original request transparently
```

### 5.2 Zustand Auth Store

```typescript
// stores/auth-store.ts
interface AuthState {
  accessToken: string | null;
  role: "patient" | "doctor" | null;
  isAuthenticated: boolean;
  isLoading: boolean;

  setAuth: (token: string, role: "patient" | "doctor") => void;
  clearAuth: () => void;
  refreshToken: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  accessToken: null,
  role: null,
  isAuthenticated: false,
  isLoading: true,

  setAuth: (token, role) =>
    set({ accessToken: token, role, isAuthenticated: true, isLoading: false }),

  clearAuth: () =>
    set({ accessToken: null, role: null, isAuthenticated: false }),

  refreshToken: async () => {
    try {
      const res = await fetch("/api/auth/refresh", { method: "POST" });
      const { accessToken, role } = await res.json();
      set({ accessToken, role, isAuthenticated: true });
    } catch {
      set({ accessToken: null, role: null, isAuthenticated: false });
    }
  },
}));
```

### 5.3 Token Security Rules

- `accessToken` — stored **in memory only** (Zustand), never in localStorage or sessionStorage
- `refreshToken` — stored in `httpOnly`, `Secure`, `SameSite=Strict` cookie (set server-side)
- On page refresh — `refreshToken` cookie triggers silent re-auth via `layout.tsx` on mount
- Doctor accounts include `isVerified: boolean` in JWT payload — unverified doctors redirected to pending screen

---

## 6. State Management

### 6.1 Zustand Stores (Client-only global state)

```typescript
// stores/user-store.ts
interface UserState {
  patient: PatientProfile | null;
  doctor: DoctorProfile | null;
  setPatient: (p: PatientProfile) => void;
  setDoctor: (d: DoctorProfile) => void;
  clearUser: () => void;
}

// stores/ui-store.ts
interface UIState {
  sidebarCollapsed: boolean;
  activeModal: string | null;
  theme: "light" | "dark";
  toggleSidebar: () => void;
  openModal: (id: string) => void;
  closeModal: () => void;
  setTheme: (t: "light" | "dark") => void;
}

// stores/notification-store.ts
interface NotificationState {
  notifications: Notification[];
  unreadCount: number;
  addNotification: (n: Notification) => void;
  markAllRead: () => void;
}
```

### 6.2 TanStack Query — Server State

```typescript
// lib/query-keys.ts
export const queryKeys = {
  // Patient
  patientProfile: ["patient", "profile"] as const,
  reminders: (date: string) => ["patient", "reminders", date] as const,
  consultations: ["patient", "consultations"] as const,
  journalEntries: (month: string) => ["patient", "journal", month] as const,

  // Doctor
  doctorProfile: ["doctor", "profile"] as const,
  patientList: ["doctor", "patients"] as const,
  patientDetail: (id: string) => ["doctor", "patients", id] as const,
  schedule: (date: string) => ["doctor", "schedule", date] as const,

  // Community
  communityGroups: ["community", "groups"] as const,
  groupPosts: (group: string, filter: string) =>
    ["community", group, "posts", filter] as const,
  postDetail: (postId: string) => ["community", "posts", postId] as const,
  postComments: (postId: string) =>
    ["community", "posts", postId, "comments"] as const,

  // AI
  medicineInfo: (query: string) => ["ai", "medicine", query] as const,
  chatHistory: ["ai", "chat"] as const,
};
```

### 6.3 Query Configuration

```typescript
// app/layout.tsx — QueryClient config
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      gcTime: 1000 * 60 * 30, // 30 minutes
      retry: 2,
      refetchOnWindowFocus: false, // Don't refetch on tab switch
      refetchOnReconnect: true,
    },
    mutations: {
      retry: 1,
    },
  },
});
```

---

## 7. Component Architecture

### 7.1 Component Conventions

All components follow this pattern:

```typescript
// components/community/post-card.tsx
import type { Post } from '@/types/community.types'
import { cn } from '@/lib/utils'

interface PostCardProps {
  post: Post
  showGroupBadge?: boolean
  className?: string
  onReact?: (postId: string, reaction: ReactionType) => void
}

export function PostCard({
  post,
  showGroupBadge = false,
  className,
  onReact,
}: PostCardProps) {
  // component logic
  return (
    <div className={cn('rounded-xl border bg-white p-5 shadow-sm', className)}>
      {/* ... */}
    </div>
  )
}
```

**Rules:**

- Named exports only (no default exports on components)
- Props interface always defined and exported
- `className` prop on all layout components for composition
- `cn()` utility for conditional Tailwind classes

### 7.2 Layout Components

#### Patient Shell Layout (`app/patient/layout.tsx`)

```typescript
export default function PatientLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      <PatientSidebar />                          {/* 256px fixed, collapsible */}
      <div className="flex flex-1 flex-col overflow-hidden">
        <TopBar role="patient" />                  {/* 72px sticky */}
        <main className="flex-1 overflow-y-auto p-8">
          {children}
        </main>
      </div>
    </div>
  )
}
```

#### Doctor Shell Layout (`app/doctor/layout.tsx`)

```typescript
export default function DoctorLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen overflow-hidden bg-slate-50">
      <DoctorSidebar />                           {/* Same structure, different nav items */}
      <div className="flex flex-1 flex-col overflow-hidden">
        <TopBar role="doctor" />                   {/* Includes availability toggle */}
        <main className="flex-1 overflow-y-auto p-8">
          {children}
        </main>
      </div>
    </div>
  )
}
```

### 7.3 Skeleton Loading Pattern

Every data-driven component must have a skeleton companion:

```typescript
// Loaded state
<PostCard post={post} />

// Loading state
<PostCardSkeleton />  // Same dimensions, shimmer animation

// Implementation pattern
function PostCardSkeleton() {
  return (
    <div className="animate-pulse rounded-xl border bg-white p-5">
      <div className="h-4 w-24 rounded bg-gray-200" />
      <div className="mt-3 h-6 w-3/4 rounded bg-gray-200" />
      <div className="mt-2 h-4 w-full rounded bg-gray-200" />
      <div className="mt-2 h-4 w-2/3 rounded bg-gray-200" />
    </div>
  )
}
```

---

## 8. API Integration Layer

### 8.1 API Client Setup

```typescript
// lib/api-client.ts
import axios from "axios";
import { useAuthStore } from "@/stores/auth-store";

export const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 15000,
  headers: { "Content-Type": "application/json" },
  withCredentials: true, // Send httpOnly cookies
});

// Request interceptor — attach access token
apiClient.interceptors.request.use((config) => {
  const token = useAuthStore.getState().accessToken;
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// Response interceptor — handle 401 with token refresh
apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      await useAuthStore.getState().refreshToken();
      const newToken = useAuthStore.getState().accessToken;
      originalRequest.headers.Authorization = `Bearer ${newToken}`;
      return apiClient(originalRequest);
    }
    return Promise.reject(error);
  },
);
```

### 8.2 API Contract Format

All API responses from the backend are expected in this format:

```typescript
// Success
{
  "success": true,
  "data": { ... },
  "meta": {
    "page": 1,
    "limit": 20,
    "total": 150
  }
}

// Error
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Email already exists",
    "field": "email"    // optional, for form field errors
  }
}
```

### 8.3 Key API Endpoints (Frontend Expects)

```typescript
// AUTH
POST   /auth/patient/register
POST   /auth/patient/login
POST   /auth/doctor/register
POST   /auth/doctor/login
POST   /auth/refresh
POST   /auth/logout
POST   /auth/forgot-password
POST   /auth/reset-password

// PATIENT
GET    /patient/profile
PUT    /patient/profile
GET    /patient/dashboard-summary
GET    /patient/reminders?date=YYYY-MM-DD
POST   /patient/reminders
PUT    /patient/reminders/:id
DELETE /patient/reminders/:id
GET    /patient/consultations
POST   /patient/consultations/book
GET    /patient/journal?month=YYYY-MM
GET    /patient/journal/:date
POST   /patient/journal
PUT    /patient/journal/:date

// DOCTOR
GET    /doctor/profile
PUT    /doctor/profile
GET    /doctor/patients
GET    /doctor/patients/:id
GET    /doctor/patients/:id/history
GET    /doctor/schedule?date=YYYY-MM-DD
POST   /doctor/schedule
GET    /doctor/consultations
GET    /doctor/dashboard-summary

// COMMUNITY
GET    /community/groups
GET    /community/groups/:slug
POST   /community/groups/:slug/join
DELETE /community/groups/:slug/leave
GET    /community/groups/:slug/posts?filter=all&page=1
POST   /community/groups/:slug/posts
GET    /community/posts/:postId
PUT    /community/posts/:postId
DELETE /community/posts/:postId
POST   /community/posts/:postId/react
GET    /community/posts/:postId/comments
POST   /community/posts/:postId/comments
POST   /community/posts/:postId/report
GET    /community/moderation/flagged       # Doctor only
PATCH  /community/moderation/:postId       # Doctor only

// AI
POST   /ai/medicine-info                   # { image?: base64, name?: string, notes?: string }
POST   /ai/chat                            # { message: string, history: Message[] }
POST   /ai/mental-health-assess            # { chatHistory: Message[], medicalHistory: {} }
GET    /ai/nutrition-plan/:patientId
GET    /ai/exercise-plan/:patientId
POST   /ai/prescription-suggest           # Doctor only
```

---

## 9. Community Module — Technical Spec

### 9.1 TypeScript Types

```typescript
// types/community.types.ts

export type PostType =
  | "question"
  | "experience"
  | "tip"
  | "update"
  | "vent"
  | "doctor_insight";
export type ReactionType = "heart" | "support" | "helpful" | "strong";
export type ModerationStatus = "visible" | "flagged" | "hidden" | "approved";

export interface CommunityGroup {
  slug: string;
  name: string;
  description: string;
  category: "chronic_physical" | "mental_health" | "lifestyle" | "open";
  memberCount: number;
  iconEmoji: string;
  bannerColor: string;
  isJoined: boolean;
  unreadCount?: number;
  moderatorId?: string;
}

export interface Post {
  id: string;
  groupSlug: string;
  authorId: string;
  authorName: string | null; // null if anonymous
  authorAvatar: string | null;
  isAnonymous: boolean;
  isDoctorPost: boolean;
  doctorVerified?: boolean;
  postType: PostType;
  title: string;
  content: string; // HTML from Tiptap rich text
  conditionTag?: string;
  moodTag?: string;
  images?: string[];
  reactions: Record<ReactionType, number>;
  userReaction?: ReactionType;
  commentCount: number;
  isPinned: boolean;
  moderationStatus: ModerationStatus;
  createdAt: string;
  updatedAt: string;
}

export interface Comment {
  id: string;
  postId: string;
  authorId: string;
  authorName: string | null;
  isAnonymous: boolean;
  isDoctorComment: boolean;
  content: string;
  reactions: Record<ReactionType, number>;
  userReaction?: ReactionType;
  parentCommentId: string | null; // null = top-level
  replies?: Comment[];
  createdAt: string;
}

export interface DoctorAnswer {
  id: string;
  postId: string;
  doctorId: string;
  doctorName: string;
  doctorSpecialty: string;
  content: string;
  isPinned: true;
  createdAt: string;
}
```

### 9.2 Community Hooks

```typescript
// hooks/use-community.ts

// Fetch all groups the patient has joined
export function useJoinedGroups() {
  return useQuery({
    queryKey: queryKeys.communityGroups,
    queryFn: () =>
      apiClient.get("/community/groups?joined=true").then((r) => r.data.data),
  });
}

// Fetch posts in a group with filters
export function useGroupPosts(
  groupSlug: string,
  filter: string = "all",
  page = 1,
) {
  return useInfiniteQuery({
    queryKey: queryKeys.groupPosts(groupSlug, filter),
    queryFn: ({ pageParam = 1 }) =>
      apiClient
        .get(`/community/groups/${groupSlug}/posts`, {
          params: { filter, page: pageParam, limit: 10 },
        })
        .then((r) => r.data),
    getNextPageParam: (lastPage) =>
      lastPage.meta.page < Math.ceil(lastPage.meta.total / 10)
        ? lastPage.meta.page + 1
        : undefined,
    initialPageParam: 1,
  });
}

// Create a post
export function useCreatePost(groupSlug: string) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: CreatePostInput) =>
      apiClient
        .post(`/community/groups/${groupSlug}/posts`, data)
        .then((r) => r.data.data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["community", groupSlug, "posts"],
      });
    },
  });
}

// React to a post (optimistic update)
export function useReactToPost(postId: string) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (reaction: ReactionType) =>
      apiClient.post(`/community/posts/${postId}/react`, { reaction }),
    onMutate: async (reaction) => {
      await queryClient.cancelQueries({
        queryKey: queryKeys.postDetail(postId),
      });
      const prev = queryClient.getQueryData(queryKeys.postDetail(postId));
      // Optimistic update
      queryClient.setQueryData(queryKeys.postDetail(postId), (old: Post) => ({
        ...old,
        reactions: {
          ...old.reactions,
          [reaction]: old.reactions[reaction] + 1,
        },
        userReaction: reaction,
      }));
      return { prev };
    },
    onError: (_err, _vars, context) => {
      queryClient.setQueryData(queryKeys.postDetail(postId), context?.prev);
    },
  });
}
```

### 9.3 Post Creation Form — Validation Schema

```typescript
// lib/validators.ts
import { z } from "zod";

export const createPostSchema = z.object({
  title: z
    .string()
    .min(5, "Title must be at least 5 characters")
    .max(150, "Title too long"),
  content: z
    .string()
    .min(20, "Post content must be at least 20 characters")
    .max(5000, "Post too long"),
  postType: z.enum([
    "question",
    "experience",
    "tip",
    "update",
    "vent",
    "doctor_insight",
  ]),
  conditionTag: z.string().optional(),
  moodTag: z.string().optional(),
  isAnonymous: z.boolean().default(true),
  images: z.array(z.string()).max(4, "Max 4 images").optional(),
});

export type CreatePostInput = z.infer<typeof createPostSchema>;
```

---

## 10. AI Feature Integration

### 10.1 AI Medicine Assistant

```typescript
// POST /ai/medicine-info
interface MedicineInfoRequest {
  image?: string; // base64 encoded image
  name?: string; // medicine name if typed
  notes?: string; // additional patient notes
}

interface MedicineInfoResponse {
  name: string;
  genericName: string;
  type: "ayurvedic" | "allopathy" | "homeopathic" | "supplement";
  dosage: {
    standard: string;
    forCondition?: string;
  };
  timing: string[]; // e.g. ["After breakfast", "Before bed"]
  diseaseRelevance: string[];
  sideEffects: string[];
  interactions: string[];
  classification: string;
  aiConfidence: number; // 0–1, show warning if < 0.7
  disclaimer: string;
}
```

**Frontend implementation notes:**

- Use React Dropzone for image upload
- Convert image to base64 client-side before sending
- Show `aiConfidence` as a visual indicator bar
- Always render the `disclaimer` text prominently
- Show skeleton loader during AI processing (typically 2–5 seconds)

### 10.2 AI Chatbot Interface

```typescript
// Message format
interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: string;
  metadata?: {
    severity?: "low" | "medium" | "high";
    suggestDoctor?: boolean;
    crisisDetected?: boolean; // triggers emergency banner
  };
}

// POST /ai/chat — send message
interface ChatRequest {
  message: string;
  history: ChatMessage[]; // full conversation history
  context?: {
    patientId: string;
    medicalHistory?: string[];
  };
}
```

**Crisis Detection UI:**
When `crisisDetected: true` is in the AI response metadata, the chat UI must:

1. Display a full-width red banner: `"We care about you. If you're in crisis, please reach out: iCall: 9152987821"`
2. Show a `Connect with Doctor Now` button that fast-tracks a live consultation booking
3. Log the event (handled by backend)

### 10.3 AI Mental Health Assessment

```typescript
// POST /ai/mental-health-assess
interface AssessmentRequest {
  chatHistory: ChatMessage[];
  medicalHistory: {
    existingConditions: string[];
    previousDiagnoses: string[];
  };
}

interface AssessmentResponse {
  possibleConditions: Array<{
    name: string;
    severity: "mild" | "moderate" | "severe";
    confidence: number;
  }>;
  recommendedAction: "self_care" | "consult_doctor" | "urgent_referral";
  selfCareSuggestions: string[];
  disclaimer: string;
}
```

---

## 11. Real-Time Features

### 11.1 WebSocket Connection

Used for: Live Consultation chat, incoming notification badges, doctor availability status.

```typescript
// hooks/use-websocket.ts
import { useEffect, useRef } from "react";
import { useAuthStore } from "@/stores/auth-store";
import { useNotificationStore } from "@/stores/notification-store";

export function useWebSocket() {
  const wsRef = useRef<WebSocket | null>(null);
  const { accessToken } = useAuthStore();
  const { addNotification } = useNotificationStore();

  useEffect(() => {
    if (!accessToken) return;

    const ws = new WebSocket(
      `${process.env.NEXT_PUBLIC_WS_URL}?token=${accessToken}`,
    );

    ws.onmessage = (event) => {
      const msg = JSON.parse(event.data);
      switch (msg.type) {
        case "notification":
          addNotification(msg.payload);
          break;
        case "chat_message":
          // handled by consultation page
          break;
        case "doctor_availability":
          // update doctor status in UI
          break;
      }
    };

    ws.onclose = () => {
      // Exponential backoff reconnect
      setTimeout(() => (wsRef.current = null), 3000);
    };

    wsRef.current = ws;
    return () => ws.close();
  }, [accessToken]);

  return wsRef;
}
```

### 11.2 Live Consultation Room

The consultation page (`/doctor/consultation/[id]`) and patient's consultation page use WebSocket for real-time chat. Video/audio is handled by a WebRTC library (recommendation: `simple-peer` or backend-provided signaling).

**Consultation UI components:**

- Split layout: video panel (top/left) + chat panel (right/bottom)
- Chat bubbles auto-scroll to latest
- Typing indicator (WebSocket `typing` event)
- End Call button with confirmation modal
- Prescription pad panel that slides in after call ends

---

## 12. Forms & Validation

### 12.1 Multi-Step Registration

```typescript
// components/auth/patient-register-steps.tsx

// Step state managed with useState + index
const [currentStep, setCurrentStep] = useState(0);
const [formData, setFormData] = useState<Partial<PatientRegisterInput>>({});

// Each step validates independently before proceeding
const step1Schema = z
  .object({
    fullName: z.string().min(2),
    email: z.string().email(),
    password: z
      .string()
      .min(8, "Minimum 8 characters")
      .regex(/[A-Z]/, "Must contain uppercase")
      .regex(/[0-9]/, "Must contain a number"),
    confirmPassword: z.string(),
  })
  .refine((d) => d.password === d.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

const step2Schema = z.object({
  dateOfBirth: z.string().refine((d) => {
    const age = new Date().getFullYear() - new Date(d).getFullYear();
    return age >= 13 && age <= 120;
  }, "Must be 13 or older"),
  gender: z.enum(["male", "female", "non_binary", "prefer_not_to_say"]),
  phone: z.string().optional(),
  city: z.string().min(2).optional(),
});

const step3Schema = z.object({
  conditions: z.array(z.string()).min(0), // optional — 0 or more
  otherConditions: z.string().optional(),
});
```

### 12.2 Doctor Registration — File Upload

```typescript
// components/auth/doctor-register-steps.tsx (Step 3)

// File validation
const ACCEPTED_TYPES = ["application/pdf", "image/jpeg", "image/png"];
const MAX_SIZE_MB = 5;

function validateFile(file: File): string | null {
  if (!ACCEPTED_TYPES.includes(file.type)) return "Only PDF and images allowed";
  if (file.size > MAX_SIZE_MB * 1024 * 1024)
    return `File must be under ${MAX_SIZE_MB}MB`;
  return null;
}

// Upload with progress
async function uploadDocument(file: File, onProgress: (n: number) => void) {
  const formData = new FormData();
  formData.append("document", file);
  formData.append("type", "medical_license");

  return axios.post("/api/auth/doctor/upload-doc", formData, {
    headers: { "Content-Type": "multipart/form-data" },
    onUploadProgress: (e) => {
      onProgress(Math.round((e.loaded * 100) / (e.total ?? 1)));
    },
  });
}
```

---

## 13. Performance Requirements

### 13.1 Core Web Vitals Targets

| Metric                         | Target  | Tool            |
| ------------------------------ | ------- | --------------- |
| LCP (Largest Contentful Paint) | < 2.5s  | Lighthouse      |
| FID (First Input Delay)        | < 100ms | Lighthouse      |
| CLS (Cumulative Layout Shift)  | < 0.1   | Lighthouse      |
| FCP (First Contentful Paint)   | < 1.5s  | Lighthouse      |
| TTFB (Time to First Byte)      | < 600ms | WebPageTest     |
| Lighthouse Performance         | > 85    | Chrome DevTools |
| Lighthouse Accessibility       | > 90    | Chrome DevTools |

### 13.2 Optimization Techniques

```typescript
// 1. Image optimization — always use next/image
import Image from 'next/image'
<Image src={avatarUrl} width={48} height={48} alt="User avatar" />

// 2. Code splitting — lazy load heavy components
const DoctorCalendar = dynamic(() => import('@/components/doctor/schedule/doctor-calendar'), {
  loading: () => <CalendarSkeleton />,
  ssr: false,
})

const TiptapEditor = dynamic(() => import('@/components/patient/journal/journal-editor'), {
  loading: () => <EditorSkeleton />,
  ssr: false,
})

// 3. Font optimization — next/font (no layout shift)
import { Inter, JetBrains_Mono } from 'next/font/google'
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' })

// 4. Infinite scroll — virtualize long lists
// Use @tanstack/react-virtual for community post feeds > 50 items

// 5. Prefetch on hover for common navigation
<Link href="/patient/community" prefetch={false}>Community</Link>
// Next.js prefetches on hover automatically in production
```

### 13.3 Bundle Size Targets

| Chunk                  | Max Size      |
| ---------------------- | ------------- |
| First Load JS (shared) | < 100 KB gzip |
| Per-page JS            | < 50 KB gzip  |
| Total initial bundle   | < 200 KB gzip |

Run `next build && next analyze` with `@next/bundle-analyzer` before submitting.

---

## 14. Security Requirements

### 14.1 Frontend Security Checklist

| Requirement                 | Implementation                                                  |
| --------------------------- | --------------------------------------------------------------- |
| No tokens in localStorage   | Tokens in memory (Zustand) only                                 |
| No tokens in sessionStorage | Enforced — no writes to sessionStorage                          |
| XSS prevention              | React escapes by default; Tiptap sanitizes HTML via DOMPurify   |
| CSRF protection             | httpOnly cookie + SameSite=Strict on refreshToken               |
| Sensitive routes guarded    | Next.js middleware on all `/patient/*` and `/doctor/*`          |
| API URL never exposed       | All API calls via `/api/*` Next.js proxy in production          |
| File upload validation      | Type + size check before upload, backend re-validates           |
| Role mismatch prevention    | JWT `role` claim verified on every API call by backend          |
| Doctor unverified access    | `isVerified` flag in JWT; unverified doctors hit pending screen |

### 14.2 Content Security Policy (next.config.ts)

```typescript
const securityHeaders = [
  { key: "X-DNS-Prefetch-Control", value: "on" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "origin-when-cross-origin" },
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-eval' 'unsafe-inline'", // Next.js requires unsafe-eval in dev
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com",
      "img-src 'self' data: https://res.cloudinary.com",
      "connect-src 'self' https://your-backend-api.com wss://your-ws-server.com",
    ].join("; "),
  },
];
```

### 14.3 User-Generated Content (Community Posts)

```typescript
// All post and comment HTML content must be sanitized before rendering
import DOMPurify from 'dompurify'

function SafeHTML({ html }: { html: string }) {
  const clean = DOMPurify.sanitize(html, {
    ALLOWED_TAGS: ['p', 'strong', 'em', 'ul', 'ol', 'li', 'br', 'a'],
    ALLOWED_ATTR: ['href', 'target', 'rel'],
  })
  return <div dangerouslySetInnerHTML={{ __html: clean }} />
}
```

---

## 15. Responsive Design & Accessibility

### 15.1 Breakpoints (Tailwind)

```typescript
// tailwind.config.ts
screens: {
  'xs':  '375px',   // Small mobile
  'sm':  '640px',   // Large mobile
  'md':  '768px',   // Tablet
  'lg':  '1024px',  // Small desktop
  'xl':  '1280px',  // Standard desktop
  '2xl': '1536px',  // Wide desktop
}
```

### 15.2 Responsive Behaviors

| Element          | Mobile             | Tablet                 | Desktop         |
| ---------------- | ------------------ | ---------------------- | --------------- |
| Sidebar          | Hidden (hamburger) | Icon rail (72px)       | Full (256px)    |
| Dashboard grid   | 1 column           | 2 columns              | 3-4 columns     |
| Community groups | Full width list    | 2-column grid          | 3-column grid   |
| Post detail      | Full width         | 70% + sidebar          | 65% + sidebar   |
| Auth pages       | Single column      | Single column centered | Split panel     |
| Navbar           | Hamburger menu     | Hamburger menu         | Full horizontal |

### 15.3 Accessibility Requirements

```
Semantic HTML:      All interactive elements use correct tags (<button>, <nav>, <main>, etc.)
ARIA Labels:        All icon-only buttons have aria-label
Keyboard Nav:       Tab, Enter, Escape, Arrow keys work on all components
Focus Indicators:   2px teal outline on all focusable elements
Color Contrast:     Minimum 4.5:1 ratio for body text, 3:1 for large text
Screen Readers:     Skeleton loaders have aria-busy="true"
Skip Links:         "Skip to main content" link at top of every page
Error Messages:     Form errors associated with inputs via aria-describedby
Live Regions:       Toast notifications use aria-live="polite"
```

---

## 16. Testing Strategy

### 16.1 Unit Tests (Vitest)

Test pure functions and Zod validators:

```typescript
// lib/validators.test.ts
describe('createPostSchema', () => {
  it('rejects posts shorter than 20 characters', () => {
    const result = createPostSchema.safeParse({ content: 'short', ... })
    expect(result.success).toBe(false)
  })
})
```

### 16.2 Component Tests (React Testing Library)

```typescript
// components/community/post-card.test.tsx
describe('PostCard', () => {
  it('renders anonymous author correctly', () => {
    render(<PostCard post={{ ...mockPost, isAnonymous: true }} />)
    expect(screen.getByText('Community Member')).toBeInTheDocument()
    expect(screen.queryByText(mockPost.authorName!)).not.toBeInTheDocument()
  })

  it('shows verified doctor badge on doctor posts', () => {
    render(<PostCard post={{ ...mockPost, isDoctorPost: true, doctorVerified: true }} />)
    expect(screen.getByText('Verified Doctor')).toBeInTheDocument()
  })
})
```

### 16.3 E2E Tests (Playwright)

Priority E2E test scenarios:

```typescript
// e2e/patient-auth.spec.ts
test("patient can complete 4-step registration", async ({ page }) => {
  await page.goto("/auth/patient/register");
  // Step 1
  await page.fill("[name=fullName]", "Test Patient");
  await page.fill("[name=email]", "test@medscope.com");
  await page.fill("[name=password]", "Test@12345");
  await page.click("text=Next");
  // ... continue through all 4 steps
  await expect(page).toHaveURL("/patient/dashboard");
});

// e2e/community.spec.ts
test("patient can create a post and see it in feed", async ({ page }) => {
  await loginAsPatient(page);
  await page.goto("/patient/community/diabetes-warriors");
  await page.click("text=Create Post");
  // ... fill form, submit, verify post appears
});
```

---

## 17. Deployment & CI/CD

### 17.1 Vercel Configuration (`vercel.json`)

```json
{
  "buildCommand": "pnpm build",
  "outputDirectory": ".next",
  "framework": "nextjs",
  "regions": ["bom1"],
  "env": {
    "NEXT_PUBLIC_API_URL": "@medscope_api_url",
    "NEXT_PUBLIC_WS_URL": "@medscope_ws_url"
  },
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Frame-Options", "value": "SAMEORIGIN" },
        { "key": "X-Content-Type-Options", "value": "nosniff" }
      ]
    }
  ]
}
```

### 17.2 GitHub Actions CI Pipeline

```yaml
# .github/workflows/ci.yml
name: CI

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  quality:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v2
      - uses: actions/setup-node@v4
        with:
          node-version: "20"
          cache: "pnpm"

      - run: pnpm install --frozen-lockfile
      - run: pnpm lint # ESLint
      - run: pnpm type-check # tsc --noEmit
      - run: pnpm test # Vitest unit tests
      - run: pnpm build # Ensure build passes
```

### 17.3 Branch Strategy

```
main          →  Production (medscope.vercel.app)
develop       →  Staging (auto-deploy to preview URL)
feature/*     →  Feature branches (PR preview deployments)
fix/*         →  Bug fix branches
```

---

## 18. Environment Variables

```bash
# .env.local (never commit this file)

# Backend API
NEXT_PUBLIC_API_URL=https://api.medscope.dev
NEXT_PUBLIC_WS_URL=wss://ws.medscope.dev

# Internal API routes (server-side only, no NEXT_PUBLIC_)
API_SECRET_KEY=your_internal_secret

# Feature Flags
NEXT_PUBLIC_ENABLE_DARK_MODE=true
NEXT_PUBLIC_ENABLE_VIDEO_CALL=false         # toggle for MVP
NEXT_PUBLIC_ENABLE_COMMUNITY=true

# Analytics (optional for project demo)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

```bash
# .env.example (commit this file — template for team)
NEXT_PUBLIC_API_URL=
NEXT_PUBLIC_WS_URL=
API_SECRET_KEY=
NEXT_PUBLIC_ENABLE_DARK_MODE=true
NEXT_PUBLIC_ENABLE_VIDEO_CALL=false
NEXT_PUBLIC_ENABLE_COMMUNITY=true
```

---

## 19. Error Handling Strategy

### 19.1 Error Boundary

```typescript
// components/shared/error-boundary.tsx
'use client'

export function ErrorBoundary({ children }: { children: React.ReactNode }) {
  return (
    <NextErrorBoundary
      fallback={({ error, reset }) => (
        <div className="flex flex-col items-center justify-center p-12 text-center">
          <AlertCircle className="h-12 w-12 text-red-400" />
          <h2 className="mt-4 text-lg font-semibold">Something went wrong</h2>
          <p className="mt-2 text-sm text-gray-500">{error.message}</p>
          <button onClick={reset} className="mt-4 btn-primary">Try Again</button>
        </div>
      )}
    >
      {children}
    </NextErrorBoundary>
  )
}
```

### 19.2 API Error Handling

```typescript
// Standardized error display in TanStack Query
function useQueryWithToast<T>(queryFn: () => Promise<T>, key: unknown[]) {
  return useQuery({
    queryKey: key,
    queryFn,
    throwOnError: false,
    meta: {
      onError: (error: AxiosError) => {
        const msg =
          (error.response?.data as ApiError)?.error?.message ??
          "Something went wrong";
        toast.error(msg);
      },
    },
  });
}
```

### 19.3 Empty States

Every list or feed must have an empty state component:

```typescript
// If no community posts yet:
<EmptyState
  icon={<MessageSquare />}
  title="No posts yet"
  description="Be the first to share in this group."
  action={{ label: "Create Post", onClick: openPostModal }}
/>

// If no reminders:
<EmptyState
  icon={<Bell />}
  title="No reminders set"
  description="Add your first medication reminder."
  action={{ label: "Add Reminder", href: "/patient/reminders/new" }}
/>
```

---

## 20. Design Token Reference

```typescript
// tailwind.config.ts — complete design tokens
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Brand
        teal: { DEFAULT: "#028090", light: "#00A896", dark: "#01626D" },
        navy: { DEFAULT: "#0A2342", light: "#1A3A5C" },
        seafoam: "#02C39A",

        // Backgrounds
        canvas: "#FFFFFF",
        surface: "#F7F9FA",
        "teal-tint": "#E0F4F6",

        // Text
        "text-primary": "#2D2D2D",
        "text-secondary": "#555555",
        "text-muted": "#9CA3AF",

        // States
        error: { DEFAULT: "#C0392B", light: "#FDECEA" },
        warning: { DEFAULT: "#E67E22", light: "#FEF3E2" },
        success: { DEFAULT: "#27AE60", light: "#E6F9EE" },
        info: { DEFAULT: "#2980B9", light: "#E8F4FC" },

        // Community post type colors
        "post-question": "#3B82F6",
        "post-experience": "#22C55E",
        "post-tip": "#028090",
        "post-update": "#9CA3AF",
        "post-vent": "#8B5CF6",
        "post-doctor": "#F59E0B",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      fontSize: {
        display: ["4.5rem", { lineHeight: "1.1", fontWeight: "800" }],
        h1: ["3rem", { lineHeight: "1.2", fontWeight: "700" }],
        h2: ["2rem", { lineHeight: "1.3", fontWeight: "600" }],
        h3: ["1.5rem", { lineHeight: "1.4", fontWeight: "600" }],
        h4: ["1.25rem", { lineHeight: "1.5", fontWeight: "600" }],
      },
      borderRadius: {
        card: "12px",
        pill: "999px",
      },
      boxShadow: {
        card: "0 2px 8px rgba(0, 0, 0, 0.08)",
        "card-md": "0 4px 16px rgba(0, 0, 0, 0.12)",
        "card-lg": "0 8px 32px rgba(0, 0, 0, 0.16)",
      },
      animation: {
        shimmer: "shimmer 1.5s infinite linear",
        "pulse-ring": "pulse-ring 2s infinite",
        "slide-up": "slide-up 0.3s ease forwards",
        "fade-in": "fade-in 0.2s ease forwards",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "pulse-ring": {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(2, 128, 144, 0.4)" },
          "50%": { boxShadow: "0 0 0 8px rgba(2, 128, 144, 0)" },
        },
        "slide-up": {
          from: { opacity: "0", transform: "translateY(12px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/typography"), // for Tiptap prose content
  ],
};

export default config;
```

---

## Quick Reference — Getting Started

```bash
# 1. Clone & install
git clone https://github.com/your-team/medscope-frontend
cd medscope-frontend
pnpm install

# 2. Set up environment
cp .env.example .env.local
# Fill in API URL from backend team

# 3. Install shadcn/ui
pnpm dlx shadcn@latest init

# 4. Add key shadcn components
pnpm dlx shadcn@latest add button card dialog input tabs sheet badge avatar

# 5. Install additional dependencies
pnpm add framer-motion zustand @tanstack/react-query @tanstack/react-query-devtools
pnpm add react-hook-form @hookform/resolvers zod
pnpm add axios sonner lucide-react
pnpm add @tiptap/react @tiptap/starter-kit @tiptap/extension-placeholder
pnpm add react-dropzone dompurify
pnpm add recharts react-day-picker
pnpm add -D @types/dompurify tailwindcss-animate @tailwindcss/typography

# 6. Run dev server
pnpm dev
```

---

_Document end — Medscope TRD v1.0 | IT Department, B.Tech Final Year Project 2025–26_

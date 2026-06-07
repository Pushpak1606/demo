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
    if (!patientToken && process.env.NODE_ENV !== 'development') {
      return NextResponse.redirect(new URL("/auth/patient/login", request.url));
    }
  }

  // Protect doctor routes
  if (DOCTOR_ROUTES.some((r) => pathname.startsWith(r))) {
    if (!doctorToken && process.env.NODE_ENV !== 'development') {
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

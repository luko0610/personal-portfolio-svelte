import { redirect } from "@sveltejs/kit";

// Root should redirect to /about-me
export const load = async () => {
  throw redirect(301, `/about-me`);
};

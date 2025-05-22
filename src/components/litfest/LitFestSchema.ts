
import { z } from "zod";

// Define form schema
export const litFestFormSchema = z.object({
  name: z.string()
    .min(1, { message: "Name is required" }),
  email: z.string()
    .min(1, { message: "Email is required" })
    .email("Please enter a valid email address")
    .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, {
      message: "Please use a Gmail address"
    }),
  phone: z.string()
    .min(1, { message: "Phone number is required" })
    .regex(/^[6-9]\d{9}$/, {
      message: "Please enter a valid 10-digit phone number"
    }),
  semester: z.string()
    .min(1, { message: "Please select your current semester" }),
  branch: z.string()
    .min(1, { message: "Please select your branch" }),
  eventsToAttend: z.array(z.string())
    .min(1, { message: "Please select at least one event to attend" }),
  eventsToParticipate: z.array(z.string())
});

export type LitFestFormValues = z.infer<typeof litFestFormSchema>;

// Lists for dropdowns
export const semesterOptions = ["2nd", "4th", "6th", "8th"];
export const branchOptions = [
  "CSE", "AIML", "CSBS", "CSD", "CSDS", "AIR", "IOT", 
  "AIDS", "EE", "EX", "EC", "CIVIL", "MECHANICAL", "Other"
];
export const eventsOptions = [
  "Parliamentary Debate", 
  "Treasure Hunt on Books", 
  "Spell Bee", 
  "Open Mic"
];

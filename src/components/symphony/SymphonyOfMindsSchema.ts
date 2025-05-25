
import { z } from "zod";

// Lists for dropdowns
export const semesterOptions = ["2nd", "4th", "6th", "8th"];
export const branchOptions = [
  "CSE", "AIML", "CSBS", "CSD", "CSDS", "AIR", "IOT", 
  "AIDS", "EE", "EX", "EC", "CIVIL", "MECHANICAL", "Other"
];
export const eventOptions = [
  "Parliamentary Debate", 
  "Treasure Hunt on Books", 
  "Spell Bee", 
  "Open Mic",
  "Poster Making"
];

// Form schema
export const symphonyOfMindsFormSchema = z.object({
  name: z.string()
    .min(1, { message: "Name is required" }),
  email: z.string()
    .min(1, { message: "Email is required" })
    .email("Please enter a valid email address"),
  phone: z.string()
    .min(1, { message: "Phone number is required" })
    .regex(/^[6-9]\d{9}$/, {
      message: "Please enter a valid 10-digit phone number"
    }),
  semester: z.string()
    .min(1, { message: "Please select your current semester" }),
  branch: z.string()
    .min(1, { message: "Please select your branch" }),
  eventsToParticipate: z.array(z.string())
    .min(1, { message: "Please select at least one event to participate in" })
});

export type SymphonyOfMindsFormValues = z.infer<typeof symphonyOfMindsFormSchema>;

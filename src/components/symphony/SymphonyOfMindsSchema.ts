
import { z } from "zod";

// Semester options
export const semesterOptions = [
  "1st Semester",
  "2nd Semester", 
  "3rd Semester",
  "4th Semester",
  "5th Semester",
  "6th Semester",
  "7th Semester",
  "8th Semester",
  "Other"
] as const;

// Branch options
export const branchOptions = [
  "Computer Science Engineering",
  "Information Technology",
  "Electronics and Communication Engineering",
  "Electrical Engineering", 
  "Mechanical Engineering",
  "Civil Engineering",
  "Chemical Engineering",
  "Biotechnology",
  "Aerospace Engineering",
  "Other"
] as const;

// Event options
export const eventOptions = [
  "Parliamentary Debate",
  "Treasure Hunt", 
  "Spell Bee",
  "Open Mic",
  "Creative Writing Workshop",
  "Poetry Slam",
  "Storytelling Session"
] as const;

// Form schema
export const symphonyOfMindsFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  semester: z.string().min(1, "Please select your semester"),
  branch: z.string().min(1, "Please select your branch"),
  eventsToParticipate: z.array(z.string()).min(1, "Please select at least one event"),
});

export type SymphonyOfMindsFormValues = z.infer<typeof symphonyOfMindsFormSchema>;

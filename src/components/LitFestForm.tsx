
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

// Define form schema
const formSchema = z.object({
  email: z.string()
    .email("Please enter a valid college email address")
    .endsWith(".edu", { message: "Please use your college email (.edu)" }),
  semester: z.string({
    required_error: "Please select your current semester",
  }),
  branch: z.string({
    required_error: "Please select your branch",
  }),
  eventsToAttend: z.string({
    required_error: "Please select at least one event to attend",
  }),
  eventsToParticipate: z.string({
    required_error: "Please select at least one event to participate in",
  }),
});

type FormValues = z.infer<typeof formSchema>;

const LitFestForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize the form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      semester: "",
      branch: "",
      eventsToAttend: "",
      eventsToParticipate: "",
    },
  });

  // Handle form submission
  const onSubmit = async (values: FormValues) => {
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      console.log("Form values:", values);
      
      // Show success message
      toast.success("Registration successful! We'll see you at LitFest25.");
      
      // Reset form
      form.reset();
    } catch (error) {
      toast.error("Registration failed. Please try again later.");
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Lists for dropdowns
  const semesterOptions = ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th"];
  const branchOptions = ["Computer Science", "Information Technology", "Electrical Engineering", "Mechanical Engineering", "Civil Engineering", "Electronics & Communication", "Other"];
  const eventsOptions = [
    "Poetry Slam", 
    "Short Story Competition", 
    "Literary Quiz", 
    "Creative Writing Workshop", 
    "Book Reading Session", 
    "Author Meet & Greet", 
    "Publishing Panel Discussion",
    "Literary Debate"
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Register for LitFest25</h2>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>College Email</FormLabel>
                <FormControl>
                  <Input placeholder="your.name@college.edu" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="semester"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Current Semester</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your semester" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {semesterOptions.map((semester) => (
                      <SelectItem key={semester} value={semester}>
                        {semester} Semester
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="branch"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Branch / Department</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your branch" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {branchOptions.map((branch) => (
                      <SelectItem key={branch} value={branch}>
                        {branch}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="eventsToAttend"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Events You Want to Attend</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select events to attend" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {eventsOptions.map((event) => (
                      <SelectItem key={`attend-${event}`} value={event}>
                        {event}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="eventsToParticipate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Events You Want to Participate In</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select events to participate in" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {eventsOptions.map((event) => (
                      <SelectItem key={`participate-${event}`} value={event}>
                        {event}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <Button 
            type="submit" 
            className="w-full bg-purple-700 hover:bg-purple-800"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Register Now"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default LitFestForm;

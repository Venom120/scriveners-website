import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { litFestFormSchema, LitFestFormValues } from "./LitFestSchema";
import { ProfileFields } from "./ProfileFields";
import { AcademicFields } from "./AcademicFields";
import { EventSelectionFields } from "./EventSelectionFields";
import { useFormSubmission } from "./useFormSubmission";

const LitFestForm = () => {
  // Initialize the form
  const form = useForm<LitFestFormValues>({
    resolver: zodResolver(litFestFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      semester: "",
      branch: "",
      eventsToParticipate: [],
    },
  });

  // Use the form submission hook
  const { isSubmitting, formKey, handleSubmit } = useFormSubmission(form);

  return (
    <div className="bg-white m-18 p-4 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Register for Symphony of Minds</h2>
      
      <Form {...form}>
        <form key={formKey} onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
          {/* Profile Fields Section */}
          <ProfileFields form={form} />
          
          {/* Academic Fields Section */}
          <AcademicFields form={form} />
          
          {/* Event Selection Fields Section */}
          <EventSelectionFields form={form} />
          
          <Button 
            type="submit" 
            className="w-full bg-purple-700 hover:bg-purple-800"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Register Now"}
          </Button>
        </form>
      </Form>
      {/* Support Footer */}
      <footer className="mt-8 text-center text-2xl text-gray-500 border-t pt-2">
        Support: Dev Team – Yatharth Jain <a href="tel:6264007981" className="underline">6264007981</a>, 
        <a href="mailto:yatharthjain120@gmail.com" className="underline ml-1">yatharthjain120@gmail.com</a>
      </footer>
    </div>
  );
};

export default LitFestForm;

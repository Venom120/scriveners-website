
import { useState } from "react";
import { UseFormReturn } from "react-hook-form";
import { toast } from "sonner";
import { LitFestFormValues } from "./LitFestSchema";

export function useFormSubmission(form: UseFormReturn<LitFestFormValues>) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formKey, setFormKey] = useState(0);

  const handleSubmit = async (values: LitFestFormValues) => {
    setIsSubmitting(true);
    try {
      const dataToSend = {
        ...values,
        email: values.email.toLowerCase(),
        eventsToParticipate: values.eventsToParticipate.join(","),
      };
      console.log("Submitting form data:", dataToSend);
      const response = await fetch("/api/litfest/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to submit form");
      }
      
      // Show success message
      toast.success("Registration successful! We'll see you at LitFest25.");
      
      // Reset form and force re-render
      form.reset();
      setFormKey(prevKey => prevKey + 1); // Increment key to force re-render
    } catch (error: unknown) {
      toast.error((error as Error).message || "Registration failed. Please try again later.");
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    isSubmitting,
    formKey,
    handleSubmit
  };
}


import { useState } from "react";
import { UseFormReturn } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import { SymphonyOfMindsFormValues } from "./SymphonyOfMindsSchema";

export const useFormSubmission = (form: UseFormReturn<SymphonyOfMindsFormValues>) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formKey, setFormKey] = useState(0);
  const { toast } = useToast();

  const handleSubmit = async (values: SymphonyOfMindsFormValues) => {
    setIsSubmitting(true);
    console.log("Submitting Symphony of Minds registration:", values);
    
    try {
      const dataToSend = {
        ...values,
        email: values.email.toLowerCase(),
        eventsToParticipate: values.eventsToParticipate.join(","),
      };
      const response = await fetch("/api/symphony-of-minds/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Registration successful:", result);
        
        toast({
          title: "Registration Successful!",
          description: "You have been registered for Symphony of Minds. We'll contact you soon with more details.",
        });
        
        // Reset form and force re-render
        form.reset();
        setFormKey(prevKey => prevKey + 1); // Increment key to force re-render
      } else {
        const errorData = await response.json();
        console.error("Registration failed:", errorData);
        
        toast({
          title: "Registration Failed",
          description: errorData.message || "Something went wrong. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      
      toast({
        title: "Network Error",
        description: "Unable to submit registration. Please check your connection and try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    isSubmitting,
    formKey,
    handleSubmit,
  };
};

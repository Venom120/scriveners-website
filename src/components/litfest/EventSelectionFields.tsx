
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { UseFormReturn } from "react-hook-form";
import { LitFestFormValues, eventsOptions } from "./LitFestSchema";

interface EventSelectionFieldsProps {
  form: UseFormReturn<LitFestFormValues>;
}

export function EventSelectionFields({ form }: EventSelectionFieldsProps) {
  return (
    <>
      <FormField
        control={form.control}
        name="eventsToAttend"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Events You Want to Attend</FormLabel>
            <div className="flex flex-col gap-2">
              {eventsOptions.map((event) => (
                <FormControl key={`attend-${event}`}>
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      value={event}
                      checked={field.value?.includes(event)}
                      onChange={(e) => {
                        const isChecked = e.target.checked;
                        if (isChecked) {
                          field.onChange([...field.value, event]);
                        } else {
                          field.onChange(field.value.filter((v: string) => v !== event));
                        }
                      }}
                    />
                    {event}
                  </label>
                </FormControl>
              ))}
            </div>
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
            <div className="flex flex-col gap-2">
              {eventsOptions.map((event) => (
                <FormControl key={`participate-${event}`}>
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      value={event}
                      checked={field.value?.includes(event)}
                      onChange={(e) => {
                        const isChecked = e.target.checked;
                        if (isChecked) {
                          field.onChange([...field.value, event]);
                        } else {
                          field.onChange(field.value.filter((v: string) => v !== event));
                        }
                      }}
                    />
                    {event}
                  </label>
                </FormControl>
              ))}
            </div>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
}

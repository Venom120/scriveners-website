
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { UseFormReturn } from "react-hook-form";
import { SymphonyOfMindsFormValues, eventOptions } from "./SymphonyOfMindsSchema";

interface EventSelectionFieldsProps {
  form: UseFormReturn<SymphonyOfMindsFormValues>;
}

export function EventSelectionFields({ form }: EventSelectionFieldsProps) {
  return (
    <FormField
      control={form.control}
      name="eventsToParticipate"
      render={() => (
        <FormItem>
          <FormLabel className="text-base">Events to Participate In</FormLabel>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {eventOptions.map((event) => (
              <FormField
                key={event}
                control={form.control}
                name="eventsToParticipate"
                render={({ field }) => {
                  return (
                    <FormItem
                      key={event}
                      className="flex flex-row items-start space-x-3 space-y-0"
                    >
                      <FormControl>
                        <Checkbox
                          checked={field.value?.includes(event)}
                          onCheckedChange={(checked) => {
                            return checked
                              ? field.onChange([...field.value, event])
                              : field.onChange(
                                  field.value?.filter((value) => value !== event)
                                );
                          }}
                        />
                      </FormControl>
                      <FormLabel className="font-normal">
                        {event}
                      </FormLabel>
                    </FormItem>
                  );
                }}
              />
            ))}
          </div>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

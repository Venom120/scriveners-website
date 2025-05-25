
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { UseFormReturn } from "react-hook-form";
import { SymphonyOfMindsFormValues, semesterOptions, branchOptions } from "./SymphonyOfMindsSchema";

interface AcademicFieldsProps {
  form: UseFormReturn<SymphonyOfMindsFormValues>;
}

export function AcademicFields({ form }: AcademicFieldsProps) {
  return (
    <>
      <FormField
        control={form.control}
        name="semester"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Current Semester</FormLabel>
            <Select onValueChange={field.onChange} value={field.value || ""}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select your semester" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {semesterOptions.map((semester) => (
                  <SelectItem key={semester} value={semester}>
                    {semester}
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
            <Select onValueChange={field.onChange} value={field.value || ""}>
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
    </>
  );
}

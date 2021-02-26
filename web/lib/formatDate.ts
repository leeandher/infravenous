import { format } from "date-fns";

export const baseLong = (time: Date): string => {
  return format(time, "p - PPP");
};

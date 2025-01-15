import { EventProps } from "./event";

export interface DayProps<EventType> {
  day: Date;
  events: Array<EventProps<EventType>>;
  isSelected: boolean;
  maximumEventsDisplayed?: number;
}
import { DayProps } from "../types/day";
import { EventProps } from "../types/event";

 
export class Day<EventType> implements DayProps<EventType> {

  constructor(
    public day: Date,
    public events: EventProps<EventType>[],
    public isSelected: boolean,
    public maximumEventsDisplayed?: number | undefined,
  ) { }

  
}
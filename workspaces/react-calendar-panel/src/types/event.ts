export interface EventProps<T> {
  startDate: Date;
  endDate?: Date;
  data: T;
}
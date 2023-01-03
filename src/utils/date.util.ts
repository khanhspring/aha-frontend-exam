import dayjs from "dayjs";
import { MonthYear } from "../models/date-picker";

export const nextMonth = (monthYear: MonthYear): MonthYear => {
  const nextMonth = dayjs(new Date(monthYear.year, monthYear.month, 1)).add(1, 'month');
  return {year: nextMonth.year(), month: nextMonth.month()};
};

export const prevMonth = (monthYear: MonthYear): MonthYear => {
  const prevMonth = dayjs(new Date(monthYear.year, monthYear.month, 1)).subtract(1, 'month');
  return {year: prevMonth.year(), month: prevMonth.month()};
};

export const monthOf = (date?: Date): MonthYear => {
  const nextMonth = dayjs(date || new Date());
  return {year: nextMonth.year(), month: nextMonth.month()};
};

export const currentMonth = (): MonthYear => {
  const currentMonth = dayjs(new Date());
  return {year: currentMonth.year(), month: currentMonth.month()};
};

export const currentYear = (): number => {
  return dayjs(new Date()).year();
};

export const startYearOf = (year: number = currentYear(), steps: number = 20): number => {
  if (year % steps === 0) {
    return year - steps + 1;
  }
  const startYear = year - year % steps;
  return startYear + 1;
};
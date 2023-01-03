import dayjs from "dayjs";
import { FC, useEffect, useState } from "react";
import { WeekDays } from "../../../constants/week-day";
import { MonthYear } from "../../../models/date-picker";
import { range } from "../../../utils/array.util";
import { nextMonth, prevMonth } from "../../../utils/date.util";
import DateTableHeader from "./date-table-header";

export const TOTAL_DAYS = 7 * 6; // 7 days x 6 weeks

type Props = {
  monthView: MonthYear; // the month will be rendered
  selected?: Date;
  onSelect?: (value: Date) => void;
}

const DateTable: FC<Props> = ({ selected, monthView, onSelect = () => { } }) => {

  const [selectedDate, setSelectedDate] = useState(dayjs(selected || new Date()));

  const [daysInMonth, setDaysInMonth] = useState<number[]>([]);
  const [daysInPrevMonth, setDaysInPrevMonth] = useState<number[]>([]);
  const [daysInNextMonth, setDaysInNextMonth] = useState<number[]>([]);

  const [prevMonthYear, setPrevMonthYear] = useState<MonthYear>();
  const [currentMonthYear, setCurrentMonthYear] = useState<MonthYear>();
  const [nextMonthYear, setNextMonthYear] = useState<MonthYear>();

  useEffect(() => {
    const prevMonthYear = prevMonth(monthView);
    const nextMonthYear = nextMonth(monthView);

    setPrevMonthYear(prevMonthYear);
    setCurrentMonthYear(monthView);
    setNextMonthYear(nextMonthYear);

    const dateOfMonthView = dayjs(new Date(monthView.year, monthView.month, 1));
    const totalDaysInMonth = dateOfMonthView.daysInMonth();
    setDaysInMonth(range(1, totalDaysInMonth));

    // add the missing dates for the first week from the previous month
    const firstDayInMonth = dateOfMonthView.startOf("month").day();
    setDaysInPrevMonth([]);
    if (firstDayInMonth !== WeekDays.SUNDAY) {
      const totalDaysInPrevMonth = dayjs(new Date(prevMonthYear.year, prevMonthYear.month, 1)).daysInMonth();
      setDaysInPrevMonth(range(totalDaysInPrevMonth - firstDayInMonth + 1, totalDaysInPrevMonth));
    }

    // Add the missing dates for the last weeks of the table from the next month
    setDaysInNextMonth([]);
    if (totalDaysInMonth + firstDayInMonth !== TOTAL_DAYS) {
      setDaysInNextMonth(range(1, TOTAL_DAYS - (totalDaysInMonth + firstDayInMonth)));
    }
  }, [monthView])

  const isToday = (year: number, month: number, day: number): boolean => {
    const date = new Date(year, month, day);
    return dayjs().isSame(date, 'date');
  }

  const isSelected = (year: number, month: number, day: number): boolean => {
    const date = new Date(year, month, day);
    return dayjs(date).isSame(selectedDate, 'date');
  }

  const selectDate = (year: number, month: number, day: number) => {
    const date = new Date(year, month, day);
    setSelectedDate(dayjs(date));
    onSelect(date);
  }

  return (
    <div className="flex flex-col gap-3 mt-[23px] px-1">
      <DateTableHeader />
      <div className="grid grid-cols-7 gap-x-1.5">
        {
          daysInPrevMonth.map((day, index) =>
            <div key={index} className={`h-9 flex items-center justify-center`}>
              <div
                className="h-full w-9 flex items-center justify-center rounded-full hover:bg-white hover:text-cod-gray-900 cursor-pointer group"
                onClick={() => prevMonthYear && selectDate(prevMonthYear.year, prevMonthYear.month, day)}
              >
                <span className="text-sm opacity-50 group-hover:opacity-100">
                  {day}
                </span>
              </div>
            </div>
          )
        }

        {
          daysInMonth.map((day, index) =>
            <div key={index} className={`h-9 flex items-center justify-center`}>
              <div
                className={`
                  h-full w-9 flex items-center justify-center rounded-full hover:bg-white hover:text-cod-gray-900 cursor-pointer
                  ${currentMonthYear && isToday(currentMonthYear.year, currentMonthYear.month, day) ? 'border border-azure-radiance-900' : ''}
                  ${currentMonthYear && isSelected(currentMonthYear.year, currentMonthYear.month, day) ? 'bg-azure-radiance-900' : ''}
                `}
                onClick={() => currentMonthYear && selectDate(currentMonthYear.year, currentMonthYear.month, day)}
              >
                <span className="text-sm">{day}</span>
              </div>
            </div>
          )
        }

        {
          daysInNextMonth.map((day, index) =>
            <div key={index} className={`h-9 flex items-center justify-center`}>
              <div
                className="h-full w-9 flex items-center justify-center rounded-full hover:bg-white hover:text-cod-gray-900 cursor-pointer group"
                onClick={() => nextMonthYear && selectDate(nextMonthYear.year, nextMonthYear.month, day)}
              >
                <span className="text-sm opacity-50 group-hover:opacity-100">
                  {day}
                </span>
              </div>
            </div>
          )
        }
      </div>
    </div>
  );
}

export default DateTable;

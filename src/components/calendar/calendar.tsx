import dayjs from 'dayjs';
import { FC, useState } from 'react';
import { monthOf, startYearOf } from '../../utils/date.util';
import CalendarActions from './calendar-actions';
import DatePanel from './date-panel/date-panel';
import YearPanel from './year-panel/year-panel';

type ViewMode = 'Date' | 'Year';

type Props = {
  title?: string;
  value?: Date;
  onChange?: (value: Date) => void;
  onCancel?: () => void;
}

const Calendar: FC<Props> = ({ title, value, onChange = () => { }, onCancel = () => { } }) => {

  const [currentDate, setCurrentDate] = useState(value || new Date());
  const [currentMonthView, setCurrentMonthView] = useState(monthOf(value || new Date()));
  const [viewMode, setViewMode] = useState<ViewMode>('Date');

  const selectDate = (date: Date) => {
    setCurrentDate(date);
  }

  const selectYear = (year: number) => {
    setCurrentMonthView({ year, month: currentMonthView.month });
    setViewMode('Date');
  }

  const showYearPanel = () => {
    setViewMode('Year');
  }

  const onOk = () => {
    onChange(currentDate);
  }

  return (
    <div className="w-[320px] py-4 rounded-[10px] bg-cod-gray-700 shadow-overlay">
      {
        title &&
        <div className="h-[24px] flex items-center px-6 pt-[1px]">
          {title}
        </div>
      }
      <div className="h-11 flex items-center font-bold text-[32px] mt-1 px-6">
        {dayjs(currentDate).format("MMM, YYYY")}
      </div>
      {
        viewMode === 'Date' &&
        <DatePanel selected={value} onSelect={selectDate} monthView={currentMonthView} onMonthViewChange={setCurrentMonthView} onSwitchMode={showYearPanel} />
      }
      {
        viewMode === 'Year' &&
        <YearPanel selected={currentMonthView.year} onSelect={selectYear} yearView={startYearOf(currentMonthView.year)} />
      }
      <CalendarActions onOk={onOk} onCancel={onCancel} />
    </div>
  );
}

export default Calendar;

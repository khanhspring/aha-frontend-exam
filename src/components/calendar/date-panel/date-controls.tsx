import { FC } from "react";
import dayjs from "dayjs";
import PrevIcon from "../../../icons/prev-icon";
import NextIcon from "../../../icons/next-icon";
import { MonthYear } from "../../../models/date-picker";

type Props = {
  monthView: MonthYear;
  onPrev: () => void;
  onNext: () => void;
  onTitleClick: () => void;
}

const DateControls: FC<Props> = ({ monthView, onPrev, onNext, onTitleClick }) => {
  const currentMonthYear = dayjs(new Date(monthView.year, monthView.month, 1)).format('MMMM YYYY');

  return (
    <div className="flex items-center justify-between h-6 select-none">
      <span
        onClick={onPrev}
        className="flex items-center justify-center h-full cursor-pointer px-2 pt-[1px] rounded-sm hover:bg-white group/control-item"
      >
        <PrevIcon className="group-hover/control-item:fill-cod-gray-900"/>
      </span>
      <span className="cursor-pointer" onClick={onTitleClick}>
        {currentMonthYear}
      </span>
      <span
        onClick={onNext}
        className="flex items-center justify-center h-full cursor-pointer px-2 pt-[1px] rounded-sm hover:bg-white group/control-item"
      >
        <NextIcon className="group-hover/control-item:fill-cod-gray-900"/>
      </span>
    </div>
  );
}

export default DateControls;

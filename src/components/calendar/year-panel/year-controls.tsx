import { FC } from "react";
import NextIcon from "../../../icons/next-icon";
import PrevIcon from "../../../icons/prev-icon";

export const MIN_DECADE = 1970;
export const MAX_DECADE = 9980;

type Props = {
  currentYear: number;
  onPrev: () => void;
  onNext: () => void;
}

const YearControls: FC<Props> = ({ currentYear, onPrev, onNext }) => {

  return (
    <div className="flex items-center justify-between h-6 select-none">
      <span
        onClick={onPrev}
        className="flex items-center justify-center h-full cursor-pointer px-2 pt-[2px] rounded-sm hover:bg-white group/control-item"
      >
        <PrevIcon className="group-hover/control-item:fill-cod-gray-900"/>
      </span>
      <span>
        {currentYear}
      </span>
      <span
        onClick={onNext}
        className="flex items-center justify-center h-full cursor-pointer px-2 pt-[2px] rounded-sm hover:bg-white group/control-item"
      >
        <NextIcon className="group-hover/control-item:fill-cod-gray-900"/>
      </span>
    </div>
  );
}

export default YearControls;

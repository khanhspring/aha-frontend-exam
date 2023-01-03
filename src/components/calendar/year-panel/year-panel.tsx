import { FC, useEffect, useState } from "react";
import { currentYear, startYearOf } from "../../../utils/date.util";
import YearControls from "./year-controls";
import YearTable from "./year-table";

export const YEAR_STEPS = 20; // 20 years per page view

type Props = {
  selected?: number;
  yearView?: number;
  onSelect?: (value: number) => void;
}

const YearPanel: FC<Props> = ({ selected = currentYear(), yearView = startYearOf(), onSelect = () => { } }) => {

  const [currentYearView, setCurrentYearView] = useState(yearView);

  useEffect(() => {

  }, []);


  const onNext = () => {
    setCurrentYearView(currentYearView + YEAR_STEPS);
  }

  const onPrev = () => {
    setCurrentYearView(currentYearView - YEAR_STEPS);
  }

  return (
    <div className="px-3 mt-[24px]">
      <YearControls currentYear={selected} onNext={onNext} onPrev={onPrev} />
      <YearTable selected={selected} onSelect={onSelect} yearView={currentYearView} />
    </div>
  );
}

export default YearPanel;

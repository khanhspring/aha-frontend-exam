import { FC, useEffect, useState } from "react";
import { range } from "../../../utils/array.util";
import { startYearOf } from "../../../utils/date.util";

type Props = {
  selected: number;
  yearView: number;
  onSelect: (value: number) => void;
}

const YearTable: FC<Props> = ({ selected, yearView, onSelect = () => { } }) => {

  const [years, setYears] = useState<number[]>([]);

  useEffect(() => {
    const year = startYearOf(yearView);
    const years = range(year, year + 19);
    setYears(years);
  }, [yearView])


  const isSelected = (year: number) => {
    return year === selected;
  }

  return (
    <div className="grid grid-cols-4 gap-x-[9px] gap-y-6 mt-5 pt-3 pb-4 px-3">
      {
        years.map((year, index) =>
          <div key={index} className={`flex items-center justify-center`}>
            <span
              onClick={() => onSelect(year)}
              className={`
                inline-block w-[61px] rounded-sm text-center leading-6 cursor-pointer hover:bg-white hover:text-cod-gray-900
                ${isSelected(year) ? 'bg-azure-radiance-900' : ''}`
              }
            >
              {year}
            </span>
          </div>
        )
      }
    </div>
  );
}

export default YearTable;

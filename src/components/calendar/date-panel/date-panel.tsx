import { FC, useState } from "react";
import { MonthYear } from "../../../models/date-picker";
import { currentMonth, monthOf, nextMonth, prevMonth } from "../../../utils/date.util";
import DateControls from "./date-controls";
import DateTable from "./date-table";

type Props = {
    selected?: Date;
    monthView?: MonthYear;
    onSelect?: (value: Date) => void;
    onMonthViewChange?: (monthView: MonthYear) => void;
    onSwitchMode?: () => void;
}

const DatePanel: FC<Props> = ({ selected, monthView = currentMonth(), onSelect = () => { }, onMonthViewChange = () => { }, onSwitchMode = () => { } }) => {

    const [currentMonthView, setCurrentMonthView] = useState(monthView);

    const onNext = () => {
        const nextMonthYear = nextMonth(currentMonthView);
        setCurrentMonthView(nextMonthYear);
        onMonthViewChange(nextMonthYear);
    }

    const onPrev = () => {
        const prevMonthYear = prevMonth(currentMonthView);
        setCurrentMonthView(prevMonthYear);
        onMonthViewChange(prevMonthYear);
    }

    const selectDate = (value: Date) => {
        const monthYear = monthOf(value);
        setCurrentMonthView(monthYear);
        onMonthViewChange(monthYear);
        onSelect(value);
    }

    return (
        <div className="px-3 mt-[24px]">
            <DateControls monthView={currentMonthView} onNext={onNext} onPrev={onPrev} onTitleClick={onSwitchMode} />
            <DateTable selected={selected} onSelect={selectDate} monthView={currentMonthView} />
        </div>
    );
}

export default DatePanel;

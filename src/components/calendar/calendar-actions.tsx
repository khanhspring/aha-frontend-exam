import { FC } from "react";

type Props = {
  onOk?: () => void;
  onCancel?: () => void;
}

const CalendarActions: FC<Props> = ({onOk, onCancel}) => {
  return (
    <div className="flex items-center justify-end gap-[38px] px-7 py-0.5 mt-3">
      <button onClick={onCancel} className="h-9 px-4 transition rounded hover:bg-white group/action-btn">
        <span className="font-semibold text-sm leading-6 inline-block group-hover/action-btn:text-cod-gray-900">Cancel</span>
      </button>
      <button onClick={onOk} className="h-9 px-4 transition rounded hover:bg-azure-radiance-900">
        <span className="font-semibold text-sm leading-6 inline-block">OK</span>
      </button>
    </div>
  );
}

export default CalendarActions;

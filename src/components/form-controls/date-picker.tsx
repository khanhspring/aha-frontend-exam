import dayjs from "dayjs";
import { createRef, FC, KeyboardEvent, useState } from "react";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import Calendar from "../calendar/calendar";
import InputWrapper from "./input-wrapper";

type Props = {
  label?: string;
  placeholder?: string;
  value?: Date;
  onChange?: (value?: Date) => void;
}

const DatePicker: FC<Props> = ({ label, placeholder = 'mm/dd/yyyy', value, onChange = () => { } }) => {

  const wrapperRef = createRef<any>();
  const [currentValue, setCurrentValue] = useState(value);
  const [pickerVisible, setPickerVisible] = useState(false);
  const [pickerHiding, setPickerHiding] = useState(false);

  const onOutsideClick = () => {
    hidePickerDelay();
  }
  useOutsideClick(wrapperRef, onOutsideClick);

  const selectDate = (value: Date) => {
    setCurrentValue(value);
    hidePickerDelay();
    onChange(value);
  }

  const onCancel = () => {
    hidePickerDelay();
  }

  const hidePickerDelay = () => {
    setPickerHiding(true);
    setTimeout(() => {
      setPickerVisible(false);
      setPickerHiding(false);
    }, 200)
  }

  const onFocus = () => {
    setPickerVisible(true);
  }

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key !== "Backspace" && e.key !== "Delete") {
      return;
    }
    setCurrentValue(undefined);
    onChange(undefined);
  }

  return (
    <InputWrapper
      label={label}
      ref={wrapperRef}
    >
      <input
        onFocus={onFocus}
        onKeyDown={onKeyDown}
        placeholder={placeholder}
        value={(currentValue && dayjs(currentValue).format("MM/DD/YYYY")) || ''}
        className={`
          h-[58px] p-3 outline-none w-full bg-transparent rounded-lg border-[3px] border-white/50 hover:border-white focus:border-azure-radiance-900 placeholder:text-white/30 font-ubuntu placeholder:font-ubuntu transition
          ${pickerVisible ? '!border-azure-radiance-900' : ''}
        `}
        onChange={() => {/* do nothing */ }}
      />
      {
        pickerVisible &&
        <div className={`
            absolute top-full mt-[14px] z-50 transition animate-slide-down
            ${pickerHiding ? 'animate-slide-up' : ''}
          `}
        >
          <Calendar value={currentValue} onChange={selectDate} onCancel={onCancel} title={label} />
        </div>
      }
    </InputWrapper>
  );
}

export default DatePicker;

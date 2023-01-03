import { ChangeEvent, createRef, FC, useState } from "react";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import CheckedIcon from "../../icons/checked-icon";
import UncheckedIcon from "../../icons/unchecked-icon";
import { PasswordPolicy } from "../../models/password-policy";
import { validatePassword } from "../../utils/password-policy.util";
import InputWrapper from "./input-wrapper";

const DEFAULT_POLICIES: PasswordPolicy[] = ["Uppercase", "Lowercase", "Number", "Special", "MinLength"];

type Props = {
  label?: string;
  value?: string;
  placeholder?: string;
  policies?: PasswordPolicy[];
  onChange?: (value?: string) => void;
}

const InputPassword: FC<Props> = ({ label, placeholder, value = "", policies = DEFAULT_POLICIES, onChange = () => { } }) => {

  const wrapperRef = createRef<any>();
  const [currentValue, setCurrentValue] = useState<string>(value);
  const [policyVisible, setPolicyVisible] = useState(false);
  const [policyHiding, setPolicyHiding] = useState(false);

  const [validationResults, setValidationResults] = useState(validatePassword(value, policies));

  const onOutsideClick = () => {
    hidePolicyDelay();
  }
  useOutsideClick(wrapperRef, onOutsideClick);

  const valueChange = (e: ChangeEvent<HTMLInputElement>) => {
    const passwordRaw = e.target.value;
    setCurrentValue(passwordRaw);
    onChange(passwordRaw);

    const validationResults = validatePassword(passwordRaw, policies);
    setValidationResults(validationResults);
  }

  const onFocus = () => {
    setPolicyVisible(true);
  }

  const hidePolicyDelay = () => {
    setPolicyHiding(true);
    setTimeout(() => {
      setPolicyVisible(false);
      setPolicyHiding(false);
    }, 200)
  }

  return (
    <InputWrapper
      label={label}
      ref={wrapperRef}
    >
      <input
        placeholder={placeholder}
        type="password"
        value={currentValue}
        onChange={valueChange}
        autoComplete="new-password"
        onFocus={onFocus}
        className="h-[58px] p-3 outline-none w-full bg-transparent rounded-lg border-[3px] border-white/50 hover:border-white focus:border-azure-radiance-900 placeholder:text-white/30 transition"
      />
      {
        policyVisible &&
        <div className={`
            absolute top-full mt-[20px] z-50 w-[335px] bg-cod-gray-650 px-3 py-2 rounded-lg shadow-overlay flex flex-col animate-slide-down
            ${policyHiding ? 'animate-slide-up' : ''}
          `}
        >
          {
            validationResults.map((item, index) =>
              <div key={index} className="min-h-[40px] w-full flex items-center gap-3 py-1">
                <span className="w-5 h-5">
                  {
                    item.passed &&
                    <CheckedIcon />
                  }
                  {
                    !item.passed &&
                    <UncheckedIcon />
                  }
                </span>
                <span className="flex-1 leading-[150%] text-sm tracking-[0.25px] font-ubuntu">
                  {item.message}
                </span>
              </div>
            )
          }
        </div>
      }
    </InputWrapper>
  );
}

export default InputPassword;

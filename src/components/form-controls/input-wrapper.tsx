import React, { PropsWithChildren } from "react";

type Props = PropsWithChildren & {
  label?: string;
};

const InputWrapper = React.forwardRef<HTMLDivElement, Props>(({ children, label }, ref) => {

  return (
    <div
      className="pt-1.5"
      ref={ref}
    >
      <div className="relative">
        {
          label &&
          <label className="absolute top-[-9px] left-3 inline-block leading-5 text-xs bg-cod-gray-800 px-1 tracking-[0.4px] font-ubuntu">{label}</label>
        }
        {children}
      </div>
    </div>
  );
});

export default InputWrapper;

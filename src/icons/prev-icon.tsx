import { FC } from "react";

type Props = {
  className?: string;
}

const PrevIcon: FC<Props> = ({ className = '' }) => {
  return (
    <svg
      width="8"
      height="12"
      viewBox="0 0 8 12"
      fill="white"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className}`}
    >
      <path d="M7.41 10.59L2.83 6L7.41 1.41L6 0L0 6L6 12L7.41 10.59Z" />
    </svg>
  );
}

export default PrevIcon;

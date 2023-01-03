import { FC } from "react";

type Props = {
  className?: string;
}

const NextIcon: FC<Props> = ({ className = '' }) => {
  return (
    <svg
      width="8"
      height="12"
      viewBox="0 0 8 12"
      fill="white"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className}`}
    >
      <path d="M0.59 10.59L5.17 6L0.59 1.41L2 0L8 6L2 12L0.59 10.59Z" />
    </svg>
  );
}

export default NextIcon;

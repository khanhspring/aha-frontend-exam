function DateTableHeader() {
  const daysOfWeek = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  return (
    <div className="flex gap-1.5">
      {daysOfWeek.map((day, index) =>
        <div className="flex-1 h-[13px] flex items-center justify-center text-[11px] font-normal text-cod-gray-500" key={index}>
          {day}
        </div>
      )}
    </div>
  );
}

export default DateTableHeader;

import DatePicker from "../../components/form-controls/date-picker";

const DatePickerPage = () => {
    return (
        <div className="m-auto w-[335px] flex flex-col gap-7">
            <h2 className="text-4xl font-bold">Date picker</h2>
            <DatePicker />
        </div>
    );
}

export default DatePickerPage;

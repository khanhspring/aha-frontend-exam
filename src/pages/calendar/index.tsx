import Calendar from "../../components/calendar/calendar";

const CalendarPage = () => {
    return (
        <div className="m-auto w-[335px] flex flex-col gap-10">
            <h2 className="text-4xl font-bold">Calendar</h2>
            <Calendar />
        </div>
    );
}

export default CalendarPage;

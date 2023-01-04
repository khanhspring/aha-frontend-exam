import Calendar from "../../components/calendar/calendar";

const CalendarPage = () => {
    return (
        <div className="m-auto w-[335px] flex flex-col gap-7">
            <h2 className="text-4xl font-bold">Calendar</h2>
            <Calendar title="Text"/>
        </div>
    );
}

export default CalendarPage;

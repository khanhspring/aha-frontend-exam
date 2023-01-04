import Calendar from "../../components/calendar/calendar";
import DatePicker from "../../components/form-controls/date-picker";
import InputPassword from "../../components/form-controls/input-password";

const HomePage = () => {
    return (
        <div className="m-auto w-[335px] flex flex-col gap-7">
        <h2 className="text-4xl font-bold">Hello!</h2>
            <DatePicker label="Birthday"/>
            <InputPassword placeholder="Password..." label="Password"/>
            <Calendar />
        </div>
    );
}

export default HomePage;

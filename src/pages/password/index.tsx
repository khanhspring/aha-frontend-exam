import InputPassword from "../../components/form-controls/input-password";

const PasswordPage = () => {
    return (
        <div className="m-auto w-[335px] flex flex-col gap-7">
            <h2 className="text-4xl font-bold">Password input</h2>
            <InputPassword placeholder="Password..." />
        </div>
    );
}

export default PasswordPage;

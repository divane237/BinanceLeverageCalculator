function InputSections({ title, setInputSection }) {
    return (
        <div className="my-1 flex flex-col items-center justify-center gap-y-3  py-2 md:flex-row md:gap-x-4">
            <p className="w-32  px-2 py-2 text-center text-sm font-medium lg:text-right">
                {title}
            </p>
            <input
                type="text"
                className="rounded-full bg-stone-100 px-8 py-2 font-poppins text-black"
                required
                onChange={(e) => setInputSection(Number(e.target.value))}
            />
        </div>
    );
}

export default InputSections;

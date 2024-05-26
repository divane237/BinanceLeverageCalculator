function InputSections({ title, setInputSection }) {
    return (
        <div className="flex flex-col items-center justify-center gap-y-3 py-2 md:flex-row md:gap-x-4">
            <p className="text-sm font-medium">{title}</p>
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

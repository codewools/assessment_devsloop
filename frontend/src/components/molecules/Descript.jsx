export default function Descript() {   
    return (
        <section className="flex mx-auto border rounded-2xl mb-10 bg-neutral-50 border-gray-300 p-6 md:p-10 w-full max-w-[1200px] flex-col md:flex-row gap-10">
            
            {/* Left Side Numbered List */}
            <div className="w-full md:w-[35%]">
                <h1 className="font-bold text-lg md:text-[18px]">Why This Matters To You</h1>
                <ol className="list-decimal list-inside text-left space-y-4 md:space-y-6 mt-4 pl-4">
                    <li className="font-thin text-sm md:text-base">
                        It protects personal and financial information: Phishing scams are designed to steal sensitive data like passwords, credit card numbers, and bank account details. Falling for one can lead to identity theft or financial loss.
                    </li>
                    <li className="font-thin text-sm md:text-base">
                        It reduces the risk of business compromise: Employees who recognize phishing attempts help prevent breaches that can expose company data, disrupt operations, or cause millions in damages.
                    </li>
                    <li className="font-thin text-sm md:text-base">
                        Phishing attacks are evolving: Modern phishing uses AI, deepfakes, and multiple channels (email, SMS, chat apps), making them harder to detect. Awareness helps you stay ahead of these tactics.
                    </li>
                </ol>
            </div>

            {/* Right Side Content */}
            <div className="flex-1 w-full">
                <div className="flex flex-col md:flex-row gap-10">
                    <div className="flex-1 bg-neutral-100 p-4 md:p-10 rounded-lg">
                        <h2 className="font-bold text-lg md:text-[18px] py-2 md:py-3">45% Are Victims</h2>
                        <p className="text-slate-600 text-sm md:text-base">
                            of employed individuals have fallen victim to cyberattacks or scams, with many incidents linked to phishing
                        </p>
                    </div>
                    <div className="flex-1 bg-neutral-100 p-4 md:p-10 rounded-lg">
                        <h2 className="font-bold text-lg md:text-[18px] py-2 md:py-3">45% Are Victims</h2>
                        <p className="text-slate-600 text-sm md:text-base">
                          Approximately 3.4 billion phishing emails are sent daily worldwide, constituting about 1.2% of all email traffic.
                        </p>
                    </div>
                </div>
                <div className="py-4 md:py-10 ">
                    <div className="bg-neutral-100 p-4 md:p-5 rounded-lg">
                        <h2 className="font-bold text-lg md:text-[18px] py-2 md:py-3">33.4% Likely</h2>
                        <p className="text-slate-600 text-sm md:text-base">
                           of untrained employees are likely to click on phishing emails.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

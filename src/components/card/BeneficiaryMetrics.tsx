const BeneficiaryMetrics = () => {
    const metrics = [
        { label: 'Total Number of Communities Onboarded', value: '20,000' },
        { label: 'Total Number of Families Onboarded', value: '130,000' },
        { label: 'Total Number of Women and Children', value: '130,000' },
        { label: 'Total Number of Disabled People Impacted', value: '10,000' },
        { label: 'Total Number of Pregnant Women', value: '5,000' },
    ];

    return (
        <div className="w-full p-5 rounded-lg shadow-md bg-white">
            <h3 className="font-semibold text-gray-700 mb-3">Beneficiary Metrics</h3>
            <ul className="flex flex-col gap-6">
                {metrics.map((item) => (
                    <li key={item.label} className="flex justify-between text-gray-600">
                        <span>{item.label}</span>
                        <span className="font-semibold">{item.value}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BeneficiaryMetrics;

type MetricsCardProps = {
    title: string;
    value: string;
    bgColor: string;
    icon: React.ReactNode;
};

const MetricsCard = ({ title, value, bgColor, icon }: MetricsCardProps) => {
    return (
        <div className={`p-5 rounded-lg shadow-sm bg-white border-2 border-solid border-[#F0F0F0] flex gap-4`}>
            <div className={`flex items-center justify-center p-2  self-start w-[30px] h-[30px] rounded `}  style={{ backgroundColor: bgColor }}>
                {icon}
            </div>
            <div>
                <h3 className="text-[#707FA3] text-xs font-normal">{title}</h3>
                <p className="text-lg font-bold">N{value}</p>
            </div>
        </div>
    );
};

export default MetricsCard;

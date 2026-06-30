import { ReactNode } from "react";

interface TechCardProps {
    title: string;
    children: ReactNode;
    categoryIndex?: number;
}

export default function TechCard({ title, children, categoryIndex = 0 }: TechCardProps) {
    const gradients = [
        "from-blue-500 to-purple-600",
        "from-emerald-500 to-teal-600",
        "from-rose-500 to-pink-600"
    ];
    
    const gradient = gradients[categoryIndex % gradients.length];

    return (
        <div className="w-full h-full bg-white/3 backdrop-blur-2xl p-6 rounded-2xl shadow-lg border border-white/5 relative overflow-hidden group flex flex-col">
            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${gradient} rounded-full filter blur-3xl opacity-10 -translate-y-16 translate-x-16`}></div>
            
            <h2 className="text-xl sm:text-2xl font-bold mb-6 relative inline-block flex-shrink-0">
                <span className="relative z-10">{title}</span>
                <span className={`absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r ${gradient} rounded-full`}></span>
            </h2>
            
            <div className="relative z-10 flex-1">
                {children}
            </div>
        </div>
    );
}


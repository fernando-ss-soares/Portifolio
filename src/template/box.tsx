interface boxProps {
    children: any;
}

export default function box({ children }: boxProps) {
    return (
        <>
        <div className="w-full box-border min-h-screen bg-[#1A1A1A]">
            {children}
        </div>
        </>
    )
}
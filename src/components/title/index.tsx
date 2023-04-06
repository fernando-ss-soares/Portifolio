interface titleProps {
    titulo: string
}

export default function title({ titulo } : titleProps) : React.ReactElement {
    return (
        <>
        <p className="py-8 text-lg uppercase">{titulo}</p> 
        </>
    )
}
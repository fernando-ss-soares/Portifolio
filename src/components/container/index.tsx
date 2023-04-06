interface PropsContainer {
    children?: any,
    style?: string,
    id?: string | null | undefined
}

export default function Container({ children, style, id }: PropsContainer) {
    return (
        <div id={`${id}`} className={`container mx-auto ${ style ? style : "" }`}>
            {children}
        </div>
    )
}
export const EmptyMesage = ({ message }: { message?: string }) => {
    return (
        <h6
            className={`
                m-0
                p-2
                rounded-full
                bg-purple-900
                text-white
                font-semibold
                max-w-fit
            `}
        >
            {message ? message : "No content"}
        </h6>
    )
}
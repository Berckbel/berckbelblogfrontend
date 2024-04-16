export const ErrorMessage = ({ message }: { message?: string }) => {
    return (
        <h6
            className={`
                m-0
                p-2
                rounded-full
                bg-red-600
                text-white
                font-semibold
                max-w-fit
            `}
        >
            {message ? message : "Something went wrong :("}
        </h6>
    )
}
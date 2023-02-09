export default function Video({
    id,
    ...rest
}: {
    id: string;
    [key: string]: any;
}) {
    return (
        <div {...rest}>
            <iframe
                width='400'
                height='280'
                id={id}
                src={`http://www.youtube.com/embed/${id}`}
                allow='autoplay; fullscreen'
            />
        </div>
    );
}

export default function Video({ id }: { id: string }) {
    return (
        <div>
            <iframe
                width='400'
                height='280'
                id={id}
                src={`http://www.youtube.com/embed/${id}?playlist=${id}`}
                allow='autoplay; fullscreen'
            />
        </div>
    );
}

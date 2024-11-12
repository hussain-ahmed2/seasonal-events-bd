import fs from 'fs';
import path from 'path';

export default async function EventPage({ params }) {
    const {eventId} = await params;
    const filePath = path.join(process.cwd(), 'data', 'data.json');
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

    const event = data.find(e => e.season.toString().split(' ').join('-') === eventId);

    if (!event) {
        return <div>Event not found</div>;
    }

    return (
        <div className='min-h-[calc(100vh-6rem)]'>
            <h1 className='text-center text-3xl font-semibold'>{event.season}</h1>
            <div className='grid grid-cols-3 gap-5 p-4'>
                {
                    event.events.map(e => {
                        const {id, name, description} = e;

                        return (
                            <article key={id} className='p-4 rounded shadow'>
                                <h3 className='text-xl'>{name}</h3>
                                <p className='py-2'>{description}</p>
                            </article>
                        )
                    })
                }
            </div>
        </div>
    );
}

export async function generateStaticParams() {
    const filePath = path.join(process.cwd(), 'data', 'data.json');
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

    return data.map(event => ({
        eventId: event.season.toString().split(' ').join('-'), 
    }));
}

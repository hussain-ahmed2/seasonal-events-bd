import fs from 'fs';
import path from 'path';
import Image from 'next/image';

export default async function EventPage({params}) {
    const { eventId } = await params;
    const filePath = path.join(process.cwd(), 'data', 'data.json');
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

    const events = data.map(({ events }) => {
        return [...events]
    }).flat(Infinity);

    const event = events.find(e => e.id === eventId.toString().toLowerCase());

    if (!event) {
        return <div>Event not found</div>;
    }

    return (
        <div>
            <h1>{event.name}</h1>
            <div>
                <Image className='mx-auto max-w-3xl' src={event.image} alt={event.id} height={3000} width={4000} />
                <p>{event.description.long}</p>
            </div>
        </div>
    )
}

export async function generateStaticParams() {
    const filePath = path.join(process.cwd(), 'data', 'data.json');
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    
    return (data.map(({ events }) => {
        return [...events.map(e => ({ eventId: e.id.toString() }))]
    }).flat(Infinity));
}
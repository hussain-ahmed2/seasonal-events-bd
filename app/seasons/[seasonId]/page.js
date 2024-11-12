import fs from 'fs';
import path from 'path';

export default async function SeasonPage({ params }) {
    const {seasonId} = await params;
    const filePath = path.join(process.cwd(), 'data', 'data.json');
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

    const season = data.find(e => e.season.toString().split(' ').join('-') === seasonId);

    if (!season) {
        return <div>Event not found</div>;
    }

    return (
        <div className='min-h-[calc(100vh-6rem)]'>
            <h1 className='text-center text-3xl font-semibold'>{season.season}</h1>
            <div className='grid grid-cols-3 gap-5 p-4'>
                {
                    season.events.map(e => {
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

    return data.map(season => ({
        seasonId: season.season.toString().split(' ').join('-'), 
    }));
}

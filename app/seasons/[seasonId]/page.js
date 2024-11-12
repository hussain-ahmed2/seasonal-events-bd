import fs from 'fs';
import Link from 'next/link';
import path from 'path';
import Image from 'next/image';

export default async function SeasonPage({ params }) {
    const {seasonId} = await params;
    const filePath = path.join(process.cwd(), 'data', 'data.json');
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

    const season = data.find(e => e.season.toString().split(' ').join('-') === seasonId);

    if (!season) {
        return <div>Season not found</div>;
    }

    return (
        <div className=''>
            <h1 className='text-center text-3xl font-semibold'>{season.season}</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 p-4'>
                {
                    season.events.map(e => {
                        const {id, name, description, image} = e;

                        return (
                            <Link href={`/seasons/${season.season}/${id}`} key={id} className='p-4 rounded shadow bg-white hover:bg-green-50'>
                                <Image className='w-full' src={image} alt={id} height={300} width={400} />
                                <h3 className='text-xl'>{name}</h3>
                                <p className='py-2'>{description.short}</p>
                            </Link>
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

import fs from 'fs'
import Link from 'next/link';
import path from 'path';
import Image from 'next/image';

export default function Events() {
    const filePath = path.join(process.cwd(), 'data', 'data.json');
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

    return <div>
        <h1 className='text-center text-3xl font-semibold m-5'>All Seasons</h1>

        <div className='flex flex-col gap-5 p-4'>
            {
                data.map(e => <Link title={`visit to view events on ${e.season}`} className='flex gap-5 flex-col md:flex-row md:even:flex-row-reverse hover:bg-green-100 rounded overflow-hidden group shadow-sm' href={`/seasons/${e.season.toString().split(' ').join('-')}`} key={e.season}>
                    <Image priority className='mx-auto w-full max-h-96 aspect-[4/3] md:w-1/2 scale-95 group-hover:scale-100 transition-all duration-200' src={e.image} alt={`${e.season}-image`} width={500} height={500} />
                    <div className='md:w-1/2 p-3'>
                        <h3 className='text-xl font-medium mb-1'>{e.season}</h3>
                        <p>{e.description}</p>
                    </div>
                </Link>)
            }
        </div>
    </div>
}


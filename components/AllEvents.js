import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import Image from 'next/image';

export default function AllEvents() {
    const filePath = path.join(process.cwd(), 'data', 'data.json');
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

    return <div>
        <div className='grid grid-cols-3 gap-5 p-4'>
            {
                data.map(e => <Link className='shadow group rounded hover:shadow-md  hover:-translate-y-1 hover:bg-green-100 duration-200 transition-all overflow-hidden' href={`/events/${e.season.toString().split(' ').join('-') }`} key={e.season}>
                    <figure>
                        <Image className='scale-95 group-hover:scale-100 transition-all duration-200 ' priority src={e.image} alt={`${e.season}-image`} width={500} height={500} />
                        <figcaption className='text-2xl font-medium text-center py-2'>{e.season}</figcaption>
                    </figure>
                </Link>)
            }
        </div>
    </div>
}
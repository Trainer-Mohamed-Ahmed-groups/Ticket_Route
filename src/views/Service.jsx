import { Tabs } from 'flowbite-react';
import { SiYourtraveldottv } from "react-icons/si";
import { MdCardTravel } from "react-icons/md";
import { useParams } from 'react-router-dom'
import { ListGroup } from 'flowbite-react';

export default function Service() {

    let params = useParams()

    console.log()
    return (
        <div className="p-6">
            <h1 className="text-center">{params.title}</h1>

            <Tabs aria-label="Default tabs" style="default" className='w-3/4 flex mt-11'>
                <Tabs.Item active title="Local" icon={MdCardTravel}>
                    <ListGroup className="w-48">
                        <ListGroup.Item>Go bus</ListGroup.Item>
                        <ListGroup.Item>Yalla Bus</ListGroup.Item>
                        <ListGroup.Item>Otobesy</ListGroup.Item>
                    </ListGroup>
                </Tabs.Item>
                <Tabs.Item title="Abroad" icon={SiYourtraveldottv}>test 2</Tabs.Item>
            </Tabs>

        </div>
    )
}

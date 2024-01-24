import { Carousel } from 'flowbite-react';

export default function IntroCarousel() {
    return (
        <div className="h-screen">
            <Carousel>
                <img src="https://i.postimg.cc/Dypq9MCV/bus.jpg" alt="..." />
                <img src="https://i.postimg.cc/FF33Kxhq/airplane.jpg" alt="..." />
                <img src="https://i.postimg.cc/bY7gCJvX/train.jpg" alt="..." />
                <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
                <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
            </Carousel>
        </div>
    )
}

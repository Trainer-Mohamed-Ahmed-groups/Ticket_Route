import IntroCarousel from "../components/IntroCarousel";
import TravelCard from "../components/TravelCard";

export default function HomePage() {
    return (
        <>
            <IntroCarousel />
            <div className="flex flex-wrap p-4 container mx-auto">
                <TravelCard title="Bus" description="Hello bus" />
                <TravelCard title="Train" description="Hello train" />
                <TravelCard title="Airplane" description="Hello Airplane" />
                <TravelCard title="Pickup" description="Hello pickup car" />
            </div>
        </>
    )
}

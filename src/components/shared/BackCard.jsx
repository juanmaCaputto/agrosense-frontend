import SubParameterCard from "./SubParameterCard";

export default function BackCard({ info1, info2 }) {
    return (
        <>
            <SubParameterCard
                deviceName="DISPOSITIVO 1"
                info={info1}
            />
            <SubParameterCard
                deviceName="DISPOSITIVO 2"
                info={info2}
            />
        </>
    );
}

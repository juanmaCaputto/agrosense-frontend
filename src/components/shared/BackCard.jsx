import SubParameterCard from "./SubParameterCard";

export default function BackCard() {
    return (
        <>
            <SubParameterCard
                deviceName="DISPOSITIVO 1"
                info={
                    <>
                        H: 70%
                        <br />
                        M: 68%
                        <br />
                        L: 65%
                    </>
                }
            />
            <SubParameterCard
                deviceName="DISPOSITIVO 2"
                info={
                    <>
                        H: 70%
                        <br />
                        M: 68%
                        <br />
                        L: 65%
                    </>
                }
            />
            <SubParameterCard
                deviceName="DISPOSITIVO 3"
                info={
                    <>
                        H: 70%
                        <br />
                        M: 68%
                        <br />
                        L: 65%
                    </>
                }
            />
            <SubParameterCard
                deviceName="DISPOSITIVO 4"
                info={
                    <>
                        H: 70%
                        <br />
                        M: 68%
                        <br />
                        L: 65%
                    </>
                }
            />
        </>
    );
}

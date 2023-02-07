import AlarmParameter from "../../components/alarms/AlarmParameter";
import InfoCard from "../../components/shared/InfoCard";

export default function Alarms() {
    return (
        <InfoCard minWidth="100%" title="Seteo de Alarmas">
            <AlarmParameter title="Humedad de Suelo Alto" />
            <AlarmParameter title="Humedad de Suelo Medio" />
            <AlarmParameter title="Humedad de Suelo Bajo" />
            <AlarmParameter title="Humedad Ambiente" />
            <AlarmParameter title="Temperatura Ambiente" />
        </InfoCard>
    );
}

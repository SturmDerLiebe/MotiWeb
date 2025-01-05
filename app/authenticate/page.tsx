import { FirstLevelMain } from "@/components/containers/main/FirstLevel";
import { AuthenticationButtons } from "./_useClient/Buttons";

export default function Authenticate() {
    return (
        <FirstLevelMain>
            <AuthenticationButtons />
        </FirstLevelMain>
    );
}

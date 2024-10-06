import { Switch } from "antd";
import { BsMoonStars } from "react-icons/bs";
import { MdOutlineWbSunny } from "react-icons/md";
import { useTheme } from "@/components/theme-provider/ThemeProvider";

export default function SwitchModeDark() {
    const { isDarkMode, toggleTheme } = useTheme();
    return (
        <Switch checkedChildren={<MdOutlineWbSunny />} unCheckedChildren={<BsMoonStars />} checked={isDarkMode === 'dark'} onChange={toggleTheme} />
    );
}
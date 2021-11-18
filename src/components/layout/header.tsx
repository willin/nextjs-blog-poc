import SwitchLocale from './switch-locale';
import SwitchTheme from './dark-mode/switch-theme';

export default function Header() {
  return (
    <div>
      Header
      <SwitchLocale />
      <SwitchTheme />
    </div>
  );
}

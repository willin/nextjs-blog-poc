import SwitchLocale from './switch-locale';
import SwitchTheme from './dark-mode/switch-theme';
import Logo from './logo';

export default function Header() {
  return (
    <div>
      <Logo />

      <SwitchLocale />
      <SwitchTheme />
    </div>
  );
}

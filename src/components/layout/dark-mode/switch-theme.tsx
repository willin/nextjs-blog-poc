import { useTheme } from 'next-themes';
import { MoonIcon, SunIcon } from './svg';

export default function SwitchTheme() {
  const { resolvedTheme, setTheme } = useTheme();
  const darkMode = resolvedTheme === 'dark';

  return (
    <button onClick={() => setTheme(darkMode ? 'light' : 'dark')}>
      {darkMode && <SunIcon />}
      {!darkMode && <MoonIcon />}
    </button>
  );
}

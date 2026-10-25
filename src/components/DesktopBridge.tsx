import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { desktop } from '../lib/desktop';
import { useVaultStore } from '../store/useVaultStore';
import { UpdatePrompt } from './UpdatePrompt';

/** Mounted once. Does nothing in a browser. In the desktop app it follows the tray menu, keeps the window frame in step with the theme and shows the update prompt. */
export function DesktopBridge() {
  const navigate = useNavigate();
  const theme = useVaultStore((state) => state.theme);
  useEffect(() => desktop?.onRoute((path) => navigate(path)), [navigate]);
  useEffect(() => { desktop?.setTheme(theme === 'dark'); }, [theme]);
  if (!desktop) return null;
  return <UpdatePrompt />;
}

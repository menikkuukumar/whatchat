import React from 'react';
import { Moon, Sun, Settings, Smartphone, MessageSquare, Send, FileCode } from 'lucide-react';
import { WhatsAppCredentials } from '../types/whatsapp';

interface AndroidHeaderProps {
  activeTab: 'chats' | 'broadcast' | 'templates' | 'settings';
  setActiveTab: (tab: 'chats' | 'broadcast' | 'templates' | 'settings') => void;
  credentials: WhatsAppCredentials;
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
  onOpenSettings: () => void;
  isInstallable?: boolean;
  onInstallPWA?: () => void;
}

export const AndroidHeader: React.FC<AndroidHeaderProps> = ({
  activeTab,
  setActiveTab,
  credentials,
  theme,
  onToggleTheme,
  onOpenSettings,
  isInstallable,
  onInstallPWA
}) => {
  const getTabTitle = () => {
    switch (activeTab) {
      case 'chats':
        return 'WhatsCloud';
      case 'broadcast':
        return 'Bulk Broadcast';
      case 'templates':
        return 'Meta Templates';
      case 'settings':
        return 'API & Settings';
    }
  };

  return (
    <header className="sticky top-0 z-30 bg-[#008069] dark:bg-[#1F2C34] text-white shadow-md transition-colors select-none shrink-0">
      {/* Top Android App Bar */}
      <div className="flex items-center justify-between px-3 sm:px-4 h-14">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-white/15 flex items-center justify-center p-1 border border-white/20">
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
              <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm0 18.14c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.16 8.16 0 01-1.25-4.37c0-4.51 3.67-8.18 8.18-8.18 2.19 0 4.24.85 5.79 2.4 1.55 1.55 2.4 3.61 2.4 5.79 0 4.51-3.67 8.17-8.18 8.17z"/>
            </svg>
          </div>
          <div>
            <h1 className="text-base sm:text-lg font-bold tracking-tight leading-none text-white">
              {getTabTitle()}
            </h1>
            <div className="flex items-center gap-1.5 mt-0.5">
              {credentials.accessToken && credentials.phoneNumberId ? (
                <div className="flex items-center gap-1 text-[11px] text-emerald-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  <span className="truncate max-w-[130px] sm:max-w-[200px]">
                    {credentials.verifiedName || credentials.displayPhoneNumber || 'API Connected'}
                  </span>
                </div>
              ) : (
                <button
                  onClick={onOpenSettings}
                  className="flex items-center gap-1 text-[11px] text-amber-200 hover:text-white transition-colors cursor-pointer"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                  <span>Connect Meta Cloud API</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-black/10 dark:bg-white/5 p-1 rounded-xl">
          <button
            onClick={() => setActiveTab('chats')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
              activeTab === 'chats'
                ? 'bg-white text-[#008069] shadow-xs'
                : 'text-white/80 hover:text-white hover:bg-white/10'
            }`}
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Chats</span>
          </button>
          <button
            onClick={() => setActiveTab('broadcast')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
              activeTab === 'broadcast'
                ? 'bg-white text-[#008069] shadow-xs'
                : 'text-white/80 hover:text-white hover:bg-white/10'
            }`}
          >
            <Send className="w-3.5 h-3.5" />
            <span>Broadcast</span>
          </button>
          <button
            onClick={() => setActiveTab('templates')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
              activeTab === 'templates'
                ? 'bg-white text-[#008069] shadow-xs'
                : 'text-white/80 hover:text-white hover:bg-white/10'
            }`}
          >
            <FileCode className="w-3.5 h-3.5" />
            <span>Templates</span>
          </button>
          <button
            onClick={() => setActiveTab('settings')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
              activeTab === 'settings'
                ? 'bg-white text-[#008069] shadow-xs'
                : 'text-white/80 hover:text-white hover:bg-white/10'
            }`}
          >
            <Settings className="w-3.5 h-3.5" />
            <span>Settings</span>
          </button>
        </nav>

        {/* Action icons */}
        <div className="flex items-center gap-1 sm:gap-2">
          {isInstallable && (
            <button
              onClick={onInstallPWA}
              title="Install WhatsApp Android App"
              className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold rounded-full bg-white/20 hover:bg-white/30 text-white transition-all active:scale-95"
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Install App</span>
            </button>
          )}

          <button
            onClick={onToggleTheme}
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-white/15 active:bg-white/25 transition-colors text-white"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <button
            onClick={onOpenSettings}
            title="WhatsApp API & Webhook Settings"
            className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-white/15 active:bg-white/25 transition-colors text-white md:hidden"
            aria-label="Open settings"
          >
            <Settings className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
};

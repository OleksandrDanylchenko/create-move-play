import React, {
  createContext,
  useEffect,
  useContext,
  useCallback,
  ReactElement
} from 'react';

export interface IBeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: 'accepted' | 'dismissed';
    platform: string;
  }>;
  prompt(): Promise<void>;
}
export type PromptCtx = {
  deferredEvt: IBeforeInstallPromptEvent | null;
  hidePrompt?: () => void;
};
export type Children = {
  children: ReactElement | ReactElement[] | string | null;
};

const PromptToInstall = createContext<PromptCtx>({ deferredEvt: null });

export function PromptToInstallProvider(props: Children) {
  const [
    deferredEvt,
    setDeferredEvt
  ] = React.useState<IBeforeInstallPromptEvent | null>(null);

  const hidePrompt = useCallback(() => {
    setDeferredEvt(null);
  }, []);

  useEffect(() => {
    const ready = (e: IBeforeInstallPromptEvent) => {
      e.preventDefault();

      console.error(e);

      setDeferredEvt(e);
    };

    window.addEventListener('beforeinstallprompt', ready as any);

    return () => {
      window.removeEventListener('beforeinstallprompt', ready as any);
    };
  }, []);

  return (
    <PromptToInstall.Provider value={{ deferredEvt, hidePrompt }}>
      {props.children}
    </PromptToInstall.Provider>
  );
}

export function usePromptToInstall() {
  const ctx = useContext(PromptToInstall);
  if (!ctx) {
    throw new Error(
      'Cannot use usePromptToInstall() outside <PromptToInstallProvider />'
    );
  }
  return ctx;
}

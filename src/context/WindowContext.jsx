import React, { createContext, useState, useCallback, useMemo, useContext } from 'react';

const WindowContext = createContext(null);

export const WindowProvider = ({ children }) => {
  const [windows, setWindows] = useState({
    home: { id: 'home', title: 'Home', isOpen: false, isMinimized: false, isMaximized: false, zIndex: 1 },
    about: { id: 'about', title: 'About', isOpen: false, isMinimized: false, isMaximized: false, zIndex: 2 },
    portfolio: { id: 'portfolio', title: 'Portfolio', isOpen: false, isMinimized: false, isMaximized: false, zIndex: 3 },
    contact: { id: 'contact', title: 'Contact', isOpen: false, isMinimized: false, isMaximized: false, zIndex: 4 },
    games: { id: 'games', title: 'Games', isOpen: false, isMinimized: false, isMaximized: false, zIndex: 5 },
    bin: { id: 'bin', title: 'Recycle bin', isOpen: false, isMinimized: false, isMaximized: false, zIndex: 6 }
  });

  const [tabPositions, setTabPositions] = useState({});

  const updateTabPosition = useCallback((id, position) => {
    setTabPositions(prev => ({ ...prev, [id]: position }));
  }, []);

  const getHighestZIndex = useCallback(() => {
    return Math.max(...Object.values(windows).map(w => w.zIndex), 0);
  }, [windows]);

  const openWindow = useCallback((id) => {
    setWindows(prev => {
      if (!prev[id]) return prev;
      const newZ = getHighestZIndex() + 1;
      return { ...prev, [id]: { ...prev[id], isOpen: true, isMinimized: false, zIndex: newZ } };
    });
  }, [getHighestZIndex]);

  const closeWindow = useCallback((id) => {
    setWindows(prev => {
      if (!prev[id]) return prev;
      return { ...prev, [id]: { ...prev[id], isOpen: false } };
    });
  }, []);

  const focusWindow = useCallback((id) => {
    setWindows(prev => {
      if (!prev[id] || !prev[id].isOpen) return prev;
      // If it's already the highest, do nothing to avoid unnecessary renders
      const highest = getHighestZIndex();
      if (prev[id].zIndex === highest && highest > 0) return prev;

      return { ...prev, [id]: { ...prev[id], zIndex: highest + 1 } };
    });
  }, [getHighestZIndex]);

  const minimizeWindow = useCallback((id) => {
    setWindows(prev => {
      if (!prev[id]) return prev;
      return { ...prev, [id]: { ...prev[id], isMinimized: true } };
    });
  }, []);

  const toggleMaximizeWindow = useCallback((id) => {
    setWindows(prev => {
      if (!prev[id]) return prev;
      return { ...prev, [id]: { ...prev[id], isMaximized: !prev[id].isMaximized } };
    });
  }, []);

  const restoreWindow = useCallback((id) => {
    setWindows(prev => {
      if (!prev[id]) return prev;
      const newZ = getHighestZIndex() + 1;
      return { ...prev, [id]: { ...prev[id], isMinimized: false, isMaximized: false, zIndex: newZ } };
    });
  }, [getHighestZIndex]);

  const toggleWindowFromTaskbar = useCallback((id) => {
    setWindows(prev => {
      const win = prev[id];
      if (!win) return prev;

      if (!win.isOpen) {
        // Not open yet, open it
        const newZ = getHighestZIndex() + 1;
        return { ...prev, [id]: { ...win, isOpen: true, isMinimized: false, zIndex: newZ } };
      }

      if (win.isMinimized) {
        // Minimized, restore it
        const newZ = getHighestZIndex() + 1;
        return { ...prev, [id]: { ...win, isMinimized: false, zIndex: newZ } };
      }

      // Open and not minimized. Check if it's the active window (highest z-index of open/non-minimized windows).
      const activeWindows = Object.values(prev).filter(w => w.isOpen && !w.isMinimized);
      const activeHighestZ = activeWindows.length > 0 ? Math.max(...activeWindows.map(w => w.zIndex)) : 0;

      if (win.zIndex === activeHighestZ) {
        // Currently active window -> minimize it
        return { ...prev, [id]: { ...win, isMinimized: true } };
      } else {
        // Open but behind -> focus it
        const newZ = getHighestZIndex() + 1;
        return { ...prev, [id]: { ...win, zIndex: newZ } };
      }
    });
  }, [getHighestZIndex]);

  const contextValue = useMemo(() => ({
    windows,
    tabPositions,
    updateTabPosition,
    openWindow,
    closeWindow,
    focusWindow,
    minimizeWindow,
    toggleMaximizeWindow,
    restoreWindow,
    toggleWindowFromTaskbar
  }), [windows, tabPositions, updateTabPosition, openWindow, closeWindow, focusWindow, minimizeWindow, toggleMaximizeWindow, restoreWindow, toggleWindowFromTaskbar]);

  return (
    <WindowContext.Provider value={contextValue}>
      {children}
    </WindowContext.Provider>
  );
};

export const useWindowContext = () => {
  const context = useContext(WindowContext);
  if (!context) {
    throw new Error("useWindowContext must be used within a WindowProvider");
  }
  return context;
};

export default WindowContext;

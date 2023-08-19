import React, { useState } from 'react';

const RightClickMessage = () => {
  const [showMessage, setShowMessage] = useState(false);

  const handleContextMenu = (e) => {
    e.preventDefault(); // Prevent the default context menu
    console.log('Right-click detected!');
        setShowMessage(true);
  };

  return (
    <div onContextMenu={handleContextMenu}>
      {showMessage && (
        <div className="bg-gray-200 p-4 rounded-md shadow-md">
          Right-clicked! You triggered the context menu.
        </div>
      )}
    </div>
  );
};

export default RightClickMessage;

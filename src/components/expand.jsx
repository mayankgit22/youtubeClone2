import React, { useState } from 'react';

const ExpandableText = ({ text, limit = 150 }) => {
  const [expanded, setExpanded] = useState(false);

  const isLong = text?.length > limit;
  const displayText = expanded || !isLong ? text : text.slice(0, limit) + '...';

  return (
    <div className="text-base leading-relaxed">
      <p>{displayText}</p>
      {isLong && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-2  rounded-full p-2 boder-2 border-black bg-blue-500  text-black"
        >
          {expanded ? 'Show less' : 'Read more'}
        </button>
      )}
    </div>
  );
};

export default ExpandableText;

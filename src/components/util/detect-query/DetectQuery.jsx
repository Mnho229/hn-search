import React from 'react';
import reactStringReplace from 'react-string-replace';

export default function detectQuery(propName, query, htmlFlag) {
  if (query === '') {
    return propName;
  }

  htmlFlag = typeof htmlFlag === "undefined" ? false : htmlFlag;
  const regex = new RegExp('(' + query + ')', 'gi');
  
  //if html is in content, plug in simple replace instead
  if (htmlFlag) {
    const newContent = propName.replace(regex, function(match) {
      return `<span class="h-highlight">${match}</span>`
    });
    return newContent;
  }

  return reactStringReplace(propName, regex, (match, i) => 
    <span className="h-highlight" key={i}>{match}</span>
  );
}
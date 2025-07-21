import React from "react";

export default function Ai_response({ query = "Sample query" }) {
  return (
    <div className="bg-white border border-sky-200 rounded-xl shadow-md p-6 mt-6 max-w-3xl mx-auto">
      {/* User Query */}
      <div className="text-sm text-gray-600 mb-3 italic">
        You asked:
        <span className="font-medium text-gray-800 ml-2">{query}</span>
      </div>

      {/* AI Response */}
      <div className="bg-sky-50 text-gray-800 p-4 rounded-lg leading-relaxed max-h-64 overflow-y-auto">
        Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of
        places to do just that.
        <br />
        Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of
        places to do just that.
        <br />
        Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of
        places to do just that.
        <br />
        Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of
        places to do just that.
      </div>
    </div>
  );
}

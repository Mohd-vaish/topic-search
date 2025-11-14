import React, { useState } from "react";



const topicsData = [
  { id: 1, name: "Thermodynamics", category: "Physics" },
  { id: 2, name: "Algebra", category: "Mathematics" },
  { id: 3, name: "Organic Chemistry", category: "Chemistry" },
  { id: 4, name: "Genetics", category: "Biology" },
  { id: 5, name: "Electric Circuits", category: "Electrical Engineering" },
];

function TopicSearch() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTopics = topicsData.filter((topic) =>
    topic.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="topic-search-container">
      <input
        type="text"
        placeholder="Search topics..."
        className="search-box"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="topic-list">
        {filteredTopics.length > 0 ? (
          filteredTopics.map((topic) => (
            <div className="topic-card" key={topic.id}>
              <h3>{topic.name}</h3>
              <p>{topic.category}</p>
            </div>
          ))
        ) : (
          <p className="no-result">No topics found</p>
        )}
      </div>
    </div>
  );
}

export default TopicSearch;

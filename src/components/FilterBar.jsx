import React from 'react'
import './FilterBar.css'

function FilterBar({ filters, onFilterChange }) {
  return (
    <div className="filter-bar">
      <input
        type="text"
        className="filter-search"
        placeholder="Search by title or company..."
        value={filters.keyword}
        onChange={(e) => onFilterChange({ ...filters, keyword: e.target.value })}
      />

      <select
        className="filter-select"
        value={filters.location}
        onChange={(e) => onFilterChange({ ...filters, location: e.target.value })}
      >
        <option value="">All Locations</option>
        <option value="Bangalore">Bangalore</option>
        <option value="Pune">Pune</option>
        <option value="Hyderabad">Hyderabad</option>
        <option value="Mumbai">Mumbai</option>
        <option value="Noida">Noida</option>
        <option value="Mysore">Mysore</option>
      </select>

      <select
        className="filter-select"
        value={filters.mode}
        onChange={(e) => onFilterChange({ ...filters, mode: e.target.value })}
      >
        <option value="">All Modes</option>
        <option value="Remote">Remote</option>
        <option value="Hybrid">Hybrid</option>
        <option value="Onsite">Onsite</option>
      </select>

      <select
        className="filter-select"
        value={filters.experience}
        onChange={(e) => onFilterChange({ ...filters, experience: e.target.value })}
      >
        <option value="">All Experience</option>
        <option value="Fresher">Fresher</option>
        <option value="0-1">0-1 Years</option>
        <option value="1-3">1-3 Years</option>
        <option value="3-5">3-5 Years</option>
      </select>

      <select
        className="filter-select"
        value={filters.source}
        onChange={(e) => onFilterChange({ ...filters, source: e.target.value })}
      >
        <option value="">All Sources</option>
        <option value="LinkedIn">LinkedIn</option>
        <option value="Naukri">Naukri</option>
        <option value="Indeed">Indeed</option>
      </select>

      <select
        className="filter-select"
        value={filters.status}
        onChange={(e) => onFilterChange({ ...filters, status: e.target.value })}
      >
        <option value="">All Status</option>
        <option value="Not Applied">Not Applied</option>
        <option value="Applied">Applied</option>
        <option value="Rejected">Rejected</option>
        <option value="Selected">Selected</option>
      </select>

      <select
        className="filter-select"
        value={filters.sort}
        onChange={(e) => onFilterChange({ ...filters, sort: e.target.value })}
      >
        <option value="latest">Latest</option>
        <option value="oldest">Oldest</option>
        <option value="match">Match Score</option>
        <option value="salary">Salary</option>
      </select>
    </div>
  )
}

export default FilterBar

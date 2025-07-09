import React, { useState, useRef } from "react"
import "./Spreadsheet.css"

const ChevronRight = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
)

const EyeOff = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24m1.68 1.68a3 3 0 004.24 4.24M3 3l18 18" />
  </svg>
)

const ArrowUpDown = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
    {/* Up arrow (left) */}
    <path d="M7 19V5M7 5l-4 4M7 5l4 4" strokeLinecap="round" strokeLinejoin="round"/>
    {/* Down arrow (right) */}
    <path d="M17 5v14M17 19l-4-4M17 19l4-4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const Filter = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24">
    <path d="M10 16h4M6 8h12M8 12h8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

// const Grid3X3 = ({ className }) => (
//   <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//     <rect x="3" y="5" width="18" height="14" rx="2" />
//     <path d="M3 9h18M3 15h18M9 5v14M15 5v14" />
//   </svg>
// )

const Download = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
  </svg>
)

const Upload = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
  </svg>
)

const Share = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
  </svg>
)

const Plus = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
  </svg>
)

const Search = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
)

const Bell = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
  </svg>
)

const MoreHorizontal = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01" />
  </svg>
)

const FileText = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
)

const Calendar = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
)

const UserWithGlasses = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    {/* Head shape */}
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4c-2.5 0-4.5 2-4.5 4.5s2 4.5 4.5 4.5 4.5-2 4.5-4.5S14.5 4 12 4z" />
    {/* Curly hair */}
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 3.5c0 0 1-1 4-1s4 1 4 1M7.5 4.5c0 0 0.5-0.5 1.5-0.5s1.5 0.5 1.5 0.5M16.5 4.5c0 0-0.5-0.5-1.5-0.5s-1.5 0.5-1.5 0.5" />
    {/* Glasses frames */}
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 6.5c0 0 1.5 0 3 0s3 0 3 0" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 6.5c0 0 0-0.5 0-1s0-1 0-1M15 6.5c0 0 0-0.5 0-1s0-1 0-1" />
    {/* Glasses bridge */}
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 5.5c0 0 0.5 0 0.5 0" />
    {/* Body */}
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
)

const Link = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
  </svg>
)

const ChevronDown = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 9l-7 7-7-7" />
  </svg>
)

const Globe = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" width="1em" height="1em">
    <circle cx="12" cy="12" r="10" stroke="#bbb" strokeWidth="2" fill="#eee"/>
    <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" stroke="#bbb" strokeWidth="2" fill="none"/>
  </svg>
)

const WavingHandSmile = ({ className }) => (
  <svg className={className} width="1em" height="1em" viewBox="0 0 32 32" fill="none">
    <g>
      <circle cx="24" cy="24" r="7" fill="#b2bfb6"/>
      <path d="M21 25c1 1 3 1 4 0" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="22.5" cy="23" r="0.7" fill="#fff"/>
      <circle cx="25.5" cy="23" r="0.7" fill="#fff"/>
      <path d="M7 25V8a2 2 0 1 1 4 0v10M11 18V6a2 2 0 1 1 4 0v12M15 18V10a2 2 0 1 1 4 0v10" stroke="#b2bfb6" strokeWidth="2" strokeLinecap="round"/>
    </g>
  </svg>
)

const CircleDown = ({ className }) => (
  <svg className={className} width="1.5em" height="1.5em" viewBox="0 0 32 32" fill="none">
    <circle cx="16" cy="16" r="15" fill="#bbb"/>
    <path d="M11 15l5 5 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const UserCircle = ({ className }) => (
  <svg className={className} width="1.5em" height="1.5em" viewBox="0 0 32 32" fill="none">
    <circle cx="16" cy="16" r="15" fill="#bbb"/>
    <circle cx="16" cy="13" r="5" fill="#fff"/>
    <ellipse cx="16" cy="23" rx="7" ry="4" fill="#fff"/>
  </svg>
);

const Briefcase = ({ className }) => (
  <svg className={className} width="1.5em" height="1.5em" viewBox="0 0 32 32" fill="none">
    <rect x="6" y="12" width="20" height="12" rx="2" fill="#bbb"/>
    <rect x="10" y="8" width="12" height="6" rx="2" fill="#bbb"/>
    <rect x="6" y="18" width="20" height="6" rx="2" fill="#bbb"/>
    <rect x="14" y="16" width="4" height="4" rx="1" fill="#fff"/>
  </svg>
);

const RefreshIcon = ({ className, style }) => (
  <svg className={className} style={style} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M4.93 19.07A10 10 0 1 1 12 22v-2m0 0l-3 3m3-3l3 3" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const initialData = {
  1: {
    A: "Launch social media campaign for pro...",
    B: "15-11-2024",
    C: "In-process",
    D: "Aisha Patel",
    E: "www.aishapatel...",
    F: "Sophie Choudhury",
    G: "Medium",
    H: "20-11-2024",
    I: "6,200,000 ₹",
  },
  2: {
    A: "Update press kit for company redesign",
    B: "28-10-2024",
    C: "Need to start",
    D: "Irfan Khan",
    E: "www.irfankhanp...",
    F: "Tejas Pandey",
    G: "High",
    H: "30-10-2024",
    I: "3,500,000 ₹",
  },
  3: {
    A: "Finalize user testing feedback for app...",
    B: "05-12-2024",
    C: "In-process",
    D: "Mark Johnson",
    E: "www.markjohns...",
    F: "Rachel Lee",
    G: "Medium",
    H: "10-12-2024",
    I: "4,750,000 ₹",
  },
  4: {
    A: "Design new features for the website",
    B: "10-01-2025",
    C: "Complete",
    D: "Emily Green",
    E: "www.emilygreen...",
    F: "Tom Wright",
    G: "Low",
    H: "15-01-2025",
    I: "5,900,000 ₹",
  },
  5: {
    A: "Prepare financial report for Q4",
    B: "25-01-2025",
    C: "Blocked",
    D: "Jessica Brown",
    E: "www.jessicabro...",
    F: "Kevin Smith",
    G: "Low",
    H: "30-01-2025",
    I: "2,800,000 ₹",
  },
}

const columns = [
  { key: "A", label: "Job Request", icon: Briefcase, width: "300px" },
  { key: "B", label: "Submitted", icon: Calendar, width: "120px" },
  { key: "C", label: "Status", icon: CircleDown, width: "120px" },
  { key: "D", label: "Submitter", icon: UserCircle, width: "150px" },
  { key: "E", label: "URL", icon: Globe, width: "150px" },
  { key: "F", label: "Assigned", icon: WavingHandSmile, width: "150px" },
  { key: "G", label: "Priority", icon: null, width: "100px" },
  { key: "H", label: "Due Date", icon: null, width: "120px" },
  { key: "I", label: "Est. Value", icon: null, width: "120px" },
]

const getStatusBadge = (status) => {
  const statusConfig = {
    "In-process": "status-in-process",
    "Need to start": "status-need-to-start",
    Complete: "status-complete",
    Blocked: "status-blocked",
  }
  return statusConfig[status] || "status-default"
}

const getPriorityColor = (priority) => {
  const colors = {
    High: "priority-high",
    Medium: "priority-medium",
    Low: "priority-low",
  }
  return colors[priority] || "priority-default"
}

export default function Spreadsheet() {
  const [data, setData] = useState(initialData)
  const [selectedCell, setSelectedCell] = useState({ row: 8, col: "A" })
  const [editingCell, setEditingCell] = useState(null)
  const [sortColumn, setSortColumn] = useState(null)
  const [sortDirection, setSortDirection] = useState("asc")
  const fileInputRef = useRef(null)

  const handleCellClick = (row, col) => {
    setSelectedCell({ row, col })
    setEditingCell(null)
  }

  const handleCellDoubleClick = (row, col) => {
    setEditingCell({ row, col })
  }

  const handleCellChange = (row, col, value) => {
    setData((prev) => ({
      ...prev,
      [row]: {
        ...prev[row],
        [col]: value,
      },
    }))
  }

  const handleSort = (column) => {
    const newDirection = sortColumn === column && sortDirection === "asc" ? "desc" : "asc"
    setSortColumn(column)
    setSortDirection(newDirection)

    const sortedData = { ...data }
    const rows = Object.keys(sortedData)
      .map(Number)
      .sort((a, b) => {
        const aVal = sortedData[a]?.[column] || ""
        const bVal = sortedData[b]?.[column] || ""

        if (newDirection === "asc") {
          return aVal.toString().localeCompare(bVal.toString())
        } else {
          return bVal.toString().localeCompare(aVal.toString())
        }
      })

    const newData = {}
    rows.forEach((oldRow, index) => {
      if (sortedData[oldRow]) {
        newData[index + 1] = sortedData[oldRow]
      }
    })

    setData(newData)
  }

  const handleImport = () => {
    fileInputRef.current?.click()
  }

  const handleFileImport = (event) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        try {
          const csv = e.target?.result
          const lines = csv.split("\n")
          const newData = {}

          lines.forEach((line, index) => {
            if (index > 0 && line.trim()) {
              const values = line.split(",")
              const rowData = {}
              columns.forEach((col, colIndex) => {
                rowData[col.key] = values[colIndex] || ""
              })
              newData[index] = rowData
            }
          })

          setData(newData)
        } catch (error) {
          console.error("Error parsing CSV:", error)
        }
      }
      reader.readAsText(file)
    }
  }

  const handleExport = () => {
    const csvContent = [
      columns.map((col) => col.label).join(","),
      ...Object.entries(data).map(([row, rowData]) => columns.map((col) => rowData[col.key] || "").join(",")),
    ].join("\n")

    const blob = new Blob([csvContent], { type: "text/csv" })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "spreadsheet-data.csv"
    a.click()
    window.URL.revokeObjectURL(url)
  }

  const renderCell = (row, col, value) => {
    // const isSelected = selectedCell?.row === row && selectedCell?.col === col
    const isEditing = editingCell?.row === row && editingCell?.col === col

    if (isEditing) {
      return (
        <input
          className="cell-input"
          value={value || ""}
          onChange={(e) => handleCellChange(row, col, e.target.value)}
          onBlur={() => setEditingCell(null)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setEditingCell(null)
            }
          }}
          autoFocus
        />
      )
    }

    if (col === "C" && value) {
      return <span className={`badge ${getStatusBadge(value)}`}>{value}</span>
    }

    if (col === "E" && value) {
      return <span className="url-cell">{value}</span>
    }

    if (col === "G" && value) {
      return <span className={`priority-cell ${getPriorityColor(value)}`}>{value}</span>
    }

    return <span className="cell-text">{value || ""}</span>
  }

  return (
    <div className="spreadsheet-container">
      <input 
        type="file" 
        ref={fileInputRef} 
        onChange={handleFileImport} 
        accept=".csv" 
        className="hidden-input" 
      />

      {/* Header */}
      <div className="header">
        <div className="header-content">
          <div className="breadcrumb">
            <div className="workspace-icon">
              <FileText className="icon-sm" />
            </div>
            <span>Workspace</span>
            <ChevronRight className="icon-xs" />
            <span>Folder 2</span>
            <ChevronRight className="icon-xs" />
            <span className="breadcrumb-current">Spreadsheet 3</span>
            <MoreHorizontal className="icon-xs" />
          </div>
          <div className="header-right">
            <div className="search-container">
              <Search className="search-icon" />
              <input className="search-input" placeholder="Search within sheet" />
            </div>
            <div className="notification-container">
              <Bell className="notification-icon" />
              <div className="notification-badge">2</div>
            </div>
            <div className="avatar">
              <img 
                src={require('../images/john.jpg')} 
                alt="John Doe" 
                className="avatar-image"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="avatar-fallback">
                <UserWithGlasses className="avatar-icon" />
              </div>
            </div>
            <div className="user-info">
              <div className="user-name">John Doe</div>
              <div className="user-email">john.doe...</div>
            </div>
          </div>
        </div>
      </div>

      {/* Toolbar */}
      <div className="toolbar">
        <div className="toolbar-content">
          <div className="toolbar-left">
            <button className="toolbar-btn">
              <span>Tool bar</span>
              <span className="chevrons-tight">
                <ChevronRight className="icon-xs" />
                <ChevronRight className="icon-xs" />
              </span>
            </button>
            <button className="toolbar-btn">
              <EyeOff className="icon-xs" />
              Hide fields
            </button>
            <button className="toolbar-btn sort-btn" onClick={() => handleSort("A")}>
              <ArrowUpDown className="icon-xs sort-icon-large" />
              Sort
            </button>
            <button className="toolbar-btn">
              <Filter className="icon-xs filter-icon-large" />
              Filter
            </button>
            <button className="toolbar-btn">
              <img src={require('../images/cell-icon.png')} alt="cell icon" className="icon-xs cell-view-icon" />
              Cell view
            </button>
          </div>
          <div className="toolbar-right">
            <button className="toolbar-btn toolbar-btn-outlined" onClick={handleImport}>
              <Download className="icon-xs" />
              Import
            </button>
            <button className="toolbar-btn toolbar-btn-outlined" onClick={handleExport}>
              <Upload className="icon-xs" />
              Export
            </button>
            <button className="toolbar-btn toolbar-btn-outlined">
              <Share className="icon-xs" />
              Share
            </button>
            <button className="new-action-btn">
              <Plus className="icon-xs" />
              New Action
            </button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="tabs-container">
        <div className="tabs">
          <div className="tab active-tab">
            <div className="tab-indicator blue"></div>
            <span className="financial-overview-box left-align">
              <span className="financial-overview-label-outline">
                <Link className="icon-xs" />
                Q3 Financial Overview
                <RefreshIcon className="icon-xs" style={{ marginLeft: '0.5rem', verticalAlign: 'middle', width: '0.85rem', height: '0.85rem' }} />
              </span>
            </span>
          </div>
          <div className="tab abc-tab">
            <img src={require('../images/tab-icon.png')} alt="tab icon" className="icon-xs tab-custom-icon tab-grey-icon" />
            ABC
            <MoreHorizontal className="icon-xs" />
          </div>
          <div className="tab tab-purple">
            <img src={require('../images/tab-icon.png')} alt="tab icon" className="icon-xs tab-custom-icon" />
            Answer a question
          </div>
          <div className="tab tab-orange">
            <img src={require('../images/tab-icon.png')} alt="tab icon" className="icon-xs tab-custom-icon" />
            Extract
          </div>
          <button className="add-tab-btn">
            <Plus className="icon-xs" />
          </button>
        </div>
      </div>

      <div className="grid-container">
        <div className="grid-wrapper">
        
          <div className="column-headers">
            <div className="row-number-header">#</div>
            {columns.map((col) => (
              <div
                key={col.key}
                className={`column-header${
                  col.key === "F" ? " assigned-header" :
                  col.key === "G" ? " priority-header" :
                  col.key === "H" ? " duedate-header" :
                  col.key === "I" ? " estvalue-header" :
                  ""
                }`}
                style={{ width: col.width }}
                onClick={() => handleSort(col.key)}
              >
                <div className="column-header-content">
                  {col.icon && (
                    <col.icon
                      className={`icon-xs${col.key === "A" ? " jobrequest-header-icon" : ""}${col.key === "D" ? " submitter-header-icon" : ""}${col.key === "B" ? " submitted-header-icon" : ""}`}
                    />
                  )}
                  <span className="column-label">
                    {col.key === "E"
                      ? col.label.toUpperCase()
                      : col.label.charAt(0).toUpperCase() + col.label.slice(1).toLowerCase()}
                  </span>
                  {/* Add dropdown icon for specific tabs */}
                  {["A", "B", "C", "D", "E"].includes(col.key) && (
                    col.key === "B" ? (
                      <span className="submitted-dropdown-icon"><ChevronDown className="icon-xs" /></span>
                    ) : (
                      <ChevronDown className="icon-xs" style={{ marginLeft: 4, verticalAlign: 'middle' }} />
                    )
                  )}
                  {sortColumn === col.key && (
                    <ChevronDown className={`sort-icon ${sortDirection === "asc" ? "rotate-180" : ""}`} />
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Data Rows */}
          {Array.from({ length: 16 }, (_, index) => index + 1).map((row) => (
            <div key={row} className="data-row">
              <div className="row-number">{row}</div>
              {columns.map((col) => (
                <div
                  key={`${row}-${col.key}`}
                  className={`cell ${
                    selectedCell?.row === row && selectedCell?.col === col.key
                      ? "selected-cell"
                      : row === 8 && col.key === "A" && !data[row]
                        ? "highlighted-cell"
                        : ""
                  }`}
                  style={{ width: col.width }}
                  onClick={() => handleCellClick(row, col.key)}
                  onDoubleClick={() => handleCellDoubleClick(row, col.key)}
                >
                  {renderCell(row, col.key, data[row]?.[col.key])}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
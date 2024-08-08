// Importing Components
import './index.css'
import { Fragment } from 'react'
// Tab Item Component
const TabItem = (props) => {
  const {tabItemDetails,updateActiveTabItem,active} = props
  const {tabId,displayText} = tabItemDetails
  const getActiveTabId = () => {
    updateActiveTabItem(tabId)
  }

  const changeTabClass = active ? "active-tab-button" : ""

  return (
    <Fragment>
      <li className="tab-list">
        <button
          type="button"
          className={`tab-button unactive-tab-button ${changeTabClass}`}
          onClick={getActiveTabId}
        >
          {displayText}
        </button>
      </li>
    </Fragment>
  )
}
// Exporting TabItem Component
export default TabItem

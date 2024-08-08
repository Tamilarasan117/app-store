// Importing Components
import './index.css'
import { Fragment } from 'react'
// App Item Component
const AppItem = (props) => {
  const {appItemDetails} = props
  const {appName,imageUrl} = appItemDetails
  return (
    <Fragment>
      <li className="app-item-container">
        <img
          src={imageUrl}
          alt={appName}
          className="app-logo"
        />
        <p className="app-name">{appName}</p>
      </li>
    </Fragment>
  )
}
// Exporting AppItem Component
export default AppItem

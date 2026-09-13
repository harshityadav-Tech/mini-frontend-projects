import './index.css'

const TabItem = props => {
  const {tabDetails, onClickCategory} = props
  const {displayText, tabId} = tabDetails

  const changeTabId = () => {
    onClickCategory(tabId)
  }

  return (
    <li className="tab-item-container ">
      <button type="button" className="tab-btn" onClick={changeTabId}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem

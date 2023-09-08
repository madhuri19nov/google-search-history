import './index.css'

const HistoryItem = props => {
  const {historyDetails, deleteHistory} = props

  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails

  const onClickDelete = () => {
    deleteHistory(id)
  }

  return (
    <li className="list-item">
      <div className="row-container">
        <div className="row">
          <p className="time">{timeAccessed}</p>
          <img src={logoUrl} alt="domain logo" className="logo-url" />
          <p className="title">{title}</p>
          <p className="domain-Url">{domainUrl}</p>
        </div>
      </div>
      <button
        data-testid="delete"
        className="button"
        type="button"
        onClick={onClickDelete}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="delete"
        />
      </button>
    </li>
  )
}

export default HistoryItem

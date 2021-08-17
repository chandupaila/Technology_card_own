import './index.css'

const TechnologyCards = props => {
  const {cardsData} = props
  const {title, description, imgUrl, className} = cardsData
  const ClassName = `list-item ${className}`

  return (
    <li>
      <div className={ClassName}>
        <h1>{title}</h1>
        <p>{description}</p>
        <div className="image">
          <img src={imgUrl} />
        </div>
      </div>
    </li>
  )
}

export default TechnologyCards

// Write your code here
import './index.css'

const EventItem = props => {
  const {eventDetails, setActiveEventId} = props
  const {id, imageUrl, name, location} = eventDetails
  const onClickEvent = () => {
    setActiveEventId(id)
  }
  return (
    <li className="event-item">
      <button type="button" className="event-button" onClick={onClickEvent}>
        <img src={imageUrl} alt="event" className="event-img" />
      </button>
      <p className="event-name">{name}</p>
      <p className="event-location">{location}</p>
    </li>
  )
}
export default EventItem

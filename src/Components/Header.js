// import PropTypes from 'prop-types'
import Button from "./Button"
import { useLocation } from "react-router-dom"
import { FaSearchLocation } from "react-icons/fa"

const Header = ({title, onAdd, showAddTask}) => {
    // const onClick = () => {
    //     console.log('click')
    // } 

    const location = useLocation()
  return (
    <header className='header'>
        <h1 >{title}</h1>
        {location.pathname === '/' &&<Button color={!showAddTask? 'green' : 'red'} text={!showAddTask ? 'Add' : 'Hide'} onClick={onAdd}></Button>}
    </header>
  )
}

//CSS in js
// const headingStyle = {
//     color : 'red', backgroundColor : 'black'
// }
// Header.defaultProps = {
//     title : 'Task Tracker'
// }

// Header.propTypes = {
//     // title : PropTypes.string, //for debugging
//     title : PropTypes.string.isRequired, // give you error in console


// }
export default Header
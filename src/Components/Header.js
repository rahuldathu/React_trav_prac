// import PropTypes from 'prop-types'
import Button from "./Button"

const Header = ({title}) => {
    const onClick = () => {
        console.log('click')
    } 

  return (
    <header className='header'>
        <h1 >{title}</h1>
        <Button color='green' text='Add' onClick={onClick}></Button>
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
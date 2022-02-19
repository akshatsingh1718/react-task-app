import PropTypes from 'prop-types'

const Button = ({color, text, onClick}) => {


  return (
    <button onClick={onClick}  className={`p-3 w-full ${color}`}>{text}</button>
  )
}

Button.propTypes = {}

export default Button
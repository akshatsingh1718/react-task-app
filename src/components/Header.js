import PropTypes from 'prop-types';
import Button from "./Button";

const Header = ({title, onAdd, showAdd}) => {

  return (
    <header>
        <h1>{title}</h1>
        <div className="p-4 bg-blue-500">
            <Button text={showAdd ? "Close" : "Add"} color={showAdd ? "bg-red-300" : "bg-green-300"} onClick={onAdd} />
        </div>
    </header>
    )
}


Header.defaultProps = {
    title : "Task Tracker Default Title"
}


Header.propTypes = {
    title : PropTypes.string,
}

export default Header
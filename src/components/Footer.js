import { Link } from "react-router-dom";

const Footer = props => {
  return (
    <footer className="bg-gray-900 text-white p-3 mt-3 text-center">
        Copyright 2021
        <Link to="/about" className="text-2xl bg-white p-2 m-2 text-red-300" >Go to About</Link>
    </footer>
  )
}

Footer.propTypes = {}

export default Footer
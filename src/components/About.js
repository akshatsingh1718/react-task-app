import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="bg-pink-400 p-2">
        <h1>About</h1>
        <h1>Version 1.0.0</h1>
        <Link to="/" >Go Back</Link>
    </div>
  )
}

About.propTypes = {}

export default About
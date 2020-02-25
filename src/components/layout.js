import React from "react"
import PropTypes from "prop-types"
import "./layout.css"

const Layout = ({ children }) => {
 

  return (
    <>
        <main>{children}</main>
        <footer>
          <div className="pride_msg">
          © {new Date().getFullYear()}, built by Austin Shepherd
          </div> 
        </footer>
    
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

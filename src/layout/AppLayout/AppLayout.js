import React from 'react'
import PropTypes from 'prop-types'
import './app-layout.scss'
import Sidebar from '~/components/Sidebar'

const AppLayout = props => {
    return (
        <div className='app'>
            <div className='app__sidebar'>
                <Sidebar />
            </div>
            <div className='app__container'>
                <div className='app__header'>

                </div>
                <div className='app__content'></div>
            </div>
        </div>
    )
}

AppLayout.propTypes = {}

export default AppLayout
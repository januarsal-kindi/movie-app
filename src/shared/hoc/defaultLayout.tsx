import React from 'react'
import PropTypes from 'prop-types'
import DefaultLayout from '../../components/layouts/defaultLayout'
export default (WrappedComponent : React.ComponentType) => {
    const hocComponent = ({ ...props }) => (
        <DefaultLayout>
            <WrappedComponent {...props} />
        </DefaultLayout>
    )

    hocComponent.propTypes = {
    }

    return hocComponent
}

import React from 'react'
import PageTitle from '../../layouts/PageTitle'
import ServiceCard from './ServiceCard'

const Servers = () => {
    return (
        <div>
            <PageTitle activeMenu={"Servers"} motherMenu={"Admin"} />
            <ServiceCard/>
            <ServiceCard/>
            <ServiceCard/>
            <ServiceCard/>
            <ServiceCard/>
            <ServiceCard/>
            <ServiceCard/>
            <ServiceCard/>
            <ServiceCard/>
        </div>
    )
}

export default Servers

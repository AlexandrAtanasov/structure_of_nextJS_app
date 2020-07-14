import React, { Children } from 'react'
import Link from 'next/link'
import { NavigationBar } from '../components/NavigationBar'
import { HeadComponent } from '../components/HeadComponent'

export function MainLayout( {children, title, description} ) {

    return (
        <React.Fragment>
            <HeadComponent 
                title={title}
                description={description}
            />
            <NavigationBar />
            <main>
                {children}
            </main>


            <style jsx>{`
                main {
                    margin-top: 50px;
                    padding: 1rem;
                }
            `}
            </style>
        </React.Fragment>
    )
} 
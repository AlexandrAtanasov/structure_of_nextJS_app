import {useRouter} from 'next/router'
import { MainLayout } from '../../layouts/MainLayout'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Post({ posts }) {

    const router = useRouter();
    console.log(router)
    
    return (
        <MainLayout>
            <p>kflgdflkmg</p>
        </MainLayout>
    )
}

import Link from 'next/link'
import Head from 'next/head'
import { MainLayout } from '../layouts/MainLayout'

export default function index() {
    return (
        <MainLayout 
            title='Main page'
            description='Description for Main'
        >
            <h1>Main page</h1>
        </MainLayout>
    )
}

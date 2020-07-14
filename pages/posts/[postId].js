import {useRouter} from 'next/router'
import { MainLayout } from '../../layouts/MainLayout'

export default function Post() {
    const router = useRouter();
    console.log(router)
    return (
        <MainLayout>
            <h1> Post page {router.query.postId}</h1>
        </MainLayout>
    )
}
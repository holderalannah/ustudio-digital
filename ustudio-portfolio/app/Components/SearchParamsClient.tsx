'use client'

import { useSearchParams } from 'next/navigation'

export default function SearchParamsClient() {
    const searchParams = useSearchParams()
    const type = searchParams?.get('type') ?? 'web dev'
    return <div>Current type: {type}</div>
}
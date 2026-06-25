import {createClient } from '@supabase/supabase-js'

export type Todo ={
    id:string,
    title:string,
    is_complete:boolean,
    create_at:string
}

export const supabase = createClient (
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,

)
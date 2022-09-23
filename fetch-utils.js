const SUPABASE_URL = 'https://gxwgjhfyrlwiqakdeamc.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNjQxMTMxMiwiZXhwIjoxOTUxOTg3MzEyfQ.PHekiwfLxT73qQsLklp0QFEfNx9NlmkssJFDnlvNIcA';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// export async functions that fetch data
export async function getBeanies(name, astroSign) {
    let query = client.from('beanie_babies').select('*').order('releaseYear').limit(50);

    if (name) {
        query = query.ilike('title', `%${name}`);
    }

    if (astroSign) {
        query = query.eq('astroSign', astroSign);
    }
    const response = await query;

    return response;
}

export async function getAstroSigns() {
    const response = await client.from('beanie_baby_astro_signs');
    return response;
}

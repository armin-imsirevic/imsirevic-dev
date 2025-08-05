interface Category {
    name: string;
    slug: string;
    description: string;
}

export const categories: Category[] = [
    {
        name: 'Mikrocement',
        slug: 'mikrocement',
        description: 'Everything about Mikrocement and its applications',
    },
    {
        name: 'Dekorativno Vapno',
        slug: 'dekorativno-vapno',
        description: 'Everything about Dekorativno Vapno and its applications',
    },
    {
        name: 'Usluge',
        slug: 'usluge',
        description: 'Our services and offerings',
    },
    {
        name: 'Projekti',
        slug: 'projekti',
        description: 'Showcasing our projects and transformations',
    },
    {
        name: 'Antiklizni podovi',
        slug: 'antiklizni-podovi',
        description: 'Non-slip flooring solutions for safety',
    },
    {
        name: 'Sigurnost',
        slug: 'sigurnost',
        description: 'Safety and security solutions',
    },
    {
        name: 'Poliuretanski premazi',
        slug: 'poliuretanski-premazi',
        description: 'Polyurethane coating systems and applications',
    },
    {
        name: 'Zaštitni premazi',
        slug: 'zastitni-premazi',
        description: 'Protective coating solutions',
    },
    {
        name: 'Zaštita površina',
        slug: 'zastita-povrsina',
        description: 'Surface protection systems',
    },
    {
        name: 'Epoksidni podovi',
        slug: 'epoksidni-podovi',
        description: 'Epoxy flooring solutions',
    },
    {
        name: 'Poslovni prostori',
        slug: 'poslovni-prostori',
        description: 'Commercial and business space solutions',
    },
    {
        name: 'Industrijski podovi',
        slug: 'industrijski-podovi',
        description: 'Industrial flooring systems',
    },
    {
        name: 'Komercijalni podovi',
        slug: 'komercijalni-podovi',
        description: 'Commercial flooring solutions',
    },
    {
        name: 'Izglačani beton',
        slug: 'izglacani-beton',
        description: 'Polished concrete finishes',
    },
    {
        name: 'Luksuzni podovi',
        slug: 'luksuzni-podovi',
        description: 'Luxury flooring solutions',
    },
];

// Helper function to get category by slug
export function getCategoryBySlug(slug: string): Category | undefined {
    return categories.find(category => category.slug === slug);
}

// src/data/menu.ts

export const headerMenu = [
    { name: 'Početna', link: '/' },
    {
        name: 'Naše usluge',
        link: '/usluge',
        showArrow: true,
        children: [
            { name: 'Microcement', link: '/usluge/microcement' },
            { name: 'Industrijski podovi', link: '/usluge/industrijski-podovi' },
            { name: 'Epoksidni podovi', link: '/usluge/epoksidni-podovi' },
            { name: 'Poliuretanski premazi', link: '/usluge/poliuretanski-premazi' },
            { name: 'Decorativni zidovi', link: '/usluge/decorativni-zidovi' },
        ],
    },
    { name: 'Projekti', link: '/projekti' },
    { name: 'O nama', link: '/o-nama' },
    { name: 'Traži posao?', link: '/team' },
];

export const footerMenu = [{ name: 'Style Guide', link: '/style-guide' }];

export const legalMenu = [
    { name: 'Privacy Policy', link: '/legal/privacy-policy' },
    { name: 'Terms of Service', link: '/legal/terms-of-service' },
];


type RouteEntryName = 'About' | 'Epigrams' | 'Links' | 'Media';
type RouteEntryObject = { title: string; url: string }

export const routes: Record<RouteEntryName, RouteEntryObject> = {
    About: {
        title: 'O autorze',
        url: '/autor'
    },
    Epigrams: {
        title: 'Fraszki wybrane',
        url: '/fraszki',
    },
    Links: {
        title: 'Mówią o nas',
        url: '/linki'
    },
    Media: {
        title: 'Materiały prasowe',
        url: '/media',
    }
};
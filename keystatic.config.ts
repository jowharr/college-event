import { config, fields, collection, singleton } from '@keystatic/core';

export default config({
    storage: {
        kind: 'local',
    },
    collections: {
        events: collection({
            label: 'Events',
            slugField: 'title',
            path: 'src/content/events/*',
            format: { contentField: 'content' },
            schema: {
                title: fields.slug({ name: { label: 'Title' } }),
                date: fields.text({ label: 'Date' }),
                description: fields.text({ label: 'Description', multiline: true }),
                image: fields.text({ label: 'Image URL' }),
                category: fields.select({
                    label: 'Category',
                    options: [
                        { label: 'Tech', value: 'Tech' },
                        { label: 'Sports', value: 'Sports' },
                        { label: 'Cultural', value: 'Cultural' },
                        { label: 'Seminar', value: 'Seminar' },
                        { label: 'Community', value: 'Community' },
                    ],
                    defaultValue: 'Tech',
                }),
                price: fields.text({ label: 'Price' }),
                content: fields.document({
                    label: 'Content',
                    formatting: true,
                    dividers: true,
                    links: true,
                    images: {
                        directory: 'public/images/events/content',
                        publicPath: '/images/events/content/',
                    },
                }),
            },
        }),
        clubs: collection({
            label: 'Clubs',
            slugField: 'name',
            path: 'src/content/clubs/*',
            format: { contentField: 'content' },
            schema: {
                name: fields.slug({ name: { label: 'Club Name' } }),
                tagline: fields.text({ label: 'Tagline' }),
                description: fields.text({ label: 'Short Description', multiline: true }),
                icon: fields.text({ label: 'Icon (Emoji)' }), // Using simple text for emoji for now
                color: fields.text({ label: 'Brand Color (Hex)' }),
                bgImage: fields.text({ label: 'Hero Background Image URL' }),
                headerColor: fields.text({ label: 'Header Background Color (Hex)' }),
                activities: fields.array(
                    fields.object({
                        title: fields.text({ label: 'Activity Title' }),
                        date: fields.text({ label: 'Date (e.g. Oct 2023)' }),
                        image: fields.text({ label: 'Activity Image URL' }),
                        desc: fields.text({ label: 'Activity Description', multiline: true }),
                    }),
                    {
                        label: 'Past Activities',
                        itemLabel: props => props.fields.title.value,
                    }
                ),
                content: fields.document({
                    label: 'About Content',
                    formatting: true,
                    dividers: true,
                    links: true,
                }),
            },
        }),
        gallery: collection({
            label: 'Gallery',
            slugField: 'caption',
            path: 'src/content/gallery/*',
            schema: {
                caption: fields.slug({ name: { label: 'Caption' } }),
                date: fields.text({ label: 'Date' }),
                image: fields.text({ label: 'Photo URL' }),
            }
        }),
        specialDays: collection({
            label: 'Special Days',
            slugField: 'title',
            path: 'src/content/special-days/*',
            format: { contentField: 'content' },
            schema: {
                title: fields.slug({ name: { label: 'Title' } }),
                date: fields.text({ label: 'Date (e.g. Nov 7)' }),
                image: fields.text({ label: 'Image URL' }),
                content: fields.document({
                    label: 'Content',
                    formatting: true,
                }),
            }
        }),
        team: collection({
            label: 'Team Members',
            slugField: 'name',
            path: 'src/content/team/*',
            schema: {
                name: fields.slug({ name: { label: 'Name' } }),
                role: fields.text({ label: 'Role' }),
                bio: fields.text({ label: 'Bio', multiline: true }),
                image: fields.text({ label: 'Profile Image URL' }),
            }
        })
    },
    singletons: {
        homepage: singleton({
            label: 'Homepage Settings',
            path: 'src/content/homepage/settings',
            schema: {
                countdownDate: fields.text({
                    label: 'Countdown Target Date (YYYY-MM-DDTHH:mm:ss)',
                    description: 'ISO format, e.g., 2024-12-31T23:59:00',
                    defaultValue: '2024-12-31T23:59:00'
                }),
                countdownLabel: fields.text({ label: 'Countdown Label', defaultValue: 'Next Big Event Starts In' }),
            }
        })
    }
});

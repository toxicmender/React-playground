module.exports = {
    ci: {
        collect: {
            /* Add configuration here */
            // Dynamic site example
            startServerCommand: 'npm run start',
            url: ['http://localhost:3000'],
            numberOfRuns: 5,
        },
        assert: {
            assertions: {
                'categories:performance': ['warn', {minScore: 1}],
                'categories:accessibility': ['error', {minScore: 1}]
            }
        },
        upload: {
            /* Add configuration here */
            target: 'temporary-public-storage',
        },
    },
};
import { defineConfig } from "vitest/config";

export default defineConfig({
    test: {
        reporters: ['html'],
        coverage: {
            reporter:  ['json', 'html', 'lcov', 'text'],
            include:[
                "packages/**/src/**",
            ],
            exclude: [
                "**/lib/**",
                "**/tests/**",
                "**/*.stories.tsx",
                "**/__fixtures__/**",
            ],
        },
    },
});

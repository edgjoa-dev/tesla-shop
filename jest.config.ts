import type { Config } from 'jest'
import nextJest from 'next/jest.js'

// Carga next.config.ts y los archivos .env en el entorno de pruebas
const createJestConfig = nextJest({
    dir: './',
})

const config: Config = {
    // Motor de cobertura
    coverageProvider: 'v8',
    // Simula el navegador
    testEnvironment: 'jsdom',
    // Se ejecuta antes de cada archivo de pruebas
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    // Alias "@/..." apuntando a /src (igual que en tsconfig.json)
    moduleNameMapper: { '^@/(.*)$': '<rootDir>/src/$1' },
    testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
    // Archivos que cuentan para el reporte de cobertura
    collectCoverageFrom: [
        'src/**/*.{ts,tsx}',
        '!src/**/*.d.ts',
        '!src/**/*.test.{ts,tsx}',
        '!src/**/__tests__/**',
        '!src/**/__mocks__/**',
    ],
    coverageDirectory: 'coverage',
    coverageReporters: ['text-summary', 'lcov'],
}

export default createJestConfig(config)
export const LevelsApi = Object.freeze({
    LIST: '/levels',
    SINGLE: (id: string) => `/levels/${id}`,
    INFO:(id: string) => `/levels/${id}/general-info`,
    GEM:(id: string) => `/levels/${id}/gem`,
    GIFT:(id: string) => `/levels/${id}/gift`,
    LICENECE:(id: string) => `/levels/${id}/licenses`,
    PRIZES:(id: string) => `/levels/${id}/prize`,
})
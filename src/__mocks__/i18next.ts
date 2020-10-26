/* eslint-disable @typescript-eslint/no-var-requires */
const { use } = require('i18next')
const i18next: any = jest.genMockFromModule('i18next')
i18next.t = (i: string) => i
i18next.use = use
module.exports = i18next

import type { CodegenConfig } from '@graphql-codegen/cli'
import { Constants } from './src/constants'

const config: CodegenConfig = {
    schema: Constants.System.SCHEMA_PATH,
    emitLegacyCommonJSImports: false,
    generates: {
        'src/types/graphql.ts': {
            plugins: [
                'typescript'
            ],
        },
    }
}

export default config
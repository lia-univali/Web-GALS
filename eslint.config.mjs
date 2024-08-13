import js from "@eslint/js";
import vuePlugin from 'eslint-plugin-vue'
import ts from 'typescript-eslint'

import { includeIgnoreFile } from "@eslint/compat";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const gitignorePath = path.resolve(__dirname, ".gitignore");

export default [
    includeIgnoreFile(gitignorePath),
    js.configs.recommended,
    ...ts.configs.recommended,
    ...vuePlugin.configs['flat/recommended'],
{
    files: ['*.vue','**/*.vue'],
    languageOptions: {
        ecmaVersion: "latest",
        sourceType: "script",
    },
}];
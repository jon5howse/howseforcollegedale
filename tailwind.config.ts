import type { Config } from 'tailwindcss'
const config: Config = { content: ['./app/**/*.{js,ts,jsx,tsx,mdx}','./components/**/*.{js,ts,jsx,tsx,mdx}'], theme: { extend: { colors: { navy:'#182c66', red:'#c5222f', gold:'#f4c542', ink:'#121a2d', mist:'#f4f6fa' }, boxShadow: { soft:'0 20px 50px rgba(18,26,45,.12)' } } }, plugins: [] }
export default config

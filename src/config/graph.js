
import { Chart } from 'chart.js'

export function applyGlobalGraphConfiguration() {
    Chart.defaults.global.elements.line.tension = 0
    Chart.defaults.global.elements.line.fill = false
}
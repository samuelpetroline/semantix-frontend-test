export const transformDataToTimeSeries = (inputData) => {
    if (Array.isArray(inputData)) {
        return inputData.map(({ label, value }) => {
            return {
                x: label,
                y: value
            }
        })
    }

    let transformedLabels = []
    let datasets = []
    for (const key in inputData) {
        const { labels, data } = buildDataset(inputData[key])

        transformedLabels = labels
        datasets.push({
            label: key,
            data
        })
    }

    return {
        labels: transformedLabels,
        datasets
    }
}

function buildDataset(data) {
    const dataPoints = []
    const labels = []

    for (const { label, value } of data) {
        dataPoints.push(value)
        labels.push(label)
    }

    return {
        labels,
        data: dataPoints
    }
}

export const transformDataToCategory = (inputData) => {
    const { labels, data } = buildDataset(inputData)

    return {
        datasets: [{
            data
        }],
        labels
    }
}
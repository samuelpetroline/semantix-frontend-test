const buildDataset = (data) => {
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

export const fillColors = ({ type, colors, datasets, labels }) => {

    for (let index = 0; index < datasets.length; index++) {
        switch (type) {
            case 'line':
                datasets[index].borderColor=colors[index % colors.length]
                continue;

            case 'bar':
                datasets[index].backgroundColor = colors[index % colors.length]
                continue;

            default:
                datasets[index].backgroundColor = []
                for (let dataIndex = 0; dataIndex < datasets[0].data.length; dataIndex++) {
                    datasets[index].backgroundColor.push(colors[dataIndex % colors.length])
                    continue;
                }
                continue;
        }
    }

    return {
        datasets,
        labels
    }
}

export const transformDataToTimeSeries = (inputData, colors) => {
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

export const transformDataToCategory = (inputData) => {
    const { labels, data } = buildDataset(inputData)

    return {
        labels,
        datasets: [{
            data
        }]
    }
}
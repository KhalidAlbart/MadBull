export const getByNumberAction = (number) => {
    return {
        type: 'UPDATE',
        payload: number
    }
}

export const nextAction = () => {
    return {
        type: 'NEXT'
    }
}

export const prevAction = () => {
    return {
        type: 'PREV'
    }
}